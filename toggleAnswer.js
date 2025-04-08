function toggleAnswer(questionNumber) {
    const answer = document.getElementById(`answer${questionNumber}`);
    const button = answer.previousElementSibling;
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        button.textContent = 'Show Answer';
    } else {
        answer.style.display = 'block';
        button.textContent = 'Hide Answer';
    }
}