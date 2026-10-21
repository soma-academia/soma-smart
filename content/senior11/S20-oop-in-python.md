---
id: s11-oopimpl
track: senior11
code: S20
name: OOP in Python
part: Writing classes, objects and class relationships
cbe: strand
strand: Grade 11 · 3.2 Object Oriented Programming Implementation
video:
video_title:
video_channel:
explainer:
---

# S20 · OOP in Python

## Read

### ✍️ Declaring a class

In Python, a class starts with class Student: and its methods go indented underneath. The special method __init__ is the constructor: it runs when a new object is made and sets its starting attributes, for example self.name = name. self means "this particular object".

### 🆕 Creating and using objects

s = Student("Amani", 1021) creates an object and calls __init__ for you. Use a dot to reach its parts: s.name gives "Amani", and s.greet() calls a method. Each object keeps its own attribute values, so another Student("Wanjiru", 1022) has a different name.

### 📌 Instance and class (static) variables

Instance variables belong to one object (self.name). Class variables are shared by every object of the class, declared directly inside the class: school = "Kenya High". Java and C++ call these static variables. Change a class variable and every object sees the new value.

### 👁️ Visibility

Java and C++ use the keywords public, private and protected to control who can use an attribute. Python uses naming conventions instead: name is public, _name means protected (for this class and its children), and __name means private, and Python hides it from outside code. Good programs keep data private and expose methods.

### 🔗 Relationships between classes

Inheritance: class Teacher(Person): makes Teacher a kind of Person (an "is-a" link). Association: a Teacher teaches Students, but each exists separately. Aggregation: a Department has Teachers, who could exist without it. Composition: a House has Rooms that cannot exist without the house; delete the house and the rooms go too.

## Listen

- A class starts with the word class, and its methods are indented underneath.
- The constructor, underscore underscore init, sets up each new object.
- self means this particular object.
- Instance variables belong to one object; class variables are shared by all.
- Python marks protected with one underscore and private with two.
- class Teacher(Person) means Teacher inherits from Person.
- Association uses, aggregation has, and composition owns completely.

## Mission: Code a class

- If you can, open Python and write a BankAccount class with a balance, a deposit(amount) method, and a withdraw(amount) method that refuses to go below zero.
- Create two accounts, deposit into one, and print both balances to show that each object keeps its own data.

Question: Your BankAccount class, or how you planned it.

### Task: pick

#### Which method is Python's constructor?
- [ ] start()
- [x] __init__
- [ ] main()
- [ ] new()
Why: __init__ runs automatically when an object is created and sets its starting values.

#### s = Student("Amani", 1021). What does s.name give, if __init__ stores self.name = name?
- [x] Amani
- [ ] 1021
- [ ] Student
- [ ] self
Why: The constructor saved the first argument in the object's name attribute.

#### In Python, how do you mark an attribute as private?
- [ ] One underscore: _balance
- [x] Two underscores: __balance
- [ ] Capital letters: BALANCE
- [ ] The word private
Why: Two leading underscores make Python hide the name from outside the class.

#### A House has Rooms that are destroyed when the house is destroyed. Which relationship is this?
- [ ] Association
- [ ] Aggregation
- [x] Composition
- [ ] Inheritance
Why: In composition the parts' lives depend on the whole.

### Task: order
Label: Put the steps of creating and using an object in order.
1. Define the class: class Student:
   > The blueprint comes first.
2. Write the constructor __init__(self, name, adm) to set attributes
   > It stores self.name and self.adm.
3. Create an object: s = Student("Amani", 1021)
   > Python runs __init__ for you.
4. Use the object: print(s.name) or s.greet()
   > Reach attributes and methods with a dot.

## Quiz

### What does self refer to inside a method?
- [ ] The class name
- [x] The particular object the method is working on
- [ ] The programmer
- [ ] The whole program
Why: self lets each object reach its own attributes.

### How do you call the greet method of object s?
- [ ] greet.s()
- [x] s.greet()
- [ ] s->greet
- [ ] call greet(s)
Why: Python uses a dot: object.method().

### A class variable is...
- [ ] Different for every object
- [x] Shared by all objects of the class
- [ ] Only used in loops
- [ ] Always private
Why: It is declared in the class body, not on self, so every object sees one value.

### What does class Teacher(Person): mean?
- [ ] Teacher contains a Person attribute
- [x] Teacher inherits from Person
- [ ] Person inherits from Teacher
- [ ] Teacher and Person are unrelated
Why: The parent class goes in the brackets.

### In Python, one leading underscore (_name) signals...
- [ ] Public
- [x] Protected, for use within the class and its children
- [ ] A constant
- [ ] A syntax error
Why: It's a convention telling other programmers not to use it from outside.

### Which keyword do Java and C++ use for attributes anyone may access?
- [x] public
- [ ] private
- [ ] protected
- [ ] static
Why: Public members can be used from anywhere; private ones only inside the class.

### A Department has Teachers who can still exist if the department closes. Which relationship is this?
- [ ] Composition
- [x] Aggregation
- [ ] Inheritance
- [ ] Encapsulation
Why: Aggregation is "has-a" where the parts can exist on their own.

### When does __init__ run?
- [ ] When the program ends
- [x] Automatically, whenever a new object is created
- [ ] Only when you call it by name
- [ ] Never
Why: Creating Student("Amani", 1021) calls __init__ with those values.

### Why keep attributes private and expose methods?
- [ ] It makes code shorter
- [x] It protects data from being changed in invalid ways
- [ ] Python requires it
- [ ] It uses less memory
Why: A withdraw() method can refuse a negative balance; direct access can't.

### Two objects a and b are made from the same class. If a.name changes, what happens to b.name?
- [ ] It changes too
- [x] Nothing; each object has its own instance variables
- [ ] It is deleted
- [ ] It becomes a class variable
Why: Instance variables are stored separately in each object.
