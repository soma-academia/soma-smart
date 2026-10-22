---
id: s-control
track: senior
code: S10
name: Decisions & Loops
part: Control structures in Python
cbe: strand
strand: Grade 10 · 3.4 Control Structures
video:
video_title:
video_channel:
explainer:
---

# S10 · Decisions & Loops

## Read

### 🛤️ Three control structures

Every program is built from three structures. Sequence: steps run one after another. Selection: the program chooses a path with if. Iteration: the program repeats steps with a loop. Combine these and you can solve almost any problem.

### 🔀 Selection with if, elif and else

if checks a condition; elif ("else if") checks another; else runs when none matched. For example: if marks >= 80, print "A"; elif marks >= 50, print "Pass"; else print "Try again". Python uses a colon and indentation (usually 4 spaces) to show which lines belong to each branch.

### 🔁 for loops

A for loop repeats once for each item. range(5) gives 0, 1, 2, 3, 4 (five numbers, starting at 0). range(1, 6) gives 1 to 5. Example: for i in range(3): print(i) prints 0, then 1, then 2.

### ⏳ while loops

A while loop repeats as long as a condition is True, which suits cases where you don't know how many repeats are needed, like asking for a PIN until it is correct. Make sure something inside the loop changes the condition, or it will loop forever.

### ⛔ break and continue

break leaves a loop immediately, for example when you find what you were searching for. continue skips the rest of this round and jumps to the next one, for example to skip negative numbers. Use them sparingly, to keep loops easy to follow.

## Listen

- Programs use three structures: sequence, selection and iteration.
- if, elif and else choose which path the program takes.
- Python uses a colon and indentation to show what belongs to each part.
- A for loop repeats once for each item, and range starts counting at zero.
- A while loop repeats as long as a condition stays true.
- Make sure a while loop's condition eventually becomes false.
- break leaves a loop; continue skips to the next round.

## Mission: Program a grader

- Write a program that inputs a mark and prints A for 80 and above, Pass for 50 to 79, and Try again below 50.
- Write a loop that prints the 7 times table from 7 × 1 to 7 × 12.

Question: Your grader program, or how you planned it.

### Task: order
Label: Put these steps in order for a grading program.
1. Ask the user for a mark
   > input() reads it as text.
2. Convert the mark to a number
   > int() so we can compare it.
3. If the mark is 80 or more, print A
   > The first, highest condition is checked first.
4. Else if the mark is 50 or more, print Pass
   > elif is only checked if the first condition was False.
5. Otherwise, print Try again
   > else catches every remaining case.

### Task: pick

#### What does for i in range(3): print(i) print?
- [ ] 1 2 3
- [x] 0 1 2
- [ ] 0 1 2 3
- [ ] 3 3 3
Why: range(3) starts at 0 and stops before 3, giving three numbers: 0, 1, 2.

#### Which loop suits "keep asking for the PIN until it is correct"?
- [ ] A for loop over range(10)
- [x] A while loop
- [ ] No loop
- [ ] An if statement only
Why: You don't know in advance how many tries it will take, so loop while the PIN is wrong.

#### In a loop, what does break do?
- [ ] Skips to the next round
- [x] Leaves the loop immediately
- [ ] Restarts the program
- [ ] Deletes the loop
Why: break exits the whole loop; continue only skips the rest of the current round.

## Quiz

### Which structure repeats steps?
- [ ] Sequence
- [ ] Selection
- [x] Iteration
- [ ] Declaration
Why: Iteration means looping: a for or while loop runs the same block of steps again and again.

### What does range(1, 6) produce?
- [ ] 1, 2, 3, 4, 5, 6
- [x] 1, 2, 3, 4, 5
- [ ] 0, 1, 2, 3, 4, 5
- [ ] 2, 3, 4, 5
Why: range starts at the first number and stops just before the second, so range(1, 6) never includes 6.

### In Python, how do you show which lines belong inside an if?
- [ ] With curly brackets around the block
- [x] With a colon after the condition, then indented lines
- [ ] With a semicolon at the end of each line
- [ ] With the word end after the last line
Why: Python uses indentation, not brackets, to group lines into a block.

### If marks = 65, what does this print: if marks >= 80: A / elif marks >= 50: Pass / else: Try again?
- [ ] A
- [x] Pass
- [ ] Try again
- [ ] Nothing
Why: 65 is not ≥ 80, so the elif is checked, and 65 ≥ 50 is True, so it prints Pass.

### When does a while loop stop?
- [x] When its condition becomes False
- [ ] After exactly ten rounds, whatever the condition
- [ ] When its condition becomes True
- [ ] When the last line of the program has run
Why: A while loop checks its condition before every round and keeps going as long as it is True.

### What is an infinite loop?
- [ ] A loop that runs so fast it finishes instantly
- [x] A loop whose condition never becomes False
- [ ] A loop that runs only once and then stops
- [ ] A for loop that goes through every item of a list
Why: If nothing inside the loop changes the condition, it runs forever and the program hangs.

### What does continue do inside a loop?
- [ ] Stops the whole program straight away
- [ ] Leaves the loop and carries on after it
- [x] Skips the rest of this round and starts the next
- [ ] Runs the same round again from its top
Why: continue skips the rest of the current round only, which is useful for ignoring unwanted items such as negative numbers; break is the one that leaves the loop.

### How many times does for i in range(5): print("Hi") print Hi?
- [ ] 4
- [x] 5
- [ ] 6
- [ ] 1
Why: range(5) gives five numbers (0 to 4), so the loop runs five times.

### Which keyword means "otherwise, check this condition"?
- [ ] else
- [x] elif
- [ ] while
- [ ] break
Why: elif adds another condition, checked only if the earlier ones were False.

### Sequence means...
- [x] Steps run one after another in order
- [ ] Steps are chosen by a condition
- [ ] Steps are repeated until a condition is met
- [ ] Steps are skipped when they are not needed
Why: Sequence is the default: the computer runs each line in order unless told otherwise.
