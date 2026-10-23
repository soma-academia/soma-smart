---
id: s11-sql
track: senior11
code: S22
name: SQL
part: Structured Query Language
cbe: strand
strand: Grade 11 · 3.4 Structured Query Language (SQL)
video:
video_title:
video_channel:
explainer:
---

# S22 · SQL

## Read

### 💬 What SQL is

SQL (Structured Query Language) is the standard language for working with relational databases. Many DBMSs (Database Management Systems) use it, each with small differences: MySQL, PostgreSQL, SQLite, Oracle and Microsoft SQL Server. SQL statements are grouped by job: DDL (Data Definition Language) defines structure, DML (Data Manipulation Language) changes data, and DQL (Data Query Language) asks questions.

### 🏗️ DDL: defining structure

CREATE TABLE students (adm INT PRIMARY KEY, name VARCHAR(50), grade INT); builds a new table. ALTER TABLE changes it, for example to add a column. DROP TABLE deletes a whole table and all its data. Use DROP with great care: there is no undo.

### ✏️ DML: changing data

INSERT INTO students VALUES (1021, 'Amani', 11); adds a row. UPDATE students SET grade = 12 WHERE adm = 1021; changes matching rows. DELETE FROM students WHERE adm = 1021; removes them. Always include WHERE with UPDATE and DELETE; without it, every row changes or disappears.

### 🔍 DQL: asking questions

SELECT name, grade FROM students; lists those columns for every row. SELECT * picks all columns. WHERE filters rows (WHERE grade = 11), ORDER BY sorts (ORDER BY name), and GROUP BY groups rows for summaries, such as SELECT grade, COUNT(*) FROM students GROUP BY grade; which counts the students in each grade.

### 🔗 Relationships in SQL

A FOREIGN KEY constraint links tables, so the database refuses a student whose class_id doesn't exist. A JOIN combines related tables in one query: SELECT students.name, classes.teacher FROM students JOIN classes ON students.class_id = classes.id; shows each student with their class teacher.

## Listen

- SQL is the standard language for relational databases.
- DDL defines structure: create, alter and drop.
- DML changes data: insert, update and delete.
- DQL asks questions with select.
- Always use where with update and delete, or every row is affected.
- order by sorts results; group by makes summaries like counts.
- A join combines related tables in one query.

## Mission: Query a database

- If you can, open a free online SQL editor (search for "SQLite online"), create a students table, insert five students, and select those in grade 11.
- Write a query that counts how many students are in each grade.

Question: Your SELECT query for grade 11 students.

### Task: sort
Label: Is each statement DDL, DML or DQL?
Buckets: DDL | DML | DQL
- CREATE TABLE → DDL
- INSERT INTO → DML
- SELECT → DQL
- DROP TABLE → DDL
- UPDATE → DML
- DELETE FROM → DML
- ALTER TABLE → DDL

### Task: typing
Label: Type this SQL query exactly. It lists every column for every student.
Target: SELECT * FROM students;

### Task: pick

#### What does DELETE FROM students; (with no WHERE) do?
- [ ] Deletes one row
- [x] Deletes every row in the table
- [ ] Deletes the table's structure
- [ ] Nothing
Why: Without WHERE, the condition applies to all rows. The table remains, but empty.

#### Which query lists the names of students in grade 11 only?
- [ ] SELECT name FROM students;
- [x] SELECT name FROM students WHERE grade = 11;
- [ ] SELECT 11 FROM students;
- [ ] UPDATE students SET grade = 11;
Why: WHERE filters the rows; the last option would change data instead of reading it.

## Quiz

### What does SQL stand for?
- [x] Structured Query Language
- [ ] Simple Question Logic
- [ ] Server Quick Link
- [ ] Standard Question Language
Why: It's the standard language for querying and managing relational databases.

### Which statement adds a new row?
- [ ] SELECT
- [ ] UPDATE
- [x] INSERT INTO
- [ ] CREATE TABLE
Why: INSERT adds records; CREATE TABLE makes a new table.

### Which statement changes existing data?
- [ ] INSERT
- [x] UPDATE
- [ ] DROP
- [ ] SELECT
Why: UPDATE ... SET ... WHERE changes matching rows.

### Which statement removes a whole table and all its data?
- [ ] DELETE
- [x] DROP TABLE
- [ ] ALTER TABLE
- [ ] CLEAR
Why: DROP removes the structure too; DELETE only removes rows.

### What does SELECT * mean?
- [ ] Select only the first row of the table
- [x] Select every column of the table
- [ ] Select nothing, to test the query
- [ ] Select the primary key column only
Why: The * is shorthand for every column, so SELECT * FROM students returns all the fields of each matching row.

### Which clause sorts the results?
- [ ] WHERE
- [ ] GROUP BY
- [x] ORDER BY
- [ ] SORT
Why: ORDER BY name sorts alphabetically; add DESC for reverse order.

### What does GROUP BY grade with COUNT(*) produce?
- [ ] Every student's name, sorted by grade
- [x] The number of students in each grade
- [ ] The total of all the grades added together
- [ ] An error, because COUNT needs a column name
Why: GROUP BY puts rows into groups, and COUNT counts each group.

### What is a JOIN used for?
- [x] Combining related rows from two or more tables
- [ ] Deleting two or more tables in a single statement
- [ ] Creating new users who can log in to the database
- [ ] Copying a table so there is a backup of its data
Why: A JOIN matches rows using keys, such as students.class_id = classes.id.

### CREATE, ALTER and DROP belong to...
- [x] DDL (Data Definition Language)
- [ ] DML (Data Manipulation Language)
- [ ] DQL (Data Query Language)
- [ ] DCL (Data Control Language)
Why: They define or change the structure, not the data inside.

### Why should UPDATE nearly always have a WHERE clause?
- [ ] It makes the UPDATE run much faster
- [x] Without it, every row in the table is changed
- [ ] SQL refuses to run an UPDATE that has no WHERE
- [ ] It sorts the rows before they are changed
Why: A missing WHERE is one of the most common and costly database mistakes.
