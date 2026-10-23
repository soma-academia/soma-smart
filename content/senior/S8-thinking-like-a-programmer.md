---
id: s-programming
track: senior
code: S8
name: Thinking Like a Programmer
part: Programming concepts and program development
cbe: strand
strand: Grade 10 · 3.1 Computer Programming Concepts · 3.2 Program development
video:
video_title:
video_channel:
explainer:
---

# S8 · Thinking Like a Programmer

## Read

### 🗣️ Programming words

A program is a set of instructions for a computer. Source code is the program as a person writes it. Syntax is the grammar rules of a language. A bug is a mistake; debugging is finding and fixing it. An IDE (integrated development environment) is an app for writing, running and debugging code.

### 🪜 Levels of programming languages

Machine code is pure binary that the CPU (Central Processing Unit) runs directly. Assembly language uses short words (mnemonics) like ADD and MOV, one per machine instruction. High-level languages such as Python, Java, C++ and Scratch read more like English and work on many computers. These lessons use Python.

### ⚙️ Compilers and interpreters

The CPU only understands machine code, so high-level code must be translated. A compiler translates the whole program first, producing a file that runs fast. An interpreter translates and runs it one line at a time, which makes testing easy. Python usually runs through an interpreter.

### 🔄 Stages of program development

Programs are built in stages: define the problem, design a solution (the algorithm), write the code, test and debug it, put it into use, then document and maintain it. Skipping design and testing is how bugs reach users.

### 🧭 Algorithms, pseudocode and flowcharts

An algorithm is a step-by-step solution. A good one is clear, finite (it ends), has inputs and outputs, and every step can actually be done. Pseudocode writes it in plain structured English (START, INPUT, OUTPUT, END). Flowcharts draw it: ovals for start and end, parallelograms for input and output, rectangles for processing, diamonds for decisions.

## Listen

- Source code is what programmers write; syntax is the language's grammar.
- A bug is a mistake, and debugging is fixing it.
- Machine code is binary; assembly uses short words; high-level languages read like English.
- A compiler translates everything first; an interpreter runs line by line.
- Programs are built in stages: define, design, code, test, use, maintain.
- A good algorithm is clear, finite and has inputs and outputs.
- In flowcharts, diamonds are decisions and parallelograms are input and output.

## Mission: Design before you code

- Write pseudocode for making tea: START, list each step, END.
- Draw a flowchart for: "Input a mark. If it is 50 or more, output Pass, otherwise output Fail."

Question: Your pseudocode for making tea.

### Task: order
Label: Put the stages of program development in order.
1. Define the problem
   > Be clear about what the program must do, and for whom.
2. Design the solution (algorithm, pseudocode, flowchart)
   > Plan the steps before writing any code.
3. Write the code
   > Turn the design into a programming language.
4. Test and debug
   > Try normal, unusual and wrong inputs, and fix the bugs found.
5. Put the program into use
   > Install it where people will use it.
6. Document and maintain
   > Explain how it works and keep improving it.

### Task: sort
Label: Is each language low-level or high-level?
Buckets: Low-level | High-level
- Machine code → Low-level
- Python → High-level
- Assembly language → Low-level
- Java → High-level
- Scratch → High-level
- C++ → High-level

### Task: pick

#### In a flowchart, which shape shows a decision such as "Is mark >= 50?"
- [ ] Oval
- [ ] Rectangle
- [x] Diamond
- [ ] Parallelogram
Why: A diamond has two exits (yes and no), so it shows a decision.

#### Which translator runs a program one line at a time?
- [ ] A compiler
- [x] An interpreter
- [ ] An assembler
- [ ] A router
Why: An interpreter translates and runs each line in turn, so you see errors exactly where they happen.

## Quiz

### What is syntax?
- [ ] The order in which the CPU runs a program's lines
- [x] The grammar rules that say how code in a language must be written
- [ ] The list of mistakes found while testing a program
- [ ] The binary file a compiler produces from source code
Why: Code that breaks the syntax rules cannot be translated, just as a sentence with broken grammar is hard to understand.

### Debugging means...
- [x] Finding the mistakes in a program and fixing them so it works
- [ ] Translating a whole program into machine code first
- [ ] Writing an algorithm in structured plain English
- [ ] Drawing the steps of a program as a flowchart
Why: A bug is a mistake in a program; debugging is the work of tracking it down and correcting it, usually while testing.

### Which language uses short words such as ADD and MOV?
- [ ] Python
- [ ] Machine code
- [x] Assembly language
- [ ] A high-level language like Java
Why: Assembly gives each machine instruction a short word (mnemonic), which is easier than raw binary.

### Why must high-level code be translated?
- [ ] Because high-level code runs too fast for the CPU to follow
- [x] Because the CPU only understands machine code
- [ ] Because translation adds colour to the code
- [ ] Because every program must first be sent over the internet
Why: Compilers and interpreters turn human-friendly code into the CPU's binary instructions, the only language it can run.

### What does a compiler do?
- [x] Translates the whole program into machine code before it runs
- [ ] Translates and runs the program one line at a time, as it goes along
- [ ] Draws a flowchart of the program from its source code
- [ ] Finds and fixes every bug in the program automatically
Why: Compiling first produces a ready-to-run file, which then runs fast; running line by line is what an interpreter does.

### Which is a characteristic of a good algorithm?
- [ ] It keeps running forever so it never misses any input
- [x] It is clear and finishes after a finite number of steps
- [ ] It takes no inputs and gives no outputs, so it stays simple
- [ ] It can only run on the one computer it was written for
Why: An algorithm that never ends, or whose steps are unclear, cannot reliably solve a problem; good ones also have inputs and outputs.

### What is pseudocode?
- [ ] A secret password that protects source code from copying
- [x] An algorithm written in structured plain language
- [ ] A translator that turns Python into machine code
- [ ] Binary instructions that the CPU runs directly
Why: Pseudocode lets you plan logic with words like START, INPUT and OUTPUT without worrying about a language's exact syntax.

### In a flowchart, a parallelogram represents...
- [ ] A decision
- [ ] The start or end of the algorithm
- [x] Input or output of data
- [ ] A processing step such as a calculation
Why: Parallelograms show data coming in (INPUT) or going out (OUTPUT); diamonds are decisions and rectangles are processing.

### Which stage comes right after writing the code?
- [ ] Defining the problem
- [x] Testing and debugging
- [ ] Designing the algorithm and flowchart
- [ ] Documenting and maintaining the program
Why: Code must be tested with normal, unusual and wrong inputs, and its bugs fixed, before people rely on it.

### An IDE is...
- [ ] A network cable that links two computers
- [ ] A step-by-step algorithm drawn as a flowchart
- [x] An app for writing, running and debugging code
- [ ] A storage device that holds a program's source code
Why: IDEs combine an editor, a way to run code, and debugging tools in one place, so you can write and test without switching apps.
