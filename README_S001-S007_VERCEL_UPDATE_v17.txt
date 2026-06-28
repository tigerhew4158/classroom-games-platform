S001～S007 Vercel 更新包 v17

本版重点修正 S005：
- 修正点击“转动”没有任何反应。
- 加入 document capture 层级点击监听，不会再被旧按钮事件或遮罩拦截。
- 点击中心按钮或圆盘任意位置都会触发转动。
- 强制使用 inline important transform，让圆盘一定会出现旋转动画。
- 转动后继续抽出事件并进入原本流程。

上传方式：
1. 解压本 ZIP。
2. 把里面的 games 文件夹覆盖到 GitHub repo 根目录的 games 文件夹。
3. Vercel 重新部署后，用 Ctrl + F5 强制刷新。
4. 建议测试 S005 地址加入 ?lang=zh&v=17。
