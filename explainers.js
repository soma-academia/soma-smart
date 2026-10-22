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

// ---------- A3: teach a decision tree, then test it on animals it has never seen ----------
const DT_QUESTIONS = {
  feathers: "Does it have feathers?",
  gills: "Does it breathe with gills?",
  fur: "Does it have fur or hair?",
  eggs: "Does it lay eggs?",
};
const DT_TRAIN = [
  { n: "Lion", c: "Mammal", feathers: 0, gills: 0, fur: 1, eggs: 0 },
  { n: "Cow", c: "Mammal", feathers: 0, gills: 0, fur: 1, eggs: 0 },
  { n: "Goat", c: "Mammal", feathers: 0, gills: 0, fur: 1, eggs: 0 },
  { n: "Ostrich", c: "Bird", feathers: 1, gills: 0, fur: 0, eggs: 1 },
  { n: "Chicken", c: "Bird", feathers: 1, gills: 0, fur: 0, eggs: 1 },
  { n: "Flamingo", c: "Bird", feathers: 1, gills: 0, fur: 0, eggs: 1 },
  { n: "Tilapia", c: "Fish", feathers: 0, gills: 1, fur: 0, eggs: 1 },
  { n: "Nile perch", c: "Fish", feathers: 0, gills: 1, fur: 0, eggs: 1 },
];
const DT_TEST = [
  { n: "Eagle", c: "Bird", feathers: 1, gills: 0, fur: 0, eggs: 1 },
  { n: "Zebra", c: "Mammal", feathers: 0, gills: 0, fur: 1, eggs: 0 },
  { n: "Catfish", c: "Fish", feathers: 0, gills: 1, fur: 0, eggs: 1 },
  { n: "Dolphin (lives in water, breathes air, almost no hair)", c: "Mammal", feathers: 0, gills: 0, fur: 0, eggs: 0 },
  { n: "Penguin (a bird that can't fly)", c: "Bird", feathers: 1, gills: 0, fur: 0, eggs: 1 },
];
function renderDecisionTree(el){
  let root, tested;
  const reset = () => { root = { items: DT_TRAIN }; tested = false; };
  const pure = node => new Set(node.items.map(x => x.c)).size <= 1;
  const majority = items => { const c = {}; items.forEach(x => c[x.c] = (c[x.c] || 0) + 1); return Object.keys(c).sort((a, b) => c[b] - c[a])[0] || "Unknown"; };
  const leaves = (node, path = []) => node.q ? [...leaves(node.yes, [...path, node.q]), ...leaves(node.no, [...path, node.q])] : [{ node, path }];
  const classify = (node, x, trail = []) => node.q ? classify(x[node.q] ? node.yes : node.no, x, [...trail, `${DT_QUESTIONS[node.q]} ${x[node.q] ? "yes" : "no"}`]) : { c: majority(node.items), trail };
  const draw = () => {
    const open = leaves(root).filter(l => !pure(l.node) && l.path.length < Object.keys(DT_QUESTIONS).length);
    const next = open[0];
    const showTree = (node, depth = 0) => node.q
      ? `<div class="dt-node" style="margin-left:${depth * 14}px">❓ <b>${esc(DT_QUESTIONS[node.q])}</b></div>
         <div class="dt-branch" style="margin-left:${depth * 14 + 14}px">yes →</div>${showTree(node.yes, depth + 2)}
         <div class="dt-branch" style="margin-left:${depth * 14 + 14}px">no →</div>${showTree(node.no, depth + 2)}`
      : `<div class="dt-leaf ${pure(node) ? "" : "mixed"}" style="margin-left:${depth * 14}px">${node.items.length ? `<b>${esc(majority(node.items))}</b>` : "<b>?</b>"} <span class="hint">(${node.items.map(x => esc(x.n)).join(", ") || "no examples"})</span></div>`;
    let body = `<p class="xp-cap">${next
      ? `${next.path.length ? "This group is still mixed: " : ""}<b>${next.node.items.map(x => esc(x.n)).join(", ")}</b>. Which question should the computer ask ${next.path.length ? "next" : "first"}?`
      : tested ? "" : "Your tree sorts every training animal. Now the real test: animals it has never seen."}</p>`;
    if (next) {
      const opts = Object.keys(DT_QUESTIONS).filter(q => !next.path.includes(q));
      body += `<div class="opts one">${opts.map(q => `<button class="opt" data-q="${q}">${esc(DT_QUESTIONS[q])}</button>`).join("")}</div>`;
    } else if (!tested) {
      body += `<button class="btn" data-x="test">Test on new animals</button>`;
    } else {
      const res = DT_TEST.map(x => ({ x, ...classify(root, x) }));
      const ok = res.filter(r => r.c === r.x.c).length;
      body += `<table class="xp-tt dt-test"><thead><tr><th>New animal</th><th>Tree says</th><th></th></tr></thead><tbody>${res.map(r =>
        `<tr class="${r.c === r.x.c ? "" : "now"}"><td>${esc(r.x.n)}<br><span class="hint">${esc(r.trail.join(" · "))}</span></td><td><b>${esc(r.c)}</b></td><td>${r.c === r.x.c ? "✓" : `✗ really a ${esc(r.x.c)}`}</td></tr>`).join("")}</tbody></table>
        <p class="xp-cap"><b>${ok} of ${res.length} correct.</b> ${ok === res.length
          ? "Your tree learned a rule that works on new animals too. That's what a good model does."
          : "It sorted the training animals perfectly but got some new ones wrong. Real AI faces this all the time: a rule that fits the training examples may not fit the world. Try asking different questions."}</p>`;
    }
    el.innerHTML = `
      <div class="xp">
        <div class="xp-title">${window.ICON ? window.ICON("film", 22) : ""} Teach the computer: mammal, bird or fish?</div>
        <p class="hint">Training animals: ${DT_TRAIN.map(x => esc(x.n)).join(", ")}.</p>
        ${root.q ? `<div class="dt-tree">${showTree(root)}</div>` : ""}
        ${body}
        <div class="xp-ctl"><button class="btn ghost small" data-x="reset">↺ Start again</button></div>
      </div>`;
    el.querySelectorAll("[data-q]").forEach(b => b.onclick = () => {
      const node = next.node, q = b.dataset.q;
      node.q = q;
      node.yes = { items: node.items.filter(x => x[q]) };
      node.no = { items: node.items.filter(x => !x[q]) };
      draw();
    });
    const t = el.querySelector('[data-x="test"]'); if (t) t.onclick = () => { tested = true; draw(); };
    el.querySelector('[data-x="reset"]').onclick = () => { reset(); draw(); };
  };
  reset(); draw();
  return () => {};
}

// ---------- A4: a tiny next-word predictor (how chatbots generate text, in miniature) ----------
const NW_CORPUS = [
  "i go to school every day", "i go to school by matatu", "i go to the market on saturday",
  "we go to church on sunday", "the matatu is late today", "the matatu is full",
  "the teacher is kind", "the teacher is in class", "my phone is on the table",
  "habari ya asubuhi", "habari ya leo", "habari ya shule", "twende shule pamoja",
];
function renderNextWord(el){
  let corpus = NW_CORPUS.slice(), words = ["i"];
  const model = () => {
    const m = {};
    corpus.forEach(sent => { const w = sent.toLowerCase().split(/\s+/).filter(Boolean); for (let i = 0; i < w.length - 1; i++) { (m[w[i]] = m[w[i]] || {})[w[i + 1]] = (m[w[i]]?.[w[i + 1]] || 0) + 1; } });
    return m;
  };
  const draw = () => {
    const m = model(), last = words[words.length - 1], nexts = m[last] || {};
    const total = Object.values(nexts).reduce((a, b) => a + b, 0);
    const ranked = Object.entries(nexts).sort((a, b) => b[1] - a[1]);
    const starts = [...new Set(corpus.map(s => s.split(/\s+/)[0]))];
    el.innerHTML = `
      <div class="xp">
        <div class="xp-title">${window.ICON ? window.ICON("film", 22) : ""} A tiny next-word predictor</div>
        <p class="hint">It learned from ${corpus.length} short sentences by counting which word usually comes next. It only looks at the last word, so it can write things that sound fine but make no sense, like “the matatu is kind”. Big chatbots look at far more words, learned from billions of sentences, but they can still sound right and be wrong.</p>
        <div class="nw-sentence">${words.map(w => esc(w)).join(" ")} <span class="nw-cursor">▌</span></div>
        ${ranked.length ? `<p class="xp-cap">After “${esc(last)}”, it predicts:</p>
          <div class="nw-bars">${ranked.map(([w, c]) => `<button class="nw-bar" data-w="${esc(w)}"><span class="nw-fill" style="width:${Math.round(c / total * 100)}%"></span><b>${esc(w)}</b><span>${Math.round(c / total * 100)}%</span></button>`).join("")}</div>`
          : `<p class="xp-cap">It has never seen anything after “${esc(last)}”, so it has nothing to predict. It only knows what was in its training sentences.</p>`}
        <div class="xp-ctl">
          ${ranked.length ? `<button class="btn small" data-x="auto">Pick the most likely</button>` : ""}
          <button class="btn ghost small" data-x="back" ${words.length > 1 ? "" : "disabled"}>◀ Undo</button>
          <span class="hint">Start with:</span>${starts.map(w => `<button class="opt small" data-s="${esc(w)}">${esc(w)}</button>`).join("")}
        </div>
        <form class="nw-add" data-x="add">
          <label class="q" for="nw-in">Add your own training sentence</label>
          <div style="display:flex;gap:8px"><input class="field" id="nw-in" maxlength="80" placeholder="e.g. the matatu is fast" style="flex:1;min-width:0" /><button class="btn ghost small">Add</button></div>
        </form>
      </div>`;
    el.querySelectorAll("[data-w]").forEach(b => b.onclick = () => { words.push(b.dataset.w); draw(); });
    el.querySelectorAll("[data-s]").forEach(b => b.onclick = () => { words = [b.dataset.s]; draw(); });
    const auto = el.querySelector('[data-x="auto"]'); if (auto) auto.onclick = () => { words.push(ranked[0][0]); draw(); };
    el.querySelector('[data-x="back"]').onclick = () => { if (words.length > 1) words.pop(); draw(); };
    el.querySelector('[data-x="add"]').onsubmit = e => {
      e.preventDefault();
      const v = el.querySelector("#nw-in").value.toLowerCase().replace(/[^a-z\s']/g, " ").trim();
      if (v.split(/\s+/).length >= 2) { corpus.push(v); words = [v.split(/\s+/)[0]]; }
      draw();
    };
  };
  draw();
  return () => {};
}

// Public API: render(id, element) -> cleanup function, or null if the id is unknown
window.EXPLAINERS = {
  ids: [...Object.keys(SCENES), "bits", "logic-gates", "logic-circuit", "decision-tree", "next-word"],
  render(id, el){
    if (id === "bits") return renderBits(el);
    if (id === "logic-gates") return renderGates(el);
    if (id === "logic-circuit") return renderCircuit(el);
    if (id === "decision-tree") return renderDecisionTree(el);
    if (id === "next-word") return renderNextWord(el);
    return SCENES[id] ? renderScene(SCENES[id], el) : null;
  },
};
})();
