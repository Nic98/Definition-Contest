// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    
    // Add Back to Home button if it doesn't exist
    const backButton = document.createElement('button');
    backButton.textContent = '← Back to Home';
    backButton.className = 'back-button';
    backButton.onclick = () => {
        window.location.href = '../index.html'; // Change this to your home page URL
    };
    
    // Insert at the top of the body
    document.body.insertBefore(backButton, document.body.firstChild);

});