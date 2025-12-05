// ====== GET HTML ELEMENTS ======

// Screens
const welcomeScreen = document.getElementById("welcome-screen");
const userScreen    = document.getElementById("user-screen");
const topicScreen   = document.getElementById("topic-screen");
const quizScreen    = document.getElementById("quiz-screen");
const resultScreen  = document.getElementById("result-screen");
const statsScreen   = document.getElementById("stats-screen");

// Buttons
const startBtn        = document.getElementById("start-btn");
const topicBtns       = document.querySelectorAll(".topic-btn");
const nextBtn         = document.getElementById("next-btn");
const retryBtn        = document.getElementById("retry-btn");
const backBtn         = document.getElementById("back-btn");
const viewStatsBtn    = document.getElementById("view-stats-btn");
const backFromStatsBtn = document.getElementById("back-from-stats-btn");
const clearStatsBtn   = document.getElementById("clear-stats-btn");

// User profile fields
const userNameInput      = document.getElementById("user-name");
const userAgeInput       = document.getElementById("user-age");
const userYearInput      = document.getElementById("user-year");
const userErrorText      = document.getElementById("user-error");
const profileContinueBtn = document.getElementById("profile-continue-btn");

// Quiz info elements
const topicTitle     = document.getElementById("topic-title");
const questionNumber = document.getElementById("question-number");
const scoreText      = document.getElementById("score-text");
const questionText   = document.getElementById("question-text");
const optionsDiv     = document.getElementById("options");
const feedbackText   = document.getElementById("feedback-text");

// Result
const resultText = document.getElementById("result-text");

// Best score labels
const bestPhishing = document.getElementById("best-phishing");
const bestPassword = document.getElementById("best-password");
const bestMalware  = document.getElementById("best-malware");

// Stats elements
const statsOverview   = document.getElementById("stats-overview");
const statsTopicList  = document.getElementById("stats-topic-list");
const statsDiffList   = document.getElementById("stats-diff-list");
const statsLastPlayed = document.getElementById("stats-last-played");

// ====== STATE VARIABLES ======

let currentTopic = null;      // "phishing" / "password" / "malware"
let currentQuestions = [];    // array of question objects
let currentIndex = 0;         // which question are we on
let score = 0;                // current score

// ====== INITIAL SETUP ======

updateBestScoreLabels();

// ====== EVENT LISTENERS ======

// 1) From welcome screen → user profile screen
startBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  userScreen.classList.remove("hidden");

  // If user profile exists, pre-fill it
  const savedProfile = JSON.parse(localStorage.getItem("userProfile") || "null");
  if (savedProfile) {
    userNameInput.value = savedProfile.name || "";
    userAgeInput.value  = savedProfile.age  || "";
    userYearInput.value = savedProfile.year || "";
  }
});

// 2) From user profile → topic screen
profileContinueBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  const age  = userAgeInput.value.trim();
  const year = userYearInput.value.trim();

  // basic validation
  if (!name || !age || !year) {
    userErrorText.textContent = "Please fill all fields before continuing.";
    return;
  }

  const ageNum = Number(age);
  if (Number.isNaN(ageNum) || ageNum <= 0) {
    userErrorText.textContent = "Please enter a valid age.";
    return;
  }

  userErrorText.textContent = "";

  // Save profile in localStorage
  const profile = { name, age: ageNum, year };
  localStorage.setItem("userProfile", JSON.stringify(profile));

  // Move to topic selection screen
  userScreen.classList.add("hidden");
  topicScreen.classList.remove("hidden");
  updateBestScoreLabels();
});

// 3) When user clicks on any topic button
topicBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentTopic = btn.dataset.topic;           // "phishing" / "password" / "malware"
    currentQuestions = QUESTIONS[currentTopic]; // get questions from questions.js
    startQuiz();
  });
});

// 4) Next button in quiz
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});

// 5) Retry button on result screen
retryBtn.addEventListener("click", () => {
  startQuiz();
});

// 6) Back to topic selection from result
backBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  topicScreen.classList.remove("hidden");
  updateBestScoreLabels();
});

// 7) Open stats screen
viewStatsBtn.addEventListener("click", () => {
  topicScreen.classList.add("hidden");
  statsScreen.classList.remove("hidden");
  renderStats();
});

// 8) Back from stats to topics
backFromStatsBtn.addEventListener("click", () => {
  statsScreen.classList.add("hidden");
  topicScreen.classList.remove("hidden");
});

// 9) Clear stats
clearStatsBtn.addEventListener("click", () => {
  localStorage.removeItem("quizHistory");
  renderStats();
});

// ====== MAIN FUNCTIONS ======

// Start a new quiz for the selected topic
function startQuiz() {
  topicScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  currentIndex = 0;
  score = 0;
  loadQuestion();
}

// Load the current question and options
function loadQuestion() {
  const q = currentQuestions[currentIndex];

  topicTitle.textContent = "Topic: " + currentTopic.toUpperCase();
  questionNumber.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
  scoreText.textContent = `Score: ${score}`;

  questionText.textContent = q.text;
  optionsDiv.innerHTML = "";        // clear previous options
  nextBtn.disabled = true;          // user must answer first

  // clear feedback from previous question
  if (feedbackText) {
    feedbackText.textContent = "";
    feedbackText.classList.remove("correct", "wrong");
  }

  // Create a button for each option
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.addEventListener("click", () => handleAnswer(index));
    optionsDiv.appendChild(btn);
  });
}

// When user selects an answer
function handleAnswer(selectedIndex) {
  const q = currentQuestions[currentIndex];
  const correctIndex = q.correctIndex;
  const explanation = q.explanation;

  const optionButtons = document.querySelectorAll(".option-btn");

  // Disable all buttons and color them
  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correctIndex) {
      btn.classList.add("correct");
    }
    if (index === selectedIndex && index !== correctIndex) {
      btn.classList.add("wrong");
    }
  });

  // Clear old feedback classes
  if (feedbackText) {
    feedbackText.classList.remove("correct", "wrong");
  }

  // Update score and show explanation inline
  if (selectedIndex === correctIndex) {
    score++;
    if (feedbackText) {
      feedbackText.textContent = "✅ Correct! " + explanation;
      feedbackText.classList.add("correct");
    }
  } else {
    if (feedbackText) {
      feedbackText.textContent = "❌ Wrong! " + explanation;
      feedbackText.classList.add("wrong");
    }
  }

  scoreText.textContent = `Score: ${score}`;
  nextBtn.disabled = false;  // now user can go to next question
}

// When quiz is finished
function endQuiz() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const total = currentQuestions.length;
  const percent = Math.round((score / total) * 100);

  let message = `You scored ${score} out of ${total} (${percent}%). `;

  if (percent >= 80) {
    message += "Excellent! You earned the 'Cyber Aware' badge 🎖️";
  } else if (percent >= 50) {
    message += "Good start! Keep practicing to become fully cyber safe.";
  } else {
    message += "Be careful! Many attacks could still trick you. Practice more.";
  }

  resultText.textContent = message;

  // Save best score
  saveBestScore();

  // Log this quiz result into history for stats
  logQuizResult(total, percent);

  updateBestScoreLabels();
}

// ====== BEST SCORE (LOCAL STORAGE) ======

// Save high score for current topic
function saveBestScore() {
  const key = "best_" + currentTopic;   // e.g. "best_phishing"
  const previousBest = Number(localStorage.getItem(key)) || 0;
  if (score > previousBest) {
    localStorage.setItem(key, score);
  }
}

// Show best scores on topic cards
function updateBestScoreLabels() {
  const phishingBest = localStorage.getItem("best_phishing") || 0;
  const passwordBest = localStorage.getItem("best_password") || 0;
  const malwareBest  = localStorage.getItem("best_malware")  || 0;

  if (bestPhishing) bestPhishing.textContent = "Best score: " + phishingBest;
  if (bestPassword) bestPassword.textContent = "Best score: " + passwordBest;
  if (bestMalware)  bestMalware.textContent  = "Best score: " + malwareBest;
}

// ====== STATS & HISTORY ======

// Save one quiz attempt into quizHistory in localStorage
function logQuizResult(totalQuestions, percentScore) {
  const key = "quizHistory";
  const now = new Date().toISOString();

  // Count how many easy/medium/hard questions in this quiz
  const difficultyCount = { easy: 0, medium: 0, hard: 0 };
  currentQuestions.forEach(q => {
    const d = (q.difficulty || "unknown").toLowerCase();
    if (difficultyCount[d] !== undefined) {
      difficultyCount[d]++;
    }
  });

  const newEntry = {
    topic: currentTopic,           // "phishing" / "password" / "malware"
    totalQuestions,
    score,
    percent: percentScore,
    date: now,
    difficultyCount
  };

  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  existing.push(newEntry);
  localStorage.setItem(key, JSON.stringify(existing));
}

// Calculate and display statistics from history
function renderStats() {
  const key = "quizHistory";
  const history = JSON.parse(localStorage.getItem(key) || "[]");

  if (history.length === 0) {
    statsOverview.textContent = "No data yet. Play some quizzes first!";
    statsTopicList.innerHTML = "";
    statsDiffList.innerHTML = "";
    statsLastPlayed.textContent = "";
    return;
  }

  // Overall stats
  let totalQuizzes = history.length;
  let totalQuestions = 0;
  let totalCorrect = 0;

  const topicTotals = {};
  const diffTotals = {
    easy:   { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard:   { correct: 0, total: 0 }
  };

  history.forEach(entry => {
    totalQuestions += entry.totalQuestions;
    totalCorrect   += entry.score;

    // By topic
    if (!topicTotals[entry.topic]) {
      topicTotals[entry.topic] = { correct: 0, total: 0 };
    }
    topicTotals[entry.topic].correct += entry.score;
    topicTotals[entry.topic].total   += entry.totalQuestions;

    // By difficulty (approx: split score proportionally)
    ["easy", "medium", "hard"].forEach(d => {
      const qCount = entry.difficultyCount[d] || 0;
      diffTotals[d].total += qCount;
      if (entry.totalQuestions > 0) {
        const ratio = qCount / entry.totalQuestions;
        diffTotals[d].correct += entry.score * ratio;
      }
    });
  });

  const overallPercent = Math.round((totalCorrect / totalQuestions) * 100);

  // Add user's name if profile exists
  const profile = JSON.parse(localStorage.getItem("userProfile") || "null");
  const namePart = profile && profile.name ? `${profile.name}, ` : "";

  statsOverview.textContent =
    `${namePart}you have played ${totalQuizzes} quizzes (${totalQuestions} questions) with an overall accuracy of ${overallPercent}%.`;

  // Fill topic-wise list
  statsTopicList.innerHTML = "";
  Object.keys(topicTotals).forEach(topic => {
    const t = topicTotals[topic];
    const p = t.total ? Math.round((t.correct / t.total) * 100) : 0;
    const li = document.createElement("li");
    li.textContent = `${topic.toUpperCase()}: ${t.correct}/${t.total} correct (${p}%)`;
    statsTopicList.appendChild(li);
  });

  // Fill difficulty-wise list
  statsDiffList.innerHTML = "";
  ["easy", "medium", "hard"].forEach(d => {
    const t = diffTotals[d];
    if (t.total > 0) {
      const p = Math.round((t.correct / t.total) * 100);
      const li = document.createElement("li");
      li.textContent = `${d.toUpperCase()}: approx. ${p}% accuracy over ${t.total} questions`;
      statsDiffList.appendChild(li);
    }
  });

  // Last played date
  const last = history[history.length - 1];
  const dateObj = new Date(last.date);
  statsLastPlayed.textContent = `Last quiz played on: ${dateObj.toLocaleString()}`;
}
                                                                                                                                                                                                                                                                                                                                                                                                                                           