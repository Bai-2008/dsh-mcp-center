#!/usr/bin/env node

import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  ROOT,
  SCHEMA_PATH,
  assertValidation,
  publicEntry,
  validateRegistry,
} from "./lib/registry.mjs";

const result = await validateRegistry();
assertValidation(result);

const generatedAt = new Date().toISOString();
const entries = result.entries.map((entry) =>
  publicEntry(entry, { verified: true }),
);

const countBy = (values) => {
  const counts = {};
  for (const value of values) {
    counts[value] = (counts[value] ?? 0) + 1;
  }
  return counts;
};

const index = {
  schema_version: "1.0.0",
  generated_at: generatedAt,
  source: {
    repository: process.env.GITHUB_REPOSITORY ?? null,
    commit: process.env.GITHUB_SHA ?? null,
    ref: process.env.GITHUB_REF_NAME ?? null,
  },
  verification: {
    status: "passed",
    method: "json-schema+semantic-checks",
    validator: "scripts/validate.mjs",
    workflow: ".github/workflows/validate.yml",
    pr_workflow: ".github/workflows/ci.yml",
  },
  stats: {
    total: entries.length,
    official: entries.filter((entry) => entry.official).length,
    transports: countBy(entries.map((entry) => entry.transport.type)),
    categories: countBy(entries.flatMap((entry) => entry.categories)),
  },
  entries,
};

const distDir = path.join(ROOT, "dist");
await mkdir(distDir, { recursive: true });
await writeFile(
  path.join(distDir, "registry.json"),
  `${JSON.stringify(index, null, 2)}\n`,
  "utf8",
);
await copyFile(SCHEMA_PATH, path.join(distDir, "registry.schema.json"));

console.log(
  `已生成 dist/registry.json：${entries.length} 个条目，verified=true（CI 校验产物）。`,
);
console.log(`已复制 dist/registry.schema.json。`);
