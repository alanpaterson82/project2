const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz(){}

function showResults(){}

// display quiz immediately
buildQuiz()

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "Who starred alongside Ben Affleck in Armageddon?",
        answers: {
            a: "Kate Winslet",
            b: "Liv Tyler",
            c: "Jennifer Lawrence"
        },
        correctAnswer: "b"
    },
];