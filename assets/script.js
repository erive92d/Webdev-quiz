var startBtnEl = document.getElementById("start-button");
var welcomeDisplay = document.querySelector(".welcome");

var questionDisplay = document.getElementById("question");

var quizDisplay = document.querySelector(".quiz");

var questionObj = [
  {
    question: "Who owns Twitter?", // 0
    choice1: "Bill Gates",
    choice2: "Elon Musk",
    choice3: "George Washington",
    choice4: "Kanye West"

  },
  {
    question: "What is the largest city in USA?",// 1
    choice1: "New York",
    choice2: "Los Angeles",
    choice3: "Austin",
    choice4: "San Francisco"
  },
  {
    question: "When is Christmas celebrated?",// 2
    choice1: "May 26",
    choice2: "November 1",
    choice3: "December 25",
    choice4: "September 4"
  },
  {
    question: "What is HTML stand for?",// 3
    choice1: "Home Town Markup Language",
    choice2: "Hyper Text Manly Language",
    choice3: "Hollister Tillys Marshalls Levis",
    choice4: "Hyper Text Markup Language",
  },
  {
    question: "How many seasons are there in a year?",// 4
    choice1: "4",
    choice2: "1",
    choice3: "3",
    choice4: "5",
  },
  {
    question: "Who is the first president of USA?",// 5
    choice1: "Thomas Jefferson",
    choice2: "Ted Roosevelt",
    choice3: "George Washington",
    choice4: "Abraham Lincoln",
  },
  {
    question: "What is CSS stand for?",// 6
    choice1: "Cascading Style Sheet",
    choice2: "Coding Style Sheet",
    choice3: "Cool Style Sheet",
    choice4: "Coding Skill Set",
  },
  {
    question: "Who is the governor of California?",// 7
    choice1: "Nancy Pelosi",
    choice2: "Ted Cruz",
    choice3: "Gavin Newsom",
    choice4: "Ron DeSantis",
  },
];
var questionChoice = Math.floor(Math.random() * questionObj.length)

function checkAnswer() {
  var correctAnswer;
  if (questionChoice === 0) {
    correctAnswer = questionObj[0].choice2; // 0
  } else if (questionChoice === 1) {
    correctAnswer = questionObj[1].choice1; // 1
  } else if (questionChoice === 2) {
    correctAnswer = questionObj[2].choice3; // 2 
  } else if (questionChoice === 3) {
    correctAnswer = questionObj[3].choice4; // 3
  } else if (questionChoice === 4) {
    correctAnswer = questionObj[4].choice1; // 4
  } else if (questionChoice === 5) {
    correctAnswer = questionObj[5].choice3; // 5
  } else if (questionChoice === 6) {
    correctAnswer = questionObj[6].choice1; // 6
  } else if (questionChoice === 6) {
    correctAnswer = questionObj[6].choice3; // 7
  }

  

  return correctAnswer
}

var correctAnswer = checkAnswer()

quizDisplay.addEventListener('click',function(e) {
 
  if(e.target.textContent !== correctAnswer) {
    alert('incorrect')
  } else {
    alert('correct')
  }
  
})






function hideWelcome() {
  welcomeDisplay.setAttribute("style", "display:none");
}

function quizShow(num) {
  var questionNum = num;

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








function startGame() {
  hideWelcome();
  quizShow(questionChoice);
}

startBtnEl.addEventListener("click", startGame);
