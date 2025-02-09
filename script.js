//your JS code here. If required.
// Quiz Data
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
];

// Select Elements
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const scoreEl = document.getElementById("score");

// Variables
let currentQuiz = 0;
let score = 0;

// Load Quiz
function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Deselect Answers
function deselectAnswers() {
  document.querySelectorAll("input[name='answer']").forEach((input) => {
    input.checked = false;
  });
}

// Get Selected Answer
function getSelected() {
  let answer;
  document.querySelectorAll("input[name='answer']").forEach((input) => {
    if (input.checked) {
      answer = input.id;
    }
  });
  return answer;
}

// Submit Button Event Listener
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    // Check if the answer is correct
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      // Load next question
      loadQuiz();
    } else {
      // Show result
      quiz.style.display = "none";
      resultContainer.style.display = "block";
      scoreEl.innerText = score;
    }
  } else {
    alert("Please select an option before submitting!");
  }
});

// Initial Load
loadQuiz();
