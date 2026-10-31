#!/usr/bin/env node

/**
 * Build the native DSH plugin's client bundle from the same registry index
 * used by the website. The plugin embeds a snapshot so it works without
 * network access; it does not embed the website or an iframe.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { ROOT } from "./lib/registry.mjs";

const INDEX_PATH = path.join(ROOT, "web", "src", "data", "index.json");
const ICON_MANIFEST = path.join(ROOT, "web", "public", "icons", "icons.json");
const PLUGIN_DIR = path.join(ROOT, "dsh-plugin");
const TEMPLATE_PATH = path.join(PLUGIN_DIR, "src", "client.template.js");
const CLIENT_PATH = path.join(PLUGIN_DIR, "client.js");
const CATALOG_PATH = path.join(PLUGIN_DIR, "catalog.json");

const SITE_ORIGIN =
  process.env.PLUGIN_SITE_ORIGIN || "https://bai-2008.github.io";
const SITE_BASE = process.env.PLUGIN_SITE_BASE || "/dsh-mcp-center/";
const REPO_URL =
  process.env.PLUGIN_REPO_URL ||
  "https://github.com/Bai-2008/dsh-mcp-center";

const MIME = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function normalizeBase(value) {
  const base = value || "/";
  return `/${base.replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
}

async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function iconDataUri(manifest, name) {
  const icon = manifest?.icons?.[name];
  if (!icon?.path) {
    return "";
  }
  const file = path.join(ROOT, "web", "public", icon.path);
  try {
    const bytes = await readFile(file);
    const mime = MIME[path.extname(file).toLowerCase()] || "application/octet-stream";
    return `data:${mime};base64,${bytes.toString("base64")}`;
  } catch {
    return "";
  }
}

const index = await readJson(INDEX_PATH);
const icons = await readJson(ICON_MANIFEST).catch(() => ({ icons: {} }));
const template = await readFile(TEMPLATE_PATH, "utf8");
const zh = await readJson(path.join(PLUGIN_DIR, "locale", "zh.json"));
const en = await readJson(path.join(PLUGIN_DIR, "locale", "en.json"));

const site = {
  origin: SITE_ORIGIN.replace(/\/+$/, ""),
  base: normalizeBase(SITE_BASE),
  repo_url: REPO_URL.replace(/\/+$/, ""),
};

const entries = [];
for (const entry of index.entries) {
  entries.push({
    name: entry.name,
    display_name: entry.display_name,
    description: entry.description,
    vendor: entry.vendor,
    categories: entry.categories,
    official: entry.official,
    verified: entry.verified,
    homepage: entry.homepage,
    repository: entry.repository ?? null,
    license: entry.license,
    transport: entry.transport,
    tools: entry.tools,
    last_checked: entry.last_checked,
    possibly_broken: entry.possibly_broken,
    auth_note: entry.auth_note,
    detail_path: entry.detail_path,
    install: entry.install,
    credentials: entry.credentials,
    iconData: await iconDataUri(icons, entry.name),
  });
}

const pluginData = {
  generated_at: index.generated_at,
  count: entries.length,
  site,
  categories: index.facets.categories,
  entries,
};

const catalog = {
  generated_at: index.generated_at,
  site,
  count: entries.length,
  categories: index.facets.categories,
  entries: entries.map(({ iconData, ...entry }) => entry),
};

const dictionaries = { zh, en };
const client = template
  .replace("__PLUGIN_DATA__", () => JSON.stringify(pluginData))
  .replace("__PLUGIN_DICTIONARIES__", () => JSON.stringify(dictionaries));

await mkdir(PLUGIN_DIR, { recursive: true });
await writeFile(CLIENT_PATH, client, "utf8");
await writeFile(CATALOG_PATH, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");

console.log(
  `已生成 dsh-plugin/client.js：${entries.length} 个条目，${(
    Buffer.byteLength(client) / 1024
  ).toFixed(1)} KiB。`,
);
console.log(`站点：${site.origin}${site.base}`);
