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
```

## 🛠️ 使用指南 | How to Use
### 1️⃣ 生成题库 | Generate allQuestions.js

确保你已安装 Node.js
Make sure Node.js is installed.

cd extractor
node extract.js

✅ 自动从 ../questions/ 文件夹读取所有 HTML，提取 .question 元素，生成结构化题库。
✅ Extracts all .question elements from each subject HTML page and outputs allQuestions.js.

### 2️⃣ 启动本地服务器 | Start Local Server

    ⚠️ 必须使用本地服务器打开页面，不能使用 file://，否则无法加载模块
    Must open using a local server (not file://) to enable module imports

- 方法一：Python HTTP 服务 | Python (built-in)

  cd Definition-Contest
python3 -m http.server 8080

- 方法二：Node http-server

  npm install -g http-server
http-server -p 8080

- 方法三：VSCode Live Server 插件

  打开 round-two.html → 右键选择 "Open with Live Server"

  然后访问页面：
  Visit in browser:

  http://localhost:8080/extractor/round-two.html

--- 

## 📦 输出格式样例 | Sample Extracted Question

{
  subject: "Biology",

  text: "The diagram shows the structures in a reflex arc. What is X?",

  answer: "B. Relay neurone",

  isMultipleChoice: true,

  options: [
    "A. Effector",
    "B. Relay neurone",
    "C. Sensory neurone",
    "D. Synapse"
  ],

  image: "./Biology/q29.png"
}

## 👤 作者 | Author

Gregg (Yuhao)
📅 最后更新 | Last updated: 2025年4月10日

🤖 技术协助 | With technical help from ChatGPT (OpenAI) + Manus AI + DeepSeek

Contact

Email: foxnemonemo@gmail.com
GitHub: @Nic98

## 🤝 Acknowledgments

    WHBC Definition Contest Committee

    All subject matter contributors

    Inspiration from academic quiz platforms

## 📝 IT License

你可以自由使用、修改、分发本项目代码，但请保留署名与来源。
You are free to use, modify, and distribute this project under the MIT License, with attribution.

🌟 欢迎反馈和贡献 | Feedback & Contribution

欢迎你提交 Issue、Pull Request 或提出功能建议。
You're welcome to open Issues, send Pull Requests, or suggest features!

如果你喜欢这个项目，请点个 ⭐️ Star!
If you find this project helpful, please consider giving it a ⭐️ on GitHub!