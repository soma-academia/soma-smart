---
id: s11-oop
track: senior11
code: S19
name: Object-Oriented Concepts
part: Classes, objects and the four principles
cbe: strand
strand: Grade 11 · 3.1 Object Oriented Programming (OOP) Concepts
video:
video_title:
video_channel:
explainer:
---

# S19 · Object-Oriented Concepts

## Read

### 🧭 Two ways to organise programs

Procedural programming organises a program as a sequence of functions that act on data. Object-oriented programming (OOP) bundles the data and the functions that use it into objects, modelled on real things: a student, a bank account, a matatu. Large programs are easier to manage and reuse this way. Java, C++, C# and Python all support OOP.

### 🧱 Classes and objects

A class is a blueprint; an object is one thing built from it. The Student class describes what every student has (attributes such as name and admission number) and can do (methods such as enrol() and pay_fees()). Amani and Wanjiru are two different objects of that one class, each with their own values.

### 🔒 Encapsulation and abstraction

Encapsulation bundles data and methods together and hides the inner details, so the data can only be changed through the object's own methods. A bank balance should change only through deposit() and withdraw(). Abstraction shows only what users need: you call send_money() without seeing all the steps inside.

### 🧬 Inheritance and polymorphism

Inheritance lets a new class reuse an existing one: Teacher and Student can both inherit name and phone from a Person class, then add their own features. Polymorphism means one method name behaves differently for each class: area() works out a circle's area one way and a rectangle's another way.

### 🗂️ UML class diagrams

Programmers plan classes with UML (Unified Modelling Language) class diagrams: a box in three parts, holding the class name, its attributes, and its methods. Symbols show visibility: + for public, − for private, # for protected. An arrow with a hollow triangle points from a child class to its parent.

## Listen

- OOP bundles data and the functions that use it into objects.
- A class is a blueprint; an object is one thing made from it.
- Attributes describe an object; methods are what it can do.
- Encapsulation hides an object's data behind its methods.
- Abstraction shows only what the user needs.
- Inheritance reuses a parent class; polymorphism lets one method act differently.
- UML class diagrams show the class name, attributes and methods.

## Mission: Model your school

- Pick three things at school (for example Student, Teacher, Classroom) and list two attributes and two methods for each.
- Draw a UML class diagram for one of them, using + and − for public and private.

Question: Your class, with its attributes and methods.

### Task: sort
Label: Is each one a class or an object?
Buckets: Class | Object
- Student (the blueprint) → Class
- Amani, admission number 1021 → Object
- Matatu → Class
- The matatu with plate KDA 123A → Object
- BankAccount → Class
- Wanjiru's savings account → Object

### Task: pick

#### A balance can only change through deposit() and withdraw(). Which principle is this?
- [x] Encapsulation
- [ ] Inheritance
- [ ] Polymorphism
- [ ] Compilation
Why: Hiding the data and allowing changes only through the object's methods is encapsulation.

#### Teacher and Student both reuse name and phone from a Person class. Which principle is this?
- [ ] Abstraction
- [x] Inheritance
- [ ] Encapsulation
- [ ] Iteration
Why: Child classes inherit attributes and methods from a parent class.

#### Circle.area() and Rectangle.area() calculate in different ways. Which principle is this?
- [ ] Encapsulation
- [ ] Inheritance
- [x] Polymorphism
- [ ] Abstraction
Why: Polymorphism means "many forms": one method name, behaving differently for each class.

## Quiz

### What is a class?
- [x] A blueprint that describes attributes and methods
- [ ] One specific object
- [ ] A type of loop
- [ ] A database table only
Why: Objects are created from a class, the way houses are built from one plan.

### What is an object?
- [ ] A blueprint
- [x] One instance created from a class, with its own values
- [ ] A function
- [ ] A comment
Why: Each object has the class's attributes, but with its own values.

### Which describes what an object can DO?
- [ ] Attributes
- [x] Methods
- [ ] Parameters only
- [ ] Comments
Why: Methods are functions that belong to the object.

### Abstraction means...
- [ ] Copying a class
- [x] Showing only the essential features and hiding complex details
- [ ] Making everything public
- [ ] Deleting objects
Why: Users get a simple interface without needing to know how it works inside.

### In a UML class diagram, what does − before an attribute mean?
- [ ] Public
- [x] Private
- [ ] Protected
- [ ] Deleted
Why: + is public, − is private and # is protected.

### Which is an advantage of OOP?
- [ ] Programs need no testing
- [x] Code is easier to reuse and maintain in large programs
- [ ] It always runs faster
- [ ] It needs no classes
Why: Objects group related code, and inheritance lets you reuse what exists.

### Which language does NOT support object-oriented programming?
- [ ] Java
- [ ] Python
- [ ] C++
- [x] Plain machine code
Why: Classes and objects are high-level ideas; machine code is just CPU instructions.

### Inheritance creates a relationship between...
- [x] A parent class and a child class
- [ ] Two unrelated variables
- [ ] A loop and a function
- [ ] A file and a folder
Why: The child class gets the parent's features and can add or change its own.

### Polymorphism literally means...
- [ ] Many classes
- [x] Many forms
- [ ] Hidden data
- [ ] One method only
Why: From Greek: "poly" means many and "morph" means form.

### How does procedural programming differ from OOP?
- [ ] Procedural uses objects; OOP doesn't
- [x] Procedural organises code as functions acting on data; OOP bundles data and methods into objects
- [ ] They are exactly the same
- [ ] OOP has no functions
Why: Both are valid; OOP models real-world things as objects.
