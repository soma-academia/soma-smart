---
id: s11-protocols
track: senior11
code: S17
name: Network Standards & Protocols
part: TCP/IP, OSI and encapsulation
cbe: strand
strand: Grade 11 · 2.1 Computer Network Standards and Protocols
video: 5o8CwafCxnU
video_title: The Internet: IP Addresses & DNS
video_channel: Code.org
explainer: dns-lookup
---

# S17 · Network Standards & Protocols

## Read

### 📏 Why standards exist

Standards are agreed specifications that let equipment from different makers work together. IEEE writes standards such as 802.3 (Ethernet) and 802.11 (Wi-Fi). The IETF publishes the internet's protocols. ISO created the OSI model. Because of standards, any phone can join any Wi-Fi network.

### 📜 Common protocols

HTTP and HTTPS load web pages (HTTPS is the encrypted version). SMTP sends email; POP3 and IMAP collect it. FTP transfers files. DNS turns names into IP addresses. DHCP gives devices an IP address automatically when they join a network. TCP delivers data reliably and in order; UDP is faster but doesn't guarantee delivery, which suits video calls.

### 🧱 The TCP/IP model

The internet follows the four-layer TCP/IP model. Application: the protocols apps use (HTTP, SMTP, DNS). Transport: TCP or UDP split data into segments and use port numbers to reach the right app. Internet: IP addresses and routes packets across networks. Network access: sends frames over the actual medium, such as Ethernet or Wi-Fi.

### 🏢 The OSI model

OSI describes networking in seven layers: 7 Application, 6 Presentation (formats and encryption), 5 Session (manages conversations), 4 Transport, 3 Network, 2 Data link (frames and MAC addresses), 1 Physical (bits on the wire). OSI's top three layers map to TCP/IP's Application layer, and its bottom two to Network access.

### 📦 Encapsulation and decapsulation

When you send data, each layer wraps it with its own header on the way down: data becomes a segment (transport), then a packet (internet), then a frame (network access), then bits on the wire. The receiver unwraps the layers in reverse on the way up. This is called decapsulation.

## Listen

- Standards let equipment from different makers work together.
- IEEE 802.11 is Wi-Fi, and 802.3 is Ethernet.
- HTTP loads pages, SMTP sends email, DNS finds addresses, and DHCP hands them out.
- TCP is reliable and ordered; UDP is fast but makes no promises.
- TCP/IP has four layers: application, transport, internet and network access.
- OSI has seven layers, from physical up to application.
- Each layer adds a header going down, and removes it coming up.

## Mission: Inspect a real network

- On a computer, run ipconfig (Windows) or ifconfig (Mac or Linux) and find your IP address, subnet mask and default gateway.
- On a phone, open Wi-Fi settings: find the IP address that DHCP assigned and whether it uses 802.11n, ac or ax (if shown).

Question: Your IP address and default gateway, and which protocol gave you that address.

### Task: sort
Label: Which TCP/IP layer does each one belong to?
Buckets: Application | Transport | Internet | Network access
- HTTP → Application
- TCP → Transport
- IP → Internet
- Ethernet frames → Network access
- DNS → Application
- UDP → Transport
- Wi-Fi (802.11) radio signals → Network access

### Task: order
Label: Put the OSI layers in order, from layer 1 (bottom) to layer 7 (top).
1. Physical
   > Bits as electrical, light or radio signals.
2. Data link
   > Frames and MAC addresses on the local network.
3. Network
   > IP addresses and routing between networks.
4. Transport
   > TCP or UDP, ports, reliable delivery.
5. Session
   > Starts, manages and ends conversations.
6. Presentation
   > Formats, compresses and encrypts data.
7. Application
   > The protocols apps use, such as HTTP.

### Task: pick

#### Which protocol gives your phone an IP address automatically when it joins Wi-Fi?
- [ ] DNS
- [x] DHCP
- [ ] SMTP
- [ ] FTP
Why: DHCP (Dynamic Host Configuration Protocol) leases addresses so you don't have to set them by hand.

## Quiz

### What does a network standard do?
- [ ] Makes the internet slower
- [x] Lets equipment from different makers work together
- [ ] Charges devices
- [ ] Blocks all traffic
Why: Agreed specifications mean any compliant device can talk to any other.

### Which IEEE standard is Wi-Fi?
- [ ] 802.3
- [x] 802.11
- [ ] 802.1
- [ ] 404
Why: The 802.11 family (n, ac, ax and so on) defines wireless LANs; 802.3 is wired Ethernet.

### Which protocol sends email?
- [x] SMTP
- [ ] HTTP
- [ ] DHCP
- [ ] FTP
Why: SMTP sends mail between servers; POP3 or IMAP fetch it into your inbox.

### Why would a video call use UDP instead of TCP?
- [ ] UDP is more secure
- [x] Speed matters more than resending a lost packet
- [ ] TCP cannot carry video
- [ ] UDP uses no IP address
Why: A late, resent frame is useless in a live call, so UDP's speed wins.

### How many layers does the TCP/IP model have?
- [ ] 3
- [x] 4
- [ ] 5
- [ ] 7
Why: Application, transport, internet and network access.

### Which OSI layer handles IP addresses and routing?
- [ ] Data link
- [x] Network
- [ ] Session
- [ ] Physical
Why: Layer 3 (network) moves packets between networks using IP addresses.

### What is encapsulation?
- [ ] Deleting old data
- [x] Each layer adding its own header as data goes down the layers
- [ ] Encrypting a password
- [ ] Storing data in a capsule
Why: Headers carry what each layer needs, such as ports, IP addresses and MAC addresses.

### At the transport layer, what directs data to the right application?
- [ ] The MAC address
- [x] A port number
- [ ] The screen size
- [ ] The IP address only
Why: Ports (like 443 for HTTPS) tell the computer which app should receive the data.

### Which OSI layer formats and encrypts data?
- [ ] Physical
- [ ] Transport
- [x] Presentation
- [ ] Network
Why: Layer 6 (presentation) handles formats, compression and encryption.

### What does the receiving computer do in decapsulation?
- [x] Removes each layer's header on the way up
- [ ] Adds more headers
- [ ] Sends the data back
- [ ] Turns the data into light
Why: Each layer reads and strips its header, until the app gets the original data.
