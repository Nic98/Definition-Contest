function calculateAnswerWordCount() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        const answerDiv = question.querySelector('.answer');
        if (!answerDiv) return;
        
        // Skip MCQs
        if (question.querySelector('.mcq-options')) return;
        
        let answerText = answerDiv.textContent.replace('Key:', '').trim();
        
        // Remove all parenthetical content including the parentheses
        answerText = answerText.replace(/\([^)]*\)/g, '').trim();
        
        // Split answer by slashes to handle multiple blanks
        const answers = answerText.split('/').map(a => a.trim());
        
        // Count words for each answer part
        const wordCounts = answers.map(answer => 
            answer.split(/\s+/).filter(word => word).length
        );
        
        // Join word counts with slashes
        const wordCountDisplay = wordCounts.join('/');
        
        // Add word count display to question
        const button = question.querySelector('button');
        let stem = button?.previousElementSibling;
        while(stem && stem.tagName !== 'P') {
            stem = stem.previousElementSibling;
        }
        
        if (stem) {
            let countSpan = stem.querySelector('.word-count');
            if (!countSpan) {
                countSpan = document.createElement('span');
                countSpan.className = 'word-count';
                stem.appendChild(countSpan);
            }
            countSpan.textContent = ` (words:${wordCountDisplay})`;
        }
    });
}

document.addEventListener('DOMContentLoaded', calculateAnswerWordCount);