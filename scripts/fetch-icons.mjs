#!/usr/bin/env node

import { createHash } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  ROOT,
  assertValidation,
  validateRegistry,
} from "./lib/registry.mjs";

const ICON_DIR = path.join(ROOT, "web", "public", "icons");
const MANIFEST_PATH = path.join(ICON_DIR, "icons.json");
const MAX_ICON_BYTES = 512 * 1024;
const FETCH_TIMEOUT_MS = 8_000;
const CONCURRENCY = 4;

const IMAGE_TYPES = new Map([
  ["image/png", "png"],
  ["image/jpeg", "jpg"],
  ["image/jpg", "jpg"],
  ["image/svg+xml", "svg"],
  ["image/webp", "webp"],
  ["image/gif", "gif"],
  ["image/avif", "avif"],
  ["image/x-icon", "ico"],
  ["image/vnd.microsoft.icon", "ico"],
]);

function slugFor(name) {
  return name.replaceAll("/", "__");
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fallbackSvg(entry) {
  const digest = createHash("sha256").update(entry.name).digest();
  const hue = 180 + (digest[0] % 140);
  const saturation = 20 + (digest[1] % 10);
  const lightness = 28 + (digest[2] % 9);
  const initial = Array.from(entry.display_name.trim())[0] ?? "M";
  const background = `hsl(${hue} ${saturation}% ${lightness}%)`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="${background}"/>
  <text x="32" y="34" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif" font-size="30" font-weight="600" fill="#f5f5f7">${escapeXml(initial)}</text>
</svg>
`;
}

function parseAttributes(tag) {
  const attributes = {};
  for (const match of tag.matchAll(
    /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g,
  )) {
    attributes[match[1].toLowerCase()] =
      match[2] ?? match[3] ?? match[4] ?? "";
  }
  return attributes;
}

function iconCandidates(html, pageUrl) {
  const candidates = [];
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const attributes = parseAttributes(tag);
    const rel = String(attributes.rel ?? "").toLowerCase();
    if (!rel.includes("icon") || !attributes.href) {
      continue;
    }

    try {
      const url = new URL(
        attributes.href.replaceAll("&amp;", "&"),
        pageUrl,
      );
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        continue;
      }
      const resolved = url.href;
      const score =
        (rel === "icon" ? 4 : 0) +
        (rel.includes("shortcut") ? 1 : 0) +
        (/\.svg(?:\?|$)/i.test(resolved) ? 3 : 0) +
        (attributes.type === "image/svg+xml" ? 2 : 0) +
        (String(attributes.sizes ?? "").includes("32x32") ? 1 : 0);
      candidates.push({ url: resolved, score });
    } catch {
      // Ignore malformed href.
    }
  }

  candidates.sort((a, b) => b.score - a.score);
  const origin = new URL(pageUrl).origin;
  const urls = [...candidates.map((candidate) => candidate.url)];
  urls.push(`${origin}/favicon.ico`);
  return [...new Set(urls)];
}

async function fetchWithTimeout(url) {
  return fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: {
      "user-agent":
        "Mozilla/5.0 (compatible; dsh-mcp-center-icon-fetcher/1.0)",
      accept: "text/html,image/*,*/*;q=0.8",
    },
  });
}

async function downloadImage(url) {
  const response = await fetchWithTimeout(url);
  if (!response.ok) {
    return null;
  }

  const contentType = (response.headers.get("content-type") ?? "")
    .split(";")[0]
    .trim()
    .toLowerCase();
  const contentLength = Number(response.headers.get("content-length") ?? 0);
  if (contentLength > MAX_ICON_BYTES) {
    return null;
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length === 0 || buffer.length > MAX_ICON_BYTES) {
    return null;
  }

  let extension = IMAGE_TYPES.get(contentType);
  if (!extension) {
    if (contentType && !contentType.startsWith("image/")) {
      return null;
    }
    const urlExtension = path
      .extname(new URL(url).pathname)
      .slice(1)
      .toLowerCase();
    extension = ["png", "jpg", "jpeg", "svg", "webp", "gif", "avif", "ico"].includes(
      urlExtension,
    )
      ? urlExtension.replace("jpeg", "jpg")
      : null;
  }

  return extension ? { buffer, extension } : null;
}

async function fetchFavicon(entry) {
  let html;
  try {
    const home = await fetchWithTimeout(entry.homepage);
    if (!home.ok) {
      throw new Error(`homepage HTTP ${home.status}`);
    }
    const contentType = home.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html") && !contentType.includes("xml")) {
      throw new Error(`homepage content-type ${contentType || "unknown"}`);
    }
    const contentLength = Number(home.headers.get("content-length") ?? 0);
    if (contentLength > 2 * 1024 * 1024) {
      throw new Error("homepage too large");
    }
    html = await home.text();
  } catch (error) {
    return { error: error.message };
  }

  for (const url of iconCandidates(html, entry.homepage).slice(0, 5)) {
    try {
      const image = await downloadImage(url);
      if (image) {
        return { ...image, source: "favicon" };
      }
    } catch {
      // Try the next candidate.
    }
  }

  return { error: "no usable favicon" };
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;

  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => run()),
  );
  return results;
}

const registry = await validateRegistry();
assertValidation(registry);

await rm(ICON_DIR, { recursive: true, force: true });
await mkdir(ICON_DIR, { recursive: true });

const manifest = {
  version: 1,
  generated_at: new Date().toISOString(),
  icons: {},
};

await mapLimit(registry.entries, CONCURRENCY, async (entry) => {
  const slug = slugFor(entry.name);
  const fetched = await fetchFavicon(entry);

  if (fetched.error) {
    const filename = `${slug}.svg`;
    await writeFile(
      path.join(ICON_DIR, filename),
      fallbackSvg(entry),
      "utf8",
    );
    manifest.icons[entry.name] = {
      path: `icons/${filename}`,
      source: "fallback",
      homepage: entry.homepage,
      error: fetched.error,
    };
    console.log(`FALLBACK ${entry.name}  ${fetched.error}`);
    return;
  }

  const filename = `${slug}.${fetched.extension}`;
  await writeFile(path.join(ICON_DIR, filename), fetched.buffer);
  manifest.icons[entry.name] = {
    path: `icons/${filename}`,
    source: fetched.source,
    homepage: entry.homepage,
  };
  console.log(`OK       ${entry.name}  ${filename}`);
});

manifest.icons = Object.fromEntries(
  Object.entries(manifest.icons).sort(([a], [b]) => a.localeCompare(b)),
);

await writeFile(
  MANIFEST_PATH,
  `${JSON.stringify(manifest, null, 2)}\n`,
  "utf8",
);

const downloaded = Object.values(manifest.icons).filter(
  (icon) => icon.source === "favicon",
).length;
console.log(
  `图标处理完成：${downloaded} 个抓取成功，${registry.entries.length - downloaded} 个使用回退 SVG。`,
);
