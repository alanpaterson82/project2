function buildQuiz(){
// variable to store the HTML output
const output = [];

// for each question...
myQuestions.forEach(
    (currentQuestion, questionNumber) => {

        //variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

            //... add an HTML radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }
);

// finally combine our output list into one string og HTML and put it on the page
quizContainer.innerHTML = output.join('');
}

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked` ;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
    }
        // if answer is wrong or blank
    else{
            // color answers red
            answerContainers[questionNumber].style.color = 'red';
    }
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
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
    {
        question: "How many Oscars has Meryl Streep won?",
        answers: {
            a: "3",
            b: "4",
            c: "5",
        },
        correctAnswer: "a"
    },
    {   
        question: "What was Quentin Tarantino's first film?",
        answers: {
            a: "Reservoir Dogs",
            b: "Pulp Fiction",
            c: "Jackie Brown",
        },
        correctAnswer: "a"
    },
    {   
        question: "Which film won Best Picture at the 2023 Oscars?",
        answers: {
            a: "Everything Everywhere All At Once",
            b: "Tar",
            c: "The Whale",
        },
        correctAnswer: "a"
    },
    {   
        question: "Who Directed the 2020 film Tenet?",
        answers: {
            a: "Martin Scorcese",
            b: "Steven Spielberg",
            c: "Christopher Nolan",
        },
        correctAnswer: "c"
    },
];

// display quiz immediately
buildQuiz()

// on submit, show results
submitButton.addEventListener('click', showResults);
