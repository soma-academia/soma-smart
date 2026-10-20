---
id: j-web
track: junior
code: C10
name: How the Web Works
part: Domains, DNS & HTTPS
cbe: strand
strand: Grade 7–9 · How the web works: domains, DNS & HTTPS
video:
video_title:
video_channel:
---

# C10 · How the Web Works

## Read

### 🔗 Websites vs the internet

The internet is the network of connected computers. The World Wide Web (WWW) is the pages and sites you view with a browser, which ride on top of the internet. The web is one of many things the internet carries.

### 🏷️ Domain names

Computers find each other by IP address (numbers), but numbers are hard to remember. A domain name like safaricom.co.ke is a friendly label for a website. Names end in parts like .com, .org, or Kenya's .ke / .co.ke.

### 📖 DNS: the internet's address book

DNS (Domain Name System) turns a domain name into its IP address — like a phone contact list turning a name into a number. When you type a site, your device asks a DNS resolver 'what's the IP for this name?' and gets an answer, usually in milliseconds.

### 📨 Loading a page: request & response

Your browser sends an HTTP request to the site's server ('please send me this page'). The server replies with an HTTP response containing the page — text, images and code — which the browser puts together and shows you.

### 🔒 HTTP vs HTTPS

HTTPS is HTTP with encryption (TLS): the data is scrambled so others on the network can't read or change it. The padlock means the connection is private and the site proved its identity with a certificate. Never enter a password or pay on plain HTTP.

### 🛡️ Trust and certificates

A site's certificate is issued by a trusted authority and ties the domain to its owner. It's why the padlock matters — it helps confirm you're really talking to safaricom.co.ke and not an impostor. Phishing sites often use look-alike names, so check the address carefully.

## Listen

- The internet is the network; the web is the pages you view in a browser.
- Computers find each other by IP address, but numbers are hard to remember.
- A domain name like safaricom.co.ke is a friendly label for a site.
- DNS turns that name into its IP address, like a contact list turning a name into a number.
- Your browser sends a request; the server sends back the page. Request and response.
- HTTPS adds encryption so others can't read or change your data.
- The padlock and a certificate help prove you're talking to the real site. Check the address!

## Mission: Look under the hood of the web

- Open a website and click the padlock — view the certificate and see who it was issued to.
- With a grown-up, open Command Prompt/Terminal and run: nslookup safaricom.co.ke  — note the IP address it returns.
- Compare two site addresses and explain which looks genuine and which could be a look-alike phishing name.

Question: An IP address DNS returned, and one tip for spotting a fake look-alike address.

### Task: order
Label: What happens when you open a website? Tap the steps in order.
1. You type www.ecitizen.go.ke and press Enter
   > Names are easy for people to remember. Computers need numbers.
2. Your device asks a DNS server: what is the IP for this name?
   > DNS is the internet's address book.
3. DNS replies with the site's IP address
   > Now your device knows which server to talk to.
4. Your browser connects to that IP and sets up HTTPS
   > HTTPS encrypts the connection. That's the padlock.
5. The server sends the page back and your browser shows it
   > Request, then response. That is how every page loads.

### Task: pick

#### Which address is most likely the REAL KRA iTax site?
- [ ] itax-kra.go.ke.login-help.com
- [x] itax.kra.go.ke
- [ ] kra-itax.co
- [ ] itax.kra.go.ke.verify.xyz
Why: Read the domain from the right: .go.ke is for the Kenyan government. The others really end in login-help.com, .co or verify.xyz.

#### Which address is a FAKE look-alike?
- [ ] www.google.com
- [ ] mail.google.com
- [x] www.g00gle.com
- [ ] www.google.co.ke
Why: Zeros swapped in for the letter o is a classic trick. google.co.ke is Google's real Kenya site.

#### What does the padlock (HTTPS) prove?
- [x] The connection to the named site is encrypted
- [ ] The site is honest and safe
- [ ] The site is run by the government
- [ ] The site has no viruses
Why: HTTPS protects your data on the way. Scam sites can have a padlock too, so always check the domain.

## Quiz

### The World Wide Web is...
- [x] The pages/sites you view in a browser
- [ ] The same as the whole internet
- [ ] A type of cable
- [ ] A password
Why: The web rides on top of the internet.

### A domain name (like safaricom.co.ke) is...
- [x] A friendly label for a website
- [ ] A password
- [ ] An IP number
- [ ] A file type
Why: Easier to remember than numbers.

### DNS turns a domain name into...
- [x] An IP address
- [ ] A password
- [ ] A photo
- [ ] A file
Why: Like a contact list: name → number.

### When you open a page, your browser sends the server an...
- [x] HTTP request
- [ ] IP address only
- [ ] SMS
- [ ] email
Why: The server replies with a response.

### HTTPS is different from HTTP because it...
- [x] Encrypts the data
- [ ] Is slower always
- [ ] Needs no internet
- [ ] Shows more ads
Why: TLS encryption keeps data private.

### The padlock in the address bar means...
- [x] The connection is encrypted and the site proved its identity
- [ ] The site is free
- [ ] You won a prize
- [ ] The page is empty
Why: Private + identity checked.

### A phishing site often uses...
- [x] A look-alike domain name
- [ ] The exact official name
- [ ] No name at all
- [ ] A padlock only
Why: Check the address carefully.

### You should NEVER enter a password on...
- [x] Plain HTTP (no padlock)
- [ ] HTTPS with a padlock
- [ ] A trusted site
- [ ] Your own account
Why: No encryption = unsafe.

### In the URL 'https://soma-smart.pages.dev', which part is the Top-Level Domain (TLD)?
- [x] .dev
- [ ] https
- [ ] soma-smart
- [ ] pages
Why: .dev is the TLD at the end of the domain hierarchy.

### When a DNS cache stores an address lookup locally, it...
- [x] Speeds up future requests by avoiding a repeat query across the internet
- [ ] Changes the website password
- [ ] Slows down your browser
- [ ] Deletes your history
Why: DNS caching saves time and network bandwidth.
