---
id: s-containers
track: senior
code: S11
name: Lists & Searching
part: Data structures, sorting and searching
cbe: strand
strand: Grade 10 · 3.5 Data Structures
video:
video_title:
video_channel:
explainer:
---

# S11 · Lists & Searching

## Read

### 📋 Lists

A list holds many values in order, in square brackets: marks = [70, 85, 90]. Positions (indexes) start at 0, so marks[0] is 70 and marks[2] is 90. Lists can change: marks.append(65) adds a value at the end, and len(marks) tells you how many items there are.

### 🔒 Tuples and sets

A tuple is like a list but cannot be changed once made, in round brackets: point = (3, 4). Use one for data that should stay fixed. A set holds unique values in curly brackets: {"Maths", "English"}. Adding a duplicate does nothing, which makes sets great for removing repeats.

### 📒 Dictionaries

A dictionary stores key and value pairs, like a phone book: phones = {"Amani": "0712 000 000"}. You look values up by key, phones["Amani"], instead of by position. Keys must be unique.

### 🗄️ Two-dimensional lists

A list can hold other lists, like a table with rows and columns: table = [[1, 2], [3, 4]]. table[1][0] means row 1, column 0, which is 3. This is useful for timetables, spreadsheets and game boards.

### 🔍 Searching and sorting

Linear search checks items one by one from the start; it works on any list but is slow for big ones. Binary search needs a sorted list: check the middle, then throw away the half that can't contain the target, and repeat, which is very fast. Bubble sort sorts by repeatedly swapping neighbours that are in the wrong order.

## Listen

- A list holds values in order, and its positions start at zero.
- append adds to a list; len counts its items.
- A tuple can't be changed once made.
- A set keeps only unique values.
- A dictionary stores key and value pairs, like a phone book.
- Linear search checks every item; binary search halves a sorted list each time.
- Bubble sort swaps neighbours until everything is in order.

## Mission: Class marks

- If you can, open Python and make a list of five marks. Print the highest with max() and the average with sum() divided by len().
- Make a dictionary of three classmates and their favourite subjects, then print one of them by name.

Question: Your list of marks, and its highest mark and average.

### Task: pick

#### marks = [70, 85, 90]. What is marks[1]?
- [ ] 70
- [x] 85
- [ ] 90
- [ ] An error
Why: Indexes start at 0, so index 1 is the second item, 85.

#### Which container suits storing each student's name with their phone number?
- [ ] A tuple
- [ ] A set
- [x] A dictionary
- [ ] A plain number
Why: A dictionary maps a key (the name) to a value (the phone number) for quick look-up.

#### You want a list of subjects with no repeats. Which container does this automatically?
- [ ] List
- [x] Set
- [ ] Tuple
- [ ] String
Why: Sets keep only unique values, so duplicates disappear.

### Task: order
Label: Put the steps of a binary search in order.
1. Start with a sorted list
   > Binary search only works if the list is in order.
2. Look at the middle item
   > Compare it with the value you want.
3. If it matches, you have found it
   > Stop here.
4. If the target is smaller, keep the left half; if bigger, keep the right half
   > Half of the list is thrown away at every step.
5. Repeat with the half that is left until found or nothing remains
   > Even 1,000 items need only about 10 checks.

## Quiz

### In Python, list positions start at...
- [x] 0
- [ ] 1
- [ ] -1
- [ ] 10
Why: The first item is index 0, which is why the last of five items is index 4.

### What does len([4, 8, 15]) give?
- [ ] 15
- [x] 3
- [ ] 27
- [ ] 2
Why: len counts items; there are three numbers in the list.

### What does marks.append(65) do?
- [ ] Removes the first 65 found in the list
- [x] Adds 65 to the end of the list
- [ ] Sorts the list so 65 is in its place
- [ ] Returns the position where 65 is stored
Why: append grows the list by one item at the end.

### Which container cannot be changed after it is created?
- [ ] List
- [ ] Dictionary
- [x] Tuple
- [ ] Set
Why: Tuples are immutable, which protects data that should stay fixed, like coordinates.

### What do you need before you can use binary search?
- [ ] A dictionary of keys
- [x] A sorted list
- [ ] A list with fewer than ten items
- [ ] An internet connection
Why: Binary search decides which half to throw away, and that only works if the list is in order.

### Linear search works by...
- [x] Checking items one by one from the start
- [ ] Checking only the middle item, then stopping
- [ ] Sorting the list first, then halving it
- [ ] Jumping to random positions until it finds a match
Why: It is simple and works on unsorted lists, but it can be slow for long ones.

### In a dictionary, you find a value using its...
- [ ] Position number
- [x] Key
- [ ] Data type
- [ ] Length
Why: Dictionaries look values up by key, like finding a number by a person's name.

### table = [[1, 2], [3, 4]]. What is table[1][0]?
- [ ] 1
- [ ] 2
- [x] 3
- [ ] 4
Why: table[1] is the second row, [3, 4], and position 0 in that row is 3.

### What does bubble sort repeatedly do?
- [ ] Removes the largest item and puts it in a new list
- [x] Swaps neighbouring items that are in the wrong order
- [ ] Splits the list in half and sorts each half separately
- [ ] Picks a random item and moves it to the front of the list
Why: After enough passes of swapping neighbours, every item "bubbles" into place.

### What happens if you add "Maths" twice to a set?
- [ ] The set stores "Maths" twice, side by side
- [ ] Python stops with a duplicate-value error
- [x] The set keeps only one "Maths"
- [ ] The set becomes empty
Why: Sets store each value only once, so adding a duplicate quietly does nothing; this makes them handy for removing repeats.
