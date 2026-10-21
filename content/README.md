# Editing Tech Tayari lessons

Every module is one Markdown file in `content/primary/` (Grade 4–6), `content/junior/` (Grade 7–9) or `content/senior/` (Grade 10).
To fix a typo or improve a card, open the file on GitHub, click the ✏️ pencil, edit, and propose the change.
You don't need to know any programming.

After a change is merged, someone runs `python3 _build.py`. It turns these files into `content.js`
(the file the app reads) and checks everything first. If something is wrong, it says which file and
which question, and changes nothing.

## The shape of a module file

```markdown
---
id: p-meet                  ← never change an id (learners' progress is saved under it)
track: primary
code: D1                    ← modules are ordered by this number
name: Meet the Computer
part: What's inside the box
cbe: strand                 ← strand (official CBE) or nice (enrichment)
strand: Grade 4–6 · Digital devices & their parts
video:                      ← YouTube video id, or leave empty
video_title:
video_channel:
explainer:                  ← optional animation: input-process-output, memory, network-path, dns-lookup, bits
---

# D1 · Meet the Computer    ← just a title for people, ignored by the build

## Read

### 🖥️ What is a computer?  ← one emoji, a space, then the card title

The card text, as one paragraph.

## Listen

- One sentence per line. These are read aloud.

## Mission: Spot the parts

- A real-world step to try.

Question: The short answer the learner types (used when there are no tasks).

## Quiz

### The question?
- [x] The correct option   ← exactly one [x]
- [ ] A wrong option
- [ ] Another wrong option
Why: One or two sentences that explain the idea. Learners see this big when they get it wrong.
```

Each quiz draws 5 of the module's questions, so keep at least 5 (we aim for 10).

## Mission tasks (optional)

Add `### Task: …` blocks under the mission to make it interactive. When a mission has tasks, the
learner must finish them, and the `- steps` become an optional "Try it for real" list.

| Task | What the learner does | How to write it |
|---|---|---|
| `pick` | Answers questions (graded with `[x]`, or a free choice with plain `- options`) | `#### Question` then options, optional `Why:` |
| `sort` | Puts each item in a bucket | `Buckets: Hardware \| Software` then `- Keyboard → Hardware` |
| `text` | Types a short answer | `Min: 3`, optional `Reject: new folder \| untitled`, `Hint:` |
| `typing` | Types text exactly (paste is blocked) | `Target: Tech Tayari Kenya` |
| `paste` | Pastes text (practises copy + paste) | `Target: …` |
| `flags` | Taps the red flags in a message | `Header: Email · Inbox`, then `- line` items; a red flag gets an indented `  > 🚩 why` line |
| `order` | Taps steps in the right order | `1. First step` with an indented `   > note` line, in the correct order |

Any task can start with `Label: instructions shown above it`. See `junior/C6-stay-safe-smart-online.md`
and `primary/D2-mouse-keyboard.md` for full examples.

## House style

- Practical Kenyan examples; light Kiswahili/Sheng is welcome. No pop culture.
- KSh, not other currencies.
- Technical facts are checked by the owner before release, especially C6, C9 and C10.
