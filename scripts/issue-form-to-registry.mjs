#!/usr/bin/env node

import {
  access,
  appendFile,
  mkdir,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { stringify } from "yaml";

import {
  ROOT,
  registryRelativePath,
  todayInRegistryTimeZone,
} from "./lib/registry.mjs";

const LABELS = {
  name: "名称 name",
  display_name: "展示名称 display_name",
  description: "中文简介 description",
  description_en: "英文简介 description_en",
  version: "版本 version",
  homepage: "主页 homepage",
  repository: "源码仓库 repository",
  repository_subfolder: "仓库子目录 repository_subfolder",
  vendor: "厂商 / 维护方 vendor",
  transport_type: "传输类型 transport.type",
  stdio_command: "stdio 启动命令 command",
  stdio_args: "stdio 启动参数 args",
  stdio_env: "stdio 环境变量 env",
  remote_url: "远程 MCP 地址 url",
  remote_headers: "远程 Headers",
  remote_variables: "远程 URL 模板变量",
  categories: "分类 categories",
  tags: "标签 tags",
  official: "官方出品 official",
  clients: "可用客户端 clients",
  clients_other: "其他客户端 clients_other",
  license: "许可证 license",
};

const LABEL_TO_KEY = Object.fromEntries(
  Object.entries(LABELS).map(([key, label]) => [label, key]),
);

const IGNORED_HEADINGS = new Set([
  "以下字段仅在传输类型为 stdio 时填写",
  "以下字段仅在传输类型为 streamable_http 或 sse 时填写",
]);

const NAME_PATTERN = /^[a-z0-9][a-z0-9.-]*\/[a-z0-9][a-z0-9._-]*$/;
const ENV_NAME_PATTERN = /^[A-Z_][A-Z0-9_]*$/;
const HEADER_NAME_PATTERN = /^[A-Za-z0-9-]+$/;
const VARIABLE_NAME_PATTERN = /^[A-Za-z_][A-Za-z0-9_]*$/;
const CLIENT_PATTERN = /^[a-z0-9][a-z0-9._-]*$/;
const CATEGORIES = new Set([
  "餐饮",
  "出行",
  "生活服务",
  "开发工具",
  "数据库",
  "办公",
  "搜索",
  "AI",
  "其他",
]);

class SubmissionError extends Error {
  constructor(messages) {
    super(messages.join("\n"));
    this.name = "SubmissionError";
    this.messages = messages;
  }
}

function clean(value) {
  const text = (value ?? "").trim();
  return text === "_No response_" ? "" : text;
}

function parseSections(body) {
  const sections = new Map();
  let current = null;

  for (const line of body.split(/\r?\n/)) {
    if (line.startsWith("### ")) {
      const heading = line.slice(4).trim();
      if (Object.hasOwn(LABEL_TO_KEY, heading)) {
        current = LABEL_TO_KEY[heading];
        sections.set(current, []);
        continue;
      }
      if (IGNORED_HEADINGS.has(heading)) {
        current = null;
        continue;
      }
    }

    if (current) {
      sections.get(current).push(line);
    }
  }

  return new Map(
    [...sections.entries()].map(([key, lines]) => [
      key,
      clean(lines.join("\n")),
    ]),
  );
}

function parseCheckboxes(value) {
  return [...value.matchAll(/^\s*-\s*\[[xX]\]\s+(.+?)\s*$/gm)].map(
    (match) => match[1].trim(),
  );
}

function parseBoolean(value, field, errors) {
  if (!value) {
    return false;
  }

  const normalized = value.toLowerCase();
  if (["true", "yes", "y", "1", "是"].includes(normalized)) {
    return true;
  }
  if (["false", "no", "n", "0", "否"].includes(normalized)) {
    return false;
  }

  errors.push(`${field} 的布尔值必须是 true/false 或 是/否，当前为“${value}”`);
  return false;
}

function splitRows(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && line !== "```");
}

function parseKeyValueRows(value, field, descriptionFallback) {
  const rows = [];
  const errors = [];

  for (const [index, line] of splitRows(value).entries()) {
    const parts = line.split("|").map((part) => part.trim());
    if (parts.length > 5) {
      errors.push(
        `${field} 第 ${index + 1} 行最多 5 列：name | 说明 | 是否必填 | 是否敏感 | 申请地址`,
      );
      continue;
    }

    const [
      name,
      description = "",
      required = "",
      secret = "",
      obtainAt = "",
    ] = parts;
    if (!name) {
      errors.push(`${field} 第 ${index + 1} 行缺少名称`);
      continue;
    }
    if (obtainAt && !/^https:\/\//.test(obtainAt)) {
      errors.push(`${field} 第 ${index + 1} 行申请地址必须使用 HTTPS`);
    }

    rows.push({
      name,
      ...(description || descriptionFallback
        ? { description: description || descriptionFallback }
        : {}),
      ...(obtainAt ? { obtain_at: obtainAt } : {}),
      required: parseBoolean(required, `${field} 第 ${index + 1} 行必填`, errors),
      secret: parseBoolean(secret, `${field} 第 ${index + 1} 行敏感`, errors),
    });
  }

  return { rows, errors };
}

function firstCharServerName(name) {
  return name.split("/")[1]?.[0] ?? "";
}

function buildClients(sections, errors) {
  const selected = parseCheckboxes(sections.get("clients") ?? "");
  const clients = [];
  let needsOther = false;

  for (const client of selected) {
    if (client === "other") {
      needsOther = true;
      continue;
    }
    if (!CLIENT_PATTERN.test(client)) {
      errors.push(`客户端 slug 不合法：${client}`);
      continue;
    }
    clients.push(client);
  }

  const other = sections.get("clients_other") ?? "";
  if (needsOther && !other) {
    errors.push("选择了 other 客户端，但没有填写“其他客户端 clients_other”");
  }

  for (const client of other.split(/[,，\s]+/)) {
    if (!client) {
      continue;
    }
    if (!CLIENT_PATTERN.test(client)) {
      errors.push(`其他客户端 slug 不合法：${client}`);
      continue;
    }
    clients.push(client);
  }

  return [...new Set(clients)];
}

function buildTransport(sections, errors) {
  const type = sections.get("transport_type") ?? "";
  const stdioCommand = sections.get("stdio_command") ?? "";
  const stdioArgs = splitRows(sections.get("stdio_args") ?? "");
  const stdioEnv = sections.get("stdio_env") ?? "";
  const remoteUrl = sections.get("remote_url") ?? "";
  const remoteHeaders = sections.get("remote_headers") ?? "";
  const remoteVariables = sections.get("remote_variables") ?? "";

  if (!["stdio", "streamable_http", "sse"].includes(type)) {
    errors.push("传输类型必须是 stdio、streamable_http 或 sse");
    return null;
  }

  const hasStdioFields = Boolean(
    stdioCommand || stdioArgs.length > 0 || stdioEnv,
  );
  const hasRemoteFields = Boolean(remoteUrl || remoteHeaders || remoteVariables);

  if (type === "stdio") {
    if (hasRemoteFields) {
      errors.push("stdio 类型不能填写远程 URL、Headers 或 URL 模板变量");
    }
    if (!stdioCommand) {
      errors.push("stdio 类型必须填写启动命令 command");
    }

    const envResult = parseKeyValueRows(stdioEnv, "stdio 环境变量 env", "");
    errors.push(...envResult.errors);

    const env = [];
    const envNames = new Set();
    for (const row of envResult.rows) {
      if (!ENV_NAME_PATTERN.test(row.name)) {
        errors.push(`环境变量名不合法：${row.name}`);
      }
      if (envNames.has(row.name)) {
        errors.push(`环境变量重复：${row.name}`);
      }
      envNames.add(row.name);
      env.push(row);
    }

    return {
      type,
      command: stdioCommand,
      args: stdioArgs,
      env,
    };
  }

  if (hasStdioFields) {
    errors.push("远程类型不能填写 stdio 命令、参数或环境变量");
  }
  if (!remoteUrl) {
    errors.push("远程类型必须填写 MCP 地址 url");
  }

  const headerResult = parseKeyValueRows(
    remoteHeaders,
    "远程 Headers",
    "调用方配置的认证 Header",
  );
  const variableResult = parseKeyValueRows(
    remoteVariables,
    "远程 URL 模板变量",
    "调用方配置的 URL 参数",
  );
  errors.push(...headerResult.errors, ...variableResult.errors);

  const headerNames = new Set();
  for (const row of headerResult.rows) {
    if (!HEADER_NAME_PATTERN.test(row.name)) {
      errors.push(`Header 名不合法：${row.name}`);
    }
    const key = row.name.toLowerCase();
    if (headerNames.has(key)) {
      errors.push(`Header 重复：${row.name}`);
    }
    headerNames.add(key);
  }

  const variables = {};
  for (const row of variableResult.rows) {
    if (!VARIABLE_NAME_PATTERN.test(row.name)) {
      errors.push(`URL 模板变量名不合法：${row.name}`);
    }
    if (Object.hasOwn(variables, row.name)) {
      errors.push(`URL 模板变量重复：${row.name}`);
    }
    variables[row.name] = {
      description: row.description,
      ...(row.obtain_at ? { obtain_at: row.obtain_at } : {}),
      required: row.required,
      secret: row.secret,
    };
  }

  return {
    type,
    url: remoteUrl,
    headers: headerResult.rows,
    ...(Object.keys(variables).length > 0 ? { variables } : {}),
  };
}

async function readEvent() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath) {
    throw new SubmissionError([
      "缺少 GITHUB_EVENT_PATH，无法读取 Issue 内容。",
    ]);
  }

  const event = JSON.parse(await readFile(eventPath, "utf8"));
  if (!event.issue?.body) {
    throw new SubmissionError(["Issue 内容为空，无法解析投稿表单。"]);
  }

  return event;
}

async function fail(errors) {
  const message = [
    "投稿表单解析失败：",
    ...errors.map((error) => `- ${error}`),
  ].join("\n");
  await writeFile(path.join(ROOT, "submission-error.txt"), `${message}\n`, "utf8");
  console.error(message);
  process.exitCode = 1;
}

async function main() {
  const event = await readEvent().catch((error) => {
    if (error instanceof SubmissionError) {
      throw error;
    }
    throw new SubmissionError([`读取 Issue 事件失败：${error.message}`]);
  });

  const sections = parseSections(event.issue.body);
  const errors = [];

  const name = sections.get("name") ?? "";
  if (!NAME_PATTERN.test(name)) {
    errors.push(
      "name 必须是反向域名格式，例如 io.github.owner/repo，且只能使用小写字母、数字、点、连字符和下划线",
    );
  }

  const displayName = sections.get("display_name") ?? "";
  const description = sections.get("description") ?? "";
  const descriptionEn = sections.get("description_en") ?? "";
  const version = sections.get("version") ?? "";
  const homepage = sections.get("homepage") ?? "";
  const repository = sections.get("repository") ?? "";
  const repositorySubfolder = sections.get("repository_subfolder") ?? "";
  const vendor = sections.get("vendor") ?? "";
  const license = sections.get("license") ?? "";

  const requiredFields = [
    [displayName, "展示名称 display_name"],
    [description, "中文简介 description"],
    [version, "版本 version"],
    [homepage, "主页 homepage"],
    [vendor, "厂商 / 维护方 vendor"],
    [license, "许可证 license"],
  ];
  for (const [value, label] of requiredFields) {
    if (!value) {
      errors.push(`缺少必填字段：${label}`);
    }
  }

  if (description && !/[\u3400-\u9fff]/.test(description)) {
    errors.push("中文简介 description 必须包含中文");
  }

  const categories = [
    ...new Set(parseCheckboxes(sections.get("categories") ?? "")),
  ].filter((category) => {
    if (!CATEGORIES.has(category)) {
      errors.push(`未知分类：${category}`);
      return false;
    }
    return true;
  });
  if (categories.length === 0) {
    errors.push("至少选择一个分类");
  }
  if (categories.length > 3) {
    errors.push("最多选择 3 个分类");
  }

  const tags = [
    ...new Set(
      (sections.get("tags") ?? "")
        .split(/[,，]/)
        .map((tag) => tag.trim())
        .filter(Boolean),
    ),
  ];
  if (tags.length === 0) {
    errors.push("至少填写一个标签");
  }
  if (tags.length > 8) {
    errors.push("最多填写 8 个标签");
  }
  for (const tag of tags) {
    if (tag.length > 20) {
      errors.push(`标签超过 20 字符：${tag}`);
    }
  }

  const officialValue = sections.get("official") ?? "";
  let official = false;
  if (officialValue.startsWith("是")) {
    official = true;
  } else if (!officialValue.startsWith("否")) {
    errors.push("官方出品 official 必须选择“是”或“否”");
  }

  const clients = buildClients(sections, errors);
  if (clients.length === 0) {
    errors.push("至少选择一个可用客户端");
  }

  const transport = buildTransport(sections, errors);

  if (errors.length === 0) {
    const relativePath = registryRelativePath(name);
    const target = path.join(ROOT, relativePath);
    try {
      await access(target);
      errors.push(
        `同名条目已存在：${relativePath}。如需更新现有条目，请直接提交 Pull Request。`,
      );
    } catch {
      // expected: new entry
    }
  }

  if (errors.length > 0) {
    await fail(errors);
    return;
  }

  const entry = {
    $schema: "../../schema/registry.schema.json",
    name,
    display_name: displayName,
    description,
    ...(descriptionEn ? { description_en: descriptionEn } : {}),
    version,
    homepage,
    ...(repository ? { repository } : {}),
    ...(repositorySubfolder
      ? { repository_subfolder: repositorySubfolder }
      : {}),
    vendor,
    transport,
    tools: [],
    categories,
    tags,
    official,
    verified: false,
    clients,
    license,
    last_checked: todayInRegistryTimeZone(),
  };

  const relativePath = registryRelativePath(name);
  const target = path.join(ROOT, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(
    target,
    stringify(entry, { lineWidth: 0 }),
    "utf8",
  );
  await rm(path.join(ROOT, "submission-error.txt"), { force: true });

  if (process.env.GITHUB_OUTPUT) {
    await appendFile(
      process.env.GITHUB_OUTPUT,
      `file=${relativePath}\nname=${name}\nshard=${firstCharServerName(name)}\n`,
      "utf8",
    );
  }

  console.log(`已生成 ${relativePath}`);
  console.log(`条目：${name}`);
  console.log("下一步：运行 npm run validate 并执行上游检查。");
}

main().catch(async (error) => {
  const messages =
    error instanceof SubmissionError ? error.messages : [error.message];
  await fail(messages);
});

export { parseSections, parseCheckboxes, parseKeyValueRows };
