var startBtnEl = document.getElementById("start-button");
var welcomeDisplay = document.querySelector(".welcome");

var questionDisplay = document.getElementById("question");

var questionObj = [
  {
    question: "Who owns Twitter?",
    choice1: "Bill Gates",
    choice2: "Elon Musk",
    choice3: "George Washington",
    choice4: "Kanye West",
  },
  {
    question: "What is the largest city in USA?",
    choice1: "New York",
    choice2: "Los Angeles",
    choice3: "Austin",
    choice4: "San Francisco",
  },
  {
    question: "When is Christmas celebrated?",
    choice1: "May 26",
    choice2: "November 1",
    choice3: "December 25",
    choice4: "September 4",
  },
  {
    question: "What is HTML stand for?",
    choice1: "Home Town Markup Language",
    choice2: "Hyper Text Manly Language",
    choice3: "Hollister Tillys Marshalls Levis",
    choice4: "Hyper Text Markup Language",
  },
  {
    question: "How many seasons are there in a year?",
    choice1: "4",
    choice2: "1",
    choice3: "3",
    choice4: "5",
  },
  {
    question: "Who is the first president of USA?",
    choice1: "Thomas Jefferson",
    choice2: "Ted Roosevelt",
    choice3: "George Washington",
    choice4: "Abraham Lincoln",
  },
  {
    question: "What is CSS stand for?",
    choice1: "Cascading Style Sheet",
    choice2: "Coding Style Sheet",
    choice3: "Cool Style Sheet",
    choice4: "Coding Skill Set",
  },
  {
    question: "Who is the governor of California?",
    choice1: "Nancy Pelosi",
    choice2: "Ted Cruz",
    choice3: "Gavin Newsom",
    choice4: "Ron DeSantis",
  },
];



function hideWelcome() {
  welcomeDisplay.setAttribute("style", "display:none");
}

function quizShow(num) {
  var questionNum = num;
  var quizDisplay = document.querySelector(".quiz");

  {
    quizDisplay.innerHTML = `
        <h3>${questionObj[questionNum].question}</h3>
        <ul>
            <li class="choices">${questionObj[questionNum].choice1}</li>
            <li class="choices">${questionObj[questionNum].choice2}</li>
            <li class="choices">${questionObj[questionNum].choice3}</li>
            <li class="choices">${questionObj[questionNum].choice4}</li>
        </ul>
        
    `;
  }
}


function checkAnswer()

function startGame() {
  hideWelcome();
  quizShow(2);
}

startBtnEl.addEventListener("click", startGame);
