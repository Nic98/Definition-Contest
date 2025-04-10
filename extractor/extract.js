const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const questionsDir = path.join(__dirname, '../');
const outputPath = path.join(__dirname, 'allQuestions.js');
const excludeFiles = ['round-two.html', 'template.html'];

const questionData = [];

const files = fs.readdirSync(questionsDir).filter(file =>
  file.endsWith('.html') && !excludeFiles.includes(file)
);

files.forEach(file => {
  const filePath = path.join(questionsDir, file);
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const subject = file.replace('.html', '');
  const questions = document.querySelectorAll('.question');

  questions.forEach(div => {
    const questionObj = {
      subject: capitalizeFirst(subject),
      text: '',
      answer: '',
    };

    // 获取题干文本
    const pTags = div.querySelectorAll('p');
    if (pTags.length > 0) {
      questionObj.text = pTags[0].textContent.trim();
    }

    // 获取答案
    const answerEl = div.querySelector('.answer');
    if (answerEl) {
      questionObj.answer = answerEl.textContent.trim();
    }

    // 获取选择题选项（如果有）
    const optionsContainer = div.querySelector('.mcq-options');
    if (optionsContainer) {
      const optionsList = [];
      const optionItems = optionsContainer.querySelectorAll('p, li');
      optionItems.forEach(item => {
        const txt = item.textContent.trim();
        const match = txt.match(/^([A-D])[\.\s:-]?\s*(.+)$/i);
        if (match) {
          const key = match[1].toUpperCase();
          const value = match[2].trim();
          optionsList.push(`${key}. ${value}`);
        }
      });

      if (optionsList.length > 0) {
        questionObj.isMultipleChoice = true;
        questionObj.options = optionsList;
      }
    }

    // 获取图片（如果有）
    const imgEl = div.querySelector('img');
    if (imgEl && imgEl.src) {
      questionObj.image = imgEl.getAttribute('src');
    }

    questionData.push(questionObj);
  });
});

// 写入到 JS 文件
const output = `const allQuestions = ${JSON.stringify(questionData, null, 2)};\n\nexport default allQuestions;\n`;

fs.writeFileSync(outputPath, output);
console.log(`✅ 已提取 ${questionData.length} 道题目，并保存为 ${outputPath}`);

// 小写转首字母大写
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}