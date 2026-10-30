import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { parseDocument } from "yaml";

export const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
export const REGISTRY_DIR = path.join(ROOT, "registry");
export const SCHEMA_PATH = path.join(ROOT, "schema", "registry.schema.json");

const CODE_HOSTS = new Set([
  "github.com",
  "gitlab.com",
  "bitbucket.org",
  "gitee.com",
  "codeberg.org",
]);

const REPOSITORY_SOURCE = {
  "github.com": "github",
  "gitlab.com": "gitlab",
  "bitbucket.org": "bitbucket",
  "gitee.com": "gitee",
  "codeberg.org": "codeberg",
};

const HAN_CHARACTER = /[\u3400-\u9fff]/;
const REGISTRY_TIME_ZONE = "Asia/Shanghai";

export function todayInRegistryTimeZone() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: REGISTRY_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );
  return `${values.year}-${values.month}-${values.day}`;
}

export async function loadSchema() {
  return JSON.parse(await readFile(SCHEMA_PATH, "utf8"));
}

export async function createValidator() {
  const ajv = new Ajv2020({
    allErrors: true,
    strict: false,
    validateFormats: true,
  });
  addFormats(ajv);
  return ajv.compile(await loadSchema());
}

async function walkRegistry(directory) {
  const dirents = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const dirent of dirents.sort((a, b) =>
    a.name.localeCompare(b.name, "en"),
  )) {
    const fullPath = path.join(directory, dirent.name);
    if (dirent.isDirectory()) {
      files.push(...(await walkRegistry(fullPath)));
    } else if (dirent.isFile() && /\.ya?ml$/i.test(dirent.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

export async function listRegistryFiles() {
  return (await walkRegistry(REGISTRY_DIR)).sort((a, b) =>
    a.localeCompare(b, "en"),
  );
}

export function registryRelativePath(name) {
  const [namespace, serverName] = name.split("/");
  return `registry/${serverName[0].toLowerCase()}/${namespace}__${serverName}.yaml`;
}

export async function parseRegistryFile(file) {
  const raw = await readFile(file, "utf8");
  const document = parseDocument(raw, {
    maxAliasCount: 100,
    prettyErrors: true,
    strict: true,
    uniqueKeys: true,
  });

  if (document.errors.length > 0) {
    throw new Error(
      document.errors.map((error) => error.message).join("; "),
    );
  }

  return document.toJS({ maxAliasCount: 100 });
}

function ajvErrorToString(error) {
  const location = error.instancePath || "/";
  const property = error.params?.additionalProperty;
  const suffix = property ? `（多余字段：${property}）` : "";
  return `schema${location}: ${error.message}${suffix}`;
}

export function formatIssue(issue) {
  const relative = path.relative(ROOT, issue.file).split(path.sep).join("/");
  return `${relative}: ${issue.message}`;
}

export function assertValidation(result) {
  if (result.errors.length === 0) {
    return;
  }

  const error = new Error(
    `Registry 校验失败（${result.errors.length} 个错误）：\n${result.errors
      .map((issue) => `- ${formatIssue(issue)}`)
      .join("\n")}`,
  );
  error.name = "RegistryValidationError";
  throw error;
}

function checkRepositoryUrl(entry, file, errors) {
  if (!entry.repository) {
    if (entry.repository_subfolder) {
      errors.push({
        file,
        message: "设置了 repository_subfolder，但缺少 repository",
      });
    }
    return;
  }

  let url;
  try {
    url = new URL(entry.repository);
  } catch {
    errors.push({ file, message: `repository URL 无法解析：${entry.repository}` });
    return;
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  if (url.protocol !== "https:") {
    errors.push({ file, message: "repository 必须是 HTTPS 地址" });
  }
  if (!CODE_HOSTS.has(host)) {
    errors.push({
      file,
      message: `repository 域名不在允许列表：${host || "(empty)"}`,
    });
  }

  const segments = url.pathname
    .replace(/^\/+|\/+$/g, "")
    .split("/");
  if (
    segments.length !== 2 ||
    !segments[0] ||
    !segments[1] ||
    segments.some((segment) => segment === "." || segment === "..")
  ) {
    errors.push({
      file,
      message:
        "repository 必须是仓库根地址，格式为 https://<host>/<owner>/<repo>",
    });
  }
  if (url.search || url.hash) {
    errors.push({
      file,
      message: "repository 不能包含 query 或 hash；子目录请写入 repository_subfolder",
    });
  }

  if (entry.repository_subfolder) {
    const subfolder = entry.repository_subfolder;
    if (
      subfolder.startsWith("/") ||
      subfolder.endsWith("/") ||
      subfolder.split("/").some((segment) => segment === ".." || segment === ".")
    ) {
      errors.push({
        file,
        message: `repository_subfolder 必须是干净的相对路径：${subfolder}`,
      });
    }
  }
}

function checkRemoteTransport(transport, file, errors) {
  const rawUrl = transport.url;
  const declaredVariables = transport.variables ?? {};
  const templateNames = new Set();

  for (const match of rawUrl.matchAll(/\{([A-Za-z_][A-Za-z0-9_]*)\}/g)) {
    templateNames.add(match[1]);
  }

  const withoutTemplates = rawUrl.replace(
    /\{[A-Za-z_][A-Za-z0-9_]*\}/g,
    "template",
  );
  if (/[{}]/.test(withoutTemplates)) {
    errors.push({ file, message: `URL 模板存在非法占位符：${rawUrl}` });
  }

  let parsed;
  try {
    parsed = new URL(withoutTemplates);
  } catch {
    errors.push({ file, message: `远程 MCP URL 无法解析：${rawUrl}` });
    return;
  }

  if (parsed.protocol !== "https:") {
    errors.push({ file, message: "远程 MCP URL 必须使用 HTTPS" });
  }
  if (parsed.username || parsed.password) {
    errors.push({ file, message: "远程 MCP URL 不能内嵌用户名或密码" });
  }
  if (!parsed.hostname) {
    errors.push({ file, message: "远程 MCP URL 缺少 hostname" });
  }

  for (const name of templateNames) {
    if (!Object.hasOwn(declaredVariables, name)) {
      errors.push({
        file,
        message: `URL 使用了未声明的模板变量 {${name}}，请在 transport.variables 中补充说明`,
      });
    }
  }

  const secretLikeParam =
    /^(key|api[_-]?key|apikey|token|access[_-]?token|secret|client[_-]?secret|auth)$/i;
  for (const match of rawUrl.matchAll(/[?&]([^=&]+)=([^&]*)/g)) {
    const [, name, value] = match;
    if (secretLikeParam.test(name) && value && !/^\{[A-Za-z_][A-Za-z0-9_]*\}$/.test(value)) {
      errors.push({
        file,
        message: `URL 参数 ${name} 疑似包含明文凭据，请改用 {${name}} 模板并在 transport.variables 中声明`,
      });
    }
  }

  const headerNames = new Set();
  for (const header of transport.headers ?? []) {
    const key = header.name.toLowerCase();
    if (headerNames.has(key)) {
      errors.push({
        file,
        message: `transport.headers 中重复的 header：${header.name}`,
      });
    }
    headerNames.add(key);
  }
}

function checkStdioTransport(transport, file, errors) {
  if (!transport.command || !transport.command.trim()) {
    errors.push({ file, message: "stdio transport 必须提供 command" });
  }

  const envNames = new Set();
  for (const variable of transport.env ?? []) {
    if (envNames.has(variable.name)) {
      errors.push({
        file,
        message: `transport.env 中重复的变量名：${variable.name}`,
      });
    }
    envNames.add(variable.name);
  }
}

function checkSemantics(entry, file, errors) {
  const expectedPath = registryRelativePath(entry.name);
  const actualPath = path.relative(ROOT, file).split(path.sep).join("/");
  if (actualPath !== expectedPath) {
    errors.push({
      file,
      message: `文件路径必须与 name 对应，期望 ${expectedPath}`,
    });
  }

  if (!HAN_CHARACTER.test(entry.description)) {
    errors.push({
      file,
      message: "description 必须包含中文，以便中文市场展示",
    });
  }

  if (entry.verified !== false) {
    errors.push({
      file,
      message:
        "源文件的 verified 必须为 false；CI 校验通过后由 build-index 在构建产物中标记为 true",
    });
  }

  if (entry.last_checked > todayInRegistryTimeZone()) {
    errors.push({
      file,
      message: `last_checked 不能是未来日期：${entry.last_checked}`,
    });
  }

  checkRepositoryUrl(entry, file, errors);

  if (entry.transport.type === "stdio") {
    checkStdioTransport(entry.transport, file, errors);
  } else {
    checkRemoteTransport(entry.transport, file, errors);
  }

  const toolNames = new Set();
  for (const tool of entry.tools) {
    if (toolNames.has(tool.name)) {
      errors.push({
        file,
        message: `tools 中重复的 tool name：${tool.name}`,
      });
    }
    toolNames.add(tool.name);
  }
}

export async function validateRegistry() {
  const validate = await createValidator();
  const files = await listRegistryFiles();
  const entries = [];
  const errors = [];

  if (files.length === 0) {
    errors.push({
      file: REGISTRY_DIR,
      message: "registry/ 中没有 YAML 条目",
    });
  }

  for (const file of files) {
    let data;
    try {
      data = await parseRegistryFile(file);
    } catch (error) {
      errors.push({ file, message: `YAML 解析失败：${error.message}` });
      continue;
    }

    const valid = validate(data);
    if (!valid) {
      for (const ajvError of validate.errors ?? []) {
        errors.push({ file, message: ajvErrorToString(ajvError) });
      }
      continue;
    }

    const entry = data;
    checkSemantics(entry, file, errors);
    entries.push({ ...entry, __file: file });
  }

  const byName = new Map();
  for (const entry of entries) {
    const existing = byName.get(entry.name);
    if (existing) {
      errors.push({
        file: entry.__file,
        message: `name 重复：${entry.name}，已在 ${path.basename(
          existing.__file,
        )} 中登记`,
      });
    } else {
      byName.set(entry.name, entry);
    }
  }

  entries.sort((a, b) => a.name.localeCompare(b.name, "en"));

  return {
    files,
    entries,
    errors,
    ok: errors.length === 0,
  };
}

export function publicEntry(entry, overrides = {}) {
  const { __file, $schema, ...clean } = entry;
  return {
    ...clean,
    ...overrides,
  };
}

export function repositorySource(repository) {
  const host = new URL(repository).hostname
    .toLowerCase()
    .replace(/^www\./, "");
  return REPOSITORY_SOURCE[host] ?? host;
}

export function inferRepositoryObject(entry) {
  if (!entry.repository) {
    return undefined;
  }

  return {
    url: entry.repository,
    source: repositorySource(entry.repository),
    ...(entry.repository_subfolder
      ? { subfolder: entry.repository_subfolder }
      : {}),
  };
}
