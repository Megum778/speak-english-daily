# 新概念英语 · 口语输出打卡

基于《新概念英语 2》和《新概念英语 3》的英语口语输出训练工具。通过每日录音 + 复盘的方式，提升英语口语表达能力。

## 项目目标

- 以《新概念英语 2 & 3》为核心学习材料，系统练习口语输出
- 提供可迁移的「复述表达框架」，帮助用户从"读课文"过渡到"讲出来"
- 支持录音、回听、复盘的完整学习闭环

## 核心功能

- **教材与课次选择**：支持新概念英语第 2 册（故事复述）和第 3 册（观点总结）
- **今日口语目标**：根据教材自动显示不同的口语目标和要求
- **原文粘贴区**：用户手动粘贴课文原文，智能展开/折叠 + 字数统计
- **复述表达框架**：每课 5 条可迁移口语模板，按基础复述/冲突转折/个人观点分组展示
- **输出步骤指引**：NCE2 故事复述四步法 / NCE3 观点总结四步法
- **二次录音**：支持第一遍 + 第二遍录音，推荐先回听再改进
- **录音时长校验**：NCE2 至少 45 秒，NCE3 至少 60 秒方可打卡
- **每日复盘**：记录复述内容、卡壳点、学到的表达、改进方向、自我评分
- **我的表达库**：自动汇总所有打卡记录中的表达，按类型分类展示
- **学习统计**：累计打卡天数、连续打卡、本周录音时长、每册完成进度
- **历史记录**：查看最近 7 天打卡记录，支持删除和清空

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview
```

## 部署到 Vercel

### 方式一：通过 GitHub 自动部署（推荐）

1. 将项目推送到 GitHub 仓库
2. 打开 [Vercel](https://vercel.com) 并登录
3. 点击 **Add New → Project**
4. 导入你的 GitHub 仓库
5. 配置如下：
   - **Framework Preset**：Vite
   - **Build Command**：`npm run build`
   - **Output Directory**：`dist`
6. 点击 **Deploy**

之后每次 `git push` 到主分支，Vercel 会自动重新部署。

### 方式二：通过 Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

按提示选择配置即可。

### 部署注意事项

- **麦克风权限**：Vercel 默认提供 HTTPS，浏览器麦克风 API 在 HTTPS 下才能正常工作
- **数据存储**：所有打卡数据存储在浏览器 `localStorage` 中，不同设备/浏览器之间数据独立
- **SPA 路由**：项目已配置 `vercel.json` 中的 SPA fallback，刷新页面不会 404

## 技术栈

- **框架**：React 19 + Vite 5
- **样式**：Tailwind CSS 3
- **录音**：Browser MediaRecorder API
- **存储**：localStorage
- **部署**：Vercel

## 目录结构

```
src/
  App.jsx               # 应用入口，打卡流程控制
  components/
    DailyTask.jsx        # 教材/课次选择 + 原文粘贴 + 学习材料展示
    Recorder.jsx         # 二次录音控制（第一遍/第二遍）
    ReflectionForm.jsx   # 每日复盘表单
    HeaderStats.jsx      # 统计数据展示
    HistoryList.jsx      # 历史打卡记录
    ExpressionBank.jsx   # 我的表达库
  hooks/
    useRecorder.js       # MediaRecorder 封装 Hook
  utils/
    storage.js           # localStorage 读写 + NCE 进度统计
  data/
    materials.js         # 156 课元数据（不含原文/音频）
vercel.json              # Vercel SPA fallback 配置
```

## 版权说明

本应用不内置《新概念英语》任何课文原文或音频。所有原文内容由用户自行购买正版教材后手动粘贴使用。
