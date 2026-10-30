#!/usr/bin/env node

import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { ROOT } from "./lib/registry.mjs";

const DIST_DIR = path.join(ROOT, "dist-site");

function normalizeBase(value) {
  const base = value || "/";
  return `/${base.replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
}

function walkHtml(directory) {
  return readdir(directory, { withFileTypes: true }).then(async (entries) => {
    const files = [];
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await walkHtml(fullPath)));
      } else if (entry.isFile() && entry.name.endsWith(".html")) {
        files.push(fullPath);
      }
    }
    return files;
  });
}

const base = normalizeBase(process.env.SITE_BASE);
const files = await walkHtml(DIST_DIR);
let replacements = 0;

for (const file of files) {
  const relativeDir = path.relative(path.dirname(file), DIST_DIR);
  const root = relativeDir
    ? `${relativeDir.split(path.sep).join("/")}/`
    : "./";
  const html = await readFile(file, "utf8");
  const next = html.replace(
    /\b(href|src)="(\/[^"]*)"/g,
    (match, attribute, value) => {
      if (value.startsWith("//")) {
        return match;
      }

      let assetPath;
      if (base === "/" && value.startsWith("/")) {
        assetPath = value.slice(1);
      } else if (base !== "/" && value.startsWith(base)) {
        assetPath = value.slice(base.length);
      } else if (value.startsWith("/_astro/")) {
        assetPath = value.slice(1);
      } else {
        return match;
      }

      replacements += 1;
      return `${attribute}="${root}${assetPath}"`;
    },
  );

  if (next !== html) {
    await writeFile(file, next, "utf8");
  }
}

console.log(`已将 ${replacements} 个根路径链接改写为相对路径。`);
