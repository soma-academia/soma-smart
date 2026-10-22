---
id: s11-db
track: senior11
code: S21
name: Relational Databases
part: Tables, keys and relationships
cbe: strand
strand: Grade 11 · 3.3 Relational Database Fundamentals
video:
video_title:
video_channel:
explainer:
---

# S21 · Relational Databases

## Read

### 🗃️ Databases and the DBMS

Data is raw facts (85, "Amani"); information is data with meaning ("Amani scored 85 in Maths"). A database is an organised collection of related data. A database management system (DBMS), such as MySQL, PostgreSQL, Microsoft Access or Oracle, lets you create, store, search and secure it. Metadata (stored in a data dictionary) is data about the data, such as each field's name and type.

### 🌳 Database models

Hierarchical databases store data as a tree (one parent, many children). Network databases allow many links between records. Relational databases, the most common today, store data in tables that are linked by shared values. Object-oriented databases store data as objects, like OOP programs.

### 📊 Tables, records and fields

In a relational database each table holds one entity, such as Students. Each row is a record (one student), and each column is a field or attribute (name, admission number, class). Every field has a data type: text, integer, decimal, date or yes/no.

### 🔑 Keys

A primary key uniquely identifies each record, such as an admission number; it can never be blank or repeated. A foreign key is a field in one table that refers to the primary key of another, which is how tables link. A composite key combines two or more fields to be unique. A secondary key is used for searching, such as a surname.

### 🔗 Relationships and ER diagrams

Tables relate one-to-one (a student has one ID card), one-to-many (one class has many students) or many-to-many (students take many subjects, and each subject has many students). A many-to-many link needs a linking table. An entity-relationship (ER) diagram plans all this: rectangles for entities, ovals for attributes, diamonds for relationships.

## Listen

- Data is raw facts; information is data with meaning.
- A DBMS such as MySQL creates, stores and secures databases.
- Relational databases store data in linked tables.
- A row is a record, and a column is a field.
- A primary key uniquely identifies each record; a foreign key links to another table.
- Relationships can be one-to-one, one-to-many or many-to-many.
- ER diagrams use rectangles for entities and diamonds for relationships.

## Mission: Design a school database

- Design two tables, Students and Classes: list the fields, their data types, the primary key of each, and the foreign key that links them.
- Draw an ER diagram showing that one class has many students.

Question: Your two tables, with their keys.

### Task: pick

#### Which field makes the best primary key for a Students table?
- [ ] First name
- [x] Admission number
- [ ] Favourite subject
- [ ] Age
Why: A primary key must be unique and never blank; names and ages repeat.

#### The Students table has a field class_id that matches the primary key of the Classes table. What is class_id in Students?
- [ ] A primary key
- [x] A foreign key
- [ ] A composite key
- [ ] Metadata
Why: A foreign key refers to another table's primary key, which links the tables.

#### One class has many students, but each student is in one class. Which relationship is this?
- [ ] One-to-one
- [x] One-to-many
- [ ] Many-to-many
- [ ] No relationship
Why: One class row links to many student rows.

### Task: sort
Label: Sort these database terms.
Buckets: Structure | Key | Relationship
- Table → Structure
- Record (row) → Structure
- Field (column) → Structure
- Primary key → Key
- Foreign key → Key
- One-to-many → Relationship
- Many-to-many → Relationship

## Quiz

### What is a DBMS?
- [x] Software for creating, storing and searching databases
- [ ] A cable that links the database server to the network
- [ ] A single table that holds every record in a database
- [ ] A spreadsheet formula that adds up a column of numbers
Why: A DBMS such as MySQL, PostgreSQL, Microsoft Access or Oracle also controls who can see and change the data.

### In a table, a row is called a...
- [ ] Field
- [x] Record
- [ ] Key
- [ ] Column
Why: Each row holds all the data about one item, such as one student.

### What is metadata?
- [ ] Very large data that is too big for one computer
- [x] Data about data, such as field names and types
- [ ] Data that has been deleted but can be recovered
- [ ] Data that has been encrypted so it can't be read
Why: Metadata describes the structure, and is often stored in a data dictionary.

### Which database model stores data in linked tables?
- [ ] Hierarchical
- [ ] Network
- [x] Relational
- [ ] Paper-based
Why: Relational databases use tables linked by keys.

### Which is true of a primary key?
- [ ] It can repeat if two students share the same name
- [ ] It can be left blank until the record is complete
- [x] It is unique for every record and never blank
- [ ] It must be text, never a number
Why: Uniqueness lets the database find exactly one record.

### What is a composite key?
- [x] Two or more fields that are unique together
- [ ] A key made only of letters, with no numbers
- [ ] A foreign key that links to another table's key
- [ ] A password that locks the whole database file
Why: For example, student ID plus subject ID identifies one exam result.

### How is a many-to-many relationship stored?
- [ ] In one table, with both sets of data in each row
- [x] With a linking table between the two tables
- [ ] It cannot be stored in a relational database
- [ ] By copying both tables into one spreadsheet
Why: A linking table (such as Enrolments) holds pairs of foreign keys.

### In an ER diagram, a rectangle represents...
- [x] An entity
- [ ] A relationship
- [ ] An attribute
- [ ] A key only
Why: Rectangles are entities, ovals are attributes and diamonds are relationships.

### What is the difference between data and information?
- [ ] There is none; the two words mean the same thing
- [x] Information is processed data that has meaning
- [ ] Data has meaning; information is just raw facts
- [ ] Information is always numbers; data is always text
Why: "85" is data; "Amani scored 85 in Maths" is information.

### What is a secondary key used for?
- [ ] Uniquely identifying each record in the table
- [x] Searching or sorting by another field, like surname
- [ ] Encrypting the data so only its owner can read it
- [ ] Linking every table in the database to a website
Why: Secondary keys speed up common searches but don't have to be unique.
