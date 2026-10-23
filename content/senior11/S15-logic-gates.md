---
id: s11-gates
track: senior11
code: S15
name: Logic Gates
part: Gates, truth tables and Boolean expressions
cbe: strand
strand: Grade 11 · 1.3 Logic Gates
video:
video_title:
video_channel:
explainer: logic-gates
---

# S15 · Logic Gates

## Read

### 🚦 What a logic gate is

A logic gate is a tiny electronic circuit that takes one or more inputs, each 0 (off) or 1 (on), and gives one output. Gates are built from transistors, and billions of them inside a CPU (Central Processing Unit) make every decision a computer takes.

### ✳️ AND, OR, NOT

AND gives 1 only when all inputs are 1, like a lift that moves only when the door is closed AND a button is pressed. OR gives 1 when at least one input is 1. NOT has one input and flips it: 1 becomes 0 and 0 becomes 1.

### 🔄 NAND, NOR, XOR, XNOR

NAND is NOT AND: it gives 0 only when all inputs are 1. NOR is NOT OR: it gives 1 only when all inputs are 0. XOR (exclusive OR) gives 1 when the inputs are different. XNOR gives 1 when they are the same. NAND and NOR are called universal gates, because any other gate can be built from them alone.

### 📋 Truth tables

A truth table lists every possible input combination and the output for each. Two inputs give 4 rows (00, 01, 10, 11); three inputs give 8 rows. It is the clearest way to describe exactly what a gate or circuit does.

### ✍️ Boolean expressions

Gates can be written as Boolean algebra: A · B (or AB) for A AND B, A + B for A OR B, Ā (A with a bar, also written A′) for NOT A, and A ⊕ B for XOR. So Q = Ā · B means "output Q is 1 when A is 0 AND B is 1".

## Listen

- A logic gate takes inputs of zero or one and gives a single output.
- AND needs all inputs on; OR needs at least one.
- NOT flips its input.
- NAND and NOR are the opposites of AND and OR, and they can build any other gate.
- XOR is on when the inputs differ; XNOR when they match.
- A truth table lists every input combination and its output.
- In Boolean algebra, a dot means AND, a plus means OR, and a bar means NOT.

## Mission: Gates in real life

- Use the explainer above: test each gate with all four input combinations and write its truth table.
- Find one real-life example of an AND decision and one of an OR decision at home or school.

Question: Your two real-life examples, and which gate each one matches.

### Task: pick

#### A = 1, B = 1. What does an XOR gate output?
- [ ] 1
- [x] 0
Why: XOR gives 1 only when the inputs are different; here they are the same.

#### A = 0, B = 0. What does a NOR gate output?
- [x] 1
- [ ] 0
Why: NOR is NOT OR. 0 OR 0 = 0, and NOT 0 = 1.

#### A = 1, B = 1. What does a NAND gate output?
- [ ] 1
- [x] 0
Why: NAND is NOT AND. 1 AND 1 = 1, and NOT 1 = 0. It is the only case where NAND gives 0.

#### Which gate gives 1 when at least one input is 1?
- [ ] AND
- [x] OR
- [ ] NOR
- [ ] XNOR
Why: OR needs any one input on.

### Task: sort
Label: Match each description to its gate.
Buckets: AND | OR | NOT | XOR
- Output is 1 only when both inputs are 1 → AND
- Flips the single input → NOT
- Output is 1 when the inputs are different → XOR
- Output is 1 if any input is 1 → OR
- Written as A · B → AND
- Written as A + B → OR

## Quiz

### How many rows does a truth table for 3 inputs have?
- [ ] 3
- [ ] 6
- [x] 8
- [ ] 9
Why: Each input doubles the number of combinations, so 3 inputs give 2 × 2 × 2 = 8 rows.

### Which gate has only one input?
- [ ] AND
- [ ] XOR
- [x] NOT
- [ ] NAND
Why: NOT simply flips its single input, so 0 becomes 1 and 1 becomes 0; the other gates combine two or more inputs.

### What is the output of AND when A = 1 and B = 0?
- [ ] 1
- [x] 0
Why: AND outputs 1 only when every input is 1; here B is 0, so the output is 0.

### Why are NAND and NOR called universal gates?
- [ ] They are the only gates that can be made from transistors
- [x] Any other gate can be built from only NAND, or only NOR, gates
- [ ] They work with any number of inputs, from one up to eight
- [ ] They give the correct output whatever voltage is supplied to them
Why: Chip makers can build whole circuits from one type of gate, which simplifies manufacturing.

### In Boolean algebra, A + B means...
- [ ] A plus B in arithmetic
- [x] A OR B
- [ ] A AND B
- [ ] NOT A
Why: In Boolean algebra, + stands for OR and the dot stands for AND.

### XNOR outputs 1 when...
- [ ] The inputs are different
- [x] The inputs are the same
- [ ] Both inputs are 0 only
- [ ] Never
Why: XNOR is NOT XOR, so it is on for matching inputs (00 or 11).

### A lift should move only if the door is closed AND a floor button is pressed. Which gate fits?
- [x] AND
- [ ] OR
- [ ] NOT
- [ ] XOR
Why: AND outputs 1 only when both conditions are true at the same time; OR would let the lift move with the door open.

### A = 0. What is NOT A?
- [ ] 0
- [x] 1
Why: NOT always gives the opposite of its input, so an input of 0 gives an output of 1.

### Logic gates inside a chip are built from...
- [ ] Vacuum tubes
- [x] Transistors
- [ ] Magnets
- [ ] Batteries
Why: Modern chips pack billions of tiny transistor switches to make gates.

### What does a truth table show?
- [ ] The cost of each gate and the total cost of the circuit
- [x] The output for every possible combination of inputs
- [ ] Only the inputs, listed from the smallest to the largest
- [ ] The speed at which each gate switches between 0 and 1
Why: Listing every combination leaves no case undescribed.
