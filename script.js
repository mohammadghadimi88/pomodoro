/************ i18n dictionary ************/
const I18N = {
  fa: {
    title: "تایمر پومودورو",
    ready: "آماده",
    start: "شروع",
    pause: "توقف",
    reset: "ریست",
    sound: "صدا",
    vibrate: "ویبره",
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
    stats_title: "آمار تمرین",
    today: "امروز",
    this_week: "این هفته",
    min: "دقیقه",
    share: "اشتراک‌گذاری",
  },
  en: {
    title: "Pomodoro Timer",
    ready: "Ready",
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    sound: "Sound",
    vibrate: "Vibrate",
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
    stats_title: "Practice Stats",
    today: "Today",
    this_week: "This week",
    min: "min",
    share: "Share",
  },
  ar: {
    title: "مؤقّت بومودورو",
    ready: "جاهز",
    start: "ابدأ",
    pause: "إيقاف",
    reset: "إعادة ضبط",
    sound: "صوت",
    vibrate: "اهتزاز",
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
    stats_title: "إحصائيات الممارسة",
    today: "اليوم",
    this_week: "هذا الأسبوع",
    min: "دقيقة",
    share: "مشاركة",
  },
  de: {
    title: "Pomodoro-Timer",
    ready: "Bereit",
    start: "Start",
    pause: "Pause",
    reset: "Zurücksetzen",
    sound: "Ton",
    vibrate: "Vibrieren",
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
    stats_title: "Übungsstatistiken",
    today: "Heute",
    this_week: "Diese Woche",
    min: "Min.",
    share: "Teilen",
  },
  es: {
    title: "Temporizador Pomodoro",
    ready: "Listo",
    start: "Iniciar",
    pause: "Pausar",
    reset: "Reiniciar",
    sound: "Sonido",
    vibrate: "Vibración",
    settings: "Configuración (opcional)",
    focus_minutes: "Enfoque (minutos):",
    short_minutes: "Descanso corto (minutos):",
    long_minutes: "Descanso largo después de 4 ciclos (minutos):",
    pattern: "Patrón: 4× (25 enfoque + 5 descanso), luego un descanso largo de 35 min.",
    hint: "Un mensaje aparece al final de cada fase.",
    focus_done: "¡Enfoque terminado! Es hora de un descanso corto.",
    short_done: "¡Descanso corto terminado! Prepárate para enfocarte.",
    long_done: "¡Felicidades! Ciclos de Pomodoro completos. Descanso largo finalizado.",
    focus: "Enfoque",
    short: "Descanso corto",
    long: "Descanso largo",
    stats_title: "Estadísticas",
    today: "Hoy",
    this_week: "Esta semana",
    min: "min",
    share: "Compartir",
  },
  fr: {
    title: "Minuteur Pomodoro",
    ready: "Prêt",
    start: "Démarrer",
    pause: "Pause",
    reset: "Réinitialiser",
    sound: "Son",
    vibrate: "Vibration",
    settings: "Paramètres (facultatif)",
    focus_minutes: "Concentration (minutes) :",
    short_minutes: "Courte pause (minutes) :",
    long_minutes: "Longue pause après 4 cycles (minutes) :",
    pattern: "Schéma : 4× (25 concentration + 5 pause), puis une pause de 35 min.",
    hint: "Un message apparaît à la fin de chaque phase.",
    focus_done: "Concentration terminée ! Pause courte.",
    short_done: "Pause courte terminée ! Prêt à se concentrer.",
    long_done: "Bravo ! Cycles Pomodoro terminés. Longue pause terminée.",
    focus: "Concentration",
    short: "Courte pause",
    long: "Longue pause",
    stats_title: "Statistiques",
    today: "Aujourd’hui",
    this_week: "Cette semaine",
    min: "min",
    share: "Partager",
  },
  ru: {
    title: "Таймер Помодоро",
    ready: "Готово",
    start: "Старт",
    pause: "Пауза",
    reset: "Сброс",
    sound: "Звук",
    vibrate: "Вибрация",
    settings: "Настройки (опционально)",
    focus_minutes: "Фокус (минуты):",
    short_minutes: "Короткий перерыв (минуты):",
    long_minutes: "Длинный перерыв после 4 циклов (минуты):",
    pattern: "Схема: 4× (25 фокуса + 5 перерыва), затем длинный перерыв 35 мин.",
    hint: "Сообщение появляется в конце каждого этапа.",
    focus_done: "Фокус завершён! Время короткого перерыва.",
    short_done: "Короткий перерыв завершён! Готовьтесь к фокусу.",
    long_done: "Поздравляем! Циклы Помодоро завершены. Длинный перерыв окончен.",
    focus: "Фокус",
    short: "Короткий перерыв",
    long: "Длинный перерыв",
    stats_title: "Статистика",
    today: "Сегодня",
    this_week: "На этой неделе",
    min: "мин",
    share: "Поделиться",
  },
  zh: {
    title: "番茄钟",
    ready: "准备就绪",
    start: "开始",
    pause: "暂停",
    reset: "重置",
    sound: "声音",
    vibrate: "振动",
    settings: "设置（可选）",
    focus_minutes: "专注（分钟）：",
    short_minutes: "短休息（分钟）：",
    long_minutes: "4轮后长休息（分钟）：",
    pattern: "模式：4×（25分钟专注 + 5分钟休息），然后35分钟长休息。",
    hint: "每个阶段结束会显示提示。",
    focus_done: "专注结束！开始短休息。",
    short_done: "短休息结束！准备专注。",
    long_done: "恭喜！番茄周期完成。长休息结束。",
    focus: "专注",
    short: "短休息",
    long: "长休息",
    stats_title: "统计",
    today: "今天",
    this_week: "本周",
    min: "分钟",
    share: "分享",
  },
  ja: {
    title: "ポモドーロ・タイマー",
    ready: "準備完了",
    start: "開始",
    pause: "一時停止",
    reset: "リセット",
    sound: "サウンド",
    vibrate: "バイブ",
    settings: "設定（任意）",
    focus_minutes: "集中（分）：",
    short_minutes: "短い休憩（分）：",
    long_minutes: "4サイクル後の長い休憩（分）：",
    pattern: "パターン：4×（25分集中 + 5分休憩）、その後35分の長い休憩。",
    hint: "各フェーズの終わりにメッセージが表示されます。",
    focus_done: "集中終了！短い休憩の時間です。",
    short_done: "短い休憩終了！集中の準備をしてください。",
    long_done: "おめでとう！ポモドーロのサイクルが完了しました。長い休憩終了。",
    focus: "集中",
    short: "短い休憩",
    long: "長い休憩",
    stats_title: "統計",
    today: "今日",
    this_week: "今週",
    min: "分",
    share: "共有",
  },
  ko: {
    title: "포모도로 타이머",
    ready: "준비",
    start: "시작",
    pause: "일시정지",
    reset: "리셋",
    sound: "소리",
    vibrate: "진동",
    settings: "설정(선택)",
    focus_minutes: "집중(분):",
    short_minutes: "짧은 휴식(분):",
    long_minutes: "4회 후 긴 휴식(분):",
    pattern: "패턴: 4×(25분 집중 + 5분 휴식) 후 35분 긴 휴식.",
    hint: "각 단계가 끝나면 메시지가 표시됩니다.",
    focus_done: "집중 종료! 짧은 휴식 시간입니다.",
    short_done: "짧은 휴식 종료! 집중할 준비를 하세요.",
    long_done: "축하합니다! 포모도로 사이클 완료. 긴 휴식 종료.",
    focus: "집중",
    short: "짧은 휴식",
    long: "긴 휴식",
    stats_title: "통계",
    today: "오늘",
    this_week: "이번 주",
    min: "분",
    share: "공유",
  },
  tr: {
    title: "Pomodoro Zamanlayıcı",
    ready: "Hazır",
    start: "Başlat",
    pause: "Duraklat",
    reset: "Sıfırla",
    sound: "Ses",
    vibrate: "Titreşim",
    settings: "Ayarlar (isteğe bağlı)",
    focus_minutes: "Odak (dakika):",
    short_minutes: "Kısa mola (dakika):",
    long_minutes: "4 döngüden sonra uzun mola (dakika):",
    pattern: "Düzen: 4× (25 odak + 5 mola), ardından 35 dakikalık uzun mola.",
    hint: "Her aşama sonunda bir mesaj gösterilir.",
    focus_done: "Odak bitti! Kısa mola zamanı.",
    short_done: "Kısa mola bitti! Odağa hazır olun.",
    long_done: "Tebrikler! Pomodoro döngüleri tamamlandı. Uzun mola bitti.",
    focus: "Odak",
    short: "Kısa Mola",
    long: "Uzun Mola",
    stats_title: "İstatistikler",
    today: "Bugün",
    this_week: "Bu hafta",
    min: "dk",
    share: "Paylaş",
  },
};

/************ Elements ************/
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
const themeToggle = document.getElementById("theme-toggle");
const installBtn = document.getElementById("install-btn");
const soundToggle = document.getElementById("sound-toggle");
const vibrateToggle = document.getElementById("vibrate-toggle");
const shareBtn = document.getElementById("share-btn");

/************ State ************/
let focusDuration = 25 * 60;
let shortBreakDuration = 5 * 60;
let longBreakDuration = 35 * 60;
const cyclesTarget = 4;

let currentCycle = 0;
let phase = "idle"; // focus | short | long | idle
let remaining = focusDuration;
let intervalId = null;

let chart, deferredPrompt;

/************ Helpers ************/
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

function playBeep() {
  if (!soundToggle.checked) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(880, ctx.currentTime);
    o.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 0.02);
    o.start();
    setTimeout(() => {
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
      o.stop(ctx.currentTime + 0.32);
      ctx.close();
    }, 280);
  } catch {}
}

function doVibrate() {
  if (!vibrateToggle.checked) return;
  if (navigator.vibrate) navigator.vibrate([100, 60, 100]);
}

function notify(text) {
  messageBox.textContent = text;
  playBeep();
  doVibrate();
  try {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(text);
    }
  } catch (e) {}
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
    addStatsMinutes(focusDuration / 60); // log focus minutes
    refreshStats();
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

/************ i18n ************/
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

  const rtlLangs = ["fa", "ar"];
  document.documentElement.lang = lang;
  document.documentElement.dir = rtlLangs.includes(lang) ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  startBtn.textContent = dict.start;
  pauseBtn.textContent = dict.pause;
  resetBtn.textContent = dict.reset;

  if (phase === "idle") phaseLabel.textContent = dict.ready;
  updateCycleLabel();

  // Update labels for stats unit text (min)
  document.querySelectorAll("[data-i18n='min']").forEach(el => el.textContent = dict.min);
}

/************ Theme ************/
function getTheme() {
  return localStorage.getItem("theme") || "dark";
}
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  const themeColor = theme === "dark" ? "#0f172a" : "#f5f7fb";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", themeColor);
}

/************ Stats (localStorage) ************/
const STATS_KEY = "pomodoro_stats_v1";
// structure: { "YYYY-MM-DD": totalMinutesFocused, ... }

function loadStats() {
  try { return JSON.parse(localStorage.getItem(STATS_KEY) || "{}"); }
  catch { return {}; }
}
function saveStats(data) {
  localStorage.setItem(STATS_KEY, JSON.stringify(data));
}
function todayKey(d = new Date()) {
  return d.toISOString().slice(0,10);
}
function addStatsMinutes(min) {
  const stats = loadStats();
  const key = todayKey();
  stats[key] = (stats[key] || 0) + Math.round(min);
  saveStats(stats);
}
function weekRange(d = new Date()) {
  const day = d.getDay(); // 0 Sun .. 6 Sat
  const diff = (day + 6) % 7; // start Monday
  const start = new Date(d); start.setDate(d.getDate() - diff);
  const arr = [];
  for (let i=0;i<7;i++){
    const dt = new Date(start); dt.setDate(start.getDate()+i);
    arr.push(dt.toISOString().slice(0,10));
  }
  return arr;
}
function sumWeek(stats) {
  return weekRange().reduce((acc,k)=>acc+(stats[k]||0),0);
}
function refreshStats() {
  const stats = loadStats();
  // UI numbers
  const today = stats[todayKey()] || 0;
  document.getElementById("today-focus").textContent = today;
  document.getElementById("week-focus").textContent = sumWeek(stats);

  // Chart: last 7 days
  const labels = [];
  const data = [];
  const days = weekRange();
  for (const k of days) {
    labels.push(k.slice(5)); // MM-DD
    data.push(stats[k] || 0);
  }
  const ctx = document.getElementById("statsChart");
  if (!chart) {
    chart = new Chart(ctx, {
      type: "bar",
      data: { labels, datasets: [{ label: "Focus (min)", data }] },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  } else {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.update();
  }
}

/************ Share ************/
async function shareApp() {
  try {
    if (navigator.share) {
      await navigator.share({ title: "Pomodoro Timer", text: "Try this free Pomodoro timer!", url: location.href });
    } else {
      await navigator.clipboard.writeText(location.href);
      alert("Link copied to clipboard!");
    }
  } catch {}
}

/************ Install (PWA) ************/
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});
installBtn.addEvent
