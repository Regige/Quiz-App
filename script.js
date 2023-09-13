let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Für was steht HTML",
        "answer_1": "Hyper Text Markup Language",
        "answer_2": "Hyperlinks and Text Markup Language",
        "answer_3": "Home Tool Markup Language",
        "answer_4": "Hyper Tool Markup Language",
        "right_answer": 1
    },
    {
        "question": "Für was steht CSS?",
        "answer_1": "Colorful Style Sheets",
        "answer_2": "Computer Style Sheets",
        "answer_3": "Creative Style Sheets",
        "answer_4": "Cascading Style Sheets",
        "right_answer": 4
    },
    {
        "question": "Wo wird eine Style Datei hinein referenziert? ",
        "answer_1": "In den head Bereich",
        "answer_2": "In den body Bereich",
        "answer_3": "Am Ende des Dokuments",
        "answer_4": "Am Anfang des Dokuments",
        "right_answer": 1
    },
    {
        "question": "Welches ist kein HTML Tag?",
        "answer_1": "video",
        "answer_2": "output",
        "answer_3": "al",
        "answer_4": "ol",
        "right_answer": 3
    },
];


let scoreCount = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');



function init() {
    let amountQuestion = document.getElementById('amount-quest');
    amountQuestion.innerHTML = questions.length;

    showQuestion()
    // showPol();
}


function showQuestion() {
    if(gameIsOver()) {
        showPolResult();
        showResult();
    } else {
        showPol();
        askQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length
}


function askQuestion() {
    let question = questions[currentQuestion];
    let questionText = document.getElementById('question-text');
    questionText.innerHTML = question["question"];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    let answer_1 = document.getElementById('answer1');
    answer_1.innerHTML = question["answer_1"];
    let answer_2 = document.getElementById('answer2');
    answer_2.innerHTML = question["answer_2"];
    let answer_3 = document.getElementById('answer3');
    answer_3.innerHTML = question["answer_3"];
    let answer_4 = document.getElementById('answer4');
    answer_4.innerHTML = question["answer_4"];
}

function showPol() {
    let percent = (currentQuestion+1) / (questions.length+1);
    percent = Math.round(percent * 100);
    console.log(`Fortschritt: ${percent}`);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function showPolResult() {
    document.getElementById('progress-bar').innerHTML = "100 %";
    document.getElementById('progress-bar').style = "width: 100%;";
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question["right_answer"]}`

    if(selectedQuestionNumber == question["right_answer"]) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        scoreCount++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    // colorPol();

    showQuestion();

    document.getElementById('next-button').disabled = false;

    resetButton();
}


function resetButton() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).parentNode.classList.remove('bg-danger');
        document.getElementById(`answer${i}`).parentNode.classList.remove('bg-success');
    }
}


function showResult() {
    let cardResult = document.getElementById('card-body-result');
    cardResult.style = "";    
    let cardBody = document.getElementById('card-body');
    cardBody.style = 'display: none';

    showScore();
}


function showScore() {
    let scoreNumber = document.getElementById('score-number');
    scoreNumber.innerHTML = `${scoreCount}/${questions.length}`;

}


// function showPol() {
//     let questionPol = document.getElementById('question-pol');
    
//     if(questionPol.innerHTML.length != questions.length+1){
//     for (let i = 0; i < questions.length+1; i++) {
//         questionPol.innerHTML += `<span id="pol-color-done-${i}" class="pol-color"></span>`;
//     }}
//     colorPol();
// }

// function colorPol() {
//     let polColorDone = document.getElementById(`pol-color-done-${currentQuestion}`);
//     polColorDone.style.backgroundColor = "rgba(0,0,0,0.25)";
// }

function restartGame() {
    document.getElementById('card-body-result').style = 'display: none';    
    document.getElementById('card-body').style = "";

    scoreCount = 0;
    currentQuestion = 0;

    // for (let i = 0; i < questions.length+1; i++) {
    //     let polColorDone = document.getElementById(`pol-color-done-${i}`);
    //     polColorDone.style.backgroundColor = "";
    // }

    init();
}