# -*- coding: utf-8 -*-
# Soma Smart content. Two tracks. Kenyan/practical, light Kiswahili/Sheng. No pop culture.
# A network-security engineer verifies technical facts before publishing.
# Quiz banks expanded to 10 questions per module (draws 5 per quiz) to reduce memorization.

def R(icon, title, text): return {"icon": icon, "title": title, "text": text}
def Q(q, options, a, why): return {"q": q, "options": options, "a": a, "why": why}
def NOVID(): return {"id": "", "title": "", "channel": ""}

def M(track, mid, code, name, part, read, listen, mission, quiz, video=None):
    return {"track": track, "id": mid, "code": code, "name": name, "part": part,
            "read": read, "listen": listen, "video": video or NOVID(), "mission": mission, "quiz": quiz}

TRACKS = [
    {"id": "primary", "name": "Digital Foundations", "level": "Grade 4–6 · ages ~8–10",
     "blurb": "Start here. Learn what a computer is, how to use it, and how to stay safe online."},
    {"id": "junior", "name": "Computers & Networks", "level": "Grade 7–9 · ages ~12–15",
     "blurb": "Go deeper: inside the computer, how it runs fast, and how the whole internet connects."},
]

MODULES = []

# =======================================================================================
# TRACK A — PRIMARY (Grade 4–6). Gentle, everyday Kenyan references.
# =======================================================================================
MODULES.append(M("primary", "p-meet", "D1", "Meet the Computer", "What's inside the box",
 [
  R("🖥️", "What is a computer?", "A computer is a machine that follows instructions to do work: typing a letter, playing a video, storing photos. A desktop, a laptop, even the smartphone in your pocket — zote ni computers."),
  R("🧠", "The brain: CPU", "Inside is a chip called the CPU (processor). It is the ubongo — the brain — that does the thinking and follows your instructions, step by step, very fast."),
  R("🏗️", "Memory and storage", "RAM is the short-term memory — like your hand holding what you use right now. Storage (the disk) is the long-term keeper, like a cupboard that holds your files even after you switch off."),
  R("⌨️", "Input and output", "You put things IN with a keyboard, mouse or touch screen (input). The computer shows results OUT on the screen or speaker (output). Input, process, output — ingiza, fanya kazi, toa."),
  R("⚡", "Hardware vs software", "Hardware is the parts you can touch (screen, keyboard). Software is the programs inside that you cannot touch (a browser, a game, the calculator). Hardware ni kushika, software ni programu.")
 ],
 [
  "Karibu! Let's meet the computer.",
  "A computer is a machine that follows instructions to do work.",
  "Inside is the CPU — the ubongo, the brain that does the thinking.",
  "RAM holds what you are using now; the disk stores files for keeps.",
  "You put things in with a keyboard or mouse: that is input.",
  "It shows results on the screen: that is output.",
  "Parts you touch are hardware; programs inside are software. Sawa?"
 ],
 {"title": "Spot the parts", "steps": [
    "Find a computer or phone. Point to the screen (output) and the keyboard or touch screen (input).",
    "Name one piece of hardware and one piece of software you can see.",
    "Ask a grown-up or teacher: what is this device's storage size (in GB)?"
  ], "question": "One hardware part, one software program, and the storage size you found."},
 [
  Q("A computer is a machine that...", ["Follows instructions to do work", "Thinks on its own like a person", "Only plays music", "Is always a desktop"], 0, "It follows the instructions you give it."),
  Q("The 'brain' of the computer is the...", ["CPU (processor)", "Screen", "Keyboard", "Cable"], 0, "The CPU does the thinking."),
  Q("Which is INPUT?", ["A keyboard", "The screen", "A speaker", "A printer"], 0, "Input puts information in; a keyboard does that."),
  Q("Which is OUTPUT?", ["The screen", "The mouse", "The keyboard", "The touch pad"], 0, "Output shows results; the screen does that."),
  Q("RAM is best described as...", ["Short-term memory for what you use now", "A cupboard for keeping files forever", "The brain", "A cable"], 0, "RAM holds what's in use right now."),
  Q("Which is SOFTWARE?", ["A web browser", "The keyboard", "The screen", "The mouse"], 0, "Software is a program you can't touch."),
  Q("Hardware means...", ["Parts you can touch", "Programs inside", "The internet", "A password"], 0, "Hardware is the physical parts."),
  Q("Which of these is a computer?", ["A smartphone", "A wooden chair", "A glass cup", "A textbook"], 0, "A smartphone has a processor and memory."),
  Q("When the computer saves files even after you switch it off, it uses...", ["Storage (hard disk or flash)", "RAM only", "The keyboard", "The speakers"], 0, "Storage keeps files permanently."),
  Q("What are the three main steps a computer performs?", ["Input, process, output", "Sleep, eat, run", "Download, copy, delete", "Turn on, heat up, switch off"], 0, "Ingiza, fanya kazi, toa.")
 ]))

MODULES.append(M("primary", "p-mouse", "D2", "Mouse & Keyboard", "Control the computer",
 [
  R("🖱️", "Using the mouse", "The mouse moves a pointer on the screen. Left-click to choose. Double-click to open. Right-click shows a menu of extra choices. Drag = hold the button and move."),
  R("⌨️", "The keyboard", "Keys type letters and numbers. The long bar is the Spacebar. Enter starts a new line or confirms. Backspace rubs out the letter before the cursor."),
  R("⇧", "Shift and Caps", "Hold Shift to type a CAPITAL letter or the symbol on top of a key. Caps Lock keeps all letters capital until you press it again."),
  R("✂️", "Copy, cut, paste", "Ctrl + C copies, Ctrl + X cuts (moves), Ctrl + V pastes. Ctrl + Z undoes a mistake. These shortcuts save you a lot of time — they work in school work too."),
  R("👆", "Touch screens", "On a phone or tablet, your finger is the mouse. Tap to choose, press-and-hold for a menu, swipe to scroll. Same ideas, different tool.")
 ],
 [
  "Let's learn to control the computer.",
  "The mouse moves a pointer. Left-click to choose, double-click to open.",
  "Right-click shows a menu with more choices.",
  "On the keyboard, Enter confirms and Backspace rubs out a letter.",
  "Hold Shift for a CAPITAL letter.",
  "Ctrl C copies, Ctrl V pastes, Ctrl Z undoes. Handy for homework!",
  "On a phone, your finger does the same jobs. Easy."
 ],
 {"title": "Mouse and keyboard practice", "steps": [
    "Open any writing app. Type your name, then make it CAPITAL using Shift.",
    "Type a short sentence, then use Backspace to fix one letter.",
    "Copy your sentence (Ctrl+C) and paste it (Ctrl+V) on a new line."
  ], "question": "The sentence you typed, and which shortcut you liked most."},
 [
  Q("To OPEN a file with the mouse you usually...", ["Double-click it", "Right-click once", "Shake the mouse", "Press Enter twice"], 0, "A double-click opens things."),
  Q("Right-click is used to...", ["Show a menu of extra choices", "Delete the computer", "Turn off the screen", "Type a capital letter"], 0, "Right-click opens a context menu."),
  Q("Which shortcut COPIES?", ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + P"], 0, "C for copy."),
  Q("Ctrl + V does what?", ["Pastes", "Copies", "Deletes everything", "Prints"], 0, "V pastes what you copied."),
  Q("To type a CAPITAL letter you hold...", ["Shift", "Spacebar", "Enter", "Backspace"], 0, "Shift gives capitals and top symbols."),
  Q("Backspace is used to...", ["Rub out the letter before the cursor", "Save the file", "Open a menu", "Start a game"], 0, "It deletes the previous character."),
  Q("On a touch screen, press-and-hold usually...", ["Opens a menu", "Turns off the phone", "Deletes the app", "Calls someone"], 0, "Press-and-hold is like a right-click."),
  Q("The longest key on the keyboard is the...", ["Spacebar", "Enter key", "Shift key", "Escape key"], 0, "The Spacebar separates words with spaces."),
  Q("Which keyboard shortcut UNDOES a mistake?", ["Ctrl + Z", "Ctrl + C", "Ctrl + V", "Ctrl + S"], 0, "Ctrl + Z undoes the last action."),
  Q("Holding the mouse button while moving it across the screen is called...", ["Dragging", "Clicking", "Typing", "Scrolling"], 0, "Dragging moves items on screen.")
 ]))

MODULES.append(M("primary", "p-files", "D3", "Files & Folders", "Keep your work tidy",
 [
  R("📄", "What is a file?", "A file is one saved thing: a photo, a song, a homework document. Each file has a name and a type (like .jpg for a picture or .pdf for a document)."),
  R("📁", "Folders keep order", "A folder is like a cardboard file or a drawer that holds related files together. 'School', 'Photos', 'Music' — giving folders clear names helps you find things fast."),
  R("💾", "Save often", "When you make something, Save it so it is not lost. 'Save As' makes a new copy with a new name — good for trying changes without spoiling the first one."),
  R("✏️", "Name things clearly", "'Homework_Science_Term2' is easier to find later than 'New document (3)'. A clear name today saves searching tomorrow."),
  R("☁️", "Back it up", "A backup is a spare copy kept somewhere safe — a flash disk or the cloud. If a phone is lost or a laptop spoils, your backup still has your work. Back up anything you'd be sad to lose.")
 ],
 [
  "Let's keep your work tidy and safe.",
  "A file is one saved thing: a photo, a song, a homework document.",
  "A folder holds related files together, like a drawer.",
  "Give folders clear names: School, Photos, Music.",
  "Always Save your work so it is not lost.",
  "Save As makes a new copy to try changes safely.",
  "And back up important work to a flash disk or the cloud. Usipoteze kazi yako!"
 ],
 {"title": "Tidy up", "steps": [
    "Make a new folder and give it a clear name.",
    "Create or move two files into it.",
    "With a grown-up, copy one important file to a flash disk or cloud as a backup."
  ], "question": "The folder name you chose and what you backed up."},
 [
  Q("A file is...", ["One saved thing, like a photo or document", "A kind of folder", "A type of mouse", "The internet"], 0, "A file is a single saved item."),
  Q("A folder is used to...", ["Hold related files together", "Delete files", "Type letters", "Charge the phone"], 0, "Folders group related files."),
  Q("'Save As' is useful because it...", ["Makes a new copy with a new name", "Deletes the file", "Turns off the computer", "Prints the file"], 0, "Great for trying changes safely."),
  Q("A good file name is...", ["Homework_Science_Term2", "New document (3)", "asdfgh", "aaa"], 0, "Clear names are easy to find later."),
  Q("A backup is...", ["A spare copy kept somewhere safe", "A broken file", "A game", "A password"], 0, "So you don't lose your work."),
  Q("You should back up...", ["Anything you'd be sad to lose", "Nothing ever", "Only on holidays", "Only games"], 0, "Protect important work."),
  Q(".pdf and .jpg are examples of...", ["File types", "Folders", "Passwords", "Websites"], 0, "The type tells you what kind of file it is."),
  Q("Why do we put files into folders?", ["To organize and find them easily", "To delete them faster", "To make them smaller", "To play music"], 0, "Folders keep your work tidy and organized."),
  Q("If you want to keep your original file and make an edited version, you use...", ["Save As", "Delete", "Print", "Close without saving"], 0, "Save As creates a new copy under a new name."),
  Q("Which of these is a safe place for a backup copy?", ["A flash disk or cloud storage", "The recycling bin", "Nowhere", "A sticker"], 0, "Flash disks and cloud storage keep extra copies safe.")
 ]))

MODULES.append(M("primary", "p-safe", "D4", "Stay Safe Online", "Shields up",
 [
  R("🛡️", "Your secret identity", "Online, keep your real name, home, school and phone number private from strangers. Use a nickname/username. Only share real details with grown-ups you trust in real life."),
  R("🔑", "Strong passwords", "A password is the key to your account. Make it long and hard to guess, like a short silly sentence. Keep it secret — even from friends. Usimpe mtu password yako."),
  R("🎣", "Spot the tricks", "If someone online offers free airtime, free data, or a prize for your password or an M-Pesa PIN, it is a scam. Real companies never ask for your PIN or password. If it's too good to be true, ni uwongo."),
  R("🙅", "Strangers online", "If a stranger wants to chat privately, asks for photos, wants to meet, or makes you feel weird or scared — stop, don't reply, and tell a trusted grown-up. It is never your fault."),
  R("⚖️", "Balance your time", "Screens are useful but too much tires your eyes, spoils sleep and steals time for friends, sport and family. Agree your screen time with a grown-up. You control the screen, not the other way round.")
 ],
 [
  "This is the most important lesson: staying safe online.",
  "Keep your real name, home and school private from strangers.",
  "Make your password long and secret. Usimpe mtu password yako!",
  "Free airtime or a prize for your PIN or password? Ni scam. Walk away.",
  "If a stranger makes you feel weird, don't reply. Tell a grown-up.",
  "Too much screen time tires your eyes and steals your time.",
  "Agree your screen time with a grown-up. You are the boss, si simu."
 ],
 {"title": "Safety promise", "steps": [
    "With a grown-up, make one strong password and agree where to keep it safe.",
    "Write down one thing you will never share with strangers online.",
    "Agree your daily screen time and write it somewhere you both see."
  ], "question": "Your agreed screen time and one safety rule you promise to keep."},
 [
  Q("Online, you should keep private your...", ["Real name, home and school", "Nickname", "Favourite colour", "Favourite game"], 0, "Never share real-life details with strangers."),
  Q("Someone asks for your M-Pesa PIN to 'send you a prize'. You...", ["Refuse — it's a scam", "Send the PIN", "Share your password too", "Give your address"], 0, "No real company asks for your PIN."),
  Q("A strong password is...", ["Long, secret and hard to guess", "1234", "Your name", "Shared with friends"], 0, "Strong and secret."),
  Q("A stranger online asks to meet you. You...", ["Tell a trusted grown-up", "Go and meet them", "Send your address", "Keep it secret"], 0, "Always tell a grown-up."),
  Q("'Free data for your password' is...", ["A scam", "A real offer", "From your teacher", "Safe to accept"], 0, "Too good to be true = uwongo."),
  Q("Too much screen time can...", ["Tire your eyes and spoil sleep", "Make you taller", "Charge the phone", "Improve your eyes"], 0, "Balance keeps you healthy."),
  Q("Who controls your screen time?", ["You, with a grown-up", "The phone", "Strangers", "Nobody"], 0, "You are the boss."),
  Q("Which of these is safe to share with strangers online?", ["A game nickname", "Your home address", "Your school name", "Your parent's phone number"], 0, "Keep real-life identity private; use a nickname."),
  Q("What should you do if an online message makes you uncomfortable or scared?", ["Stop, don't reply, and tell a trusted grown-up", "Reply angrily", "Share your secrets", "Delete your computer"], 0, "Always tell a trusted parent or teacher."),
  Q("Sharing a password with a friend at school is...", ["Unsafe — keep it secret", "A great idea", "Required by the computer", "Safe if they promise"], 0, "Passwords should remain secret to you.")
 ]))

MODULES.append(M("primary", "p-internet", "D5", "What is the Internet?", "The big network",
 [
  R("🌐", "A network of computers", "The internet is millions of computers all over the world joined together so they can share information. When you open a website or send a WhatsApp, you are using the internet."),
  R("📡", "How your phone connects", "Your phone or computer joins the internet through Wi-Fi (at home or school) or mobile data from a network like Safaricom or Airtel. That connects you to the ISP — the company that gives internet."),
  R("✉️", "Messages travel in pieces", "Your message is broken into small pieces called packets, like sending a long letter in several envelopes. They travel separately and join up again at the other end. Fast!"),
  R("🏢", "Websites live on servers", "A website is kept on a powerful computer called a server that is always on. When you visit tingg.africa or a school site, your phone asks that server for the page."),
  R("🔒", "The padlock means safe", "When you see https and a padlock in the address bar, your connection is encrypted — scrambled so others can't read it. Look for the padlock before typing a password or paying.")
 ],
 [
  "The internet is millions of computers joined together to share information.",
  "Your phone joins through Wi-Fi or mobile data from Safaricom or Airtel.",
  "That connects you to your ISP — the company that provides internet.",
  "Your message travels as small pieces called packets.",
  "Websites live on always-on computers called servers.",
  "When you visit a site, your phone asks that server for the page.",
  "See https and a padlock? That means your connection is safe. Always check."
 ],
 {"title": "Internet explorer", "steps": [
    "Ask a grown-up: does your home/school use Wi-Fi or mobile data? Which network?",
    "Open a website and look at the address bar — find the padlock and the https.",
    "Name one thing you do that needs the internet, and one that does not."
  ], "question": "Your connection type, and whether the site showed a padlock."},
 [
  Q("The internet is...", ["Many computers joined to share information", "One big computer in Nairobi", "A type of phone", "A password"], 0, "A global network of computers."),
  Q("A company that provides internet is called an...", ["ISP", "CPU", "SSD", "APP"], 0, "Internet Service Provider, like Safaricom or Airtel."),
  Q("Your phone can join the internet using...", ["Wi-Fi or mobile data", "Only a cable", "Only at night", "A mirror"], 0, "Wi-Fi or mobile data."),
  Q("Messages travel across the internet as...", ["Small pieces called packets", "One big block", "Paper letters", "Sound only"], 0, "Packets travel and rejoin."),
  Q("A website is stored on a...", ["Server (always-on computer)", "Keyboard", "Mouse", "Printer"], 0, "Servers hold websites."),
  Q("A padlock and https in the address bar means...", ["Your connection is safe/encrypted", "The site is slow", "The site is free", "You won a prize"], 0, "Look for it before passwords/payments."),
  Q("Before typing a password on a site, check for...", ["The padlock / https", "A nice colour", "Loud music", "A game"], 0, "Safety first."),
  Q("Can you connect to the internet with wireless Wi-Fi without cables plugged into your phone?", ["Yes, Wi-Fi sends signals through the air", "No, phones always need cables", "Only when connected to a TV", "Only in the morning"], 0, "Wi-Fi uses radio waves."),
  Q("A network of computers connected together allows them to...", ["Share files, messages and resources", "Turn into printers", "Change into laptops", "Work without electricity"], 0, "Networks share information."),
  Q("When a packet gets lost or delayed on the internet, network protocols...", ["Resend the missing packet", "Shut down the whole internet", "Break the screen", "Delete your account"], 0, "Protocols detect and retransmit missing packets.")
 ]))


# =======================================================================================
# TRACK B — JUNIOR (Grade 7–9). Deeper hardware, networking, DNS and web security.
# =======================================================================================
MODULES.append(M("junior", "j-bootup", "C1", "Boot Up", "The Motherboard",
 [
  R("🔘", "Press power", "When you press power, a small program on the motherboard called the BIOS/UEFI wakes first. It does a roll call: CPU? RAM? Storage? All present? Then it hands over to the operating system (Windows, Linux or macOS)."),
  R("🟩", "The motherboard", "Every part plugs into the motherboard. Its printed lines (traces) are like roads carrying signals between parts very fast. The graphics card sits in the longest slot because it moves the most data."),
  R("🗣️", "Drivers are translators", "The operating system doesn't automatically know how to talk to each part. A driver is a small translator program (from the part's maker) that lets the OS and the device understand each other. Updating drivers can fix bugs and improve performance."),
  R("🚀", "Opening a program", "When you open an app, its files move from storage (the disk) into RAM. The CPU then runs the instructions and the GPU draws what you see. The whole team starts working together.")
 ],
 [
  "Let's follow what happens when a computer starts.",
  "You press power. The BIOS or UEFI wakes and does a roll call of the parts.",
  "Then it hands over to the operating system.",
  "Every part plugs into the motherboard, which carries signals between them.",
  "A driver is a translator that lets the OS talk to each device.",
  "Open an app and its files move from storage into RAM.",
  "The CPU runs the instructions and the GPU draws the screen. Tayari!"
 ],
 {"title": "Read your computer's spec", "steps": [
    "On Windows press the Windows key, type 'System information' and open it (or on a phone open Settings > About).",
    "Write down the Processor (CPU) and the installed RAM.",
    "Find the storage size and how much is free."
  ], "question": "Your CPU, RAM amount, and free storage."},
 [
  Q("What wakes up FIRST when you press power?", ["The BIOS/UEFI", "The browser", "A game", "The mouse"], 0, "It does the roll call of parts."),
  Q("Every part plugs into the...", ["Motherboard", "Monitor", "Keyboard", "Charger"], 0, "The motherboard connects everything."),
  Q("A driver is...", ["A translator program for a device", "A racing game", "A power cable", "A type of RAM"], 0, "It lets the OS talk to the device."),
  Q("When you open an app, its files move from storage into...", ["RAM", "the screen", "the mouse", "the internet"], 0, "RAM holds what's running now."),
  Q("The BIOS/UEFI hands over to the...", ["Operating system", "Printer", "Speaker", "Wi-Fi"], 0, "Windows, Linux or macOS then loads."),
  Q("Windows, Linux and macOS are examples of...", ["Operating systems", "Browsers", "Games", "Cables"], 0, "The main software that runs the computer."),
  Q("Updating a driver can...", ["Fix bugs and improve performance", "Add more RAM", "Make the PC lighter", "Change your password"], 0, "Drivers keep devices working well."),
  Q("What happens during the BIOS/UEFI POST (Power-On Self-Test)?", ["It tests essential hardware like RAM and CPU before loading the OS", "It plays a video", "It downloads games", "It changes screen brightness"], 0, "Checks that hardware is working properly."),
  Q("The long expansion slot where a graphics card sits on the motherboard is usually...", ["PCIe x16", "USB-A", "Audio jack", "HDMI"], 0, "PCI Express provides high bandwidth for GPUs."),
  Q("Why does RAM lose its contents when the computer is turned off?", ["RAM is volatile memory", "RAM is a magnetic disk", "RAM has a battery", "RAM only stores pictures"], 0, "Volatile memory needs continuous power to retain data.")
 ]))

MODULES.append(M("junior", "j-cpu", "C2", "The CPU", "The Processor",
 [
  R("🧠", "The decision maker", "The CPU runs the instructions of every program: working out sums, moving data, deciding what happens next. In a game it tracks players and rules; in a browser it builds the page."),
  R("⏱️", "Clock speed (GHz)", "A CPU works to a beat called the clock. 3 GHz means about 3 billion beats per second, and on each beat it does a little work. More GHz can mean more work per second — but it's not the only thing that matters."),
  R("💪", "Newer can be smarter", "A newer CPU can beat an older one at the same GHz because it does more useful work on each beat (better design). Speed numbers alone don't tell the whole story."),
  R("👥", "Cores and threads", "A core is a worker inside the CPU. Many CPUs have several cores, so they can do several jobs at once. Some apps use many cores; others lean on one fast core."),
  R("🗄️", "Cache: the near shelf", "Cache is a small, very fast memory on the CPU itself. Grabbing data from cache is quicker than going to RAM, like keeping your most-used book on the desk instead of the shelf.")
 ],
 [
  "The CPU runs the instructions of every program.",
  "It works to a beat called the clock, measured in GHz.",
  "3 GHz is about 3 billion beats a second, doing a little work each beat.",
  "A newer CPU can beat an older one at the same speed — better design.",
  "A core is a worker inside the CPU; many cores do several jobs at once.",
  "Cache is tiny, very fast memory right on the chip.",
  "Grabbing from cache is quicker than going all the way to RAM."
 ],
 {"title": "Watch the CPU work", "steps": [
    "Open Task Manager (Ctrl+Shift+Esc on Windows) or a system monitor, and open the CPU graph.",
    "Write down how many cores / logical processors it shows.",
    "Open a few programs and watch the CPU usage rise. Which activity used it most?"
  ], "question": "Number of cores, and the activity that used the CPU most."},
 [
  Q("The CPU's main job is to...", ["Run the instructions of programs", "Store files forever", "Show pictures only", "Connect to Wi-Fi"], 0, "It's the processor/decision-maker."),
  Q("CPU clock speed is measured in...", ["GHz", "GB", "Mbps", "Watts"], 0, "Gigahertz = billions of beats per second."),
  Q("3 GHz means about...", ["3 billion beats per second", "3 beats per second", "3 thousand", "3 GB"], 0, "Giga = billion."),
  Q("A core is...", ["A worker inside the CPU", "A type of screen", "A password", "A cable"], 0, "More cores = more jobs at once."),
  Q("Cache is...", ["Small, very fast memory on the CPU", "A big slow disk", "The internet", "A fan"], 0, "Faster to reach than RAM."),
  Q("Why can a new CPU beat an old one at the same GHz?", ["It does more useful work per beat", "It is heavier", "It is a nicer colour", "It has more cables"], 0, "Better design = more work per beat."),
  Q("Getting data from cache instead of RAM is...", ["Faster", "Slower", "The same", "Impossible"], 0, "Cache is closer and quicker."),
  Q("A multi-core processor has multiple...", ["Independent processing units on one chip", "Power supplies", "Screens", "Hard drives"], 0, "Each core can execute instructions in parallel."),
  Q("Why is CPU cache divided into levels like L1, L2, and L3?", ["L1 is smallest and fastest; L3 is larger but slightly slower", "L3 is faster than L1", "Only L1 connects to power", "To store music"], 0, "Hierarchy balances extreme speed with capacity."),
  Q("What does IPC stand for in processor performance?", ["Instructions Per Clock", "Internet Protocol Core", "Input Processing Cache", "Internal Power Control"], 0, "IPC measures how many instructions a CPU completes each clock beat.")
 ]))

MODULES.append(M("junior", "j-gpu", "C3", "The GPU", "The Graphics Chip",
 [
  R("🔺", "Built from triangles", "Everything in a 3D game or 3D map is built from many small triangles. The GPU's job is to place all those triangles and colour them, extremely fast."),
  R("🎨", "Painting pixels", "Your screen is made of tiny dots called pixels. A Full HD screen has about 2 million; a 4K screen has about four times as many — that's why 4K is heavier work."),
  R("🐜", "Many small workers", "A GPU has thousands of tiny cores that each colour a few pixels at the same time. Doing many small jobs in parallel is what makes graphics fast."),
  R("💡", "Shading and light", "Small programs called shaders add light, shadow and shine. Some GPUs do ray tracing — following how light really bounces — for realistic reflections, but it is heavy work."),
  R("🔍", "Upscaling tricks", "Techniques like DLSS/FSR render a smaller image then cleverly enlarge it, giving more frames per second for less work. Beyond games, GPUs also speed up video editing and AI.")
 ],
 [
  "The GPU draws what you see on the screen.",
  "3D scenes are built from many small triangles.",
  "The screen is made of pixels; 4K has about four times as many as Full HD.",
  "A GPU has thousands of tiny cores colouring pixels at the same time.",
  "Doing many small jobs at once is what makes graphics fast.",
  "Shaders add light and shadow; ray tracing follows real light — heavy work.",
  "GPUs also speed up video editing and AI, not just games."
 ],
 {"title": "Resolution test", "steps": [
    "Open the display settings and note the screen resolution (e.g. 1920x1080).",
    "If you can, play a video or game and note how smooth it feels.",
    "Lower the resolution one step and see if it feels smoother. Put it back after."
  ], "question": "Your screen resolution and whether lowering it felt smoother."},
 [
  Q("3D scenes are built from many...", ["Triangles", "Circles", "Letters", "Cables"], 0, "Triangles make up 3D shapes."),
  Q("The tiny dots on a screen are called...", ["Pixels", "Cores", "Bits", "Bytes"], 0, "Pixels form the picture."),
  Q("A 4K screen has about how many times the pixels of Full HD?", ["4 times", "2 times", "The same", "10 times"], 0, "About four times as many."),
  Q("A GPU is fast because it...", ["Does many small jobs at the same time", "Has one huge worker", "Stores files", "Cools the CPU"], 0, "Massively parallel work."),
  Q("Ray tracing follows...", ["How light really bounces", "The mouse", "Your password", "The Wi-Fi"], 0, "For realistic reflections and shadows."),
  Q("DLSS/FSR give more FPS by...", ["Rendering smaller then enlarging cleverly", "Adding RAM", "Turning off the GPU", "Shrinking the screen"], 0, "Less work for similar sharpness."),
  Q("Besides games, GPUs also speed up...", ["Video editing and AI", "Boiling water", "Charging phones", "Printing"], 0, "Parallel power is useful widely."),
  Q("Why are GPUs much better than CPUs at training AI models and processing 3D graphics?", ["They have thousands of cores designed for parallel math", "They have fewer cores", "They don't use electricity", "They only process text"], 0, "Massive parallelism excels at matrix operations."),
  Q("The dedicated high-speed memory on a graphics card is called...", ["VRAM", "SSD", "BIOS", "ROM"], 0, "Video RAM holds textures, frames and geometry."),
  Q("Ray tracing simulates graphics by...", ["Calculating the physical path and reflection of light rays", "Stretching pixels", "Drawing 2D lines only", "Using lower resolutions"], 0, "Realistic lighting based on physics.")
 ]))

MODULES.append(M("junior", "j-ram", "C4", "RAM & Storage", "Memory and the Disk",
 [
  R("🎒", "RAM is the backpack", "RAM holds what the computer is using right now: the open app, the page you're reading. It is very fast but it empties when you switch off."),
  R("📚", "Storage is the shelf", "Storage (the disk) keeps everything even with the power off: your apps, documents, photos, music. SSDs are fast; older hard disks (HDD) spin a platter and are slower."),
  R("🚀", "SSD vs HDD", "An SSD has no moving parts and loads much faster than a spinning hard disk. The fastest type, NVMe, makes programs and files open quickly."),
  R("🐌", "When RAM fills up", "If RAM fills, the computer borrows slower space on the disk and everything feels sluggish. Closing unused browser tabs and apps frees the backpack."),
  R("📏", "How big?", "RAM is usually a few GB (e.g. 4, 8, 16). Storage is bigger — often hundreds of GB or 1 TB. More RAM helps with many apps open; more storage holds more files.")
 ],
 [
  "RAM holds what the computer is using right now — and empties when off.",
  "Storage, the disk, keeps everything even with the power off.",
  "An SSD has no moving parts and is much faster than an old hard disk.",
  "NVMe SSDs are the fastest and open programs quickly.",
  "If RAM fills up, the computer slows down.",
  "Close unused tabs and apps to free the backpack.",
  "RAM is a few GB; storage is often hundreds of GB or a whole terabyte."
 ],
 {"title": "Memory detective", "steps": [
    "In Task Manager > Performance (or a monitor), note total RAM and how much is in use.",
    "Open about ten browser tabs and check RAM again. Did it rise?",
    "Find whether your disk is an SSD or HDD, and its size."
  ], "question": "RAM in use before and after tabs, and your disk type and size."},
 [
  Q("RAM holds...", ["What you're using right now", "Files forever", "Your password", "The internet"], 0, "It empties when the power goes off."),
  Q("Which keeps files when the power is OFF?", ["Storage (the disk)", "RAM", "Cache", "The screen"], 0, "Storage is long-term."),
  Q("Which is faster?", ["An SSD", "An old spinning hard disk", "A floppy disk", "A CD"], 0, "SSDs have no moving parts."),
  Q("If RAM fills up, the computer...", ["Slows down", "Speeds up", "Gets more storage", "Turns off safely"], 0, "It borrows slower disk space."),
  Q("A good fix when RAM is full is to...", ["Close unused tabs and apps", "Buy a new mouse", "Turn up volume", "Clean the screen"], 0, "Free up the backpack."),
  Q("RAM sizes are usually around...", ["4, 8 or 16 GB", "500 GB", "3 GHz", "5 Mbps"], 0, "A few GB is typical."),
  Q("The fastest common storage type is...", ["NVMe SSD", "Old HDD", "Floppy", "CD-ROM"], 0, "NVMe is very fast."),
  Q("An SSD is much faster than an old mechanical HDD because...", ["It uses flash memory chips with no moving parts", "It has a spinning metal disk", "It uses water cooling", "It is larger in physical size"], 0, "Solid State Drives have no mechanical delay."),
  Q("What happens when your PC runs out of physical RAM while many apps are open?", ["It swaps pages to disk (virtual memory), causing slowdown", "It burns the processor", "It deletes your files", "It speeds up"], 0, "Swapping to disk is thousands of times slower than RAM."),
  Q("Which type of storage retains data even when unplugged?", ["Non-volatile storage (SSD, HDD, flash disk)", "RAM", "CPU cache", "CPU registers"], 0, "Non-volatile storage preserves data without power.")
 ]))

MODULES.append(M("junior", "j-speed", "C5", "Speed & Lag", "Smooth vs Slow",
 [
  R("📓", "Frames per second", "Video and games are many still pictures shown quickly — like a flip-book. FPS means frames per second. More frames look smoother; 30 is okay, 60 is smooth."),
  R("⚡", "Two kinds of slow", "There are two different problems. Low FPS means the computer is struggling to draw fast enough. High ping/latency means the connection to a far-away server is slow. A faster computer cannot fix slow internet, and vice versa."),
  R("📡", "Ping and latency", "Ping (latency) is how long a message takes to reach a server and come back, measured in milliseconds (ms). Low ping feels instant; high ping makes online things feel delayed."),
  R("🖥️", "Screen refresh (Hz)", "A screen refreshes a set number of times each second, measured in Hz. A 60 Hz screen can show up to 60 frames a second. More frames than the screen can show won't look smoother on it."),
  R("⚖️", "Find the bottleneck", "When something is slow, ask: is the computer busy (high CPU/GPU use = upgrade or lower settings) or is the internet slow (high ping = a network problem)? Naming the real cause saves time.")
 ],
 [
  "Video and games are many pictures shown quickly, like a flip-book.",
  "FPS means frames per second — more frames look smoother.",
  "There are two kinds of slow: low FPS, and high ping.",
  "Low FPS means the computer is struggling to draw fast enough.",
  "High ping means the connection to a far server is slow.",
  "A fast computer can't fix slow internet, and the other way round.",
  "When something lags, ask which one it is. That's how experts fix it."
 ],
 {"title": "Lag detective", "steps": [
    "Open Command Prompt/Terminal and type: ping google.com  — note the time in ms.",
    "Try an online video; does it buffer (internet) or stutter while the device is busy (computer)?",
    "Decide: was a recent slow moment an FPS problem or a ping problem?"
  ], "question": "Your ping time to google.com and one slow moment you diagnosed."},
 [
  Q("FPS stands for...", ["Frames Per Second", "Fast Power Speed", "File Processing System", "Full Page Site"], 0, "Frames per second."),
  Q("Low FPS means...", ["The computer is struggling to draw fast enough", "The internet is slow", "The screen is big", "The password is wrong"], 0, "A device/graphics problem."),
  Q("High ping means...", ["The connection to the server is slow", "The computer is fast", "The screen is bright", "RAM is full"], 0, "A network/latency problem."),
  Q("Ping is measured in...", ["Milliseconds (ms)", "Gigabytes", "Watts", "Pixels"], 0, "Time for a round trip."),
  Q("Can a faster computer fix slow internet?", ["No", "Yes, always", "Only at night", "Only on Wi-Fi"], 0, "Different problems, different fixes."),
  Q("A 60 Hz screen can show up to...", ["60 frames a second", "600 frames", "6 frames", "any number"], 0, "Hz = refreshes per second."),
  Q("When something lags, a good first question is...", ["Is it the computer or the internet?", "What colour is it?", "Is the mouse new?", "Is it loud?"], 0, "Name the real cause first."),
  Q("If your monitor is 144 Hz, what is the maximum number of frames per second it can physically display?", ["144 FPS", "60 FPS", "240 FPS", "1000 FPS"], 0, "144 Hz refreshes 144 times each second."),
  Q("Jitter in network connections refers to...", ["Variation in ping / latency over time", "A broken cable", "A dirty fan", "High monitor brightness"], 0, "Inconsistent latency causes stutter in calls and games."),
  Q("If your game has low FPS even with fast 100 Mbps fiber internet, the root issue is...", ["Your computer's GPU or CPU hardware", "The fiber cable", "The router password", "The weather"], 0, "FPS depends on local hardware, not your internet bandwidth.")
 ]))

MODULES.append(M("junior", "j-safe", "C6", "Stay Safe & Smart Online", "Security",
 [
  R("🔒", "Strong, unique passwords", "Use a long password and a different one for each important account. A passphrase like 'twoGoats!eatGrass' is strong and easier to remember than 'p@ss'. Never reuse your email password elsewhere."),
  R("🔑", "Two-step verification", "Turn on 2FA (two-step verification) where you can: a password PLUS a code (SMS or an app). Even if someone learns your password, they still can't get in. Like two locks on one door."),
  R("🎣", "Phishing and scams", "Phishing is a fake message pretending to be a bank, M-Pesa or a friend, trying to steal your login or money. Clues: urgency ('act NOW'), odd links, spelling mistakes, requests for a PIN or password. Confirm before you click."),
  R("👤", "Your digital footprint", "What you post can last forever and be copied, even from a 'private' chat. Before posting, ask: would I be fine with my parent, teacher and future employer seeing this?"),
  R("⚖️", "Balance and wellbeing", "Apps are designed to keep you scrolling. Decide your own limits, take breaks, protect your sleep, and keep time for people and activities offline. Being in control is a skill worth building.")
 ],
 [
  "Use a long, unique password for each important account.",
  "A passphrase like two-goats-eat-grass is strong and memorable.",
  "Turn on two-step verification — a password plus a code. Two locks.",
  "Phishing is a fake message trying to steal your login or money.",
  "Clues: urgency, odd links, and asking for your PIN or password.",
  "What you post can last forever, so think before you post.",
  "Apps want endless scrolling. Set your own limits and protect your sleep."
 ],
 {"title": "Lock down an account", "steps": [
    "Pick one important account and set a strong, unique passphrase.",
    "Turn on two-step verification (2FA) if the service offers it.",
    "Find one example of a phishing message and explain two clues that give it away."
  ], "question": "Which account you secured, and two phishing clues you spotted."},
 [
  Q("A strong password is...", ["Long and unique per account", "The same everywhere", "Your name", "1234"], 0, "Long + unique is safest."),
  Q("Two-step verification (2FA) adds...", ["A code on top of your password", "A second password you share", "A new screen", "More RAM"], 0, "Two locks on one door."),
  Q("Phishing is...", ["A fake message to steal your login/money", "A fast CPU", "A type of cable", "A backup"], 0, "Confirm before you click."),
  Q("A common phishing clue is...", ["Urgency and a request for your PIN/password", "A calm greeting", "Correct spelling", "No links"], 0, "Legit firms don't ask for your PIN."),
  Q("Your digital footprint can...", ["Last forever and be copied", "Always be fully deleted", "Never be seen", "Delete itself daily"], 0, "Think before you post."),
  Q("Real banks and M-Pesa will NEVER ask for your...", ["PIN or full password", "Name", "County", "Favourite colour"], 0, "Never share your PIN/password."),
  Q("Apps are designed to...", ["Keep you scrolling longer", "Turn off by themselves", "Improve your eyesight", "Do your homework"], 0, "Set your own limits."),
  Q("Why should you avoid using the same password on different websites?", ["If one site is breached, attackers can access your other accounts", "It makes your computer run hot", "It slows down internet speed", "Websites forbid the letter E"], 0, "Credential stuffing exploits reused passwords."),
  Q("What is an authenticator app (TOTP) compared to SMS for 2FA?", ["More secure because SMS codes can be intercepted via SIM swap", "Less secure than email", "Only works on desktop computers", "Requires paid airtime"], 0, "App-based codes resist SIM swapping attacks."),
  Q("A stranger sends a link promising free money or leaked papers. The safest action is...", ["Do not click the link, block sender, and verify independently", "Click to see if it's real", "Forward it to 10 friends", "Type your phone number"], 0, "Malicious links often download malware or steal credentials.")
 ]))

MODULES.append(M("junior", "j-power", "C7", "Power & Cooling", "Energy and Heat",
 [
  R("⚡", "The power supply", "The power supply (PSU) takes mains electricity and converts it to the steady low voltages each part needs. A good, reliable PSU protects the whole computer."),
  R("🔌", "Watts and demand", "Power is measured in watts. A powerful GPU can draw a lot; the PSU must supply enough for all parts, with some to spare. Phones and laptops use far less than big desktops."),
  R("🔥", "Work makes heat", "When the CPU and GPU work hard they get hot. If they get too hot they slow themselves down (thermal throttling) to stay safe — so good cooling keeps performance up."),
  R("🧊", "Thermal paste & coolers", "A thin layer of thermal paste between a chip and its cooler helps heat flow into the metal fins, which fans or liquid then carry away."),
  R("🌬️", "Airflow and dust", "Cool air should enter the front and hot air leave the back and top (hot air rises). Dust blocks airflow, so keeping vents clean keeps a computer cool — important in dusty conditions.")
 ],
 [
  "The power supply converts mains electricity to what the parts need.",
  "Power is measured in watts; the PSU must supply enough for all parts.",
  "Working hard makes the CPU and GPU hot.",
  "Too hot and they slow down to stay safe — that's thermal throttling.",
  "Thermal paste helps heat flow from the chip into the cooler.",
  "Fans or liquid then carry the heat away.",
  "Cool air in the front, hot air out the back. Dust blocks airflow, so clean the vents."
 ],
 {"title": "Heat check", "steps": [
    "Use a monitor app to see the CPU temperature while idle.",
    "Do something heavy (a big download, a game, many tabs) and watch the temperature rise.",
    "Look at the computer's vents — are they dusty? Should they be cleaned?"
  ], "question": "Idle vs busy temperature, and whether the vents need cleaning."},
 [
  Q("The power supply (PSU) does what?", ["Converts mains power to what parts need", "Draws the screen", "Stores files", "Connects Wi-Fi"], 0, "It feeds steady power to the parts."),
  Q("Power is measured in...", ["Watts", "GHz", "GB", "ms"], 0, "Watts."),
  Q("When a chip gets too hot it...", ["Slows down to stay safe", "Gets faster", "Changes colour", "Nothing"], 0, "That's thermal throttling."),
  Q("Thermal paste helps by...", ["Moving heat from the chip to the cooler", "Gluing the PSU", "Adding RAM", "Cleaning the screen"], 0, "Better heat flow."),
  Q("Good airflow is...", ["Cool air in front, hot air out back/top", "All fans off", "Hot air in the front", "No vents"], 0, "Hot air rises and exits."),
  Q("The enemy of cooling is...", ["Dust", "Music", "Light", "Stickers"], 0, "Dust blocks airflow."),
  Q("A reliable PSU matters because it...", ["Feeds and protects every part", "Draws graphics", "Stores games", "Speeds the internet"], 0, "It powers the whole computer."),
  Q("What happens when dust clogs a laptop's heatsink fins and fan?", ["Heat is trapped, causing thermal throttling and loud fan noise", "The laptop becomes lighter", "Battery life increases", "The screen becomes dimmer"], 0, "Blocked airflow prevents cooling."),
  Q("Why should you never cheap out on a generic, unbranded Power Supply (PSU)?", ["A failing cheap PSU can send voltage spikes and destroy other components", "It weighs too much", "It has too many cables", "It changes the CPU clock"], 0, "A quality PSU provides clean, regulated power and protections."),
  Q("Thermal throttling is a feature that...", ["Protects the chip from permanent heat damage by lowering speed", "Speeds up the computer when hot", "Turns off the fans", "Deletes temporary files"], 0, "Lowers clock frequency to prevent hardware damage.")
 ]))

MODULES.append(M("junior", "j-bits", "C8", "Bits & Bytes", "How Big Is Data",
 [
  R("💡", "The bit", "Deep down a computer uses switches that are either OFF or ON, written 0 or 1. One such switch is a bit — the smallest piece of information."),
  R("📦", "8 bits = a byte", "Eight bits grouped together make a byte. One byte can store a single letter, like the 'A' in your name. Your full name is just a few bytes."),
  R("🪜", "The size ladder", "About 1000 bytes = 1 kilobyte (KB). About 1000 KB = 1 megabyte (MB). About 1000 MB = 1 gigabyte (GB). About 1000 GB = 1 terabyte (TB). Each step is roughly a thousand times bigger."),
  R("📱", "Everyday sizes", "A text message is a few bytes. A photo is a few MB. A music track is a few MB. A long HD video or a big app is hundreds of MB to several GB. A phone might store 128 GB."),
  R("📶", "Speed vs size", "Internet speed is measured in megabits per second (Mbps, small b). File size is in megabytes (MB, big B). Since 8 bits = 1 byte, a 16 Mbps link downloads about 2 MB each second — handy to know when buying a data bundle.")
 ],
 [
  "Deep down a computer uses switches: off or on, 0 or 1. That's a bit.",
  "Eight bits make a byte, which can store one letter.",
  "About a thousand bytes is a kilobyte; a thousand KB is a megabyte.",
  "A thousand MB is a gigabyte; a thousand GB is a terabyte.",
  "A photo is a few MB; a long video is hundreds of MB to several GB.",
  "Internet speed is in megabits (small b); files are in megabytes (big B).",
  "Eight bits per byte, so a 16 Mbps link does about 2 MB a second. Good for bundles!"
 ],
 {"title": "Size and speed", "steps": [
    "Check the size of a photo and a video on your device (in MB or GB).",
    "Find your phone's total storage and how much is free.",
    "With a grown-up, note your data bundle speed (Mbps) and estimate the MB per second."
  ], "question": "A photo's size, your free storage, and your estimated MB per second."},
 [
  Q("The smallest piece of information is a...", ["Bit", "Byte", "Gigabyte", "Pixel"], 0, "A bit is 0 or 1."),
  Q("How many bits make a byte?", ["8", "2", "100", "1000"], 0, "8 bits = 1 byte."),
  Q("Order from smallest: KB, MB, GB means...", ["KB < MB < GB", "GB < MB < KB", "MB < KB < GB", "all equal"], 0, "Each step ~1000x bigger."),
  Q("Which is the biggest?", ["1 TB", "1 GB", "1 MB", "1 KB"], 0, "Terabyte is largest here."),
  Q("A photo is usually about...", ["A few MB", "A few bits", "A few TB", "Nothing"], 0, "Megabytes."),
  Q("Internet speed is measured in...", ["Megabits per second (Mbps)", "Megabytes", "Watts", "Hertz"], 0, "Mbps, with a small b."),
  Q("Because 8 bits = 1 byte, a 16 Mbps link downloads about...", ["2 MB per second", "16 MB per second", "128 MB per second", "1 bit per second"], 0, "16 ÷ 8 = 2 MB/s."),
  Q("How many different values can a single byte (8 bits) represent?", ["256 values (from 0 to 255)", "8 values", "100 values", "1000 values"], 0, "2 raised to the 8th power equals 256."),
  Q("If your internet connection downloads at 80 Mbps, the file download speed is roughly...", ["10 MB/s", "80 MB/s", "800 MB/s", "1 MB/s"], 0, "80 divided by 8 bits per byte = 10 MB/s."),
  Q("In binary, what number does the bit pattern '00000101' represent?", ["5", "3", "7", "10"], 0, "4 + 1 = 5 in base 2.")
 ]))

MODULES.append(M("junior", "j-network", "C9", "The Network", "From Device to Server",
 [
  R("🏠", "Your local network (LAN)", "At home or school your devices connect to a router — by Wi-Fi or cable — forming a Local Area Network (LAN). The router is the gateway between your LAN and the wider internet."),
  R("📮", "Packets", "Data is split into small packets, each labelled with where it's going and where it came from, like addressed envelopes. They travel separately and are reassembled at the destination."),
  R("🌍", "ISP and the wider internet", "Your router passes packets to your ISP (e.g. Safaricom, Zuku, JTL). The ISP connects to other networks — through cables, fibre, and undersea cables — until your packets reach the right server, maybe on another continent."),
  R("🔢", "IP addresses", "Every device on a network has an IP address, a number that identifies it, like a postal address. Packets use IP addresses to find their way. Public IPs are reachable on the internet; private IPs (like 192.168.x.x) are used inside your LAN."),
  R("⏱️", "Why distance matters", "A server far away means packets travel further, so ping is higher. Content delivery networks (CDNs) keep copies of popular content closer to users to make it faster — one reason some sites load quicker than others.")
 ],
 [
  "At home your devices connect to a router, forming a local network, a LAN.",
  "The router is the gateway between your LAN and the wider internet.",
  "Data travels as packets, like addressed envelopes.",
  "Your router passes packets to your ISP, like Safaricom or Zuku.",
  "The ISP connects to other networks, even by undersea cables.",
  "Every device has an IP address, like a postal address, so packets find their way.",
  "A far server means higher ping; CDNs keep copies closer to speed things up."
 ],
 {"title": "Trace your network", "steps": [
    "Find your device's IP address (phone: Settings > Wi-Fi > the network; PC: 'ipconfig' or 'ifconfig'). Is it a private 192.168.x.x?",
    "With a grown-up, find who your ISP is.",
    "Run 'tracert google.com' (Windows) or 'traceroute google.com' and count the hops."
  ], "question": "Your private IP, your ISP, and roughly how many hops to google.com."},
 [
  Q("Devices on your home network connect through a...", ["Router", "Monitor", "Printer", "Speaker"], 0, "The router runs your LAN."),
  Q("A home/school network is called a...", ["LAN (Local Area Network)", "CPU", "GPU", "URL"], 0, "Local Area Network."),
  Q("Data travels across networks as...", ["Packets", "Pixels", "Watts", "Cores"], 0, "Small labelled packets."),
  Q("The company that connects you to the internet is your...", ["ISP", "CPU", "PSU", "GPU"], 0, "Internet Service Provider."),
  Q("An IP address is like a...", ["Postal address for a device", "Password", "Photo", "Fan"], 0, "It identifies a device on a network."),
  Q("192.168.1.10 is an example of a...", ["Private IP used inside a LAN", "Public website", "Password", "File type"], 0, "Private range used at home."),
  Q("A server far away usually means...", ["Higher ping", "Lower ping", "More storage", "Louder sound"], 0, "Packets travel further."),
  Q("What is the primary role of a router in a home or school network?", ["To direct traffic and forward packets between different networks", "To draw 3D graphics", "To generate electricity", "To store photos permanently"], 0, "Routers route packets between your LAN and the WAN / internet."),
  Q("Which protocol ensures reliable packet delivery by acknowledging received packets?", ["TCP (Transmission Control Protocol)", "UDP", "HTML", "GPU"], 0, "TCP checks for lost packets and retransmits them."),
  Q("Subsea fiber-optic cables landing in Mombasa (like SEACOM and TEAMS) carry...", ["Over 95% of international internet data entering Kenya", "Only voice phone calls", "Electricity for coastal towns", "Drinking water"], 0, "Undersea fiber cables form the backbone of Kenya's global connectivity.")
 ]))

MODULES.append(M("junior", "j-web", "C10", "How the Web Works", "Domains, DNS & HTTPS",
 [
  R("🔗", "Websites vs the internet", "The internet is the network of connected computers. The World Wide Web (WWW) is the pages and sites you view with a browser, which ride on top of the internet. The web is one of many things the internet carries."),
  R("🏷️", "Domain names", "Computers find each other by IP address (numbers), but numbers are hard to remember. A domain name like safaricom.co.ke is a friendly label for a website. Names end in parts like .com, .org, or Kenya's .ke / .co.ke."),
  R("📖", "DNS: the internet's address book", "DNS (Domain Name System) turns a domain name into its IP address — like a phone contact list turning a name into a number. When you type a site, your device asks a DNS resolver 'what's the IP for this name?' and gets an answer, usually in milliseconds."),
  R("📨", "Loading a page: request & response", "Your browser sends an HTTP request to the site's server ('please send me this page'). The server replies with an HTTP response containing the page — text, images and code — which the browser puts together and shows you."),
  R("🔒", "HTTP vs HTTPS", "HTTPS is HTTP with encryption (TLS): the data is scrambled so others on the network can't read or change it. The padlock means the connection is private and the site proved its identity with a certificate. Never enter a password or pay on plain HTTP."),
  R("🛡️", "Trust and certificates", "A site's certificate is issued by a trusted authority and ties the domain to its owner. It's why the padlock matters — it helps confirm you're really talking to safaricom.co.ke and not an impostor. Phishing sites often use look-alike names, so check the address carefully.")
 ],
 [
  "The internet is the network; the web is the pages you view in a browser.",
  "Computers find each other by IP address, but numbers are hard to remember.",
  "A domain name like safaricom.co.ke is a friendly label for a site.",
  "DNS turns that name into its IP address, like a contact list turning a name into a number.",
  "Your browser sends a request; the server sends back the page. Request and response.",
  "HTTPS adds encryption so others can't read or change your data.",
  "The padlock and a certificate help prove you're talking to the real site. Check the address!"
 ],
 {"title": "Look under the hood of the web", "steps": [
    "Open a website and click the padlock — view the certificate and see who it was issued to.",
    "With a grown-up, open Command Prompt/Terminal and run: nslookup safaricom.co.ke  — note the IP address it returns.",
    "Compare two site addresses and explain which looks genuine and which could be a look-alike phishing name."
  ], "question": "An IP address DNS returned, and one tip for spotting a fake look-alike address."},
 [
  Q("The World Wide Web is...", ["The pages/sites you view in a browser", "The same as the whole internet", "A type of cable", "A password"], 0, "The web rides on top of the internet."),
  Q("A domain name (like safaricom.co.ke) is...", ["A friendly label for a website", "A password", "An IP number", "A file type"], 0, "Easier to remember than numbers."),
  Q("DNS turns a domain name into...", ["An IP address", "A password", "A photo", "A file"], 0, "Like a contact list: name → number."),
  Q("When you open a page, your browser sends the server an...", ["HTTP request", "IP address only", "SMS", "email"], 0, "The server replies with a response."),
  Q("HTTPS is different from HTTP because it...", ["Encrypts the data", "Is slower always", "Needs no internet", "Shows more ads"], 0, "TLS encryption keeps data private."),
  Q("The padlock in the address bar means...", ["The connection is encrypted and the site proved its identity", "The site is free", "You won a prize", "The page is empty"], 0, "Private + identity checked."),
  Q("A phishing site often uses...", ["A look-alike domain name", "The exact official name", "No name at all", "A padlock only"], 0, "Check the address carefully."),
  Q("You should NEVER enter a password on...", ["Plain HTTP (no padlock)", "HTTPS with a padlock", "A trusted site", "Your own account"], 0, "No encryption = unsafe."),
  Q("In the URL 'https://soma-smart.pages.dev', which part is the Top-Level Domain (TLD)?", [".dev", "https", "soma-smart", "pages"], 0, ".dev is the TLD at the end of the domain hierarchy."),
  Q("When a DNS cache stores an address lookup locally, it...", ["Speeds up future requests by avoiding a repeat query across the internet", "Changes the website password", "Slows down your browser", "Deletes your history"], 0, "DNS caching saves time and network bandwidth.")
 ]))
