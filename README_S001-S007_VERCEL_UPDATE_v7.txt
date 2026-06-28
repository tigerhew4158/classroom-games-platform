S001～S007 Vercel 更新包 v7

本版重点修正 S001 完整更新包问题：
- S001 老师设定下拉选单已直接写入 HTML 默认选项，不再依赖 JavaScript 运行后才生成。
- 即使浏览器缓存或脚本执行顺序不同，也不会再出现空白选单。
- 默认值：2组、5关、5分钟、8组/16张、答对后继续作答、答错后换下一组。
- 保留 v6 的最上层弹窗、载入示例题库、S003、S005 修正。

上传方式：
1. 解压本 ZIP。
2. 把里面的 games 文件夹上传到 GitHub repo 根目录。
3. 覆盖原本 games 文件夹。
4. Vercel 重新部署后，请打开 /games/memory_match_game/index.html?lang=zh&v=7 测试，或按 Ctrl + F5 强制刷新。
