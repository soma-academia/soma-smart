---
id: k-topology
track: kcse
code: K3
name: Network Devices, Topologies & Security
part: Devices, topologies and keeping networks safe
cbe: strand
strand: KCSE 451 · Form 4 · Networking and data communication
video:
video_title:
video_channel:
explainer: network-path
---

# K3 · Network Devices, Topologies & Security

## Read

### 🧰 Network devices

A network interface card (NIC) connects a computer to the network medium and gives it a unique physical (MAC) address. A modem converts digital data to analogue and back so computers can communicate over telephone lines. A hub connects computers in a star network and sends (broadcasts) every packet to all ports. A switch also connects computers, but it forwards each packet only to the port of the destination computer, which reduces traffic. A repeater receives a weak signal and regenerates (boosts) it so it can travel further, overcoming attenuation. A bridge joins two network segments (usually using the same protocol) and filters traffic between them. A router connects different networks and chooses the best path for each packet, such as linking a school LAN (Local Area Network) to the internet. A gateway connects networks that use different protocols by translating between them. A wireless access point (WAP) lets wireless devices join a wired network.

### 💽 Network software and network models

Networks need software as well as hardware. A network operating system (NOS), such as Windows Server or Linux, manages network resources, user accounts, security and access to shared files and printers. Protocols are the set of rules that govern how data is sent and received on a network; TCP/IP (Transmission Control Protocol/Internet Protocol) is the protocol used on the internet, where TCP breaks data into packets and reassembles them, and IP addresses and routes the packets. In a peer-to-peer network, all computers are equal and each user shares resources from their own computer; it is cheap and simple for a few computers but hard to secure and manage. In a client-server network, one or more powerful servers provide resources and services to client computers; it is centrally managed, more secure and easy to back up, but the server is costly and if it fails users lose access.

### ⚙️ Choosing a network operating system

When choosing a network operating system for a LAN (Local Area Network), consider: the number of users and computers it must support, and whether it can grow (scalability); its security features, such as user accounts, access rights and encryption; the cost of buying and licensing it; compatibility with the hardware and software already in use; ease of installation and administration; and the support and updates offered by its maker. Examples include Windows Server, Linux and UNIX.

### 🕸️ Topologies

Topology is the way computers are arranged in a network. Physical topology is the actual layout of devices and cables; logical topology is how data flows through the network. Star: each computer connects to a central hub or switch; a failed cable affects only one computer and it is easy to add devices, but if the central device fails the whole network fails and it uses a lot of cable. Bus: all computers share one backbone cable with terminators at each end; it is cheap and uses little cable, but a break in the backbone brings down the network and faults are hard to find. Ring: computers form a closed loop and data passes in one direction from one to the next; every computer gets equal access, but one failed computer or cable can break the whole ring. Mesh: each computer has links to many or all others; it is very reliable because data can take another route, but it is expensive and complex to cable. Tree (hierarchical): groups of star networks connected to a backbone in levels; it is easy to expand and manage, but if the backbone or a top-level device fails, the networks below it are cut off.

### 🔐 Network security

Share-level security protects each shared resource, such as a folder or printer, with its own password; anyone who knows the password can use it. User-level security gives each user an account with a username and password, and the administrator sets which resources each user can access; it is more secure and is used in client-server networks. A firewall is hardware or software that filters traffic between a private network and the internet, blocking unauthorised access. A proxy server sits between users and the internet, forwarding their requests; it can hide internal addresses, filter websites and cache (store) popular pages to speed up access. Encryption scrambles data into a coded form so that only someone with the right key can read it, protecting data as it travels. An audit trail is a record (log) of who accessed the system, when, and what they did, which helps to detect and investigate security breaches.

### 🎣 Threats and data integrity

Phishing tricks users, through fake emails or messages that look genuine, into giving away passwords, PINs (Personal Identification Numbers) or card details. Pharming redirects users from a genuine website to a fake one, for example by corrupting DNS (Domain Name System) records, so the victim lands on the fake site even after typing the correct address. Data integrity means data stays accurate, complete and consistent. Measures to protect it: validation and verification when data is entered; passwords and access rights so only authorised users can change data; regular backups kept off-site; antivirus software; audit trails; and a UPS (Uninterruptible Power Supply) so a power cut does not corrupt data being saved.

### 📝 In the exam

KCSE often asks: state the function of a given device (hub, switch, repeater, bridge, router, gateway, NIC); differentiate between a hub and a switch, or a bridge and a router; state two advantages and two disadvantages of a given topology, often from a diagram; differentiate between physical and logical topology; differentiate between peer-to-peer and client-server networks; explain security measures such as firewalls, encryption and audit trails; distinguish between phishing and pharming; state factors to consider when choosing a network operating system; state measures that ensure data integrity; and answer questions on a labelled topology diagram (name a device and its function, or say what happens if it fails). Remember: a hub broadcasts to all ports while a switch sends only to the destination; a repeater boosts a signal; a router connects different networks; a gateway connects networks using different protocols; in a star the central device is a single point of failure; and in a bus a backbone break stops the whole network.

## Listen

- A NIC connects a computer to the network; a repeater boosts weak signals.
- A hub sends data to all ports, but a switch sends it only to the right computer.
- A router connects different networks; a gateway connects networks that use different protocols.
- Protocols are rules for communication; the internet uses TCP/IP.
- In a star topology, if the central hub or switch fails, the whole network fails.
- In a bus topology, a break in the backbone cable brings the network down.
- Firewalls, proxy servers, encryption and audit trails help keep a network secure.

## Mission: Inspect a network

- In your school computer lab, follow the cables from a few computers: do they all go to one central box? Is it a hub or a switch?
- Ask the lab technician whether the lab is peer-to-peer or client-server, and how users log in.
- Find the router that connects the school or a cybercafé to the internet.

Question: The topology of your school lab and one device you saw in it.

### Task: order
Label: Put the path in order, from a lab computer out to a website on the internet.
1. A computer in the school lab
   > The user requests a web page.
2. The NIC
   > It puts the data onto the network cable.
3. The switch
   > It forwards the packets to the port connected to the router.
4. The firewall
   > It checks the traffic leaving and entering the school network.
5. The router
   > It chooses the best path out to the internet service provider.
6. The web server
   > It receives the request and sends the page back the same way.

### Task: pick

#### Which device sends incoming data to every port, causing extra traffic?
- [x] A hub
- [ ] A switch
- [ ] A router
- [ ] A firewall
Why: A hub broadcasts to all ports; a switch learns where each computer is and sends data only to that port.

#### A school wants every student to log in with their own username, with the administrator deciding who can open which folders. Which type of security is this?
- [ ] Share-level security
- [x] User-level security
- [ ] Encryption
- [ ] A proxy server
Why: User-level security grants access per user account; share-level security puts a password on each shared resource.

#### Which topology keeps working best when one link fails, because data can take another route?
- [ ] Bus
- [ ] Ring
- [ ] Star
- [x] Mesh
Why: Mesh provides many paths between computers, so a failed link is bypassed.

## Quiz

### What is the function of a repeater?
- [ ] To connect networks that use different protocols
- [x] To regenerate a weak signal so it can travel further
- [ ] To block unauthorised access from outside the network
- [ ] To give each computer on the network a MAC address
Why: A repeater overcomes attenuation by receiving a weakened signal, regenerating it and passing it on, so the cable can be extended.

### How does a switch differ from a hub?
- [ ] A switch connects a LAN to the internet; a hub joins networks with different protocols
- [ ] A switch sends data to all ports; a hub sends it only to the destination port
- [x] A switch sends data only to the destination port; a hub sends it to all ports
- [ ] A switch works only with wireless devices; a hub works only with cables
Why: A switch reads the destination MAC address and forwards data only where it is needed, reducing network traffic; a hub broadcasts to every port.

### Which device connects two networks that use different protocols?
- [ ] Repeater
- [ ] Hub
- [ ] Network interface card
- [x] Gateway
Why: A gateway translates between different protocols; a router connects networks and chooses paths for packets, and a hub simply joins computers.

### TCP/IP is an example of a...
- [x] Protocol
- [ ] Topology
- [ ] Transmission medium
- [ ] Network operating system
Why: A protocol is a set of rules for communication between devices; TCP/IP is the protocol suite used on the internet.

### Which is an advantage of a client-server network over a peer-to-peer network?
- [ ] It needs no dedicated server, so it costs less
- [x] Resources and security are managed centrally
- [ ] It is cheaper and simpler to set up than any other network
- [ ] Every computer has equal status and shares its own resources
Why: Servers centralise user accounts, security and backups; peer-to-peer is cheaper because every computer is equal, but it is harder to manage.

### Logical topology describes...
- [ ] The type and length of cables used
- [ ] The physical position of computers in a room
- [x] How data flows through the network
- [ ] The number of printers on the network
Why: Physical topology is the actual layout of cables and devices; logical topology is the path data takes, which may differ from the physical layout.

### What is a disadvantage of a star topology?
- [x] If the central hub or switch fails, the whole network fails
- [ ] A break in any one computer's cable brings down the whole network
- [ ] It is very hard to add new computers once it is set up
- [ ] Data can travel only in one direction around a closed loop
Why: All computers connect through the central device, so it is a single point of failure; a break in one computer's cable affects only that computer.

### In a bus topology, what are terminators used for?
- [ ] To connect the backbone to the internet through a router
- [ ] To encrypt data before it travels along the backbone
- [ ] To boost the signal so that it can reach computers at the far end of the backbone
- [x] To absorb signals at the backbone ends so they do not bounce back
Why: Without terminators, signals reflect from the cable ends and collide with new data, so the network stops working properly.

### A tree (hierarchical) topology is best described as...
- [ ] Computers connected in a single closed loop, data passing from one to the next
- [x] Groups of star networks connected to a backbone in levels
- [ ] Every computer linked directly to every other computer on the network
- [ ] Two computers joined directly by one cable
Why: A tree links several star networks in levels, which makes it easy to expand, as in a school with several labs joined to one backbone.

### What does an audit trail provide?
- [ ] A coded version of the data that only authorised users can read
- [ ] A copy of popular web pages kept locally to speed up access
- [x] A record of who accessed the system, when, and what they did
- [ ] A backup power supply that keeps the server running during outages
Why: Audit trails log user activity so administrators can detect and investigate security breaches; encryption, caching and UPS are separate measures.
