const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const questionsDir = path.join(__dirname, '../subjects');
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
  
    // 获取题干文本并去除题号
    const pTags = div.querySelectorAll('p');
    if (pTags.length > 0) {
      const rawText = pTags[0].textContent.trim();
      questionObj.text = rawText.replace(/^\d+[\.\s\-:、]+/, '');
    }
  
    // 获取答案
    const answerEl = div.querySelector('.answer');
    if (answerEl) {
      questionObj.answer = answerEl.textContent.trim();
    }
  
    // 获取选择题选项
    const optionsContainer = div.querySelector('.mcq-options');
    if (optionsContainer) {
      const optionElements = optionsContainer.querySelectorAll('p, li');
      const optionsList = [];
      optionElements.forEach(p => {
        const match = p.textContent.match(/^\s*([A-D])[\.\s:-]?\s*(.+)$/i);
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
  
    // ✅ 获取图片路径（支持相对路径）
    const imgEl = div.querySelector('img');
    if (imgEl) {
      const src = imgEl.getAttribute('src');
      if (src && src.trim()) {
        questionObj.image = src.trim();
      }
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
