---
id: s-functions
track: senior
code: S12
name: Functions
part: Modular programming
cbe: strand
strand: Grade 10 · 3.6 Functions
video:
video_title:
video_channel:
explainer:
---

# S12 · Functions

## Read

### 🧱 Why functions?

A function is a named block of code that does one job. Modular programming breaks a big program into functions, so each part is easier to write, test, fix and reuse. It is like a school: each department does its own job, and together they run everything.

### 🧰 Built-in and user-defined

Built-in functions come with Python: print(), input(), len(), int(), max(), round(). User-defined functions are the ones you write yourself with def. Once defined, you can call your function as many times as you like.

### ✍️ Defining a function

def area(length, width): return length * width. This defines a function named area with two parameters. Calling area(3, 4) passes 3 and 4 in as arguments, and the function returns 12. Inside a real program, the body goes on its own indented lines under the def line.

### ↩️ Parameters and return values

Parameters are the names in the definition (length, width); arguments are the actual values you pass in (3, 4). return sends a result back to the caller and ends the function. A function without return gives back the special value None.

### 🔭 Scope: local and global

A variable created inside a function is local: it exists only while the function runs and can't be used outside it. A variable created outside all functions is global. Prefer passing values in as parameters and returning results; it keeps functions independent and easy to test.

## Listen

- A function is a named block of code that does one job.
- Modular programs are easier to write, test, fix and reuse.
- Python has built-in functions like print and len, and you can write your own with def.
- Parameters are names in the definition; arguments are the values you pass in.
- return sends a result back and ends the function.
- Variables made inside a function are local to it.
- Pass values in and return results, so functions stay independent.

## Mission: Write a fees function

- If you can, open Python and write a function fees_due(paid, total) that returns the balance. Test it with fees_due(15000, 40000).
- Write a function is_even(n) that returns True if n is even. Hint: use %.

Question: Your fees_due function, and the result of fees_due(15000, 40000).

### Task: sort
Label: Is each function built into Python, or user-defined?
Buckets: Built-in | User-defined
- print() → Built-in
- len() → Built-in
- area(length, width), written with def → User-defined
- input() → Built-in
- fees_due(paid, total), written with def → User-defined
- max() → Built-in

### Task: pick

#### def area(length, width): return length * width. What does area(3, 4) return?
- [ ] 7
- [x] 12
- [ ] 34
- [ ] Nothing
Why: The arguments 3 and 4 become length and width, and the function returns 3 × 4.

#### In def greet(name): ..., what is name?
- [x] A parameter
- [ ] An argument
- [ ] A return value
- [ ] A global constant
Why: Names in the definition are parameters; the values passed in when calling are arguments.

#### A variable created inside a function is...
- [ ] Global
- [x] Local to that function
- [ ] A constant
- [ ] Shared by every program
Why: Local variables exist only while the function runs, which stops functions interfering with each other.

### Task: order
Label: What happens, in order, when a program calls area(3, 4)?
1. The program reaches the call area(3, 4)
   > The calling code pauses here.
2. The arguments 3 and 4 are passed into the parameters length and width
   > Inside the function, length is 3 and width is 4.
3. The function body runs
   > It calculates length * width.
4. return sends 12 back to the caller
   > The function ends at return.
5. The program continues using the value 12
   > For example, print(area(3, 4)) shows 12.

## Quiz

### What keyword defines a function in Python?
- [ ] function
- [x] def
- [ ] return
- [ ] call
Why: def (short for define) starts a function definition.

### Which is a built-in Python function?
- [x] len()
- [ ] area()
- [ ] fees_due()
- [ ] greet()
Why: len comes with Python; the others are names someone would define themselves.

### What does return do?
- [ ] Prints a value
- [x] Sends a result back to the caller and ends the function
- [ ] Repeats the function
- [ ] Deletes the function
Why: Unlike print, return hands the value back so the program can keep using it.

### Why use modular programming?
- [ ] To make programs longer
- [x] Parts are easier to write, test, fix and reuse
- [ ] It makes the computer louder
- [ ] It removes the need to test
Why: Small functions with one job each are simpler to understand and can be reused.

### In area(3, 4), what are 3 and 4?
- [ ] Parameters
- [x] Arguments
- [ ] Return values
- [ ] Keywords
Why: The actual values passed in a call are arguments.

### What does a function return if it has no return statement?
- [ ] 0
- [ ] An error
- [x] None
- [ ] True
Why: Python functions without return give back the special value None.

### A global variable is created...
- [ ] Inside a function
- [x] Outside all functions
- [ ] Only in loops
- [ ] Only in dictionaries
Why: Global variables live at the top level of the program.

### def double(n): return n * 2. What does double(double(3)) give?
- [ ] 6
- [x] 12
- [ ] 9
- [ ] 3
Why: double(3) is 6, then double(6) is 12. The result of one call can be passed to another.

### Why is it better to pass values as parameters than to rely on global variables?
- [ ] It is required by law
- [x] It keeps functions independent and easier to test
- [ ] Globals use no memory
- [ ] Parameters make code slower
Why: A function that only uses its parameters behaves the same wherever it is called.

### Which line correctly calls a function named greet with the argument "Amani"?
- [ ] def greet("Amani")
- [x] greet("Amani")
- [ ] return greet
- [ ] greet = "Amani"
Why: Calling a function is its name followed by the arguments in brackets.
