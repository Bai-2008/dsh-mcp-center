#!/usr/bin/env node

import { execFile } from "node:child_process";
import { promisify } from "node:util";

import { assertValidation, validateRegistry } from "./lib/registry.mjs";
import { inferStdioPackage } from "./lib/stdio-package.mjs";

const execFileAsync = promisify(execFile);
const GITHUB_API = "https://api.github.com";
const MAX_CONCURRENCY = 5;

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

async function fetchWithTimeout(url, init = {}) {
  return fetch(url, {
    ...init,
    signal: AbortSignal.timeout(20_000),
  });
}

async function checkRepositoryWithGit(repository) {
  try {
    await execFileAsync(
      "git",
      ["ls-remote", "--exit-code", repository, "HEAD"],
      {
        timeout: 20_000,
        maxBuffer: 1024 * 1024,
        env: {
          ...process.env,
          GIT_TERMINAL_PROMPT: "0",
        },
      },
    );
    return { ok: true, detail: "git ls-remote 可访问" };
  } catch (error) {
    return {
      ok: false,
      detail: `git ls-remote 失败：${error.stderr?.trim() || error.message}`,
    };
  }
}

async function checkGitHubRepository(repository) {
  const url = new URL(repository);
  const [owner, repo] = url.pathname
    .replace(/^\/+|\/+$/g, "")
    .split("/");
  const apiUrl = `${GITHUB_API}/repos/${encodeURIComponent(
    owner,
  )}/${encodeURIComponent(repo.replace(/\.git$/i, ""))}`;

  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "dsh-mcp-center-ci",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {}),
  };

  let response;
  try {
    response = await fetchWithTimeout(apiUrl, { headers });
  } catch (error) {
    return {
      ok: false,
      detail: `GitHub API 请求失败：${error.message}`,
    };
  }

  if (response.ok) {
    const data = await response.json();
    if (data.archived) {
      return {
        ok: true,
        detail: `仓库存在（已归档，默认分支 ${data.default_branch ?? "unknown"}）`,
      };
    }
    return {
      ok: true,
      detail: `仓库存在（默认分支 ${data.default_branch ?? "unknown"}）`,
    };
  }

  if (response.status === 403 || response.status === 429) {
    const fallback = await checkRepositoryWithGit(repository);
    return {
      ...fallback,
      detail: `GitHub API 返回 HTTP ${response.status}，回退到 git ls-remote；${fallback.detail}`,
    };
  }

  if (response.status === 404) {
    return { ok: false, detail: "repository 返回 404" };
  }

  return {
    ok: false,
    detail: `GitHub API 返回 HTTP ${response.status}`,
  };
}

async function checkRepository(entry) {
  if (!entry.repository) {
    return {
      ok: true,
      skipped: true,
      detail: "未填写 repository，跳过",
    };
  }

  const host = new URL(entry.repository).hostname
    .toLowerCase()
    .replace(/^www\./, "");

  if (host === "github.com") {
    return checkGitHubRepository(entry.repository);
  }

  return checkRepositoryWithGit(entry.repository);
}

async function checkPackage(entry) {
  if (entry.transport.type !== "stdio") {
    return null;
  }

  let inferred;
  try {
    inferred = inferStdioPackage(entry);
  } catch (error) {
    return { ok: false, detail: error.message, package: null };
  }

  const { registryType, identifier, version } = inferred;
  let url;

  if (registryType === "npm") {
    url = `https://registry.npmjs.org/${encodeURIComponent(
      identifier,
    )}/${encodeURIComponent(version)}`;
  } else if (registryType === "pypi") {
    url = `https://pypi.org/pypi/${encodeURIComponent(
      identifier,
    )}/${encodeURIComponent(version)}/json`;
  } else {
    return {
      ok: false,
      detail: `不支持检查 ${registryType} 包`,
      package: `${registryType}:${identifier}@${version}`,
    };
  }

  try {
    let response = await fetchWithTimeout(url, { method: "HEAD" });
    if (response.status === 405) {
      response = await fetchWithTimeout(url, { method: "GET" });
      await response.body?.cancel();
    }

    if (response.ok) {
      return {
        ok: true,
        detail: `包存在：${registryType}:${identifier}@${version}`,
        package: `${registryType}:${identifier}@${version}`,
      };
    }
    if (response.status === 404) {
      return {
        ok: false,
        detail: `包或版本不存在：${registryType}:${identifier}@${version}`,
        package: `${registryType}:${identifier}@${version}`,
      };
    }
    return {
      ok: false,
      detail: `包仓库返回 HTTP ${response.status}：${registryType}:${identifier}@${version}`,
      package: `${registryType}:${identifier}@${version}`,
    };
  } catch (error) {
    return {
      ok: false,
      detail: `包检查请求失败：${error.message}`,
      package: `${registryType}:${identifier}@${version}`,
    };
  }
}

const result = await validateRegistry();
assertValidation(result);

const rows = await mapLimit(result.entries, MAX_CONCURRENCY, async (entry) => {
  const repository = await checkRepository(entry);
  const pkg = await checkPackage(entry);
  return { entry, repository, package: pkg };
});

const failures = [];

for (const { entry, repository, package: pkg } of rows) {
  const prefix = repository.skipped ? "SKIP" : repository.ok ? "OK" : "FAIL";
  console.log(
    `${prefix} repo    ${entry.name}  ${entry.repository ?? "-"}  ${repository.detail}`,
  );
  if (!repository.ok) {
    failures.push(`${entry.name}: repository 检查失败，${repository.detail}`);
  }

  if (pkg) {
    console.log(
      `${pkg.ok ? "OK  " : "FAIL"} package ${entry.name}  ${pkg.detail}`,
    );
    if (!pkg.ok) {
      failures.push(`${entry.name}: 包检查失败，${pkg.detail}`);
    }
  }
}

if (failures.length > 0) {
  console.error(`\n上游检查发现 ${failures.length} 个问题：`);
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exitCode = 1;
} else {
  console.log(`\n上游检查通过：${rows.length} 个条目。`);
}
