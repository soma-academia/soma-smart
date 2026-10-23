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

Every device on a network has an IP (Internet Protocol) address, a number that identifies it, like a postal address. Packets use IP addresses to find their way. Public IPs are reachable on the internet; private IPs (like 192.168.x.x) are used inside your LAN.

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
- [ ] Power supply
- [ ] Graphics card
Why: The router links every phone and laptop in the home, by Wi-Fi or cable, and connects that local network to the internet.

### A home/school network is called a...
- [x] LAN (Local Area Network)
- [ ] ISP (Internet Service Provider)
- [ ] URL (Uniform Resource Locator)
- [ ] DNS (Domain Name System)
Why: A LAN covers a small area, like one home or school, where nearby devices connect through the same router.

### Data travels across networks as...
- [x] Packets
- [ ] Pixels
- [ ] One single unbroken file
- [ ] Clock beats
Why: Data is cut into small packets, each labelled with where it is going and where it came from, and rejoined at the destination.

### The company that connects you to the internet is your...
- [x] ISP
- [ ] CDN
- [ ] LAN
- [ ] Web host
Why: An ISP such as Safaricom, Airtel or Zuku carries your packets from your home or phone out to the wider internet.

### An IP address is like a...
- [x] Postal address for a device
- [ ] Password that protects a device
- [ ] Name a person gives their phone
- [ ] Serial number printed on the router
Why: Just as letters need an address, packets carry IP addresses so routers know where to deliver them and where to send replies.

### 192.168.1.10 is an example of a...
- [x] Private IP used inside a LAN
- [ ] Public IP that anyone online can reach
- [ ] Website's domain name
- [ ] Speed test result in Mbps
Why: 192.168.x.x is a private range kept for local networks; the router lets all the home's devices share a public address to reach the internet.

### A server far away usually means...
- [x] Higher ping
- [ ] Lower ping
- [ ] Faster downloads
- [ ] Higher FPS in games
Why: Packets take longer to cross long distances and pass through more routers, so the round trip, your ping, gets longer.

### What is the primary role of a router in a home or school network?
- [x] To forward packets between your LAN and other networks
- [ ] To store copies of popular websites so that they load faster
- [ ] To encrypt every website you visit with HTTPS
- [ ] To give your computer more storage for downloads
Why: A router reads each packet's destination IP address and sends it the right way, between your home network and your ISP.

### Which protocol ensures reliable packet delivery by acknowledging received packets?
- [x] TCP
- [ ] UDP
- [ ] DNS
- [ ] HTML
Why: With TCP the receiver acknowledges the data it gets; anything that is not acknowledged is sent again, so nothing goes missing.

### Subsea fibre-optic cables landing in Mombasa (like SEACOM and TEAMS) carry...
- [x] Most of Kenya's international internet traffic
- [ ] Only phone calls, not internet data
- [ ] Electricity for towns along the coast
- [ ] Internet traffic between Nairobi homes only
Why: Pulses of light in undersea fibre carry huge amounts of data between continents, and Kenya's main links land at Mombasa.
