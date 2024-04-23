const questions = [
{
    question: "Rate your teacher",
    answers: [
        { text: "Good", correct: true },
        { text: "Better", correct: false },
        { text: "Best", correct: false },
        { text: "Worst", correct: false },
    ]
},

{
    question: "Rate yourself",
    answers: [
        { text: "Good", correct: true },
        { text: "worse", correct: false },
        { text: "Best", correct: false },
        { text: "Worst", correct: false },
    ]   
},

{
    question: "Rate your attendance",
    answers: [
        { text: "Good", correct: true },
        { text: "Better", correct: false },
        { text: "Best", correct: false },
        { text: "Worst", correct: false },
    ]
},

{
    question: "Rate your perfomance",
    answers: [
        { text: "Good", correct: false },
        { text: "Better", correct: false },
        { text: "Best", correct: true },
        { text: "Worst", correct: false },
    ]
}
];

const questionElement = document.getElemebtById("question");
const answersnswerButtons = document.getElemebtById("answer-buttons");
const nextButton = document.getElemebtById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex]
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    buttonclasslist.add("btn");
    answerButton.appendChild(button);

});
} 

 startQuiz();
 
