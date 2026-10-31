/**
 * Native MCP connection manager.
 *
 * dsh-mcp-center owns the connection lifecycle itself: it stores connection
 * records, provisions `@deepseek-ai/dsh-mcp-client` loader entries, and reports
 * the resulting tools from the native tool registry. It does not call the
 * dsh-mcp-connector plugin API.
 */
import { randomUUID } from "node:crypto";
import { chmod, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const STORE_VERSION = 1;
const MAX_SNAPSHOTS = 12;
const SERVER_NAME = /^[a-z0-9_-]{1,32}$/;
const HEADER_NAME = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
const ENTRY_PREFIX = "mcp-center";
const BRIDGE_PATH = fileURLToPath(new URL("./mcp-bridge.js", import.meta.url));

function dshHome() {
  return process.env.DSH_HOME || join(homedir(), ".dsh");
}

function profileRoot() {
  return process.env.DSH_PROFILE_DIR || dshHome();
}

function storePath() {
  return join(profileRoot(), "dsh-mcp-center", "connections.json");
}

function legacyStorePath() {
  return join(dshHome(), "storages", "mcp_connector.json");
}

function clone(value) {
  return structuredClone(value);
}

function emptyStore() {
  return {
    version: STORE_VERSION,
    migratedLegacy: false,
    entries: {},
    snapshots: [],
  };
}

export function normalizeServerName(value) {
  const slug = String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^[^a-z0-9]+/, "")
    .replace(/[^a-z0-9]+$/, "")
    .slice(0, 32);
  if (!SERVER_NAME.test(slug)) {
    throw new Error("serverName 不合法（1-32 位小写字母、数字、_ 或 -）");
  }
  return slug;
}

function normalizeHeaders(value) {
  const source =
    typeof value === "string"
      ? JSON.parse(value || "{}")
      : value && typeof value === "object" && !Array.isArray(value)
        ? value
        : {};
  const headers = {};
  for (const [rawName, rawValue] of Object.entries(source)) {
    const name = String(rawName).trim();
    const text = String(rawValue ?? "");
    if (!HEADER_NAME.test(name)) throw new Error(`Header 名称不合法：${name}`);
    if (/[\r\n]/.test(text)) throw new Error(`Header 值不能包含换行：${name}`);
    if (text) headers[name] = text;
  }
  return headers;
}

function normalizeEnv(value) {
  const source =
    typeof value === "string"
      ? JSON.parse(value || "{}")
      : value && typeof value === "object" && !Array.isArray(value)
        ? value
        : {};
  const env = {};
  for (const [rawName, rawValue] of Object.entries(source)) {
    const name = String(rawName).trim();
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) throw new Error(`环境变量名不合法：${name}`);
    env[name] = String(rawValue ?? "");
  }
  return env;
}

function normalizeArgs(value) {
  if (Array.isArray(value)) return value.map((item) => String(item));
  if (typeof value === "string") {
    const text = value.trim();
    if (!text) return [];
    try {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) return parsed.map((item) => String(item));
    } catch {
      // Fall through to whitespace parsing.
    }
    return text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  }
  return [];
}

function normalizeRecord(input, existing) {
  const transport = input.transport === "stdio" ? "stdio" : "streamable-http";
  const serverName = normalizeServerName(input.serverName || existing?.serverName || input.name);
  const name = String(input.name || existing?.name || serverName).trim().slice(0, 80) || serverName;
  const record = {
    key: existing?.key || `custom-${serverName}`,
    name,
    serverName,
    transport,
    enabled: input.enabled !== false,
    injectionMode: input.injectionMode === "session" ? "session" : "always",
    createdAt: existing?.createdAt || Date.now(),
    updatedAt: Date.now(),
  };

  if (transport === "stdio") {
    const command = String(input.command ?? existing?.command ?? "").trim();
    if (!command) throw new Error("stdio 连接必须填写启动命令");
    record.command = command;
    record.args = normalizeArgs(input.args ?? existing?.args ?? []);
    record.env = normalizeEnv(input.envJson ?? input.env ?? existing?.env ?? {});
    const cwd = String(input.cwd ?? existing?.cwd ?? "").trim();
    if (cwd) record.cwd = cwd;
  } else {
    const url = String(input.url ?? existing?.url ?? "").trim();
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      throw new Error("MCP 地址不是合法 URL");
    }
    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("MCP 地址只支持 http/https");
    }
    record.url = parsed.toString();
    record.headers = normalizeHeaders(input.headersJson ?? input.headers ?? existing?.headers ?? {});
    const requestedProtocol = String(
      input.protocolVersion ?? existing?.protocolVersion ?? "",
    ).trim();
    if (requestedProtocol) record.protocolVersion = requestedProtocol;
  }
  return record;
}

function isLegacyBridge(record) {
  if (record.transport !== "streamable-http") return false;
  if (record.protocolVersion === "2025-06-18") return true;
  try {
    return /(^|\.)lkcoffee\.com$/i.test(new URL(record.url).hostname);
  } catch {
    return false;
  }
}

function legacyRecord(record) {
  return normalizeRecord({
    ...record,
    name: record.name,
    serverName: record.serverName,
    transport: record.transport,
    enabled: record.enabled,
    injectionMode: record.injectionMode,
  });
}

async function loadStore() {
  try {
    const parsed = JSON.parse(await readFile(storePath(), "utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return emptyStore();
    return {
      version: STORE_VERSION,
      migratedLegacy: parsed.migratedLegacy === true,
      entries:
        parsed.entries && typeof parsed.entries === "object" && !Array.isArray(parsed.entries)
          ? parsed.entries
          : {},
      snapshots: Array.isArray(parsed.snapshots) ? parsed.snapshots.slice(0, MAX_SNAPSHOTS) : [],
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
    // Windows uses the profile ACL.
  }
  const target = storePath();
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(store, null, 2)}\n`, {
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

async function migrateLegacyStore(store) {
  if (store.migratedLegacy || Object.keys(store.entries).length > 0) return false;
  try {
    const legacy = JSON.parse(await readFile(legacyStorePath(), "utf8"));
    const table = legacy?.tables?.connections;
    const source = table?.value ?? table;
    if (!source || typeof source !== "object" || Array.isArray(source)) return false;
    let changed = false;
    for (const value of Object.values(source)) {
      if (!value || typeof value !== "object") continue;
      try {
        const record = legacyRecord(value);
        store.entries[record.key] = record;
        changed = true;
      } catch {
        // Ignore one malformed legacy record; keep importing the rest.
      }
    }
    return changed;
  } catch {
    return false;
  }
}

function entryCandidates(record) {
  return [`mcp-${record.key}`, `${ENTRY_PREFIX}-${record.key}`];
}

function resolveEntry(ctx, record) {
  for (const id of entryCandidates(record)) {
    try {
      const entry = ctx.loader.resolve(id);
      if (entry) return { id, entry };
    } catch {
      // Try the next historical id.
    }
  }
  return null;
}

function entryConfig(record) {
  if (record.transport === "stdio") {
    return {
      transport: "stdio",
      serverName: record.serverName,
      command: record.command,
      args: record.args ?? [],
      env: record.env ?? {},
      ...(record.cwd ? { cwd: record.cwd } : {}),
      failOnStartupError: false,
    };
  }
  if (isLegacyBridge(record)) {
    return {
      transport: "stdio",
      serverName: record.serverName,
      command: process.execPath,
      args: [BRIDGE_PATH],
      env: {
        ...(process.versions?.electron ? { ELECTRON_RUN_AS_NODE: "1" } : {}),
        MCP_BRIDGE_URL: record.url,
        MCP_BRIDGE_HEADERS: JSON.stringify(record.headers ?? {}),
        MCP_BRIDGE_PROTOCOL: "2025-06-18",
      },
      failOnStartupError: false,
    };
  }
  return {
    transport: "streamable-http",
    serverName: record.serverName,
    url: record.url,
    headers: record.headers ?? {},
    failOnStartupError: false,
  };
}

async function provision(ctx, record) {
  const found = resolveEntry(ctx, record);
  const config = entryConfig(record);
  const disabled = record.enabled === false;
  if (found) {
    await ctx.loader.update(found.id, { config, disabled });
    await ctx.loader.await?.();
    return found.id;
  }
  const id = `${ENTRY_PREFIX}-${record.key}`;
  await ctx.loader.create({
    id,
    name: "@deepseek-ai/dsh-mcp-client",
    config,
    disabled,
  });
  await ctx.loader.await?.();
  return id;
}

async function removeEntry(ctx, record) {
  for (const id of entryCandidates(record)) {
    try {
      if (ctx.loader.resolve(id)) await ctx.loader.remove(id);
    } catch {
      // Entry already gone.
    }
  }
  await ctx.loader.await?.();
}

function allSchemas(ctx) {
  try {
    const schemas = ctx.tools?.schemas?.();
    return Array.isArray(schemas) ? schemas : [];
  } catch {
    return [];
  }
}

function toolsForRecord(ctx, record) {
  const prefix = `mcp__${record.serverName}__`;
  return allSchemas(ctx)
    .filter((schema) => typeof schema?.name === "string" && schema.name.startsWith(prefix))
    .map((schema) => ({
      name: schema.name.slice(prefix.length),
      description: schema.description || "",
    }));
}

function publicRecord(ctx, record) {
  const found = resolveEntry(ctx, record);
  const tools = found ? toolsForRecord(ctx, record) : [];
  const connectionState =
    record.enabled === false
      ? "disabled"
      : found
        ? tools.length > 0
          ? "healthy"
          : "unknown"
        : "disconnected";
  return {
    key: record.key,
    connectorId: record.key,
    name: record.name,
    serverName: record.serverName,
    transport: record.transport,
    ...(record.url ? { url: record.url } : {}),
    enabled: record.enabled !== false,
    injectionMode: record.injectionMode || "always",
    canRename: true,
    connectionState,
    toolsAvailable: tools.length > 0,
    cachedToolCount: tools.length,
    cachedTools: tools,
    updatedAt: record.updatedAt,
  };
}

function snapshotSummary(snapshot) {
  return {
    id: snapshot.id,
    reason: snapshot.reason,
    createdAt: snapshot.createdAt,
    existingCount: Object.keys(snapshot.entries ?? {}).length,
    absentCount: 0,
    restorable: true,
  };
}

export async function createMcpManager(ctx, logger = console) {
  const store = await loadStore();
  const wasMigrated = store.migratedLegacy;
  const migrated = wasMigrated ? false : await migrateLegacyStore(store);
  store.migratedLegacy = true;
  if (migrated || !wasMigrated) await saveStore(store);

  async function syncAll() {
    for (const record of Object.values(store.entries)) {
      try {
        await provision(ctx, record);
      } catch (error) {
        logger.warn?.(`MCP ${record.name}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  await syncAll();

  function findRecord(key) {
    return store.entries[String(key ?? "")] || null;
  }

  async function configure(params = {}) {
    const serverName = normalizeServerName(params.serverName || params.name);
    const existing =
      Object.values(store.entries).find((record) => record.serverName === serverName) || null;
    const record = normalizeRecord(params, existing);
    store.entries[record.key] = record;
    await saveStore(store);
    await provision(ctx, record);
    return {
      ok: true,
      message: `已安装并连接 ${record.name}`,
      detail: {
        key: record.key,
        serverName: record.serverName,
        tools: toolsForRecord(ctx, record).length,
      },
    };
  }

  async function reconfigure(params = {}) {
    const existing = findRecord(params.key);
    if (!existing) return { ok: false, message: "连接不存在" };
    let parsed;
    try {
      parsed = JSON.parse(String(params.json ?? "{}"));
    } catch {
      return { ok: false, message: "连接配置不是合法 JSON" };
    }
    const source =
      parsed?.mcpServers && typeof parsed.mcpServers === "object"
        ? Object.values(parsed.mcpServers)[0] || {}
        : parsed;
    const record = normalizeRecord(
      {
        ...source,
        name: existing.name,
        serverName: existing.serverName,
        enabled: existing.enabled,
        injectionMode: existing.injectionMode,
        transport: source.type === "stdio" || source.command ? "stdio" : "streamable-http",
      },
      existing,
    );
    store.entries[record.key] = record;
    await saveStore(store);
    await provision(ctx, record);
    return { ok: true, message: "连接配置已更新" };
  }

  async function status() {
    const items = Object.values(store.entries)
      .map((record) => publicRecord(ctx, record))
      .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
    return {
      ok: true,
      message: `共 ${items.length} 个本机连接`,
      detail: {
        items,
        healthy: items.filter((item) => item.connectionState === "healthy").length,
        attention: items.filter((item) => item.enabled && item.connectionState !== "healthy").length,
      },
    };
  }

  async function toolsList(params = {}) {
    const key = params.connectionKey || params.connectorId;
    const record = findRecord(key);
    const records = record ? [record] : Object.values(store.entries);
    const servers = records.map((item) => ({
      serverName: item.serverName,
      tools: toolsForRecord(ctx, item),
    }));
    return {
      ok: true,
      detail: {
        totalTools: servers.reduce((sum, server) => sum + server.tools.length, 0),
        servers,
      },
    };
  }

  async function setEnabled(params = {}) {
    const record = findRecord(params.key);
    if (!record) return { ok: false, message: "连接不存在" };
    record.enabled = params.enabled !== false;
    record.updatedAt = Date.now();
    await saveStore(store);
    await provision(ctx, record);
    return { ok: true, message: record.enabled ? "已启用连接" : "已停用连接" };
  }

  async function reconnect(params = {}) {
    const record = findRecord(params.key);
    if (!record) return { ok: false, message: "连接不存在" };
    await removeEntry(ctx, record);
    await provision(ctx, record);
    return { ok: true, message: "已重新连接" };
  }

  async function disconnect(params = {}) {
    const record = findRecord(params.key);
    if (!record) return { ok: false, message: "连接不存在" };
    await removeEntry(ctx, record);
    delete store.entries[record.key];
    await saveStore(store);
    return { ok: true, message: "连接已删除" };
  }

  async function healthCheck(params = {}) {
    const key = params.key || params.connectorId;
    const records = key ? Object.values(store.entries).filter((record) => record.key === key) : Object.values(store.entries);
    if (records.length === 0) return { ok: false, message: "没有可检查的连接" };
    const failed = records.filter((record) => !resolveEntry(ctx, record));
    if (failed.length > 0) {
      return { ok: false, message: `${failed.length} 个连接未加载` };
    }
    const empty = records.filter((record) => toolsForRecord(ctx, record).length === 0);
    if (empty.length > 0) {
      return {
        ok: false,
        message: `${empty.length} 个连接没有发现工具，可能是凭据失效或服务未完成初始化`,
      };
    }
    const tools = records.reduce((sum, record) => sum + toolsForRecord(ctx, record).length, 0);
    return { ok: true, message: `连接正常，共发现 ${tools} 个工具` };
  }

  async function rename(params = {}) {
    const record = findRecord(params.key);
    if (!record) return { ok: false, message: "连接不存在" };
    const name = String(params.name ?? "").trim().slice(0, 80);
    if (!name) return { ok: false, message: "名称不能为空" };
    record.name = name;
    record.updatedAt = Date.now();
    await saveStore(store);
    return { ok: true, message: "已重命名" };
  }

  async function setInjectionMode(params = {}) {
    const record = findRecord(params.key);
    if (!record) return { ok: false, message: "连接不存在" };
    record.injectionMode = params.mode === "session" ? "session" : "always";
    record.updatedAt = Date.now();
    await saveStore(store);
    return { ok: true, message: "注入模式已更新" };
  }

  async function editableConnectionConfig(params = {}) {
    const record = findRecord(params.key);
    if (!record) return { ok: false, message: "连接不存在" };
    const config =
      record.transport === "stdio"
        ? {
            mcpServers: {
              [record.serverName]: {
                type: "stdio",
                command: record.command,
                args: record.args ?? [],
                env: record.env ?? {},
                ...(record.cwd ? { cwd: record.cwd } : {}),
              },
            },
          }
        : {
            mcpServers: {
              [record.serverName]: {
                type: "streamable-http",
                url: record.url,
                headers: record.headers ?? {},
                ...(record.protocolVersion ? { protocolVersion: record.protocolVersion } : {}),
              },
            },
          };
    return { ok: true, detail: { json: JSON.stringify(config, null, 2) } };
  }

  async function exportConfig() {
    const servers = {};
    for (const record of Object.values(store.entries)) {
      servers[record.serverName] =
        record.transport === "stdio"
          ? {
              type: "stdio",
              command: record.command,
              args: record.args ?? [],
              env: Object.fromEntries(Object.keys(record.env ?? {}).map((name) => [name, "<REDACTED>"])),
            }
          : {
              type: "streamable-http",
              url: record.url,
              headers: Object.fromEntries(Object.keys(record.headers ?? {}).map((name) => [name, "<REDACTED>"])),
              ...(record.protocolVersion ? { protocolVersion: record.protocolVersion } : {}),
            };
    }
    return {
      ok: true,
      detail: {
        json: JSON.stringify(
          {
            mcpServers: servers,
            _dshMcpCenter: {
              version: STORE_VERSION,
              exportedAt: new Date().toISOString(),
              note: "Secrets are redacted. Use the connection editor to change credentials.",
            },
          },
          null,
          2,
        ),
      },
    };
  }

  async function createSnapshot(params = {}) {
    const snapshot = {
      id: randomUUID(),
      reason: String(params.label || "manual").slice(0, 80),
      createdAt: Date.now(),
      entries: clone(store.entries),
    };
    store.snapshots = [snapshot, ...store.snapshots].slice(0, MAX_SNAPSHOTS);
    await saveStore(store);
    return { ok: true, message: "已创建本机快照", detail: snapshotSummary(snapshot) };
  }

  async function listSnapshots() {
    return {
      ok: true,
      detail: {
        items: store.snapshots.map(snapshotSummary),
        persistenceEnabled: true,
      },
    };
  }

  async function previewSnapshot(params = {}) {
    const snapshot = store.snapshots.find((item) => item.id === params.snapshotId);
    if (!snapshot) return { ok: false, message: "快照不存在" };
    return { ok: true, detail: { ...snapshotSummary(snapshot), restorable: true } };
  }

  async function restoreSnapshot(params = {}) {
    const snapshot = store.snapshots.find((item) => item.id === params.snapshotId);
    if (!snapshot) return { ok: false, message: "快照不存在" };
    for (const record of Object.values(store.entries)) {
      await removeEntry(ctx, record).catch(() => {});
    }
    store.entries = clone(snapshot.entries);
    await saveStore(store);
    await syncAll();
    return { ok: true, message: "已恢复本机快照" };
  }

  async function catalog() {
    return {
      ok: true,
      detail: {
        items: [],
        note: "Native manager uses the online market catalog directly.",
      },
    };
  }

  async function refreshCatalog() {
    return { ok: true, message: "已刷新本机连接状态" };
  }

  return {
    configure,
    reconfigure,
    reconfigureConnection: reconfigure,
    status,
    toolsList,
    setEnabled,
    reconnect,
    disconnect,
    healthCheck,
    rename,
    renameConnection: rename,
    setInjectionMode,
    editableConnectionConfig,
    exportConfig,
    createSnapshot,
    listSnapshots,
    previewSnapshot,
    restoreSnapshot,
    catalog,
    refreshCatalog,
    syncAll,
  };
}
