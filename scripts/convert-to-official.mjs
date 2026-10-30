#!/usr/bin/env node

import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

import {
  ROOT,
  assertValidation,
  inferRepositoryObject,
  validateRegistry,
} from "./lib/registry.mjs";
import { inferStdioPackage } from "./lib/stdio-package.mjs";

const OFFICIAL_SCHEMA =
  "https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json";

function usage() {
  return `用法：
  node scripts/convert-to-official.mjs [选项] [registry 文件...]

选项：
  --out-dir <目录>   输出目录，默认 dist/official
  --stdout           仅转换单个条目并输出到 stdout
  -h, --help         显示帮助

示例：
  npm run convert:official
  node scripts/convert-to-official.mjs registry/com.notion__mcp.yaml --stdout
`;
}

function environmentVariables(transport) {
  return (transport.env ?? []).map((variable) => ({
    name: variable.name,
    ...(variable.description ? { description: variable.description } : {}),
    isRequired: variable.required ?? false,
    isSecret: variable.secret ?? false,
    format: "string",
  }));
}

function packageFromStdio(entry) {
  const inferred = inferStdioPackage(entry);
  const env = environmentVariables(entry.transport);

  return {
    ...inferred,
    transport: { type: "stdio" },
    ...(env.length > 0 ? { environmentVariables: env } : {}),
  };
}

function remoteFromTransport(transport) {
  const headers = (transport.headers ?? []).map((header) => ({
    name: header.name,
    description: header.description,
    isRequired: header.required ?? false,
    isSecret: header.secret ?? false,
  }));

  const variables = Object.fromEntries(
    Object.entries(transport.variables ?? {}).map(([name, variable]) => [
      name,
      {
        description: variable.description,
        isRequired: variable.required ?? false,
        isSecret: variable.secret ?? false,
        format: "string",
      },
    ]),
  );

  return {
    type: transport.type.replaceAll("_", "-"),
    url: transport.url,
    ...(headers.length > 0 ? { headers } : {}),
    ...(Object.keys(variables).length > 0 ? { variables } : {}),
  };
}

function assertOfficialDescription(entry) {
  const description = entry.description_en ?? entry.description;
  const length = Array.from(description).length;
  if (length > 100) {
    throw new Error(
      `${entry.name} 的官方 description 长度为 ${length}，超过官方 schema 的 100 字符限制`,
    );
  }
  return description;
}

export function convertEntry(entry) {
  const description = assertOfficialDescription(entry);
  const repository = inferRepositoryObject(entry);
  const transport =
    entry.transport.type === "stdio"
      ? { packages: [packageFromStdio(entry)] }
      : { remotes: [remoteFromTransport(entry.transport)] };

  return {
    $schema: OFFICIAL_SCHEMA,
    name: entry.name,
    title: entry.display_name,
    description,
    version: entry.version,
    ...(repository ? { repository } : {}),
    websiteUrl: entry.homepage,
    ...transport,
    _meta: {
      "io.modelcontextprotocol.registry/publisher-provided": {
        "dsh-mcp-center": {
          vendor: entry.vendor,
          official: entry.official,
          verified: entry.verified,
          categories: entry.categories,
          tags: entry.tags,
          clients: entry.clients,
          license: entry.license,
          lastChecked: entry.last_checked,
          descriptionZh: entry.description,
          sourceTransport: entry.transport.type,
          tools: entry.tools,
        },
      },
    },
  };
}

function parseArgs(argv) {
  const options = {
    outDir: path.join(ROOT, "dist", "official"),
    stdout: false,
    files: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "-h" || arg === "--help") {
      options.help = true;
    } else if (arg === "--stdout") {
      options.stdout = true;
    } else if (arg === "--out-dir") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--out-dir 需要一个目录参数");
      }
      options.outDir = path.resolve(value);
      index += 1;
    } else if (arg.startsWith("--out-dir=")) {
      const value = arg.slice("--out-dir=".length);
      if (!value) {
        throw new Error("--out-dir 需要一个目录参数");
      }
      options.outDir = path.resolve(value);
    } else if (arg.startsWith("-")) {
      throw new Error(`未知选项：${arg}`);
    } else {
      options.files.push(path.resolve(arg));
    }
  }

  return options;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    process.stdout.write(usage());
    return;
  }

  const result = await validateRegistry();
  assertValidation(result);

  const requested = new Set(
    options.files.map((file) => pathToFileURL(file).href),
  );
  const entries = result.entries.filter((entry) =>
    requested.size === 0
      ? true
      : requested.has(pathToFileURL(entry.__file).href),
  );

  if (options.files.length > 0 && entries.length !== options.files.length) {
    const found = new Set(entries.map((entry) => entry.__file));
    const missing = options.files.filter((file) => !found.has(file));
    throw new Error(`未找到 registry 文件：${missing.join(", ")}`);
  }

  if (options.stdout) {
    if (entries.length !== 1) {
      throw new Error("--stdout 需要且只能指定一个 registry 文件");
    }
    process.stdout.write(`${JSON.stringify(convertEntry(entries[0]), null, 2)}\n`);
    return;
  }

  await mkdir(options.outDir, { recursive: true });
  const existing = await readdir(options.outDir);
  await Promise.all(
    existing
      .filter((file) => file.endsWith(".json"))
      .map((file) => unlink(path.join(options.outDir, file))),
  );

  for (const entry of entries) {
    const filename = `${entry.name.replaceAll("/", "__")}.json`;
    const official = convertEntry(entry);
    await writeFile(
      path.join(options.outDir, filename),
      `${JSON.stringify(official, null, 2)}\n`,
      "utf8",
    );
  }

  console.log(
    `已转换 ${entries.length} 个条目到 ${path.relative(ROOT, options.outDir)}/`,
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main().catch((error) => {
    console.error(`转换失败：${error.message}`);
    process.exitCode = 1;
  });
}
