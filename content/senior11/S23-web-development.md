---
id: s11-web
track: senior11
code: S23
name: Web Development
part: HTML, CSS and dynamic web apps
cbe: strand
strand: Grade 11 · 3.5 Web Development Fundamentals
video: kBXQZMmiA4s
video_title: The Internet: HTTP & HTML
video_channel: Code.org
explainer:
---

# S23 · Web Development

## Read

### 🌐 Web words

A web page is one document; a website is a group of linked pages; a web application does work for the user, like booking a bus ticket. The web follows the client–server model: your browser (the client) asks a web server for a page using HTTP, and the server sends it back.

### 🧱 HTML: structure

HTML (HyperText Markup Language) gives a page its structure using tags in angle brackets. Every page has <html>, a <head> holding the <title>, and a <body> holding the content. Common tags: <h1> heading, <p> paragraph, <a href="..."> link, <img src="..." alt="..."> image, <ul> and <li> lists, <table> tables, <form> and <input> for user input.

### 🎨 CSS: style

CSS (Cascading Style Sheets) controls how a page looks: colours, fonts, spacing and layout. Inline CSS goes in a tag's style attribute. Internal CSS goes in a <style> block in the head. External CSS lives in a separate .css file linked to many pages, which is the best way to keep a whole site consistent.

### ⚙️ Static and dynamic pages

A static page shows the same content to everyone, straight from a file. A dynamic page is built when you ask for it. Client-side scripts (JavaScript) run in your browser, for example checking a form. Server-side scripts (such as PHP) run on the server, often reading or saving data in a database.

### 🔄 A dynamic web app, end to end

A learner fills in a registration form and taps Submit. The browser sends the form to the server. A PHP script checks the data and saves it to a MySQL database with SQL. The server then sends back a confirmation page. Design first with a wireframe (a simple sketch of the layout), and add alt text so everyone can use the site.

## Listen

- A browser, the client, asks a web server for pages using HTTP.
- HTML gives a page its structure with tags.
- Every page has a head with a title, and a body with the content.
- CSS controls colours, fonts and layout.
- External CSS keeps a whole site looking consistent.
- JavaScript runs in the browser; PHP runs on the server.
- A dynamic app sends form data to a server script that saves it in a database.

## Mission: Build a page

- If you can, open a text editor, write a page with a heading, a paragraph, a list and a link, save it as index.html, and open it in a browser.
- Add an external style.css file that changes the heading colour and the font.

Question: The HTML tags you used, and what each one does.

### Task: order
Label: Put the parts of a basic HTML page in order, from top to bottom.
1. <!DOCTYPE html>
   > Tells the browser this is an HTML5 document.
2. <html>
   > Opens the whole page.
3. <head> with a <title>
   > Information about the page, shown in the browser tab.
4. <body>
   > Everything visible on the page goes here.
5. </html>
   > Closes the page.

### Task: sort
Label: Does each one run in the browser (client) or on the server?
Buckets: Client side | Server side
- JavaScript checking a form before it is sent → Client side
- PHP saving a registration to the database → Server side
- CSS styling the page → Client side
- A MySQL query that finds a user's bookings → Server side
- HTML being displayed → Client side

### Task: pick

#### Which tag makes a link?
- [ ] <img>
- [x] <a href="...">
- [ ] <link>
- [ ] <p>
Why: The a (anchor) tag with an href address makes a clickable link.

#### Which kind of CSS keeps a whole website consistent most easily?
- [ ] Inline CSS in every tag
- [ ] Internal CSS on every page
- [x] One external .css file linked to every page
- [ ] No CSS
Why: Change one file and every linked page updates.

## Quiz

### What does HTML stand for?
- [x] HyperText Markup Language
- [ ] High Tech Modern Language
- [ ] Home Tool Markup Language
- [ ] Hyperlink Text Machine Language
Why: It marks up content with tags so browsers know what each part is.

### Where does the <title> tag go?
- [ ] In the body
- [x] In the head
- [ ] After </html>
- [ ] In the CSS file
Why: The title is information about the page, shown in the browser tab.

### What is CSS used for?
- [ ] Storing the data that a website collects
- [x] Controlling how a page looks
- [ ] Sending email from a contact form
- [ ] Running the web server that hosts the site
Why: HTML gives a page its structure, while CSS sets its colours, fonts, spacing and layout.

### What does the alt attribute on an image do?
- [ ] Makes the image bigger so it fills a phone screen
- [x] Gives a text description used when the image can't be seen
- [ ] Turns the whole image into a link that opens another page
- [ ] Changes the colours of the image to suit dark mode
Why: Screen readers read the alt text aloud for blind users, and browsers show it if the image fails to load.

### What is the difference between a static and a dynamic page?
- [x] Static is the same for everyone; dynamic is built per request
- [ ] Static pages contain no text; dynamic pages contain only text
- [ ] Dynamic pages cannot use HTML, so they are written in CSS
- [ ] Static pages move and animate; dynamic pages never change
Why: Dynamic pages can show your own data, such as your bookings.

### Where does PHP run?
- [ ] In the browser
- [x] On the web server
- [ ] In the CSS file
- [ ] On the keyboard
Why: PHP is server-side: it builds the page or saves data before the response is sent.

### In the client–server model, the browser is the...
- [x] Client
- [ ] Server
- [ ] Database
- [ ] Router
Why: The client asks for resources, and the server responds.

### Which tag starts a bulleted list?
- [ ] <ol>
- [x] <ul>
- [ ] <li>
- [ ] <list>
Why: ul is an unordered (bulleted) list; ol is numbered; li is each item.

### What is a wireframe?
- [ ] A network cable made of thin twisted copper wires
- [x] A simple sketch of a page's layout, drawn before coding
- [ ] A type of virus that spreads through web pages
- [ ] A CSS file that sets the frame around each page
Why: Wireframes let you plan the layout cheaply before writing any code.

### A learner submits a form, and the data is saved in MySQL. Which order is right?
- [ ] Database → browser → server
- [x] Browser → server script → database
- [ ] Server script → browser → database
- [ ] Browser → database → server script
Why: The browser sends the form, the server script checks it and saves it to the database.
