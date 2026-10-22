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

A network interface card (NIC) connects a computer to the network medium and gives it a unique physical (MAC) address. A modem converts digital data to analogue and back so computers can communicate over telephone lines. A hub connects computers in a star network and sends (broadcasts) every packet to all ports. A switch also connects computers, but it forwards each packet only to the port of the destination computer, which reduces traffic. A repeater receives a weak signal and regenerates (boosts) it so it can travel further, overcoming attenuation. A bridge joins two network segments (usually using the same protocol) and filters traffic between them. A router connects different networks and chooses the best path for each packet, such as linking a school LAN to the internet. A gateway connects networks that use different protocols by translating between them. A wireless access point (WAP) lets wireless devices join a wired network.

### 💽 Network software and network models

Networks need software as well as hardware. A network operating system (NOS), such as Windows Server or Linux, manages network resources, user accounts, security and access to shared files and printers. Protocols are the set of rules that govern how data is sent and received on a network; TCP/IP (Transmission Control Protocol/Internet Protocol) is the protocol used on the internet, where TCP breaks data into packets and reassembles them, and IP addresses and routes the packets. In a peer-to-peer network, all computers are equal and each user shares resources from their own computer; it is cheap and simple for a few computers but hard to secure and manage. In a client-server network, one or more powerful servers provide resources and services to client computers; it is centrally managed, more secure and easy to back up, but the server is costly and if it fails users lose access.

### 🕸️ Topologies

Topology is the way computers are arranged in a network. Physical topology is the actual layout of devices and cables; logical topology is how data flows through the network. Star: each computer connects to a central hub or switch; a failed cable affects only one computer and it is easy to add devices, but if the central device fails the whole network fails and it uses a lot of cable. Bus: all computers share one backbone cable with terminators at each end; it is cheap and uses little cable, but a break in the backbone brings down the network and faults are hard to find. Ring: computers form a closed loop and data passes in one direction from one to the next; every computer gets equal access, but one failed computer or cable can break the whole ring. Mesh: each computer has links to many or all others; it is very reliable because data can take another route, but it is expensive and complex to cable. Tree (hierarchical): groups of star networks connected to a backbone in levels; it is easy to expand and manage, but if the backbone or a top-level device fails, the networks below it are cut off.

### 🔐 Network security

Share-level security protects each shared resource, such as a folder or printer, with its own password; anyone who knows the password can use it. User-level security gives each user an account with a username and password, and the administrator sets which resources each user can access; it is more secure and is used in client-server networks. A firewall is hardware or software that filters traffic between a private network and the internet, blocking unauthorised access. A proxy server sits between users and the internet, forwarding their requests; it can hide internal addresses, filter websites and cache (store) popular pages to speed up access. Encryption scrambles data into a coded form so that only someone with the right key can read it, protecting data as it travels. An audit trail is a record (log) of who accessed the system, when, and what they did, which helps to detect and investigate security breaches.

### 📝 In the exam

KCSE often asks: state the function of a given device (hub, switch, repeater, bridge, router, gateway, NIC); differentiate between a hub and a switch, or a bridge and a router; state two advantages and two disadvantages of a given topology, often from a diagram; differentiate between physical and logical topology; differentiate between peer-to-peer and client-server networks; and explain security measures such as firewalls, encryption and audit trails. Remember: a hub broadcasts to all ports while a switch sends only to the destination; a repeater boosts a signal; a router connects different networks; a gateway connects networks using different protocols; in a star the central device is a single point of failure; and in a bus a backbone break stops the whole network.

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
- [ ] To connect networks using different protocols
- [x] To regenerate a weak signal so it can travel further
- [ ] To block unauthorised access
- [ ] To give a computer a MAC address
Why: A repeater overcomes attenuation by receiving a weakened signal and boosting it.

### How does a switch differ from a hub?
- [ ] A switch connects a computer to the internet; a hub prints documents
- [ ] A switch sends data to all ports; a hub sends data to one port
- [x] A switch sends data only to the destination port; a hub sends it to all ports
- [ ] There is no difference
Why: A switch reads the destination address and forwards data only where it is needed, reducing network traffic.

### Which device connects two networks that use different protocols?
- [ ] Repeater
- [ ] Hub
- [ ] Network interface card
- [x] Gateway
Why: A gateway translates between different protocols; a router connects networks and chooses paths for packets.

### TCP/IP is an example of a...
- [x] Protocol
- [ ] Topology
- [ ] Transmission medium
- [ ] Network operating system
Why: A protocol is a set of rules for communication; TCP/IP is the protocol suite used on the internet.

### Which is an advantage of a client-server network over a peer-to-peer network?
- [ ] It needs no server
- [x] Resources and security are managed centrally
- [ ] It is cheaper to set up
- [ ] Every computer is equal
Why: Servers centralise user accounts, security and backups; peer-to-peer is cheaper but harder to manage.

### Logical topology describes...
- [ ] The colour and length of the cables
- [ ] The physical position of computers in a room
- [x] How data flows through the network
- [ ] The number of printers on the network
Why: Physical topology is the actual layout of cables and devices; logical topology is the path data takes.

### What is a disadvantage of a star topology?
- [x] If the central hub or switch fails, the whole network fails
- [ ] One faulty cable brings down the whole network
- [ ] It is very hard to add new computers
- [ ] Data can only travel in one direction around a loop
Why: All computers connect through the central device, so it is a single point of failure.

### In a bus topology, what are terminators used for?
- [ ] To connect the network to the internet
- [ ] To encrypt data
- [ ] To boost the signal
- [x] To absorb signals at the ends of the backbone so they do not bounce back
Why: Without terminators, signals reflect from the cable ends and collide with new data.

### A tree (hierarchical) topology is best described as...
- [ ] A single closed loop of computers
- [x] Groups of star networks connected to a backbone in levels
- [ ] Every computer linked to every other computer
- [ ] Two computers joined by one cable
Why: A tree links several star networks in levels, which makes it easy to expand, as in a school with several labs.

### What does an audit trail provide?
- [ ] A coded version of the data
- [ ] A cache of popular web pages
- [x] A record of who accessed the system, when, and what they did
- [ ] A backup power supply
Why: Audit trails log user activity so administrators can detect and investigate security breaches.
