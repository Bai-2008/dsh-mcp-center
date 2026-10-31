/**
 * Host half: native MCP lifecycle, online catalog proxy, and local credential
 * mirror for dsh-mcp-center. MCP connections are provisioned directly through
 * @deepseek-ai/dsh-mcp-client; no separate connector plugin is required.
 */
import { chmod, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { homedir } from "node:os";
import { createMcpManager } from "./mcp-manager.js";

const ROUTE = "/dsh-mcp-center/api/credentials";
const CATALOG_ROUTE = "/dsh-mcp-center/api/catalog";
const MCP_ROUTE = "/dsh-mcp-center/api/mcp";

export const inject = ["loader", "tools"];
const CATALOG_RAW =
  "https://raw.githubusercontent.com/Bai-2008/dsh-mcp-center/main/catalog/index.json";
const CATALOG_SOURCES = process.env.DSH_MCP_CENTER_CATALOG_URL
  ? [{ name: "自定义", url: process.env.DSH_MCP_CENTER_CATALOG_URL }]
  : [
      {
        name: "GitHub Pages",
        url: "https://bai-2008.github.io/dsh-mcp-center/index.json",
      },
      { name: "GitHub raw", url: CATALOG_RAW },
      { name: "gh-proxy", url: `https://gh-proxy.com/${CATALOG_RAW}` },
      { name: "ghproxy.net", url: `https://ghproxy.net/${CATALOG_RAW}` },
      { name: "ghfast.top", url: `https://ghfast.top/${CATALOG_RAW}` },
      { name: "moeyy", url: `https://github.moeyy.xyz/${CATALOG_RAW}` },
      { name: "llkk", url: `https://gh.llkk.cc/${CATALOG_RAW}` },
    ];
const CATALOG_TTL = 5 * 60 * 1000;
const SERVER_NAME = /^[a-z0-9_-]{1,63}$/;
const RESERVED_NAMES = new Set(["__proto__", "constructor", "prototype"]);
const MAX_BODY = 256 * 1024;

function profileRoot() {
  return (
    process.env.DSH_PROFILE_DIR ||
    process.env.DSH_HOME ||
    join(homedir(), ".dsh")
  );
}

function storePath() {
  return join(profileRoot(), "dsh-mcp-center", "credentials.json");
}

function emptyStore() {
  return { version: 1, entries: {} };
}

async function loadStore() {
  try {
    const raw = await readFile(storePath(), "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return emptyStore();
    }
    return {
      version: 1,
      entries:
        parsed.entries && typeof parsed.entries === "object" && !Array.isArray(parsed.entries)
          ? parsed.entries
          : {},
    };
  } catch {
    return emptyStore();
  }
}

async function saveStore(store) {
  const directory = join(profileRoot(), "dsh-mcp-center");
  await mkdir(directory, { recursive: true, mode: 0o700 });
  try {
    await chmod(directory, 0o700);
  } catch {
    // Windows does not apply POSIX modes; the profile directory ACL applies.
  }
  const target = storePath();
  const temporary = `${target}.${process.pid}.tmp`;
  const body = `${JSON.stringify(store, null, 2)}\n`;
  await writeFile(temporary, body, { encoding: "utf8", mode: 0o600 });
  try {
    await rename(temporary, target);
  } catch {
    await rm(target, { force: true });
    await rename(temporary, target);
  }
}

function writeJson(res, status, value) {
  const body = JSON.stringify(value);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    "referrer-policy": "no-referrer",
    "content-length": Buffer.byteLength(body),
  });
  res.end(body);
}

async function readJsonBody(req) {
  const chunks = [];
  let length = 0;
  for await (const chunk of req) {
    length += chunk.length;
    if (length > MAX_BODY) throw new Error("请求体过大");
    chunks.push(chunk);
  }
  const text = Buffer.concat(chunks).toString("utf8");
  if (!text.trim()) return {};
  return JSON.parse(text);
}

function requestHost(req) {
  const raw = req.headers?.host;
  if (typeof raw !== "string" || raw.length === 0) return null;
  try {
    const url = new URL(`http://${raw}`);
    const hostname = url.hostname.toLowerCase();
    const loopback =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1" ||
      hostname === "0:0:0:0:0:0:0:1" ||
      hostname.endsWith(".localhost");
    if (!loopback) return null;
    return url;
  } catch {
    return null;
  }
}

/** Same-origin browser fence in addition to the Web server's own auth. */
function trustedRequest(req) {
  const host = requestHost(req);
  if (!host) return false;
  if (req.headers?.["sec-fetch-site"] === "cross-site") return false;
  const origin = req.headers?.origin;
  if (origin === undefined) return true;
  try {
    return new URL(origin).host === host.host;
  } catch {
    return false;
  }
}

function validServerName(value) {
  return SERVER_NAME.test(value) && !RESERVED_NAMES.has(value);
}

function cleanField(field) {
  if (!field || typeof field !== "object" || Array.isArray(field)) return null;
  const key = String(field.key ?? "").trim().slice(0, 160);
  if (!key) return null;
  return {
    key,
    label: String(field.label ?? key).trim().slice(0, 160),
    kind: String(field.kind ?? "").trim().slice(0, 80),
    secret: field.secret === true,
    value: String(field.value ?? ""),
  };
}

async function handle(req, res) {
  if (!trustedRequest(req)) {
    writeJson(res, 403, { ok: false, message: "forbidden" });
    return;
  }

  try {
    if (req.method === "GET") {
      const url = new URL(req.url ?? "/", "http://localhost");
      const serverName = url.searchParams.get("serverName") ?? "";
      const store = await loadStore();
      if (serverName) {
        if (!validServerName(serverName)) {
          writeJson(res, 400, { ok: false, message: "serverName 不合法" });
          return;
        }
        const entry = store.entries[serverName];
        if (!entry) {
          writeJson(res, 404, { ok: false, message: "没有保存过这个连接的凭据副本" });
          return;
        }
        writeJson(res, 200, { ok: true, entry });
        return;
      }
      writeJson(res, 200, {
        ok: true,
        entries: Object.values(store.entries).map((entry) => ({
          serverName: entry.serverName,
          label: entry.label,
          updatedAt: entry.updatedAt,
          fieldCount: Array.isArray(entry.fields) ? entry.fields.length : 0,
        })),
      });
      return;
    }

    if (req.method === "POST") {
      const body = await readJsonBody(req);
      const serverName = String(body.serverName ?? "").trim();
      if (!validServerName(serverName)) {
        writeJson(res, 400, { ok: false, message: "serverName 不合法" });
        return;
      }
      const fields = Array.isArray(body.fields)
        ? body.fields.map(cleanField).filter(Boolean).slice(0, 32)
        : [];
      const store = await loadStore();
      const entry = {
        serverName,
        label: String(body.label ?? serverName).trim().slice(0, 80) || serverName,
        updatedAt: Date.now(),
        fields,
      };
      store.entries[serverName] = entry;
      await saveStore(store);
      writeJson(res, 200, { ok: true, entry });
      return;
    }

    if (req.method === "DELETE") {
      const body = await readJsonBody(req);
      const serverName = String(body.serverName ?? "").trim();
      if (!validServerName(serverName)) {
        writeJson(res, 400, { ok: false, message: "serverName 不合法" });
        return;
      }
      const store = await loadStore();
      delete store.entries[serverName];
      await saveStore(store);
      writeJson(res, 200, { ok: true });
      return;
    }

    res.writeHead(405, { allow: "GET, POST, DELETE" });
    res.end();
  } catch (error) {
    writeJson(res, 400, {
      ok: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

function catalogCachePath() {
  return join(profileRoot(), "dsh-mcp-center", "catalog-cache.json");
}

async function loadCatalogCache() {
  try {
    const parsed = JSON.parse(await readFile(catalogCachePath(), "utf8"));
    if (!parsed || typeof parsed !== "object" || !parsed.data) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function saveCatalogCache(cache) {
  const directory = join(profileRoot(), "dsh-mcp-center");
  await mkdir(directory, { recursive: true, mode: 0o700 });
  const target = catalogCachePath();
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(cache, null, 2)}\n`, {
    encoding: "utf8",
    mode: 0o600,
  });
  try {
    await rename(temporary, target);
  } catch {
    await rm(target, { force: true });
    await rename(temporary, target);
  }
}

function validCatalog(data) {
  return (
    data &&
    typeof data === "object" &&
    !Array.isArray(data) &&
    Array.isArray(data.entries) &&
    data.entries.length > 0 &&
    data.site &&
    typeof data.site.origin === "string"
  );
}

async function fetchCatalogSource(source) {
  const response = await fetch(source.url, {
    headers: {
      accept: "application/json",
      "user-agent": "dsh-mcp-center/0.7.0",
    },
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) throw new Error(`${source.name}: HTTP ${response.status}`);
  const text = await response.text();
  if (text.length > 8 * 1024 * 1024) {
    throw new Error(`${source.name}: 目录数据超过 8 MiB`);
  }
  const data = JSON.parse(text);
  if (!validCatalog(data)) {
    throw new Error(`${source.name}: 目录数据缺少 entries/site`);
  }
  return { data, sourceName: source.name, sourceUrl: source.url };
}

async function fetchCatalog(force = false) {
  const cache = await loadCatalogCache();
  const now = Date.now();
  if (
    !force &&
    cache &&
    typeof cache.fetchedAt === "number" &&
    now - cache.fetchedAt < CATALOG_TTL
  ) {
    return {
      data: cache.data,
      fetchedAt: cache.fetchedAt,
      cached: true,
      stale: false,
      sourceName: cache.sourceName || "本地缓存",
      sourceUrl: cache.sourceUrl,
    };
  }

  try {
    const winner = await Promise.any(
      CATALOG_SOURCES.map((source) => fetchCatalogSource(source)),
    );
    const saved = {
      version: 1,
      fetchedAt: now,
      sourceName: winner.sourceName,
      sourceUrl: winner.sourceUrl,
      data: winner.data,
    };
    await saveCatalogCache(saved);
    return {
      data: winner.data,
      fetchedAt: now,
      cached: false,
      stale: false,
      sourceName: winner.sourceName,
      sourceUrl: winner.sourceUrl,
    };
  } catch (error) {
    if (cache) {
      return {
        data: cache.data,
        fetchedAt: cache.fetchedAt,
        cached: true,
        stale: true,
        sourceName: cache.sourceName || "本地缓存",
        sourceUrl: cache.sourceUrl,
        message:
          error instanceof Error
            ? error.message
            : "所有在线目录源均不可用，已使用本地缓存",
      };
    }
    throw new Error("所有在线目录源均不可用");
  }
}

async function handleCatalog(req, res) {
  if (!trustedRequest(req)) {
    writeJson(res, 403, { ok: false, message: "forbidden" });
    return;
  }
  if (req.method !== "GET") {
    res.writeHead(405, { allow: "GET" });
    res.end();
    return;
  }
  try {
    const url = new URL(req.url ?? "/", "http://localhost");
    const result = await fetchCatalog(url.searchParams.get("refresh") === "1");
    writeJson(res, 200, { ok: true, ...result });
  } catch (error) {
    writeJson(res, 502, {
      ok: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

async function handleMcp(req, res, manager) {
  if (!trustedRequest(req)) {
    writeJson(res, 403, { ok: false, message: "forbidden" });
    return;
  }
  if (req.method !== "POST") {
    res.writeHead(405, { allow: "POST" });
    res.end();
    return;
  }
  const allowed = new Set([
    "status",
    "toolsList",
    "configure",
    "reconfigureConnection",
    "editableConnectionConfig",
    "disconnect",
    "renameConnection",
    "setInjectionMode",
    "setEnabled",
    "reconnect",
    "healthCheck",
    "exportConfig",
    "listSnapshots",
    "createSnapshot",
    "previewSnapshot",
    "restoreSnapshot",
    "catalog",
    "refreshCatalog",
    "connect",
  ]);
  try {
    const body = await readJsonBody(req);
    const method = String(body.method ?? "");
    if (!allowed.has(method)) {
      writeJson(res, 404, { ok: false, message: `unknown method: ${method}` });
      return;
    }
    if (method === "connect") {
      writeJson(res, 400, {
        ok: false,
        message: "该服务需要手动填写凭据或使用支持 OAuth 的客户端。",
      });
      return;
    }
    const result = await manager[method](body.params ?? {});
    writeJson(res, 200, result);
  } catch (error) {
    writeJson(res, 400, {
      ok: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

function warnRouteFailure(ctx, error) {
  try {
    ctx.logger?.warn?.(
      `dsh-mcp-center: local API unavailable: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  } catch {
    // Logging must never take down the plugin.
  }
}

export function apply(ctx) {
  try {
    ctx.inject(["webServer", "loader", "tools"], async (webContext) => {
      let manager;
      try {
        manager = await createMcpManager(webContext, {
          warn: (message) => console.warn(`[dsh-mcp-center] ${message}`),
        });
      } catch (error) {
        warnRouteFailure(ctx, error);
        return;
      }
      try {
        webContext.effect(() => {
          const disposeCredentials = webContext.webServer.register({
            kind: "prefix",
            path: ROUTE,
            handler: handle,
          });
          const disposeCatalog = webContext.webServer.register({
            kind: "prefix",
            path: CATALOG_ROUTE,
            handler: handleCatalog,
          });
          const disposeMcp = webContext.webServer.register({
            kind: "prefix",
            path: MCP_ROUTE,
            handler: (req, res) => handleMcp(req, res, manager),
          });
          return () => {
            disposeMcp();
            disposeCatalog();
            disposeCredentials();
          };
        });
      } catch (error) {
        warnRouteFailure(ctx, error);
      }
    });
  } catch (error) {
    warnRouteFailure(ctx, error);
  }
}
