---
id: s11-datarep
track: senior11
code: S13
name: Number Systems & Codes
part: Data representation
cbe: strand
strand: Grade 11 · 1.1 Data Representation
video: USCBCmwMCDA
video_title: How Computers Work: Binary & Data
video_channel: Code.org
explainer: bits
---

# S13 · Number Systems & Codes

## Read

### 🔢 Four number systems

Computers store everything as binary (base 2: digits 0 and 1). People use decimal (base 10). Programmers often use octal (base 8: digits 0–7) and hexadecimal (base 16: digits 0–9 then A–F, where A = 10 and F = 15), because they are short ways to write long binary numbers.

### ➗ Decimal to binary

Divide by 2 again and again, writing down each remainder, then read the remainders from the bottom up. 13 ÷ 2 = 6 r1, 6 ÷ 2 = 3 r0, 3 ÷ 2 = 1 r1, 1 ÷ 2 = 0 r1, so 13 = 1101 in binary. The same method works for octal (divide by 8) and hex (divide by 16).

### ✖️ Back to decimal with place values

Each place is worth a power of the base. In binary the places are 8, 4, 2, 1 from the left: 1101 = 8 + 4 + 0 + 1 = 13. In hex the places are 256, 16, 1: 2F = 2 × 16 + 15 = 47.

### 🧩 Binary, octal and hex shortcuts

One hex digit is exactly 4 bits, and one octal digit is exactly 3 bits. So group binary from the right: 1111 1010 = FA in hex, and 011 111 010 = 372 in octal. This is why hex is used for colours (#FF0000 is red) and memory addresses.

### 🔤 Character codes: ASCII, EBCDIC, BCD

Text is stored as numbers using a coding scheme. ASCII gives each character a code (A = 65, a = 97, 0 = 48). EBCDIC is an older scheme used on IBM mainframes. BCD (binary-coded decimal) stores each decimal digit in its own 4 bits: 59 becomes 0101 1001. Unicode extends ASCII to cover every language, including emoji.

## Listen

- Computers use binary; people use decimal; programmers also use octal and hex.
- Hex digits go from 0 to 9, then A to F, where F means fifteen.
- To convert decimal to binary, keep dividing by two and read the remainders upwards.
- Binary place values are 8, 4, 2 and 1, doubling each time.
- One hex digit is four bits, and one octal digit is three bits.
- ASCII codes the capital letter A as 65.
- BCD stores each decimal digit in its own four bits.

## Mission: Convert like a computer

- Convert your age and the day of the month you were born into binary, then into hex.
- Use the explainer above to build the ASCII code for the first letter of your name.

Question: Your age in binary and in hex.

### Task: pick

#### What is decimal 13 in binary?
- [ ] 1011
- [x] 1101
- [ ] 1110
- [ ] 1001
Why: 13 = 8 + 4 + 1, so the 8, 4 and 1 places are on: 1101.

#### What is binary 1010 in decimal?
- [ ] 5
- [x] 10
- [ ] 12
- [ ] 1010
Why: 1010 = 8 + 0 + 2 + 0 = 10.

#### What is hexadecimal FF in decimal?
- [ ] 15
- [ ] 99
- [ ] 200
- [x] 255
Why: F = 15, so FF = 15 × 16 + 15 = 255, the largest value one byte can hold.

#### What is decimal 59 in BCD?
- [ ] 0011 1011
- [x] 0101 1001
- [ ] 1001 0101
- [ ] 0111 0011
Why: BCD codes each digit separately: 5 = 0101 and 9 = 1001.

### Task: sort
Label: Which number system is each value written in?
Buckets: Binary | Octal | Hexadecimal
- 1011 0110 → Binary
- 3F → Hexadecimal
- 0x1A → Hexadecimal
- 0b101 → Binary
- 0o17 → Octal
- A9 → Hexadecimal

## Quiz

### What is the base of the hexadecimal system?
- [ ] 2
- [ ] 8
- [ ] 10
- [x] 16
Why: Hex has sixteen digits: 0–9 and A–F.

### In hexadecimal, what value does the digit C stand for?
- [ ] 11
- [x] 12
- [ ] 13
- [ ] 14
Why: A = 10, B = 11, C = 12, up to F = 15.

### What is binary 1111 in decimal?
- [ ] 4
- [ ] 11
- [x] 15
- [ ] 16
Why: 8 + 4 + 2 + 1 = 15.

### How many bits does one hexadecimal digit represent?
- [ ] 2
- [ ] 3
- [x] 4
- [ ] 8
Why: Four bits give 16 combinations (0000 to 1111), exactly one hex digit.

### What is octal 17 in decimal?
- [ ] 17
- [x] 15
- [ ] 7
- [ ] 23
Why: Octal places are 8 and 1: 1 × 8 + 7 = 15.

### Which digits are allowed in octal?
- [x] 0 to 7
- [ ] 0 to 8
- [ ] 0 and 1
- [ ] 0 to 9 and A to F
Why: Base 8 needs eight digits, 0 through 7.

### In ASCII, what is the code for capital A?
- [ ] 1
- [ ] 48
- [x] 65
- [ ] 97
Why: Capital A is 65; small a is 97, which is why "A" and "a" are different to a computer.

### Binary 1111 1010 written in hex is...
- [ ] AF
- [x] FA
- [ ] F0
- [ ] 15 10
Why: Split into 4-bit groups: 1111 = F and 1010 = A, giving FA.

### Which coding scheme stores each decimal digit in its own 4 bits?
- [ ] ASCII
- [ ] EBCDIC
- [x] BCD
- [ ] HTML
Why: Binary-coded decimal keeps digits separate, which suits displays and calculators.

### Why do programmers use hexadecimal?
- [ ] Computers store data in hex
- [x] It is a short, readable way to write long binary numbers
- [ ] It is faster than binary
- [ ] It only works for colours
Why: Computers still store binary; hex just makes it four times shorter for people to read.
