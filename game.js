const questionEl = document.getElementById("question");
const choiceTextEl = Array.from(document.getElementsByClassName("choice-text"));
const scoreTextEl = document.getElementById("score");
//const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
var count = 60;

let questions = [
  {
    questionEl:"Commonly used Data Types DO NOT include",
    choice1: "String",
    choice2: "Boolean",
    choice3: "Alert",
    choice4: "Number",
    answer: 3
  },
  {
    questionEl:
      "The condition in an if/else satatement is enclosed within",
    choice1: "parenthesis",
    choice2: "curly bracket",
    choice3: "square bracket",
    choice4: "qoutes",
    answer: 1
  },
  {
    questionEl:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    choice1: "Javascript",
    choice2: "terminal",
    choice3: "console.log",
    choice4: "qoutes",
    answer: 3
  },
  {
    questionEl:
      "String values must be enclosed within ____ when being assigned to variables",
    choice1: "commas",
    choice2: "curly bracket",
    choice3: "square bracket",
    choice4: "qoutes",
    answer: 4
  },
  {
    questionEl: " Arrays and Javascript can be used to store",
    choice1: "other arrays",
    choice2: "numbers and strings ",
    choice3: "booleans",
    choice4: "all of the above",
    answer: 4
  }
];

const correctPoints = 10;
const maximum_questions = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  // setTimeout();

};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= maximum_questions) {
    localStorage.setItem("mostRecentScore", score);
    //go to the next page to enter score 
    return window.location.assign("/enter-score.html");
  }
  questionCounter++;
 
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  questionEl.innerText = currentQuestion.questionEl;

  choiceTextEl.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choiceTextEl.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(correctPoints);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      // var count = 60;
      // document.getElementById('count').innerHTML=count;
      // count--;

      // document.styleSheets.display = "left";
      // document.getElementById('count').innerHTML='Time Left:  ' + count ;
      // if (count === 0){
  
      //   selectedChoice.parentElement.classList.remove(classToApply);
      // }

 


      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();

      
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreTextEl.innerText = score;
};

startGame();
