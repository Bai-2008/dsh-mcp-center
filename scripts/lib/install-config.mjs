function json(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

export function clientKey(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function envPlaceholder(name) {
  return `<YOUR_${name}>`;
}

function headerPlaceholder(header) {
  const name = header.name
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  const placeholder = `<YOUR_${name}>`;
  return /^bearer\b/i.test(header.description.trim())
    ? `Bearer ${placeholder}`
    : placeholder;
}

function variablePlaceholder(name) {
  return `<YOUR_${name.toUpperCase()}>`;
}

function withUrlVariables(entry) {
  let url = entry.transport.url;
  for (const name of Object.keys(entry.transport.variables ?? {})) {
    url = url.replaceAll(`{${name}}`, variablePlaceholder(name));
  }
  return url;
}

function envObject(entry) {
  return Object.fromEntries(
    (entry.transport.env ?? []).map((variable) => [
      variable.name,
      envPlaceholder(variable.name),
    ]),
  );
}

function headersObject(entry) {
  return Object.fromEntries(
    (entry.transport.headers ?? []).map((header) => [
      header.name,
      headerPlaceholder(header),
    ]),
  );
}

function serverConfigForDsh(entry) {
  if (entry.transport.type === "stdio") {
    return {
      type: "stdio",
      command: entry.transport.command,
      args: entry.transport.args ?? [],
      env: envObject(entry),
    };
  }

  return {
    type: "streamable-http",
    url: withUrlVariables(entry),
    headers: headersObject(entry),
  };
}

function serverConfigForClaude(entry) {
  if (entry.transport.type === "stdio") {
    return {
      command: entry.transport.command,
      args: entry.transport.args ?? [],
      env: envObject(entry),
    };
  }

  const args = ["-y", "mcp-remote", withUrlVariables(entry)];
  if (entry.transport.type === "sse") {
    args.push("--transport", "sse-only");
  }
  for (const header of entry.transport.headers ?? []) {
    args.push("--header", `${header.name}: ${headerPlaceholder(header)}`);
  }
  return {
    command: "npx",
    args,
  };
}

function serverConfigForCursor(entry) {
  if (entry.transport.type === "stdio") {
    return {
      command: entry.transport.command,
      args: entry.transport.args ?? [],
      env: envObject(entry),
    };
  }

  return {
    url: withUrlVariables(entry),
    headers: headersObject(entry),
  };
}

function serverConfigForCline(entry) {
  if (entry.transport.type === "stdio") {
    return {
      type: "stdio",
      command: entry.transport.command,
      args: entry.transport.args ?? [],
      env: envObject(entry),
      disabled: false,
      autoApprove: [],
    };
  }

  return {
    type: entry.transport.type === "sse" ? "sse" : "streamableHttp",
    url: withUrlVariables(entry),
    headers: headersObject(entry),
    disabled: false,
    autoApprove: [],
  };
}

function configEnvelope(key, server) {
  return json({
    mcpServers: {
      [key]: server,
    },
  });
}

export function buildInstallConfigs(entry) {
  const key = clientKey(entry.name);
  const isRemote = entry.transport.type !== "stdio";
  const dshType =
    entry.transport.type === "sse" ? "SSE（DSH 会归一为 streamable-http）" : "Streamable HTTP";
  const stdioHint =
    "将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。";

  return [
    {
      id: "dsh",
      label: "DSH",
      subtitle: "mcp.json",
      filename: "mcp.json",
      hint: isRemote
        ? `DSH → MCP连接器 → 导入 JSON；当前传输：${dshType}。`
        : `DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。${stdioHint}`,
      code: configEnvelope(key, serverConfigForDsh(entry)),
    },
    {
      id: "claude",
      label: "Claude Desktop",
      subtitle: isRemote ? "mcp-remote 桥接" : "claude_desktop_config.json",
      filename: "claude_desktop_config.json",
      hint: isRemote
        ? "Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。"
        : `写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。${stdioHint}`,
      code: configEnvelope(key, serverConfigForClaude(entry)),
    },
    {
      id: "cursor",
      label: "Cursor",
      subtitle: "mcp.json",
      filename: "mcp.json",
      hint: isRemote
        ? "写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。"
        : `写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。${stdioHint}`,
      code: configEnvelope(key, serverConfigForCursor(entry)),
    },
    {
      id: "cline",
      label: "Cline",
      subtitle: "MCP Servers",
      filename: "cline_mcp_settings.json",
      hint: isRemote
        ? "在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。"
        : `在 Cline 的 MCP Servers 配置中粘贴。${stdioHint}`,
      code: configEnvelope(key, serverConfigForCline(entry)),
    },
  ];
}

export function buildCredentials(entry) {
  if (entry.transport.type === "stdio") {
    return (entry.transport.env ?? []).map((variable) => ({
      kind: "环境变量",
      name: variable.name,
      placeholder: envPlaceholder(variable.name),
      description: variable.description ?? "",
      required: variable.required ?? false,
      secret: variable.secret ?? false,
      obtain_at: variable.obtain_at ?? null,
    }));
  }

  const credentials = [];
  for (const header of entry.transport.headers ?? []) {
    credentials.push({
      kind: "Header",
      name: header.name,
      placeholder: headerPlaceholder(header),
      description: header.description,
      required: header.required ?? false,
      secret: header.secret ?? false,
      obtain_at: header.obtain_at ?? null,
    });
  }
  for (const [name, variable] of Object.entries(
    entry.transport.variables ?? {},
  )) {
    credentials.push({
      kind: "URL 参数",
      name: `{${name}}`,
      placeholder: variablePlaceholder(name),
      description: variable.description,
      required: variable.required ?? false,
      secret: variable.secret ?? false,
      obtain_at: variable.obtain_at ?? null,
    });
  }
  return credentials;
}

export function buildAuthNote(entry) {
  const credentials = buildCredentials(entry);
  if (credentials.length === 0) {
    return entry.transport.type === "stdio"
      ? "无需额外凭据。"
      : "该服务使用 OAuth 或客户端登录；首次连接会按客户端提示进入授权流程。";
  }

  const hasApplyLink = credentials.some((credential) => credential.obtain_at);
  const target =
    entry.transport.type === "stdio" ? "环境变量" : "Header 与 URL 参数";
  return hasApplyLink
    ? `将 ${target}的占位符替换为真实值；申请入口见下方凭据表。`
    : `将 ${target}的占位符替换为真实值；获取方式请参考服务商文档。`;
}
