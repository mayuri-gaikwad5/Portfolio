const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        options: ["J.R.R. Tolkien", "William Shakespeare", "J.K. Rowling", "Jane Austen"],
        answer: "J.K. Rowling"
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "12", "11", "13"],
        answer: "12"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who is the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Mount Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        question: "What is the smallest country in the world by population?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: "Vatican City"
    },
    {
        question: "Who invented the lightbulb?",
        options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Albert Einstein"],
        answer: "Thomas Edison"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.querySelector('.question').textContent = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    currentQuestion.options.forEach((option, index) => {
        options[index].textContent = option;
        options[index].onclick = () => checkAnswer(option);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const result = document.querySelector('.result');
    
    if (selectedOption === currentQuestion.answer) {
        score++;
        result.textContent = "Correct!";
        result.style.color = "#4CAF50";
    } else {
        result.textContent = "Wrong!";
        result.style.color = "#ff5733";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(() => {
            result.textContent = "";
            loadQuestion();
        }, 1000);
    } else {
        setTimeout(() => {
            showFinalScore();
        }, 1000);
    }
}

function showFinalScore() {
    document.querySelector('.quiz-container').innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your score is: ${score}/${quizData.length}</p>
    `;
}

loadQuestion();

