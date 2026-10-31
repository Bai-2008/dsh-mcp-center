# dsh-mcp-center

一个原生 DSH 插件：在 **设置 → 插件** 中增加「MCP 市场」Tab，浏览 [dsh-mcp-center](https://bai-2008.github.io/dsh-mcp-center/) 的 MCP Server 目录。

它不嵌入网站，也不使用 iframe。页面由 React 原生组件渲染，目录和安装配置在运行时从线上 MCP 市场加载。

## 功能

- 搜索名称、描述、分类和工具
- 分类筛选
- 官方 / 已验证 / 传输方式徽章
- 查看 DSH、Claude Desktop、Cursor、Cline 四套安装配置
- 一键复制配置，`<YOUR_...>` 占位符高亮
- 必填变量和申请地址
- 工具列表与副作用 `⚠` 标记
- `possibly-broken` 警告
- 链接到线上详情页

连接生命周期（内置原生 MCP 引擎，不需要 `dsh-mcp-connector`）：

- 安装：在插件内填写凭据，直接创建 `@deepseek-ai/dsh-mcp-client` 条目并连接
- 卸载：确认后移除本机连接条目
- 检查：检查原生 loader 条目与已注册工具
- 管理：启用/停用、重连、重命名、始终/按会话注入、查看工具
- 状态：从 DSH 原生工具注册表统计 `mcp__<server>__*` 工具
- 凭据：安装时把输入项复制到插件自己的本机副本；编辑窗口可查看/显示明文，并可补录旧连接
- 凭据副本位置：`$DSH_PROFILE_DIR/dsh-mcp-center/credentials.json`（本地明文，尽量设为 600；不上传）
- 备份：导出脱敏 JSON，创建本机快照并恢复
- 更新：刷新连接状态并检查全部连接
- 编辑：读取原生连接 JSON，修改后保存并重连
- 迁移：首次启动会读取旧 `mcp_connector.json` 的本机连接记录，自动转换成原生连接

所有连接操作都走插件自己的同源 HTTP API `/dsh-mcp-center/api/mcp`；插件不执行 MCP 工具。
目前原生引擎覆盖 **Streamable HTTP + Headers** 和 **stdio**。需要浏览器 OAuth 的服务会返回明确提示，不会假装安装成功。

## 安装

在 DSH 工作区中，用 `plugin_manager` 安装本目录：

```text
C:\Users\36184\Documents\deepseek-harness\default-workspace\dsh-mcp-center\dsh-plugin
```

或安装打包后的 tgz。安装后需要**重启一次 DSH**，然后打开 **设置 → 插件**，会出现「MCP 市场」Tab。

## 数据更新

插件启动时会通过 Host 代理拉取线上目录：

```text
https://bai-2008.github.io/dsh-mcp-center/index.json
```

- 目录和安装配置由网站构建产物提供，**新增 MCP 不需要重新发布插件**
- 多源回退：GitHub Pages → GitHub raw → gh-proxy → ghproxy.net → ghfast.top → moeyy → llkk
- 每个源 8 秒超时，首个成功返回的目录生效；全部失败才使用本机缓存
- 本机缓存 5 分钟，页面上的「刷新目录」可强制拉取
- 远端全部失败且没有缓存时，页面提示「目录暂时不可用」；插件不再内置目录快照
- 缓存位置：`$DSH_PROFILE_DIR/dsh-mcp-center/catalog-cache.json`
- `catalog/index.json` 是给 raw/gh-proxy 使用的仓库内快照，不打包进插件

插件包内的 `client.js` 只包含界面代码和文案，不包含 MCP 目录。修改插件代码或文案后需要：

```bash
npm run build:plugin
```

然后重新安装或重启插件，让新的 Client 模块生效。

## 边界

- 这是目录和连接生命周期界面，不在插件内执行第三方 MCP 工具。
- 真正的 MCP transport、连接、工具注册和审批由 DSH 内置的 `@deepseek-ai/dsh-mcp-client` 负责。
- 原生引擎当前支持 Streamable HTTP + Headers 和 stdio；OAuth 专用服务需要手动提供 Header 或后续扩展。
- 对只支持 MCP 2025-06-18 的旧版 HTTP 服务（例如瑞幸）自动启用内置 stdio 协议桥，避免新协议握手失败。
- 安装表单会把凭据写入本机连接，并在插件自己的本机副本中保存一份；不会上传到市场网站。
- 副本文件是本地明文，安全边界等同于当前 Windows 用户；不需要时可在卸载连接或删除该文件。
- 图标在构建时转成内联 data URI，不依赖外站热链。
