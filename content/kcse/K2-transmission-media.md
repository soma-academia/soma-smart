---
id: k-media
track: kcse
code: K2
name: Transmission Media
part: Bounded and unbounded media
cbe: strand
strand: KCSE 451 · Form 4 · Networking and data communication
video:
video_title:
video_channel:
explainer:
---

# K2 · Transmission Media

## Read

### 🔌 Twisted pair and coaxial cable

Twisted pair cable is made of pairs of insulated copper wires twisted around each other; the twisting reduces crosstalk (interference where a signal in one wire leaks into a neighbouring wire). Unshielded twisted pair (UTP) has no extra shielding and is the cheap, common LAN cable graded in categories such as Cat 5 (and Cat 5e) and Cat 6, the higher categories supporting faster speeds. Shielded twisted pair (STP) adds a foil or braided shield to protect against electromagnetic interference, but costs more. Twisted pair is cheap and easy to install, but suffers attenuation over long distances and has limited bandwidth. Coaxial cable has a central copper conductor, surrounded by an insulator (dielectric), a braided metal shield, and an outer plastic jacket. Thin coaxial (thinnet) is flexible and used in LANs; thick coaxial (thicknet) is stiffer and carries signals further. Coaxial is more resistant to interference and has higher bandwidth than twisted pair, but is bulkier and more expensive; it is still used for TV aerials and satellite dishes.

### 💡 Fibre optic cable

Fibre optic cable carries data as pulses of light instead of electricity. Its parts are the core (very thin glass or plastic that carries the light), the cladding (surrounds the core and reflects light back into it), the buffer (a protective coating) and the jacket (the outer cover). Single-mode fibre has a very narrow core that carries one ray of light and is used over long distances; multimode fibre has a wider core that carries many rays and is used over shorter distances. Advantages: very high bandwidth, low attenuation so it carries data over long distances, immune to electromagnetic interference, very secure because it is hard to tap, and small and light. Disadvantages: expensive to buy and install, fragile, and difficult to join or repair, needing skilled technicians and special equipment. Kenya's undersea links such as SEACOM and TEAMS, which land at Mombasa, are fibre optic cables.

### 📡 Microwave and satellite

Microwave transmission sends high-frequency radio signals in a straight line between dish antennas, so the dishes must have a clear line of sight. Because the earth curves and buildings or hills block the signal, relay (repeater) stations are placed on hilltops and masts to receive, boost and pass the signal on. A communication satellite is a microwave relay station in space. Geostationary satellites orbit about 36,000 km above the equator and move with the earth's rotation, so they appear fixed above one spot. An earth station sends signals up to the satellite (uplink); the satellite's transponder receives, amplifies and changes the frequency of the signal, then sends it back down (downlink) to other earth stations over a very wide area. A VSAT (very small aperture terminal) is a small dish that lets a site such as a remote school, bank branch or petrol station connect by satellite. Satellites cover wide and remote areas, but are expensive to launch and maintain and the long distance causes a delay (latency).

### 📻 Radio, infrared, Bluetooth and cellular

Radio waves travel in all directions and do not need line of sight. They are grouped by frequency: high frequency (HF) carries far by bouncing off the ionosphere, very high frequency (VHF) is used for FM radio and two-way radios, and ultra high frequency (UHF) is used for television and mobile phones. Infrared uses invisible light over a very short distance with line of sight, as in a TV remote control. Bluetooth uses low-power radio waves to link devices within about 10 metres, such as a phone and a wireless headset. Cellular (mobile) networks, such as Safaricom's, divide an area into cells, each served by a base station (mast); a call or data session is handed from one cell to the next as the user moves. Wireless media allow mobility and reach places where cables are hard to lay, but they are less secure, can suffer interference from weather and other signals, and are often slower than fibre. When choosing a medium, consider cost, data transfer speed (bandwidth), the distance to be covered, ease of installation, resistance to interference (attenuation and noise) and security.

### 📝 In the exam

KCSE often asks: state two advantages of fibre optic over coaxial cable (higher bandwidth, immune to electromagnetic interference, lower attenuation over long distances, more secure, lighter); name the parts of a fibre optic cable and give their functions; differentiate between UTP and STP; explain why microwave needs relay stations (line of sight and the curvature of the earth); explain the terms uplink, downlink and transponder; and list factors to consider when choosing a transmission medium. Remember: cladding reflects light back into the core; crosstalk is reduced by twisting the wires; geostationary satellites are about 36,000 km above the equator; and bounded means guided, unbounded means wireless.

## Listen

- Bounded media are cables: twisted pair, coaxial and fibre optic.
- Twisting the wires in twisted pair reduces crosstalk; STP adds a shield against interference.
- Coaxial cable has a central copper core, insulator, braided shield and outer jacket.
- Fibre optic carries light through a glass core; the cladding reflects the light back into the core.
- Fibre has high bandwidth, low attenuation and immunity to interference, but is expensive and fragile.
- Microwave needs line of sight, so relay stations boost the signal along the way.
- Geostationary satellites sit about 36,000 km above the equator, receiving on the uplink and sending on the downlink.

## Mission: Find the media around you

- Look behind a computer in your school lab: is the network cable UTP? Read the printing on the cable to find its category, such as Cat 5e or Cat 6.
- Look at the back of a TV decoder or satellite dish: which cable connects them?
- Spot a mobile phone mast or a microwave dish on a hill or tall building near you.

Question: The type and category of network cable you found, and one wireless medium you use every day.

### Task: sort
Label: Sort each medium as bounded (guided) or unbounded (wireless).
Buckets: Bounded | Unbounded
- Unshielded twisted pair → Bounded
- Coaxial cable → Bounded
- Fibre optic cable → Bounded
- Microwave → Unbounded
- Satellite → Unbounded
- Infrared → Unbounded
- Bluetooth → Unbounded

### Task: pick

#### Which part of a fibre optic cable reflects light back into the core?
- [ ] Jacket
- [x] Cladding
- [ ] Buffer
- [ ] Braided shield
Why: The cladding has a lower refractive index than the core, so light is reflected back and stays in the core.

#### Why are relay stations needed in microwave transmission?
- [x] Microwaves travel in straight lines and the earth curves, so dishes need line of sight
- [ ] Microwaves can only travel through cables
- [ ] Relay stations convert light into sound
- [ ] They store data for later use
Why: Relay stations on hills and masts keep the line of sight and boost the signal over long distances.

#### A bank wants to link its branches through busy electrical areas with the highest security and speed. Which medium suits it best?
- [ ] Unshielded twisted pair
- [ ] Infrared
- [x] Fibre optic cable
- [ ] Bluetooth
Why: Fibre is immune to electromagnetic interference, hard to tap and has very high bandwidth.

## Quiz

### What is the main purpose of twisting the wires in a twisted pair cable?
- [ ] To carry light signals instead of electrical signals
- [ ] To make the cable strong enough to lay underground
- [x] To reduce crosstalk and interference
- [ ] To make the cable thinner and lighter to carry
Why: Twisting cancels much of the electromagnetic interference between neighbouring wires, known as crosstalk, so the signal stays clearer.

### How does STP differ from UTP?
- [x] STP has a shield that protects against electromagnetic interference
- [ ] STP carries pulses of light while UTP carries electrical signals
- [ ] STP is cheaper than UTP, so it is used in most school computer labs
- [ ] STP has no copper wires and uses glass fibres wrapped in plastic instead
Why: Shielded twisted pair adds foil or braiding around the pairs, which reduces interference but raises the cost, so cheaper UTP is more common in LANs.

### Which is the correct order of the layers of a coaxial cable, from the centre outwards?
- [ ] Jacket, braided shield, insulator, copper conductor
- [ ] Braided shield, copper conductor, jacket, insulator
- [ ] Insulator, jacket, copper conductor, braided shield
- [x] Copper conductor, insulator, braided shield, jacket
Why: The central copper conductor carries the signal, the insulator separates it from the braided shield, and the outer jacket protects everything.

### In a fibre optic cable, data is carried as...
- [ ] Electrical current
- [x] Pulses of light
- [ ] Sound waves
- [ ] Radio waves
Why: A light source such as a laser or LED sends pulses of light through the glass core, and total internal reflection keeps the light inside the core.

### Which is an advantage of fibre optic cable over coaxial cable?
- [ ] It is cheaper to buy, install and maintain than coaxial cable
- [ ] It is easier to join and repair when it breaks
- [x] It is immune to electromagnetic interference
- [ ] It can also carry electrical power to devices
Why: Light is not affected by electromagnetic interference; fibre also has higher bandwidth and lower attenuation, but it is costly and hard to join.

### Single-mode fibre differs from multimode fibre because it...
- [x] Has a narrower core carrying one ray of light, suited to long distances
- [ ] Has a wider core carrying many rays of light, suited to long distances
- [ ] Uses copper wires in the core instead of glass, so it is cheaper to lay
- [ ] Carries electrical signals instead of light, so it suffers no attenuation
Why: Single-mode fibre's narrow core keeps light on one path, so signals travel further; multimode's wider core carries many rays and suits shorter distances.

### Geostationary communication satellites orbit at about...
- [ ] 360 km above the equator
- [ ] 3,600 km above the North Pole
- [ ] 360,000 km above the equator
- [x] 36,000 km above the equator
Why: At about 36,000 km above the equator a satellite moves with the earth's rotation, so it appears fixed above one spot and dishes need not move.

### In satellite communication, the transponder...
- [ ] Sends signals from the earth station up to the satellite through the uplink dish
- [x] Receives, amplifies and changes the frequency of signals, then sends them back
- [ ] Is the receiving dish installed on the roof of a school in a remote area
- [ ] Stores all the data that passes through so that it can be sent again later
Why: The transponder on the satellite receives the uplink signal, boosts it and changes its frequency so the downlink does not interfere with the uplink.

### Which wireless medium needs line of sight and works only over a very short distance, as in a TV remote?
- [ ] Bluetooth
- [ ] Satellite
- [x] Infrared
- [ ] HF radio
Why: Infrared light is blocked by walls and objects, so the sender and receiver must face each other at close range; Bluetooth radio waves pass round obstacles.

### Which of these is a factor to consider when choosing a transmission medium?
- [x] Cost, distance, bandwidth and interference
- [ ] The screen size of the computers on the network
- [ ] The word processor that the users prefer
- [ ] The colour of the cable's outer jacket
Why: The right medium depends on cost, bandwidth, distance, ease of installation, interference and how secure the data must be.
