document.addEventListener('DOMContentLoaded', function() {
    addCreatorCredit();
});

function addCreatorCredit() {
    // Create the creator credit element
    const creatorCredit = document.createElement('div');
    creatorCredit.textContent = 'Website made by Gregg - CS';
    creatorCredit.style.position = 'absolute';
    creatorCredit.style.top = '10px';
    creatorCredit.style.right = '10px';
    creatorCredit.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    creatorCredit.style.padding = '5px 10px';
    creatorCredit.style.borderRadius = '5px';
    creatorCredit.style.fontFamily = 'Arial, sans-serif';
    creatorCredit.style.fontSize = '14px';
    creatorCredit.style.zIndex = '1000';
    
    // Add it to the body
    document.body.appendChild(creatorCredit);
}