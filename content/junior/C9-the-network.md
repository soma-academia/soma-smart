---
id: j-network
track: junior
code: C9
name: The Network
part: From Device to Server
cbe: strand
strand: Grade 7–9 · Networks: device to server
video: AYdF7b3nMto
video_title: The Internet: Packets, Routing & Reliability
video_channel: Code.org
explainer: network-path
---

# C9 · The Network

## Read

### 🏠 Your local network (LAN)

At home or school your devices connect to a router — by Wi-Fi or cable — forming a Local Area Network (LAN). The router is the gateway between your LAN and the wider internet.

### 📮 Packets

Data is split into small packets, each labelled with where it's going and where it came from, like addressed envelopes. They travel separately and are reassembled at the destination.

### 🌍 ISP and the wider internet

Your router passes packets to your ISP (e.g. Safaricom, Zuku, JTL). The ISP connects to other networks — through cables, fibre, and undersea cables — until your packets reach the right server, maybe on another continent.

### 🔢 IP addresses

Every device on a network has an IP address, a number that identifies it, like a postal address. Packets use IP addresses to find their way. Public IPs are reachable on the internet; private IPs (like 192.168.x.x) are used inside your LAN.

### ⏱️ Why distance matters

A server far away means packets travel further, so ping is higher. Content delivery networks (CDNs) keep copies of popular content closer to users to make it faster — one reason some sites load quicker than others.

## Listen

- At home your devices connect to a router, forming a local network, a LAN.
- The router is the gateway between your LAN and the wider internet.
- Data travels as packets, like addressed envelopes.
- Your router passes packets to your ISP, like Safaricom or Zuku.
- The ISP connects to other networks, even by undersea cables.
- Every device has an IP address, like a postal address, so packets find their way.
- A far server means higher ping; CDNs keep copies closer to speed things up.

## Mission: Trace your network

- Find your device's IP address (phone: Settings > Wi-Fi > the network; PC: 'ipconfig' or 'ifconfig'). Is it a private 192.168.x.x?
- With a grown-up, find who your ISP is.
- Run 'tracert google.com' (Windows) or 'traceroute google.com' and count the hops.

Question: Your private IP, your ISP, and roughly how many hops to google.com.

### Task: order
Label: Build the path: tap each stop in order, from your device to a website's server.
1. Your phone or laptop
   > Your device splits the request into small packets.
2. Home Wi-Fi router
   > The router runs your local network (LAN) and gives your device a private IP like 192.168.x.x. On mobile data, a cell tower plays this part.
3. Your ISP (e.g. Safaricom, Airtel, Zuku)
   > Your Internet Service Provider connects your home or phone to the wider internet.
4. Internet backbone (undersea cables at Mombasa)
   > Big fibre links carry traffic between countries. Kenya's undersea cables land at Mombasa.
5. The website's server
   > The server gets your packets and sends the page back along a path like this one.

### Task: pick

#### Which of these is a private (home network) IP address?
- [ ] 8.8.8.8
- [x] 192.168.1.24
- [ ] 41.90.64.10
- [ ] 102.68.1.5
Why: 192.168.x.x is kept for private networks. Your router shares one public IP for the whole home.

#### Your traceroute shows 12 hops. What is a hop?
- [x] A router your packets passed through
- [ ] A lost packet
- [ ] A website
- [ ] A Wi-Fi password
Why: Each hop is one router passing your packets along. More hops usually means more delay.

## Quiz

### Devices on your home network connect through a...
- [x] Router
- [ ] Monitor
- [ ] Printer
- [ ] Speaker
Why: The router runs your LAN.

### A home/school network is called a...
- [x] LAN (Local Area Network)
- [ ] CPU
- [ ] GPU
- [ ] URL
Why: Local Area Network.

### Data travels across networks as...
- [x] Packets
- [ ] Pixels
- [ ] Watts
- [ ] Cores
Why: Small labelled packets.

### The company that connects you to the internet is your...
- [x] ISP
- [ ] CPU
- [ ] PSU
- [ ] GPU
Why: Internet Service Provider.

### An IP address is like a...
- [x] Postal address for a device
- [ ] Password
- [ ] Photo
- [ ] Fan
Why: It identifies a device on a network.

### 192.168.1.10 is an example of a...
- [x] Private IP used inside a LAN
- [ ] Public website
- [ ] Password
- [ ] File type
Why: Private range used at home.

### A server far away usually means...
- [x] Higher ping
- [ ] Lower ping
- [ ] More storage
- [ ] Louder sound
Why: Packets travel further.

### What is the primary role of a router in a home or school network?
- [x] To direct traffic and forward packets between different networks
- [ ] To draw 3D graphics
- [ ] To generate electricity
- [ ] To store photos permanently
Why: Routers route packets between your LAN and the WAN / internet.

### Which protocol ensures reliable packet delivery by acknowledging received packets?
- [x] TCP (Transmission Control Protocol)
- [ ] UDP
- [ ] HTML
- [ ] GPU
Why: TCP checks for lost packets and retransmits them.

### Subsea fiber-optic cables landing in Mombasa (like SEACOM and TEAMS) carry...
- [x] Over 95% of international internet data entering Kenya
- [ ] Only voice phone calls
- [ ] Electricity for coastal towns
- [ ] Drinking water
Why: Undersea fiber cables form the backbone of Kenya's global connectivity.
