#!/usr/bin/env node

import { createHash } from "node:crypto";
import { lookup } from "node:dns/promises";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { isIP } from "node:net";
import path from "node:path";

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { parseDocument } from "yaml";

import {
  ROOT,
  assertValidation,
  todayInRegistryTimeZone,
  validateRegistry,
} from "./lib/registry.mjs";
import { isSideEffectTool } from "./lib/tool-risk.mjs";

const STATE_PATH = path.join(ROOT, "sync", "state.json");
const SUMMARY_PATH = path.join(ROOT, "dist", "sync-summary.json");
const POSSIBLY_BROKEN_THRESHOLD = 7;
const MAX_TOOLS = 500;
const MAX_PAGES = 20;
const REQUEST_TIMEOUT_MS = 30_000;

function emptyState() {
  return {
    version: 1,
    updated_at: null,
    entries: {},
  };
}

async function readState() {
  try {
    const state = JSON.parse(await readFile(STATE_PATH, "utf8"));
    if (!state || typeof state !== "object" || !state.entries) {
      throw new Error("state 格式不正确");
    }
    return state;
  } catch (error) {
    if (error.code === "ENOENT") {
      return emptyState();
    }
    throw new Error(`读取 sync/state.json 失败：${error.message}`);
  }
}

function loadSyncSecrets() {
  const raw = (process.env.MCP_SYNC_SECRETS ?? "").trim();
  if (!raw) {
    return {};
  }

  let secrets;
  try {
    secrets = JSON.parse(raw);
  } catch {
    throw new Error("MCP_SYNC_SECRETS 必须是合法 JSON");
  }

  if (!secrets || Array.isArray(secrets) || typeof secrets !== "object") {
    throw new Error("MCP_SYNC_SECRETS 必须是 JSON 对象");
  }

  return secrets;
}

function entrySecrets(secrets, name) {
  const config = secrets[name];
  if (config === undefined) {
    return {};
  }
  if (!config || Array.isArray(config) || typeof config !== "object") {
    throw new Error(`${name} 的 MCP_SYNC_SECRETS 配置必须是对象`);
  }
  if (
    config.headers !== undefined &&
    (!config.headers ||
      Array.isArray(config.headers) ||
      typeof config.headers !== "object")
  ) {
    throw new Error(`${name} 的 headers 配置必须是对象`);
  }
  if (
    config.variables !== undefined &&
    (!config.variables ||
      Array.isArray(config.variables) ||
      typeof config.variables !== "object")
  ) {
    throw new Error(`${name} 的 variables 配置必须是对象`);
  }
  return config;
}

function secretValues(config) {
  const values = [];
  for (const group of [config.headers, config.variables]) {
    for (const value of Object.values(group ?? {})) {
      if (typeof value === "string" && value) {
        values.push(value);
        const encoded = encodeURIComponent(value);
        if (encoded !== value) {
          values.push(encoded);
        }
      }
    }
  }
  return values;
}

function redact(text, secrets) {
  let output = String(text ?? "");
  for (const secret of secrets) {
    output = output.split(secret).join("[redacted]");
  }
  return output.slice(0, 600);
}

function resolveConnection(entry, config) {
  const headers = {};
  const missing = [];
  const configuredHeaders = config.headers ?? {};
  const configuredVariables = config.variables ?? {};

  const configuredHeader = (name) => {
    if (Object.hasOwn(configuredHeaders, name)) {
      return configuredHeaders[name];
    }
    const key = Object.keys(configuredHeaders).find(
      (candidate) => candidate.toLowerCase() === name.toLowerCase(),
    );
    return key ? configuredHeaders[key] : undefined;
  };

  for (const header of entry.transport.headers ?? []) {
    const value = configuredHeader(header.name);
    if (typeof value === "string" && value.length > 0) {
      headers[header.name] = value;
    } else if (header.required) {
      missing.push(`Header ${header.name}`);
    }
  }

  for (const [name, value] of Object.entries(configuredHeaders)) {
    if (!Object.hasOwn(headers, name) && typeof value === "string" && value) {
      headers[name] = value;
    }
  }

  const variables = {};
  for (const [name, value] of Object.entries(configuredVariables)) {
    if (typeof value === "string" && value) {
      variables[name] = value;
    }
  }

  for (const [name, definition] of Object.entries(
    entry.transport.variables ?? {},
  )) {
    if (!variables[name] && definition.required) {
      missing.push(`URL 变量 ${name}`);
    }
  }

  let url = entry.transport.url;
  for (const [name, value] of Object.entries(variables)) {
    url = url.replaceAll(`{${name}}`, encodeURIComponent(value));
  }

  for (const match of url.matchAll(/\{([A-Za-z_][A-Za-z0-9_]*)\}/g)) {
    missing.push(`URL 变量 ${match[1]}`);
  }

  return {
    url,
    headers,
    missing: [...new Set(missing)],
    configured: Object.keys(headers).length > 0 || Object.keys(variables).length > 0,
  };
}

function privateIpv4(address) {
  const [a, b, c] = address.split(".").map(Number);
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 192 && b === 0 && (c === 0 || c === 2)) ||
    (a === 192 && b === 0 && c === 3) ||
    (a === 198 && (b === 18 || b === 19)) ||
    (a === 198 && b === 51 && c === 100) ||
    (a === 203 && b === 0 && c === 113) ||
    a >= 224
  );
}

function privateIpv6(address) {
  const normalized = address.toLowerCase();
  const mapped = normalized.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (mapped) {
    return privateIpv4(mapped[1]);
  }
  return (
    normalized === "::" ||
    normalized === "::1" ||
    normalized.startsWith("::ffff:") ||
    normalized.startsWith("64:ff9b:") ||
    normalized.startsWith("2002:") ||
    normalized.startsWith("fc") ||
    normalized.startsWith("fd") ||
    /^fe[89ab]/.test(normalized) ||
    normalized.startsWith("ff") ||
    normalized.startsWith("2001:db8")
  );
}

function isPrivateAddress(address) {
  const version = isIP(address);
  if (version === 4) {
    return privateIpv4(address);
  }
  if (version === 6) {
    return privateIpv6(address);
  }
  return true;
}

async function assertPublicHttpsUrl(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new Error("远程 URL 无法解析");
  }

  if (url.protocol !== "https:") {
    throw new Error("远程 URL 必须使用 HTTPS");
  }
  if (url.username || url.password) {
    throw new Error("远程 URL 不能包含用户名或密码");
  }

  const hostname = url.hostname.toLowerCase();
  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".internal") ||
    hostname === "metadata.google.internal"
  ) {
    throw new Error(`拒绝访问内部主机：${hostname}`);
  }

  const addresses = await lookup(hostname, { all: true, verbatim: true });
  if (addresses.length === 0) {
    throw new Error(`无法解析主机：${hostname}`);
  }
  for (const { address } of addresses) {
    if (isPrivateAddress(address)) {
      throw new Error(`拒绝访问私有地址：${hostname} -> ${address}`);
    }
  }
}

function normalizeTools(rawTools) {
  const normalized = [];
  const names = new Set();

  for (const tool of rawTools) {
    if (!tool || typeof tool.name !== "string") {
      continue;
    }
    const name = tool.name.trim();
    if (!/^[A-Za-z0-9_.-]{1,128}$/.test(name)) {
      throw new Error(`工具名不符合 registry schema：${name || "(empty)"}`);
    }
    if (names.has(name)) {
      continue;
    }
    names.add(name);

    const phrase =
      typeof tool.description === "string" ? tool.description.trim() : "";
    const description = Array.from(
      phrase || "No description provided by server.",
    )
      .slice(0, 1000)
      .join("");

    normalized.push({
      name,
      description,
      ...(isSideEffectTool({ name, description, annotations: tool.annotations })
        ? { side_effect: true }
        : {}),
    });
    if (normalized.length >= MAX_TOOLS) {
      console.warn(`工具数量超过 ${MAX_TOOLS}，只保留前 ${MAX_TOOLS} 个。`);
      break;
    }
  }

  return normalized.sort((a, b) => a.name.localeCompare(b.name, "en"));
}

async function fetchTools(entry, connection) {
  await assertPublicHttpsUrl(connection.url);

  const requestInit = {
    headers: connection.headers,
    redirect: "error",
  };
  const transportOptions = { requestInit };
  const transport =
    entry.transport.type === "streamable_http"
      ? new StreamableHTTPClientTransport(new URL(connection.url), transportOptions)
      : new SSEClientTransport(new URL(connection.url), transportOptions);

  const client = new Client(
    { name: "dsh-mcp-center-sync", version: "0.2.0" },
    { capabilities: {} },
  );

  try {
    await client.connect(transport, { timeout: REQUEST_TIMEOUT_MS });

    const tools = [];
    let cursor;
    for (let page = 0; page < MAX_PAGES; page += 1) {
      const result = await client.listTools(
        cursor ? { cursor } : undefined,
        { timeout: REQUEST_TIMEOUT_MS },
      );
      tools.push(...(result.tools ?? []));
      if (!result.nextCursor || tools.length >= MAX_TOOLS) {
        break;
      }
      cursor = result.nextCursor;
    }

    return normalizeTools(tools);
  } finally {
    await client.close().catch(() => {});
  }
}

function errorStatus(error) {
  if (typeof error?.code === "number") {
    return error.code;
  }
  if (typeof error?.status === "number") {
    return error.status;
  }
  const match = String(error?.message ?? "").match(/\b(401|403|404|429)\b/);
  return match ? Number(match[1]) : null;
}

function authRelated(error) {
  const status = errorStatus(error);
  return (
    status === 401 ||
    status === 403 ||
    /unauthori[sz]ed|forbidden|oauth|authentication/i.test(
      String(error?.message ?? ""),
    )
  );
}

function toolHash(tools) {
  return createHash("sha256").update(JSON.stringify(tools)).digest("hex");
}

async function updateEntryTools(entry, tools) {
  const raw = await readFile(entry.__file, "utf8");
  const document = parseDocument(raw, {
    prettyErrors: true,
    strict: true,
    uniqueKeys: true,
  });
  if (document.errors.length > 0) {
    throw new Error(
      `重新解析 YAML 失败：${document.errors.map((error) => error.message).join("; ")}`,
    );
  }

  document.set("tools", tools);
  document.set("last_checked", todayInRegistryTimeZone());
  let output = String(document);
  if (!output.endsWith("\n")) {
    output += "\n";
  }
  await writeFile(entry.__file, output, "utf8");
}

function stateFor(previous, entry, status, details) {
  const previousFailures = previous?.consecutive_failures ?? 0;
  const attemptedAt = new Date().toISOString();
  const today = todayInRegistryTimeZone();
  const alreadyFailedToday = previous?.last_failure_date === today;
  const consecutiveFailures =
    status === "ok"
      ? 0
      : status === "failed"
        ? previousFailures + (alreadyFailedToday ? 0 : 1)
        : previousFailures;

  return {
    display_name: entry.display_name,
    file: path.relative(ROOT, entry.__file).split(path.sep).join("/"),
    status,
    consecutive_failures: consecutiveFailures,
    last_attempt: attemptedAt,
    last_failure_date:
      status === "ok"
        ? null
        : status === "failed"
          ? today
          : (previous?.last_failure_date ?? null),
    last_success:
      status === "ok" ? attemptedAt : (previous?.last_success ?? null),
    last_tools_hash:
      status === "ok" ? details.hash : (previous?.last_tools_hash ?? null),
    last_error: status === "ok" ? null : (details.error ?? null),
    ...(details.reason ? { reason: details.reason } : {}),
  };
}

const result = await validateRegistry();
assertValidation(result);

const secrets = loadSyncSecrets();
const previousState = await readState();
const nextState = emptyState();
const now = new Date().toISOString();
const summary = {
  generated_at: now,
  remote_total: 0,
  stdio_skipped: [],
  ok: [],
  failed: [],
  skipped: [],
  changed: [],
};

const remoteEntries = result.entries.filter(
  (entry) => entry.transport.type !== "stdio",
);
const stdioEntries = result.entries.filter(
  (entry) => entry.transport.type === "stdio",
);

summary.stdio_skipped = stdioEntries.map((entry) => entry.name);
console.log(
  `stdio 型 ${stdioEntries.length} 个：第一版不执行第三方代码，跳过工具抓取（TODO: 沙箱）。`,
);

for (const entry of remoteEntries) {
  summary.remote_total += 1;
  const previous = previousState.entries?.[entry.name];
  const config = entrySecrets(secrets, entry.name);
  const redactions = secretValues(config);
  const connection = resolveConnection(entry, config);

  if (connection.missing.length > 0) {
    const reason = `缺少同步凭据：${connection.missing.join(", ")}`;
    summary.skipped.push({ name: entry.name, reason });
    nextState.entries[entry.name] = stateFor(previous, entry, "skipped", {
      reason,
    });
    console.log(`SKIP ${entry.name}  ${reason}`);
    continue;
  }

  try {
    const tools = await fetchTools(entry, connection);
    const hash = toolHash(tools);
    const changed = JSON.stringify(tools) !== JSON.stringify(entry.tools);

    if (changed) {
      await updateEntryTools(entry, tools);
      summary.changed.push({
        name: entry.name,
        file: path.relative(ROOT, entry.__file).split(path.sep).join("/"),
        tools: tools.length,
      });
    }

    summary.ok.push({ name: entry.name, tools: tools.length, changed });
    nextState.entries[entry.name] = stateFor(previous, entry, "ok", { hash });
    console.log(
      `OK   ${entry.name}  ${tools.length} tools${changed ? "（已更新）" : ""}`,
    );
  } catch (error) {
    const rawMessage = error?.message ?? String(error);
    if (!connection.configured && authRelated(error)) {
      const reason = "服务要求认证，但未配置 MCP_SYNC_SECRETS";
      summary.skipped.push({ name: entry.name, reason });
      nextState.entries[entry.name] = stateFor(previous, entry, "skipped", {
        reason,
      });
      console.log(`SKIP ${entry.name}  ${reason}`);
      continue;
    }

    const message = redact(rawMessage, redactions);
    const failedState = stateFor(previous, entry, "failed", {
      error: message,
    });
    summary.failed.push({
      name: entry.name,
      consecutive_failures: failedState.consecutive_failures,
      error: message,
    });
    nextState.entries[entry.name] = failedState;
    console.log(`FAIL ${entry.name}  ${message}`);
  }
}

nextState.updated_at = new Date().toISOString();
nextState.broken_threshold = POSSIBLY_BROKEN_THRESHOLD;

await mkdir(path.dirname(STATE_PATH), { recursive: true });
await writeFile(
  STATE_PATH,
  `${JSON.stringify(nextState, null, 2)}\n`,
  "utf8",
);
await mkdir(path.dirname(SUMMARY_PATH), { recursive: true });
await writeFile(
  SUMMARY_PATH,
  `${JSON.stringify(summary, null, 2)}\n`,
  "utf8",
);

console.log(
  `同步完成：remote ${summary.remote_total}，成功 ${summary.ok.length}，失败 ${summary.failed.length}，跳过 ${summary.skipped.length}，工具变更 ${summary.changed.length}。`,
);
