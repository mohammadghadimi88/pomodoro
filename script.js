let isRunning = false;
let isFocus = true;
let interval;
let seconds = 1500;
let cycles = 0;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const label = document.getElementById("timerLabel");
const languageSelector = document.getElementById("languageSelector");
const themeToggle = document.getElementById("themeToggle");
const title = document.getElementById("title");

const texts = {
  en: { focus: "Focus", break: "Break", start: "Start", reset: "Reset", title: "Pomodoro Timer" },
  es: { focus: "Enfocar", break: "Descanso", start: "Iniciar", reset: "Reiniciar", title: "Temporizador Pomodoro" },
  fr: { focus: "Concentration", break: "Pause", start: "Démarrer", reset: "Réinitialiser", title: "Minuteur Pomodoro" },
  ru: { focus: "Фокус", break: "Перерыв", start: "Старт", reset: "Сброс", title: "Таймер Pomodoro" },
  zh: { focus: "专注", break: "休息", start: "开始", reset: "重置", title: "番茄钟" },
  ja: { focus: "集中", break: "休憩", start: "スタート", reset: "リセット", title: "ポモドーロタイマー" },
  ko: { focus: "집중", break: "휴식", start: "시작", reset: "초기화", title: "포모도로 타이머" }
};

function updateTime() {
  const min = Math.floor(seconds / 60).toString().padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");
  timeDisplay.textContent = `${min}:${sec}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        updateTime();
      } else {
        clearInterval(interval);
        isRunning = false;
        cycles++;
        if (isFocus) {
          alert("Time for a short break!");
          seconds = 300;
        } else {
          alert("Time to focus!");
          seconds = 1500;
        }
        isFocus = !isFocus;
        updateLabels();
        updateTime();
        startTimer();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(interval);
  isRunning = false;
  isFocus = true;
  seconds = 1500;
  updateTime();
  updateLabels();
}

function updateLabels() {
  const lang = languageSelector.value;
  const t = texts[lang];
  label.textContent = isFocus ? t.focus : t.break;
  startBtn.textContent = t.start;
  resetBtn.textContent = t.reset;
  title.textContent = t.title;
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
languageSelector.addEventListener("change", updateLabels);
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

updateLabels();
updateTime();
