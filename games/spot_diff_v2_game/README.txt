大家来找碴(自帶后台)

运行方法：
1. 解压 zip
2. 用浏览器打开 index.html
3. 或使用 VS Code Live Server / 本地 HTTP Server 运行

后台账号：
admin

后台密码：
123456

关卡图片要求：
1. 左图、右图、答案图必须同尺寸
2. 答案图建议 PNG
3. 答案图红色区域代表正确答案区域
4. 玩家点击左图或右图，都会对照答案图红区判定

v2 稳定点：
- 拆分 HTML / CSS / JS，避免 Canva 单文件过长
- base canvas + overlay canvas 双层绘制
- 点对立即在左右图出圈
- 点错立即出 X
- 后台支持右图 + 答案 PNG 叠加预览
- 自动全屏
- 排行榜
- 关卡新增 / 编辑 / 删除
