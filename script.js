We're delighted to have you here and hope you find our platform engaging and informative. We invite you to give us your views about our faculty. Appraise them for their good work, highlight what they need to work on in order to ensure there is quality learning.
Your privacy is key therefore your identity will not be shown to the specific faculty you have evaluated. However it is not anonymous since some feedback you give may need further discussion with the dean. We therefore have your identity known to the dean only.
Thank you for visiting our Faculty Evaluation Platform

Whether you're a prospective student exploring academic programs, a current student seeking resources and support, a faculty member looking for collaboration opportunities, or simply someone interested in learning more about our institution, we strive to provide you with a seamless and enriching experience.


















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
 
	


 

