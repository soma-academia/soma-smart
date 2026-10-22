/* Tech Tayari — front-end application.
 * Aligned with the Kenya Institute of Curriculum Development (KICD) CBE curriculum.
 * Local-first: progress lives on this device (backup/restore as a JSON file). Accounts are an
 * optional "sync across devices" extra. PWA offline caching, celebration screen, and anonymous
 * curriculum insights. No support desk or manual recovery.
 */
(() => {
"use strict";
const C = window.COURSE, MODS = C.modules, TRACKS = C.tracks;
const STEPS = ["read", "listen", "watch", "mission", "quiz"];
const STEP_LABEL = { read: "READ", listen: "LISTEN", watch: "WATCH", mission: "MISSION", quiz: "QUIZ" };
const STEP_ICON = { read: "book", listen: "speaker", watch: "play", mission: "flag", quiz: "check" };
const ICON = (name, size) => (window.ICON ? window.ICON(name, size) : "");
const TRACK_ICON = { primary: "sprout", junior: "monitor", senior: "cpu", senior11: "server", ai: "spark" };
const $app = document.getElementById("app"), $hud = document.getElementById("hud"), $modal = document.getElementById("modal-layer");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const LS_TOKEN = "somasmart.token", LS_USER = "somasmart.user", LS_PROG = "somasmart.progress",
      LS_NAME = "somasmart.local_name", SS_ADMIN = "somasmart.admin_key";
const LS_OLD_GUEST_PROG = "somasmart.guest_prog"; // pre-local-first guest store, migrated on boot

/* ---------- state ---------- */
let TOKEN = localStorage.getItem(LS_TOKEN) || "";
let USER = null;       // {id, username, display, ageBand, isLocal} — isLocal: no account, this device only
let PROG = {};         // { moduleId: {reached,best,attempts,mastery,done} }
let view = { name: "home" };
let saveTimer = null;
let currentKeyHandler = null;

const modsForTrack = tid => MODS.filter(m => m.track === tid);
const modIndexInTrack = (tid, id) => modsForTrack(tid).findIndex(m => m.id === id);
function ms(id){ return PROG[id] || (PROG[id] = { reached: 0, best: 0, attempts: 0, mastery: "new", done: false }); }
// Gentle unlock: every module can be opened and studied; only its quiz waits for the previous module
function prevMod(m){ const list = modsForTrack(m.track); const i = list.findIndex(x => x.id === m.id); return i > 0 ? list[i - 1] : null; }
function quizOpen(m){ const p = prevMod(m); return !p || ms(p.id).done || ms(m.id).done; }
function masteryOf(id){ return levelOf(ms(id)); }
function levelOf(s){ if (s.done) { if (s.best >= C.mastery.mastered) return "mastered"; if (s.best >= C.mastery.practised) return "practised"; return "learning"; } return s.reached > 0 ? "learning" : "new"; }

/* ---------- API ---------- */
async function api(path, method, body, extraHeaders){
  const headers = { "Content-Type": "application/json", ...(extraHeaders || {}) };
  if (TOKEN) headers["Authorization"] = "Bearer " + TOKEN;
  // Never let a slow or dropped connection hang the app
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 10000);
  const offlineMsg = "Can't reach Tech Tayari's server right now. You can keep learning without an account. Your progress is saved on this device.";
  let r;
  try {
    r = await fetch("api/" + path, { method: method || "GET", headers, body: body ? JSON.stringify(body) : undefined, signal: ctl.signal });
  } catch { throw new Error(offlineMsg); }
  finally { clearTimeout(timer); }
  let data = null; try { data = await r.json(); } catch {}
  if (!r.ok) throw new Error((data && data.error) || (r.status >= 500 || r.status === 404 ? offlineMsg : "Error " + r.status));
  return data;
}

/* ---------- progress: this device is the source of truth; the server is only an optional sync ---------- */
const progKey = () => USER && !USER.isLocal ? LS_PROG + ".u" + USER.id : LS_PROG;
function readLocal(key){
  try { const p = JSON.parse(localStorage.getItem(key) || "{}"); return p && typeof p === "object" && !Array.isArray(p) ? p : {}; }
  catch { return {}; }
}
function saveLocal(){
  try { localStorage.setItem(progKey(), JSON.stringify(PROG)); return true; } catch { return false; }
}

// Keep only known modules and sane numbers (used for backups and server data)
function cleanProgress(raw){
  const out = {};
  if (!raw || typeof raw !== "object") return out;
  const n = (v, max) => Math.min(max, Math.max(0, Math.floor(+v) || 0));
  for (const m of MODS) {
    const s = raw[m.id];
    if (!s || typeof s !== "object") continue;
    out[m.id] = { reached: n(s.reached, STEPS.length), best: n(s.best, C.questionsPerQuiz), attempts: n(s.attempts, 1e6), done: !!s.done };
  }
  return out;
}

// Combine two progress maps without ever losing work: furthest step, best score, done if done anywhere
function mergeProgress(a, b){
  const out = { ...a };
  for (const [id, s] of Object.entries(cleanProgress(b))) {
    const t = out[id];
    out[id] = !t ? s : {
      ...t,
      reached: Math.max(t.reached || 0, s.reached),
      best: Math.max(t.best || 0, s.best),
      attempts: Math.max(t.attempts || 0, s.attempts),
      done: !!(t.done || s.done)
    };
    out[id].mastery = levelOf(out[id]);
  }
  return out;
}

// Signed-in only: pull the account's progress, merge with this device, push the result back
async function syncFromServer(){
  if (!USER || USER.isLocal || !TOKEN) return;
  try {
    const d = await api("progress");
    PROG = mergeProgress(PROG, d.mods || {});
    saveLocal();
    await api("progress", "PUT", { mods: PROG });
    hudSync("saved");
  } catch {
    hudSync("offline");
  }
}

function queueSave(){
  saveLocal();
  if (!USER || USER.isLocal) { hudSync("local"); return; }
  clearTimeout(saveTimer);
  saveTimer = setTimeout(pushProgress, 700);
}

async function pushProgress(){
  if (!USER || USER.isLocal || !TOKEN) return;
  if (!navigator.onLine) { hudSync("offline"); return; }
  try {
    await api("progress", "PUT", { mods: PROG });
    hudSync("saved");
  } catch {
    hudSync("offline");
  }
}
window.addEventListener("online", () => pushProgress());

/* ---------- backup & restore (the zero-backend recovery story) ---------- */
function exportBackup(){
  const data = { app: "tech-tayari", version: 1, exportedAt: new Date().toISOString(), name: USER.display, mods: cleanProgress(PROG) };
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 1)], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `tech-tayari-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function importBackup(file){
  const bad = new Error("That file is not a Tech Tayari backup.");
  if (!file || file.size > 1024 * 1024) throw bad;
  let data;
  try { data = JSON.parse(await file.text()); } catch { throw bad; }
  if (!data || !["tech-tayari", "soma-smart"].includes(data.app) || !data.mods || typeof data.mods !== "object") throw bad;
  const doneBefore = MODS.filter(m => ms(m.id).done).length;
  PROG = mergeProgress(PROG, data.mods);
  if (USER.isLocal && typeof data.name === "string" && data.name.trim() && !localStorage.getItem(LS_NAME)) setLocalName(data.name);
  queueSave();
  return MODS.filter(m => ms(m.id).done).length - doneBefore;
}

function setLocalName(name){
  name = String(name || "").trim().slice(0, 30);
  try { name ? localStorage.setItem(LS_NAME, name) : localStorage.removeItem(LS_NAME); } catch {}
  if (USER && USER.isLocal) USER.display = name || "Learner";
}

// Learning funnel: each device reports each step of a module at most once (no IDs; see /privacy)
const LS_FUNNEL = "somasmart.funnel_sent";
function funnel(m, step){
  try {
    const sent = JSON.parse(localStorage.getItem(LS_FUNNEL) || "{}"), k = m.id + ":" + step;
    if (sent[k]) return;
    sent[k] = 1;
    localStorage.setItem(LS_FUNNEL, JSON.stringify(sent));
    if (navigator.sendBeacon) navigator.sendBeacon("api/step", JSON.stringify({ track: m.track, module: m.id, step }));
  } catch {}
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
let syncState = "local";
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
  const isLocal = !!USER.isLocal;
  // [class, icon, text]; on phones only the icon shows (the text stays as a tooltip / screen-reader label)
  const syncLabels = {
    local: ["ok", ICON("save", 16), "Saved on this device"],
    saved: ["ok", "●", "Saved & synced"],
    saving: ["ok", "↻", "Syncing…"],
    offline: ["ok", ICON("save", 16), "Saved on device · will sync later"]
  };
  const sync = syncLabels[syncState] || ["ok", "", ""];

  $hud.innerHTML = `
    <span class="who">
      ${esc(USER.display)}
    </span>
    <span class="prog">${done}/${total}<span class="prog-txt"> done</span></span>
    <span class="sync ${sync[0]}" title="${sync[2] || ""}" aria-label="${sync[2] || ""}">${sync[1]}<span class="sync-txt"> ${sync[2] || ""}</span></span>
    <button class="btn gold small" id="hud-backup" title="Download or restore a backup of your progress">Backup</button>
    <button class="btn ghost small" id="hud-report" title="View your learning progress report">Report</button>
    ${isLocal ? "" : `<button class="btn ghost small" id="logout">Log Out</button>`}
  `;

  const lo = document.getElementById("logout");
  if (lo) lo.onclick = logout;
  document.getElementById("hud-report").onclick = showLearnerReport;
  document.getElementById("hud-backup").onclick = showBackup;
}

/* ---------- router ---------- */
// Info pages and the (unlinked) insights page have their own addresses; everything else lives at "/"
const PAGE_PATHS = { about: "/about", privacy: "/privacy", licences: "/licences" };
const pathFor = v => v.name === "page" ? PAGE_PATHS[v.page] : v.name === "admin" ? "/insights" : "/";
function viewFromPath(path){
  path = path.replace(/\/+$/, "") || "/";
  if (path === "/insights") return { name: "admin" };
  if (path === "/licenses") return { name: "page", page: "licences" };
  const page = Object.keys(PAGE_PATHS).find(k => PAGE_PATHS[k] === path);
  return page ? { name: "page", page } : { name: "home" };
}

function go(v, fromHistory){
  if (currentKeyHandler) {
    window.removeEventListener("keydown", currentKeyHandler);
    currentKeyHandler = null;
  }
  view = v;
  const path = pathFor(v);
  if (!fromHistory && location.pathname !== path) history.pushState(null, "", path);
  render();
  window.scrollTo(0, 0);
}
window.addEventListener("popstate", () => go(viewFromPath(location.pathname), true));

function render(){
  hud();
  if (view.name !== "page") document.title = "Tech Tayari · Free Digital Literacy for Kenya";
  if (view.name === "admin") return renderAdmin();
  if (view.name === "page") return renderPage(view.page);
  if (view.name === "auth") return renderAuth(view.mode);
  if (view.name === "home") return renderHome();
  if (view.name === "track") return renderTrack();
  if (view.name === "mod") return renderModule();
  renderHome();
}

document.getElementById("brand").onclick = () => {
  if (view.name === "admin") { go({ name: "home" }); return; }
  USER && go({ name: "home" });
};
const lr = document.getElementById("link-report");
if (lr) lr.onclick = e => { e.preventDefault(); if (USER) showLearnerReport(); };
// Footer links are real addresses (they work without JavaScript too); open them in-app
document.querySelectorAll("a[data-page]").forEach(a => a.onclick = e => { e.preventDefault(); go({ name: "page", page: a.dataset.page }); });

/* ---------- info pages: About & disclaimer, Privacy, Licences ---------- */
// No contact address yet (the old one belonged to an unrelated organisation). Set SUPPORT_EMAIL when a new one exists.
const SUPPORT_EMAIL = "";
const mail = SUPPORT_EMAIL ? `<a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>` : "our new contact address (coming soon; we're setting it up)";
const PAGES = {
  about: { title: "About Tech Tayari", html: `
    <p class="lead">Tech Tayari is a free, self-guided course that helps Kenyan learners in Grade 4–11 understand
      how computers and the internet work, and how to stay safe online.</p>
    <h3>What it is</h3>
    <ul>
      <li>Short lessons you can read, listen to and try out, followed by a quiz that explains mistakes.</li>
      <li>Free, with no ads. It works offline once opened, and no account is needed.</li>
      <li>Written with practical Kenyan examples. Technical content is reviewed by a network-security engineer.</li>
      <li>Mapped, as our own best effort, to the CBE digital-literacy strands, pending confirmation by teachers.</li>
    </ul>
    <h3>What it is not</h3>
    <ul>
      <li><b>Not official.</b> Tech Tayari is an independent project. It is not affiliated with, or endorsed by,
        KICD, KNEC or the Ministry of Education.</li>
      <li><b>Not accredited.</b> It does not award certificates or grades that count towards any exam or qualification.</li>
      <li><b>Not a replacement for a teacher</b>, and not a managed classroom: teachers cannot see individual learners' work.</li>
      <li><b>Not a support desk.</b> We cannot recover lost accounts or passwords. Set a recovery code, or use
        <b>Backup</b> to keep a copy of your progress.</li>
      <li><b>Not a chat or social service.</b> There is no messaging between users, and nothing is shown publicly.</li>
      <li><b>Not a shop.</b> Nothing is sold, and there are no in-app payments.</li>
    </ul>
    <h3>Accuracy</h3>
    <p>We check lessons carefully, but they may contain mistakes or go out of date. Found one? Please tell us.
      Videos inside lessons are made by other organisations (such as Code.org) and are their responsibility.</p>
    <h3>Contact</h3>
    <p>Feedback, corrections and privacy questions: ${mail}. Please remember we cannot recover accounts or passwords.</p>` },

  privacy: { title: "Privacy", html: `
    <p class="lead">Tech Tayari is built to collect as little as possible. Most learners never send us anything personal.</p>
    <h3>Without an account (most learners)</h3>
    <ul>
      <li>Your progress and the name you type are saved <b>only in this browser on this device</b>. We never receive them.</li>
      <li>Clearing your browser's data deletes them. Use <b>Backup</b> to keep a copy as a file.</li>
    </ul>
    <h3>If you create an account (optional)</h3>
    <ul>
      <li>We store your <b>username</b>, <b>display name</b>, optional <b>grade band</b>, and your <b>progress</b>
        (steps reached, best quiz score, attempts).</li>
      <li>Your password and recovery code are stored only as one-way scrambled codes (hashes). Nobody, including us, can read them.</li>
      <li>We never ask for an email address, phone number, school or location. Please <b>don't use your full real name</b>
        as your username or display name.</li>
      <li>You can delete your account at any time: <b>Backup → Delete my account</b>. It is removed from our server straight away.</li>
    </ul>
    <h3>Anonymous lesson statistics</h3>
    <p>To improve the lessons we keep simple daily totals per module, with no name, account, device ID or IP address
      attached: how many quiz answers were right or wrong, and how many learners started a module, finished reading,
      finished the mission, took the quiz and passed. Each device counts each step only once. These totals show where
      learners get stuck.</p>
    <h3>Teachers who review lessons</h3>
    <p>Reviewers can vote to keep or remove lesson items on our review pages. We store each vote and any note, the name
      they choose to give (optional), and a random code made in their browser so they can change a vote. Nothing else.</p>
    <h3>Visit counts</h3>
    <p>We use Cloudflare Web Analytics to count page visits. It uses no cookies, doesn't track you across sites, and
      reports only totals, such as how many people visited and which pages were popular.</p>
    <h3>Other services</h3>
    <ul>
      <li><b>Cloudflare</b> hosts the site and stores account data (in Western Europe). Like any web host, it handles
        your device's IP address to deliver pages. To stop abuse, we keep a short-lived record of IP addresses that try
        to sign up or log in, for up to an hour.</li>
      <li><b>YouTube</b>: a video only loads if you tap <b>Load video</b>, using YouTube's privacy-enhanced mode.
        After that, YouTube's own privacy policy applies.</li>
    </ul>
    <p>No ads, no tracking or advertising cookies, and we never sell or share data.</p>
    <h3>Children</h3>
    <p>Tech Tayari is designed for learners aged 9–17 and works fully without an account. Parents and teachers are
      welcome to decide whether a child should create one.</p>
    <h3>Questions</h3>
    <p>Email ${mail}.</p>` },

  licences: { title: "Licences", html: `
    <p class="lead">Tech Tayari is free and open. You are welcome to reuse it under these licences.</p>
    <h3>Lessons: CC BY-NC-SA 4.0</h3>
    <p>The lesson text, quizzes, missions and explainer captions are © 2026 Tech Tayari and licensed under
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noopener license" target="_blank">Creative Commons
      Attribution-NonCommercial-ShareAlike 4.0</a>. You may share and adapt them, for example for your class or another
      language, if you credit Tech Tayari, don't use them commercially, and share your version under the same licence.</p>
    <h3>Code: MIT</h3>
    <p>The app's code is © 2026 Tech Tayari under the <a href="https://github.com/soma-academia/tech-tayari/blob/main/LICENSE"
      rel="noopener" target="_blank">MIT licence</a>. Source:
      <a href="https://github.com/soma-academia/tech-tayari" rel="noopener" target="_blank">github.com/soma-academia/tech-tayari</a>.</p>
    <h3>Other parts</h3>
    <ul>
      <li><b>Icons</b> were drawn for Tech Tayari and are covered by the MIT licence with the code.</li>
      <li><b>Fonts:</b> Nunito and Roboto, under the <a href="https://openfontlicense.org" rel="noopener" target="_blank">SIL Open Font License 1.1</a>, included with the site (licence files in the <code>fonts</code> folder).</li>
      <li><b>Videos</b> belong to their creators (mostly Code.org) and are shown through YouTube under its terms.
        They are not covered by Tech Tayari's licences.</li>
    </ul>` },
};

function renderPage(name){
  const pg = PAGES[name] || PAGES.about;
  document.title = `${pg.title} · Tech Tayari`;
  $app.innerHTML = `
    <button class="back" id="bk">← Back to lessons</button>
    <article class="infopage">
      <h1>${pg.title}</h1>
      ${pg.html}
      <p class="hint">Also see: ${Object.keys(PAGES).filter(k => k !== name).map(k => `<a href="${PAGE_PATHS[k]}" data-goto="${k}">${PAGES[k].title}</a>`).join(" · ")}</p>
    </article>`;
  document.getElementById("bk").onclick = () => go({ name: "home" });
  $app.querySelectorAll("[data-goto]").forEach(a => a.onclick = e => { e.preventDefault(); go({ name: "page", page: a.dataset.goto }); });
}

/* ---------- auth screens & guest mode ---------- */
async function logout(){
  clearTimeout(saveTimer);
  await pushProgress();
  // Drop this account's copy from a shared device only once the server has it
  if (syncState === "saved") { try { localStorage.removeItem(progKey()); } catch {} }
  localStorage.removeItem(LS_TOKEN);
  localStorage.removeItem(LS_USER);
  startLocalMode();
  go({ name: "home" });
  toast("Logged out. You can keep learning on this device.");
}

// The default: learn straight away, no account, progress kept on this device
function startLocalMode(){
  TOKEN = "";
  USER = { id: "local", username: "", display: localStorage.getItem(LS_NAME) || "Learner", isLocal: true };
  PROG = readLocal(LS_PROG);
  hudSync("local");
}

// One-time move of the old guest store into the local-first store
function migrateOldGuestData(){
  try {
    const old = readLocal(LS_OLD_GUEST_PROG);
    if (Object.keys(old).length) localStorage.setItem(LS_PROG, JSON.stringify(mergeProgress(readLocal(LS_PROG), old)));
    localStorage.removeItem(LS_OLD_GUEST_PROG);
    const u = JSON.parse(localStorage.getItem(LS_USER) || "null");
    if (u && u.isGuest) localStorage.removeItem(LS_USER);
  } catch {}
}

function showBackup(){
  const isLocal = !!USER.isLocal;
  openModal(`
    <h2 style="margin:0 0 4px;font-family:Nunito,sans-serif">Back up your progress</h2>
    <p class="hint" style="margin:0 0 18px">Your progress is saved on this device. Download a backup file to keep it safe, or to carry it to another phone or computer.</p>

    ${isLocal ? `
      <form id="f-name" style="margin-bottom:18px">
        <label class="q" for="ln">Your name <span class="hint">(shown on your report and celebration)</span></label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="field" id="ln" maxlength="30" placeholder="e.g. Zuri Wanjiku" value="${esc(localStorage.getItem(LS_NAME) || "")}" style="flex:1;min-width:0" />
          <button class="btn ghost small" type="submit">Save</button>
        </div>
      </form>` : ""}

    <div class="row" style="gap:10px;flex-wrap:wrap">
      <button class="btn" id="bk-export">⬇ Download backup</button>
      <button class="btn ghost" id="bk-import">⬆ Restore from backup</button>
      <input type="file" id="bk-file" accept="application/json,.json" hidden />
    </div>
    <p class="hint" style="margin:8px 0 0">Restoring adds the backup's progress to this device. Nothing you have already done is lost.</p>
    <div class="err" id="bk-msg" style="margin-top:8px"></div>

    <div class="disclaim" style="margin-top:20px">
      ${isLocal
        ? `<b>Sync across devices (optional).</b> You never need an account to learn. If you want progress to follow you between devices automatically, you can <a href="#" id="bk-auth">create a free account or log in</a>.`
        : `<b>Signed in as ${esc(USER.username)}.</b> Progress is saved on this device first and syncs to your account whenever you are online.
           <br><a href="#" id="bk-delete" class="danger-link">Delete my account</a>`}
    </div>
  `);

  const msg = document.getElementById("bk-msg"), file = document.getElementById("bk-file");
  document.getElementById("bk-export").onclick = () => { exportBackup(); toast("Backup downloaded."); };
  document.getElementById("bk-import").onclick = () => file.click();
  file.onchange = async () => {
    try {
      const gained = await importBackup(file.files[0]);
      closeModal();
      render();
      toast(gained > 0 ? `Backup restored: ${gained} more module${gained === 1 ? "" : "s"} completed.` : "Backup restored. You were already up to date.");
    } catch (err) {
      msg.textContent = err.message;
    }
    file.value = "";
  };
  const fn = document.getElementById("f-name");
  if (fn) fn.onsubmit = e => { e.preventDefault(); setLocalName(document.getElementById("ln").value); hud(); render(); toast("Name saved."); };
  const ba = document.getElementById("bk-auth");
  if (ba) ba.onclick = e => { e.preventDefault(); closeModal(); go({ name: "auth", mode: "signup" }); };
  const bd = document.getElementById("bk-delete");
  if (bd) bd.onclick = e => { e.preventDefault(); showDeleteAccount(); };
}

// Self-service, permanent account deletion. Progress on this device stays (as no-account progress).
function showDeleteAccount(){
  openModal(`
    <h2 style="margin:0 0 6px;font-family:Nunito,sans-serif">Delete your account</h2>
    <p>This permanently deletes the account <b>${esc(USER.username)}</b> and its saved progress from our server.
      It cannot be undone. Your progress on <i>this device</i> stays, and you can keep learning without an account.</p>
    <form id="f-del">
      <label class="q" for="dpw">Type your password to confirm</label>
      <input class="field" id="dpw" type="password" maxlength="60" required autocomplete="current-password" />
      <div class="err" id="del-err"></div>
      <div class="stepFoot">
        <button type="button" class="btn ghost small" id="del-cancel">Cancel</button>
        <button class="btn danger" id="del-go">Delete permanently</button>
      </div>
    </form>`);
  document.getElementById("del-cancel").onclick = closeModal;
  document.getElementById("f-del").onsubmit = async e => {
    e.preventDefault();
    const err = document.getElementById("del-err");
    err.textContent = "Deleting…";
    try {
      await api("delete-account", "POST", { password: document.getElementById("dpw").value });
      const kept = PROG;
      try { localStorage.removeItem(progKey()); } catch {}
      localStorage.removeItem(LS_TOKEN);
      localStorage.removeItem(LS_USER);
      startLocalMode();
      PROG = mergeProgress(PROG, kept);
      saveLocal();
      closeModal();
      go({ name: "home" });
      toast("Your account was deleted. Your progress is still on this device.");
    } catch (x) {
      err.textContent = x.message;
    }
  };
}

function renderAuth(mode){
  mode = mode || "login";
  const isNew = mode === "signup", isReset = mode === "reset";
  const hasLocalProg = MODS.some(m => (readLocal(LS_PROG)[m.id] || {}).reached > 0);

  $app.innerHTML = `<section class="auth">
    <h1>Soma <em>Smart</em></h1>
    <p class="sub">Accounts are optional. They only sync your progress across devices.</p>

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
          <option value="s">Grade 10–11 (Computer Studies)</option>
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
      <h3 style="margin:0 0 6px;font-family:Nunito,sans-serif">No account needed</h3>
      <p class="hint" style="margin:0 0 14px">You can learn everything without an account. Progress is saved on this device. Use <b>Backup</b> to keep a copy.</p>
      <button class="btn ghost" id="btn-local">← Keep learning without an account</button>
      ${hasLocalProg && isNew ? `<p class="hint" style="margin-top:8px;color:var(--green)">✓ Your progress on this device will be added to your new account.</p>` : ""}
    </div>

    <p class="disclaim">
      <b>Account recovery notice:</b> Tech Tayari has no support desk or email recovery. Please write down your recovery code when signing up, or create a new account if you forget your password.
    </p>
  </section>`;

  $app.querySelectorAll("[data-m]").forEach(b => b.onclick = () => renderAuth(b.dataset.m));
  const er = document.getElementById("er"), pw = document.getElementById("pw"), eye = document.getElementById("eye");
  if (eye) eye.onclick = () => { const sh = pw.type === "password"; pw.type = sh ? "text" : "password"; eye.textContent = sh ? "Hide" : "Show"; };
  const tr = document.getElementById("toreset"); if (tr) tr.onclick = e => { e.preventDefault(); renderAuth("reset"); };
  document.getElementById("btn-local").onclick = () => go({ name: "home" });

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

      // Start from this account's copy on the device; a new account also takes this device's progress
      PROG = readLocal(progKey());
      if (isNew) PROG = mergeProgress(PROG, readLocal(LS_PROG));
      saveLocal();
      await syncFromServer();
      toast(isNew && hasLocalProg ? `Welcome, ${USER.display}! Your progress on this device is now in your account.` : `Welcome, ${USER.display}!`);

      go({ name: "home" });
    } catch (err) {
      er.textContent = String(err.message || err);
    }
  };
}

/* ---------- home: choose a track ---------- */
function renderHome(){
  const started = MODS.filter(m => ms(m.id).reached > 0 || ms(m.id).done);
  // Resume: the first unfinished module the learner has already opened, else none
  const resume = MODS.find(m => !ms(m.id).done && ms(m.id).reached > 0);
  const named = USER.display && USER.display !== "Learner";

  const trackCards = TRACKS.map(t => {
    const list = modsForTrack(t.id);
    const done = list.filter(m => ms(m.id).done).length;
    const pct = Math.round((done / list.length) * 100);
    return `<button class="card t-${t.id}" data-t="${t.id}">
      <div class="card-head">
        <div class="card-ic">${ICON(TRACK_ICON[t.id] || "book", 26)}</div>
        <div>
          <div class="card-t">${esc(t.name)}</div>
          <div class="card-s">${esc(t.level)} · ${list.length} modules</div>
        </div>
      </div>
      <p class="card-b">${esc(t.blurb)}</p>
      <div class="card-m">
        <span>${done}/${list.length} modules completed</span>
        <span>${pct}%</span>
      </div>
      <div class="meter"><div class="meter-fill" style="width:${pct}%"></div></div>
    </button>`;
  }).join("");

  const steps = [["book", "Read", "Short cards with Kenyan examples"], ["speaker", "Listen", "Hear the lesson read aloud"],
                 ["flag", "Mission", "Try it: sort, spot, type, build"], ["check", "Quiz", "5 questions. Mistakes are explained"]];

  $app.innerHTML = started.length ? `
    <section class="hero">
      <h1>Welcome back${named ? `, <em>${esc(USER.display)}</em>` : ""}.</h1>
      <p>${started.filter(m => ms(m.id).done).length} of ${MODS.length} modules done. Keep going!</p>
      ${resume ? `<button class="btn teal resume" id="resume">▶ Continue: ${esc(resume.code)} · ${esc(resume.name)}</button>` : ""}
    </section>
    <div class="grid">${trackCards}</div>
  ` : `
    <section class="hero landing">
      <h1>Learn how computers and the internet <em>really work</em>.</h1>
      <p>Free lessons for Kenyan learners in Grade 4–11. Read, listen, try it yourself, then take a short quiz.</p>
      <ul class="trust">
        <li>${ICON("tag", 18)} Free, no ads</li>
        <li>${ICON("wifi", 18)} Works offline</li>
        <li>${ICON("user", 18)} No account needed</li>
        <li>${ICON("book", 18)} Mapped to CBE strands</li>
      </ul>
    </section>
    <h2 class="home-h2">Choose your track</h2>
    <div class="grid">${trackCards}</div>
    <h2 class="home-h2">How each lesson works</h2>
    <ol class="howto">${steps.map(([ic, t, d]) => `<li><span class="howto-ic">${ICON(ic, 26)}</span><b>${t}</b><span>${d}</span></li>`).join("")}</ol>
    <div class="parents">
      <b>For teachers and parents.</b> Tech Tayari is free and needs no sign-up. Progress is saved on the learner's
      own device (use <b>Backup</b> to keep a copy), and it keeps working without internet once opened.
      Open it in Chrome and choose <i>Add to Home screen</i> to use it like an app.
    </div>
  `;
  $app.querySelectorAll("[data-t]").forEach(b => b.onclick = () => go({ name: "track", t: b.dataset.t }));
  const r = document.getElementById("resume");
  if (r) r.onclick = () => openModule(resume.id);
}

/* ---------- track: list modules ---------- */
const MASTERY_BADGE = {
  new: `${ICON("circle", 14)} Not started`,
  learning: `${ICON("book", 14)} Learning`,
  practised: `${ICON("check", 14)} Practised`,
  mastered: `${ICON("star", 14)} Mastered`
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
    const lvl = masteryOf(m.id), gated = !quizOpen(m), prev = prevMod(m);
    const cbeBadge = m.cbe === "strand"
      ? `<span class="tag-badge tag-cbe">CBE</span>`
      : `<span class="tag-badge tag-nice">Going further</span>`;
    const strandHint = (m.cbe === "strand" && m.strandRef)
      ? `<div class="strand-ref">${esc(m.strandRef)}</div>` : "";
    return `<button class="rowitem" data-id="${m.id}">
      <div class="ri-num">${m.code}</div>
      <div class="ri-main">
        <div class="ri-title-row">
          <span class="ri-t">${esc(m.name)}</span>
          ${cbeBadge}
        </div>
        <div class="ri-s">${esc(m.part)}</div>
        ${strandHint}
        ${gated ? `<div class="quiz-gate-hint">Open to read and explore · quiz unlocks after ${esc(prev.code)}</div>` : ""}
      </div>
      <div class="ri-badge ${lvl}">${MASTERY_BADGE[lvl] || ""}</div>
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
        <h2 class="h2 track-h t-${t.id}" style="margin:0">${ICON(TRACK_ICON[t.id] || "book", 26)} ${esc(t.name)}</h2>
        <div class="track-level">${esc(t.level)}</div>
      </div>
      <div style="font-weight:800;color:var(--green)">${doneCount}/${list.length} modules completed (${Math.round(doneCount/list.length*100)}%)</div>
    </div>
    <div class="meter" style="margin-bottom:20px"><div class="meter-fill" style="width:${(doneCount/list.length)*100}%"></div></div>

    ${renderGroup(coreList, `${ICON("book", 20)} Core (CBE)`, "These modules map to official CBE digital-literacy strands.")}
    ${renderGroup(enrichList, `${ICON("star", 20)} Going further`, "Enrichment modules — not required by CBE, but great to know.")}

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
    openModule(b.dataset.id);
  });
}

// The WATCH step appears only for modules with an explainer animation or a curated video
const hasVideo = m => !!(m.video && m.video.id);
const hasWatch = m => hasVideo(m) || !!m.explainer;
const stepsFor = m => STEPS.filter(st => st !== "watch" || hasWatch(m));

function openModule(id){
  const m = MODS.find(x => x.id === id), s = ms(id);
  funnel(m, "start");
  let step = s.done ? "read" : STEPS[Math.min(s.reached, 4)];
  if (step === "watch" && !hasWatch(m)) step = "mission";
  go({ name: "mod", id, step });
}

/* ---------- module shell ---------- */
let cleanup = [];
function renderModule(){
  cleanup.forEach(f => { try { f(); } catch {} }); cleanup = [];
  try { speechSynthesis.cancel(); } catch {}

  const m = MODS.find(x => x.id === view.id), s = ms(m.id);
  const trackObj = TRACKS.find(t => t.id === m.track);
  const rail = stepsFor(m).map(st => {
    const i = STEPS.indexOf(st);
    const cls = st === view.step ? "now" : (i < s.reached || s.done) ? "done" : "";
    const icon = st === "quiz" && !quizOpen(m) ? "lock" : STEP_ICON[st];
    return `<button class="chip ${cls}" data-st="${st}" ${cls ? "" : "disabled"} aria-current="${st === view.step ? "step" : "false"}">${ICON(icon, 18)}<span>${STEP_LABEL[st]}</span></button>`;
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
  if (from === "read" || from === "mission") funnel(m, from);
  let i = STEPS.indexOf(from);
  if (STEPS[i + 1] === "watch" && !hasWatch(m)) i++;
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
      <div class="readcard">
        <div class="rc-head"><span class="rc-ic" aria-hidden="true">${esc(c.icon)}</span><h3>${esc(c.title)}</h3></div>
        <p>${esc(c.text)}</p>
      </div>
      <div class="stepFoot">
        <div class="dots">${m.read.map((_, i) => `<i class="${i <= idx ? "on" : ""}"></i>`).join("")}</div>
        <div class="row">
          <button class="btn ghost small" id="say">${ICON("speaker", 18)} Read to me</button>
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
        <div class="byte ${playing ? "talk" : ""}">${ICON("speaker", 56)}</div>
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
// WATCH: an offline animated explainer (if the module has one) and/or an optional curated video.
// The video only loads when tapped, so it never spends a learner's data by surprise.
function stepWatch(m, s, el){
  const v = m.video, xp = m.explainer && window.EXPLAINERS ? m.explainer : "";
  el.innerHTML = `
    ${xp ? `<div id="xp"></div>` : ""}
    ${hasVideo(m) ? `
      <div class="vcard" id="vcard">
        <div class="vcard-t">${xp ? "Optional video" : "Video"}: <b>${esc(v.title)}</b></div>
        <div class="hint">${esc(v.channel)} · needs internet and uses mobile data</div>
        <button class="btn ghost small" id="vload">▶ Load video</button>
      </div>` : ""}
    <div class="stepFoot"><span class="hint">${xp ? "Step through the animation, then continue." : "Watch the video, then continue."}</span><button class="btn" id="nx">Next</button></div>
  `;
  if (xp) {
    const stop = window.EXPLAINERS.render(xp, document.getElementById("xp"));
    if (stop) cleanup.push(stop);
  }
  const vl = document.getElementById("vload");
  if (vl) vl.onclick = () => {
    if (!navigator.onLine) { vl.textContent = "You're offline. Try again when connected."; return; }
    document.getElementById("vcard").outerHTML = `
      <div class="vwrap"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?rel=0&autoplay=1" allow="autoplay; encrypted-media" allowfullscreen title="${esc(v.title)}"></iframe></div>
      <div class="vmeta">${esc(v.title)} · ${esc(v.channel)}</div>`;
  };
  document.getElementById("nx").onclick = () => advance(m, s, "watch");
}

/* ---------- MISSION ---------- */
// A mission is either the classic checklist + short answer, or (when it has `tasks`) a set of
// interactive tasks that can only be finished by engaging with them. The checklist then becomes
// an optional "try it for real" list.
function stepMission(m, s, el){
  const mi = m.mission, tasks = mi.tasks || [];
  const st = (s.mission = s.mission || { ticks: [], answer: "" });
  if (tasks.length && !Array.isArray(st.tasks)) st.tasks = tasks.map(() => ({}));

  el.innerHTML = `
    <div class="mission">
      <h3>${ICON("flag", 24)} ${esc(mi.title)}</h3>
      ${tasks.map((t, i) => `<div class="task" data-t="${i}"><div class="task-n">${i + 1}</div><div class="task-body"></div></div>`).join("")}
      ${tasks.length ? `<h4 class="try-real">Try it for real <span class="hint">(optional · ask a grown-up if you need help)</span></h4>` : ""}
      ${mi.steps.map((t, i) => `
        <button class="mstep ${st.ticks.includes(i) ? "on" : ""}" data-i="${i}">
          <span class="box">${st.ticks.includes(i) ? "✓" : ""}</span>
          <span>${esc(t)}</span>
        </button>
      `).join("")}
      ${tasks.length ? "" : `
        <label class="q" for="ans">${esc(mi.question)}</label>
        <input class="field" id="ans" maxlength="240" value="${esc(st.answer)}" placeholder="Type your answer here" />`}
    </div>
    <div class="stepFoot">
      <span class="hint" id="mhint">Tick each step and type your answer.</span>
      <button class="btn" id="nx">Mission Done</button>
    </div>
  `;

  const nx = document.getElementById("nx"), ans = document.getElementById("ans"), mhint = document.getElementById("mhint");
  const ok = () => {
    if (tasks.length) {
      const left = tasks.filter((t, i) => !taskDone(t, st.tasks[i])).length;
      nx.disabled = left > 0;
      mhint.textContent = left ? `${left} task${left === 1 ? "" : "s"} left to finish.` : "All tasks done. Great work!";
    } else {
      nx.disabled = !(st.ticks.length === mi.steps.length && ans.value.trim().length >= 1);
    }
  };

  el.querySelectorAll(".mstep").forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    st.ticks = st.ticks.includes(i) ? st.ticks.filter(x => x !== i) : [...st.ticks, i];
    b.classList.toggle("on");
    b.querySelector(".box").textContent = st.ticks.includes(i) ? "✓" : "";
    ok();
  });

  el.querySelectorAll(".task").forEach(box => {
    const i = +box.dataset.t, t = tasks[i];
    const mark = () => box.classList.toggle("done", taskDone(t, st.tasks[i]));
    renderTask(t, st.tasks[i], box.querySelector(".task-body"), () => { mark(); ok(); queueSave(); });
    mark();
  });

  if (ans) ans.oninput = () => { st.answer = ans.value; ok(); };
  nx.onclick = () => advance(m, s, "mission");
  ok();
}

/* ---------- mission tasks ---------- */
const cleanText = v => String(v || "").trim();

function taskDone(t, v){
  v = v || {};
  switch (t.type) {
    case "pick":   return t.rounds.every((r, k) => (v.r || [])[k] != null && (r.answer == null || v.r[k] === r.answer));
    case "sort":   return t.items.every((it, k) => (v.a || {})[k] === it.b);
    case "text":   return textProblem(t, v.v) === "";
    case "typing": return v.v === t.target;
    case "paste":  return !!v.pasted && cleanText(v.v) === t.target;
    case "flags":  return t.segments.every((sg, k) => !sg.flag || (v.found || []).includes(k));
    case "order":  return (v.n || 0) >= t.items.length;
  }
  return true;
}

function textProblem(t, val){
  const x = cleanText(val);
  if (x.length < (t.min || 1)) return x ? "A little longer, please." : "";
  if ((t.reject || []).includes(x.toLowerCase())) return t.hint || "Try a clearer answer.";
  return "";
}

// Stable shuffle, stored in the task state so the layout doesn't jump when the learner returns
function taskPerm(v, n){
  if (!Array.isArray(v.p) || v.p.length !== n) v.p = shuffle([...Array(n).keys()]);
  return v.p;
}

function renderTask(t, v, box, changed){
  const label = t.label ? `<p class="q">${esc(t.label)}</p>` : "";

  if (t.type === "pick") {
    v.r = v.r || [];
    const draw = () => {
      box.innerHTML = label + t.rounds.map((r, ri) => {
        const c = v.r[ri], has = c != null, right = has && (r.answer == null || c === r.answer), graded = r.answer != null;
        return `<div class="round">
          <p class="rq">${esc(r.q)}</p>
          <div class="opts">${r.options.map((o, k) => `
            <button class="opt ${c === k ? (right ? "right" : "wrong") : ""}" data-r="${ri}" data-k="${k}" ${graded && right ? "disabled" : ""}>${esc(o)}</button>`).join("")}
          </div>
          ${has && graded ? `<p class="fb ${right ? "ok" : "no"}">${right ? "✓ " + esc(r.why || "Correct!") : "Not quite. Look again and try another."}</p>` : ""}
        </div>`;
      }).join("");
      box.querySelectorAll(".opt").forEach(b => b.onclick = () => { v.r[+b.dataset.r] = +b.dataset.k; draw(); changed(); });
    };
    return draw();
  }

  if (t.type === "sort") {
    v.a = v.a || {};
    const perm = taskPerm(v, t.items.length);
    const draw = () => {
      const wrong = perm.some(k => v.a[k] != null && v.a[k] !== t.items[k].b);
      box.innerHTML = label + `<div class="sortlist">${perm.map(k => {
        const a = v.a[k], it = t.items[k], cls = a == null ? "" : a === it.b ? "right" : "wrong";
        return `<div class="sortrow ${cls}">
          <span class="sortitem">${esc(it.t)}</span>
          <span class="sortbtns">${t.buckets.map((b, bi) => `<button class="opt small ${a === bi ? cls : ""}" data-k="${k}" data-b="${bi}" ${cls === "right" ? "disabled" : ""}>${esc(b)}</button>`).join("")}</span>
        </div>`;
      }).join("")}</div>
      ${wrong ? `<p class="fb no">The red ones are in the wrong place. Try the other choice.</p>` : taskDone(t, v) ? `<p class="fb ok">✓ All sorted!</p>` : ""}`;
      box.querySelectorAll(".opt").forEach(b => b.onclick = () => { v.a[+b.dataset.k] = +b.dataset.b; draw(); changed(); });
    };
    return draw();
  }

  if (t.type === "text" || t.type === "typing" || t.type === "paste") {
    const target = t.type === "text" ? "" : `<div class="target">${esc(t.target)}</div>`;
    box.innerHTML = label + target + `
      <input class="field" maxlength="120" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${t.type === "paste" ? "Paste here" : "Type here"}" />
      <p class="fb"></p>`;
    const inp = box.querySelector("input"), fb = box.querySelector(".fb");
    inp.value = v.v || "";
    const feedback = () => {
      let msg = "", good = taskDone(t, v);
      if (t.type === "text") msg = good ? "✓ Saved." : textProblem(t, v.v);
      else if (t.type === "typing") {
        const x = v.v || "";
        if (good) msg = "✓ Perfect!";
        else if (x && t.target.startsWith(x)) msg = "Looking good. Keep going…";
        else if (x) {
          let i = 0; while (i < x.length && x[i] === t.target[i]) i++;
          msg = i >= t.target.length ? "Too long. Remove the extra letters with Backspace."
            : `Check letter ${i + 1}: it should be “${t.target[i] === " " ? "space" : t.target[i]}”.`;
        }
      } else {
        if (good) msg = "✓ Pasted!";
        else if (v.v && !v.pasted) msg = "Use paste for this one: Ctrl+V, or press and hold, then Paste.";
        else if (v.v) msg = "That's not quite the sentence. Copy it again and paste.";
      }
      fb.textContent = msg;
      fb.className = "fb " + (good ? "ok" : msg ? "no" : "");
    };
    if (t.type === "typing") inp.onpaste = e => { e.preventDefault(); fb.textContent = "Type it yourself. That's the practice!"; fb.className = "fb no"; };
    if (t.type === "paste") inp.onpaste = () => { v.pasted = true; };
    inp.oninput = () => {
      if (t.type === "paste" && !cleanText(inp.value)) v.pasted = false;
      v.v = inp.value; feedback(); changed();
    };
    return feedback();
  }

  if (t.type === "flags") {
    v.found = v.found || [];
    const total = t.segments.filter(sg => sg.flag).length;
    const draw = () => {
      box.innerHTML = label + `
        <div class="msgcard">
          <div class="msghead">${esc(t.header)}</div>
          ${t.segments.map((sg, k) => `<button class="seg ${v.found.includes(k) ? "flag" : v.miss === k ? "clean" : ""}" data-k="${k}">${esc(sg.t)}</button>`).join("")}
        </div>
        <p class="fb ${v.found.length === total ? "ok" : v.miss != null ? "no" : ""}">${
          v.found.length === total ? `✓ You found all ${total} red flags!`
          : v.miss != null ? `That part looks normal on its own. Keep looking. (${v.found.length} of ${total} found)`
          : `${v.found.length} of ${total} red flags found.`}</p>
        ${v.found.length ? `<ul class="flaglist">${t.segments.map((sg, k) => v.found.includes(k) ? `<li>🚩 ${esc(sg.flag)}</li>` : "").join("")}</ul>` : ""}`;
      box.querySelectorAll(".seg").forEach(b => b.onclick = () => {
        const k = +b.dataset.k;
        if (t.segments[k].flag) { if (!v.found.includes(k)) v.found.push(k); v.miss = null; }
        else v.miss = k;
        draw(); changed();
      });
    };
    return draw();
  }

  if (t.type === "order") {
    const perm = taskPerm(v, t.items.length);
    const draw = () => {
      const n = v.n || 0, done = n >= t.items.length;
      box.innerHTML = label + `
        ${n ? `<ol class="path">${t.items.slice(0, n).map(it => `<li><b>${esc(it.t)}</b><span class="hint">${esc(it.note)}</span></li>`).join("")}</ol>` : ""}
        ${done ? `<p class="fb ok">✓ Complete!</p>` : `
          <p class="hint">Tap step ${n + 1} of ${t.items.length}:</p>
          <div class="opts one">${perm.filter(k => k >= n).map(k => `<button class="opt" data-k="${k}">${esc(t.items[k].t)}</button>`).join("")}</div>
          ${v.wrong ? `<p class="fb no">Not that one yet. Think about what has to happen next.</p>` : ""}`}`;
      box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        if (+b.dataset.k === (v.n || 0)) { v.n = (v.n || 0) + 1; v.wrong = false; } else v.wrong = true;
        draw(); changed();
      });
    };
    return draw();
  }
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

// Questions missed before are more likely to come back (spaced repetition, per module)
function pickQuestions(m, s, n){
  const miss = s.miss || {};
  const pool = m.quiz.map((_, qi) => ({ qi, w: 1 + 3 * Math.min(miss[qi] || 0, 3) }));
  const out = [];
  while (out.length < n && pool.length) {
    let r = Math.random() * pool.reduce((t, x) => t + x.w, 0), j = 0;
    while (j < pool.length - 1 && (r -= pool[j].w) >= 0) j++;
    out.push(pool.splice(j, 1)[0].qi);
  }
  return out;
}

// One card per mistake: the right answer, what was picked, and why. When `gated`, each card
// must be acknowledged (after a short read) before moving on; `onDone` runs after the last one.
function showReview(m, list, el, gated, onDone){
  let k = 0;
  const card = () => {
    const { qi, p } = list[k], x = m.quiz[qi];
    el.innerHTML = `
      <div class="review">
        <div class="qhead"><span>MISTAKE ${k + 1}/${list.length}</span><span>${gated ? "Read each one before you retry" : "Optional review"}</span></div>
        <p class="qq">${esc(x.q)}</p>
        <div class="opts">
          ${x.options.map((o, i) => `<div class="opt ${i === x.a ? "right" : i === p ? "wrong" : "dim"}">${i === x.a ? "✓ " : i === p ? "✗ " : ""}${esc(o)}${i === p ? ` <span class="hint">(your answer)</span>` : ""}</div>`).join("")}
        </div>
        <div class="why big">💡 ${esc(x.why)}</div>
        <div class="stepFoot">
          <span class="hint">${k < list.length - 1 ? "" : gated ? "Last one. Then you can try the quiz again." : ""}</span>
          <button class="btn" id="got" ${gated ? "disabled" : ""}>${k < list.length - 1 ? "Got it, next" : gated ? "Got it, retry quiz" : "Done"}</button>
        </div>
      </div>`;
    const got = document.getElementById("got");
    if (gated) { const t = setTimeout(() => { got.disabled = false; got.focus(); }, 2000); cleanup.push(() => clearTimeout(t)); }
    got.onclick = () => { k++; k < list.length ? card() : onDone(); };
  };
  card();
}

function stepQuiz(m, s, el){
  const N = Math.min(C.questionsPerQuiz, m.quiz.length), pass = Math.min(C.passMark, N);

  if (!quizOpen(m)) {
    const p = prevMod(m);
    el.innerHTML = `
      <div class="result">
        <h3>${ICON("lock", 24)} Quiz opens after ${esc(p.code)}</h3>
        <p class="hint">You can read, listen and do the mission here any time. To take this quiz, first pass the quiz for <b>${esc(p.code)} · ${esc(p.name)}</b>. That way each quiz builds on the one before.</p>
        <div class="row" style="justify-content:center;margin-top:22px;flex-wrap:wrap">
          <button class="btn" id="gp">Go to ${esc(p.code)}</button>
          <button class="btn ghost" id="gt">Back to Track</button>
        </div>
      </div>`;
    document.getElementById("gp").onclick = () => openModule(p.id);
    document.getElementById("gt").onclick = () => go({ name: "track", t: m.track });
    return;
  }

  // After a failed attempt, the mistakes must be reviewed before retrying (even after leaving and coming back)
  if (Array.isArray(s.review) && s.review.length) {
    return showReview(m, s.review, el, true, () => { s.review = null; queueSave(); render(); });
  }

  const qs = pickQuestions(m, s, N).map(qi => {
    const x = m.quiz[qi], order = shuffle(x.options.map((_, i) => i));
    return { qi, q: x.q, why: x.why, options: order.map(i => x.options[i]), a: order.indexOf(x.a), order };
  });
  const mistakes = [];

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
      else mistakes.push({ qi: x.qi, p: x.order[i] });
      s.miss = s.miss || {};
      s.miss[x.qi] = Math.max(0, (s.miss[x.qi] || 0) + (good ? -1 : 1));

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
    funnel(m, "quiz");
    if (passed) funnel(m, "pass");
    if (passed) {
      s.reached = 5;
      if (!s.done) s.done = true;
    } else {
      s.review = mistakes;
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
          <p class="hint">${right === N ? "Perfect score — fully mastered!" : lvl === "mastered" ? "Well done! You mastered this module before, so it stays Mastered." : `Well done! Score ${N}/${N} next time for Mastered.`}</p>
        ` : `
          <h3>Almost there! 💪</h3>
          <p class="hint">You need ${pass}/${N} to pass. First, let's look at the ${mistakes.length} question${mistakes.length === 1 ? "" : "s"} you missed. Then you can try again.</p>
        `}
        <div class="row" style="justify-content:center;margin-top:22px;flex-wrap:wrap">
          ${passed ? `
            ${mistakes.length ? `<button class="btn ghost" id="rvm">Review my mistakes</button>` : ""}
            <button class="btn" id="mp">Back to Track</button>
          ` : `
            <button class="btn" id="rvm">Review my mistakes</button>
            <button class="btn ghost" id="rv">Re-read the lesson</button>
          `}
        </div>
      </div>
    `;

    const mp = document.getElementById("mp");
    if (mp) mp.onclick = () => go({ name: "track", t: m.track });
    const rv = document.getElementById("rv");
    if (rv) rv.onclick = () => go({ name: "mod", id: m.id, step: "read" });
    const rvm = document.getElementById("rvm");
    if (rvm) rvm.onclick = passed
      ? () => showReview(m, mistakes, el, false, () => go({ name: "track", t: m.track }))
      : () => render();
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
    `I just finished ${t.name} on Tech Tayari! 🎉
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
      <p class="celeb-note">Tech Tayari is an independent learning tool, not affiliated with KICD or the government.</p>
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
    <p class="hint" style="margin:0 0 18px">Learning summary for <b>${esc(USER.display)}</b>${USER.username ? ` (${esc(USER.username)})` : ""}</p>

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
    const text = `Tech Tayari · Progress Report for ${USER.display}\nCompleted Modules: ${done}/${total}\nMastered (5/5): ${mastered}\nCourse Progress: ${Math.round((done/total)*100)}%\nAligned with KICD CBE curriculum.`;
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
    document.getElementById("bk-home").onclick = () => go({ name: "home" });
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

  document.getElementById("adm-back").onclick = () => go({ name: "home" });
  document.getElementById("adm-logout").onclick = () => {
    sessionStorage.removeItem(SS_ADMIN);
    go({ name: "home" });
  };

  const el = document.getElementById("admin-view");
  try {
    const res = await api("insights", "GET", null, { "X-Admin-Key": key });
    const o = res.overview || {};
    const top = res.topModules || [];
    const hard = res.hardest || [];
    const daily = res.daily || [];
    const funnelRows = res.funnel || [];
    const review = res.review || { tallies: [], notes: [] };
    // "j-network:q3" -> readable label from the course content
    const reviewLabel = item => {
      const [mid, part] = item.split(":"), m = MODS.find(x => x.id === mid);
      if (!m) return { mod: mid, what: part };
      const n = parseInt(part.replace(/\D/g, ""), 10);
      const what = part.startsWith("card") ? `Card ${n + 1}: ${(m.read[n] || {}).title || "?"}`
        : part.startsWith("task") ? `Task ${n + 1}: ${((m.mission.tasks || [])[n] || {}).label || ((m.mission.tasks || [])[n] || {}).type || "?"}`
        : `Q${n + 1}: ${(m.quiz[n] || {}).q || "?"}`;
      return { mod: `${m.code} · ${m.name}`, what, order: MODS.indexOf(m) };
    };

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
          <div class="stat-val" style="color:#3b5ba5">${o.seniorUsers || 0}</div>
          <div class="stat-lbl">Senior (Grade 10–11)</div>
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
        <h3 style="font-family:Nunito,sans-serif;margin:0 0 4px">Content Review</h3>
        <p class="hint" style="margin:0 0 12px">Votes and notes from reviewers on the <a href="/review/" target="_blank" rel="noopener">review pages</a>. Items with the most "remove" votes come first.</p>
        <div class="table-wrap" style="margin-bottom:28px">
          <table class="admin-table">
            <thead><tr><th>Module</th><th>Item</th><th>Keep</th><th>Remove</th><th>Notes</th></tr></thead>
            <tbody>
              ${(() => {
                const notesBy = {};
                (review.notes || []).forEach(n => (notesBy[n.item] = notesBy[n.item] || []).push(n));
                const rows = (review.tallies || []).map(t => ({ ...t, ...reviewLabel(t.item), notes: notesBy[t.item] || [] }))
                  .sort((a, b) => (b.remove - a.remove) || (b.notes.length - a.notes.length) || (a.order - b.order));
                if (!rows.length) return `<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:18px">No review votes yet. Share a link such as <b>${esc(location.origin)}/review/primary</b> with reviewers.</td></tr>`;
                return rows.map(r => `<tr>
                  <td><b>${esc(r.mod)}</b></td>
                  <td>${esc(r.what)}</td>
                  <td>${r.keep}</td>
                  <td>${r.remove ? `<b style="color:var(--red)">${r.remove}</b>` : 0}</td>
                  <td>${r.notes.map(n => `<div style="margin:2px 0"><b>${n.vote > 0 ? "＋" : "−"}</b> ${esc(n.note)} <span class="hint">${esc(n.name || "anonymous")}</span></div>`).join("")}</td>
                </tr>`).join("");
              })()}
            </tbody>
          </table>
        </div>

        <h3 style="font-family:Nunito,sans-serif;margin:0 0 4px">Learning Funnel (last 30 days)</h3>
        <p class="hint" style="margin:0 0 12px">How many devices reached each step of a module, counted once per device with no IDs. The red figure is where most learners stop.</p>
        <div class="table-wrap" style="margin-bottom:28px">
          <table class="admin-table">
            <thead><tr><th>Module</th><th>Started</th><th>Read it</th><th>Mission done</th><th>Took quiz</th><th>Passed</th></tr></thead>
            <tbody>
              ${(() => {
                const steps = ["start", "read", "mission", "quiz", "pass"];
                const rows = MODS.map(m => ({ m, r: funnelRows.find(x => x.module_id === m.id) })).filter(x => x.r);
                if (!rows.length) return `<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:18px">No learning activity recorded yet.</td></tr>`;
                return rows.map(({ m, r }) => {
                  const v = steps.map(k => r[k] || 0);
                  // biggest drop between consecutive steps
                  let worst = -1, drop = 0;
                  for (let i = 1; i < v.length; i++) if (v[i - 1] - v[i] > drop) { drop = v[i - 1] - v[i]; worst = i; }
                  return `<tr><td><b>${esc(m.code)} · ${esc(m.name)}</b></td>${v.map((x, i) => `<td>${i === worst ? `<b style="color:var(--red)">${x}</b>` : x}${i && v[0] ? ` <span class="hint">(${Math.round(x / v[0] * 100)}%)</span>` : ""}</td>`).join("")}</tr>`;
                }).join("");
              })()}
            </tbody>
          </table>
        </div>

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
                const trackName = m ? ((TRACKS.find(t => t.id === m.track) || {}).name || "") : "";
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
                const trackName = m ? ((TRACKS.find(t => t.id === m.track) || {}).name || "") : "";
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

  migrateOldGuestData();
  let savedUser = null;
  try { savedUser = JSON.parse(localStorage.getItem(LS_USER) || "null"); } catch {}

  view = viewFromPath(location.pathname);
  // Lesson pages (learn/*.html) link here as /?lesson=<id> to open that lesson directly
  const requested = new URLSearchParams(location.search).get("lesson");
  const openRequested = () => {
    if (!requested || !MODS.some(m => m.id === requested)) return;
    history.replaceState(null, "", "/");
    openModule(requested);
  };

  if (TOKEN && savedUser) {
    // Show this device's copy immediately; sync in the background without blocking learning
    USER = savedUser;
    PROG = readLocal(progKey());
    hudSync(navigator.onLine ? "saving" : "offline");
    render();
    openRequested();
    await syncFromServer();
    if (view.name === "home" || view.name === "track") render();
    return;
  }

  startLocalMode();
  render();
  openRequested();
})();

})();
