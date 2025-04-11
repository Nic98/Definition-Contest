// Round Two functionality - randomly selects 30 questions from all subject files
document.addEventListener('DOMContentLoaded', function() {
    // List of all subject HTML files
    const subjectFiles = [
        'art-design.html',
        'biology.html',
        'business.html',
        'chemistry.html',
        'EAP.html',
        'chinese.html',
        'CS.html',
        'math.html',
        'economics.html',
        'physics.html'
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
            // calculateAnswerWordCount();
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

    // Function to display questions in the round two container
    function displayRoundTwoQuestions() {
        const roundTwoContainer = document.getElementById('round-two-container');
        if (!roundTwoContainer) return;
        
        // Create a loading message
        roundTwoContainer.innerHTML = '<h2>Round Two - Random Questions</h2><p>Loading questions...</p>';
        
        // We'll use a different approach to avoid CORS issues with local files
        // Instead of loading files via XMLHttpRequest, we'll extract questions from other subjects
        // by visiting each page and extracting the questions directly
        
        // Create an iframe to load each subject page
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        
        // List of subject files
        const subjectFiles = [
            { file: 'art-design.html', name: 'Art & Design' },
            { file: 'biology.html', name: 'Biology' },
            { file: 'business.html', name: 'Business' },
            { file: 'chemistry.html', name: 'Chemistry' },
            { file: 'EAP.html', name: 'EAP' },
            { file: 'chinese.html', name: 'Classical Chinese' },
            { file: 'CS.html', name: 'Computer Science' },
            { file: 'economics.html', name: 'Economics' },
            { file: 'physics.html', name: 'Physics' },
            { file: 'math.html', name: 'Math' }
        ];
        
        let currentIndex = 0;
        const allQuestions = [];
        
        // Function to load the next subject
        function loadNextSubject() {
            if (currentIndex >= subjectFiles.length) {
                // All subjects loaded, display random questions
                finishLoading();
                return;
            }
            
            const subject = subjectFiles[currentIndex];
            iframe.src = subject.file;
            
            // Wait for iframe to load
            iframe.onload = function() {
                try {
                    // Extract questions from the iframe content
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    const questionElements = iframeDoc.querySelectorAll('.question');
                    
                    questionElements.forEach((questionElement) => {
                        const questionText = questionElement.querySelector('p').textContent;
                        const answerElement = questionElement.querySelector('.answer');
                        const answerText = answerElement ? answerElement.textContent : '';
                        
                        allQuestions.push({
                            subject: subject.name,
                            questionText: questionText,
                            answerText: answerText
                        });
                    });
                } catch (e) {
                    console.error('Error extracting questions from', subject.file, e);
                }
                
                // Load the next subject
                currentIndex++;
                loadNextSubject();
            };
            
            // Handle iframe load errors
            iframe.onerror = function() {
                console.error('Error loading', subject.file);
                currentIndex++;
                loadNextSubject();
            };
        }
        
        // Function to finish loading and display questions
        function finishLoading() {
            // Remove the iframe
            document.body.removeChild(iframe);
            
            // If no questions were loaded, show an error message
            if (allQuestions.length === 0) {
                roundTwoContainer.innerHTML = '<h2>Round Two - Random Questions</h2><p>Error: Could not load questions. Please try running the site on a local server.</p>';
                return;
            }
            
            // Shuffle and select 30 random questions (or fewer if not enough questions)
            const shuffledQuestions = shuffleArray(allQuestions);
            const numQuestions = Math.min(30, shuffledQuestions.length);
            const selectedQuestions = shuffledQuestions.slice(0, numQuestions);
            
            // Clear the container and add the heading
            roundTwoContainer.innerHTML = '<h2>Round Two - Random Questions</h2>';
            
            // Display the selected questions
            selectedQuestions.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question';
                
                const questionNumber = index + 1;
                const questionPara = document.createElement('p');
                // Remove the question number prefix if it exists
                const cleanQuestionText = question.questionText.replace(/^\d+\.\s*/, '');
                questionPara.textContent = `${questionNumber}. [${question.subject}] ${cleanQuestionText}`;
                
                const showButton = document.createElement('button');
                showButton.textContent = 'Show Answer';
                showButton.onclick = function() {
                    toggleRoundTwoAnswer(questionNumber);
                };
                
                const answerDiv = document.createElement('div');
                answerDiv.className = 'answer';
                answerDiv.id = `round-two-answer${questionNumber}`;
                answerDiv.textContent = question.answerText;
                answerDiv.style.display = 'none';
                
                questionDiv.appendChild(questionPara);
                questionDiv.appendChild(showButton);
                questionDiv.appendChild(answerDiv);
                
                roundTwoContainer.appendChild(questionDiv);
            });
        }
        
        // Start loading subjects
        loadNextSubject();
    }

    // Function to toggle answer visibility for round two questions
    function toggleRoundTwoAnswer(questionNumber) {
        const answer = document.getElementById(`round-two-answer${questionNumber}`);
        if (!answer) return;
        
        const button = answer.previousElementSibling;
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            button.textContent = 'Show Answer';
        } else {
            answer.style.display = 'block';
            button.textContent = 'Hide Answer';
        }
    }

    // Expose the toggle function globally
    window.toggleRoundTwoAnswer = toggleRoundTwoAnswer;
    
    // If we're on the index page with the round-two-container, display questions
    if (document.getElementById('round-two-container')) {
        displayRoundTwoQuestions();
    };
