#!/usr/bin/env python3
"""Quiz quality check: is the correct answer given away by being the longest option?

Usage:  python3 tools/quiz_check.py [content/<track>/<file>.md ...]   (default: all modules)

For each module it prints how many questions have the correct answer as the single longest option,
the chance of passing (4 of 5) by always picking the longest option, short "Why:" lines and joke
distractors. Aim for: longest-correct no more than about 3 of 10, and under 10% chance of passing by always picking the
longest (or always the shortest) option.
"""
import itertools, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
JOKE = re.compile(r"\b(weekends?|football|lazy|dream|pizza|magic|banana|sleep, eat)\b", re.I)


def quiz_of(path):
    text = path.read_text(encoding="utf-8")
    part = text.split("\n## Quiz", 1)[1] if "\n## Quiz" in text else ""
    out = []
    for block in re.split(r"\n### ", part)[1:]:
        lines = block.strip().split("\n")
        opts = [(l[6:].strip(), l[3] == "x") for l in lines if re.match(r"- \[[ x]\] ", l)]
        why = next((l[4:].strip() for l in lines if l.startswith("Why:")), "")
        out.append({"q": lines[0].strip(), "opts": [o for o, _ in opts], "a": [i for i, (_, c) in enumerate(opts) if c][0], "why": why})
    return out


def longest_chance(q, pick=max):
    lens = [len(o) for o in q["opts"]]
    top = [i for i, l in enumerate(lens) if l == pick(lens)]
    return 1 / len(top) if q["a"] in top else 0.0


def pass_by_length(qs, pick=max, n=5, need=4):
    p = [longest_chance(q, pick) for q in qs]
    tot = cnt = 0
    for combo in itertools.combinations(range(len(p)), n):
        dist = [1.0]
        for x in (p[i] for i in combo):
            dist = [(dist[k] if k < len(dist) else 0) * (1 - x) + (dist[k - 1] if k else 0) * x for k in range(len(dist) + 1)]
        tot += sum(dist[need:]); cnt += 1
    return tot / cnt if cnt else 0


files = [pathlib.Path(a) for a in sys.argv[1:]] or sorted(p for p in (ROOT / "content").glob("*/*.md") if not p.name.startswith("_"))
worst = 0
for f in files:
    qs = quiz_of(f)
    if not qs:
        continue
    lc = sum(1 for q in qs if longest_chance(q) == 1)
    pr = max(pass_by_length(qs, max), pass_by_length(qs, min))   # always-longest or always-shortest guessing
    short = sum(1 for q in qs if len(q["why"]) < 45)
    jokes = [o for q in qs for i, o in enumerate(q["opts"]) if i != q["a"] and JOKE.search(o)]
    worst = max(worst, pr)
    flag = "  <-- fix" if lc > 3 or pr >= 0.10 or short or jokes else ""
    print(f"{f.parent.name}/{f.name:42} longest-correct {lc:2}/{len(qs)}  guess-pass(longest or shortest) {pr*100:3.0f}%  short-why {short}  jokes {len(jokes)}{flag}")
print(f"\nworst guess-pass chance: {worst*100:.0f}%")
