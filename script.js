const level = localStorage.getItem("quizLevel");
document.getElementById("level-title").textContent =
  level.charAt(0).toUpperCase() + level.slice(1) + " Level";

const questionSets = {
  easy: [
    { q: "2 + 2 = ?", o: ["3", "4", "5", "6"], a: 1 },
    { q: "Capital of India?", o: ["Delhi", "Mumbai", "Chennai", "Kolkata"], a: 0 },
    { q: "Sun rises in?", o: ["West", "North", "East", "South"], a: 2 },
    // ➜ add 12 more
  ],

  medium: [
    { q: "HTML stands for?", o: ["Hyper Tool", "Hyper Text Markup Language", "High Text ML", "None"], a: 1 },
    { q: "CSS property for bold?", o: ["font-style", "font-weight", "text-bold", "weight"], a: 1 },
    { q: "JS keyword to declare variable?", o: ["int", "var", "define", "dim"], a: 1 },
    // ➜ add 12 more
  ],

  hard: [
    { q: "Which is not a JS framework?", o: ["React", "Angular", "Vue", "Django"], a: 3 },
    { q: "Time complexity of binary search?", o: ["O(n)", "O(log n)", "O(n²)", "O(1)"], a: 1 },
    { q: "HTTP status for unauthorized?", o: ["200", "301", "401", "500"], a: 2 },
    // ➜ add 12 more
  ]
};

const questions = questionSets[level].slice(0, 15);

let current = 0;
let score = 0;
let selected = null;

const qEl = document.getElementById("question");
const oEl = document.getElementById("options");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");

function loadQuestion() {
  submit.disabled = true;
  feedback.textContent = "";
  selected = null;

  const q = questions[current];
  qEl.textContent = q.q;
  oEl.innerHTML = "";

  q.o.forEach((opt, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="option" />
        ${opt}
      </label>
    `;

    li.onclick = () => {
      document.querySelectorAll("input").forEach(r => r.checked = false);
      li.querySelector("input").checked = true;
      selected = i;
      submit.disabled = false;
    };

    oEl.appendChild(li);
  });

  progressBar.style.width = `${(current / questions.length) * 100}%`;
}

submit.onclick = () => {
  if (selected === questions[current].a) {
    score++;
    feedback.textContent = "Correct ✅";
    feedback.style.color = "#22c55e";
  } else {
    feedback.textContent = "Wrong ❌";
    feedback.style.color = "#ef4444";
  }

  setTimeout(() => {
    current++;
    if (current < questions.length) loadQuestion();
    else showResult();
  }, 700);
};

function showResult() {
  document.querySelector(".quiz-container").innerHTML = `
    <h1>${level.toUpperCase()} Level Completed 🎉</h1>
    <p>Your Score: ${score} / ${questions.length}</p>
    <button onclick="window.location.href='index.html'">Back to Levels</button>
  `;
}

loadQuestion();
