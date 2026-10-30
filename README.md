# dsh-mcp-center

一个以 **Git 仓库作为数据库** 的 MCP Server 市场。没有后端服务，没有外部数据库：每个条目是一个 YAML 文件，GitHub Actions 负责校验、投稿、同步与构建，GitHub Pages 负责展示。

仓库目标：

- 用 Issue Forms 和 Pull Request 维护目录数据；
- 用 JSON Schema 约束字段和传输方式；
- 用 CI 生成带 `verified` 标记的只读索引；
- 用官方 `server.json` 映射与 `modelcontextprotocol/registry` 生态互通；
- 用每日同步任务维护 remote 型 MCP 的工具清单和健康状态。

## 当前进度

第一阶段已完成：

- [x] 按首字母分片的 `registry/` 数据层与 10 个种子条目
- [x] `schema/registry.schema.json`
- [x] `scripts/validate.mjs` 校验 YAML、名称查重、仓库链接与传输配置
- [x] `scripts/build-index.mjs` 生成 CI 校验后的 `verified` 索引
- [x] `scripts/convert-to-official.mjs` 映射为官方 `server.json`
- [x] `.github/workflows/validate.yml`

第二阶段已完成：

- [x] Issue Forms 投稿入口
- [x] `on-issue.yml` 解析表单、校验、自动创建/更新 PR、失败时在 Issue 评论
- [x] `ci.yml` 校验 repository 404、npm/PyPI 包存在性、打上 `verified` 标签
- [x] `approval-gate` 强制要求维护者 approve
- [x] `sync.yml` 每日抓取 remote 型 MCP 的 `tools/list`
- [x] 连续 7 天失败创建 `possibly-broken` 追踪 Issue
- [x] stdio 同步明确跳过，等待沙箱方案

第三阶段已完成：

- [x] `build-web.mjs` 生成 `index.json` 与条目数据
- [x] `fetch-icons.mjs` 构建时抓取 favicon，失败回退 SVG
- [x] Astro 纯静态站点：首页 + 每条目预渲染详情页
- [x] 原生 TS 交互：搜索弹窗、URL 筛选、安装 Tab、复制、主题切换
- [x] 多客户端安装配置：DSH / Claude Desktop / Cursor / Cline
- [x] 深浅色主题、SEO / JSON-LD / sitemap
- [x] `pages.yml` 构建并部署 GitHub Pages

## 工作方式

```text
GitHub Issue Form
      │
      ▼
on-issue.yml ──► 解析为 registry/<首字母>/<name>.yaml
      │                 │
      │                 ▼
      │            validate.mjs
      │                 │
      ▼                 ▼
失败评论 ◄──── 失败   自动创建/更新 PR
                        │
                        ▼
                     ci.yml
              validate + 上游 404/包检查
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
         verified 标签       approval-gate
                                  │
                          维护者手动 approve
                                  │
                              手动合并

sync.yml（每日）
      │
      ├─ remote：initialize + tools/list
      ├─ 清单变化：PR "chore: sync tools"
      ├─ 连续失败 7 天：possibly-broken 追踪 Issue
      └─ stdio：跳过（TODO: 沙箱）

fetch-icons.mjs + build-web.mjs
      │
      ├─ web/public/icons/ + index.json
      ├─ web/src/data/index.json
      └─ Astro
            ├─ dist-site/index.html
            ├─ dist-site/servers/<slug>/index.html
            └─ pages.yml ──► GitHub Pages
```

校验类 workflow 不回写源 YAML。只有 `sync.yml` 会更新 `tools`、`last_checked` 和 `sync/state.json`，并通过 PR/状态提交进入 Git 历史。

## 目录结构

```text
.
├── registry/                     # 按 server name 首字母分片
│   ├── c/
│   ├── f/
│   ├── g/
│   ├── m/
│   ├── o/
│   ├── p/
│   └── s/
├── schema/
│   └── registry.schema.json      # 条目 JSON Schema（Draft 2020-12）
├── scripts/
│   ├── lib/registry.mjs          # 加载、Schema 校验与语义校验
│   ├── lib/stdio-package.mjs     # npx / pnpx / uvx 包推断
│   ├── lib/install-config.mjs    # 四客户端配置生成
│   ├── lib/tool-risk.mjs         # 副作用工具识别
│   ├── fetch-icons.mjs           # favicon 抓取 + SVG 回退
│   ├── validate.mjs              # 校验入口
│   ├── build-index.mjs           # 生成 dist/registry.json
│   ├── build-web.mjs             # 生成 index.json 与页面数据
│   ├── build-dsh-plugin.mjs      # 生成原生 DSH 插件快照
│   ├── relativize-assets.mjs      # 将 HTML 根路径改写为相对路径
│   ├── convert-to-official.mjs   # 转换为官方 server.json
│   ├── issue-form-to-registry.mjs# Issue Forms -> YAML
│   ├── check-upstream.mjs        # repository 404 / npm / PyPI 检查
│   ├── sync-tools.mjs            # remote MCP tools/list 同步
│   └── sync-health.mjs           # 7 天失败追踪 Issue
├── sync/
│   └── state.json                # 同步失败计数与最近状态
├── dsh-plugin/                   # 原生 DSH 插件包（设置 → 插件）
│   ├── client.js                 # build:plugin 生成
│   ├── catalog.json              # 插件数据快照
│   ├── cordis.patch.yml
│   └── src/client.template.js
├── web/
│   ├── public/                   # favicon、生成的 icons/ 与 index.json
│   └── src/
│       ├── pages/                # Astro 首页、详情页、sitemap、robots
│       ├── layouts/              # BaseLayout：head、主题、SEO、搜索弹窗
│       ├── components/           # Header、卡片、安装卡、搜索弹窗
│       ├── scripts/              # 原生 TS 交互
│       ├── lib/                  # 类型与格式化
│       ├── styles/global.css     # 手写设计 token 与响应式
│       └── data/index.json       # build-web 生成（gitignored）
├── docs/
│   └── BRANCH_PROTECTION.md      # 标签、Secrets、分支保护配置
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── submit-server.yml
│   └── workflows/
│       ├── validate.yml
│       ├── on-issue.yml
│       ├── ci.yml
│       ├── sync.yml
│       └── pages.yml
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## 快速开始

要求 Node.js `>=22.12.0`。

```bash
npm install
npm run check
```

`npm run check` 执行：

```text
validate.mjs -> build-index.mjs -> convert-to-official.mjs
```

本地开发市场：

```bash
npm run dev
```

`dev` 会先抓取图标、生成 index，再启动 Astro 开发服务器。本地若要启用真实 GitHub / 投稿链接：

```powershell
$env:SITE_REPO_URL="https://github.com/<owner>/dsh-mcp-center"
npm run dev
```

macOS / Linux：

```bash
SITE_REPO_URL=https://github.com/<owner>/dsh-mcp-center npm run dev
```

生产构建：

```bash
npm run build:site
npm run preview
```

`build:site` 生成 `index.json`、图标、静态详情页和 `dist-site/`，最后把 HTML 中的根路径资源链接改写为相对路径。GitHub Pages 路径由环境变量注入：

```text
SITE_BASE=/<repo-name>/
SITE_ORIGIN=https://<owner>.github.io
SITE_REPO_URL=https://github.com/<owner>/<repo>
```

本地预览默认 `SITE_BASE=/`。页面导航、卡片、图标、搜索索引以及 `_astro` 资源在构建后都会改写为相对路径；canonical、JSON-LD 和 sitemap 使用绝对 URL。GitHub / 投稿按钮在未设置 `SITE_REPO_URL` 时回退到 GitHub 首页，部署 workflow 会自动设置。

需要网络的上游检查单独运行：

```bash
GITHUB_TOKEN=... npm run check:upstream
```

构建结果：

| 路径 | 内容 |
| --- | --- |
| `dist/registry.json` | 供客户端消费的完整索引，条目 `verified: true` |
| `dist/index.json` | 市场数据，含安装配置与凭据说明 |
| `dist/official/*.json` | 每个条目对应的官方 `server.json` |
| `web/public/icons/` | 构建时抓取的本地图标与回退 SVG |
| `web/src/data/index.json` | Astro 构建时读取的页面数据 |
| `dist-site/` | 可部署的静态站点 |
| `dist/sync-summary.json` | 最近一次 tools 同步摘要（不提交） |

## 前端市场

技术栈：Astro 纯静态输出 + 手写 CSS + 原生 TypeScript 交互，无 UI 框架、无运行时后端。

视觉与交互：

- 深色默认，首次访问跟随 `prefers-color-scheme`，切换结果写入 `localStorage`；
- 主题脚本内联在 `<head>` 最前，并在 CSS 加载前设置背景色，避免闪白；
- 强调色仅蓝色 `#3b82f6`；官方徽章金色、已验证徽章蓝色；
- 首页：Hero、大搜索框、分类侧栏（移动端横向 chips）、官方/已验证/传输筛选；
- 卡片：本地图标、徽章、两行简介、分类、工具数、相对校验时间；
- 搜索与筛选状态写入 `?q=&cat=&official=&verified=&transport=`，支持分享与浏览器前进/后退；
- `⌘K` / `Ctrl+K` 全屏搜索弹窗：Fuse.js、↑↓ 选择、回车跳转、Esc 关闭、命中词高亮；
- 详情页：安装 Tab、代码复制、占位符高亮、必填变量黄色 callout、折叠工具列表、副作用 ⚠、红色 broken 警告；
- 每条目独立静态 HTML，含独立 title、description、canonical、JSON-LD；构建时生成 `sitemap.xml` 与 `robots.txt`。

图标：

- `fetch-icons.mjs` 在构建时抓取每个 `homepage` 的 favicon；
- 成功则保存到 `web/public/icons/`，失败生成“首字母 + 确定性低饱和底色”SVG；
- 页面只引用本地图标，不运行时热链外站。

详情页安装卡：

- 每个条目一个静态 HTML：`servers/<slug>/index.html`；
- 安装配置按 DSH / Claude Desktop / Cursor / Cline 分四个 Tab，选择记忆到 `localStorage`；
- 每个配置块可一键复制，1.5 秒后恢复；
- `env`、Header 和 URL 参数全部使用 `<YOUR_...>` 占位，不包含真实凭据；
- 凭据表展示申请地址，由 registry 中的 `obtain_at` 提供；
- 展示工具清单、仓库、主页、版本、许可证和最近校验时间。

客户端格式：

| 客户端 | stdio | remote |
| --- | --- | --- |
| DSH | `mcpServers` + `type: stdio` | `type: streamable-http` + `url` / `headers` |
| Claude Desktop | `claude_desktop_config.json` 直连 | JSON 配置只支持 stdio，因此用 `mcp-remote` 桥接；也可用 Settings → Connectors |
| Cursor | `command` / `args` / `env` | `url` / `headers` |
| Cline | `type: stdio` + `disabled` / `autoApprove` | `type: streamableHttp` 或 `sse` + `url` / `headers` |

Claude Desktop 的远程配置会标注为桥接方案；如果客户端版本已支持直接 URL Connectors，优先使用官方 Connectors UI。

## DSH 原生插件

`dsh-plugin/` 是一个不嵌入网页、不使用 iframe 的 DSH 插件：

- 在 **设置 → 插件** 增加「MCP 市场」Tab
- React 原生渲染，复用宿主主题 token 和 locale
- 搜索、分类、详情、四客户端安装 Tab、复制、必填变量、工具副作用
- 数据来自同一份 registry，构建时生成内联快照，离线可用
- 只复制配置，不自动创建 MCP 连接、不执行第三方工具

```bash
npm run build:web
npm run build:plugin
```

`build:plugin` 会把 `web/src/data/index.json` 和本地图标合并进 `dsh-plugin/client.js`。然后用 `plugin_manager` 安装：

```text
dsh-plugin/
```

安装后需要重启一次 DSH（或使用重启按钮/重新打开应用），Client 模块才会加载并显示新的「MCP 市场」Tab。

## 自动投稿

投稿入口：`.github/ISSUE_TEMPLATE/submit-server.yml`。

表单字段覆盖 Schema 中的人工可填字段：

- 名称、展示名、中文简介、英文简介、版本
- 主页、源码仓库、仓库子目录、厂商
- 传输类型与 stdio/remote 各自的字段
- 分类、标签、是否官方、可用客户端、许可证
- 环境变量、Header、URL 参数的说明、必填/敏感标记与申请地址

凭据行格式：

```text
NAME | 说明 | 是否必填 | 是否敏感 | 申请地址
```

`tools`、`verified`、`last_checked` 由机器人生成，不需要填写。

流程：

1. Issue 带 `submit` 标签时触发 `on-issue.yml`
2. `scripts/issue-form-to-registry.mjs` 解析表单，生成 `registry/<首字母>/<namespace>__<server>.yaml`
3. 运行 `validate.mjs`
4. 通过则用 `AUTOMATION_TOKEN` 推送 `submit/issue-<number>` 分支并创建 PR，正文包含 `Closes #<number>`
5. 失败则在 Issue 中更新一条带标记的状态评论，说明具体原因
6. 同一 Issue 被编辑后会重新解析，并更新原 PR

### 为什么需要 `AUTOMATION_TOKEN`

GitHub 会抑制由 `GITHUB_TOKEN` 创建的 PR 所触发的 `pull_request` workflow。如果只用 `GITHUB_TOKEN`，PR 会创建成功，但 `ci.yml` 永远不会运行。

因此必须配置一个有 Contents / Pull requests 写权限的 PAT 或 GitHub App token，保存为仓库 Secret：`AUTOMATION_TOKEN`。建议使用专用机器账号或 GitHub App，避免 PR 作者就是唯一维护者而导致无法自我 approve。没有配置时，workflow 会在 Issue 中直接评论缺少配置，而不是创建一个不会跑 CI 的 PR。

完整配置步骤见 [docs/BRANCH_PROTECTION.md](docs/BRANCH_PROTECTION.md)。

## PR CI

`.github/workflows/ci.yml` 在 PR 打开、更新、重新打开和 review 时运行。

`validate` job：

1. `npm run validate`：Schema、name 查重、文件路径、repository 格式、transport 组合
2. `npm run build && npm run convert:official && npm run build:site`：构建索引、官方格式与静态站点
3. `npx astro check`：检查 Astro 组件和原生 TS
4. `node scripts/check-upstream.mjs`：
   - `repository` 是否 404（GitHub API，失败时回退 `git ls-remote`）
   - stdio 条目对应的 npm / PyPI 包和版本是否存在
5. 全部通过后添加 `verified` 标签
6. 失败则移除 `verified` 标签

`approval-gate` job：

- 读取 PR 的 `reviewDecision`
- 只有 `APPROVED` 才通过
- 必须把 `validate` 和 `approval-gate` 配置为分支保护的必需检查，才能真正阻止未 approve 的合并

来自 fork 的 PR 使用只读 `GITHUB_TOKEN`，`verified` 标签可能无法自动添加；校验仍会执行。自动投稿 PR 由本仓库创建，不受影响。

## Remote tools 同步

`.github/workflows/sync.yml` 每天 `02:17 UTC`（`10:17 Asia/Shanghai`）运行，也支持手动触发。

只处理 `streamable_http` 和 `sse`：

1. 读取 `sync/state.json`
2. 对 remote 型执行 MCP `initialize`，再分页调用 `tools/list`
3. 工具清单变化时更新 YAML 的 `tools` 和 `last_checked`
4. 有变化则创建/更新 `chore/sync-tools` PR；差异消失时关闭过期 PR
5. 每次运行更新 `sync/state.json`
6. 连续失败达到 7 天，创建/更新带 `possibly-broken` 标签的追踪 Issue
7. 恢复成功后自动关闭追踪 Issue

**stdio 不执行**：stdio 同步需要执行第三方代码，存在供应链与沙箱逃逸风险。第一版明确跳过，后续放到隔离沙箱中运行。这是有意留下的 TODO，不是遗漏。

### 同步凭据

需要认证的条目通过仓库 Secret `MCP_SYNC_SECRETS` 提供值，registry 里仍然只保存变量名和说明。

```json
{
  "com.lkcoffee/order-mcp": {
    "headers": { "Authorization": "Bearer ..." }
  },
  "com.amap/mcp": {
    "variables": { "key": "..." }
  }
}
```

- 缺少必需凭据：状态记为 `skipped`，发送请求前直接跳过，不增加失败天数
- 未配置凭据但服务返回 401/403：同样记为 `skipped`
- 已配置凭据但认证失败、超时、404、工具名不合法：记为失败
- 错误写入 state 前会做脱敏和截断

`MCP_SYNC_SECRETS` 按条目 `name` 绑定。如果 PR 修改了同名条目的 remote URL，凭据会被发送到新的地址；Review remote URL 变更时必须核对目标主机。

同步带基础 SSRF 防护：只允许 HTTPS，拒绝 localhost、`.local`、`.internal` 和解析到私有地址的主机。

### `possibly-broken` 标签

registry 条目本身不是 GitHub Issue，无法直接给 YAML 文件打标签。因此同步任务会为每个连续失败条目维护一个追踪 Issue：

```text
[possibly-broken] com.example/mcp
```

Issue 带 `possibly-broken` 标签，正文包含条目路径、连续失败天数、最近成功时间和脱敏后的错误。条目恢复后 Issue 自动关闭；再次连续失败 7 天会重新打开。

失败计数按上海时区按天累计，同一天手动重跑不会重复加一天。状态持久化在 `sync/state.json`；`sync.yml` 会直接把这个文件提交到 `main`。如果启用了分支保护，需要允许 GitHub Actions bypass，或者自行改成状态 PR。

工具清单变化时，`sync.yml` 同样需要 `AUTOMATION_TOKEN` 才能创建可触发 CI 的工具同步 PR。详见配置文档。

## Registry 条目

### 命名与文件

`name` 必须是全局唯一的反向域名格式：

```text
<namespace>/<server-name>
```

- GitHub 项目推荐：`io.github.<owner>/<repo>`
- 厂商托管服务可使用真实域名倒序：`com.lkcoffee/order-mcp`、`cn.mcd/mcp`

允许字符为小写字母、数字、点、连字符、下划线；禁止大写、空格和多于一个斜杠。

文件按 server name 的首字母分片，文件名为把 `/` 替换成 `__`：

```text
com.lkcoffee/order-mcp
-> registry/o/com.lkcoffee__order-mcp.yaml

io.github.upstash/context7
-> registry/c/io.github.upstash__context7.yaml
```

首字母取 `<server-name>` 的第一个字符，而不是 namespace 的第一个字符。

### 字段

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 全局唯一名称，反向域名格式 |
| `display_name` | 是 | 展示名，最长 80 字符 |
| `description` | 是 | 简体中文简介，最长 200 字符，必须含中文 |
| `description_en` | 否 | 英文简介；转换官方格式时优先使用 |
| `version` | 是 | 确定版本，禁止 `latest` 与版本范围 |
| `homepage` | 是 | HTTPS 主页或文档地址 |
| `repository` | 否 | 源码仓库根地址，仅支持 GitHub/GitLab/Bitbucket/Gitee/Codeberg |
| `repository_subfolder` | 否 | Monorepo 子目录，对应官方 `repository.subfolder` |
| `vendor` | 是 | 厂商或维护方 |
| `transport` | 是 | `stdio` 或远程传输，见下 |
| `tools` | 是 | 初始为 `[]`，remote 型由每日同步更新；可标记 `side_effect` |
| `categories` | 是 | 1–3 个分类枚举值 |
| `tags` | 是 | 1–8 个短标签，用于前端筛选 |
| `official` | 是 | 是否官方出品 |
| `verified` | 是 | 源文件必须为 `false`，由 CI 构建产物标记 |
| `clients` | 是 | 已知可用客户端 slug，至少 1 个 |
| `license` | 是 | SPDX 标识；闭源托管服务写 `Proprietary` |
| `last_checked` | 是 | 最近核验日期，格式 `YYYY-MM-DD`，不能是未来 |

分类枚举：

```text
餐饮 / 出行 / 生活服务 / 办公 / 开发工具 / 数据库 / 搜索 / AI / 其他
```

`clients` 使用开放的小写 slug，不把客户端列表锁死在 Schema 中。当前种子使用：

```text
dsh / claude-desktop / cursor / cline
```

环境变量、Header 和 URL 模板变量可附带 `obtain_at`（HTTPS 地址），详情页会把它渲染为“去哪里申请”的链接。它只保存申请入口，不保存凭据值。

### stdio 型

只记录启动命令、参数和环境变量名，**不允许记录环境变量值**。

```yaml
transport:
  type: stdio
  command: npx
  args:
    - "-y"
    - "@modelcontextprotocol/server-filesystem@2.1.0"
    - "/path/to/allowed/directory"
  env:
    - name: EXAMPLE_API_KEY
      description: 示例 API Key
      obtain_at: https://example.com/settings
      required: false
      secret: true
```

### 远程型

`streamable_http` 与 `sse` 共用同一结构。Header 只写名称和说明，不写真实值；URL 可以包含 `{variable}` 模板。

```yaml
transport:
  type: streamable_http
  url: "https://mcp.amap.com/mcp?key={key}"
  headers: []
  variables:
    key:
      description: 高德开放平台 Web 服务 Key
      obtain_at: https://lbs.amap.com/api/mcp-server/create-project-and-key
      required: true
      secret: true
```

## 种子条目

10 个条目全部为官方或官方维护项目。

| 名称 | 展示名 | 传输 | 分类 | 厂商 |
| --- | --- | --- | --- | --- |
| `com.lkcoffee/order-mcp` | 瑞幸咖啡 | streamable_http | 餐饮 | 瑞幸咖啡 |
| `cn.mcd/mcp` | 麦当劳中国 | streamable_http | 餐饮 | 麦当劳中国 |
| `io.github.modelcontextprotocol/filesystem` | Filesystem | stdio | 开发工具 | Model Context Protocol |
| `io.github.modelcontextprotocol/fetch` | Fetch | stdio | 搜索 | Model Context Protocol |
| `io.github.github/github-mcp-server` | GitHub | streamable_http | 开发工具 | GitHub |
| `io.github.modelcontextprotocol/sqlite` | SQLite | stdio | 数据库 | Model Context Protocol |
| `com.notion/mcp` | Notion | streamable_http | 办公 | Notion |
| `io.github.microsoft/playwright-mcp` | Playwright MCP | stdio | 开发工具 | Microsoft |
| `io.github.upstash/context7` | Context7 | stdio | 开发工具 | Upstash |
| `com.amap/mcp` | 高德地图 | streamable_http | 出行 | 高德地图 |

## 校验规则

`scripts/validate.mjs` 执行两层校验。

Schema 层：

- 拒绝未知字段；
- 校验 URL、日期、枚举、唯一性和长度；
- 根据 `transport.type` 强制 stdio/remote 的字段组合。

语义层：

- `name` 全局查重；
- 文件路径与 `name`、首字母分片一致；
- `description` 必须包含中文；
- `tags` 为 1–8 个唯一短标签；
- `obtain_at` 必须是 HTTPS 地址；
- `repository` 必须是 HTTPS 且为 `owner/repo` 根地址；
- `repository_subfolder` 必须是干净相对路径；
- stdio 必须有 `command`，环境变量名不得重复；
- remote 必须有 HTTPS `url`，URL 模板变量必须已在 `variables` 中声明；
- URL 中出现明文的 `key` / `token` / `secret` 类参数会被拒绝；
- Header 名不得重复（大小写不敏感）；
- 工具名不得重复；
- `last_checked` 不能是未来日期；
- 源文件 `verified` 必须为 `false`。

任意错误都会让 CI 失败并输出文件路径与字段路径。

## 映射到官方 server.json

```bash
npm run convert:official
```

默认输出到 `dist/official/`。也可以查看单个条目：

```bash
node scripts/convert-to-official.mjs registry/m/com.notion__mcp.yaml --stdout
```

字段映射：

| 本仓库 | 官方 `server.json` |
| --- | --- |
| `name` | `name` |
| `display_name` | `title` |
| `description_en` / `description` | `description` |
| `version` | `version` |
| `homepage` | `websiteUrl` |
| `repository` + `repository_subfolder` | `repository.url` + `repository.subfolder` |
| stdio `command` / `args` / `env` | `packages[]`、`packageArguments`、`environmentVariables` |
| remote `url` / `headers` / `variables` | `remotes[]` |
| 其余市场字段 | `_meta["io.modelcontextprotocol.registry/publisher-provided"]` |

转换规则：

- 官方 Schema：<https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json>
- 官方 `description` 最长 100 字符；超长会直接报错，不会静默截断。
- stdio 目前可从 `npx`、`pnpx`、`uvx` 推断包管理器；参数中的包版本必须与顶层 `version` 一致。
- 其他启动命令（例如裸 `node`、`docker`）会转换失败，需要扩展映射规则。
- 当前 10 个种子输出已逐一通过官方 Schema（2025-12-11 版本）校验；转换脚本本身不联网，也不依赖远端 Schema。

## `verified` 的可信路径

1. 源 YAML 固定写 `verified: false`，任何人都不能自封认证。
2. `validate.yml` / `ci.yml` 运行 Schema 与语义校验；PR 的必需检查来自 `ci.yml`。
3. PR 全部检查通过后，`ci.yml` 添加 GitHub `verified` 标签。
4. `build-index.mjs` 只为通过校验的条目生成 `verified: true`。
5. `dist/registry.json` 同时记录 CI 的仓库、commit、ref 和校验方法。

因此：

```text
registry/**/*.yaml     verified: false   # 数据源，未认证
GitHub PR label        verified          # CI 全部通过
dist/registry.json     verified: true    # 构建产物
```

## CI 与部署

| Workflow | 触发 | 作用 |
| --- | --- | --- |
| `validate.yml` | push main / 手动 | 校验、构建索引、转换官方格式、上传 Artifact |
| `on-issue.yml` | 带 `submit` 标签的 Issue | 解析表单、创建/更新 PR、评论结果 |
| `ci.yml` | PR 与 review | 上游检查、`verified` 标签、`approval-gate` |
| `sync.yml` | 每日 / 手动 | remote tools 同步、状态持久化、健康 Issue |
| `pages.yml` | push main / 手动 | 生成静态市场并部署 GitHub Pages |

仓库设置、Secrets 和分支保护步骤见 [docs/BRANCH_PROTECTION.md](docs/BRANCH_PROTECTION.md)。

### GitHub Pages

1. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**
2. 推送 `main` 后，`pages.yml` 会执行 `npm run build:site`
3. workflow 自动注入仓库路径：
   - 项目站点：`SITE_BASE=/<repo-name>/`
   - 用户/组织站点（`<owner>.github.io`）自动使用 `/`
   - `SITE_ORIGIN`：优先读取仓库变量 `SITE_ORIGIN`，否则为 `https://<owner>.github.io`
   - `SITE_REPO_URL=https://github.com/<owner>/<repo>`
4. 部署产物为 `dist-site/`，包含 `index.json`、Schema、sitemap、robots 和每个条目的静态详情页

本地 `npm run build:site` 默认使用 `/` 和 `http://localhost:4321`，方便 `npm run preview`；Pages 的路径与 canonical 前缀由 workflow 环境变量覆盖。自定义域名需要调整 `SITE_ORIGIN` 和 `SITE_BASE`。

## 贡献条目

推荐直接使用 Issue Forms 投稿。更新现有条目请提交 Pull Request。

1. 新增 `registry/<server-name 首字母>/<namespace>__<server>.yaml`
2. 从其他条目复制结构，填写真实元数据
3. `tools` 初始保持 `[]`，`verified` 保持 `false`
4. 不要写入任何 Token、Key 或环境变量值
5. 本地运行 `npm run check && npm run build:site`
6. 提交 Pull Request

## 安全约定

- 仓库不存储任何凭据。
- `env` 只记录变量名、说明、是否必填、是否敏感。
- 远程 Header 只记录名称和说明，不记录真实 Header 值。
- URL 模板变量只记录用途，不记录值。
- 前端安装配置中的凭据位置一律输出 `<YOUR_...>` 占位符。
- 不信任条目自带的 `official` 或 `verified`；下游应使用 CI 产物。
- 同步只连接 HTTPS 公网地址，并拒绝私有地址解析结果。
- stdio 型不执行第三方代码，避免在 CI runner 上运行不受信任的包。
- `AUTOMATION_TOKEN` 和 `MCP_SYNC_SECRETS` 只存放在 GitHub Secrets。

## License

MIT
