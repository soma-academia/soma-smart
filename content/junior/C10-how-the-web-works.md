---
id: j-web
track: junior
code: C10
name: How the Web Works
part: Domains, DNS & HTTPS
cbe: strand
strand: Grade 7–9 · How the web works: domains, DNS & HTTPS
video: 5o8CwafCxnU
video_title: The Internet: IP Addresses & DNS
video_channel: Code.org
explainer: dns-lookup
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
- [x] The pages and sites you view in a browser
- [ ] The same thing as the whole internet
- [ ] The cables that carry data between countries
- [ ] The company that connects your home online
Why: The internet is the network of connected computers; the web is one service that runs on it, alongside things like email.

### A domain name (like safaricom.co.ke) is...
- [x] A friendly name that points to a website
- [ ] The secret password for a website
- [ ] The number that identifies the server
- [ ] The type of file that a web page is saved in
Why: Computers find servers by IP numbers, which are hard to remember, so we use names like safaricom.co.ke and let DNS look up the number.

### DNS turns a domain name into...
- [x] An IP address
- [ ] An encrypted link
- [ ] A web page
- [ ] A security certificate
Why: Like a contact list turning a name into a phone number, DNS looks up the IP address of the server that hosts the site.

### When you open a page, your browser sends the server an...
- [x] HTTP request
- [ ] HTTP response
- [ ] DNS reply
- [ ] SMS message
Why: The request asks for a page; the server answers with an HTTP response that carries the text, images and code to show it.

### HTTPS is different from HTTP because it...
- [x] Encrypts the data sent
- [ ] Makes pages load with no internet
- [ ] Is always slower
- [ ] Uses a shorter, faster web address
Why: With HTTPS, TLS scrambles the data so others on the network, such as on public Wi-Fi, can't read or change it.

### The padlock in the address bar means...
- [x] Encrypted connection, and the site proved its identity
- [ ] The site is trustworthy and cannot be a phishing scam
- [ ] The page has been checked for viruses by the browser
- [ ] The website is free to use and has no adverts
Why: The padlock shows the traffic is encrypted and the certificate matches the domain; it does not prove the owner is honest, so still check the name.

### A phishing site often uses...
- [x] A look-alike domain name
- [ ] The company's exact official domain
- [ ] A .go.ke government address
- [ ] A slower connection than real sites
Why: Scammers can't use the real domain, so they pick names that look close, like kra-itax.co, hoping you won't read carefully.

### You should NEVER enter a password on...
- [x] Plain HTTP (no padlock)
- [ ] HTTPS on the official domain
- [ ] A site you reached by typing its address
- [ ] Your bank's HTTPS app
Why: Over plain HTTP your password travels unencrypted, so anyone on the same network, such as public Wi-Fi, could read it.

### In the URL 'https://techtayari.co.ke', which part is the Top-Level Domain (TLD)?
- [x] .ke
- [ ] https
- [ ] techtayari
- [ ] .co
Why: Read a domain from the right: the last part, .ke for Kenya, is the top-level domain, then comes co.ke for companies, then techtayari.co.ke.

### When a DNS cache stores an address lookup locally, it...
- [x] Speeds up later visits by skipping a repeat lookup
- [ ] Saves a copy of each page's images and text
- [ ] Makes the website's server respond more slowly
- [ ] Encrypts the lookup so nobody can see it
Why: Your device remembers the name-to-IP answer for a while, so the next visit can connect straight away without asking a DNS server again.
