#!/usr/bin/env python3
# Compiles content/<track>/*.md into content.js for Soma Smart. Two tracks, mastery levels, no prizes/XP.
# Content lives in Markdown so teachers can fix a card in GitHub's web editor; the format is described
# in content/README.md. Standard library only. Nothing is written unless every check passes.
import json, re, sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CONTENT = ROOT / "content"
TASK_TYPES = {"pick", "sort", "text", "typing", "paste", "flags", "order"}
# Animated explainers available in explainers.js (keep in sync with its SCENES + "bits")
EXPLAINERS = {"input-process-output", "memory", "network-path", "dns-lookup", "bits"}
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
    "title": "Soma Smart",
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
 "/* Soma Smart — free CBE digital-literacy course content.\n"
 " * Two tracks: 'primary' (Grade 4–6, ages 9–11) and 'junior' (Grade 7–9, ages 12–15).\n"
 " * Each module: read cards → listen (narrated) → watch (optional video) → mission → quiz.\n"
 " * Mastery levels (not prizes): new → learning → practised → mastered.\n"
 " * video.id = YouTube id (\"\" shows a friendly no-video screen). quiz 'a' = index of correct option.\n"
 " * Kenyan, practical references; light Kiswahili/Sheng. Verify technical facts before publishing.\n"
 " */\n"
 "window.COURSE = "
)
(ROOT / "content.js").write_text(header + json.dumps(course, indent=1, ensure_ascii=False) + ";\n", encoding="utf-8")

print("tracks=%d modules=%d" % (len(TRACKS), len(MODULES)))
for t in TRACKS:
    tm = [m for m in MODULES if m["track"] == t["id"]]
    print("  %-8s %2d modules: %s" % (t["id"], len(tm), ", ".join(m["id"] for m in tm)))
for m in MODULES:
    print("   ", m["track"], m["code"], m["id"], "| read", len(m["read"]), "quiz", len(m["quiz"]),
          "tasks", len(m["mission"].get("tasks", [])), "vid", repr(m["video"]["id"]))
print("content.js written, all checks passed")
