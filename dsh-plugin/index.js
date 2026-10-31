/**
 * Host half: a local credential mirror for the native MCP market.
 *
 * The MCP connector deliberately never returns plaintext headers/tokens to a
 * browser page. The market keeps its own copy only after the user submitted a
 * credential in this plugin, so the edit dialog can show what was entered.
 * The file lives under the current DSH profile and is never uploaded.
 */
import { chmod, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { homedir } from "node:os";

const ROUTE = "/dsh-mcp-center/api/credentials";
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

export function apply(ctx) {
  ctx.inject(["webServer"], (webContext) => {
    webContext.effect(() => {
      const dispose = webContext.webServer.register({
        kind: "prefix",
        path: ROUTE,
        handler: handle,
      });
      return () => dispose();
    });
  });
}
