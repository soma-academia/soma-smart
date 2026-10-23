---
id: s11-circuits
track: senior11
code: S16
name: Logic Circuits
part: Combining gates to solve problems
cbe: strand
strand: Grade 11 · 1.4 Logic Circuits
video:
video_title:
video_channel:
explainer: logic-circuit
---

# S16 · Logic Circuits

## Read

### 🔗 From gates to circuits

A logic circuit joins gates together so the output of one gate becomes the input of another. With a few gates you can describe real rules, like "sound the alarm if the system is armed AND a door OR a window opens".

### 🚨 A burglar alarm circuit

Let A = the alarm is armed, D = a door is open, W = a window is open. The rule is: Alarm = A AND (D OR W), written A · (D + W). An OR gate combines D and W, and its output goes into an AND gate together with A.

### ✍️ Boolean expressions from circuits

To find a circuit's expression, start at the inputs and write each gate's output in turn. An OR gate fed by D and W gives D + W. That goes into an AND gate with A, giving A · (D + W). Brackets show which part is worked out first.

### 📋 Truth tables for circuits

Evaluate the expression for every input combination. For A · (D + W): with A = 0 the output is always 0, so a disarmed alarm stays quiet. With A = 1 the output is 1 if D or W is 1. Three inputs give 8 rows to check.

### ➕ The half adder

Gates can also do maths. A half adder adds two bits: Sum = A XOR B, and Carry = A AND B. With A = 1 and B = 1: Sum = 0 and Carry = 1, giving 10, which is 2 in binary. Chain these together and you get the adders inside every CPU (Central Processing Unit).

## Listen

- A logic circuit feeds the output of one gate into another.
- An alarm rule can be: armed AND, door OR window.
- That is written A dot, bracket, D plus W.
- Work out a circuit's expression gate by gate, from the inputs to the output.
- A truth table checks the circuit for every input combination.
- A half adder uses XOR for the sum and AND for the carry.
- Chains of adders are how the CPU does arithmetic.

## Mission: Design a circuit

- Use the explainer above: switch the alarm inputs on and off and fill in the 8-row truth table.
- Design a circuit for a security light: the light turns on when it is dark AND motion is detected. Write its Boolean expression.

Question: Your security-light expression, and one row of its truth table.

### Task: pick

#### Alarm = A · (D + W). The alarm is armed (A = 1), the door is shut (D = 0) and a window is open (W = 1). Does it sound?
- [x] Yes, output 1
- [ ] No, output 0
Why: D + W = 0 + 1 = 1, then A · 1 = 1 · 1 = 1.

#### Same circuit: A = 0, D = 1, W = 1. Does it sound?
- [ ] Yes, output 1
- [x] No, output 0
Why: Whatever the door and window do, A = 0 makes the AND gate output 0. A disarmed alarm stays quiet.

#### A half adder gets A = 1 and B = 0. What are Sum and Carry?
- [x] Sum 1, Carry 0
- [ ] Sum 0, Carry 1
- [ ] Sum 1, Carry 1
- [ ] Sum 0, Carry 0
Why: Sum = 1 XOR 0 = 1, Carry = 1 AND 0 = 0. That's 1 + 0 = 1.

#### Which expression means "Q is 1 when A is 1 and B is 0"?
- [ ] A + B
- [x] A · B̄
- [ ] Ā · B
- [ ] A ⊕ B̄
Why: B̄ (NOT B) is 1 exactly when B is 0, and the dot means AND.

### Task: order
Label: Put the steps for analysing a logic circuit in order.
1. Label every input (for example A, D, W)
   > Know what each input stands for.
2. Write the output expression of the first gate(s) next to the inputs
   > For example, the OR gate gives D + W.
3. Feed that into the next gate and write the full expression
   > For example, A · (D + W).
4. Build a truth table with every input combination
   > Three inputs need 8 rows.
5. Check the table against the real-life rule
   > Make sure the circuit does what the problem asks.

## Quiz

### What is a logic circuit?
- [ ] A single transistor that switches a current on or off
- [x] Gates connected so one gate's output feeds another
- [ ] A cable that carries one signal between two devices
- [ ] A program that lists the steps a computer follows
Why: Combining gates lets a circuit carry out more complex rules.

### For Q = A · (B + C), what is Q when A = 1, B = 0, C = 0?
- [ ] 1
- [x] 0
Why: Work out the brackets first: B + C = 0 + 0 = 0. Then A · 0 = 1 · 0 = 0, because AND needs both to be 1.

### For Q = A + B · C, what is Q when A = 0, B = 1, C = 1?
- [x] 1
- [ ] 0
Why: AND is worked out before OR: B · C = 1, then 0 + 1 = 1.

### In a half adder, which gate gives the Sum?
- [ ] AND
- [ ] OR
- [x] XOR
- [ ] NOT
Why: The sum bit is 1 when exactly one input is 1, which is what XOR does.

### In a half adder, which gate gives the Carry?
- [x] AND
- [ ] OR
- [ ] XOR
- [ ] NOR
Why: A carry only happens for 1 + 1, the one case where both bits are 1, and that is exactly when AND outputs 1.

### How many rows does a truth table need for a circuit with 4 inputs?
- [ ] 4
- [ ] 8
- [x] 16
- [ ] 32
Why: Each extra input doubles the combinations, so 4 inputs give 2 × 2 × 2 × 2 = 16 rows.

### In A · (D + W), why are the brackets there?
- [ ] They are only there to make the expression easier to read
- [x] They show that D + W must be worked out first
- [ ] They show that D + W is a NOT operation
- [ ] They show that the inputs D and W must always be equal
Why: Without brackets, AND would be done before OR, which would change the meaning.

### A school bell should ring when it is break time AND it is NOT a weekend. Which gate turns "weekend" into "not weekend"?
- [ ] AND
- [ ] OR
- [x] NOT
- [ ] XOR
Why: A NOT gate flips the weekend signal; its output then goes into an AND gate with "break time".

### What is the main use of a truth table when designing a circuit?
- [x] To check the circuit gives the right output in every case
- [ ] To decide which colour of wire to use for each input
- [ ] To count how many transistors the finished chip will need
- [ ] To measure the voltage that each gate's output produces
Why: Checking every combination catches mistakes before the circuit is built.

### A half adder adds 1 + 1. What do Carry and Sum show?
- [ ] Carry 0, Sum 0
- [ ] Carry 0, Sum 1
- [x] Carry 1, Sum 0
- [ ] Carry 1, Sum 1
Why: 1 + 1 = 2, which is 10 in binary, so the Sum bit is 0 and the Carry bit is 1.
