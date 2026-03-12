document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.back-button, #subjectBackBtn')) return;
    const backButton = document.createElement('button');
    backButton.textContent = '← Back';
    backButton.className = 'back-button';

    backButton.onclick = () => {
        const path = window.location.pathname || '';
        const params = new URLSearchParams(window.location.search);
        const selectedClass = (params.get('class') || localStorage.getItem('roundOneSelectedClass') || '').trim();

        if (path.endsWith('/subjects/round-one-class.html') || path.endsWith('subjects/round-one-class.html')) {
            window.location.href = '../index.html';
            return;
        }

        if (path.endsWith('/subjects/round-one.html') || path.endsWith('subjects/round-one.html')) {
            window.location.href = 'round-one-class.html' + (selectedClass ? ('?class=' + encodeURIComponent(selectedClass)) : '');
            return;
        }

        if (path.endsWith('/subjects/round-two.html') || path.endsWith('subjects/round-two.html') ||
            path.endsWith('/subjects/round-two-v2.html') || path.endsWith('subjects/round-two-v2.html')) {
            window.location.href = '../index.html';
            return;
        }

        if (
            path.includes('/subjects/') || path.includes('subjects/')
        ) {
            if (selectedClass) {
                window.location.href = 'round-one.html?class=' + encodeURIComponent(selectedClass);
            } else {
                window.location.href = 'round-one-class.html';
            }
            return;
        }

        if (document.referrer) {
            history.back();
        }
    };

    document.body.insertBefore(backButton, document.body.firstChild);
});
