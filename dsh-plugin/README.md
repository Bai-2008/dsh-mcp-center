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

- 这是目录和配置复制器，不会自动创建 MCP 连接、不安装第三方 MCP Server、不执行工具。
- 要连接某个服务，请把复制的配置带到 MCP 连接器，并自行填写凭据。
- 图标在构建时转成内联 data URI，不依赖外站热链。
