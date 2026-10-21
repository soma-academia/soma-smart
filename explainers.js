/* Tech Tayari — animated explainers for the WATCH step.
 * Tiny, offline, and exact: a "packet" moves between labelled boxes one step at a time, with a caption
 * per step. Learners control the pace (Back / Next / Play). Respects prefers-reduced-motion.
 * A module opts in with `explainer: <id>` in its Markdown front matter; ids must exist below
 * (keep _build.py's EXPLAINERS list in sync).
 */
(() => {
"use strict";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- scenes: nodes top-to-bottom, steps move a packet `from` -> `to` or just `focus` a node ----------
const SCENES = {
  "input-process-output": {
    title: "Input → processing → output",
    nodes: [
      { id: "kb", icon: "keyboard", label: "Keyboard", note: "input" },
      { id: "cpu", icon: "cpu", label: "CPU (processor)", note: "processing" },
      { id: "screen", icon: "monitor", label: "Screen", note: "output" },
    ],
    steps: [
      { focus: "kb", text: "Every computer job has three parts: input, processing and output. Let's follow one key press." },
      { from: "kb", to: "cpu", tag: "A", text: "You press the A key. The keyboard sends a signal into the computer. That's input." },
      { focus: "cpu", text: "The CPU, the computer's brain, works out what to do: show the letter A where you are typing. That's processing." },
      { from: "cpu", to: "screen", tag: "A", text: "The CPU sends the result to the screen and the letter appears. That's output!" },
      { focus: "screen", text: "A touch screen is both: input when you tap it, and output when it shows you things." },
    ],
  },

  "memory": {
    title: "Storage, RAM and the CPU",
    nodes: [
      { id: "disk", icon: "disk", label: "Storage (SSD or disk)", note: "keeps files, even with power off" },
      { id: "ram", icon: "ram", label: "RAM", note: "fast short-term memory" },
      { id: "cpu", icon: "cpu", label: "CPU", note: "does the work" },
    ],
    steps: [
      { focus: "disk", text: "Your apps and files live in storage. Storage keeps them safe even when the power is off." },
      { from: "disk", to: "ram", tag: "app", text: "When you open an app, it is copied from storage into RAM, which is much faster to read." },
      { from: "ram", to: "cpu", tag: "data", text: "The CPU works on what is in RAM, fetching data again and again, millions of times a second." },
      { from: "cpu", to: "ram", tag: "result", text: "Results go back into RAM while you work." },
      { from: "ram", to: "disk", tag: "Save", text: "When you press Save, your work is written to storage. RAM forgets everything when the power goes off. That's why we save!" },
    ],
  },

  "network-path": {
    title: "How a page reaches your phone",
    nodes: [
      { id: "phone", icon: "phone", label: "Your phone", note: "the request starts here" },
      { id: "router", icon: "router", label: "Home Wi-Fi router", note: "your local network (LAN)" },
      { id: "isp", icon: "building", label: "Your ISP", note: "e.g. Safaricom, Airtel, Zuku" },
      { id: "cable", icon: "waves", label: "Undersea fibre cables", note: "land at Mombasa" },
      { id: "server", icon: "server", label: "The website's server", note: "stores the page" },
    ],
    steps: [
      { focus: "phone", text: "You tap a link. Your phone splits the request into small pieces called packets." },
      { from: "phone", to: "router", tag: "packet", text: "Each packet goes to your router first, over Wi-Fi. On mobile data, a cell tower does this job." },
      { from: "router", to: "isp", tag: "packet", text: "The router passes it to your ISP, your door to the wider internet." },
      { from: "isp", to: "cable", tag: "packet", text: "If the website's server is in another country, packets travel through huge fibre cables under the sea. Kenya's land at Mombasa." },
      { from: "cable", to: "server", tag: "packet", text: "The server receives the packets and puts your request back together." },
      { from: "server", to: "phone", tag: "page", text: "The page comes back the same way, in packets. Your phone joins them up and shows it, usually in less than a second." },
    ],
  },

  "dns-lookup": {
    title: "What happens when you type a web address",
    nodes: [
      { id: "you", icon: "laptop", label: "Your browser", note: "you type www.ecitizen.go.ke" },
      { id: "dns", icon: "contacts", label: "DNS server", note: "the internet's address book" },
      { id: "web", icon: "server", label: "ecitizen.go.ke's server", note: "has the page" },
    ],
    steps: [
      { focus: "you", text: "You type www.ecitizen.go.ke. Names are easy for people, but computers find each other using numbers called IP addresses." },
      { from: "you", to: "dns", tag: "IP for ecitizen.go.ke?", text: "Your device asks a DNS server: what is the IP address for this name?" },
      { from: "dns", to: "you", tag: "IP address", text: "The DNS server replies with the IP address. Your device remembers it for a while, so next time is faster (that's caching)." },
      { from: "you", to: "web", tag: "HTTPS hello", text: "Your browser connects to that IP and sets up HTTPS, the padlock. From now on the data is scrambled (encrypted) on the way." },
      { from: "you", to: "web", tag: "GET page", text: "It sends an HTTP request: please send me the page." },
      { from: "web", to: "you", tag: "page", text: "The server sends back a response with the page, and your browser draws it on the screen." },
    ],
  },
};

function renderScene(sc, el){
  el.innerHTML = `
    <div class="xp">
      <div class="xp-title">${window.ICON ? window.ICON("film", 22) : ""} ${esc(sc.title)}</div>
      <div class="xp-stage">
        ${sc.nodes.map(n => `<div class="xp-node" data-n="${n.id}"><span class="xp-ic">${window.ICON ? window.ICON(n.icon, 26) : ""}</span><span><b>${esc(n.label)}</b><small>${esc(n.note || "")}</small></span></div>`).join("")}
        <div class="xp-packet" aria-hidden="true"></div>
      </div>
      <p class="xp-cap" aria-live="polite"></p>
      <div class="xp-ctl">
        <button class="btn ghost small" data-x="back" aria-label="Previous step">◀ Back</button>
        <span class="xp-count"></span>
        <button class="btn ghost small" data-x="play">▶ Play</button>
        <button class="btn small" data-x="next">Next ▶</button>
      </div>
    </div>`;
  const stage = el.querySelector(".xp-stage"), packet = el.querySelector(".xp-packet"), cap = el.querySelector(".xp-cap"),
        count = el.querySelector(".xp-count"), back = el.querySelector('[data-x="back"]'), next = el.querySelector('[data-x="next"]'),
        play = el.querySelector('[data-x="play"]');
  const node = id => el.querySelector(`.xp-node[data-n="${id}"]`);
  const centre = id => { const n = node(id); return n.offsetTop + n.offsetHeight / 2; };
  let i = 0, timer = null;

  const show = (k, animate) => {
    i = k;
    const st = sc.steps[i];
    el.querySelectorAll(".xp-node").forEach(n => n.classList.remove("on"));
    [st.focus, st.from, st.to].filter(Boolean).forEach(id => node(id).classList.add("on"));
    cap.textContent = st.text;
    count.textContent = `${i + 1} / ${sc.steps.length}`;
    back.disabled = i === 0;
    next.textContent = i === sc.steps.length - 1 ? "↺ Again" : "Next ▶";
    if (st.from && st.to) {
      packet.textContent = st.tag || "";
      packet.style.transition = "none";
      packet.style.opacity = "1";
      packet.style.top = centre(st.from) + "px";
      void packet.offsetWidth; // restart the move from the source node
      packet.style.transition = animate && !reduceMotion() ? "top 1.1s ease-in-out" : "none";
      packet.style.top = centre(st.to) + "px";
    } else {
      packet.style.opacity = "0";
    }
  };
  const stop = () => { clearInterval(timer); timer = null; play.textContent = "▶ Play"; };
  back.onclick = () => { stop(); if (i > 0) show(i - 1, false); };
  next.onclick = () => { stop(); show(i < sc.steps.length - 1 ? i + 1 : 0, true); };
  play.onclick = () => {
    if (timer) return stop();
    play.textContent = "⏸ Pause";
    if (i === sc.steps.length - 1) show(0, true);
    timer = setInterval(() => { if (i < sc.steps.length - 1) show(i + 1, true); else stop(); }, 3500);
  };
  show(0, false);
  return stop;
}

// ---------- C8: build a letter from 8 bits ----------
function renderBits(el){
  const bits = [0, 0, 0, 0, 0, 0, 0, 0], vals = [128, 64, 32, 16, 8, 4, 2, 1];
  el.innerHTML = `
    <div class="xp">
      <div class="xp-title">${window.ICON ? window.ICON("film", 22) : ""} One byte = 8 bits</div>
      <p class="xp-cap">Each bit is a tiny switch: 0 (off) or 1 (on). Together, 8 bits make one byte, a number from 0 to 255.
        Computers store every letter as a number. <b>Try it: switch on the bits for 64 and 1 to make 65, the code for the letter A.</b></p>
      <div class="xp-bits">${vals.map((v, k) => `<button class="xp-bit" data-k="${k}" aria-pressed="false"><span class="xp-bitv">0</span><small>${v}</small></button>`).join("")}</div>
      <div class="xp-out" aria-live="polite"></div>
      <p class="hint">Try 66 for B, or 97 for a small a. Capital and small letters have different codes!</p>
    </div>`;
  const out = el.querySelector(".xp-out");
  const draw = () => {
    const n = bits.reduce((t, b, k) => t + b * vals[k], 0);
    const ch = n >= 33 && n <= 126 ? String.fromCharCode(n) : n === 32 ? "space" : "";
    out.innerHTML = `<code>${bits.join("")}</code> → number <b>${n}</b>${ch ? ` → letter <b class="xp-letter">${esc(ch)}</b>` : ""}${n === 65 ? " <b class=\"xp-win\">You made A!</b>" : ""}`;
  };
  el.querySelectorAll(".xp-bit").forEach(b => b.onclick = () => {
    const k = +b.dataset.k;
    bits[k] = 1 - bits[k];
    b.classList.toggle("on", !!bits[k]);
    b.setAttribute("aria-pressed", String(!!bits[k]));
    b.querySelector(".xp-bitv").textContent = bits[k];
    draw();
  });
  draw();
  return () => {};
}

// ---------- S15: try every logic gate ----------
const GATES = {
  AND:  { f: (a, b) => a & b,        expr: "A · B" },
  OR:   { f: (a, b) => a | b,        expr: "A + B" },
  NOT:  { f: a => 1 - a,             expr: "NOT A", one: true },
  NAND: { f: (a, b) => 1 - (a & b),  expr: "NOT (A · B)" },
  NOR:  { f: (a, b) => 1 - (a | b),  expr: "NOT (A + B)" },
  XOR:  { f: (a, b) => a ^ b,        expr: "A ⊕ B" },
  XNOR: { f: (a, b) => 1 - (a ^ b),  expr: "NOT (A ⊕ B)" },
};
function renderGates(el){
  let gate = "AND", A = 0, B = 0;
  const draw = () => {
    const g = GATES[gate], out = g.one ? g.f(A) : g.f(A, B);
    const rows = g.one ? [[0], [1]] : [[0, 0], [0, 1], [1, 0], [1, 1]];
    el.innerHTML = `
      <div class="xp">
        <div class="xp-title">${window.ICON ? window.ICON("film", 22) : ""} Try the logic gates</div>
        <div class="xp-gates">${Object.keys(GATES).map(k => `<button class="opt small ${k === gate ? "right" : ""}" data-g="${k}">${k}</button>`).join("")}</div>
        <div class="xp-lg">
          <div class="xp-lg-in">
            <button class="xp-bit ${A ? "on" : ""}" data-in="A" aria-pressed="${!!A}"><span class="xp-bitv">${A}</span><small>A</small></button>
            ${g.one ? "" : `<button class="xp-bit ${B ? "on" : ""}" data-in="B" aria-pressed="${!!B}"><span class="xp-bitv">${B}</span><small>B</small></button>`}
          </div>
          <div class="xp-lg-gate">${gate}<small>${esc(g.expr)}</small></div>
          <div class="xp-lamp ${out ? "on" : ""}" aria-live="polite">${out}<small>output</small></div>
        </div>
        <table class="xp-tt"><thead><tr><th>A</th>${g.one ? "" : "<th>B</th>"}<th>${gate}</th></tr></thead><tbody>
          ${rows.map(r => `<tr class="${r[0] === A && (g.one || r[1] === B) ? "now" : ""}"><td>${r[0]}</td>${g.one ? "" : `<td>${r[1]}</td>`}<td><b>${g.one ? g.f(r[0]) : g.f(r[0], r[1])}</b></td></tr>`).join("")}
        </tbody></table>
        <p class="hint">Tap A and B to switch the inputs. The highlighted row of the truth table is the one you are testing.</p>
      </div>`;
    el.querySelectorAll("[data-g]").forEach(b => b.onclick = () => { gate = b.dataset.g; draw(); });
    el.querySelectorAll("[data-in]").forEach(b => b.onclick = () => { if (b.dataset.in === "A") A = 1 - A; else B = 1 - B; draw(); });
  };
  draw();
  return () => {};
}

// ---------- S16: a burglar alarm circuit, Alarm = A · (D + W) ----------
function renderCircuit(el){
  const s = { A: 1, D: 0, W: 0 };
  const names = { A: "Alarm armed", D: "Door open", W: "Window open" };
  const draw = () => {
    const or = s.D | s.W, out = s.A & or;
    el.innerHTML = `
      <div class="xp">
        <div class="xp-title">${window.ICON ? window.ICON("film", 22) : ""} Burglar alarm: A · (D + W)</div>
        <div class="xp-lg-in xp-lg-wide">${["A", "D", "W"].map(k => `<button class="xp-bit ${s[k] ? "on" : ""}" data-in="${k}" aria-pressed="${!!s[k]}"><span class="xp-bitv">${s[k]}</span><small>${k} · ${names[k]}</small></button>`).join("")}</div>
        <div class="xp-chain">
          <div class="xp-lg-gate">OR<small>D + W = ${s.D} + ${s.W} = <b>${or}</b></small></div>
          <span aria-hidden="true">→</span>
          <div class="xp-lg-gate">AND<small>A · (D + W) = ${s.A} · ${or} = <b>${out}</b></small></div>
          <span aria-hidden="true">→</span>
          <div class="xp-lamp ${out ? "on alarm" : ""}" aria-live="polite">${out ? "ALARM" : "quiet"}<small>output ${out}</small></div>
        </div>
        <p class="xp-cap">${out ? "The alarm is armed and something is open, so it sounds." : s.A ? "Armed, but every door and window is shut, so it stays quiet." : "The alarm is not armed, so it stays quiet whatever is open."}</p>
      </div>`;
    el.querySelectorAll("[data-in]").forEach(b => b.onclick = () => { s[b.dataset.in] = 1 - s[b.dataset.in]; draw(); });
  };
  draw();
  return () => {};
}

// Public API: render(id, element) -> cleanup function, or null if the id is unknown
window.EXPLAINERS = {
  ids: [...Object.keys(SCENES), "bits", "logic-gates", "logic-circuit"],
  render(id, el){
    if (id === "bits") return renderBits(el);
    if (id === "logic-gates") return renderGates(el);
    if (id === "logic-circuit") return renderCircuit(el);
    return SCENES[id] ? renderScene(SCENES[id], el) : null;
  },
};
})();
