// QUIZ DATA
const quizData = [
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "Which tag is used for JavaScript?",
    options: ["<javascript>", "<js>", "<script>", "<code>"],
    answer: 2
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.style.backgroundColor = "#e5e7eb";
  });
}

function selectAnswer(index) {
  if (index === quizData[currentQuestion].answer) {
    score++;
    optionBtns[index].style.backgroundColor = "#86efac";
  } else {
    optionBtns[index].style.backgroundColor = "#fca5a5";
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = `Quiz Completed! Your Score: ${score}/${quizData.length}`;
    document.querySelector(".options").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
  }
}

// Load first question
loadQuestion();

// API FETCH (Joke API)
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent =
        `${data.setup} — ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").textContent =
        "Failed to load joke. Try again.";
    });
}
