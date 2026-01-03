const level = localStorage.getItem("quizLevel");

document.getElementById("level-title").textContent =
  level.charAt(0).toUpperCase() + level.slice(1) + " Level";

// ================= QUESTION BANK =================

const questionSets = {

  easy: [
    { q: "2 + 2 = ?", o: ["3", "4", "5", "6"], a: 1 },
    { q: "Capital of India?", o: ["Delhi", "Mumbai", "Kolkata", "Chennai"], a: 0 },
    { q: "Sun rises in the?", o: ["West", "East", "North", "South"], a: 1 },
    { q: "5 × 3 = ?", o: ["8", "15", "10", "20"], a: 1 },
    { q: "HTML is used for?", o: ["Styling", "Structure", "Logic", "Database"], a: 1 },
    { q: "CSS stands for?", o: ["Cascading Style Sheets", "Color Style Sheet", "Creative Sheet", "None"], a: 0 },
    { q: "Which is a color?", o: ["Dog", "Blue", "Run", "Fast"], a: 1 },
    { q: "Which is a vowel?", o: ["B", "C", "A", "D"], a: 2 },
    { q: "10 / 2 = ?", o: ["2", "3", "4", "5"], a: 3 },
    { q: "Which is a fruit?", o: ["Carrot", "Apple", "Potato", "Onion"], a: 1 },
    { q: "JS runs in?", o: ["Browser", "CPU", "RAM", "Monitor"], a: 0 },
    { q: "Which is a number?", o: ["Ten", "Dog", "Run", "Blue"], a: 0 },
    { q: "Which is a shape?", o: ["Circle", "Happy", "Fast", "Jump"], a: 0 },
    { q: "1 week has?", o: ["5 days", "6 days", "7 days", "8 days"], a: 2 },
    { q: "Which is a planet?", o: ["Mars", "Sun", "Moon", "Star"], a: 0 },
    { q: "HTML file extension?", o: [".css", ".js", ".html", ".txt"], a: 2 },
    { q: "Which is an animal?", o: ["Car", "Tiger", "Chair", "Pen"], a: 1 },
    { q: "Water freezes at?", o: ["0°C", "50°C", "100°C", "10°C"], a: 0 },
    { q: "Which is a day?", o: ["January", "Sunday", "2024", "Night"], a: 1 },
    { q: "Which is a device?", o: ["Laptop", "Apple", "River", "Stone"], a: 0 }
  ],

  medium: [
    { q: "HTML stands for?", o: ["Hyper Tool ML", "Hyper Text Markup Language", "High Text ML", "None"], a: 1 },
    { q: "CSS property for text color?", o: ["font", "color", "text-style", "bg"], a: 1 },
    { q: "JS keyword to declare variable?", o: ["int", "var", "define", "const"], a: 3 },
    { q: "Which tag is used for image?", o: ["<img>", "<src>", "<image>", "<pic>"], a: 0 },
    { q: "Which is not a loop?", o: ["for", "while", "repeat", "do-while"], a: 2 },
    { q: "DOM stands for?", o: ["Data Object Model", "Document Object Model", "Design Object Model", "None"], a: 1 },
    { q: "Which is JS framework?", o: ["React", "Laravel", "Django", "Flask"], a: 0 },
    { q: "Which CSS unit is relative?", o: ["px", "cm", "em", "mm"], a: 2 },
    { q: "LocalStorage stores data as?", o: ["Array", "Object", "String", "Number"], a: 2 },
    { q: "Which is comparison operator?", o: ["=", "==", "+", "*"], a: 1 },
    { q: "Which is semantic tag?", o: ["div", "span", "header", "bold"], a: 2 },
    { q: "JS runs on?", o: ["Server only", "Browser only", "Both", "None"], a: 2 },
    { q: "Which is NOT CSS?", o: ["margin", "padding", "console.log", "border"], a: 2 },
    { q: "Which event triggers click?", o: ["onhover", "onclick", "onpress", "onload"], a: 1 },
    { q: "Array index starts from?", o: ["0", "1", "-1", "Any"], a: 0 },
    { q: "Which method adds element?", o: ["push()", "pop()", "shift()", "slice()"], a: 0 },
    { q: "HTTP full form?", o: ["HyperText Transfer Protocol", "High Transfer Text", "Hyper Tool Transfer", "None"], a: 0 },
    { q: "Which is boolean?", o: ["true", "yes", "1", "ok"], a: 0 },
    { q: "Which is backend language?", o: ["HTML", "CSS", "JavaScript", "Node.js"], a: 3 },
    { q: "Git is used for?", o: ["Design", "Version control", "Hosting", "Testing"], a: 1 }
  ],

  hard: [
    { q: "Time complexity of binary search?", o: ["O(n)", "O(log n)", "O(n²)", "O(1)"], a: 1 },
    { q: "Which is not JS framework?", o: ["React", "Angular", "Vue", "Django"], a: 3 },
    { q: "HTTP status for Unauthorized?", o: ["200", "301", "401", "500"], a: 2 },
    { q: "Closure is related to?", o: ["CSS", "JS", "HTML", "SQL"], a: 1 },
    { q: "Which is immutable?", o: ["Array", "Object", "String", "Function"], a: 2 },
    { q: "REST uses which protocol?", o: ["FTP", "SMTP", "HTTP", "TCP"], a: 2 },
    { q: "Which hook is used for state?", o: ["useData", "useState", "useRef", "useFetch"], a: 1 },
    { q: "SQL command to remove table?", o: ["DELETE", "DROP", "REMOVE", "CLEAR"], a: 1 },
    { q: "Which is NoSQL DB?", o: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], a: 2 },
    { q: "Which is async function?", o: ["setTimeout", "map", "filter", "reduce"], a: 0 },
    { q: "JWT used for?", o: ["Design", "Authentication", "Database", "API"], a: 1 },
    { q: "Which is not OOP?", o: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"], a: 2 },
    { q: "Which method copies array?", o: ["map()", "forEach()", "push()", "pop()"], a: 0 },
    { q: "Event loop belongs to?", o: ["JS Engine", "Browser", "Node", "OS"], a: 0 },
    { q: "Promise states?", o: ["2", "3", "4", "5"], a: 1 },
    { q: "Which keyword prevents change?", o: ["let", "var", "const", "static"], a: 2 },
    { q: "Which is synchronous?", o: ["fetch", "axios", "alert", "setTimeout"], a: 2 },
    { q: "Which header enables CORS?", o: ["Access-Control-Allow-Origin", "Allow-Origin", "CORS-Allow", "Header-CORS"], a: 0 },
    { q: "Which sorting is fastest avg?", o: ["Bubble", "Selection", "Quick", "Insertion"], a: 2 },
    { q: "Which is design pattern?", o: ["MVC", "HTML", "JSON", "HTTP"], a: 0 }
  ]
};

// =============== QUIZ LOGIC (UNCHANGED) =================

const questions = questionSets[level];
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
    li.innerHTML = `<label><input type="radio"> ${opt}</label>`;
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
  if (selected === questions[current].a) score++;
  feedback.textContent = selected === questions[current].a ? "Correct ✅" : "Wrong ❌";
  feedback.style.color = selected === questions[current].a ? "#22c55e" : "#ef4444";

  setTimeout(() => {
    current++;
    current < questions.length ? loadQuestion() : showResult();
  }, 600);
};

function showResult() {
  document.querySelector(".quiz-container").innerHTML = `
    <h1>${level.toUpperCase()} Level Completed 🎉</h1>
    <p>Score: ${score} / ${questions.length}</p>
    <button onclick="location.href='index.html'">Back to Levels</button>
  `;
}

loadQuestion();
