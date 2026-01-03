const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
    answer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Mercury"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const feedbackEl = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");

function loadQuestion() {
  submitBtn.disabled = true;
  feedbackEl.textContent = "";
  selectedOption = null;

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="option" value="${index}">
        ${option}
      </label>
    `;

    li.addEventListener("click", () => {
      document.querySelectorAll("input[name='option']").forEach(r => r.checked = false);
      li.querySelector("input").checked = true;
      selectedOption = index;
      submitBtn.disabled = false;
    });

    optionsEl.appendChild(li);
  });

  updateProgress();
}

function updateProgress() {
  const progress = ((currentQuestion) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

submitBtn.addEventListener("click", () => {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
    feedbackEl.textContent = "Correct ✅";
    feedbackEl.style.color = "#22c55e";
  } else {
    feedbackEl.textContent = "Wrong ❌";
    feedbackEl.style.color = "#ef4444";
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 800);
});

function showResult() {
  progressBar.style.width = "100%";
  document.querySelector(".quiz-container").innerHTML = `
    <h1>Quiz Completed 🎉</h1>
    <p>Your score: ${score} / ${questions.length}</p>
    <button onclick="location.reload()">Restart</button>
  `;
}

loadQuestion();
