/**
 * Minimal stdio MCP bridge for legacy Streamable HTTP servers.
 *
 * Some services only speak MCP 2025-06-18 and reject the 2026-07-28
 * negotiation headers used by newer clients. This bridge exposes a stdio MCP
 * server to DSH and forwards tool traffic with the older protocol version.
 */
import { createInterface } from "node:readline";

const protocol = process.env.MCP_BRIDGE_PROTOCOL || "2025-06-18";
const url = process.env.MCP_BRIDGE_URL;
const headers = JSON.parse(process.env.MCP_BRIDGE_HEADERS || "{}");

if (!url) {
  process.stderr.write("mcp-bridge: MCP_BRIDGE_URL is required\n");
  process.exit(1);
}

let sessionId = "";
let nextId = 1000;
let initialized = false;
let initialization = null;

function output(value) {
  process.stdout.write(`${JSON.stringify(value)}\n`);
}

function fail(id, message, code = -32000) {
  output({ jsonrpc: "2.0", id, error: { code, message } });
}

function parsePayload(text) {
  const trimmed = text.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("{")) return JSON.parse(trimmed);
  const events = trimmed
    .split(/\r?\n/)
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trim())
    .filter(Boolean);
  for (let index = events.length - 1; index >= 0; index -= 1) {
    try {
      const parsed = JSON.parse(events[index]);
      if (parsed && typeof parsed === "object") return parsed;
    } catch {
      // Try the previous event.
    }
  }
  throw new Error("upstream returned an unsupported response");
}

async function upstream(method, params = {}) {
  const requestHeaders = {
    "content-type": "application/json",
    accept: "application/json, text/event-stream",
    "mcp-protocol-version": protocol,
    ...headers,
  };
  if (sessionId) requestHeaders["mcp-session-id"] = sessionId;
  const response = await fetch(url, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: ++nextId,
      method,
      params,
    }),
    signal: AbortSignal.timeout(30_000),
  });
  const nextSession = response.headers.get("mcp-session-id");
  if (nextSession) sessionId = nextSession;
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`upstream HTTP ${response.status}: ${text.slice(0, 300)}`);
  }
  const payload = parsePayload(text);
  if (payload?.error) {
    throw new Error(payload.error.message || `upstream error ${payload.error.code}`);
  }
  return payload?.result ?? {};
}

function ensureInitialized() {
  if (initialized) return Promise.resolve();
  if (initialization) return initialization;
  initialization = upstream("initialize", {
    protocolVersion: protocol,
    capabilities: {},
    clientInfo: { name: "dsh-mcp-center-bridge", version: "1.0.0" },
  })
    .then(() => {
      initialized = true;
    })
    .finally(() => {
      initialization = null;
    });
  return initialization;
}

async function handle(message) {
  const id = message.id;
  const method = message.method;
  if (method === "initialize") {
    output({
      jsonrpc: "2.0",
      id,
      result: {
        protocolVersion: protocol,
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: "dsh-mcp-center-bridge", version: "1.0.0" },
      },
    });
    return;
  }
  if (method === "notifications/initialized") {
    ensureInitialized().catch((error) => process.stderr.write(`mcp-bridge: ${error.message}\n`));
    return;
  }
  if (method === "ping") {
    output({ jsonrpc: "2.0", id, result: {} });
    return;
  }
  try {
    await ensureInitialized();
    if (method === "tools/list") {
      output({ jsonrpc: "2.0", id, result: await upstream("tools/list", message.params ?? {}) });
      return;
    }
    if (method === "tools/call") {
      output({ jsonrpc: "2.0", id, result: await upstream("tools/call", message.params ?? {}) });
      return;
    }
    if (method === "resources/list") {
      output({ jsonrpc: "2.0", id, result: { resources: [] } });
      return;
    }
    if (method === "prompts/list") {
      output({ jsonrpc: "2.0", id, result: { prompts: [] } });
      return;
    }
    fail(id, `unsupported method: ${method}`, -32601);
  } catch (error) {
    fail(id, error instanceof Error ? error.message : String(error));
  }
}

const lines = createInterface({ input: process.stdin, crlfDelay: Infinity });
lines.on("line", (line) => {
  const text = line.trim();
  if (!text) return;
  let message;
  try {
    message = JSON.parse(text);
  } catch {
    process.stderr.write("mcp-bridge: invalid JSON input\n");
    return;
  }
  handle(message).catch((error) => {
    if (message?.id !== undefined) fail(message.id, error.message);
  });
});
