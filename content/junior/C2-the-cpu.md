---
id: j-cpu
track: junior
code: C2
name: The CPU
part: The Processor
cbe: nice
strand:
video: DKGZlaPlVLY
video_title: How Computers Work: CPU, Memory, Input & Output
video_channel: Code.org
---

# C2 · The CPU

## Read

### 🧠 The decision maker

The CPU (Central Processing Unit) runs the instructions of every program: working out sums, moving data, deciding what happens next. In a game it tracks players and rules; in a browser it builds the page.

### ⏱️ Clock speed (GHz)

A CPU works to a beat called the clock. 3 GHz means about 3 billion beats per second, and on each beat it does a little work. More GHz can mean more work per second — but it's not the only thing that matters.

### 💪 Newer can be smarter

A newer CPU can beat an older one at the same GHz because it does more useful work on each beat (better design). Speed numbers alone don't tell the whole story.

### 👥 Cores and threads

A core is a worker inside the CPU. Many CPUs have several cores, so they can do several jobs at once. Some apps use many cores; others lean on one fast core.

### 🗄️ Cache: the near shelf

Cache is a small, very fast memory on the CPU itself. Grabbing data from cache is quicker than going to RAM (Random Access Memory), like keeping your most-used book on the desk instead of the shelf.

## Listen

- The CPU runs the instructions of every program.
- It works to a beat called the clock, measured in GHz.
- 3 GHz is about 3 billion beats a second, doing a little work each beat.
- A newer CPU can beat an older one at the same speed — better design.
- A core is a worker inside the CPU; many cores do several jobs at once.
- Cache is tiny, very fast memory right on the chip.
- Grabbing from cache is quicker than going all the way to RAM.

## Mission: Watch the CPU work

- Open Task Manager (Ctrl+Shift+Esc on Windows) or a system monitor, and open the CPU graph.
- Write down how many cores / logical processors it shows.
- Open a few programs and watch the CPU usage rise. Which activity used it most?

Question: Number of cores, and the activity that used the CPU most.

## Quiz

### The CPU's main job is to...
- [x] Run the instructions of programs
- [ ] Keep your files when the power is off
- [ ] Send and receive Wi-Fi signals
- [ ] Supply steady power to the other parts
Why: The CPU is the processor: it fetches each instruction from a program, works it out and acts on it, billions of times a second.

### CPU clock speed is measured in...
- [x] GHz
- [ ] GB
- [ ] Mbps
- [ ] Watts
Why: Clock speed counts beats per second, and gigahertz (GHz) means billions of beats each second; GB measures data size instead.

### 3 GHz means about...
- [x] 3 billion beats per second
- [ ] 3 thousand beats per second
- [ ] 3 gigabytes of memory
- [ ] 300 beats per second
Why: Giga means billion, so 3 GHz is about 3,000,000,000 clock beats every second, with a little work done on each beat.

### A core is...
- [x] A worker inside the CPU that runs instructions
- [ ] A small store of memory beside the CPU
- [ ] The cooling fan fitted on top of the CPU
- [ ] The slot on the motherboard that holds the CPU
Why: Each core can run its own stream of instructions, so a CPU with more cores can work on more jobs at the same time.

### Cache is...
- [x] Small, very fast memory on the CPU
- [ ] Large, slow storage on the hard disk
- [ ] The extra RAM sticks you can add later
- [ ] A cooling layer between CPU and fan
Why: Cache sits right next to the cores, so data in it can be reached much faster than data in RAM, saving waiting time.

### Why can a new CPU beat an old one at the same GHz?
- [x] It does more useful work per beat
- [ ] It uses a larger fan to stay cool
- [ ] It is connected to a faster internet line
- [ ] It runs fewer programs at a time
Why: Newer designs complete more instructions on each clock beat, so they finish the same work sooner even at the same GHz.

### Getting data from cache instead of RAM is...
- [x] Faster
- [ ] Slower
- [ ] About the same speed
- [ ] Only possible when offline
Why: Cache is on the CPU chip itself, close to the cores, so it answers much more quickly than RAM out on the motherboard.

### A multi-core processor has multiple...
- [x] Independent processing units on one chip
- [ ] Power supplies built into one case
- [ ] Screens connected to one graphics card
- [ ] Storage drives joined together as one big drive
Why: Each core is a complete processing unit, so a multi-core chip can run several streams of instructions in parallel instead of one after another.

### Why is CPU cache divided into levels like L1, L2, and L3?
- [x] L1 is smallest and fastest; L3 is larger but slower
- [ ] L1, L2 and L3 are all the same size and speed
- [ ] L1 stores the OS; L3 stores your saved files
- [ ] L3 is the fastest because it holds the most data
Why: Very fast memory is costly and takes up space, so the CPU uses a tiny, quick L1 backed by larger, slightly slower L2 and L3.

### What does IPC stand for in processor performance?
- [x] Instructions Per Clock
- [ ] Internet Protocol Connection
- [ ] Input Processing Cache
- [ ] Internal Power Control
Why: IPC counts how many instructions a CPU completes on each clock beat; higher IPC means more work done at the same GHz.
