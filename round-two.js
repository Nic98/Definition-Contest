document.addEventListener('DOMContentLoaded', function() {
    // List of all subject HTML files
    const subjectFiles = [
        'art-design.html',
        'biology.html',
        'business.html',
        'chemistry.html',
        'EAP.html',
        'chinese.html',
        'CS.html'
        // Add other subjects when available
    ];

    // Fetch all questions from all subjects
    Promise.all(subjectFiles.map(fetchQuestionsFromFile))
        .then(allQuestions => {
            // Flatten the array of arrays into a single array of questions
            const combinedQuestions = [].concat(...allQuestions);
            
            // Shuffle the combined questions array
            const shuffledQuestions = shuffleArray(combinedQuestions);
            
            // Select the first 30 questions
            const selectedQuestions = shuffledQuestions.slice(0, 30);
            
            // Display the selected questions
            displayQuestions(selectedQuestions);
            
            // Calculate word counts after questions are displayed
            calculateAnswerWordCount();
        })
        .catch(error => {
            console.error('Error loading questions:', error);
            const container = document.getElementById('questions-container');
            container.innerHTML = '<p>Error loading questions. Please try again later.</p>';
        });
});

function fetchQuestionsFromFile(file) {
    return fetch(file)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const questions = Array.from(doc.querySelectorAll('.question'));
            return questions.map(q => q.outerHTML);
        });
}

function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestions(questions) {
    const container = document.getElementById('questions-container');
    
    // Add each question to the container
    questions.forEach((questionHtml, index) => {
        // Create a div for the question
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = questionHtml;
        
        // Update the question number
        const questionText = questionDiv.querySelector('p:first-of-type');
        if (questionText) {
            questionText.textContent = questionText.textContent.replace(/^\d+\./, `${index + 1}.`);
        }
        
        // Update answer IDs to prevent conflicts
        const answer = questionDiv.querySelector('.answer');
        if (answer) {
            answer.id = `answer${index + 1}`;
        }
        
        // Update button onclick to match new ID
        const button = questionDiv.querySelector('button');
        if (button) {
            button.setAttribute('onclick', `toggleAnswer(${index + 1})`);
        }
        
        container.appendChild(questionDiv);
    });
}