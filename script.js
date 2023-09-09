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
        "answer_1": "In den <head> Bereich",
        "answer_2": "In den <body> Bereich",
        "answer_3": "Am Ende des Dokuments",
        "answer_4": "Am Anfang des Dokuments",
        "right_answer": 1
    },
    {
        "question": "Welches ist kein HTML Tag?",
        "answer_1": "<video>",
        "answer_2": "<output>",
        "answer_3": "<al>",
        "answer_4": "<ol>",
        "right_answer": 3
    },

];


let currentQuestion = 0;

function init() {
    let amountQuestion = document.getElementById('amount-quest');
    amountQuestion.innerHTML = questions.length;

    showQuestion()
}


function showQuestion() {
    let question = questions[currentQuestion];
    let questionText = document.getElementById('question-text');
    questionText.innerHTML = question["question"];

    let answer_1 = document.getElementById('answer1');
    answer_1.innerHTML = question["answer_1"];
        let answer_2 = document.getElementById('answer2');
    answer_2.innerHTML = question["answer_2"];
        let answer_3 = document.getElementById('answer3');
    answer_3.innerHTML = question["answer_3"];
        let answer_4 = document.getElementById('answer4');
    answer_4.innerHTML = question["answer_4"];
}