#!/usr/bin/env python3
# Assembles content.js for Soma Smart from _data.py. Two tracks, mastery levels, no prizes/XP.
import json, _data as D

course = {
    "title": "Soma Smart",
    "tagline": "Elimu ya kompyuta na intaneti — kwa kila mtu. Free digital-literacy for everyone.",
    "passMark": 4,
    "questionsPerQuiz": 5,
    "retryCooldownSec": 20,
    # Mastery thresholds (best quiz score out of questionsPerQuiz)
    "mastery": {"practised": 4, "mastered": 5},
    "tracks": D.TRACKS,
    "modules": D.MODULES,
}

header = (
 "/* Soma Smart \u2014 free CBC/CBE digital-literacy course content.\n"
 " * Two tracks: 'primary' (Grade 4\u20136, ages ~8\u201310) and 'junior' (Grade 7\u20139, ages ~12\u201315).\n"
 " * Each module: read cards \u2192 listen (narrated) \u2192 watch (optional video) \u2192 mission \u2192 quiz.\n"
 " * Mastery levels (not prizes): locked \u2192 learning \u2192 practised \u2192 mastered.\n"
 " * video.id = YouTube id (\"\" shows a friendly no-video screen). quiz 'a' = index of correct option.\n"
 " * Kenyan, practical references; light Kiswahili/Sheng. Verify technical facts before publishing.\n"
 " */\n"
 "window.COURSE = "
)
open("content.js", "w", encoding="utf-8").write(header + json.dumps(course, indent=1, ensure_ascii=False) + ";\n")

# integrity
mids = [m["id"] for m in course["modules"]]
dupes = {x for x in mids if mids.count(x) > 1}
badq = []
for m in course["modules"]:
    for i, q in enumerate(m["quiz"]):
        if not (0 <= q["a"] < len(q["options"])):
            badq.append(m["id"] + f"[{i}]")
from collections import Counter
c = Counter(m["track"] for m in course["modules"])
print("tracks=%d modules=%d" % (len(course["tracks"]), len(course["modules"])))
for t in course["tracks"]:
    tm = [m for m in course["modules"] if m["track"] == t["id"]]
    print("  %-8s %2d modules: %s" % (t["id"], len(tm), ", ".join(m["id"] for m in tm)))
print("duplicate ids:", dupes or "none")
print("bad answer idx:", badq or "none")
for m in course["modules"]:
    print("   ", m["track"], m["code"], m["id"], "| read", len(m["read"]), "quiz", len(m["quiz"]), "vid", repr(m["video"]["id"]))
