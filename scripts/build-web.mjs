#!/usr/bin/env node

import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  ROOT,
  SCHEMA_PATH,
  assertValidation,
  validateRegistry,
} from "./lib/registry.mjs";
import {
  buildAuthNote,
  buildCredentials,
  buildInstallConfigs,
} from "./lib/install-config.mjs";
import { isSideEffectTool } from "./lib/tool-risk.mjs";

const WEB_DIR = path.join(ROOT, "web");
const PUBLIC_DIR = path.join(WEB_DIR, "public");
const DATA_DIR = path.join(WEB_DIR, "src", "data");
const DIST_DIR = path.join(ROOT, "dist");
const CATALOG_DIR = path.join(ROOT, "catalog");
const ICON_MANIFEST = path.join(PUBLIC_DIR, "icons", "icons.json");
const SYNC_STATE = path.join(ROOT, "sync", "state.json");

const CATEGORY_ORDER = [
  "餐饮",
  "出行",
  "生活服务",
  "办公",
  "开发工具",
  "数据库",
  "搜索",
  "AI",
  "其他",
];

function slugFor(name) {
  return name.replaceAll("/", "__");
}

function normalizeBase(value) {
  const base = value || "/";
  return `/${base.replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
}

function normalizeOrigin(value) {
  return (value || "http://localhost:4321").replace(/\/+$/, "");
}

async function readJson(file, fallback = null) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return fallback;
  }
}

const registry = await validateRegistry();
assertValidation(registry);

const iconManifest = await readJson(ICON_MANIFEST);
if (!iconManifest?.icons) {
  throw new Error(
    "缺少 web/public/icons/icons.json。请先运行 npm run icons 或 npm run build:web。",
  );
}

const state = (await readJson(SYNC_STATE)) ?? { entries: {} };
const brokenThreshold = state.broken_threshold ?? 7;
const generatedAt = new Date().toISOString();
const origin = normalizeOrigin(process.env.SITE_ORIGIN);
const base = normalizeBase(process.env.SITE_BASE);
const repoUrl =
  process.env.SITE_REPO_URL ||
  (process.env.GITHUB_REPOSITORY
    ? `https://github.com/${process.env.GITHUB_REPOSITORY}`
    : null);
const cleanRepoUrl = repoUrl?.replace(/\/+$/, "") ?? null;
const submitUrl = cleanRepoUrl
  ? `${cleanRepoUrl}/issues/new?template=submit-server.yml`
  : null;

const entries = registry.entries
  .map((entry) => {
    const { __file, $schema, ...clean } = entry;
    const slug = slugFor(entry.name);
    const icon = iconManifest.icons[entry.name];
    if (!icon?.path) {
      throw new Error(`缺少 ${entry.name} 的图标清单`);
    }

    const health = state.entries?.[entry.name];
    const enriched = {
      ...clean,
      verified: true,
      slug,
      icon: icon.path,
      detail_path: `servers/${slug}/`,
      tools: clean.tools.map((tool) => ({
        ...tool,
        side_effect: isSideEffectTool(tool),
      })),
      possibly_broken:
        (health?.consecutive_failures ?? 0) >= brokenThreshold,
      health: health
        ? {
            status: health.status ?? "unknown",
            consecutive_failures: health.consecutive_failures ?? 0,
            last_success: health.last_success ?? null,
          }
        : null,
    };

    return {
      ...enriched,
      install: buildInstallConfigs(enriched),
      credentials: buildCredentials(enriched),
      auth_note: buildAuthNote(enriched),
    };
  })
  .sort((a, b) => {
    if (a.official !== b.official) {
      return a.official ? -1 : 1;
    }
    return a.display_name.localeCompare(b.display_name, "zh-CN");
  });

const categoryCounts = new Map(
  CATEGORY_ORDER.map((category) => [category, 0]),
);
const tagCounts = new Map();
for (const entry of entries) {
  for (const category of entry.categories) {
    categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
  }
  for (const tag of entry.tags) {
    tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  }
}

const index = {
  schema_version: "1.0.0",
  generated_at: generatedAt,
  site: {
    name: "MCP 市场",
    origin,
    base,
    repo_url: cleanRepoUrl,
    submit_url: submitUrl,
    generated_at: generatedAt,
  },
  count: entries.length,
  stats: {
    official: entries.filter((entry) => entry.official).length,
    verified: entries.filter((entry) => entry.verified).length,
    tools: entries.reduce((sum, entry) => sum + entry.tools.length, 0),
  },
  facets: {
    categories: [...categoryCounts.entries()].map(([name, count]) => ({
      name,
      count,
    })),
    tags: [...tagCounts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "zh-CN")),
  },
  entries,
};

const indexText = `${JSON.stringify(index, null, 2)}\n`;

await mkdir(PUBLIC_DIR, { recursive: true });
await mkdir(DATA_DIR, { recursive: true });
await mkdir(DIST_DIR, { recursive: true });
await mkdir(CATALOG_DIR, { recursive: true });
await writeFile(path.join(PUBLIC_DIR, "index.json"), indexText, "utf8");
await writeFile(path.join(DATA_DIR, "index.json"), indexText, "utf8");
await writeFile(path.join(DIST_DIR, "index.json"), indexText, "utf8");
await writeFile(path.join(CATALOG_DIR, "index.json"), indexText, "utf8");
await copyFile(SCHEMA_PATH, path.join(PUBLIC_DIR, "registry.schema.json"));
await copyFile(SCHEMA_PATH, path.join(DIST_DIR, "registry.schema.json"));

console.log(
  `已生成 index.json：${entries.length} 个条目，${entries.reduce(
    (sum, entry) => sum + entry.install.length,
    0,
  )} 套安装配置。`,
);
console.log(
  `分类：${index.facets.categories
    .map((item) => `${item.name}(${item.count})`)
    .join(" / ")}`,
);
