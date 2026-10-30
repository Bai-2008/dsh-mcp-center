#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";

import { ROOT } from "./lib/registry.mjs";

const STATE_PATH = path.join(ROOT, "sync", "state.json");
const LABEL = "possibly-broken";
const TITLE_PREFIX = "[possibly-broken] ";
const API = process.env.GITHUB_API_URL || "https://api.github.com";
const REPOSITORY = process.env.GITHUB_REPOSITORY;
const TOKEN = process.env.GITHUB_TOKEN;

if (!REPOSITORY || !TOKEN) {
  throw new Error("需要 GITHUB_REPOSITORY 和 GITHUB_TOKEN 环境变量");
}

const [owner, repo] = REPOSITORY.split("/");
const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${TOKEN}`,
  "User-Agent": "dsh-mcp-center-sync-health",
  "X-GitHub-Api-Version": "2022-11-28",
  "Content-Type": "application/json",
};

async function api(pathname, init = {}) {
  const response = await fetch(`${API}${pathname}`, {
    ...init,
    headers: { ...headers, ...(init.headers ?? {}) },
    signal: AbortSignal.timeout(20_000),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `GitHub API ${init.method ?? "GET"} ${pathname} -> ${response.status}: ${text.slice(
        0,
        300,
      )}`,
    );
  }

  if (response.status === 204) {
    return null;
  }
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function ensureLabel() {
  try {
    await api(`/repos/${owner}/${repo}/labels/${encodeURIComponent(LABEL)}`);
  } catch (error) {
    if (!String(error.message).includes("-> 404:")) {
      throw error;
    }
    try {
      await api(`/repos/${owner}/${repo}/labels`, {
        method: "POST",
        body: JSON.stringify({
          name: LABEL,
          color: "b60205",
          description: "Remote MCP tool sync has failed for 7 consecutive days",
        }),
      });
    } catch (createError) {
      if (!String(createError.message).includes("-> 422:")) {
        throw createError;
      }
    }
  }
}

async function listLabeledIssues() {
  const issues = [];
  for (let page = 1; page <= 10; page += 1) {
    const batch = await api(
      `/repos/${owner}/${repo}/issues?labels=${encodeURIComponent(
        LABEL,
      )}&state=all&per_page=100&page=${page}`,
    );
    issues.push(...batch.filter((issue) => !issue.pull_request));
    if (batch.length < 100) {
      break;
    }
  }
  return issues;
}

function issueBody(name, entry, state) {
  const fileUrl = `${process.env.GITHUB_SERVER_URL || "https://github.com"}/${REPOSITORY}/blob/main/${entry.file}`;
  return [
    "<!-- dsh-mcp-center:sync-health -->",
    "## 远程 MCP 同步连续失败",
    "",
    `- 条目：\`${name}\``,
    `- 展示名：${escapeHtml(entry.display_name ?? name)}`,
    `- 文件：[${entry.file ?? "unknown"}](${fileUrl})`,
    `- 连续失败：${entry.consecutive_failures} 天`,
    `- 最近失败日期：${entry.last_failure_date ?? "unknown"}`,
    `- 最近尝试：${entry.last_attempt ?? "unknown"}`,
    `- 最近成功：${entry.last_success ?? "never"}`,
    "",
    "### 最近错误",
    "",
    `<pre>${escapeHtml(entry.last_error ?? "no error recorded")}</pre>`,
    "",
    `达到 ${state.broken_threshold ?? 7} 天阈值后，条目会被标记为 \`${LABEL}\`。恢复成功后会关闭此 Issue。`,
  ].join("\n");
}

const state = JSON.parse(await readFile(STATE_PATH, "utf8"));
const threshold = state.broken_threshold ?? 7;
const entries = state.entries ?? {};
const broken = Object.entries(entries).filter(
  ([, entry]) => (entry.consecutive_failures ?? 0) >= threshold,
);

await ensureLabel();
const issues = await listLabeledIssues();

for (const [name, entry] of broken) {
  const title = `${TITLE_PREFIX}${name}`;
  const body = issueBody(name, entry, state);
  const existing = issues.find((issue) => issue.title === title);

  if (existing) {
    await api(`/repos/${owner}/${repo}/issues/${existing.number}`, {
      method: "PATCH",
      body: JSON.stringify({ body }),
    });
    await api(`/repos/${owner}/${repo}/issues/${existing.number}/labels`, {
      method: "POST",
      body: JSON.stringify({ labels: [LABEL] }),
    });

    if (existing.state !== "open") {
      await api(`/repos/${owner}/${repo}/issues/${existing.number}`, {
        method: "PATCH",
        body: JSON.stringify({ state: "open" }),
      });
      await api(`/repos/${owner}/${repo}/issues/${existing.number}/comments`, {
        method: "POST",
        body: JSON.stringify({
          body: `重新检测到连续 ${entry.consecutive_failures} 天同步失败，已重新打开。`,
        }),
      });
    }
    console.log(`UPDATED #${existing.number} ${name}`);
    continue;
  }

  const created = await api(`/repos/${owner}/${repo}/issues`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      labels: [LABEL],
    }),
  });
  console.log(`OPENED #${created.number} ${name}`);
}

for (const issue of issues) {
  if (!issue.title.startsWith(TITLE_PREFIX)) {
    continue;
  }
  const name = issue.title.slice(TITLE_PREFIX.length);
  const entry = entries[name];

  if (broken.some(([brokenName]) => brokenName === name)) {
    continue;
  }

  const recovered = !entry || entry.status === "ok";
  if (!recovered || issue.state !== "open") {
    continue;
  }

  const reason = entry
    ? `同步已恢复，最近成功时间：${entry.last_success ?? "unknown"}`
    : "条目已从 registry 移除";
  await api(`/repos/${owner}/${repo}/issues/${issue.number}/comments`, {
    method: "POST",
    body: JSON.stringify({ body: `${reason}，自动关闭。` }),
  });
  await api(`/repos/${owner}/${repo}/issues/${issue.number}`, {
    method: "PATCH",
    body: JSON.stringify({ state: "closed", state_reason: "completed" }),
  });
  console.log(`CLOSED #${issue.number} ${name}`);
}

console.log(
  `健康检查完成：broken ${broken.length}，labeled issues ${issues.length}。`,
);
