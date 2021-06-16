var startBtnEl = document.querySelector(".startBtn");
var timerEl = document.querySelector(".timer");
var scoreEl = document.querySelector("score");
var score = 100;
var time = 60;
var questionIndex = 0;



const questions = [
  {
    question: "What does URL stand for?",
    answer: "Uniform Resource Locator",
    options: ["Uniform Region Locator", "United Resource Location", "Uniform Resource Locator", "Unified Retail Lotion"],
  },
  {
    question: "A for loop has three values(arguments).",
    answer: "True",
    options: ["True", "False"],
  },
  {
    question: "Which one is a JavaScript Data type?",
    answer: "String",
    options: ["Rock", "Paper", "String", "Banana"],
  },
  {
    question: "What does DOM stand for?",
    answer: "Document Object Model",
    options: ["Document Oracle Model", "Digital Object Mode", "Document Object Model", "Donut Okra Monster"]
  }
];


startBtnEl.addEventListener("click", () => {
  setTime();
  hideIntroMessage();
  showQuestion()
});


function setTime() {
  var timerInterval = setInterval(function () {
    time--;
    timerEl.textContent = "Time:" + time;
    if (time === 0 || time < 0) {
      clearInterval(timerInterval); {
        sendMessage()
      }
    }
  }, 1000);
}


function sendMessage() {
  var timeMessageEl = document.querySelector(".timeMessage");
  timeMessageEl.textContent = "Game Over!";
}

function hideIntroMessage() {
  var introMessageEl = document.querySelector(".introScreen");
  introMessageEl.setAttribute("style", "display: none");
}


function showQuestion() {
  const currentQuestion = questions[questionIndex].question;
  const options = questions[questionIndex].options;
  document.getElementById("question-text").textContent = currentQuestion;

  document.getElementById("options").textContent = ' ';

  for (let i = 0; i < options.length; i++) {
    let button = document.createElement("button");
    button.textContent = options[i];
    button.value = options[i];
    button.onclick = moveOn;

    document.getElementById("options").appendChild(button).classList.add("answers");

  }
};

function moveOn() {

  let userChoice = this.value;

  if (userChoice === questions[questionIndex].answer) {

  } else {
    score = score - 25;
    time = time - 10;
  }

  questionIndex = questionIndex + 1;

  if (questionIndex === questions.length) {
    stopQuiz();
  } else {

    showQuestion();

  }
}

function stopQuiz() {
  var endMessage = document.querySelector(".score-card");
  endMessage.setAttribute("style", "visibility: visible");

  var questionContainer = document.getElementById("question-div");
  questionContainer.setAttribute("style", "display: none");
  
  time = 1
}
var submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  setScore()
  

  var initials = document.querySelector("#initials").value
  localStorage.setItem("initials", initials);
 

})

function setScore () {
  scoreEl.textContent = "Score:" + score;
  
}




