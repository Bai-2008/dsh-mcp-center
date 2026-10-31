# dsh-mcp-center

一个原生 DSH 插件：在 **设置 → 插件** 中增加「MCP 市场」Tab，浏览 [dsh-mcp-center](https://bai-2008.github.io/dsh-mcp-center/) 的 MCP Server 目录。

它不嵌入网站，也不使用 iframe。页面由 React 原生组件渲染，并从同一份 registry 数据生成快照。

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

连接生命周期（依赖 `dsh-mcp-connector`）：

- 安装：在插件内填写凭据，直接创建并校验本机 MCP 连接
- 卸载：确认后断开连接
- 检查：调用健康检查，结果直接显示在连接行内
- 管理：启用/停用、重连、重命名、始终/按会话注入、查看缓存工具
- 状态：按连接器健康状态显示，并参考缓存工具列表，避免把已连接误报成未连接
- 凭据：安装时把输入项复制到插件自己的本机副本；编辑窗口可查看/显示明文，并可补录旧连接
- 凭据副本位置：`$DSH_PROFILE_DIR/dsh-mcp-center/credentials.json`（本地明文，尽量设为 600；不上传）
- 备份：导出脱敏 JSON，创建本机快照并原子恢复
- 更新：刷新连接器目录并检查全部连接
- 编辑：读取标准化连接 JSON，修改后保存并重连

所有连接操作都走 MCP 连接器的同源 HTTP API；插件不执行 MCP 工具。
安装时优先使用连接器的手动连接配置（`configure`），无凭据的远程 OAuth 服务会回退到连接器目录的 `connect`。

## 安装

在 DSH 工作区中，用 `plugin_manager` 安装本目录：

```text
C:\Users\36184\Documents\deepseek-harness\default-workspace\dsh-mcp-center\dsh-plugin
```

或安装打包后的 tgz。安装后需要**重启一次 DSH**，然后打开 **设置 → 插件**，会出现「MCP 市场」Tab。

## 数据更新

插件包内的 `client.js` 是生成文件，数据来自仓库的 `web/src/data/index.json`。

```bash
npm run build:web
npm run build:plugin
```

然后重新安装或重启插件，让新的 Client 模块生效。

## 边界

- 这是目录和连接生命周期界面，不在插件内执行第三方 MCP 工具。
- 真正的 MCP transport、OAuth、凭据、工具注册和审批由 `dsh-mcp-connector` 与 DSH 负责。
- 安装表单会把凭据写入本机连接，并在插件自己的本机副本中保存一份；不会上传到市场网站。
- 副本文件是本地明文，安全边界等同于当前 Windows 用户；不需要时可在卸载连接或删除该文件。
- 图标在构建时转成内联 data URI，不依赖外站热链。
