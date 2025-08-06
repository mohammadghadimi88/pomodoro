// --- i18n dictionary ---
const I18N = {
  fa: {
    title: "تایمر پومودورو",
    ready: "آماده",
    start: "شروع",
    pause: "توقف",
    reset: "ریست",
    settings: "تنظیمات (اختیاری)",
    focus_minutes: "مدت تمرکز (دقیقه):",
    short_minutes: "استراحت کوتاه (دقیقه):",
    long_minutes: "استراحت بلند بعد از ۴ چرخه (دقیقه):",
    pattern: "الگو: ۴ بار تمرکز ۲۵ دقیقه + استراحت ۵ دقیقه، سپس یک استراحت ۳۵ دقیقه.",
    hint: "در پایان هر بخش، پیام روی صفحه نمایش داده می‌شود.",
    focus_done: "پایان تمرکز! وقت استراحت کوتاه است.",
    short_done: "پایان استراحت کوتاه! آماده تمرکز بعدی باشید.",
    long_done: "تبریک! چرخه‌های پومودورو کامل شد. استراحت بلند تمام شد.",
    focus: "تمرکز",
    short: "استراحت کوتاه",
    long: "استراحت بلند",
  },
  en: {
    title: "Pomodoro Timer",
    ready: "Ready",
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    settings: "Settings (optional)",
    focus_minutes: "Focus (minutes):",
    short_minutes: "Short break (minutes):",
    long_minutes: "Long break after 4 cycles (minutes):",
    pattern: "Pattern: 4× (25 focus + 5 break), then a 35-min long break.",
    hint: "A message appears at the end of each phase.",
    focus_done: "Focus finished! Time for a short break.",
    short_done: "Short break finished! Get ready to focus.",
    long_done: "Congrats! Pomodoro cycles complete. Long break finished.",
    focus: "Focus",
    short: "Short Break",
    long: "Long Break",
  },
  ar: {
    title: "مؤقّت بومودورو",
    ready: "جاهز",
    start: "ابدأ",
    pause: "إيقاف",
    reset: "إعادة ضبط",
    settings: "الإعدادات (اختياري)",
    focus_minutes: "التركيز (بالدقائق):",
    short_minutes: "استراحة قصيرة (بالدقائق):",
    long_minutes: "استراحة طويلة بعد 4 دورات (بالدقائق):",
    pattern: "النمط: 4× (25 تركيز + 5 استراحة)، ثم 35 دقيقة استراحة طويلة.",
    hint: "تظهر رسالة عند نهاية كل مرحلة.",
    focus_done: "انتهى التركيز! حان وقت الاستراحة القصيرة.",
    short_done: "انتهت الاستراحة القصيرة! استعد للتركيز.",
    long_done: "مبروك! اكتملت دورات بومودورو. انتهت الاستراحة الطويلة.",
    focus: "تركيز",
    short: "استراحة قصيرة",
    long: "استراحة طويلة",
  },
  de: {
    title: "Pomodoro-Timer",
    ready: "Bereit",
    start: "Start",
    pause: "Pause",
    reset: "Zurücksetzen",
    settings: "Einstellungen (optional)",
    focus_minutes: "Fokus (Minuten):",
    short_minutes: "Kurze Pause (Minuten):",
    long_minutes: "Lange Pause nach 4 Zyklen (Minuten):",
    pattern: "Muster: 4× (25 Fokus + 5 Pause), dann 35 Minuten lange Pause.",
    hint: "Am Ende jeder Phase erscheint eine Nachricht.",
    focus_done: "Fokus beendet! Zeit für eine kurze Pause.",
    short_done: "Kurze Pause beendet! Bereit für Fokus.",
    long_done: "Glückwunsch! Pomodoro-Zyklen abgeschlossen. Lange Pause beendet.",
    focus: "Fokus",
    short: "Kurze Pause",
    long: "Lange Pause",
  },
  // می‌تونی بقیه زبان‌ها رو شبیه همین اضافه کنی
};

// --- Elements ---
const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const messageBox = document.getElementById("message");
const phaseLabel = document.getElementById("phase-label");
const cycleLabel = document.getElementById("cycle-label");
const focusInput = document.getElementById("focus-min");
const shortBreakInput = document.getElementById("short-break-min");
const longBreakInput = document.getElementById("long-break-min");
const langSelect = document.getElementById("lang-select");
const dirToggle = document.getElementById("dir-toggle");

// --- State ---
let focusDuration = 25 * 60;
let shortBreakDuration = 5 * 60;
let longBreakDuration = 35 * 60;
const cyclesTarget = 4;

let currentCycle = 0;
let phase = "idle"; // focus | short | long | idle
let remaining = focusDuration;
let intervalId = null;

// --- Helpers ---
function updateTimerDisplay(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  timerDisplay.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function setPhase(newPhase) {
  phase = newPhase;
  const t = I18N[getLang()];
  if (phase === "focus") {
    remaining = focusDuration;
    phaseLabel.textContent = t.focus;
    messageBox.textContent = "";
  } else if (phase === "short") {
    remaining = shortBreakDuration;
    phaseLabel.textContent = t.short;
    messageBox.textContent = "";
  } else if (phase === "long") {
    remaining = longBreakDuration;
    phaseLabel.textContent = t.long;
    messageBox.textContent = "";
  } else {
    phaseLabel.textContent = t.ready;
  }
  updateTimerDisplay(remaining);
  updateCycleLabel();
}

function updateCycleLabel() {
  cycleLabel.textContent = `${currentCycle} / ${cyclesTarget}`;
}

function notify(text) {
  messageBox.textContent = text;
  try {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(text);
    }
  } catch (e) { /* ignore */ }
}

function tick() {
  if (remaining > 0) {
    remaining -= 1;
    updateTimerDisplay(remaining);
    return;
  }
  clearInterval(intervalId);
  intervalId = null;
  pauseBtn.disabled = true;
  startBtn.disabled = false;

  const t = I18N[getLang()];
  if (phase === "focus") {
    currentCycle += 1;
    notify(t.focus_done);
    if (currentCycle >= cyclesTarget) setPhase("long");
    else setPhase("short");
  } else if (phase === "short") {
    notify(t.short_done);
    setPhase("focus");
  } else if (phase === "long") {
    notify(t.long_done);
    currentCycle = 0;
    setPhase("idle");
  }
}

function startTimer() {
  if (phase === "idle") setPhase("focus");
  if (intervalId) return;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  intervalId = setInterval(tick, 1000);
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }
}

function pauseTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }
}

function resetTimer() {
  pauseTimer();
  currentCycle = 0;
  setPhase("idle");
  messageBox.textContent = "";
  updateTimerDisplay(focusDuration);
}

function syncDurationsFromInputs() {
  const fm = parseInt(focusInput.value || "25");
  const sb = parseInt(shortBreakInput.value || "5");
  const lb = parseInt(longBreakInput.value || "35");
  focusDuration = Math.max(1, isNaN(fm) ? 25 : fm) * 60;
  shortBreakDuration = Math.max(1, isNaN(sb) ? 5 : sb) * 60;
  longBreakDuration = Math.max(1, isNaN(lb) ? 35 : lb) * 60;
  if (phase === "idle") {
    remaining = focusDuration;
    updateTimerDisplay(remaining);
  }
}

// --- i18n handling ---
function getLang() {
  return localStorage.getItem("lang") || "fa";
}
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang();
}
function applyLang() {
  const lang = getLang();
  const dict = I18N[lang] || I18N.fa;
  // swap dir for some languages (optional)
  const rtlLangs = ["fa", "ar"];
  document.documentElement.lang = lang;
  document.documentElement.dir = rtlLangs.includes(lang) ? "rtl" : "ltr";

  // set texts
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // buttons text
  startBtn.textContent = dict.start;
  pauseBtn.textContent = dict.pause;
  resetBtn.textContent = dict.reset;
  updateCycleLabel();
  if (phase === "idle") phaseLabel.textContent = dict.ready;
}

// --- UI events ---
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

focusInput.addEventListener("change", syncDurationsFromInputs);
shortBreakInput.addEventListener("change", syncDurationsFromInputs);
longBreakInput.addEventListener("change", syncDurationsFromInputs);

langSelect.addEventListener("change", (e) => setLang(e.target.value));
dirToggle.addEventListener("click", () => {
  const cur = document.documentElement.dir || "ltr";
  document.documentElement.dir = cur === "rtl" ? "ltr" : "rtl";
});

// --- init ---
(function init(){
  // language from localStorage or browser
  const browserLang = (navigator.language || "fa").slice(0,2);
  if (!localStorage.getItem("lang")) {
    if (I18N[browserLang]) localStorage.setItem("lang", browserLang);
    else localStorage.setItem("lang", "fa");
  }
  langSelect.value = getLang();
  applyLang();
  setPhase("idle");
  updateTimerDisplay(focusDuration);
})();
