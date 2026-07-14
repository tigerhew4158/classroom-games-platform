# v31 Supabase 老师账号数据库设置

这个版本修正「老师申请 / 管理员新增老师只存在本机浏览器」的问题。

## 1. Supabase 执行 SQL

进入 Supabase：

SQL Editor → New Query

复制 `supabase_platform_schema.sql` 全部内容执行。

它会建立 `platform_users` 表，用来保存老师账号、申请状态、授权模板、套餐类型与是否停用。

## 2. Vercel 环境变量

进入 `classroom-games-platform` 这个 Vercel 项目：

Settings → Environment Variables

确认有：

SUPABASE_URL=你的 Supabase Project URL
SUPABASE_SERVICE_ROLE_KEY=你的 sb_secret_...

如果之前只在 landing page 项目设置过，这里也要再设置一次，因为这是另一个 Vercel 项目。

## 3. 重新部署

设置好 Environment Variables 后：

Deployments → Redeploy

## 4. 测试流程

1. 前台填写老师账号申请。
2. 管理员登录：admin@lead.ai / admin123。
3. 进入管理员后台，看是否出现待批准老师。
4. 批准老师。
5. 换另一台电脑或无痕窗口，用老师电邮和密码登录。

## 重要说明

v31 之前的账号资料是在浏览器 localStorage，不是数据库，所以不同电脑不会同步。v31 开始才会同步到 Supabase。
