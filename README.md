# 🧠 Definition Contest - Subject-Based Random Question System

> 一个用于中学生/高中生复习题的 **多学科题库系统**，支持从多个 HTML 文件中提取题目，格式化输出为 JavaScript 模块，并在网页中随机抽取题目进行展示。

---

## ✨ 功能特点

- ✅ **多科目支持**：支持 Biology、Math、Physics、Economics 等任意添加的学科
- ✅ **自动提取题库**：通过 Node.js 脚本自动提取本地 HTML 文件中的题目和答案
- ✅ **支持多种题型**：
  - 简答 / 填空题
  - 多项选择题（MCQ）
  - 图片题
- ✅ **标准化输出格式**，便于前端模块化引用
- ✅ **随机抽题**：每次页面加载或点击按钮，都会随机抽取 30 道题
- ✅ **无后端数据库**：全部本地文件结构，易于部署和维护

---

## 🗂️ 文件结构

```plaintext
Definition-Contest/
│
├── extractor/                # 提取器模块
│   ├── extract.js            # Node.js 解析 HTML 文件生成题库脚本
│   └── allQuestions.js       # 提取后的统一题库模块 (自动生成)
│
├── questions/                # 所有题库的 HTML 文件（每个学科一个）
│   ├── biology.html
│   ├── chinese.html
│   ├── english.html
│   └── ...                   # 更多科目可自由添加
│
├── round-two.html            # 抽题页面，随机显示题目
├── toggleAnswer.js           # 控制“显示答案”按钮逻辑
├── backbutton.js             # 返回按钮，支持本地跳转回首页
├── countword.js              # 可选：用于统计答案词数
├── style.css                 # 页面样式
└── README.md                 # 项目说明文档