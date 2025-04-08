// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    calculateAnswerWordCount();
    
    // Add Back to Home button if it doesn't exist
    const backButton = document.createElement('button');
    backButton.textContent = '← Back to Home';
    backButton.className = 'back-button';
    backButton.onclick = () => {
        window.location.href = 'index.html'; // Change this to your home page URL
    };
    
    // Insert at the top of the body
    document.body.insertBefore(backButton, document.body.firstChild);
    
    // Existing toggleAnswer function
    window.toggleAnswer = function(questionNumber) {
        const answer = document.getElementById(`answer${questionNumber}`);
        const button = answer.previousElementSibling;
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            button.textContent = 'Show Answer';
        } else {
            answer.style.display = 'block';
            button.textContent = 'Hide Answer';
        }
    };
});