S001～S007 Vercel 更新包 v25

本版修正 S005 无法开始游戏的问题。
原因：S005 v24 初始化时先执行语言渲染，尚未建立队伍资料，导致脚本中断，开始按钮没有完成绑定。

v25 修正：
- 先建立队伍，再渲染语言与画面。
- renderHud 加入安全保护。
- 开始游戏按钮加入紧急保险绑定。
- 移除底部 LEAD AI Classroom Game Box · S005 字样。
- 保留 S005 稳定得分、自动换队、正圆转盘、题目弹窗、三语、比例选择。

上传方式：解压后，把 games 文件夹覆盖到 GitHub repo 根目录的 games 文件夹。部署后用 Ctrl + F5 强制刷新。
建议测试地址：/games/lucky_wheel_quiz_game/index.html?lang=zh&v=25
