let isRunning = false;
let isFocus = true;
let interval;
let seconds = 1500; // 25 * 60

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const sessionLabel = document.getElementById("session-label");

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
          alert("Great job! Time for a 5-minute break.");
          seconds = 300; // 5 minutes
          isFocus = false;
          sessionLabel.textContent = "Break";
        } else {
          alert("Break over. Time to focus!");
          seconds = 1500;
          isFocus = true;
          sessionLabel.textContent = "Focus";
        }
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
  sessionLabel.textContent = "Focus";
  updateTime();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateTime();
