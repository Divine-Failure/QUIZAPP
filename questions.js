const questions = [
    {
        question: "On what continent would you find the world’s largest desert?",
        answers: [
            { text: "Antarctica", correct: true },
            { text: "Asia", correct: false },
            { text: "Europe", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "What is acrophobia a fear of?",
        answers: [
            { text: "Acrobat", correct: false },
            { text: "Heights", correct: true },
            { text: "Spiders", correct: false },
            { text: "People", correct: false }
        ]
    },
    {
        question: "In Australia what is commonly known as a Bottle-o?",
        answers: [
            { text: "Water", correct: false },
            { text: "Liquior Store", correct: true },
            { text: "Drinks", correct: false },
            { text: "Milk", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    answerButtons.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.style.backgroundColor = correct ? 'green' : 'red';
        } else if (button.innerText === answer.text) {
            button.style.backgroundColor = correct ? 'green' : 'red';
        }
    });
    nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hidden');
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}`;
    scoreContainer.classList.remove('hidden');
}

function restartQuiz() {
    startGame();
}
