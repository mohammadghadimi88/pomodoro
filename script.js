javascript
let isRunning = false;
let isFocus = true;
let interval;
let cycles = 0;
let seconds = 1500; // 25 * 60

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const label = document.getElementById("timerLabel");
const languageSelector = document.getElementById("languageSelector");
const themeToggle = document.getElementById("themeToggle");

const texts = {
  en: { focus: "Focus", break: "Break", start: "Start", reset: "Reset", title: "Pomodoro Timer" },
  es: { focus: "Enfocar", break: "Descanso", start: "Iniciar", reset: "Reiniciar", title: "Temporizador Pomodoro" },
  fr: { focus: "Concentration", break: "Pause", start: "Démarrer", reset: "Réinitialiser", title: "Minuteur Pomodoro" },
  ru: { focus: "Фокус", break: "Перерыв", start: "Старт", reset: "Сброс", title: "Таймер Pomodoro" },
  zh: { focus: "中文", break: "休息", start: "开始", reset: "重置", title: "\u番茄时钟" },
  ja: { focus: "フォーカス", break: "休憩", start: "開始", reset: "リセット", title: "ポモドーロタイマー" },
  ko: { focus: "포\uucf54스", break: "휴식", start: "시작", reset: "재설정", title: "포모도르 타임" }
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
        if (isFocus) {
          cycles++;
          if (cycles % 4 === 0) {
            alert("Great job! Time for a break.");
            seconds = 300; // Short break only, 5 min
          } else {
            alert("Break Time!");
            seconds = 300;
          }
        } else {
          alert("Back to focus!");
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
  document.getElementById("title").textContent = t.title;
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
languageSelector.addEventListener("change", updateLabels);
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

updateLabels();
updateTime();