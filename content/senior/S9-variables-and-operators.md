---
id: s-variables
track: senior
code: S9
name: Variables & Operators
part: Identifiers, data types and operators in Python
cbe: strand
strand: Grade 10 · 3.3 Identifiers and Operators
video:
video_title:
video_channel:
explainer:
---

# S9 · Variables & Operators

## Read

### 📦 Variables and constants

A variable is a named box in memory whose value can change, for example marks = 85. A constant is a value that should not change while the program runs. Python has no special constant type, so by convention constants are written in capitals: PASS_MARK = 50.

### 🏷️ Naming rules (identifiers)

An identifier is the name you give a variable or function. In Python it may contain letters, digits and underscores, but must not start with a digit, must have no spaces, and must not be a keyword like if, for or class. Names are case-sensitive: Marks and marks are different. Choose meaningful names like total_fees, not x.

### 🔤 Data types

Every value has a type. int is a whole number (42), float is a decimal (3.5), str is text in quotes ("Nairobi"), and bool is True or False. The type decides what you can do: 5 + 3 is 8, but "5" + "3" joins text and gives "53".

### ⌨️ Input and output

print() shows output on the screen. input() reads what the user types, and always gives back text (a str). To do maths with it, convert it first: age = int(input("Age? ")).

### ➕ Operators

Arithmetic: + − * / for add, subtract, multiply and divide, // for whole-number division, % for the remainder, ** for power. Comparison: == (equal to), != (not equal), <, >, <=, >=, which give True or False. Logical: and, or, not combine conditions. = assigns a value; == compares.

## Listen

- A variable is a named box whose value can change.
- By convention, constants are written in capitals, like PASS_MARK.
- Names can't start with a digit, can't have spaces, and can't be keywords.
- int is whole numbers, float is decimals, str is text, bool is True or False.
- input always gives text, so convert it with int before doing maths.
- Double slash divides to a whole number; percent gives the remainder.
- One equals sign assigns; two equals signs compare.

## Mission: Your first variables

- If you can, open Python (on a computer, or a free online Python editor) and try: name = input("Name? ") then print("Hello", name).
- Write a program that asks for a price in KSh and prints the price with 16% VAT added.

Question: Your VAT program, or what you expect it to print for a price of 100.

### Task: sort
Label: Which names are valid Python identifiers?
Buckets: Valid | Invalid
- total_marks → Valid
- 2nd_place → Invalid
- student name → Invalid
- _count → Valid
- class → Invalid
- mpesa2 → Valid

### Task: typing
Label: Type this Python statement exactly. It stores 85 in a variable called marks.
Target: marks = 85

### Task: pick

#### What does print(7 // 2) show?
- [ ] 3.5
- [x] 3
- [ ] 1
- [ ] 14
Why: // divides and drops the decimal part: 7 ÷ 2 = 3.5, so the whole-number answer is 3.

#### What does print(7 % 2) show?
- [x] 1
- [ ] 3
- [ ] 3.5
- [ ] 0
Why: % gives the remainder: 7 = 2 × 3 + 1, so the remainder is 1. It is handy for checking odd and even numbers.

#### What does print("5" + "3") show?
- [ ] 8
- [x] 53
- [ ] An error
- [ ] 15
Why: With quotes these are text, and + joins text together. Without quotes, 5 + 3 would be 8.

## Quiz

### Which is a valid Python variable name?
- [ ] 1st_student
- [ ] my marks
- [x] my_marks
- [ ] for
Why: It uses only letters and an underscore, doesn't start with a digit, has no spaces and isn't a keyword.

### What type is the value 3.75?
- [ ] int (whole number)
- [x] float (decimal)
- [ ] str (text)
- [ ] bool (True or False)
Why: Numbers with a decimal point are floats; whole numbers such as 42 are ints, and text in quotes is a str.

### What type does input() always return?
- [ ] int (whole number)
- [ ] float (decimal)
- [x] str (text)
- [ ] bool (True or False)
Why: Whatever the user types arrives as text, so convert it with int() or float() before doing maths with it.

### What is the result of 2 ** 3?
- [ ] 6
- [ ] 5
- [x] 8
- [ ] 23
Why: ** means "to the power of", so 2 ** 3 is 2 × 2 × 2 = 8, not 2 × 3 = 6.

### What does == do?
- [ ] Stores the value on the right in the variable on the left
- [x] Compares two values and gives True or False
- [ ] Adds two numbers together and keeps the total
- [ ] Prints both values on the screen side by side
Why: A single = stores a value in a variable; == asks "are these equal?" and answers True or False.

### Which is a bool value?
- [x] True
- [ ] "True"
- [ ] 1.0
- [ ] true_value
Why: True and False (capital T and F, no quotes) are Python's two boolean values; "True" in quotes is a str.

### Are the names Marks and marks the same variable in Python?
- [ ] Yes, Python ignores the case of letters in names
- [x] No, Python is case-sensitive
- [ ] Yes, but only when the value stored is a number
- [ ] Yes, as long as both are used in the same function
Why: Python treats uppercase and lowercase letters as different, so these are two separate names.

### What does print(10 > 3 and 2 > 5) show?
- [ ] True
- [x] False
- [ ] 10
- [ ] An error
Why: and needs both sides to be True; 2 > 5 is False, so the whole expression is False.

### Why write PASS_MARK in capitals?
- [ ] Python gives an error if a constant is in lowercase
- [x] By convention it marks a constant that should not change
- [ ] Names in capitals make the program run much faster
- [ ] Capital letters take up less memory than lowercase letters do
Why: Python doesn't enforce constants, so programmers use capital names to show that a value is meant to stay fixed.

### What does print(17 % 5) show?
- [ ] 3
- [x] 2
- [ ] 3.4
- [ ] 85
Why: % gives the remainder after division: 5 goes into 17 three times (15), leaving 2 over.
