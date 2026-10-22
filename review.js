/* Tech Tayari — content review voting (used only by /review pages).
 * Each card, task and quiz question has ＋ Keep / − Remove buttons and an optional note.
 * Votes go to POST /api/review, tied to a random code stored in this browser (so a reviewer can change their
 * mind) and the name they choose to give. Tapping the same choice again removes the vote.
 */
(() => {
"use strict";
const LS_KEY = "tt.review_key", LS_NAME = "tt.review_name", LS_VOTES = "tt.review_votes";
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
let rk = store.get(LS_KEY, "");
if (!/^[a-f0-9]{32}$/.test(rk)) {
  const a = new Uint8Array(16); crypto.getRandomValues(a);
  rk = [...a].map(b => b.toString(16).padStart(2, "0")).join("");
  store.set(LS_KEY, rk);
}
const votes = store.get(LS_VOTES, {});
const nameInput = document.getElementById("rv-name");
if (nameInput) {
  nameInput.value = store.get(LS_NAME, "");
  nameInput.oninput = () => store.set(LS_NAME, nameInput.value.trim());
}

async function send(item, vote, note){
  const r = await fetch("/api/review", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item, vote, note, name: store.get(LS_NAME, ""), rk }),
  });
  if (!r.ok) { let e = "Couldn't save. Check your connection and try again."; try { e = (await r.json()).error || e; } catch {} throw new Error(e); }
}

function progress(){
  const el = document.querySelector(".rv-progress");
  if (!el) return;
  const all = [...document.querySelectorAll(".rv")], done = all.filter(b => votes[b.dataset.item]).length;
  el.textContent = `${done} of ${all.length} items reviewed on this page.`;
}

function paint(box){
  const v = votes[box.dataset.item];
  box.querySelectorAll(".rv-b").forEach(b => b.classList.toggle("on", !!v && +b.dataset.v === v.v));
  box.classList.toggle("voted-keep", !!v && v.v === 1);
  box.classList.toggle("voted-remove", !!v && v.v === -1);
  const t = box.querySelector(".rv-note-t");
  if (t) t.textContent = v && v.note ? "Edit note" : "Add note";
}

function noteEditor(box, required){
  let ed = box.querySelector(".rv-note");
  if (!ed) {
    ed = document.createElement("div");
    ed.className = "rv-note";
    ed.innerHTML = `<textarea class="field" maxlength="500" rows="2" placeholder="${required ? "Why remove it? What would fix it? (optional, but very helpful)" : "Your note"}"></textarea>
      <button class="btn small" type="button">Save note</button>`;
    box.appendChild(ed);
  }
  const ta = ed.querySelector("textarea"), v = votes[box.dataset.item];
  ta.value = v && v.note || "";
  ta.focus();
  ed.querySelector("button").onclick = async () => {
    const cur = votes[box.dataset.item];
    const state = box.querySelector(".rv-state");
    if (!cur) { state.textContent = "Choose Keep or Remove first."; return; }
    try {
      await send(box.dataset.item, cur.v, ta.value.trim());
      cur.note = ta.value.trim(); store.set(LS_VOTES, votes);
      state.textContent = "Saved ✓"; ed.remove(); paint(box);
    } catch (e) { state.textContent = e.message; }
  };
}

document.querySelectorAll(".rv").forEach(box => {
  paint(box);
  box.querySelectorAll(".rv-b").forEach(b => b.onclick = async () => {
    const item = box.dataset.item, chosen = +b.dataset.v, cur = votes[item];
    const vote = cur && cur.v === chosen ? 0 : chosen;      // tap the same choice again to undo
    const note = vote ? (cur && cur.note) || "" : "";
    const state = box.querySelector(".rv-state");
    state.textContent = "Saving…";
    try {
      await send(item, vote, note);
      if (vote) votes[item] = { v: vote, note }; else delete votes[item];
      store.set(LS_VOTES, votes);
      state.textContent = vote ? "Saved ✓" : "Vote removed";
      paint(box); progress();
      if (vote === -1 && !note) noteEditor(box, true);
    } catch (e) { state.textContent = e.message; }
  });
  const nt = box.querySelector(".rv-note-t");
  if (nt) nt.onclick = () => noteEditor(box, false);
});
progress();
})();
