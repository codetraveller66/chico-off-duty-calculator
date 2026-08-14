# 下班时间计算器 / Off Duty

一个纯前端、无需安装依赖的下班时间计算小工具。

## 直接运行

最简单的方式：双击 `index.html`，浏览器会直接打开。

推荐方式（可避免部分浏览器对本地文件的限制）：

```powershell
python -m http.server 8080
```

然后访问 <http://localhost:8080>。

如果没有 Python，也可使用 Node.js：

```powershell
npx serve .
```

## 检查清单

1. 输入上班时间、4–12 小时工作时长、0–2 小时休息时长，点击“计算下班时间”。
2. 检查跨午夜的结果是否标注“次日”。
3. 勾选任一“固定”，刷新页面，确认该项仍保留；取消勾选后再刷新，确认不再固定。
4. 点击“中 / EN / DE”检查三种语言。
5. 点击“换背景”，检查 10 套背景主题。
6. 修改时间，确认进度条、起止时间和 Chico 的位置会更新。
7. 点击进度条下方的 Chico，确认他会依次切换坐、趴、走、玩耍、抬爪和睡觉姿势，并更换气泡内容。

## 文件

- `index.html`：页面结构
- `styles.css`：响应式视觉样式
- `app.js`：计算、语言、固定值、背景和进度逻辑
- `assets/`：10 套背景图片及 Chico 的六姿势透明图集

## 图片来源与使用说明

- `Teach You a Lesson`、`Stranger Things`、`Game of Thrones`、`Sherlock`、`Attack on Titan` 背景来自对应作品在 TMDB 的公开宣传图片页面，版权归各自权利方所有，仅用于当前个人原型。公开发布或商业使用前，请另行取得授权。
- BTS 背景来自 Wikimedia Commons 的 `BTS for Dispatch White Day Special, 27 February 2019 02.jpg`，作者 Dispatch，采用 CC BY 3.0 授权。
- 四套中国建筑背景为本项目生成的原创氛围图。
- Chico 角色图集依据用户提供的两张 Chico 照片生成。
