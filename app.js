const copy = {
  zh: {
    brand: "下班几点？", changeBackground: "换背景", eyebrow: "OFF DUTY · 下班倒计时",
    title: "今天，几点下班？", subtitle: "填好三个时间，让小腊肠狗陪你跑向下班。",
    workProgress: "今日上班进度", notStarted: "还没开工，先喝口水", working: "认真营业中", almostDone: "快到终点啦", offDuty: "已经下班啦",
    calculator: "时间计算器", setSchedule: "设置今天的安排", live: "实时", startTime: "上班时间",
    workHours: "工作时长", breakHours: "休息时长", fixed: "固定", clock: "时钟", calculate: "计算下班时间",
    estimated: "预计下班时间", resultMessage: "今天也辛苦了，准点收工。", nextDay: "次日",
    backgrounds: "背景主题", chooseScene: "挑一个今天的风景", originalNote: "影视主题使用公开宣传图，BTS 图片采用 CC 授权，古建筑为原创背景。", juliaCompanion: "Julia 的摸鱼搭子", tapChico: "点击 Chico，看看他下一秒想做什么。",
    invalidTime: "请选择有效的上班时间。", invalidWork: "工作时长请输入 4–12 小时（0.5 小时递增）。", invalidBreak: "休息时长请输入 0–2 小时（0.5 小时递增）。",
    themes: ["Teach You a Lesson · 教室", "Stranger Things · 异界小镇", "权力的游戏 · 冰火王国", "Sherlock Holmes · 雾都", "Attack on Titan · 高墙", "BTS · 紫色舞台", "云上长城", "故宫金秋", "天坛晨蓝", "江南烟雨"]
  },
  en: {
    brand: "Off Duty", changeBackground: "Background", eyebrow: "OFF DUTY · WORKDAY TIMER",
    title: "When can I leave?", subtitle: "Set your hours and let the little dachshund run you toward freedom.",
    workProgress: "Today's progress", notStarted: "Not started — hydrate first", working: "Making good progress", almostDone: "Almost at the finish line", offDuty: "You're off duty!",
    calculator: "TIME CALCULATOR", setSchedule: "Set today's schedule", live: "Live", startTime: "Start time",
    workHours: "Working hours", breakHours: "Break time", fixed: "Pin", clock: "Time", calculate: "Calculate finish time",
    estimated: "Estimated finish", resultMessage: "Good work today. Leave on time.", nextDay: "next day",
    backgrounds: "BACKGROUND THEMES", chooseScene: "Pick today's view", originalNote: "TV themes use public promotional images; the BTS photo is CC-licensed; landmarks are original art.", juliaCompanion: "Julia's office buddy", tapChico: "Tap Chico to see what he does next.",
    invalidTime: "Choose a valid start time.", invalidWork: "Working hours must be 4–12 in 0.5-hour steps.", invalidBreak: "Break time must be 0–2 in 0.5-hour steps.",
    themes: ["Teach You a Lesson · Classroom", "Stranger Things · Small Town", "Game of Thrones · Ice & Fire", "Sherlock Holmes · London", "Attack on Titan · The Walls", "BTS · Violet Stage", "Great Wall Above Clouds", "Forbidden City Autumn", "Temple Dawn", "Jiangnan Rain"]
  },
  de: {
    brand: "Feierabend?", changeBackground: "Hintergrund", eyebrow: "OFF DUTY · FEIERABEND-COUNTDOWN",
    title: "Wann ist Feierabend?", subtitle: "Zeiten eintragen — der kleine Dackel läuft mit dir in den Feierabend.",
    workProgress: "Heutiger Fortschritt", notStarted: "Noch nicht begonnen — erst mal Wasser", working: "Gut unterwegs", almostDone: "Fast am Ziel", offDuty: "Feierabend!",
    calculator: "ZEITRECHNER", setSchedule: "Heutigen Plan festlegen", live: "Live", startTime: "Arbeitsbeginn",
    workHours: "Arbeitszeit", breakHours: "Pausenzeit", fixed: "Fix", clock: "Uhrzeit", calculate: "Feierabend berechnen",
    estimated: "Voraussichtlicher Feierabend", resultMessage: "Gute Arbeit. Pünktlich Schluss machen.", nextDay: "Folgetag",
    backgrounds: "HINTERGRÜNDE", chooseScene: "Wähle deine heutige Aussicht", originalNote: "Serienthemen nutzen öffentliche Promobilder; das BTS-Foto ist CC-lizenziert; Bauwerke sind Originalkunst.", juliaCompanion: "Julias Büro-Kumpel", tapChico: "Klick auf Chico und schau, was er als Nächstes macht.",
    invalidTime: "Bitte eine gültige Startzeit wählen.", invalidWork: "Arbeitszeit: 4–12 Stunden in 0,5-Stunden-Schritten.", invalidBreak: "Pausenzeit: 0–2 Stunden in 0,5-Stunden-Schritten.",
    themes: ["Teach You a Lesson · Schule", "Stranger Things · Kleinstadt", "Game of Thrones · Eis & Feuer", "Sherlock Holmes · London", "Attack on Titan · Mauern", "BTS · Violette Bühne", "Große Mauer", "Verbotene Stadt", "Himmelstempel", "Regen in Jiangnan"]
  }
};

const themes = [
  { image: "assets/bg-teach-you-a-lesson.jpg", position: "center" },
  { image: "assets/bg-stranger-things.jpg", position: "center" },
  { image: "assets/bg-game-of-thrones.jpg", position: "center" },
  { image: "assets/bg-sherlock.jpg", position: "center" },
  { image: "assets/bg-attack-on-titan.jpg", position: "center" },
  { image: "assets/bg-bts.jpg", position: "center" },
  { image: "assets/bg-great-wall.jpg", position: "center" },
  { image: "assets/bg-forbidden-city.jpg", position: "center" },
  { image: "assets/bg-temple-of-heaven.jpg", position: "center" },
  { image: "assets/bg-jiangnan.jpg", position: "center" }
];

const chicoPhrases = {
  zh: [
    "Julia今天也要加油哦！", "还差一点，马上就要下班了！", "Julia，我们去旅行把！意大利怎么样？",
    "最近在看什么剧呢？记得看Attack on Titan!", "Julia今天有好好吃饭嘛？我想吃中餐！", "Julia有好好睡觉嘛？记得不要熬夜太晚哦！"
  ],
  en: [
    "You've got this today, Julia!", "Just a little more — work is almost over!", "Julia, let's travel! How about Italy?",
    "What are you watching lately? Remember Attack on Titan!", "Julia, did you eat properly today? I want Chinese food!", "Julia, did you sleep well? Remember not to stay up too late!"
  ],
  de: [
    "Julia, du schaffst das heute!", "Nur noch ein bisschen — gleich ist Feierabend!", "Julia, lass uns verreisen! Wie wäre es mit Italien?",
    "Welche Serie schaust du gerade? Denk an Attack on Titan!", "Julia, hast du heute gut gegessen? Ich möchte chinesisch essen!", "Julia, hast du gut geschlafen? Bleib bitte nicht zu lange wach!"
  ]
};

const chicoPoseImages = Array.from({ length: 6 }, (_, index) => `assets/chico-pose-${index + 1}.png`);

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const state = {
  lang: localStorage.getItem("offduty.lang") || "zh",
  theme: Number(localStorage.getItem("offduty.theme") || 0),
  chicoPose: 0
};

function applyLanguage(lang) {
  state.lang = copy[lang] ? lang : "zh";
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang;
  $$('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[state.lang][key]) node.textContent = copy[state.lang][key];
  });
  $$('[data-lang]').forEach((button) => button.classList.toggle('is-active', button.dataset.lang === state.lang));
  localStorage.setItem("offduty.lang", state.lang);
  renderThemes();
  updateProgress();
  updateChicoMessage(false);
}

function applyTheme(index) {
  state.theme = Math.min(9, Math.max(0, index));
  const theme = themes[state.theme];
  document.documentElement.style.setProperty("--scene-image", `url("${theme.image}")`);
  document.documentElement.style.setProperty("--scene-x", theme.position);
  localStorage.setItem("offduty.theme", String(state.theme));
  $$('.theme-card').forEach((card, i) => card.classList.toggle('is-active', i === state.theme));
}

function renderThemes() {
  const grid = $('#themeGrid');
  grid.innerHTML = '';
  themes.forEach((theme, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `theme-card${index === state.theme ? ' is-active' : ''}`;
    card.style.setProperty('--thumb-image', `url("${theme.image}")`);
    card.style.setProperty('--thumb-x', theme.position);
    card.innerHTML = `<span>${copy[state.lang].themes[index]}</span>`;
    card.addEventListener('click', () => { applyTheme(index); closeDrawer(); });
    grid.appendChild(card);
  });
}

function openDrawer() {
  $('#themeDrawer').classList.add('is-open');
  $('#themeDrawer').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('.drawer__close').focus();
}

function closeDrawer() {
  $('#themeDrawer').classList.remove('is-open');
  $('#themeDrawer').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function buildCombo(id, min, max) {
  const combo = $(`[data-combo="${id}"]`);
  const input = $(`#${id}`);
  const menu = $('.combo__menu', combo);
  for (let value = min; value <= max; value += .5) {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'combo__option';
    option.textContent = value.toFixed(value % 1 ? 1 : 0);
    option.dataset.value = value;
    option.setAttribute('role', 'option');
    option.addEventListener('click', () => {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      closeCombos();
    });
    menu.appendChild(option);
  }
  const toggle = () => {
    const willOpen = !combo.classList.contains('is-open');
    closeCombos();
    combo.classList.toggle('is-open', willOpen);
    input.setAttribute('aria-expanded', String(willOpen));
    syncCombo(combo);
  };
  $('.combo__toggle', combo).addEventListener('click', toggle);
  input.addEventListener('click', () => { if (!combo.classList.contains('is-open')) toggle(); });
  input.addEventListener('input', () => { syncCombo(combo); storeIfPinned(id); updateProgress(); });
}

function syncCombo(combo) {
  const value = $(`input`, combo).value;
  $$('.combo__option', combo).forEach((option) => option.classList.toggle('is-selected', option.dataset.value === value));
}

function closeCombos() {
  $$('.combo.is-open').forEach((combo) => {
    combo.classList.remove('is-open');
    $('input', combo).setAttribute('aria-expanded', 'false');
  });
}

function isHalfStep(value) { return Number.isFinite(value) && Math.abs(value * 2 - Math.round(value * 2)) < .0001; }

function getSchedule(showError = false) {
  const start = $('#startTime').value;
  const work = Number($('#workHours').value);
  const rest = Number($('#breakHours').value);
  let error = '';
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(start)) error = copy[state.lang].invalidTime;
  else if (work < 4 || work > 12 || !isHalfStep(work)) error = copy[state.lang].invalidWork;
  else if (rest < 0 || rest > 2 || !isHalfStep(rest)) error = copy[state.lang].invalidBreak;
  if (showError) $('#errorMessage').textContent = error;
  if (error) return null;
  const [hours, minutes] = start.split(':').map(Number);
  const startMinutes = hours * 60 + minutes;
  const totalMinutes = Math.round((work + rest) * 60);
  return { start, work, rest, startMinutes, endMinutes: startMinutes + totalMinutes };
}

function calculate(event) {
  event?.preventDefault();
  const schedule = getSchedule(true);
  if (!schedule) return;
  const nextDay = schedule.endMinutes >= 1440;
  const normalized = schedule.endMinutes % 1440;
  const finish = `${String(Math.floor(normalized / 60)).padStart(2,'0')}:${String(normalized % 60).padStart(2,'0')}`;
  $('#resultTime').textContent = finish;
  $('#resultMessage').textContent = `${copy[state.lang].resultMessage}${nextDay ? ` · ${copy[state.lang].nextDay}` : ''}`;
  $('#result').classList.add('is-visible');
  updateProgress();
}

function updateProgress() {
  const schedule = getSchedule(false);
  if (!schedule) return;
  const now = new Date();
  let nowMinutes = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  let end = schedule.endMinutes;
  if (end >= 1440 && nowMinutes < schedule.startMinutes) nowMinutes += 1440;
  const percent = Math.max(0, Math.min(100, ((nowMinutes - schedule.startMinutes) / (end - schedule.startMinutes)) * 100));
  const rounded = Math.round(percent);
  $('#progressFill').style.width = `${percent}%`;
  $('#progressDog').style.left = `${percent}%`;
  $('#progressPercent').textContent = `${rounded}%`;
  $('#progressTrack').setAttribute('aria-valuenow', String(rounded));
  $('#progressStart').textContent = schedule.start;
  const endNormalized = end % 1440;
  $('#progressEnd').textContent = `${String(Math.floor(endNormalized / 60)).padStart(2,'0')}:${String(endNormalized % 60).padStart(2,'0')}`;
  const statusKey = percent <= 0 ? 'notStarted' : percent < 80 ? 'working' : percent < 100 ? 'almostDone' : 'offDuty';
  $('#progressStatus').textContent = copy[state.lang][statusKey];
}

function updateChicoMessage() {
  $('#chicoBubble').textContent = chicoPhrases[state.lang][state.chicoPose];
}

function changeChicoPose() {
  state.chicoPose = (state.chicoPose + 1) % chicoPoseImages.length;
  $('#chicoSprite').style.backgroundImage = `url("${chicoPoseImages[state.chicoPose]}")`;
  const character = $('#chicoCharacter');
  character.classList.remove('is-changing');
  void character.offsetWidth;
  character.classList.add('is-changing');
  setTimeout(() => character.classList.remove('is-changing'), 420);
  updateChicoMessage();
}

function storeIfPinned(id) {
  const pin = $(`[data-pin="${id}"]`);
  if (pin.checked) localStorage.setItem(`offduty.fixed.${id}`, $(`#${id}`).value);
}

function initializePins() {
  $$('[data-pin]').forEach((pin) => {
    const id = pin.dataset.pin;
    const saved = localStorage.getItem(`offduty.fixed.${id}`);
    if (saved !== null) { pin.checked = true; $(`#${id}`).value = saved; }
    pin.addEventListener('change', () => {
      if (pin.checked) storeIfPinned(id);
      else localStorage.removeItem(`offduty.fixed.${id}`);
    });
    $(`#${id}`).addEventListener('input', () => { storeIfPinned(id); updateProgress(); });
  });
}

buildCombo('workHours', 4, 12);
buildCombo('breakHours', 0, 2);
initializePins();
applyLanguage(state.lang);
applyTheme(state.theme);
updateProgress();

$('#calculatorForm').addEventListener('submit', calculate);
$$('[data-lang]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
$('#themeButton').addEventListener('click', openDrawer);
$('#themeFab').addEventListener('click', openDrawer);
$('#chicoCharacter').addEventListener('click', changeChicoPose);
$$('[data-close-drawer]').forEach((button) => button.addEventListener('click', closeDrawer));
document.addEventListener('click', (event) => { if (!event.target.closest('.combo')) closeCombos(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeCombos(); closeDrawer(); } });
setInterval(() => { updateProgress(); updateChicoMessage(false); }, 30_000);
