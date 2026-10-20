/* Soma Smart — front-end application.
 * Aligned with the Kenya Institute of Curriculum Development (KICD) CBE curriculum.
 * Self-service accounts, guest mode, PWA offline caching, celebration screen,
 * and anonymous curriculum insights. No support desk or manual recovery.
 */
(() => {
"use strict";
const C = window.COURSE, MODS = C.modules, TRACKS = C.tracks;
const STEPS = ["read", "listen", "watch", "mission", "quiz"];
const STEP_LABEL = { read: "SOMA", listen: "SIKIZA", watch: "TAZAMA", mission: "FANYA", quiz: "JARIBU" };
const $app = document.getElementById("app"), $hud = document.getElementById("hud"), $modal = document.getElementById("modal-layer");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const LS_TOKEN = "somasmart.token", LS_USER = "somasmart.user", LS_GUEST_PROG = "somasmart.guest_prog", SS_ADMIN = "somasmart.admin_key";

/* ---------- state ---------- */
let TOKEN = localStorage.getItem(LS_TOKEN) || "";
let USER = null;       // {id, username, display, ageBand, isGuest}
let PROG = {};         // { moduleId: {reached,best,attempts,mastery,done} }
let view = { name: "home" };
let saveTimer = null;
let currentKeyHandler = null;

const modsForTrack = tid => MODS.filter(m => m.track === tid);
const modIndexInTrack = (tid, id) => modsForTrack(tid).findIndex(m => m.id === id);
function ms(id){ return PROG[id] || (PROG[id] = { reached: 0, best: 0, attempts: 0, mastery: "locked", done: false }); }
function unlocked(m){ const list = modsForTrack(m.track); const i = list.findIndex(x => x.id === m.id); return i <= 0 || ms(list[i - 1].id).done; }
function masteryOf(id){ const s = ms(id); if (s.done) { if (s.best >= C.mastery.mastered) return "mastered"; if (s.best >= C.mastery.practised) return "practised"; return "learning"; } return s.reached > 0 ? "learning" : "locked"; }

/* ---------- API ---------- */
async function api(path, method, body, extraHeaders){
  const headers = { "Content-Type": "application/json", ...(extraHeaders || {}) };
  if (TOKEN) headers["Authorization"] = "Bearer " + TOKEN;
  const r = await fetch("api/" + path, { method: method || "GET", headers, body: body ? JSON.stringify(body) : undefined });
  let data = null; try { data = await r.json(); } catch {}
  if (!r.ok) throw new Error((data && data.error) || ("Error " + r.status));
  return data;
}

async function loadProgress(){
  if (USER && USER.isGuest) {
    try { PROG = JSON.parse(localStorage.getItem(LS_GUEST_PROG) || "{}"); } catch { PROG = {}; }
    return;
  }
  try {
    const d = await api("progress");
    PROG = d.mods || {};
  } catch {
    PROG = {};
  }
}

function queueSave(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(pushProgress, 700);
}

async function pushProgress(){
  if (!USER) return;
  if (USER.isGuest) {
    try { localStorage.setItem(LS_GUEST_PROG, JSON.stringify(PROG)); hudSync("guest"); } catch {}
    return;
  }
  if (!TOKEN) return;
  try {
    await api("progress", "PUT", { mods: PROG });
    hudSync("saved");
  } catch {
    hudSync("offline");
  }
}

function track(m, correct){
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon("api/event", JSON.stringify({ track: m.track, module: m.id, correct: !!correct }));
    }
  } catch {}
}

let toastT;
function toast(msg){
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2800);
}

/* ---------- modal layer ---------- */
function openModal(contentHtml){
  $modal.innerHTML = `<div class="modal-card"><button class="modal-close" id="modal-x" aria-label="Close">&times;</button>${contentHtml}</div>`;
  $modal.classList.add("show");
  document.getElementById("modal-x").onclick = closeModal;
  $modal.onclick = e => { if (e.target === $modal) closeModal(); };
}
function closeModal(){
  $modal.classList.remove("show");
  $modal.innerHTML = "";
}

/* ---------- HUD ---------- */
let syncState = "saved";
function hudSync(s){ syncState = s; hud(); }
function hud(){
  const linkReport = document.getElementById("link-report");
  if (!USER) {
    $hud.innerHTML = "";
    if (linkReport) linkReport.style.display = "none";
    return;
  }
  if (linkReport) linkReport.style.display = "inline";

  const total = MODS.length, done = MODS.filter(m => ms(m.id).done).length;
  const isGuest = !!USER.isGuest;
  const syncLabels = {
    saved: ["ok", "● Saved"],
    saving: ["ok", "Saving..."],
    offline: ["err", "▲ Offline"],
    guest: ["ok", "💾 Saved to Browser"]
  };
  const sync = syncLabels[syncState] || ["ok", ""];

  $hud.innerHTML = `
    <span class="who">
      ${esc(USER.display)}
      ${isGuest ? `<span class="badge-guest" title="Guest mode: progress is saved in this browser">Guest</span>` : ""}
    </span>
    <span class="prog">${done}/${total} done</span>
    <span class="sync ${sync[0]}">${sync[1]}</span>
    ${isGuest ? `<button class="btn gold small" id="upgrade-guest" title="Create an account to save your progress online">Save Online</button>` : ""}
    <button class="btn ghost small" id="hud-report" title="View your learning progress report">Report</button>
    <button class="btn ghost small" id="logout">${isGuest ? "Exit Guest" : "Log Out"}</button>
  `;

  document.getElementById("logout").onclick = logout;
  document.getElementById("hud-report").onclick = showLearnerReport;
  const up = document.getElementById("upgrade-guest");
  if (up) up.onclick = () => renderAuth("signup");
}

/* ---------- router ---------- */
function go(v){
  if (currentKeyHandler) {
    window.removeEventListener("keydown", currentKeyHandler);
    currentKeyHandler = null;
  }
  view = v;
  render();
  window.scrollTo(0, 0);
}

function render(){
  hud();
  if (view.name === "admin") return renderAdmin();
  if (!USER) return renderAuth();
  if (view.name === "home") return renderHome();
  if (view.name === "track") return renderTrack();
  if (view.name === "mod") return renderModule();
  renderHome();
}

document.getElementById("brand").onclick = () => {
  if (view.name === "admin") { go({ name: USER ? "home" : "auth" }); return; }
  USER && go({ name: "home" });
};
const lr = document.getElementById("link-report");
if (lr) lr.onclick = e => { e.preventDefault(); if (USER) showLearnerReport(); };
const la = document.getElementById("link-admin");
if (la) la.onclick = e => { e.preventDefault(); go({ name: "admin" }); };

/* ---------- auth screens & guest mode ---------- */
function logout(){
  TOKEN = ""; USER = null; PROG = {};
  localStorage.removeItem(LS_TOKEN);
  localStorage.removeItem(LS_USER);
  go({ name: "home" });
}

function startGuestMode(){
  const guestProg = JSON.parse(localStorage.getItem(LS_GUEST_PROG) || "{}");
  USER = { id: "guest", username: "guest", display: "Guest Learner", ageBand: "p", isGuest: true };
  TOKEN = "";
  PROG = guestProg;
  localStorage.setItem(LS_USER, JSON.stringify(USER));
  hudSync("guest");
  go({ name: "home" });
  toast("Welcome to Soma Smart! Learning as Guest.");
}

function renderAuth(mode){
  mode = mode || "login";
  const isNew = mode === "signup", isReset = mode === "reset";
  const hasGuestProg = Object.keys(JSON.parse(localStorage.getItem(LS_GUEST_PROG) || "{}")).length > 0;

  $app.innerHTML = `<section class="auth">
    <h1>Soma <em>Smart</em></h1>
    <p class="sub">${esc(C.tagline)}</p>

    <div class="tabs">
      <button class="btn ${mode==='login'?'':'ghost'} small" data-m="login">Log in</button>
      <button class="btn ${isNew?'':'ghost'} small" data-m="signup">Sign up</button>
    </div>

    <form class="panel" id="f" autocomplete="off">
      <label class="q" for="un">Username</label>
      <input class="field" id="un" maxlength="20" placeholder="e.g. zuri_ke" required />

      ${isNew ? `
        <label class="q" for="dn">Display Name <span class="hint">(the name shown on your celebration summary)</span></label>
        <input class="field" id="dn" maxlength="30" placeholder="e.g. Zuri Wanjiku" required />
      ` : ""}

      <label class="q" for="pw">Password</label>
      <div class="row">
        <input class="field" id="pw" type="password" maxlength="60" required />
        <button type="button" class="btn ghost small" id="eye">Show</button>
      </div>

      ${isNew ? `
        <label class="q" for="tb">Select Grade <span class="hint">(optional)</span></label>
        <select class="field" id="tb">
          <option value="p">Grade 4–6 (Digital Foundations)</option>
          <option value="j">Grade 7–9 (Computers & Networks)</option>
        </select>
        <label class="q" for="rc">Recovery Code <span class="hint">(optional secret word to reset your password if forgotten)</span></label>
        <input class="field" id="rc" maxlength="40" placeholder="e.g. simba2026" />
      ` : ""}

      ${isReset ? `
        <label class="q" for="rc">Recovery Code</label>
        <input class="field" id="rc" maxlength="40" required placeholder="The secret code you set when signing up" />
        <label class="q" for="np">New Password</label>
        <input class="field" id="np" type="password" maxlength="60" required />
      ` : ""}

      <div class="err" id="er"></div>

      <div class="stepFoot">
        <span class="hint">
          ${isNew
            ? "No email is used. Keep your username, password and recovery code in a safe place."
            : "Forgot password? <a href='#' id='toreset'>Use a recovery code</a>."}
        </span>
        <button class="btn" id="go" type="submit">${isNew ? "Start Learning" : isReset ? "Reset Password" : "Log In"}</button>
      </div>
    </form>

    <div class="guest-divider"><span>OR</span></div>

    <div class="panel" style="text-align:center;background:#f9fcf9">
      <h3 style="margin:0 0 6px;font-family:Nunito,sans-serif">Continue as Guest</h3>
      <p class="hint" style="margin:0 0 14px">Start learning immediately without creating an account. Your progress is saved in this browser.</p>
      <button class="btn ghost" id="btn-guest">▶ Continue as Guest</button>
      ${hasGuestProg ? `<p class="hint" style="margin-top:8px;color:var(--green)">✓ Found previously saved guest lessons on this device.</p>` : ""}
    </div>

    <p class="disclaim">
      <b>Account recovery notice:</b> Soma Smart has no support desk or email recovery. Please write down your recovery code when signing up, or create a new account if you forget your password.
    </p>
  </section>`;

  $app.querySelectorAll("[data-m]").forEach(b => b.onclick = () => renderAuth(b.dataset.m));
  const er = document.getElementById("er"), pw = document.getElementById("pw"), eye = document.getElementById("eye");
  if (eye) eye.onclick = () => { const sh = pw.type === "password"; pw.type = sh ? "text" : "password"; eye.textContent = sh ? "Hide" : "Show"; };
  const tr = document.getElementById("toreset"); if (tr) tr.onclick = e => { e.preventDefault(); renderAuth("reset"); };
  document.getElementById("btn-guest").onclick = startGuestMode;

  const unInput = document.getElementById("un");
  if (unInput) unInput.focus();

  document.getElementById("f").onsubmit = async e => {
    e.preventDefault();
    const username = document.getElementById("un").value.trim();
    const password = pw.value;
    er.textContent = "Please wait…";

    try {
      let res;
      if (isNew) {
        res = await api("signup", "POST", {
          username,
          display: document.getElementById("dn").value.trim(),
          password,
          ageBand: document.getElementById("tb").value || null,
          recovery: document.getElementById("rc").value.trim() || null
        });
      } else if (isReset) {
        res = await api("reset", "POST", {
          username,
          recovery: document.getElementById("rc").value.trim(),
          newPassword: document.getElementById("np").value
        });
      } else {
        res = await api("login", "POST", { username, password });
      }

      TOKEN = res.token;
      USER = res.user;
      localStorage.setItem(LS_TOKEN, TOKEN);
      localStorage.setItem(LS_USER, JSON.stringify(USER));

      // If guest had local progress, migrate it to the new account
      const guestProg = JSON.parse(localStorage.getItem(LS_GUEST_PROG) || "{}");
      if (isNew && Object.keys(guestProg).length > 0) {
        PROG = guestProg;
        await pushProgress();
        localStorage.removeItem(LS_GUEST_PROG);
        toast(`Welcome, ${USER.display}! Your guest progress has been saved to your account.`);
      } else {
        await loadProgress();
        toast(`Welcome, ${USER.display}!`);
      }

      go({ name: "home" });
    } catch (err) {
      er.textContent = String(err.message || err);
    }
  };
}

/* ---------- home: choose a track ---------- */
function renderHome(){
  $app.innerHTML = `
    <section class="hero">
      <h1>Welcome, <em>${esc(USER.display)}</em>.</h1>
      <p>Choose a track to begin learning about computers and the internet.</p>
    </section>
    <div class="grid">
      ${TRACKS.map(t => {
        const list = modsForTrack(t.id);
        const done = list.filter(m => ms(m.id).done).length;
        const pct = Math.round((done / list.length) * 100);
        return `<button class="card" data-t="${t.id}">
          <div class="card-ic">${t.id === "primary" ? "🌱" : "🖥️"}</div>
          <div class="card-t">${esc(t.name)}</div>
          <div class="card-s">${esc(t.level)}</div>
          <p class="card-b">${esc(t.blurb)}</p>
          <div class="card-m">
            <span>${done}/${list.length} modules completed</span>
            <span>${pct}%</span>
          </div>
          <div class="meter"><div class="meter-fill" style="width:${pct}%"></div></div>
        </button>`;
      }).join("")}
    </div>
  `;
  $app.querySelectorAll("[data-t]").forEach(b => b.onclick = () => go({ name: "track", t: b.dataset.t }));
}

/* ---------- track: list modules ---------- */
const MASTERY_BADGE = {
  locked: "🔒 Locked",
  learning: "📘 Learning",
  practised: "✅ Practised",
  mastered: "🏆 Mastered"
};

function renderTrack(){
  const t = TRACKS.find(x => x.id === view.t) || TRACKS[0];
  const list = modsForTrack(t.id);
  const doneCount = list.filter(m => ms(m.id).done).length;
  const allDone = doneCount === list.length;
  const next = list.find(m => !ms(m.id).done);

  const coreList = list.filter(m => m.cbe === "strand");
  const enrichList = list.filter(m => m.cbe === "nice");

  const renderModRow = (m) => {
    const open = unlocked(m), lvl = masteryOf(m.id);
    const cbeBadge = m.cbe === "strand"
      ? `<span class="tag-badge tag-cbe">📘 CBE</span>`
      : `<span class="tag-badge tag-nice">✨ Going further</span>`;
    const strandHint = (m.cbe === "strand" && m.strandRef)
      ? `<div class="strand-ref">${esc(m.strandRef)}</div>` : "";
    return `<button class="rowitem ${open ? "" : "locked"}" data-id="${m.id}" ${open ? "" : "disabled"}>
      <div class="ri-num">${m.code}</div>
      <div class="ri-main">
        <div class="ri-title-row">
          <span class="ri-t">${esc(m.name)}</span>
          ${cbeBadge}
        </div>
        <div class="ri-s">${esc(m.part)}</div>
        ${strandHint}
      </div>
      <div class="ri-badge ${lvl}">${open ? (MASTERY_BADGE[lvl] || "") : "🔒 Locked"}</div>
    </button>`;
  };

  const renderGroup = (groupList, title, desc) => groupList.length === 0 ? "" : `
    <div class="track-group">
      <div class="track-group-header">
        <div class="track-group-title">${title}</div>
        ${desc ? `<div class="track-group-desc">${desc}</div>` : ""}
      </div>
      <div class="list">${groupList.map(renderModRow).join("")}</div>
    </div>`;

  $app.innerHTML = `
    <button class="back" id="bk">← All Tracks</button>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:12px;flex-wrap:wrap;gap:10px">
      <div>
        <h2 class="h2" style="margin:0">${esc(t.name)} <span class="muted">${esc(t.level)}</span></h2>
      </div>
      <div style="font-weight:800;color:var(--green)">${doneCount}/${list.length} modules completed (${Math.round(doneCount/list.length*100)}%)</div>
    </div>
    <div class="meter" style="margin-bottom:20px"><div class="meter-fill" style="width:${(doneCount/list.length)*100}%"></div></div>

    ${renderGroup(coreList, "📘 Core (CBE)", "These modules map to official CBE digital-literacy strands.")}
    ${renderGroup(enrichList, "✨ Going further", "Enrichment modules — not required by CBE, but great to know.")}

    <div class="cbe-disclaimer">ℹ️ CBE tags are our best-effort mapping to the KICD curriculum and are pending teacher confirmation.</div>

    ${allDone ? `
      <div class="track-done-card">
        <h3>Congratulations! You finished this track! 🎉</h3>
        <p>You have completed all modules in <b>${esc(t.name)}</b>. See your mastery summary and share your progress!</p>
        <button class="btn gold" id="btn-cert">🎉 See Your Achievement</button>
      </div>
    ` : next ? `
      <div class="continue">
        <div><b>Next: ${esc(next.name)}</b><span>${next.code} · Next lesson</span></div>
        <button class="btn teal" id="cont">▶ Continue</button>
      </div>
    ` : ""}
  `;

  document.getElementById("bk").onclick = () => go({ name: "home" });
  const c = document.getElementById("cont");
  if (c && next) c.onclick = () => openModule(next.id);
  const celebBtn = document.getElementById("btn-cert");
  if (celebBtn) celebBtn.onclick = () => showCelebration(t.id);

  $app.querySelectorAll("[data-id]").forEach(b => b.onclick = () => {
    const m = MODS.find(x => x.id === b.dataset.id);
    if (!unlocked(m)) return toast("Please complete the previous module first.");
    openModule(m.id);
  });
}

function openModule(id){
  const m = MODS.find(x => x.id === id), s = ms(id);
  const step = s.done ? "read" : STEPS[Math.min(s.reached, 4)];
  go({ name: "mod", id, step });
}

/* ---------- module shell ---------- */
let cleanup = [];
function renderModule(){
  cleanup.forEach(f => { try { f(); } catch {} }); cleanup = [];
  try { speechSynthesis.cancel(); } catch {}

  const m = MODS.find(x => x.id === view.id), s = ms(m.id);
  const trackObj = TRACKS.find(t => t.id === m.track);
  const rail = STEPS.map((st, i) => {
    const cls = st === view.step ? "now" : (i < s.reached || s.done) ? "done" : "";
    return `<button class="chip ${cls}" data-st="${st}" ${cls ? "" : "disabled"}>${STEP_LABEL[st]}</button>`;
  }).join("");

  $app.innerHTML = `
    <button class="back" id="bk">← ${esc(trackObj ? trackObj.name : "Track")}</button>
    <div class="modTitle"><span class="ri-num">${m.code}</span><h2>${esc(m.name)}</h2></div>
    <div class="rail">${rail}</div>
    <section class="panel" id="stage"></section>
  `;

  document.getElementById("bk").onclick = () => go({ name: "track", t: m.track });
  $app.querySelectorAll(".chip.done").forEach(b => b.onclick = () => go({ name: "mod", id: m.id, step: b.dataset.st }));

  ({ read: stepRead, listen: stepListen, watch: stepWatch, mission: stepMission, quiz: stepQuiz })[view.step](m, s, document.getElementById("stage"));
}

function advance(m, s, from){
  const i = STEPS.indexOf(from);
  if (s.reached <= i) s.reached = i + 1;
  queueSave();
  const next = STEPS[i + 1];
  go({ name: "mod", id: m.id, step: next });
}

/* ---------- READ ---------- */
function stepRead(m, s, el){
  let idx = 0;
  const draw = () => {
    const c = m.read[idx];
    el.innerHTML = `
      <div class="card2">
        <div class="ic">${c.icon}</div>
        <div>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.text)}</p>
        </div>
      </div>
      <div class="stepFoot">
        <div class="dots">${m.read.map((_, i) => `<i class="${i <= idx ? "on" : ""}"></i>`).join("")}</div>
        <div class="row">
          <button class="btn ghost small" id="say">🔊 Read to me</button>
          ${idx > 0 ? `<button class="btn ghost small" id="prev">←</button>` : ""}
          <button class="btn" id="nx">${idx < m.read.length - 1 ? "Next" : "Done"}</button>
        </div>
      </div>
    `;

    document.getElementById("say").onclick = () => speak([c.title + ". " + c.text]);
    const pv = document.getElementById("prev");
    if (pv) pv.onclick = () => { speechSynthesis.cancel(); idx--; draw(); };
    document.getElementById("nx").onclick = () => {
      speechSynthesis.cancel();
      if (idx < m.read.length - 1) { idx++; draw(); }
      else advance(m, s, "read");
    };
  };

  currentKeyHandler = e => {
    if (e.key === "ArrowRight") {
      speechSynthesis.cancel();
      if (idx < m.read.length - 1) { idx++; draw(); } else advance(m, s, "read");
    } else if (e.key === "ArrowLeft" && idx > 0) {
      speechSynthesis.cancel(); idx--; draw();
    }
  };
  window.addEventListener("keydown", currentKeyHandler);
  cleanup.push(() => {
    if (currentKeyHandler) window.removeEventListener("keydown", currentKeyHandler);
    currentKeyHandler = null;
  });

  draw();
}

/* ---------- LISTEN ---------- */
let cachedVoices = [];
function getAvailableVoices(){
  if (cachedVoices.length) return cachedVoices;
  try {
    cachedVoices = speechSynthesis.getVoices();
    if (!cachedVoices.length && "onvoiceschanged" in speechSynthesis) {
      speechSynthesis.onvoiceschanged = () => {
        cachedVoices = speechSynthesis.getVoices();
      };
    }
  } catch {}
  return cachedVoices;
}

function pickVoice(){
  const v = getAvailableVoices();
  return v.find(x => /en-(KE|GB|US|ZA)/i.test(x.lang)) || v.find(x => /^en/i.test(x.lang)) || (v.length ? v[0] : null);
}

function speak(lines, onLine, onEnd){
  try { speechSynthesis.cancel(); } catch { return onEnd && onEnd(); }
  let i = 0; const voice = pickVoice();
  const next = () => {
    if (i >= lines.length) return onEnd && onEnd();
    const u = new SpeechSynthesisUtterance(lines[i]);
    if (voice) u.voice = voice;
    u.rate = 0.93;
    u.onstart = () => onLine && onLine(i);
    u.onend = () => { i++; next(); };
    u.onerror = () => { i++; next(); };
    speechSynthesis.speak(u);
  };
  next();
  return { at: () => i };
}

function stepListen(m, s, el){
  const lines = m.listen;
  let playing = false, pos = 0;

  const draw = sub => {
    el.innerHTML = `
      <div class="listen">
        <div class="byte ${playing ? "talk" : ""}">🔊</div>
        <div class="subtitle">${esc(sub || "Press play to listen to the lesson.")}</div>
        <div class="bars">${lines.map((_, i) => `<i class="${i < pos ? "on" : ""}"></i>`).join("")}</div>
        <div class="row" style="justify-content:center"><button class="btn teal" id="pl">${playing ? "⏸ Pause" : "▶ Play"}</button></div>
      </div>
      <div class="stepFoot">
        <span class="hint">Listen to the full audio to continue.</span>
        <button class="btn" id="nx" ${s.reached > 1 ? "" : "disabled"}>Next</button>
      </div>
    `;

    document.getElementById("pl").onclick = toggle;
    document.getElementById("nx").onclick = () => { stop(); advance(m, s, "listen"); };
  };

  const stop = () => { playing = false; try { speechSynthesis.cancel(); } catch {} };
  const toggle = () => {
    if (!("speechSynthesis" in window)) {
      s.reached = Math.max(s.reached, 2);
      toast("Speech narration is not supported in this browser. Advancing!");
      return advance(m, s, "listen");
    }
    if (playing) { stop(); draw(); return; }
    playing = true; pos = 0; draw(lines[0]);
    speak(lines, i => {
      pos = i;
      const sub = el.querySelector(".subtitle");
      if (sub) sub.textContent = lines[i];
      el.querySelectorAll(".bars i").forEach((b, k) => b.classList.toggle("on", k <= i));
    }, () => {
      playing = false;
      pos = lines.length;
      s.reached = Math.max(s.reached, 2);
      queueSave();
      draw("Narration complete! Click Next.");
    });
  };

  const vis = () => { if (document.hidden && playing) { stop(); draw("Paused. Press play when you're back."); } };
  document.addEventListener("visibilitychange", vis);
  cleanup.push(() => document.removeEventListener("visibilitychange", vis), stop);
  draw();
}

/* ---------- WATCH (optional video; "" => skip screen) ---------- */
function stepWatch(m, s, el){
  const v = m.video;
  if (!v || !v.id) {
    el.innerHTML = `
      <div class="novideo">
        <div class="byte">🎬</div>
        <h3>No video for this module</h3>
        <p class="hint">Proceed directly to the hands-on mission.</p>
      </div>
      <div class="stepFoot"><span></span><button class="btn" id="nx">Next</button></div>
    `;
    document.getElementById("nx").onclick = () => advance(m, s, "watch");
    return;
  }
  el.innerHTML = `
    <div class="vwrap"><iframe id="yt" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?rel=0" allowfullscreen loading="lazy"></iframe></div>
    <div class="vmeta">${esc(v.title)} · ${esc(v.channel)}</div>
    <div class="stepFoot"><span class="hint">Watch the video, then continue.</span><button class="btn" id="nx">Next</button></div>
  `;
  document.getElementById("nx").onclick = () => advance(m, s, "watch");
}

/* ---------- MISSION ---------- */
function stepMission(m, s, el){
  const mi = m.mission;
  const st = (s.mission = s.mission || { ticks: [], answer: "" });

  el.innerHTML = `
    <div class="mission">
      <h3>🛠️ ${esc(mi.title)}</h3>
      ${mi.steps.map((t, i) => `
        <button class="mstep ${st.ticks.includes(i) ? "on" : ""}" data-i="${i}">
          <span class="box">${st.ticks.includes(i) ? "✓" : ""}</span>
          <span>${esc(t)}</span>
        </button>
      `).join("")}
      <label class="q" for="ans">${esc(mi.question)}</label>
      <input class="field" id="ans" maxlength="240" value="${esc(st.answer)}" placeholder="Type your answer here" />
    </div>
    <div class="stepFoot">
      <span class="hint">Tick each step and type your answer.</span>
      <button class="btn" id="nx">Mission Done</button>
    </div>
  `;

  const nx = document.getElementById("nx"), ans = document.getElementById("ans");
  const ok = () => { nx.disabled = !(st.ticks.length === mi.steps.length && ans.value.trim().length >= 1); };

  el.querySelectorAll(".mstep").forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    st.ticks = st.ticks.includes(i) ? st.ticks.filter(x => x !== i) : [...st.ticks, i];
    b.classList.toggle("on");
    b.querySelector(".box").textContent = st.ticks.includes(i) ? "✓" : "";
    ok();
  });

  ans.oninput = () => { st.answer = ans.value; ok(); };
  nx.onclick = () => advance(m, s, "mission");
  ok();
}

/* ---------- QUIZ (sets mastery level) ---------- */
const shuffle = a => {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.random() * (i + 1) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function stepQuiz(m, s, el){
  const N = Math.min(C.questionsPerQuiz, m.quiz.length), pass = Math.min(C.passMark, N);
  const wait = Math.ceil(((s.lastFail || 0) + C.retryCooldownSec * 1000 - Date.now()) / 1000);

  if (wait > 0) {
    el.innerHTML = `
      <div class="result">
        <h3>Take a short break…</h3>
        <p class="hint">Try again in <b id="cd">${wait}</b>s. Review the READ or LISTEN steps while waiting.</p>
      </div>
    `;
    const iv = setInterval(() => {
      const w = Math.ceil(((s.lastFail || 0) + C.retryCooldownSec * 1000 - Date.now()) / 1000);
      if (w <= 0) { clearInterval(iv); render(); }
      else { const cd = document.getElementById("cd"); if (cd) cd.textContent = w; }
    }, 500);
    cleanup.push(() => clearInterval(iv));
    return;
  }

  const qs = shuffle(m.quiz).slice(0, N).map(x => {
    const order = shuffle(x.options.map((_, i) => i));
    return { q: x.q, why: x.why, options: order.map(i => x.options[i]), a: order.indexOf(x.a) };
  });

  let k = 0, right = 0;
  let answeredCurrent = false;

  const ask = () => {
    answeredCurrent = false;
    const x = qs[k];
    el.innerHTML = `
      <div class="qhead">
        <span>QUESTION ${k + 1}/${N}</span>
        <span>${right} correct · need ${pass} to pass</span>
      </div>
      <p class="qq">${esc(x.q)}</p>
      <div class="opts">
        ${x.options.map((o, i) => `<button class="opt" data-i="${i}"><b style="opacity:.6;margin-right:6px">${i + 1}.</b> ${esc(o)}</button>`).join("")}
      </div>
      <div class="why" id="why"></div>
      <div class="stepFoot">
        <span class="hint">Click or press 1–4 to answer.</span>
        <button class="btn" id="nx" disabled>${k < N - 1 ? "Next" : "See Result"}</button>
      </div>
    `;

    const choose = i => {
      if (answeredCurrent) return;
      answeredCurrent = true;
      const good = i === x.a;
      if (good) right++;

      el.querySelectorAll(".opt").forEach(o => {
        o.disabled = true;
        if (+o.dataset.i === x.a) o.classList.add("right");
      });
      const selected = el.querySelector(`.opt[data-i="${i}"]`);
      if (selected && !good) selected.classList.add("wrong");

      document.getElementById("why").innerHTML = (good ? "✅ <b>Correct!</b> " : "❌ <b>Incorrect.</b> ") + esc(x.why);
      document.getElementById("nx").disabled = false;
      document.getElementById("nx").focus();
      track(m, good);
    };

    el.querySelectorAll(".opt").forEach(b => b.onclick = () => choose(+b.dataset.i));
    document.getElementById("nx").onclick = () => { k++; k < N ? ask() : finish(); };

    // Keyboard support: 1..4 choose option, Enter moves next
    currentKeyHandler = e => {
      if (!answeredCurrent && ["1","2","3","4"].includes(e.key)) {
        const idx = +e.key - 1;
        if (idx < x.options.length) choose(idx);
      } else if (answeredCurrent && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        k++; k < N ? ask() : finish();
      }
    };
    window.addEventListener("keydown", currentKeyHandler);
  };

  const finish = () => {
    if (currentKeyHandler) {
      window.removeEventListener("keydown", currentKeyHandler);
      currentKeyHandler = null;
    }
    s.attempts = (s.attempts || 0) + 1;
    s.best = Math.max(s.best || 0, right);
    const passed = right >= pass;
    if (passed) {
      s.reached = 5;
      if (!s.done) s.done = true;
    } else {
      s.lastFail = Date.now();
    }
    s.mastery = masteryOf(m.id);
    queueSave();
    const lvl = masteryOf(m.id);

    el.innerHTML = `
      <div class="result">
        <div class="score">${right}<small>/${N}</small></div>
        ${passed ? `
          <h3>Passed! 🎉</h3>
          <div class="badge ${lvl}">${MASTERY_BADGE[lvl]}</div>
          <p class="hint">${lvl === "mastered" ? "Perfect score — fully mastered!" : "Well done! Score 5/5 next time for Mastered."}</p>
        ` : `
          <h3>Try Again! 💪</h3>
          <p class="hint">You need ${pass}/${N} to pass. Review the lesson steps, then retry in ${C.retryCooldownSec}s.</p>
        `}
        <div class="row" style="justify-content:center;margin-top:22px;flex-wrap:wrap">
          ${passed ? `
            <button class="btn" id="mp">Back to Track</button>
          ` : `
            <button class="btn ghost" id="rv">Review Lesson</button>
            <button class="btn" id="mp">Back to Track</button>
          `}
        </div>
      </div>
    `;

    document.getElementById("mp").onclick = () => go({ name: "track", t: m.track });
    const rv = document.getElementById("rv");
    if (rv) rv.onclick = () => go({ name: "mod", id: m.id, step: "read" });
  };

  ask();
}

/* ---------- CELEBRATION (replaces certificate — not accredited) ---------- */
function showCelebration(trackId){
  const t = TRACKS.find(x => x.id === trackId) || TRACKS[0];
  const list = modsForTrack(t.id);
  const masteredCount = list.filter(m => masteryOf(m.id) === "mastered").length;
  const practisedCount = list.filter(m => masteryOf(m.id) === "practised").length;
  const completedCount = list.filter(m => ms(m.id).done).length;
  const allMastered = masteredCount === list.length;
  const name = esc(USER.display || USER.username);
  const trackName = esc(t.name);

  const masteryEmoji = allMastered ? "🏆" : masteredCount > 0 ? "⭐" : "✅";
  const masteryMsg = allMastered
    ? `You mastered every single module — that is excellent work!`
    : masteredCount > 0
      ? `You mastered ${masteredCount} of ${list.length} modules. Keep going!`
      : `You completed all ${list.length} modules. Well done!`;

  const shareText = encodeURIComponent(
    `I just finished ${t.name} on Soma Smart! 🎉
` +
    `Modules completed: ${completedCount}/${list.length}
` +
    `Mastered (5/5): ${masteredCount}
` +
    `Free digital-literacy learning for Kenya 📱 — soma.smart`
  );
  const waLink = `https://wa.me/?text=${shareText}`;

  openModal(`
    <div class="celebration-card" style="text-align:center;padding:8px 0">
      <div class="celeb-confetti" aria-hidden="true">🎉 🎊 🎈 🌟 🎉</div>
      <h2 class="celeb-title">Congratulations, ${name}!</h2>
      <p class="celeb-track">You finished <b>${trackName}</b></p>
      <div class="celeb-summary">
        <div class="celeb-stat">
          <div class="celeb-stat-val">${completedCount}/${list.length}</div>
          <div class="celeb-stat-lbl">Modules done</div>
        </div>
        <div class="celeb-stat">
          <div class="celeb-stat-val" style="color:var(--gold-d)">${masteryEmoji} ${masteredCount}</div>
          <div class="celeb-stat-lbl">Mastered (5/5)</div>
        </div>
        <div class="celeb-stat">
          <div class="celeb-stat-val" style="color:var(--teal)">${practisedCount}</div>
          <div class="celeb-stat-lbl">Practised (4/5)</div>
        </div>
      </div>
      <p class="celeb-msg">${masteryMsg}</p>
      <div class="celeb-actions">
        <a class="btn gold" href="${waLink}" target="_blank" rel="noopener">📱 Share on WhatsApp</a>
        <button class="btn small" id="celeb-report">📋 View Progress Report</button>
        <button class="btn ghost small" id="celeb-close">Close</button>
      </div>
      <p class="celeb-note">Soma Smart is an independent learning tool, not affiliated with KICD or the government.</p>
    </div>
  `);

  document.getElementById("celeb-close").onclick = closeModal;
  document.getElementById("celeb-report").onclick = () => { closeModal(); showLearnerReport(); };
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

/* ---------- LEARNER REPORT MODAL ---------- */
function showLearnerReport(){
  const total = MODS.length;
  const done = MODS.filter(m => ms(m.id).done).length;
  const mastered = MODS.filter(m => masteryOf(m.id) === "mastered").length;

  openModal(`
    <h2 style="margin:0 0 4px;font-family:Nunito,sans-serif">Learner Progress Report</h2>
    <p class="hint" style="margin:0 0 18px">Learning summary for <b>${esc(USER.display)}</b> (${esc(USER.username)})</p>

    <div class="stat-grid" style="margin-bottom:18px">
      <div class="stat-card">
        <div class="stat-val">${done}/${total}</div>
        <div class="stat-lbl">Completed Modules</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" style="color:var(--gold-d)">${mastered}</div>
        <div class="stat-lbl">Mastered (5/5)</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" style="color:var(--teal)">${Math.round((done / total) * 100)}%</div>
        <div class="stat-lbl">Course Progress</div>
      </div>
    </div>

    <div class="table-wrap" style="max-height:280px;overflow-y:auto">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Module Name</th>
            <th>Best Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${MODS.map(m => {
            const s = ms(m.id), lvl = masteryOf(m.id);
            return `<tr>
              <td><b>${m.code}</b></td>
              <td>${esc(m.name)}</td>
              <td>${s.best ? `${s.best}/5` : "-"}</td>
              <td><span class="ri-badge ${lvl}">${MASTERY_BADGE[lvl]}</span></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>

    <div class="modal-actions" style="display:flex;justify-content:space-between;align-items:center;margin-top:20px;flex-wrap:wrap;gap:10px">
      <button class="btn ghost small" id="copy-summary">📋 Copy WhatsApp Summary</button>
      <div class="row">
        <button class="btn small" id="print-report">🖨️ Print Report</button>
        <button class="btn ghost small" id="close-rep">Close</button>
      </div>
    </div>
  `);

  document.getElementById("close-rep").onclick = closeModal;
  document.getElementById("print-report").onclick = () => window.print();
  document.getElementById("copy-summary").onclick = () => {
    const text = `Soma Smart · Progress Report for ${USER.display}\nCompleted Modules: ${done}/${total}\nMastered (5/5): ${mastered}\nCourse Progress: ${Math.round((done/total)*100)}%\nAligned with KICD CBE curriculum.`;
    navigator.clipboard.writeText(text).then(() => toast("Report summary copied to clipboard!"));
  };
}

/* ---------- CURRICULUM INSIGHTS (ANONYMOUS AGGREGATE ONLY) ---------- */
async function renderAdmin(){
  let adminKey = sessionStorage.getItem(SS_ADMIN) || "";
  if (!adminKey) {
    $app.innerHTML = `
      <section class="auth">
        <button class="back" id="bk-home">← Back to Lessons</button>
        <h1>Curriculum <em>Insights</em></h1>
        <p class="sub">Enter ADMIN_KEY to view anonymous curriculum analytics and student performance metrics.</p>
        <form class="panel" id="f-admin">
          <label class="q" for="ak">ADMIN_KEY</label>
          <input class="field" type="password" id="ak" required placeholder="Enter administrator secret key" />
          <div class="err" id="admin-err"></div>
          <div class="stepFoot">
            <span></span>
            <button class="btn" type="submit">Open Insights</button>
          </div>
        </form>
      </section>
    `;
    document.getElementById("bk-home").onclick = () => go({ name: USER ? "home" : "auth" });
    document.getElementById("f-admin").onsubmit = async e => {
      e.preventDefault();
      const key = document.getElementById("ak").value.trim();
      const errEl = document.getElementById("admin-err");
      errEl.textContent = "Verifying key...";
      try {
        await api("insights", "GET", null, { "X-Admin-Key": key });
        sessionStorage.setItem(SS_ADMIN, key);
        renderAdminDashboard(key);
      } catch (err) {
        errEl.textContent = "Invalid ADMIN_KEY or connection error.";
      }
    };
    return;
  }
  renderAdminDashboard(adminKey);
}

async function renderAdminDashboard(key){
  $app.innerHTML = `
    <div class="admin-header">
      <div>
        <button class="back" id="adm-back">← Back to Lessons</button>
        <h2 style="margin:0;font-family:Nunito,sans-serif">Curriculum Insights</h2>
        <p class="hint" style="margin:4px 0 0">Anonymous curriculum analytics and difficulty metrics aligned with KICD strands.</p>
      </div>
      <div class="row">
        <button class="btn ghost small" id="adm-logout">Exit Insights</button>
      </div>
    </div>

    <div id="admin-view">Loading insights…</div>
  `;

  document.getElementById("adm-back").onclick = () => go({ name: USER ? "home" : "auth" });
  document.getElementById("adm-logout").onclick = () => {
    sessionStorage.removeItem(SS_ADMIN);
    go({ name: USER ? "home" : "auth" });
  };

  const el = document.getElementById("admin-view");
  try {
    const res = await api("insights", "GET", null, { "X-Admin-Key": key });
    const o = res.overview || {};
    const top = res.topModules || [];
    const hard = res.hardest || [];
    const daily = res.daily || [];

    el.innerHTML = `
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-val">${o.totalUsers || 0}</div>
          <div class="stat-lbl">Total Registered Accounts</div>
        </div>
        <div class="stat-card">
          <div class="stat-val" style="color:var(--teal)">${o.primaryUsers || 0}</div>
          <div class="stat-lbl">Primary (Grade 4–6)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val" style="color:var(--green)">${o.juniorUsers || 0}</div>
          <div class="stat-lbl">Junior (Grade 7–9)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val" style="color:var(--gold-d)">${o.totalCompletions || 0}</div>
          <div class="stat-lbl">Completed Modules</div>
        </div>
        <div class="stat-card">
          <div class="stat-val" style="color:#d4af37">🏆 ${o.totalMasteries || 0}</div>
          <div class="stat-lbl">Masteries (5/5)</div>
        </div>
      </div>

      <div style="margin-top:24px">
        <h3 style="font-family:Nunito,sans-serif;margin:0 0 4px">🎯 Hardest Modules (Teaching Focus)</h3>
        <p class="hint" style="margin:0 0 12px">Modules with the lowest question accuracy — topics needing classroom reinforcement.</p>
        <div class="table-wrap" style="margin-bottom:28px">
          <table class="admin-table">
            <thead>
              <tr><th>Module</th><th>Track</th><th>Attempts</th><th>Correct</th><th>Pass Rate (%)</th></tr>
            </thead>
            <tbody>
              ${hard.length ? hard.map(r => {
                const m = MODS.find(x => x.id === r.module_id);
                const name = m ? `${m.code} · ${m.name}` : r.module_id;
                const trackName = m ? (m.track === "primary" ? "Primary" : "Junior") : "";
                const rate = r.a ? Math.round((r.c / r.a) * 100) : 0;
                return `<tr>
                  <td><b>${esc(name)}</b></td>
                  <td><span class="hint">${trackName}</span></td>
                  <td>${r.a}</td>
                  <td>${r.c}</td>
                  <td><b style="color:${rate < 60 ? "var(--red)" : "inherit"}">${rate}%</b></td>
                </tr>`;
              }).join("") : `<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:18px">No difficulty trends recorded yet.</td></tr>`}
            </tbody>
          </table>
        </div>

        <h3 style="font-family:Nunito,sans-serif;margin:0 0 4px">📈 Most Attempted Modules</h3>
        <p class="hint" style="margin:0 0 12px">Modules with the highest learner engagement.</p>
        <div class="table-wrap" style="margin-bottom:28px">
          <table class="admin-table">
            <thead>
              <tr><th>Module</th><th>Track</th><th>Total Attempts</th><th>Correct Answers</th><th>Accuracy (%)</th></tr>
            </thead>
            <tbody>
              ${top.length ? top.map(r => {
                const m = MODS.find(x => x.id === r.module_id);
                const name = m ? `${m.code} · ${m.name}` : r.module_id;
                const trackName = m ? (m.track === "primary" ? "Primary" : "Junior") : "";
                const rate = r.a ? Math.round((r.c / r.a) * 100) : 0;
                return `<tr>
                  <td><b>${esc(name)}</b></td>
                  <td><span class="hint">${trackName}</span></td>
                  <td>${r.a}</td>
                  <td>${r.c}</td>
                  <td><b>${rate}%</b></td>
                </tr>`;
              }).join("") : `<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:18px">No module data recorded yet.</td></tr>`}
            </tbody>
          </table>
        </div>

        <h3 style="font-family:Nunito,sans-serif;margin:0 0 4px">📅 Daily Question Attempts (Last 30 Days)</h3>
        <p class="hint" style="margin:0 0 12px">Number of questions attempted per day across the platform.</p>
        <div class="table-wrap">
          <table class="admin-table">
            <thead>
              <tr><th>Date</th><th>Question Attempts</th></tr>
            </thead>
            <tbody>
              ${daily.length ? daily.map(d => `<tr><td>${esc(d.day)}</td><td><b>${d.a}</b></td></tr>`).join("") : `<tr><td colspan="2" style="text-align:center;color:var(--muted);padding:18px">No daily activity recorded yet.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } catch (err) {
    el.innerHTML = `<div class="err">Error loading insights: ${esc(err.message)}</div>`;
  }
}

/* ---------- boot ---------- */
(async function boot(){
  getAvailableVoices();

  const savedUser = JSON.parse(localStorage.getItem(LS_USER) || "null");
  if (savedUser && savedUser.isGuest) {
    USER = savedUser;
    TOKEN = "";
    try { PROG = JSON.parse(localStorage.getItem(LS_GUEST_PROG) || "{}"); } catch { PROG = {}; }
    hudSync("guest");
    render();
    return;
  }

  if (TOKEN && savedUser) {
    USER = savedUser;
    try {
      await loadProgress();
      hudSync("saved");
    } catch {
      hudSync("offline");
    }
  }

  render();
})();

})();
