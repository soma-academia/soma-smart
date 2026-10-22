#!/usr/bin/env python3
# Compiles content/<track>/*.md into content.js for Tech Tayari. Four tracks, mastery levels, no prizes/XP.
# Content lives in Markdown so teachers can fix a card in GitHub's web editor; the format is described
# in content/README.md. Standard library only. Nothing is written unless every check passes.
import json, re, sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CONTENT = ROOT / "content"
TASK_TYPES = {"pick", "sort", "text", "typing", "paste", "flags", "order"}
# Animated explainers available in explainers.js (keep in sync with its SCENES + "bits")
EXPLAINERS = {"input-process-output", "memory", "network-path", "dns-lookup", "bits", "logic-gates", "logic-circuit", "decision-tree", "next-word"}
errors = []


def fail(where, msg):
    errors.append(f"{where}: {msg}")


# ---------- small Markdown helpers ----------
def front_matter(path, text):
    if not text.startswith("---\n") or "\n---\n" not in text[3:]:
        fail(path, "must start with a front-matter block between two --- lines")
        return {}, text
    end = text.index("\n---\n", 3)
    meta = {}
    for line in text[4:end].splitlines():
        if line.strip():
            key, sep, val = line.partition(":")
            if not sep:
                fail(path, f"front-matter line without 'key: value': {line!r}")
            meta[key.strip()] = val.strip()
    return meta, text[end + 5:]


def sections(lines, level):
    """Split lines on headings of exactly `level` #'s -> [(heading or None, lines)]."""
    mark, out = "#" * level + " ", [(None, [])]
    for ln in lines:
        if ln.startswith(mark):
            out.append((ln[len(mark):].strip(), []))
        else:
            out[-1][1].append(ln)
    return out


def field(lines, key, default=None):
    """A 'Key: value' line at the start of a line."""
    for ln in lines:
        if ln.startswith(key + ":"):
            return ln[len(key) + 1:].strip()
    return default


def list_items(lines):
    """'- text' or '1. text' items, each with an optional indented '> note' line -> [(text, note)]."""
    out = []
    for ln in lines:
        m = re.match(r"^(?:- |\d+\. )(.*)$", ln)
        if m:
            out.append([m.group(1).strip(), None])
        elif ln[:1] in (" ", "\t") and ln.strip().startswith(">") and out:
            out[-1][1] = ln.strip()[1:].strip()
    return out


def checkbox(text):
    """'[x] option' / '[ ] option' -> (option, ticked); plain text -> (text, None)."""
    m = re.match(r"^\[([ xX])\] (.*)$", text)
    return (m.group(2), m.group(1).lower() == "x") if m else (text, None)


def answer_of(where, opts):
    ticks = [i for i, (_, x) in enumerate(opts) if x]
    if len(ticks) != 1:
        fail(where, f"mark exactly one correct option with [x] (found {len(ticks)})")
        return 0
    return ticks[0]


# ---------- parsing ----------
def parse_task(where, kind, lines):
    label = field(lines, "Label", "")
    if kind == "pick":
        rounds = []
        for q, body in sections(lines, 4)[1:]:
            opts = [checkbox(t) for t, _ in list_items(body)]
            graded = any(x is not None for _, x in opts)
            rounds.append({"q": q, "options": [o for o, _ in opts],
                           "answer": answer_of(f"{where} '{q[:40]}'", opts) if graded else None,
                           "why": field(body, "Why", "")})
        if not rounds:
            fail(where, "a pick task needs at least one #### question")
        return {"type": "pick", "label": label, "rounds": rounds}
    if kind == "sort":
        buckets = [b.strip() for b in field(lines, "Buckets", "").split("|") if b.strip()]
        items = []
        for t, _ in list_items(lines):
            text, sep, b = t.rpartition(" → ")
            if not sep or b.strip() not in buckets:
                fail(where, f"sort item must be 'text → one of {buckets}': {t!r}")
                continue
            items.append({"t": text.strip(), "b": buckets.index(b.strip())})
        return {"type": "sort", "label": label, "buckets": buckets, "items": items}
    if kind == "text":
        reject = field(lines, "Reject", "")
        return {"type": "text", "label": label, "min": int(field(lines, "Min", "1")),
                "reject": [r.strip() for r in reject.split("|") if r.strip()], "hint": field(lines, "Hint", "")}
    if kind in ("typing", "paste"):
        return {"type": kind, "label": label, "target": field(lines, "Target", "")}
    if kind == "flags":
        segs = [{"t": t, "flag": re.sub(r"^🚩\s*", "", n) if n else None} for t, n in list_items(lines)]
        return {"type": "flags", "label": label, "header": field(lines, "Header", ""), "segments": segs}
    if kind == "order":
        return {"type": "order", "label": label, "items": [{"t": t, "note": n or ""} for t, n in list_items(lines)]}
    fail(where, f"unknown task type {kind!r} (use one of {sorted(TASK_TYPES)})")
    return {"type": kind}


def parse_module(path):
    where = path.relative_to(ROOT).as_posix()
    meta, body = front_matter(where, path.read_text(encoding="utf-8"))
    for key in ("id", "track", "code", "name", "part", "cbe"):
        if not meta.get(key):
            fail(where, f"front matter is missing '{key}'")
    parts = {}
    for heading, lines in sections(body.splitlines(), 2)[1:]:
        name, _, rest = heading.partition(":")
        parts[name.strip().lower()] = (rest.strip(), lines)
    for need in ("read", "listen", "mission", "quiz"):
        if need not in parts:
            fail(where, f"missing a '## {need.title()}' section")
            parts.setdefault(need, ("", []))

    read = []
    for heading, lines in sections(parts["read"][1], 3)[1:]:
        icon, _, title = heading.partition(" ")
        read.append({"icon": icon, "title": title.strip(), "text": " ".join(l.strip() for l in lines if l.strip())})

    title, mlines = parts["mission"]
    intro, *task_secs = sections(mlines, 3)
    mission = {"title": title, "steps": [t for t, _ in list_items(intro[1])], "question": field(intro[1], "Question", "")}
    tasks = []
    for heading, lines in task_secs:
        kind = heading.partition(":")[2].strip().lower() if heading.lower().startswith("task:") else ""
        tasks.append(parse_task(f"{where} task {len(tasks) + 1}", kind, lines))
    if tasks:
        mission["tasks"] = tasks

    quiz = []
    for q, lines in sections(parts["quiz"][1], 3)[1:]:
        opts = [checkbox(t) for t, _ in list_items(lines)]
        quiz.append({"q": q, "options": [o for o, _ in opts], "a": answer_of(f"{where} quiz '{q[:40]}'", opts),
                     "why": field(lines, "Why", "")})

    return {
        "track": meta.get("track"),
        "id": meta.get("id"),
        "code": meta.get("code"),
        "name": meta.get("name"),
        "part": meta.get("part"),
        "read": read,
        "listen": [t for t, _ in list_items(parts["listen"][1])],
        "video": {"id": meta.get("video", ""), "title": meta.get("video_title", ""), "channel": meta.get("video_channel", "")},
        "mission": mission,
        "quiz": quiz,
        "cbe": meta.get("cbe"),
        "strandRef": meta.get("strand") or None,
        "explainer": meta.get("explainer", ""),
    }


def code_number(m):
    n = re.sub(r"\D", "", m["code"] or "")
    return int(n) if n else 0


tracks_meta = []
for f in sorted(CONTENT.glob("*/_track.md")):
    meta, _ = front_matter(f.relative_to(ROOT).as_posix(), f.read_text(encoding="utf-8"))
    tracks_meta.append(meta)
tracks_meta.sort(key=lambda t: int(t.get("order", 99)))
TRACKS = [{"id": t["id"], "name": t["name"], "level": t["level"], "blurb": t["blurb"]} for t in tracks_meta]
track_ids = [t["id"] for t in TRACKS]

MODULES = [parse_module(f) for f in sorted(CONTENT.glob("*/*.md")) if not f.name.startswith("_")]
for m in MODULES:
    if m["track"] not in track_ids:
        fail(m["id"], f"track {m['track']!r} has no content/{m['track']}/_track.md")
MODULES.sort(key=lambda m: (track_ids.index(m["track"]) if m["track"] in track_ids else 99, code_number(m)))

course = {
    "title": "Tech Tayari",
    "tagline": "Free computer and internet literacy for everyone.",
    "passMark": 4,
    "questionsPerQuiz": 5,
    # Mastery thresholds (best quiz score out of questionsPerQuiz)
    "mastery": {"practised": 4, "mastered": 5},
    "tracks": TRACKS,
    "modules": MODULES,
}

# ---------- integrity: a broken quiz or task could make a module impossible to pass ----------
mids = [m["id"] for m in MODULES]
for x in {x for x in mids if mids.count(x) > 1}:
    fail(x, "duplicate module id")
for m in MODULES:
    if m["explainer"] and m["explainer"] not in EXPLAINERS:
        fail(m["id"], f"unknown explainer {m['explainer']!r} (use one of {sorted(EXPLAINERS)})")
    if m["video"]["id"] and not re.fullmatch(r"[A-Za-z0-9_-]{11}", m["video"]["id"]):
        fail(m["id"], "video must be an 11-character YouTube id (the part after watch?v=)")
    if m["cbe"] not in ("strand", "nice"):
        fail(m["id"], "cbe must be 'strand' or 'nice'")
    if len(m["quiz"]) < course["questionsPerQuiz"]:
        fail(m["id"], f"needs at least {course['questionsPerQuiz']} quiz questions")
    for q in m["quiz"]:
        if len(q["options"]) < 2:
            fail(m["id"], f"quiz question needs 2+ options: {q['q'][:40]!r}")
    for i, t in enumerate(m["mission"].get("tasks", []), 1):
        where, ty = f"{m['id']} task {i}", t.get("type")
        if ty == "pick" and any(len(r["options"]) < 2 for r in t["rounds"]):
            fail(where, "every pick question needs 2+ options")
        elif ty == "sort" and (len(t["buckets"]) < 2 or not t["items"]):
            fail(where, "needs 2+ Buckets and at least one item")
        elif ty in ("typing", "paste") and not t["target"]:
            fail(where, "needs a Target")
        elif ty == "flags" and not any(sg["flag"] for sg in t["segments"]):
            fail(where, "needs at least one red flag (an indented '> 🚩 why' line)")
        elif ty == "order" and len(t["items"]) < 2:
            fail(where, "needs 2+ numbered items")

if errors:
    print("Content errors (content.js NOT written):", *errors, sep="\n  ")
    sys.exit(1)

header = (
 "/* Tech Tayari — free CBE digital-literacy course content.\n"
 " * Four tracks: 'primary' (Grade 4–6), 'junior' (Grade 7–9), 'senior' (Grade 10) and 'senior11' (Grade 11).\n"
 " * Each module: read cards → listen (narrated) → watch (optional video) → mission → quiz.\n"
 " * Mastery levels (not prizes): new → learning → practised → mastered.\n"
 " * video.id = YouTube id (\"\" shows a friendly no-video screen). quiz 'a' = index of correct option.\n"
 " * Kenyan, practical references; light Kiswahili/Sheng. Verify technical facts before publishing.\n"
 " */\n"
 "window.COURSE = "
)
(ROOT / "content.js").write_text(header + json.dumps(course, indent=1, ensure_ascii=False) + ";\n", encoding="utf-8")

# ---------- search-engine pages: one static page per lesson, a lesson index, sitemap.xml, robots.txt ----------
# The app itself renders with JavaScript at "/", so search engines see little of it. These plain pages give every
# lesson its own address and readable text, then hand over to the interactive lesson. Output is deterministic,
# so rebuilding without content changes leaves the files untouched.
import html as _html
SITE_URL = "https://tech-tayari.pages.dev"   # change here (and in index.html) when the custom domain is live
SITE_NAME = "Tech Tayari"
OG_IMAGE = SITE_URL + "/og-image.jpg"
LEARN = ROOT / "learn"
H = lambda x: _html.escape(str(x or ""), quote=True)
slugify = lambda x: re.sub(r"[^a-z0-9]+", "-", x.lower()).strip("-")
lesson_slug = lambda m: f"{m['code'].lower()}-{slugify(m['name'])}"
track_by_id = {t["id"]: t for t in TRACKS}
GRADE = {"primary": "Grade 4–6", "junior": "Grade 7–9", "senior": "Grade 10", "senior11": "Grade 11", "ai": "Grade 7–11"}

def jsonld(obj):
    return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False).replace("</", "<\\/") + "</script>"

def page(title, desc, path, body, ld):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{H(title)}</title>
<meta name="description" content="{H(desc)}" />
<link rel="canonical" href="{SITE_URL}{path}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="{SITE_NAME}" />
<meta property="og:title" content="{H(title)}" />
<meta property="og:description" content="{H(desc)}" />
<meta property="og:url" content="{SITE_URL}{path}" />
<meta property="og:image" content="{OG_IMAGE}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="theme-color" content="#2e7d4f" />
<link rel="icon" type="image/svg+xml" href="/icon.svg" />
<link rel="preload" href="/fonts/nunito-latin.woff2" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="/styles.css" />
{jsonld(ld)}
</head>
<body class="lp">
<header id="top"><a class="brand" href="/">Tech<span>Tayari</span></a></header>
<main id="app">
{body}
</main>
<footer id="foot">
  <div class="foot-row">
    <span>Free &amp; open digital literacy for everyone</span>
    <span class="foot-links"><a href="/learn/">All lessons</a> <a href="/about">About</a> <a href="/privacy">Privacy</a> <a href="/licences">Licences</a></span>
  </div>
  <span class="muted">Lessons © 2026 Tech Tayari, licensed CC BY-NC-SA 4.0. An independent project, not affiliated with KICD, KNEC or the Ministry of Education.</span>
</footer>
</body>
</html>
"""

def lesson_page(m, prev_m, next_m):
    t = track_by_id[m["track"]]
    path = f"/learn/{lesson_slug(m)}"
    title = f"{m['name']} ({m['code']}) · {t['name']}, {GRADE.get(t['id'], '')} · {SITE_NAME}"
    first = m["read"][0]["text"] if m["read"] else m["part"]
    desc = (f"{m['part']}. {first}")[:155].rsplit(" ", 1)[0] + "…" if len(f"{m['part']}. {first}") > 155 else f"{m['part']}. {first}"
    cards = "\n".join(f'<section class="lp-card"><h2><span aria-hidden="true">{H(c["icon"])}</span> {H(c["title"])}</h2><p>{H(c["text"])}</p></section>' for c in m["read"])
    points = "".join(f"<li>{H(x)}</li>" for x in m["listen"])
    steps = "".join(f"<li>{H(x)}</li>" for x in m["mission"]["steps"])
    nav = " ".join(x for x in [
        f'<a href="/learn/{lesson_slug(prev_m)}">← {H(prev_m["code"])} {H(prev_m["name"])}</a>' if prev_m else "",
        f'<a href="/learn/{lesson_slug(next_m)}">{H(next_m["code"])} {H(next_m["name"])} →</a>' if next_m else ""] if x)
    strand = f'<span class="lp-tag">{H(m["strandRef"])}</span>' if m.get("strandRef") else ""
    body = f"""<nav class="lp-crumbs"><a href="/learn/">Lessons</a> › <a href="/learn/#{H(t['id'])}">{H(t['name'])}</a></nav>
<article class="lp-main">
  <p class="lp-kicker">{H(m['code'])} · {H(t['name'])} · {H(t['level'])}</p>
  <h1>{H(m['name'])}</h1>
  <p class="lp-lead">{H(m['part'])}</p>
  <p>{strand}<span class="lp-tag">{"CBE strand" if m["cbe"] == "strand" else "Going further"}</span><span class="lp-tag">Free · works offline</span></p>
  <a class="btn lp-start" href="/?lesson={H(m['id'])}">▶ Start the interactive lesson</a>
  <p class="hint">The full lesson adds narration, an interactive mission and a {len(m['quiz'])}-question bank, and the quiz explains any mistakes.</p>
  {cards}
  <section class="lp-card"><h2>Key points</h2><ul>{points}</ul></section>
  <section class="lp-card"><h2>Try it for real: {H(m['mission']['title'])}</h2><ul>{steps}</ul></section>
  <a class="btn lp-start" href="/?lesson={H(m['id'])}">▶ Start the interactive lesson</a>
  <nav class="lp-nav">{nav}</nav>
</article>"""
    ld = {"@context": "https://schema.org", "@type": "LearningResource", "name": m["name"], "description": desc,
          "url": SITE_URL + path, "learningResourceType": "Lesson", "educationalLevel": GRADE.get(t["id"], t["level"]),
          "inLanguage": "en-KE", "isAccessibleForFree": True, "image": OG_IMAGE,
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
          "teaches": [c["title"] for c in m["read"]],
          "isPartOf": {"@type": "Course", "name": f"{t['name']} ({t['level']})", "url": f"{SITE_URL}/learn/#{t['id']}"},
          "provider": {"@type": "Organization", "name": SITE_NAME, "url": SITE_URL}}
    return path, page(title, desc, path, body, ld)

def learn_index():
    blocks, courses = [], []
    for t in TRACKS:
        tm = [m for m in MODULES if m["track"] == t["id"]]
        items = "".join(f'<li><a href="/learn/{lesson_slug(m)}"><b>{H(m["code"])}</b> {H(m["name"])}</a> <span class="hint">{H(m["part"])}</span></li>' for m in tm)
        blocks.append(f'<section class="lp-card" id="{H(t["id"])}"><h2>{H(t["name"])} <span class="hint">{H(t["level"])}</span></h2><p>{H(t["blurb"])}</p><ul class="lp-list">{items}</ul></section>')
        courses.append({"@type": "Course", "name": f"{t['name']} ({t['level']})", "description": t["blurb"],
                        "url": f"{SITE_URL}/learn/#{t['id']}", "inLanguage": "en-KE", "isAccessibleForFree": True,
                        "provider": {"@type": "Organization", "name": SITE_NAME, "url": SITE_URL}})
    body = f"""<article class="lp-main"><h1>All lessons</h1>
<p class="lp-lead">Free computer and internet lessons for Kenyan learners, Grade 4–11. Every lesson works offline and needs no account.</p>
<a class="btn lp-start" href="/">▶ Open Tech Tayari</a>
{"".join(blocks)}</article>"""
    ld = {"@context": "https://schema.org", "@type": "ItemList", "name": "Tech Tayari courses",
          "itemListElement": [{"@type": "ListItem", "position": i + 1, "item": c} for i, c in enumerate(courses)]}
    return page(f"All lessons · {SITE_NAME}", "Every Tech Tayari lesson, from Grade 4 digital basics to Grade 11 Computer Studies: free, offline and mapped to Kenya's CBE curriculum.", "/learn/", body, ld)

def write_if_changed(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists() or path.read_text(encoding="utf-8") != text:
        path.write_text(text, encoding="utf-8")

wanted = set()
for t in TRACKS:
    tm = [m for m in MODULES if m["track"] == t["id"]]
    for i, m in enumerate(tm):
        path, html_text = lesson_page(m, tm[i - 1] if i else None, tm[i + 1] if i + 1 < len(tm) else None)
        f = LEARN / (path.rsplit("/", 1)[1] + ".html")
        wanted.add(f.name); write_if_changed(f, html_text)
write_if_changed(LEARN / "index.html", learn_index()); wanted.add("index.html")
for old in LEARN.glob("*.html"):
    if old.name not in wanted:
        old.unlink()   # lesson renamed or removed

urls = ["/", "/learn/", "/about", "/privacy", "/licences"] + [f"/learn/{lesson_slug(m)}" for m in MODULES]
write_if_changed(ROOT / "sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
                 + "".join(f"  <url><loc>{SITE_URL}{u}</loc></url>\n" for u in urls) + "</urlset>\n")
write_if_changed(ROOT / "robots.txt", f"User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /insights\n\nSitemap: {SITE_URL}/sitemap.xml\n")

print("tracks=%d modules=%d" % (len(TRACKS), len(MODULES)))
for t in TRACKS:
    tm = [m for m in MODULES if m["track"] == t["id"]]
    print("  %-8s %2d modules: %s" % (t["id"], len(tm), ", ".join(m["id"] for m in tm)))
for m in MODULES:
    print("   ", m["track"], m["code"], m["id"], "| read", len(m["read"]), "quiz", len(m["quiz"]),
          "tasks", len(m["mission"].get("tasks", [])), "vid", repr(m["video"]["id"]))
print(f"lesson pages: {len(MODULES)} in learn/, plus learn/index.html, sitemap.xml ({len(urls)} URLs), robots.txt")
print("content.js written, all checks passed")
