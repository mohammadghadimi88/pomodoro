let isRunning = false;
let isFocus = true;
let interval;
let seconds = 1500; // 25 minutes

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const sessionLabel = document.getElementById("session-label");

function updateTime() {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  timeDisplay.textContent = `${minutes}:${secs}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      updateTime();
    } else {
      clearInterval(interval);
      isRunning = false;
      isFocus = !isFocus;
      if (isFocus) {
        sessionLabel.textContent = "Focus";
        seconds = 1500;
        alert("Break over! Time to focus.");
      } else {
        sessionLabel.textContent = "Break";
        seconds = 300; // 5-minute break
        alert("Great job! Time for a 5-minute break.");
      }
      updateTime();
      startTimer();
    }
  }, 1000);
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
