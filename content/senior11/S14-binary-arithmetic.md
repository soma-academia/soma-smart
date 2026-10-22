---
id: s11-binarith
track: senior11
code: S14
name: Binary Arithmetic
part: Signed numbers, addition and subtraction
cbe: strand
strand: Grade 11 · 1.2 Binary Arithmetic Operations
video:
video_title:
video_channel:
explainer:
---

# S14 · Binary Arithmetic

## Read

### ➕ Adding in binary

Binary addition has four rules: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1), and 1 + 1 + 1 = 11 (write 1, carry 1). Add column by column from the right, just like decimal: 0101 + 0011 = 1000, which is 5 + 3 = 8.

### 🔓 Unsigned numbers

An unsigned number has no sign, so it can only be zero or positive. With 8 bits, unsigned values run from 0 (0000 0000) to 255 (1111 1111). If a result needs more bits than you have, it overflows and the answer is wrong.

### ± Sign and magnitude

To store negative numbers, one simple method uses the leftmost bit as a sign: 0 for positive, 1 for negative. In 8 bits, +5 is 0000 0101 and −5 is 1000 0101. The problem: it has two zeros (+0 and −0), and adding signed numbers this way does not work directly.

### 🔁 One's and two's complement

One's complement makes a number negative by flipping every bit: +5 = 0000 0101 becomes 1111 1010. Two's complement flips every bit and then adds 1: −5 = 1111 1011. Two's complement has only one zero, and computers use it because ordinary addition then works for negative numbers too. With 8 bits it covers −128 to +127.

### ➖ Subtracting by adding

Computers subtract by adding the two's complement. To work out 7 − 5: write +7 as 0000 0111 and −5 as 1111 1011, then add them, giving 1 0000 0010. Drop the extra carry on the left and the answer is 0000 0010, which is 2. One adding circuit can do both jobs.

## Listen

- In binary, one plus one is one-zero: write zero and carry one.
- Unsigned eight-bit numbers go from zero to two hundred and fifty-five.
- Sign and magnitude uses the first bit as the sign, but it has two zeros.
- One's complement flips every bit.
- Two's complement flips every bit, then adds one.
- Eight-bit two's complement covers minus one hundred and twenty-eight to plus one hundred and twenty-seven.
- Computers subtract by adding the two's complement.

## Mission: Work it out by hand

- Add 0110 + 0111 in binary and check your answer in decimal.
- Write −12 in 8-bit sign and magnitude, one's complement and two's complement.

Question: Your three ways of writing −12.

### Task: pick

#### What is 0101 + 0011 in binary?
- [ ] 0110
- [x] 1000
- [ ] 0111
- [ ] 1100
Why: 5 + 3 = 8, and 8 in binary is 1000. Work right to left: 1+1 = 10, carry 1; 0+1+1 = 10, carry 1; 1+0+1 = 10, carry 1; 0+0+1 = 1.

#### What is −5 in 8-bit two's complement?
- [ ] 1000 0101
- [ ] 1111 1010
- [x] 1111 1011
- [ ] 0000 0101
Why: +5 is 0000 0101. Flip the bits (1111 1010), then add 1: 1111 1011.

#### What is −5 in 8-bit one's complement?
- [ ] 1000 0101
- [x] 1111 1010
- [ ] 1111 1011
- [ ] 0111 1010
Why: One's complement just flips every bit of +5 (0000 0101).

#### What is the largest unsigned 8-bit number?
- [ ] 127
- [ ] 128
- [x] 255
- [ ] 256
Why: 1111 1111 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255.

### Task: order
Label: Put the steps for finding −6 in two's complement (8 bits) in order.
1. Write +6 in binary: 0000 0110
   > Start from the positive number.
2. Flip every bit: 1111 1001
   > This is the one's complement.
3. Add 1: 1111 1010
   > This is the two's complement, −6.
4. Check: 0000 0110 + 1111 1010 = 1 0000 0000; drop the carry and you get 0
   > A number plus its negative is zero, so the answer is right.

## Quiz

### In binary, 1 + 1 equals...
- [ ] 2
- [x] 10
- [ ] 11
- [ ] 0
Why: Binary has no digit 2, so 1 + 1 = 10: write 0 and carry 1.

### In binary, 1 + 1 + 1 equals...
- [ ] 10
- [x] 11
- [ ] 111
- [ ] 3
Why: That's 3 in decimal, which is 11 in binary: write 1 and carry 1.

### In sign and magnitude, what does the leftmost bit show?
- [x] Whether the number is positive or negative
- [ ] Whether the number is odd or even
- [ ] Whether the last addition produced a carry out
- [ ] The place value 128, as in ordinary unsigned binary
Why: 0 means positive and 1 means negative; the other seven bits hold the size, so 1000 0101 is −5.

### Why do computers prefer two's complement?
- [ ] It stores larger positive numbers than unsigned binary in the same bits
- [x] It has only one zero, and ordinary addition works with negatives
- [ ] It stores both +0 and −0, which makes checking for zero simpler
- [ ] It needs a separate subtracting circuit, which makes it faster
Why: One adding circuit can handle positive and negative numbers, and subtraction too.

### What is the range of 8-bit two's complement?
- [ ] 0 to 255
- [x] −128 to +127
- [ ] −127 to +127
- [ ] −255 to +255
Why: There is one more negative number than positive, because zero takes one of the non-negative patterns.

### How does a computer usually work out A − B?
- [ ] With a separate subtracting circuit only
- [x] By adding A to the two's complement of B
- [ ] By flipping every bit of A and then adding B
- [ ] By dividing A by B and rounding the answer
Why: Adding the two's complement of B is the same as adding −B, so one adder circuit can both add and subtract.

### What problem does sign and magnitude have?
- [ ] It cannot store positive numbers
- [x] It has two zeros, +0 and −0
- [ ] It needs 16 bits
- [ ] It only works in hex
Why: 0000 0000 and 1000 0000 both mean zero, which wastes a pattern and complicates maths.

### What is overflow?
- [x] A result that is too big to fit in the available bits
- [ ] A number so small that it rounds down to zero
- [ ] A spare bit left unused at the end of every byte of memory
- [ ] An error caused by adding zero to a negative number
Why: For example, 200 + 100 in unsigned 8 bits needs 9 bits, so the stored answer is wrong.

### Flip all bits of 0000 1100. What do you get?
- [ ] 0000 1100
- [x] 1111 0011
- [ ] 1111 0100
- [ ] 1100 0000
Why: Every 0 becomes 1 and every 1 becomes 0. That is the one's complement of +12.

### What is 0110 + 0111 in binary?
- [ ] 1100
- [x] 1101
- [ ] 1111
- [ ] 1011
Why: 0110 is 6 and 0111 is 7, so the sum is 13, which is 8 + 4 + 1, written 1101 in binary.
