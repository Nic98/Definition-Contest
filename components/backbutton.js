// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    
    // Add Back button
    const backButton = document.createElement('button');
    backButton.textContent = '← Back';
    backButton.className = 'back-button';
    backButton.onclick = () => {
        window.history.back(); // 返回上一个页面
        // 或：window.history.go(-1);
    };
    
    // Insert at the top of the body
    document.body.insertBefore(backButton, document.body.firstChild);

});
