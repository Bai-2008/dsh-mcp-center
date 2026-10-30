import path from "node:path";

export const PACKAGE_MANAGERS = {
  npx: { registryType: "npm", runtimeHint: "npx" },
  pnpx: { registryType: "npm", runtimeHint: "pnpx" },
  uvx: { registryType: "pypi", runtimeHint: "uvx" },
};

export function splitPackageSpec(spec) {
  if (spec.startsWith("@")) {
    const slash = spec.indexOf("/");
    if (slash < 0) {
      throw new Error(`无法识别的 npm 包名：${spec}`);
    }
    const at = spec.lastIndexOf("@");
    if (at > slash) {
      return { identifier: spec.slice(0, at), version: spec.slice(at + 1) };
    }
    return { identifier: spec, version: null };
  }

  const at = spec.indexOf("@");
  if (at > 0) {
    return { identifier: spec.slice(0, at), version: spec.slice(at + 1) };
  }
  return { identifier: spec, version: null };
}

export function parsePackageArguments(args) {
  const result = [];

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg.startsWith("--")) {
      const equals = arg.indexOf("=");
      if (equals > 2) {
        result.push({
          type: "named",
          name: arg.slice(0, equals),
          value: arg.slice(equals + 1),
        });
        continue;
      }

      const next = args[index + 1];
      if (next !== undefined && !next.startsWith("-")) {
        result.push({ type: "named", name: arg, value: next });
        index += 1;
      } else {
        result.push({ type: "named", name: arg });
      }
      continue;
    }

    if (/^-[A-Za-z]$/.test(arg)) {
      const next = args[index + 1];
      if (next !== undefined && !next.startsWith("-")) {
        result.push({ type: "named", name: arg, value: next });
        index += 1;
      } else {
        result.push({ type: "named", name: arg });
      }
      continue;
    }

    result.push({ type: "positional", value: arg });
  }

  return result;
}

export function inferStdioPackage(entry) {
  const transport = entry.transport;
  const command = path.basename(transport.command).replace(/\.exe$/i, "");
  const manager = PACKAGE_MANAGERS[command];

  if (!manager) {
    throw new Error(
      `无法从 command "${transport.command}" 推断包管理器。` +
        "目前仅自动识别 npx、pnpx、uvx；其他启动方式请先扩展映射规则。",
    );
  }

  const args = [...(transport.args ?? [])];
  const runtimeArguments = [];
  while (args[0] === "-y" || args[0] === "--yes") {
    runtimeArguments.push({ type: "named", name: args.shift() });
  }

  const spec = args.shift();
  if (!spec || spec.startsWith("-")) {
    throw new Error(`stdio 参数中缺少包名：${entry.name}`);
  }

  const parsed = splitPackageSpec(spec);
  if (parsed.version && parsed.version !== entry.version) {
    throw new Error(
      `${entry.name} 的 args 包版本 ${parsed.version} 与 version ${entry.version} 不一致`,
    );
  }
  if (parsed.version === "latest") {
    throw new Error(`${entry.name} 不能使用 latest 版本`);
  }

  const packageArguments = parsePackageArguments(args);

  return {
    registryType: manager.registryType,
    identifier: parsed.identifier,
    version: entry.version,
    runtimeHint: manager.runtimeHint,
    ...(runtimeArguments.length > 0 ? { runtimeArguments } : {}),
    ...(packageArguments.length > 0 ? { packageArguments } : {}),
  };
}
