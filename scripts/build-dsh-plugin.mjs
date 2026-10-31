#!/usr/bin/env node

/**
 * Build the native DSH plugin's client bundle.
 *
 * The catalog is loaded at runtime through the Host proxy and is deliberately
 * not embedded here. Keep this bundle small and let the online catalog be the
 * single source of MCP entries and install data.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { ROOT } from "./lib/registry.mjs";

const PLUGIN_DIR = path.join(ROOT, "dsh-plugin");
const TEMPLATE_PATH = path.join(PLUGIN_DIR, "src", "client.template.js");
const CLIENT_PATH = path.join(PLUGIN_DIR, "client.js");

const SITE_ORIGIN =
  process.env.PLUGIN_SITE_ORIGIN || "https://bai-2008.github.io";
const SITE_BASE = process.env.PLUGIN_SITE_BASE || "/dsh-mcp-center/";
const REPO_URL =
  process.env.PLUGIN_REPO_URL ||
  "https://github.com/Bai-2008/dsh-mcp-center";

function normalizeBase(value) {
  const base = value || "/";
  return `/${base.replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
}

async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

const template = await readFile(TEMPLATE_PATH, "utf8");
const zh = await readJson(path.join(PLUGIN_DIR, "locale", "zh.json"));
const en = await readJson(path.join(PLUGIN_DIR, "locale", "en.json"));

const pluginData = {
  generated_at: "",
  count: 0,
  site: {
    origin: SITE_ORIGIN.replace(/\/+$/, ""),
    base: normalizeBase(SITE_BASE),
    repo_url: REPO_URL.replace(/\/+$/, ""),
  },
  categories: [],
  entries: [],
};

const dictionaries = { zh, en };
const client = template
  .replace("__PLUGIN_DATA__", () => JSON.stringify(pluginData))
  .replace("__PLUGIN_DICTIONARIES__", () => JSON.stringify(dictionaries));

await mkdir(PLUGIN_DIR, { recursive: true });
await writeFile(CLIENT_PATH, client, "utf8");

console.log(
  `已生成 dsh-plugin/client.js：无内置目录，${(
    Buffer.byteLength(client) / 1024
  ).toFixed(1)} KiB。`,
);
console.log(`站点：${pluginData.site.origin}${pluginData.site.base}`);
