#!/usr/bin/env node

import {
  formatIssue,
  validateRegistry,
} from "./lib/registry.mjs";

const result = await validateRegistry();

console.log(
  `检查 ${result.files.length} 个 registry 文件，解析 ${result.entries.length} 个有效条目。`,
);

if (result.errors.length > 0) {
  console.error(`\n发现 ${result.errors.length} 个错误：`);
  for (const issue of result.errors) {
    console.error(`- ${formatIssue(issue)}`);
  }
  process.exitCode = 1;
} else {
  const transports = new Map();
  const categories = new Map();
  for (const entry of result.entries) {
    transports.set(
      entry.transport.type,
      (transports.get(entry.transport.type) ?? 0) + 1,
    );
    for (const category of entry.categories) {
      categories.set(category, (categories.get(category) ?? 0) + 1);
    }
  }

  const formatCounts = (map) =>
    [...map.entries()]
      .sort(([a], [b]) => a.localeCompare(b, "zh-CN"))
      .map(([key, count]) => `${key} ${count}`)
      .join(" / ");

  console.log(`校验通过。`);
  console.log(`传输方式：${formatCounts(transports)}`);
  console.log(`分类：${formatCounts(categories)}`);
}
