# 仓库自动化配置

第二阶段依赖四类 GitHub 仓库设置：标签、Secrets、Actions 写权限、分支保护。

## 1. 创建标签

```bash
gh label create submit \
  --repo OWNER/dsh-mcp-center \
  --color 1d76db \
  --description "Issue form submission"

gh label create verified \
  --repo OWNER/dsh-mcp-center \
  --color 0e8a16 \
  --description "Registry validation and upstream checks passed"

gh label create possibly-broken \
  --repo OWNER/dsh-mcp-center \
  --color b60205 \
  --description "Remote MCP tool sync has failed for 7 consecutive days"
```

`submit` 必须存在，Issue Forms 会把它加到新 Issue 上。`verified` 和 `possibly-broken` 会在首次使用时由 workflow 尝试创建，但提前创建更清晰。

## 2. 配置 Secrets

### `AUTOMATION_TOKEN`（必需）

`on-issue.yml` 和 `sync.yml` 要用它创建/更新 PR 以及推送分支。

**为什么不能只用 `GITHUB_TOKEN`：** GitHub 会抑制由 `GITHUB_TOKEN` 触发的 `pull_request` 事件，PR 不会自动运行 `ci.yml`。必须使用 PAT 或 GitHub App token 产生真实事件。

推荐创建一个 fine-grained PAT：

- Repository access：只选 `dsh-mcp-center`
- Contents：Read and write
- Pull requests：Read and write
- Metadata：Read-only

保存为仓库 Secret：`AUTOMATION_TOKEN`。

如果使用 classic PAT，至少需要 `repo` scope。

**建议使用专用机器账号或 GitHub App token，而不是唯一维护者本人的 PAT。** PR 作者不能 approve 自己的 PR；如果机器人用唯一维护者的身份开 PR，这个 PR 将无法满足“1 个 approval”的分支保护规则。

### `MCP_SYNC_SECRETS`（可选）

用于给需要认证的 remote MCP 提供同步凭据。值是 JSON：

```json
{
  "com.lkcoffee/order-mcp": {
    "headers": {
      "Authorization": "Bearer 你的-token"
    }
  },
  "com.amap/mcp": {
    "variables": {
      "key": "你的高德-Key"
    }
  }
}
```

只保存到 GitHub Secret，不写入 registry 文件。没有配置凭据的条目不发送请求，状态记为 `skipped`，不计入连续失败。

## 3. 开启 Actions 写权限

仓库 **Settings → Actions → General → Workflow permissions**：

- 选择 **Read and write permissions**
- 保存

workflow 文件里也显式声明了 `permissions`，但仓库级设置过低时写操作仍可能被拒绝。

## 4. 分支保护

仓库 **Settings → Rules → Rulesets → New branch ruleset**，目标分支 `main`：

1. 勾选 **Require a pull request before merging**
2. Required approvals：`1`
3. 勾选 **Dismiss stale pull request approvals when new commits are pushed**
4. 勾选 **Require status checks to pass**
5. 添加两个必需检查：
   - `validate`
   - `approval-gate`
6. 勾选 **Block force pushes**
7. 禁止删除 `main`

`approval-gate` 检查 `reviewDecision === APPROVED`。仅靠 workflow 不能阻止合并，必须把它设为必需检查，分支保护才会真正拦截未 approve 的 PR。

### 同步状态直推与分支保护

`sync.yml` 每天会把 `sync/state.json` 直接提交到 `main`。如果启用了分支保护，需要二选一：

1. 在 Ruleset 的 **Bypass list** 中加入 **GitHub Actions**（推荐，仅用于自动化状态提交）；
2. 不允许 bypass，并把 `sync.yml` 改成通过 PR 更新状态（需要自行调整 workflow）。

如果不加 bypass，状态提交会失败，连续失败计数无法累计。

## 5. 已知限制

- 来自 fork 的 PR 使用只读 `GITHUB_TOKEN`，`ci.yml` 无法自动添加 `verified` 标签；校验仍会执行，维护者可手动补标签。自动投稿 PR 由本仓库 Actions 创建，不受影响。
- `AUTOMATION_TOKEN` 缺失时，`on-issue.yml` 会在 Issue 中评论明确原因，而不会创建一个永远不会触发 CI 的 PR。
- `MCP_SYNC_SECRETS` 未配置时，需要认证的 remote 条目会被跳过，不会误报 `possibly-broken`。

## 6. GitHub Pages

仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

`pages.yml` 在 `main` 推送时构建 `dist-site/` 并部署，自动注入：

- `SITE_BASE`：项目站点为 `/<repo-name>/`，`<owner>.github.io` 用户站为 `/`
- `SITE_ORIGIN`：`https://<owner>.github.io`
- `SITE_REPO_URL`：当前 GitHub 仓库地址

如果使用自定义域名，需要把 `SITE_ORIGIN` 改成自定义域名，并相应调整 `SITE_BASE`。

## 7. 首次验收

1. 用 Issue Forms 提交一个测试条目
2. 确认机器人创建 PR、PR CI 运行、`verified` 标签出现
3. 确认未 approve 时 `approval-gate` 失败
4. approve 后 `approval-gate` 通过，但不会自动合并
5. 手动触发 `Sync remote tools`，确认 `sync/state.json` 更新
6. 连续失败 7 天后确认出现带 `possibly-broken` 标签的追踪 Issue
7. 确认 GitHub Pages 的市场页、搜索、筛选和详情页均可访问
