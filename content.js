/* Tech Tayari — free CBE digital-literacy course content.
 * Four tracks: 'primary' (Grade 4–6), 'junior' (Grade 7–9), 'senior' (Grade 10) and 'senior11' (Grade 11).
 * Each module: read cards → listen (narrated) → watch (optional video) → mission → quiz.
 * Mastery levels (not prizes): new → learning → practised → mastered.
 * video.id = YouTube id ("" shows a friendly no-video screen). quiz 'a' = index of correct option.
 * Kenyan, practical references; light Kiswahili/Sheng. Verify technical facts before publishing.
 */
window.COURSE = {
 "title": "Tech Tayari",
 "tagline": "Free computer and internet literacy for everyone.",
 "passMark": 4,
 "questionsPerQuiz": 5,
 "mastery": {
  "practised": 4,
  "mastered": 5
 },
 "tracks": [
  {
   "id": "primary",
   "name": "Digital Foundations",
   "level": "Grade 4–6 · ages 9–11",
   "blurb": "Start here. Learn what a computer is, how to use it, and how to stay safe online."
  },
  {
   "id": "junior",
   "name": "Computers & Networks",
   "level": "Grade 7–9 · ages 12–15",
   "blurb": "Go deeper: inside the computer, how it runs fast, and how the whole internet connects."
  },
  {
   "id": "ai",
   "name": "AI Basics",
   "level": "Grade 7–11 · ages 12–17",
   "blurb": "What artificial intelligence is, how machines learn from data, how chatbots write, and how to use AI fairly, safely and honestly."
  },
  {
   "id": "senior",
   "name": "Computer Studies I",
   "level": "Grade 10 · ages 15–16",
   "blurb": "Senior School Computer Studies, Grade 10: how computers are built and run, how networks carry data, and your first programs in Python."
  },
  {
   "id": "senior11",
   "name": "Computer Studies II",
   "level": "Grade 11 · ages 16–17",
   "blurb": "Senior School Computer Studies, Grade 11: number systems and logic, network protocols and security, object-oriented programming, databases, SQL and the web."
  }
 ],
 "modules": [
  {
   "track": "primary",
   "id": "p-meet",
   "code": "D1",
   "name": "Meet the Computer",
   "part": "What's inside the box",
   "read": [
    {
     "icon": "🖥️",
     "title": "What is a computer?",
     "text": "A computer is a machine that follows instructions to do work: typing a letter, playing a video, storing photos. A desktop, a laptop, even the smartphone in your pocket — zote ni computers."
    },
    {
     "icon": "🧠",
     "title": "The brain: CPU",
     "text": "Inside is a chip called the CPU (processor). It is the ubongo — the brain — that does the thinking and follows your instructions, step by step, very fast."
    },
    {
     "icon": "🏗️",
     "title": "Memory and storage",
     "text": "RAM is the short-term memory — like your hand holding what you use right now. Storage (the disk) is the long-term keeper, like a cupboard that holds your files even after you switch off."
    },
    {
     "icon": "⌨️",
     "title": "Input and output",
     "text": "You put things IN with a keyboard, mouse or touch screen (input). The computer shows results OUT on the screen or speaker (output). Input, process, output — ingiza, fanya kazi, toa."
    },
    {
     "icon": "⚡",
     "title": "Hardware vs software",
     "text": "Hardware is the parts you can touch (screen, keyboard). Software is the programs inside that you cannot touch (a browser, a game, the calculator). Hardware ni kushika, software ni programu."
    }
   ],
   "listen": [
    "Karibu! Let's meet the computer.",
    "A computer is a machine that follows instructions to do work.",
    "Inside is the CPU — the ubongo, the brain that does the thinking.",
    "RAM holds what you are using now; the disk stores files for keeps.",
    "You put things in with a keyboard or mouse: that is input.",
    "It shows results on the screen: that is output.",
    "Parts you touch are hardware; programs inside are software. Sawa?"
   ],
   "video": {
    "id": "mCq8-xTH7jA",
    "title": "How Computers Work: What Makes a Computer, a Computer?",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Spot the parts",
    "steps": [
     "Find a computer or phone. Point to the screen (output) and the keyboard or touch screen (input).",
     "Name one piece of hardware and one piece of software you can see.",
     "Ask a grown-up or teacher: what is this device's storage size (in GB)?"
    ],
    "question": "One hardware part, one software program, and the storage size you found.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "What device did you explore?",
        "options": [
         "Desktop computer",
         "Laptop",
         "Smartphone",
         "Tablet"
        ],
        "answer": null,
        "why": ""
       },
       {
        "q": "What is its storage size? Ask a grown-up, or look in Settings › Storage (or About).",
        "options": [
         "16 GB",
         "32 GB",
         "64 GB",
         "128 GB",
         "256 GB",
         "512 GB",
         "1 TB or more"
        ],
        "answer": null,
        "why": ""
       }
      ]
     },
     {
      "type": "sort",
      "label": "Sort each one: is it hardware (a part you can touch) or software (a program)?",
      "buckets": [
       "Hardware",
       "Software"
      ],
      "items": [
       {
        "t": "Keyboard",
        "b": 0
       },
       {
        "t": "Calculator app",
        "b": 1
       },
       {
        "t": "Screen",
        "b": 0
       },
       {
        "t": "Web browser",
        "b": 1
       },
       {
        "t": "CPU (processor)",
        "b": 0
       },
       {
        "t": "Drawing app",
        "b": 1
       },
       {
        "t": "Mouse",
        "b": 0
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "A computer is a machine that...",
     "options": [
      "Follows instructions to do work",
      "Thinks on its own like a person",
      "Only plays music",
      "Is always a desktop"
     ],
     "a": 0,
     "why": "It follows the instructions you give it."
    },
    {
     "q": "The 'brain' of the computer is the...",
     "options": [
      "CPU (processor)",
      "Screen",
      "Keyboard",
      "Cable"
     ],
     "a": 0,
     "why": "The CPU does the thinking."
    },
    {
     "q": "Which is INPUT?",
     "options": [
      "A keyboard",
      "The screen",
      "A speaker",
      "A printer"
     ],
     "a": 0,
     "why": "Input puts information in; a keyboard does that."
    },
    {
     "q": "Which is OUTPUT?",
     "options": [
      "The screen",
      "The mouse",
      "The keyboard",
      "The touch pad"
     ],
     "a": 0,
     "why": "Output shows results; the screen does that."
    },
    {
     "q": "RAM is best described as...",
     "options": [
      "Short-term memory for what you use now",
      "A cupboard for keeping files forever",
      "The brain",
      "A cable"
     ],
     "a": 0,
     "why": "RAM holds what's in use right now."
    },
    {
     "q": "Which is SOFTWARE?",
     "options": [
      "A web browser",
      "The keyboard",
      "The screen",
      "The mouse"
     ],
     "a": 0,
     "why": "Software is a program you can't touch."
    },
    {
     "q": "Hardware means...",
     "options": [
      "Parts you can touch",
      "Programs inside",
      "The internet",
      "A password"
     ],
     "a": 0,
     "why": "Hardware is the physical parts."
    },
    {
     "q": "Which of these is a computer?",
     "options": [
      "A smartphone",
      "A wooden chair",
      "A glass cup",
      "A textbook"
     ],
     "a": 0,
     "why": "A smartphone has a processor and memory."
    },
    {
     "q": "When the computer saves files even after you switch it off, it uses...",
     "options": [
      "Storage (hard disk or flash)",
      "RAM only",
      "The keyboard",
      "The speakers"
     ],
     "a": 0,
     "why": "Storage keeps files permanently."
    },
    {
     "q": "What are the three main steps a computer performs?",
     "options": [
      "Input, process, output",
      "Sleep, eat, run",
      "Download, copy, delete",
      "Turn on, heat up, switch off"
     ],
     "a": 0,
     "why": "Ingiza, fanya kazi, toa."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 4–6 · Digital devices & their parts",
   "explainer": "input-process-output"
  },
  {
   "track": "primary",
   "id": "p-mouse",
   "code": "D2",
   "name": "Mouse & Keyboard",
   "part": "Control the computer",
   "read": [
    {
     "icon": "🖱️",
     "title": "Using the mouse",
     "text": "The mouse moves a pointer on the screen. Left-click to choose. Double-click to open. Right-click shows a menu of extra choices. Drag = hold the button and move."
    },
    {
     "icon": "⌨️",
     "title": "The keyboard",
     "text": "Keys type letters and numbers. The long bar is the Spacebar. Enter starts a new line or confirms. Backspace rubs out the letter before the cursor."
    },
    {
     "icon": "⇧",
     "title": "Shift and Caps",
     "text": "Hold Shift to type a CAPITAL letter or the symbol on top of a key. Caps Lock keeps all letters capital until you press it again. On a phone, tap the ⇧ arrow key once for one capital letter, or twice to keep capitals on."
    },
    {
     "icon": "✂️",
     "title": "Copy, cut, paste",
     "text": "Ctrl + C copies, Ctrl + X cuts (moves), Ctrl + V pastes. Ctrl + Z undoes a mistake. These shortcuts save you a lot of time — they work in school work too. On a phone: press and hold a word to select it, tap Copy, then press and hold where you want it and tap Paste."
    },
    {
     "icon": "👆",
     "title": "Touch screens",
     "text": "On a phone or tablet, your finger is the mouse. Tap to choose, press-and-hold for a menu, swipe to scroll. Same ideas, different tool."
    }
   ],
   "listen": [
    "Let's learn to control the computer.",
    "The mouse moves a pointer. Left-click to choose, double-click to open.",
    "Right-click shows a menu with more choices.",
    "On the keyboard, Enter confirms and Backspace rubs out a letter.",
    "Hold Shift for a CAPITAL letter.",
    "Ctrl C copies, Ctrl V pastes, Ctrl Z undoes. Handy for homework!",
    "On a phone, your finger does the same jobs. Easy."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Mouse and keyboard practice",
    "steps": [
     "Open any writing app (on a phone, the Notes or Messages app works). Type your name, then make it CAPITAL using Shift (the ⇧ key on a phone).",
     "Type a short sentence, then use Backspace to fix one letter.",
     "Copy your sentence (Ctrl+C) and paste it (Ctrl+V) on a new line. On a phone: press and hold, tap Copy, then Paste."
    ],
    "question": "The sentence you typed, and which shortcut you liked most.",
    "tasks": [
     {
      "type": "typing",
      "label": "Use Shift for the capital letters (on a phone, tap ⇧ first). Type exactly:",
      "target": "Tech Tayari Kenya"
     },
     {
      "type": "typing",
      "label": "Now type this sentence. Made a mistake? Fix it with Backspace.",
      "target": "Habari yako? I can type!"
     },
     {
      "type": "paste",
      "label": "Copy the sentence (select it, then Ctrl+C) and paste it here with Ctrl+V. On a phone: press and hold, tap Copy, then Paste.",
      "target": "Habari yako? I can type!"
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which keyboard shortcut pastes?",
        "options": [
         "Ctrl+C",
         "Ctrl+V",
         "Ctrl+X",
         "Shift"
        ],
        "answer": 1,
        "why": "Ctrl+V pastes. Ctrl+C copies and Ctrl+X cuts."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "To OPEN a file with the mouse you usually...",
     "options": [
      "Double-click it",
      "Right-click once",
      "Shake the mouse",
      "Press Enter twice"
     ],
     "a": 0,
     "why": "A double-click opens things."
    },
    {
     "q": "Right-click is used to...",
     "options": [
      "Show a menu of extra choices",
      "Delete the computer",
      "Turn off the screen",
      "Type a capital letter"
     ],
     "a": 0,
     "why": "Right-click opens a context menu."
    },
    {
     "q": "Which shortcut COPIES?",
     "options": [
      "Ctrl + C",
      "Ctrl + V",
      "Ctrl + Z",
      "Ctrl + P"
     ],
     "a": 0,
     "why": "C for copy."
    },
    {
     "q": "Ctrl + V does what?",
     "options": [
      "Pastes",
      "Copies",
      "Deletes everything",
      "Prints"
     ],
     "a": 0,
     "why": "V pastes what you copied."
    },
    {
     "q": "To type a CAPITAL letter you hold...",
     "options": [
      "Shift",
      "Spacebar",
      "Enter",
      "Backspace"
     ],
     "a": 0,
     "why": "Shift gives capitals and top symbols."
    },
    {
     "q": "Backspace is used to...",
     "options": [
      "Rub out the letter before the cursor",
      "Save the file",
      "Open a menu",
      "Start a game"
     ],
     "a": 0,
     "why": "It deletes the previous character."
    },
    {
     "q": "On a touch screen, press-and-hold usually...",
     "options": [
      "Opens a menu",
      "Turns off the phone",
      "Deletes the app",
      "Calls someone"
     ],
     "a": 0,
     "why": "Press-and-hold is like a right-click."
    },
    {
     "q": "The longest key on the keyboard is the...",
     "options": [
      "Spacebar",
      "Enter key",
      "Shift key",
      "Escape key"
     ],
     "a": 0,
     "why": "The Spacebar separates words with spaces."
    },
    {
     "q": "Which keyboard shortcut UNDOES a mistake?",
     "options": [
      "Ctrl + Z",
      "Ctrl + C",
      "Ctrl + V",
      "Ctrl + S"
     ],
     "a": 0,
     "why": "Ctrl + Z undoes the last action."
    },
    {
     "q": "Holding the mouse button while moving it across the screen is called...",
     "options": [
      "Dragging",
      "Clicking",
      "Typing",
      "Scrolling"
     ],
     "a": 0,
     "why": "Dragging moves items on screen."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 4–6 · Basic operations: mouse & keyboard",
   "explainer": ""
  },
  {
   "track": "primary",
   "id": "p-files",
   "code": "D3",
   "name": "Files & Folders",
   "part": "Keep your work tidy",
   "read": [
    {
     "icon": "📄",
     "title": "What is a file?",
     "text": "A file is one saved thing: a photo, a song, a homework document. Each file has a name and a type (like .jpg for a picture or .pdf for a document)."
    },
    {
     "icon": "📁",
     "title": "Folders keep order",
     "text": "A folder is like a cardboard file or a drawer that holds related files together. 'School', 'Photos', 'Music' — giving folders clear names helps you find things fast."
    },
    {
     "icon": "💾",
     "title": "Save often",
     "text": "When you make something, Save it so it is not lost. 'Save As' makes a new copy with a new name — good for trying changes without spoiling the first one."
    },
    {
     "icon": "✏️",
     "title": "Name things clearly",
     "text": "'Homework_Science_Term2' is easier to find later than 'New document (3)'. A clear name today saves searching tomorrow."
    },
    {
     "icon": "☁️",
     "title": "Back it up",
     "text": "A backup is a spare copy kept somewhere safe — a flash disk or the cloud. If a phone is lost or a laptop spoils, your backup still has your work. Back up anything you'd be sad to lose."
    }
   ],
   "listen": [
    "Let's keep your work tidy and safe.",
    "A file is one saved thing: a photo, a song, a homework document.",
    "A folder holds related files together, like a drawer.",
    "Give folders clear names: School, Photos, Music.",
    "Always Save your work so it is not lost.",
    "Save As makes a new copy to try changes safely.",
    "And back up important work to a flash disk or the cloud. Usipoteze kazi yako!"
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Tidy up",
    "steps": [
     "Make a new folder and give it a clear name.",
     "Create or move two files into it.",
     "With a grown-up, copy one important file to a flash disk or cloud as a backup."
    ],
    "question": "The folder name you chose and what you backed up.",
    "tasks": [
     {
      "type": "text",
      "label": "What did you name your new folder?",
      "min": 3,
      "reject": [
       "new folder",
       "folder",
       "untitled",
       "untitled folder",
       "aaa",
       "abc"
      ],
      "hint": "Choose a clear name that says what is inside, like School Work 2026."
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which is the clearest name for your science homework?",
        "options": [
         "doc1.docx",
         "final FINAL (2).docx",
         "Science-Homework-Plants-2026.docx",
         "aaaa.docx"
        ],
        "answer": 2,
        "why": "A clear name says what it is and when, so you can find it later."
       },
       {
        "q": "Where did you back up your important file?",
        "options": [
         "A flash disk",
         "Cloud storage (like Google Drive)",
         "An external hard drive",
         "Another computer"
        ],
        "answer": null,
        "why": ""
       }
      ]
     },
     {
      "type": "sort",
      "label": "Put each file into the right folder.",
      "buckets": [
       "School",
       "Photos",
       "Music"
      ],
      "items": [
       {
        "t": "Maths-Fractions-Notes.docx",
        "b": 0
       },
       {
        "t": "Family-Trip-Naivasha.jpg",
        "b": 1
       },
       {
        "t": "Benga-Song.mp3",
        "b": 2
       },
       {
        "t": "English-Composition.docx",
        "b": 0
       },
       {
        "t": "Birthday-Cake.png",
        "b": 1
       },
       {
        "t": "Choir-Practice.mp3",
        "b": 2
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "A file is...",
     "options": [
      "One saved thing, like a photo or document",
      "A kind of folder",
      "A type of mouse",
      "The internet"
     ],
     "a": 0,
     "why": "A file is a single saved item."
    },
    {
     "q": "A folder is used to...",
     "options": [
      "Hold related files together",
      "Delete files",
      "Type letters",
      "Charge the phone"
     ],
     "a": 0,
     "why": "Folders group related files."
    },
    {
     "q": "'Save As' is useful because it...",
     "options": [
      "Makes a new copy with a new name",
      "Deletes the file",
      "Turns off the computer",
      "Prints the file"
     ],
     "a": 0,
     "why": "Great for trying changes safely."
    },
    {
     "q": "A good file name is...",
     "options": [
      "Homework_Science_Term2",
      "New document (3)",
      "asdfgh",
      "aaa"
     ],
     "a": 0,
     "why": "Clear names are easy to find later."
    },
    {
     "q": "A backup is...",
     "options": [
      "A spare copy kept somewhere safe",
      "A broken file",
      "A game",
      "A password"
     ],
     "a": 0,
     "why": "So you don't lose your work."
    },
    {
     "q": "You should back up...",
     "options": [
      "Anything you'd be sad to lose",
      "Nothing ever",
      "Only on holidays",
      "Only games"
     ],
     "a": 0,
     "why": "Protect important work."
    },
    {
     "q": ".pdf and .jpg are examples of...",
     "options": [
      "File types",
      "Folders",
      "Passwords",
      "Websites"
     ],
     "a": 0,
     "why": "The type tells you what kind of file it is."
    },
    {
     "q": "Why do we put files into folders?",
     "options": [
      "To organize and find them easily",
      "To delete them faster",
      "To make them smaller",
      "To play music"
     ],
     "a": 0,
     "why": "Folders keep your work tidy and organized."
    },
    {
     "q": "If you want to keep your original file and make an edited version, you use...",
     "options": [
      "Save As",
      "Delete",
      "Print",
      "Close without saving"
     ],
     "a": 0,
     "why": "Save As creates a new copy under a new name."
    },
    {
     "q": "Which of these is a safe place for a backup copy?",
     "options": [
      "A flash disk or cloud storage",
      "The recycling bin",
      "Nowhere",
      "A sticker"
     ],
     "a": 0,
     "why": "Flash disks and cloud storage keep extra copies safe."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 4–6 · File handling / basic operations",
   "explainer": ""
  },
  {
   "track": "primary",
   "id": "p-safe",
   "code": "D4",
   "name": "Stay Safe Online",
   "part": "Shields up",
   "read": [
    {
     "icon": "🛡️",
     "title": "Your secret identity",
     "text": "Online, keep your real name, home, school and phone number private from strangers. Use a nickname/username. Only share real details with grown-ups you trust in real life."
    },
    {
     "icon": "🔑",
     "title": "Strong passwords",
     "text": "A password is the key to your account. Make it long and hard to guess, like a short silly sentence. Keep it secret — even from friends. Usimpe mtu password yako."
    },
    {
     "icon": "🎣",
     "title": "Spot the tricks",
     "text": "If someone online offers free airtime, free data, or a prize for your password or an M-Pesa PIN, it is a scam. Real companies never ask for your PIN or password. If it's too good to be true, ni uwongo."
    },
    {
     "icon": "🙅",
     "title": "Strangers online",
     "text": "If a stranger wants to chat privately, asks for photos, wants to meet, or makes you feel weird or scared — stop, don't reply, and tell a trusted grown-up. It is never your fault."
    },
    {
     "icon": "⚖️",
     "title": "Balance your time",
     "text": "Screens are useful but too much tires your eyes, spoils sleep and steals time for friends, sport and family. Agree your screen time with a grown-up. You control the screen, not the other way round."
    }
   ],
   "listen": [
    "This is the most important lesson: staying safe online.",
    "Keep your real name, home and school private from strangers.",
    "Make your password long and secret. Usimpe mtu password yako!",
    "Free airtime or a prize for your PIN or password? Ni scam. Walk away.",
    "If a stranger makes you feel weird, don't reply. Tell a grown-up.",
    "Too much screen time tires your eyes and steals your time.",
    "Agree your screen time with a grown-up. You are the boss, si simu."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Safety promise",
    "steps": [
     "With a grown-up, make one strong password and agree where to keep it safe.",
     "Write down one thing you will never share with strangers online.",
     "Agree your daily screen time and write it somewhere you both see."
    ],
    "question": "Your agreed screen time and one safety rule you promise to keep."
   },
   "quiz": [
    {
     "q": "Online, you should keep private your...",
     "options": [
      "Real name, home and school",
      "Nickname",
      "Favourite colour",
      "Favourite game"
     ],
     "a": 0,
     "why": "Never share real-life details with strangers."
    },
    {
     "q": "Someone asks for your M-Pesa PIN to 'send you a prize'. You...",
     "options": [
      "Refuse — it's a scam",
      "Send the PIN",
      "Share your password too",
      "Give your address"
     ],
     "a": 0,
     "why": "No real company asks for your PIN."
    },
    {
     "q": "A strong password is...",
     "options": [
      "Long, secret and hard to guess",
      "1234",
      "Your name",
      "Shared with friends"
     ],
     "a": 0,
     "why": "Strong and secret."
    },
    {
     "q": "A stranger online asks to meet you. You...",
     "options": [
      "Tell a trusted grown-up",
      "Go and meet them",
      "Send your address",
      "Keep it secret"
     ],
     "a": 0,
     "why": "Always tell a grown-up."
    },
    {
     "q": "'Free data for your password' is...",
     "options": [
      "A scam",
      "A real offer",
      "From your teacher",
      "Safe to accept"
     ],
     "a": 0,
     "why": "Too good to be true = uwongo."
    },
    {
     "q": "Too much screen time can...",
     "options": [
      "Tire your eyes and spoil sleep",
      "Make you taller",
      "Charge the phone",
      "Improve your eyes"
     ],
     "a": 0,
     "why": "Balance keeps you healthy."
    },
    {
     "q": "Who controls your screen time?",
     "options": [
      "You, with a grown-up",
      "The phone",
      "Strangers",
      "Nobody"
     ],
     "a": 0,
     "why": "You are the boss."
    },
    {
     "q": "Which of these is safe to share with strangers online?",
     "options": [
      "A game nickname",
      "Your home address",
      "Your school name",
      "Your parent's phone number"
     ],
     "a": 0,
     "why": "Keep real-life identity private; use a nickname."
    },
    {
     "q": "What should you do if an online message makes you uncomfortable or scared?",
     "options": [
      "Stop, don't reply, and tell a trusted grown-up",
      "Reply angrily",
      "Share your secrets",
      "Delete your computer"
     ],
     "a": 0,
     "why": "Always tell a trusted parent or teacher."
    },
    {
     "q": "Sharing a password with a friend at school is...",
     "options": [
      "Unsafe — keep it secret",
      "A great idea",
      "Required by the computer",
      "Safe if they promise"
     ],
     "a": 0,
     "why": "Passwords should remain secret to you."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 4–6 · Digital safety & responsible use",
   "explainer": ""
  },
  {
   "track": "primary",
   "id": "p-internet",
   "code": "D5",
   "name": "What is the Internet?",
   "part": "The big network",
   "read": [
    {
     "icon": "🌐",
     "title": "A network of computers",
     "text": "The internet is millions of computers all over the world joined together so they can share information. When you open a website or send a WhatsApp, you are using the internet."
    },
    {
     "icon": "📡",
     "title": "How your phone connects",
     "text": "Your phone or computer joins the internet through Wi-Fi (at home or school) or mobile data from a network like Safaricom or Airtel. That connects you to the ISP — the company that gives internet."
    },
    {
     "icon": "✉️",
     "title": "Messages travel in pieces",
     "text": "Your message is broken into small pieces called packets, like sending a long letter in several envelopes. They travel separately and join up again at the other end. Fast!"
    },
    {
     "icon": "🏢",
     "title": "Websites live on servers",
     "text": "A website is kept on a powerful computer called a server that is always on. When you visit tingg.africa or a school site, your phone asks that server for the page."
    },
    {
     "icon": "🔒",
     "title": "The padlock means safe",
     "text": "When you see https and a padlock in the address bar, your connection is encrypted — scrambled so others can't read it. Look for the padlock before typing a password or paying."
    }
   ],
   "listen": [
    "The internet is millions of computers joined together to share information.",
    "Your phone joins through Wi-Fi or mobile data from Safaricom or Airtel.",
    "That connects you to your ISP — the company that provides internet.",
    "Your message travels as small pieces called packets.",
    "Websites live on always-on computers called servers.",
    "When you visit a site, your phone asks that server for the page.",
    "See https and a padlock? That means your connection is safe. Always check."
   ],
   "video": {
    "id": "Dxcc6ycZ73M",
    "title": "What is the Internet?",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Internet explorer",
    "steps": [
     "Ask a grown-up: does your home/school use Wi-Fi or mobile data? Which network?",
     "Open a website and look at the address bar — find the padlock and the https.",
     "Name one thing you do that needs the internet, and one that does not."
    ],
    "question": "Your connection type, and whether the site showed a padlock."
   },
   "quiz": [
    {
     "q": "The internet is...",
     "options": [
      "Many computers joined to share information",
      "One big computer in Nairobi",
      "A type of phone",
      "A password"
     ],
     "a": 0,
     "why": "A global network of computers."
    },
    {
     "q": "A company that provides internet is called an...",
     "options": [
      "ISP",
      "CPU",
      "SSD",
      "APP"
     ],
     "a": 0,
     "why": "Internet Service Provider, like Safaricom or Airtel."
    },
    {
     "q": "Your phone can join the internet using...",
     "options": [
      "Wi-Fi or mobile data",
      "Only a cable",
      "Only at night",
      "A mirror"
     ],
     "a": 0,
     "why": "Wi-Fi or mobile data."
    },
    {
     "q": "Messages travel across the internet as...",
     "options": [
      "Small pieces called packets",
      "One big block",
      "Paper letters",
      "Sound only"
     ],
     "a": 0,
     "why": "Packets travel and rejoin."
    },
    {
     "q": "A website is stored on a...",
     "options": [
      "Server (always-on computer)",
      "Keyboard",
      "Mouse",
      "Printer"
     ],
     "a": 0,
     "why": "Servers hold websites."
    },
    {
     "q": "A padlock and https in the address bar means...",
     "options": [
      "Your connection is safe/encrypted",
      "The site is slow",
      "The site is free",
      "You won a prize"
     ],
     "a": 0,
     "why": "Look for it before passwords/payments."
    },
    {
     "q": "Before typing a password on a site, check for...",
     "options": [
      "The padlock / https",
      "A nice colour",
      "Loud music",
      "A game"
     ],
     "a": 0,
     "why": "Safety first."
    },
    {
     "q": "Can you connect to the internet with wireless Wi-Fi without cables plugged into your phone?",
     "options": [
      "Yes, Wi-Fi sends signals through the air",
      "No, phones always need cables",
      "Only when connected to a TV",
      "Only in the morning"
     ],
     "a": 0,
     "why": "Wi-Fi uses radio waves."
    },
    {
     "q": "A network of computers connected together allows them to...",
     "options": [
      "Share files, messages and resources",
      "Turn into printers",
      "Change into laptops",
      "Work without electricity"
     ],
     "a": 0,
     "why": "Networks share information."
    },
    {
     "q": "When a packet gets lost or delayed on the internet, network protocols...",
     "options": [
      "Resend the missing packet",
      "Shut down the whole internet",
      "Break the screen",
      "Delete your account"
     ],
     "a": 0,
     "why": "Protocols detect and retransmit missing packets."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "junior",
   "id": "j-bootup",
   "code": "C1",
   "name": "Boot Up",
   "part": "The Motherboard",
   "read": [
    {
     "icon": "🔘",
     "title": "Press power",
     "text": "When you press power, a small program on the motherboard called the BIOS/UEFI wakes first. It does a roll call: CPU? RAM? Storage? All present? Then it hands over to the operating system (Windows, Linux or macOS)."
    },
    {
     "icon": "🟩",
     "title": "The motherboard",
     "text": "Every part plugs into the motherboard. Its printed lines (traces) are like roads carrying signals between parts very fast. The graphics card sits in the longest slot because it moves the most data."
    },
    {
     "icon": "🗣️",
     "title": "Drivers are translators",
     "text": "The operating system doesn't automatically know how to talk to each part. A driver is a small translator program (from the part's maker) that lets the OS and the device understand each other. Updating drivers can fix bugs and improve performance."
    },
    {
     "icon": "🚀",
     "title": "Opening a program",
     "text": "When you open an app, its files move from storage (the disk) into RAM. The CPU then runs the instructions and the GPU draws what you see. The whole team starts working together."
    }
   ],
   "listen": [
    "Let's follow what happens when a computer starts.",
    "You press power. The BIOS or UEFI wakes and does a roll call of the parts.",
    "Then it hands over to the operating system.",
    "Every part plugs into the motherboard, which carries signals between them.",
    "A driver is a translator that lets the OS talk to each device.",
    "Open an app and its files move from storage into RAM.",
    "The CPU runs the instructions and the GPU draws the screen. Tayari!"
   ],
   "video": {
    "id": "xnyFYiK2rSY",
    "title": "How Computers Work: Hardware and Software",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Read your computer's spec",
    "steps": [
     "On Windows press the Windows key, type 'System information' and open it (or on a phone open Settings > About).",
     "Write down the Processor (CPU) and the installed RAM.",
     "Find the storage size and how much is free."
    ],
    "question": "Your CPU, RAM amount, and free storage."
   },
   "quiz": [
    {
     "q": "What wakes up FIRST when you press power?",
     "options": [
      "The BIOS/UEFI",
      "The browser",
      "A game",
      "The mouse"
     ],
     "a": 0,
     "why": "It does the roll call of parts."
    },
    {
     "q": "Every part plugs into the...",
     "options": [
      "Motherboard",
      "Monitor",
      "Keyboard",
      "Charger"
     ],
     "a": 0,
     "why": "The motherboard connects everything."
    },
    {
     "q": "A driver is...",
     "options": [
      "A translator program for a device",
      "A racing game",
      "A power cable",
      "A type of RAM"
     ],
     "a": 0,
     "why": "It lets the OS talk to the device."
    },
    {
     "q": "When you open an app, its files move from storage into...",
     "options": [
      "RAM",
      "the screen",
      "the mouse",
      "the internet"
     ],
     "a": 0,
     "why": "RAM holds what's running now."
    },
    {
     "q": "The BIOS/UEFI hands over to the...",
     "options": [
      "Operating system",
      "Printer",
      "Speaker",
      "Wi-Fi"
     ],
     "a": 0,
     "why": "Windows, Linux or macOS then loads."
    },
    {
     "q": "Windows, Linux and macOS are examples of...",
     "options": [
      "Operating systems",
      "Browsers",
      "Games",
      "Cables"
     ],
     "a": 0,
     "why": "The main software that runs the computer."
    },
    {
     "q": "Updating a driver can...",
     "options": [
      "Fix bugs and improve performance",
      "Add more RAM",
      "Make the PC lighter",
      "Change your password"
     ],
     "a": 0,
     "why": "Drivers keep devices working well."
    },
    {
     "q": "What happens during the BIOS/UEFI POST (Power-On Self-Test)?",
     "options": [
      "It tests essential hardware like RAM and CPU before loading the OS",
      "It plays a video",
      "It downloads games",
      "It changes screen brightness"
     ],
     "a": 0,
     "why": "Checks that hardware is working properly."
    },
    {
     "q": "The long expansion slot where a graphics card sits on the motherboard is usually...",
     "options": [
      "PCIe x16",
      "USB-A",
      "Audio jack",
      "HDMI"
     ],
     "a": 0,
     "why": "PCI Express provides high bandwidth for GPUs."
    },
    {
     "q": "Why does RAM lose its contents when the computer is turned off?",
     "options": [
      "RAM is volatile memory",
      "RAM is a magnetic disk",
      "RAM has a battery",
      "RAM only stores pictures"
     ],
     "a": 0,
     "why": "Volatile memory needs continuous power to retain data."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 7–9 · Hardware basics: the motherboard & boot",
   "explainer": ""
  },
  {
   "track": "junior",
   "id": "j-cpu",
   "code": "C2",
   "name": "The CPU",
   "part": "The Processor",
   "read": [
    {
     "icon": "🧠",
     "title": "The decision maker",
     "text": "The CPU runs the instructions of every program: working out sums, moving data, deciding what happens next. In a game it tracks players and rules; in a browser it builds the page."
    },
    {
     "icon": "⏱️",
     "title": "Clock speed (GHz)",
     "text": "A CPU works to a beat called the clock. 3 GHz means about 3 billion beats per second, and on each beat it does a little work. More GHz can mean more work per second — but it's not the only thing that matters."
    },
    {
     "icon": "💪",
     "title": "Newer can be smarter",
     "text": "A newer CPU can beat an older one at the same GHz because it does more useful work on each beat (better design). Speed numbers alone don't tell the whole story."
    },
    {
     "icon": "👥",
     "title": "Cores and threads",
     "text": "A core is a worker inside the CPU. Many CPUs have several cores, so they can do several jobs at once. Some apps use many cores; others lean on one fast core."
    },
    {
     "icon": "🗄️",
     "title": "Cache: the near shelf",
     "text": "Cache is a small, very fast memory on the CPU itself. Grabbing data from cache is quicker than going to RAM, like keeping your most-used book on the desk instead of the shelf."
    }
   ],
   "listen": [
    "The CPU runs the instructions of every program.",
    "It works to a beat called the clock, measured in GHz.",
    "3 GHz is about 3 billion beats a second, doing a little work each beat.",
    "A newer CPU can beat an older one at the same speed — better design.",
    "A core is a worker inside the CPU; many cores do several jobs at once.",
    "Cache is tiny, very fast memory right on the chip.",
    "Grabbing from cache is quicker than going all the way to RAM."
   ],
   "video": {
    "id": "DKGZlaPlVLY",
    "title": "How Computers Work: CPU, Memory, Input & Output",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Watch the CPU work",
    "steps": [
     "Open Task Manager (Ctrl+Shift+Esc on Windows) or a system monitor, and open the CPU graph.",
     "Write down how many cores / logical processors it shows.",
     "Open a few programs and watch the CPU usage rise. Which activity used it most?"
    ],
    "question": "Number of cores, and the activity that used the CPU most."
   },
   "quiz": [
    {
     "q": "The CPU's main job is to...",
     "options": [
      "Run the instructions of programs",
      "Store files forever",
      "Show pictures only",
      "Connect to Wi-Fi"
     ],
     "a": 0,
     "why": "It's the processor/decision-maker."
    },
    {
     "q": "CPU clock speed is measured in...",
     "options": [
      "GHz",
      "GB",
      "Mbps",
      "Watts"
     ],
     "a": 0,
     "why": "Gigahertz = billions of beats per second."
    },
    {
     "q": "3 GHz means about...",
     "options": [
      "3 billion beats per second",
      "3 beats per second",
      "3 thousand",
      "3 GB"
     ],
     "a": 0,
     "why": "Giga = billion."
    },
    {
     "q": "A core is...",
     "options": [
      "A worker inside the CPU",
      "A type of screen",
      "A password",
      "A cable"
     ],
     "a": 0,
     "why": "More cores = more jobs at once."
    },
    {
     "q": "Cache is...",
     "options": [
      "Small, very fast memory on the CPU",
      "A big slow disk",
      "The internet",
      "A fan"
     ],
     "a": 0,
     "why": "Faster to reach than RAM."
    },
    {
     "q": "Why can a new CPU beat an old one at the same GHz?",
     "options": [
      "It does more useful work per beat",
      "It is heavier",
      "It is a nicer colour",
      "It has more cables"
     ],
     "a": 0,
     "why": "Better design = more work per beat."
    },
    {
     "q": "Getting data from cache instead of RAM is...",
     "options": [
      "Faster",
      "Slower",
      "The same",
      "Impossible"
     ],
     "a": 0,
     "why": "Cache is closer and quicker."
    },
    {
     "q": "A multi-core processor has multiple...",
     "options": [
      "Independent processing units on one chip",
      "Power supplies",
      "Screens",
      "Hard drives"
     ],
     "a": 0,
     "why": "Each core can execute instructions in parallel."
    },
    {
     "q": "Why is CPU cache divided into levels like L1, L2, and L3?",
     "options": [
      "L1 is smallest and fastest; L3 is larger but slightly slower",
      "L3 is faster than L1",
      "Only L1 connects to power",
      "To store music"
     ],
     "a": 0,
     "why": "Hierarchy balances extreme speed with capacity."
    },
    {
     "q": "What does IPC stand for in processor performance?",
     "options": [
      "Instructions Per Clock",
      "Internet Protocol Core",
      "Input Processing Cache",
      "Internal Power Control"
     ],
     "a": 0,
     "why": "IPC measures how many instructions a CPU completes each clock beat."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "junior",
   "id": "j-gpu",
   "code": "C3",
   "name": "The GPU",
   "part": "The Graphics Chip",
   "read": [
    {
     "icon": "🔺",
     "title": "Built from triangles",
     "text": "Everything in a 3D game or 3D map is built from many small triangles. The GPU's job is to place all those triangles and colour them, extremely fast."
    },
    {
     "icon": "🎨",
     "title": "Painting pixels",
     "text": "Your screen is made of tiny dots called pixels. A Full HD screen has about 2 million; a 4K screen has about four times as many — that's why 4K is heavier work."
    },
    {
     "icon": "🐜",
     "title": "Many small workers",
     "text": "A GPU has thousands of tiny cores that each colour a few pixels at the same time. Doing many small jobs in parallel is what makes graphics fast."
    },
    {
     "icon": "💡",
     "title": "Shading and light",
     "text": "Small programs called shaders add light, shadow and shine. Some GPUs do ray tracing — following how light really bounces — for realistic reflections, but it is heavy work."
    },
    {
     "icon": "🔍",
     "title": "Upscaling tricks",
     "text": "Techniques like DLSS/FSR render a smaller image then cleverly enlarge it, giving more frames per second for less work. Beyond games, GPUs also speed up video editing and AI."
    }
   ],
   "listen": [
    "The GPU draws what you see on the screen.",
    "3D scenes are built from many small triangles.",
    "The screen is made of pixels; 4K has about four times as many as Full HD.",
    "A GPU has thousands of tiny cores colouring pixels at the same time.",
    "Doing many small jobs at once is what makes graphics fast.",
    "Shaders add light and shadow; ray tracing follows real light — heavy work.",
    "GPUs also speed up video editing and AI, not just games."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Resolution test",
    "steps": [
     "Open the display settings and note the screen resolution (e.g. 1920x1080).",
     "If you can, play a video or game and note how smooth it feels.",
     "Lower the resolution one step and see if it feels smoother. Put it back after."
    ],
    "question": "Your screen resolution and whether lowering it felt smoother."
   },
   "quiz": [
    {
     "q": "3D scenes are built from many...",
     "options": [
      "Triangles",
      "Circles",
      "Letters",
      "Cables"
     ],
     "a": 0,
     "why": "Triangles make up 3D shapes."
    },
    {
     "q": "The tiny dots on a screen are called...",
     "options": [
      "Pixels",
      "Cores",
      "Bits",
      "Bytes"
     ],
     "a": 0,
     "why": "Pixels form the picture."
    },
    {
     "q": "A 4K screen has about how many times the pixels of Full HD?",
     "options": [
      "4 times",
      "2 times",
      "The same",
      "10 times"
     ],
     "a": 0,
     "why": "About four times as many."
    },
    {
     "q": "A GPU is fast because it...",
     "options": [
      "Does many small jobs at the same time",
      "Has one huge worker",
      "Stores files",
      "Cools the CPU"
     ],
     "a": 0,
     "why": "Massively parallel work."
    },
    {
     "q": "Ray tracing follows...",
     "options": [
      "How light really bounces",
      "The mouse",
      "Your password",
      "The Wi-Fi"
     ],
     "a": 0,
     "why": "For realistic reflections and shadows."
    },
    {
     "q": "DLSS/FSR give more FPS by...",
     "options": [
      "Rendering smaller then enlarging cleverly",
      "Adding RAM",
      "Turning off the GPU",
      "Shrinking the screen"
     ],
     "a": 0,
     "why": "Less work for similar sharpness."
    },
    {
     "q": "Besides games, GPUs also speed up...",
     "options": [
      "Video editing and AI",
      "Boiling water",
      "Charging phones",
      "Printing"
     ],
     "a": 0,
     "why": "Parallel power is useful widely."
    },
    {
     "q": "Why are GPUs much better than CPUs at training AI models and processing 3D graphics?",
     "options": [
      "They have thousands of cores designed for parallel math",
      "They have fewer cores",
      "They don't use electricity",
      "They only process text"
     ],
     "a": 0,
     "why": "Massive parallelism excels at matrix operations."
    },
    {
     "q": "The dedicated high-speed memory on a graphics card is called...",
     "options": [
      "VRAM",
      "SSD",
      "BIOS",
      "ROM"
     ],
     "a": 0,
     "why": "Video RAM holds textures, frames and geometry."
    },
    {
     "q": "Ray tracing simulates graphics by...",
     "options": [
      "Calculating the physical path and reflection of light rays",
      "Stretching pixels",
      "Drawing 2D lines only",
      "Using lower resolutions"
     ],
     "a": 0,
     "why": "Realistic lighting based on physics."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "junior",
   "id": "j-ram",
   "code": "C4",
   "name": "RAM & Storage",
   "part": "Memory and the Disk",
   "read": [
    {
     "icon": "🎒",
     "title": "RAM is the backpack",
     "text": "RAM holds what the computer is using right now: the open app, the page you're reading. It is very fast but it empties when you switch off."
    },
    {
     "icon": "📚",
     "title": "Storage is the shelf",
     "text": "Storage (the disk) keeps everything even with the power off: your apps, documents, photos, music. SSDs are fast; older hard disks (HDD) spin a platter and are slower."
    },
    {
     "icon": "🚀",
     "title": "SSD vs HDD",
     "text": "An SSD has no moving parts and loads much faster than a spinning hard disk. The fastest type, NVMe, makes programs and files open quickly."
    },
    {
     "icon": "🐌",
     "title": "When RAM fills up",
     "text": "If RAM fills, the computer borrows slower space on the disk and everything feels sluggish. Closing unused browser tabs and apps frees the backpack."
    },
    {
     "icon": "📏",
     "title": "How big?",
     "text": "RAM is usually a few GB (e.g. 4, 8, 16). Storage is bigger — often hundreds of GB or 1 TB. More RAM helps with many apps open; more storage holds more files."
    }
   ],
   "listen": [
    "RAM holds what the computer is using right now — and empties when off.",
    "Storage, the disk, keeps everything even with the power off.",
    "An SSD has no moving parts and is much faster than an old hard disk.",
    "NVMe SSDs are the fastest and open programs quickly.",
    "If RAM fills up, the computer slows down.",
    "Close unused tabs and apps to free the backpack.",
    "RAM is a few GB; storage is often hundreds of GB or a whole terabyte."
   ],
   "video": {
    "id": "DKGZlaPlVLY",
    "title": "How Computers Work: CPU, Memory, Input & Output",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Memory detective",
    "steps": [
     "In Task Manager > Performance (or a monitor), note total RAM and how much is in use.",
     "Open about ten browser tabs and check RAM again. Did it rise?",
     "Find whether your disk is an SSD or HDD, and its size."
    ],
    "question": "RAM in use before and after tabs, and your disk type and size."
   },
   "quiz": [
    {
     "q": "RAM holds...",
     "options": [
      "What you're using right now",
      "Files forever",
      "Your password",
      "The internet"
     ],
     "a": 0,
     "why": "It empties when the power goes off."
    },
    {
     "q": "Which keeps files when the power is OFF?",
     "options": [
      "Storage (the disk)",
      "RAM",
      "Cache",
      "The screen"
     ],
     "a": 0,
     "why": "Storage is long-term."
    },
    {
     "q": "Which is faster?",
     "options": [
      "An SSD",
      "An old spinning hard disk",
      "A floppy disk",
      "A CD"
     ],
     "a": 0,
     "why": "SSDs have no moving parts."
    },
    {
     "q": "If RAM fills up, the computer...",
     "options": [
      "Slows down",
      "Speeds up",
      "Gets more storage",
      "Turns off safely"
     ],
     "a": 0,
     "why": "It borrows slower disk space."
    },
    {
     "q": "A good fix when RAM is full is to...",
     "options": [
      "Close unused tabs and apps",
      "Buy a new mouse",
      "Turn up volume",
      "Clean the screen"
     ],
     "a": 0,
     "why": "Free up the backpack."
    },
    {
     "q": "RAM sizes are usually around...",
     "options": [
      "4, 8 or 16 GB",
      "500 GB",
      "3 GHz",
      "5 Mbps"
     ],
     "a": 0,
     "why": "A few GB is typical."
    },
    {
     "q": "The fastest common storage type is...",
     "options": [
      "NVMe SSD",
      "Old HDD",
      "Floppy",
      "CD-ROM"
     ],
     "a": 0,
     "why": "NVMe is very fast."
    },
    {
     "q": "An SSD is much faster than an old mechanical HDD because...",
     "options": [
      "It uses flash memory chips with no moving parts",
      "It has a spinning metal disk",
      "It uses water cooling",
      "It is larger in physical size"
     ],
     "a": 0,
     "why": "Solid State Drives have no mechanical delay."
    },
    {
     "q": "What happens when your PC runs out of physical RAM while many apps are open?",
     "options": [
      "It swaps pages to disk (virtual memory), causing slowdown",
      "It burns the processor",
      "It deletes your files",
      "It speeds up"
     ],
     "a": 0,
     "why": "Swapping to disk is thousands of times slower than RAM."
    },
    {
     "q": "Which type of storage retains data even when unplugged?",
     "options": [
      "Non-volatile storage (SSD, HDD, flash disk)",
      "RAM",
      "CPU cache",
      "CPU registers"
     ],
     "a": 0,
     "why": "Non-volatile storage preserves data without power."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 7–9 · Memory & storage basics",
   "explainer": "memory"
  },
  {
   "track": "junior",
   "id": "j-speed",
   "code": "C5",
   "name": "Speed & Lag",
   "part": "Smooth vs Slow",
   "read": [
    {
     "icon": "📓",
     "title": "Frames per second",
     "text": "Video and games are many still pictures shown quickly — like a flip-book. FPS means frames per second. More frames look smoother; 30 is okay, 60 is smooth."
    },
    {
     "icon": "⚡",
     "title": "Two kinds of slow",
     "text": "There are two different problems. Low FPS means the computer is struggling to draw fast enough. High ping/latency means the connection to a far-away server is slow. A faster computer cannot fix slow internet, and vice versa."
    },
    {
     "icon": "📡",
     "title": "Ping and latency",
     "text": "Ping (latency) is how long a message takes to reach a server and come back, measured in milliseconds (ms). Low ping feels instant; high ping makes online things feel delayed."
    },
    {
     "icon": "🖥️",
     "title": "Screen refresh (Hz)",
     "text": "A screen refreshes a set number of times each second, measured in Hz. A 60 Hz screen can show up to 60 frames a second. More frames than the screen can show won't look smoother on it."
    },
    {
     "icon": "⚖️",
     "title": "Find the bottleneck",
     "text": "When something is slow, ask: is the computer busy (high CPU/GPU use = upgrade or lower settings) or is the internet slow (high ping = a network problem)? Naming the real cause saves time."
    }
   ],
   "listen": [
    "Video and games are many pictures shown quickly, like a flip-book.",
    "FPS means frames per second — more frames look smoother.",
    "There are two kinds of slow: low FPS, and high ping.",
    "Low FPS means the computer is struggling to draw fast enough.",
    "High ping means the connection to a far server is slow.",
    "A fast computer can't fix slow internet, and the other way round.",
    "When something lags, ask which one it is. That's how experts fix it."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Lag detective",
    "steps": [
     "Open Command Prompt/Terminal and type: ping google.com  — note the time in ms.",
     "Try an online video; does it buffer (internet) or stutter while the device is busy (computer)?",
     "Decide: was a recent slow moment an FPS problem or a ping problem?"
    ],
    "question": "Your ping time to google.com and one slow moment you diagnosed."
   },
   "quiz": [
    {
     "q": "FPS stands for...",
     "options": [
      "Frames Per Second",
      "Fast Power Speed",
      "File Processing System",
      "Full Page Site"
     ],
     "a": 0,
     "why": "Frames per second."
    },
    {
     "q": "Low FPS means...",
     "options": [
      "The computer is struggling to draw fast enough",
      "The internet is slow",
      "The screen is big",
      "The password is wrong"
     ],
     "a": 0,
     "why": "A device/graphics problem."
    },
    {
     "q": "High ping means...",
     "options": [
      "The connection to the server is slow",
      "The computer is fast",
      "The screen is bright",
      "RAM is full"
     ],
     "a": 0,
     "why": "A network/latency problem."
    },
    {
     "q": "Ping is measured in...",
     "options": [
      "Milliseconds (ms)",
      "Gigabytes",
      "Watts",
      "Pixels"
     ],
     "a": 0,
     "why": "Time for a round trip."
    },
    {
     "q": "Can a faster computer fix slow internet?",
     "options": [
      "No",
      "Yes, always",
      "Only at night",
      "Only on Wi-Fi"
     ],
     "a": 0,
     "why": "Different problems, different fixes."
    },
    {
     "q": "A 60 Hz screen can show up to...",
     "options": [
      "60 frames a second",
      "600 frames",
      "6 frames",
      "any number"
     ],
     "a": 0,
     "why": "Hz = refreshes per second."
    },
    {
     "q": "When something lags, a good first question is...",
     "options": [
      "Is it the computer or the internet?",
      "What colour is it?",
      "Is the mouse new?",
      "Is it loud?"
     ],
     "a": 0,
     "why": "Name the real cause first."
    },
    {
     "q": "If your monitor is 144 Hz, what is the maximum number of frames per second it can physically display?",
     "options": [
      "144 FPS",
      "60 FPS",
      "240 FPS",
      "1000 FPS"
     ],
     "a": 0,
     "why": "144 Hz refreshes 144 times each second."
    },
    {
     "q": "Jitter in network connections refers to...",
     "options": [
      "Variation in ping / latency over time",
      "A broken cable",
      "A dirty fan",
      "High monitor brightness"
     ],
     "a": 0,
     "why": "Inconsistent latency causes stutter in calls and games."
    },
    {
     "q": "If your game has low FPS even with fast 100 Mbps fiber internet, the root issue is...",
     "options": [
      "Your computer's GPU or CPU hardware",
      "The fiber cable",
      "The router password",
      "The weather"
     ],
     "a": 0,
     "why": "FPS depends on local hardware, not your internet bandwidth."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "junior",
   "id": "j-safe",
   "code": "C6",
   "name": "Stay Safe & Smart Online",
   "part": "Security",
   "read": [
    {
     "icon": "🔒",
     "title": "Strong, unique passwords",
     "text": "Use a long password and a different one for each important account. A passphrase like 'twoGoats!eatGrass' is strong and easier to remember than 'p@ss'. Never reuse your email password elsewhere."
    },
    {
     "icon": "🔑",
     "title": "Two-step verification",
     "text": "Turn on 2FA (two-step verification) where you can: a password PLUS a code (SMS or an app). Even if someone learns your password, they still can't get in. Like two locks on one door."
    },
    {
     "icon": "🎣",
     "title": "Phishing and scams",
     "text": "Phishing is a fake message pretending to be a bank, M-Pesa or a friend, trying to steal your login or money. Clues: urgency ('act NOW'), odd links, spelling mistakes, requests for a PIN or password. Confirm before you click."
    },
    {
     "icon": "👤",
     "title": "Your digital footprint",
     "text": "What you post can last forever and be copied, even from a 'private' chat. Before posting, ask: would I be fine with my parent, teacher and future employer seeing this?"
    },
    {
     "icon": "⚖️",
     "title": "Balance and wellbeing",
     "text": "Apps are designed to keep you scrolling. Decide your own limits, take breaks, protect your sleep, and keep time for people and activities offline. Being in control is a skill worth building."
    }
   ],
   "listen": [
    "Use a long, unique password for each important account.",
    "A passphrase like two-goats-eat-grass is strong and memorable.",
    "Turn on two-step verification — a password plus a code. Two locks.",
    "Phishing is a fake message trying to steal your login or money.",
    "Clues: urgency, odd links, and asking for your PIN or password.",
    "What you post can last forever, so think before you post.",
    "Apps want endless scrolling. Set your own limits and protect your sleep."
   ],
   "video": {
    "id": "AuYNXgO_f3Y",
    "title": "The Internet: Cybersecurity & Crime",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Lock down an account",
    "steps": [
     "Pick one important account and set a strong, unique passphrase.",
     "Turn on two-step verification (2FA) if the service offers it.",
     "Find one example of a phishing message and explain two clues that give it away."
    ],
    "question": "Which account you secured, and two phishing clues you spotted.",
    "tasks": [
     {
      "type": "flags",
      "label": "This email is a scam. Tap every red flag you can find. There are 4.",
      "header": "Email · Inbox",
      "segments": [
       {
        "t": "From: PesaFast Support <pesafast.support2026@gmail.com>",
        "flag": "A real company emails from its own domain, not a free Gmail address."
       },
       {
        "t": "Subject: URGENT!! Your wallet will be BLOCKED in 2 hours",
        "flag": "Scammers create panic so you act before you think."
       },
       {
        "t": "Dear customer,",
        "flag": null
       },
       {
        "t": "We noticed unusual activity on your PesaFast wallet.",
        "flag": null
       },
       {
        "t": "To keep your KSh 12,450 safe, reply with your PIN and ID number, or confirm them here:",
        "flag": "No real service ever asks for your PIN. Never share it with anyone."
       },
       {
        "t": "http://pesafast-verify.co.ke.secure-login.xyz/confirm",
        "flag": "Read the domain from the right: it really ends in secure-login.xyz, not a PesaFast site. And it is http, not https."
       },
       {
        "t": "Thank you, PesaFast Team",
        "flag": null
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which passphrase is the strongest?",
        "options": [
         "Password123",
         "Zuri2010",
         "maize-Lamp-river-47!",
         "qwerty"
        ],
        "answer": 2,
        "why": "Long, random words with numbers and symbols are hard to guess but easy to remember."
       },
       {
        "q": "A message asks for the 6-digit code that 2FA just sent you. What do you do?",
        "options": [
         "Send it quickly",
         "Never share it. Only type it into the real site yourself",
         "Share it with friends",
         "Post it online"
        ],
        "answer": 1,
        "why": "That code is the second lock on your account. Anyone asking for it is trying to break in."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "A strong password is...",
     "options": [
      "Long and unique per account",
      "The same everywhere",
      "Your name",
      "1234"
     ],
     "a": 0,
     "why": "Long + unique is safest."
    },
    {
     "q": "Two-step verification (2FA) adds...",
     "options": [
      "A code on top of your password",
      "A second password you share",
      "A new screen",
      "More RAM"
     ],
     "a": 0,
     "why": "Two locks on one door."
    },
    {
     "q": "Phishing is...",
     "options": [
      "A fake message to steal your login/money",
      "A fast CPU",
      "A type of cable",
      "A backup"
     ],
     "a": 0,
     "why": "Confirm before you click."
    },
    {
     "q": "A common phishing clue is...",
     "options": [
      "Urgency and a request for your PIN/password",
      "A calm greeting",
      "Correct spelling",
      "No links"
     ],
     "a": 0,
     "why": "Legit firms don't ask for your PIN."
    },
    {
     "q": "Your digital footprint can...",
     "options": [
      "Last forever and be copied",
      "Always be fully deleted",
      "Never be seen",
      "Delete itself daily"
     ],
     "a": 0,
     "why": "Think before you post."
    },
    {
     "q": "Real banks and M-Pesa will NEVER ask for your...",
     "options": [
      "PIN or full password",
      "Name",
      "County",
      "Favourite colour"
     ],
     "a": 0,
     "why": "Never share your PIN/password."
    },
    {
     "q": "Apps are designed to...",
     "options": [
      "Keep you scrolling longer",
      "Turn off by themselves",
      "Improve your eyesight",
      "Do your homework"
     ],
     "a": 0,
     "why": "Set your own limits."
    },
    {
     "q": "Why should you avoid using the same password on different websites?",
     "options": [
      "If one site is breached, attackers can access your other accounts",
      "It makes your computer run hot",
      "It slows down internet speed",
      "Websites forbid the letter E"
     ],
     "a": 0,
     "why": "Credential stuffing exploits reused passwords."
    },
    {
     "q": "What is an authenticator app (TOTP) compared to SMS for 2FA?",
     "options": [
      "More secure because SMS codes can be intercepted via SIM swap",
      "Less secure than email",
      "Only works on desktop computers",
      "Requires paid airtime"
     ],
     "a": 0,
     "why": "App-based codes resist SIM swapping attacks."
    },
    {
     "q": "A stranger sends a link promising free money or leaked papers. The safest action is...",
     "options": [
      "Do not click the link, block sender, and verify independently",
      "Click to see if it's real",
      "Forward it to 10 friends",
      "Type your phone number"
     ],
     "a": 0,
     "why": "Malicious links often download malware or steal credentials."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 7–9 · Digital safety & security",
   "explainer": ""
  },
  {
   "track": "junior",
   "id": "j-power",
   "code": "C7",
   "name": "Power & Cooling",
   "part": "Energy and Heat",
   "read": [
    {
     "icon": "⚡",
     "title": "The power supply",
     "text": "The power supply (PSU) takes mains electricity and converts it to the steady low voltages each part needs. A good, reliable PSU protects the whole computer."
    },
    {
     "icon": "🔌",
     "title": "Watts and demand",
     "text": "Power is measured in watts. A powerful GPU can draw a lot; the PSU must supply enough for all parts, with some to spare. Phones and laptops use far less than big desktops."
    },
    {
     "icon": "🔥",
     "title": "Work makes heat",
     "text": "When the CPU and GPU work hard they get hot. If they get too hot they slow themselves down (thermal throttling) to stay safe — so good cooling keeps performance up."
    },
    {
     "icon": "🧊",
     "title": "Thermal paste & coolers",
     "text": "A thin layer of thermal paste between a chip and its cooler helps heat flow into the metal fins, which fans or liquid then carry away."
    },
    {
     "icon": "🌬️",
     "title": "Airflow and dust",
     "text": "Cool air should enter the front and hot air leave the back and top (hot air rises). Dust blocks airflow, so keeping vents clean keeps a computer cool — important in dusty conditions."
    }
   ],
   "listen": [
    "The power supply converts mains electricity to what the parts need.",
    "Power is measured in watts; the PSU must supply enough for all parts.",
    "Working hard makes the CPU and GPU hot.",
    "Too hot and they slow down to stay safe — that's thermal throttling.",
    "Thermal paste helps heat flow from the chip into the cooler.",
    "Fans or liquid then carry the heat away.",
    "Cool air in the front, hot air out the back. Dust blocks airflow, so clean the vents."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Heat check",
    "steps": [
     "Use a monitor app to see the CPU temperature while idle.",
     "Do something heavy (a big download, a game, many tabs) and watch the temperature rise.",
     "Look at the computer's vents — are they dusty? Should they be cleaned?"
    ],
    "question": "Idle vs busy temperature, and whether the vents need cleaning."
   },
   "quiz": [
    {
     "q": "The power supply (PSU) does what?",
     "options": [
      "Converts mains power to what parts need",
      "Draws the screen",
      "Stores files",
      "Connects Wi-Fi"
     ],
     "a": 0,
     "why": "It feeds steady power to the parts."
    },
    {
     "q": "Power is measured in...",
     "options": [
      "Watts",
      "GHz",
      "GB",
      "ms"
     ],
     "a": 0,
     "why": "Watts."
    },
    {
     "q": "When a chip gets too hot it...",
     "options": [
      "Slows down to stay safe",
      "Gets faster",
      "Changes colour",
      "Nothing"
     ],
     "a": 0,
     "why": "That's thermal throttling."
    },
    {
     "q": "Thermal paste helps by...",
     "options": [
      "Moving heat from the chip to the cooler",
      "Gluing the PSU",
      "Adding RAM",
      "Cleaning the screen"
     ],
     "a": 0,
     "why": "Better heat flow."
    },
    {
     "q": "Good airflow is...",
     "options": [
      "Cool air in front, hot air out back/top",
      "All fans off",
      "Hot air in the front",
      "No vents"
     ],
     "a": 0,
     "why": "Hot air rises and exits."
    },
    {
     "q": "The enemy of cooling is...",
     "options": [
      "Dust",
      "Music",
      "Light",
      "Stickers"
     ],
     "a": 0,
     "why": "Dust blocks airflow."
    },
    {
     "q": "A reliable PSU matters because it...",
     "options": [
      "Feeds and protects every part",
      "Draws graphics",
      "Stores games",
      "Speeds the internet"
     ],
     "a": 0,
     "why": "It powers the whole computer."
    },
    {
     "q": "What happens when dust clogs a laptop's heatsink fins and fan?",
     "options": [
      "Heat is trapped, causing thermal throttling and loud fan noise",
      "The laptop becomes lighter",
      "Battery life increases",
      "The screen becomes dimmer"
     ],
     "a": 0,
     "why": "Blocked airflow prevents cooling."
    },
    {
     "q": "Why should you never cheap out on a generic, unbranded Power Supply (PSU)?",
     "options": [
      "A failing cheap PSU can send voltage spikes and destroy other components",
      "It weighs too much",
      "It has too many cables",
      "It changes the CPU clock"
     ],
     "a": 0,
     "why": "A quality PSU provides clean, regulated power and protections."
    },
    {
     "q": "Thermal throttling is a feature that...",
     "options": [
      "Protects the chip from permanent heat damage by lowering speed",
      "Speeds up the computer when hot",
      "Turns off the fans",
      "Deletes temporary files"
     ],
     "a": 0,
     "why": "Lowers clock frequency to prevent hardware damage."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "junior",
   "id": "j-bits",
   "code": "C8",
   "name": "Bits & Bytes",
   "part": "How Big Is Data",
   "read": [
    {
     "icon": "💡",
     "title": "The bit",
     "text": "Deep down a computer uses switches that are either OFF or ON, written 0 or 1. One such switch is a bit — the smallest piece of information."
    },
    {
     "icon": "📦",
     "title": "8 bits = a byte",
     "text": "Eight bits grouped together make a byte. One byte can store a single letter, like the 'A' in your name. Your full name is just a few bytes."
    },
    {
     "icon": "🪜",
     "title": "The size ladder",
     "text": "About 1000 bytes = 1 kilobyte (KB). About 1000 KB = 1 megabyte (MB). About 1000 MB = 1 gigabyte (GB). About 1000 GB = 1 terabyte (TB). Each step is roughly a thousand times bigger."
    },
    {
     "icon": "📱",
     "title": "Everyday sizes",
     "text": "A text message is a few bytes. A photo is a few MB. A music track is a few MB. A long HD video or a big app is hundreds of MB to several GB. A phone might store 128 GB."
    },
    {
     "icon": "📶",
     "title": "Speed vs size",
     "text": "Internet speed is measured in megabits per second (Mbps, small b). File size is in megabytes (MB, big B). Since 8 bits = 1 byte, a 16 Mbps link downloads about 2 MB each second — handy to know when buying a data bundle."
    }
   ],
   "listen": [
    "Deep down a computer uses switches: off or on, 0 or 1. That's a bit.",
    "Eight bits make a byte, which can store one letter.",
    "About a thousand bytes is a kilobyte; a thousand KB is a megabyte.",
    "A thousand MB is a gigabyte; a thousand GB is a terabyte.",
    "A photo is a few MB; a long video is hundreds of MB to several GB.",
    "Internet speed is in megabits (small b); files are in megabytes (big B).",
    "Eight bits per byte, so a 16 Mbps link does about 2 MB a second. Good for bundles!"
   ],
   "video": {
    "id": "USCBCmwMCDA",
    "title": "How Computers Work: Binary & Data",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Size and speed",
    "steps": [
     "Check the size of a photo and a video on your device (in MB or GB).",
     "Find your phone's total storage and how much is free.",
     "With a grown-up, note your data bundle speed (Mbps) and estimate the MB per second."
    ],
    "question": "A photo's size, your free storage, and your estimated MB per second."
   },
   "quiz": [
    {
     "q": "The smallest piece of information is a...",
     "options": [
      "Bit",
      "Byte",
      "Gigabyte",
      "Pixel"
     ],
     "a": 0,
     "why": "A bit is 0 or 1."
    },
    {
     "q": "How many bits make a byte?",
     "options": [
      "8",
      "2",
      "100",
      "1000"
     ],
     "a": 0,
     "why": "8 bits = 1 byte."
    },
    {
     "q": "Order from smallest: KB, MB, GB means...",
     "options": [
      "KB < MB < GB",
      "GB < MB < KB",
      "MB < KB < GB",
      "all equal"
     ],
     "a": 0,
     "why": "Each step ~1000x bigger."
    },
    {
     "q": "Which is the biggest?",
     "options": [
      "1 TB",
      "1 GB",
      "1 MB",
      "1 KB"
     ],
     "a": 0,
     "why": "Terabyte is largest here."
    },
    {
     "q": "A photo is usually about...",
     "options": [
      "A few MB",
      "A few bits",
      "A few TB",
      "Nothing"
     ],
     "a": 0,
     "why": "Megabytes."
    },
    {
     "q": "Internet speed is measured in...",
     "options": [
      "Megabits per second (Mbps)",
      "Megabytes",
      "Watts",
      "Hertz"
     ],
     "a": 0,
     "why": "Mbps, with a small b."
    },
    {
     "q": "Because 8 bits = 1 byte, a 16 Mbps link downloads about...",
     "options": [
      "2 MB per second",
      "16 MB per second",
      "128 MB per second",
      "1 bit per second"
     ],
     "a": 0,
     "why": "16 ÷ 8 = 2 MB/s."
    },
    {
     "q": "How many different values can a single byte (8 bits) represent?",
     "options": [
      "256 values (from 0 to 255)",
      "8 values",
      "100 values",
      "1000 values"
     ],
     "a": 0,
     "why": "2 raised to the 8th power equals 256."
    },
    {
     "q": "If your internet connection downloads at 80 Mbps, the file download speed is roughly...",
     "options": [
      "10 MB/s",
      "80 MB/s",
      "800 MB/s",
      "1 MB/s"
     ],
     "a": 0,
     "why": "80 divided by 8 bits per byte = 10 MB/s."
    },
    {
     "q": "In binary, what number does the bit pattern '00000101' represent?",
     "options": [
      "5",
      "3",
      "7",
      "10"
     ],
     "a": 0,
     "why": "4 + 1 = 5 in base 2."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": "bits"
  },
  {
   "track": "junior",
   "id": "j-network",
   "code": "C9",
   "name": "The Network",
   "part": "From Device to Server",
   "read": [
    {
     "icon": "🏠",
     "title": "Your local network (LAN)",
     "text": "At home or school your devices connect to a router — by Wi-Fi or cable — forming a Local Area Network (LAN). The router is the gateway between your LAN and the wider internet."
    },
    {
     "icon": "📮",
     "title": "Packets",
     "text": "Data is split into small packets, each labelled with where it's going and where it came from, like addressed envelopes. They travel separately and are reassembled at the destination."
    },
    {
     "icon": "🌍",
     "title": "ISP and the wider internet",
     "text": "Your router passes packets to your ISP (e.g. Safaricom, Zuku, JTL). The ISP connects to other networks — through cables, fibre, and undersea cables — until your packets reach the right server, maybe on another continent."
    },
    {
     "icon": "🔢",
     "title": "IP addresses",
     "text": "Every device on a network has an IP address, a number that identifies it, like a postal address. Packets use IP addresses to find their way. Public IPs are reachable on the internet; private IPs (like 192.168.x.x) are used inside your LAN."
    },
    {
     "icon": "⏱️",
     "title": "Why distance matters",
     "text": "A server far away means packets travel further, so ping is higher. Content delivery networks (CDNs) keep copies of popular content closer to users to make it faster — one reason some sites load quicker than others."
    }
   ],
   "listen": [
    "At home your devices connect to a router, forming a local network, a LAN.",
    "The router is the gateway between your LAN and the wider internet.",
    "Data travels as packets, like addressed envelopes.",
    "Your router passes packets to your ISP, like Safaricom or Zuku.",
    "The ISP connects to other networks, even by undersea cables.",
    "Every device has an IP address, like a postal address, so packets find their way.",
    "A far server means higher ping; CDNs keep copies closer to speed things up."
   ],
   "video": {
    "id": "AYdF7b3nMto",
    "title": "The Internet: Packets, Routing & Reliability",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Trace your network",
    "steps": [
     "Find your device's IP address (phone: Settings > Wi-Fi > the network; PC: 'ipconfig' or 'ifconfig'). Is it a private 192.168.x.x?",
     "With a grown-up, find who your ISP is.",
     "Run 'tracert google.com' (Windows) or 'traceroute google.com' and count the hops."
    ],
    "question": "Your private IP, your ISP, and roughly how many hops to google.com.",
    "tasks": [
     {
      "type": "order",
      "label": "Build the path: tap each stop in order, from your device to a website's server.",
      "items": [
       {
        "t": "Your phone or laptop",
        "note": "Your device splits the request into small packets."
       },
       {
        "t": "Home Wi-Fi router",
        "note": "The router runs your local network (LAN) and gives your device a private IP like 192.168.x.x. On mobile data, a cell tower plays this part."
       },
       {
        "t": "Your ISP (e.g. Safaricom, Airtel, Zuku)",
        "note": "Your Internet Service Provider connects your home or phone to the wider internet."
       },
       {
        "t": "Internet backbone (undersea cables at Mombasa)",
        "note": "Big fibre links carry traffic between countries. Kenya's undersea cables land at Mombasa."
       },
       {
        "t": "The website's server",
        "note": "The server gets your packets and sends the page back along a path like this one."
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which of these is a private (home network) IP address?",
        "options": [
         "8.8.8.8",
         "192.168.1.24",
         "41.90.64.10",
         "102.68.1.5"
        ],
        "answer": 1,
        "why": "192.168.x.x is kept for private networks. Your router shares one public IP for the whole home."
       },
       {
        "q": "Your traceroute shows 12 hops. What is a hop?",
        "options": [
         "A router your packets passed through",
         "A lost packet",
         "A website",
         "A Wi-Fi password"
        ],
        "answer": 0,
        "why": "Each hop is one router passing your packets along. More hops usually means more delay."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "Devices on your home network connect through a...",
     "options": [
      "Router",
      "Monitor",
      "Printer",
      "Speaker"
     ],
     "a": 0,
     "why": "The router runs your LAN."
    },
    {
     "q": "A home/school network is called a...",
     "options": [
      "LAN (Local Area Network)",
      "CPU",
      "GPU",
      "URL"
     ],
     "a": 0,
     "why": "Local Area Network."
    },
    {
     "q": "Data travels across networks as...",
     "options": [
      "Packets",
      "Pixels",
      "Watts",
      "Cores"
     ],
     "a": 0,
     "why": "Small labelled packets."
    },
    {
     "q": "The company that connects you to the internet is your...",
     "options": [
      "ISP",
      "CPU",
      "PSU",
      "GPU"
     ],
     "a": 0,
     "why": "Internet Service Provider."
    },
    {
     "q": "An IP address is like a...",
     "options": [
      "Postal address for a device",
      "Password",
      "Photo",
      "Fan"
     ],
     "a": 0,
     "why": "It identifies a device on a network."
    },
    {
     "q": "192.168.1.10 is an example of a...",
     "options": [
      "Private IP used inside a LAN",
      "Public website",
      "Password",
      "File type"
     ],
     "a": 0,
     "why": "Private range used at home."
    },
    {
     "q": "A server far away usually means...",
     "options": [
      "Higher ping",
      "Lower ping",
      "More storage",
      "Louder sound"
     ],
     "a": 0,
     "why": "Packets travel further."
    },
    {
     "q": "What is the primary role of a router in a home or school network?",
     "options": [
      "To direct traffic and forward packets between different networks",
      "To draw 3D graphics",
      "To generate electricity",
      "To store photos permanently"
     ],
     "a": 0,
     "why": "Routers route packets between your LAN and the WAN / internet."
    },
    {
     "q": "Which protocol ensures reliable packet delivery by acknowledging received packets?",
     "options": [
      "TCP (Transmission Control Protocol)",
      "UDP",
      "HTML",
      "GPU"
     ],
     "a": 0,
     "why": "TCP checks for lost packets and retransmits them."
    },
    {
     "q": "Subsea fiber-optic cables landing in Mombasa (like SEACOM and TEAMS) carry...",
     "options": [
      "Over 95% of international internet data entering Kenya",
      "Only voice phone calls",
      "Electricity for coastal towns",
      "Drinking water"
     ],
     "a": 0,
     "why": "Undersea fiber cables form the backbone of Kenya's global connectivity."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 7–9 · Networks: device to server",
   "explainer": "network-path"
  },
  {
   "track": "junior",
   "id": "j-web",
   "code": "C10",
   "name": "How the Web Works",
   "part": "Domains, DNS & HTTPS",
   "read": [
    {
     "icon": "🔗",
     "title": "Websites vs the internet",
     "text": "The internet is the network of connected computers. The World Wide Web (WWW) is the pages and sites you view with a browser, which ride on top of the internet. The web is one of many things the internet carries."
    },
    {
     "icon": "🏷️",
     "title": "Domain names",
     "text": "Computers find each other by IP address (numbers), but numbers are hard to remember. A domain name like safaricom.co.ke is a friendly label for a website. Names end in parts like .com, .org, or Kenya's .ke / .co.ke."
    },
    {
     "icon": "📖",
     "title": "DNS: the internet's address book",
     "text": "DNS (Domain Name System) turns a domain name into its IP address — like a phone contact list turning a name into a number. When you type a site, your device asks a DNS resolver 'what's the IP for this name?' and gets an answer, usually in milliseconds."
    },
    {
     "icon": "📨",
     "title": "Loading a page: request & response",
     "text": "Your browser sends an HTTP request to the site's server ('please send me this page'). The server replies with an HTTP response containing the page — text, images and code — which the browser puts together and shows you."
    },
    {
     "icon": "🔒",
     "title": "HTTP vs HTTPS",
     "text": "HTTPS is HTTP with encryption (TLS): the data is scrambled so others on the network can't read or change it. The padlock means the connection is private and the site proved its identity with a certificate. Never enter a password or pay on plain HTTP."
    },
    {
     "icon": "🛡️",
     "title": "Trust and certificates",
     "text": "A site's certificate is issued by a trusted authority and ties the domain to its owner. It's why the padlock matters — it helps confirm you're really talking to safaricom.co.ke and not an impostor. Phishing sites often use look-alike names, so check the address carefully."
    }
   ],
   "listen": [
    "The internet is the network; the web is the pages you view in a browser.",
    "Computers find each other by IP address, but numbers are hard to remember.",
    "A domain name like safaricom.co.ke is a friendly label for a site.",
    "DNS turns that name into its IP address, like a contact list turning a name into a number.",
    "Your browser sends a request; the server sends back the page. Request and response.",
    "HTTPS adds encryption so others can't read or change your data.",
    "The padlock and a certificate help prove you're talking to the real site. Check the address!"
   ],
   "video": {
    "id": "5o8CwafCxnU",
    "title": "The Internet: IP Addresses & DNS",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Look under the hood of the web",
    "steps": [
     "Open a website and click the padlock — view the certificate and see who it was issued to.",
     "With a grown-up, open Command Prompt/Terminal and run: nslookup safaricom.co.ke  — note the IP address it returns.",
     "Compare two site addresses and explain which looks genuine and which could be a look-alike phishing name."
    ],
    "question": "An IP address DNS returned, and one tip for spotting a fake look-alike address.",
    "tasks": [
     {
      "type": "order",
      "label": "What happens when you open a website? Tap the steps in order.",
      "items": [
       {
        "t": "You type www.ecitizen.go.ke and press Enter",
        "note": "Names are easy for people to remember. Computers need numbers."
       },
       {
        "t": "Your device asks a DNS server: what is the IP for this name?",
        "note": "DNS is the internet's address book."
       },
       {
        "t": "DNS replies with the site's IP address",
        "note": "Now your device knows which server to talk to."
       },
       {
        "t": "Your browser connects to that IP and sets up HTTPS",
        "note": "HTTPS encrypts the connection. That's the padlock."
       },
       {
        "t": "The server sends the page back and your browser shows it",
        "note": "Request, then response. That is how every page loads."
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which address is most likely the REAL KRA iTax site?",
        "options": [
         "itax-kra.go.ke.login-help.com",
         "itax.kra.go.ke",
         "kra-itax.co",
         "itax.kra.go.ke.verify.xyz"
        ],
        "answer": 1,
        "why": "Read the domain from the right: .go.ke is for the Kenyan government. The others really end in login-help.com, .co or verify.xyz."
       },
       {
        "q": "Which address is a FAKE look-alike?",
        "options": [
         "www.google.com",
         "mail.google.com",
         "www.g00gle.com",
         "www.google.co.ke"
        ],
        "answer": 2,
        "why": "Zeros swapped in for the letter o is a classic trick. google.co.ke is Google's real Kenya site."
       },
       {
        "q": "What does the padlock (HTTPS) prove?",
        "options": [
         "The connection to the named site is encrypted",
         "The site is honest and safe",
         "The site is run by the government",
         "The site has no viruses"
        ],
        "answer": 0,
        "why": "HTTPS protects your data on the way. Scam sites can have a padlock too, so always check the domain."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "The World Wide Web is...",
     "options": [
      "The pages/sites you view in a browser",
      "The same as the whole internet",
      "A type of cable",
      "A password"
     ],
     "a": 0,
     "why": "The web rides on top of the internet."
    },
    {
     "q": "A domain name (like safaricom.co.ke) is...",
     "options": [
      "A friendly label for a website",
      "A password",
      "An IP number",
      "A file type"
     ],
     "a": 0,
     "why": "Easier to remember than numbers."
    },
    {
     "q": "DNS turns a domain name into...",
     "options": [
      "An IP address",
      "A password",
      "A photo",
      "A file"
     ],
     "a": 0,
     "why": "Like a contact list: name → number."
    },
    {
     "q": "When you open a page, your browser sends the server an...",
     "options": [
      "HTTP request",
      "IP address only",
      "SMS",
      "email"
     ],
     "a": 0,
     "why": "The server replies with a response."
    },
    {
     "q": "HTTPS is different from HTTP because it...",
     "options": [
      "Encrypts the data",
      "Is slower always",
      "Needs no internet",
      "Shows more ads"
     ],
     "a": 0,
     "why": "TLS encryption keeps data private."
    },
    {
     "q": "The padlock in the address bar means...",
     "options": [
      "The connection is encrypted and the site proved its identity",
      "The site is free",
      "You won a prize",
      "The page is empty"
     ],
     "a": 0,
     "why": "Private + identity checked."
    },
    {
     "q": "A phishing site often uses...",
     "options": [
      "A look-alike domain name",
      "The exact official name",
      "No name at all",
      "A padlock only"
     ],
     "a": 0,
     "why": "Check the address carefully."
    },
    {
     "q": "You should NEVER enter a password on...",
     "options": [
      "Plain HTTP (no padlock)",
      "HTTPS with a padlock",
      "A trusted site",
      "Your own account"
     ],
     "a": 0,
     "why": "No encryption = unsafe."
    },
    {
     "q": "In the URL 'https://tech-tayari.pages.dev', which part is the Top-Level Domain (TLD)?",
     "options": [
      ".dev",
      "https",
      "tech-tayari",
      "pages"
     ],
     "a": 0,
     "why": ".dev is the TLD at the end of the domain hierarchy."
    },
    {
     "q": "When a DNS cache stores an address lookup locally, it...",
     "options": [
      "Speeds up future requests by avoiding a repeat query across the internet",
      "Changes the website password",
      "Slows down your browser",
      "Deletes your history"
     ],
     "a": 0,
     "why": "DNS caching saves time and network bandwidth."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 7–9 · How the web works: domains, DNS & HTTPS",
   "explainer": "dns-lookup"
  },
  {
   "track": "ai",
   "id": "ai-what",
   "code": "A1",
   "name": "What Is AI?",
   "part": "Machines that learn from examples",
   "read": [
    {
     "icon": "🤖",
     "title": "Artificial intelligence",
     "text": "Artificial intelligence (AI) is a computer system that does tasks we normally think need human intelligence: recognising speech or faces, translating, predicting, or writing text. AI isn't magic, and it isn't alive. It is software that finds patterns in huge amounts of data."
    },
    {
     "icon": "📜",
     "title": "Rules or learning?",
     "text": "Ordinary programs follow rules a programmer wrote: \"IF the mark is 50 or more, print Pass.\" Many AI systems instead learn their own rules from examples. Show a system thousands of emails marked \"spam\" or \"not spam\", and it learns what spam usually looks like, without anyone writing every rule."
    },
    {
     "icon": "📱",
     "title": "AI around you",
     "text": "You probably use AI every day: voice typing on your phone (including in Kiswahili), the spam folder in email, maps that predict traffic on Thika Road, apps that suggest the next video, face unlock, and translation apps. Banks and mobile-money services also use AI to flag unusual transactions that might be fraud."
    },
    {
     "icon": "🎯",
     "title": "Narrow AI",
     "text": "Today's AI is narrow: each system is good at one kind of task. A chess AI can't drive a car, and a translation app can't diagnose a sick goat. Films often show AI that thinks like a person about everything, but that doesn't exist."
    },
    {
     "icon": "⚠️",
     "title": "What AI can't do",
     "text": "AI can be confidently wrong. It doesn't understand the world the way you do, it can repeat unfairness hidden in its data, and it has no common sense outside its training. That's why people must check its work, especially for anything important like health, money or exams."
    }
   ],
   "listen": [
    "Artificial intelligence is software that finds patterns in lots of data.",
    "Ordinary programs follow written rules; AI often learns rules from examples.",
    "Voice typing, spam filters, maps and video suggestions all use AI.",
    "Today's AI is narrow: each system does one kind of task.",
    "AI can be confidently wrong, so people must check its work.",
    "AI is a tool made by people, not a living thing."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "AI spotter",
    "steps": [
     "For one day, list every time you or your family use something that might be AI (phone, TV, apps, shops).",
     "Pick one and ask: what examples might it have learned from?"
    ],
    "question": "Three AI examples you spotted, and what one of them learned from.",
    "tasks": [
     {
      "type": "sort",
      "label": "Does each one use AI (learning from data) or a fixed rule?",
      "buckets": [
       "Uses AI",
       "Fixed rule"
      ],
      "items": [
       {
        "t": "An email app moving likely spam into a spam folder",
        "b": 0
       },
       {
        "t": "A calculator adding 2 + 2",
        "b": 1
       },
       {
        "t": "A phone typing what you say out loud",
        "b": 0
       },
       {
        "t": "A traffic light changing every 60 seconds",
        "b": 1
       },
       {
        "t": "A video app suggesting what to watch next",
        "b": 0
       },
       {
        "t": "A school bell set to ring at 8:00",
        "b": 1
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "What is the main difference between ordinary programs and most AI?",
        "options": [
         "AI is always faster",
         "Ordinary programs follow rules written by people; AI often learns patterns from examples",
         "AI doesn't need computers",
         "Ordinary programs can't do maths"
        ],
        "answer": 1,
        "why": "Learning from examples is what lets AI handle tasks that are hard to write rules for, like recognising speech."
       },
       {
        "q": "A chess-playing AI is asked to drive a car. What happens?",
        "options": [
         "It drives well",
         "It can't; today's AI is narrow and only does what it was built and trained for",
         "It learns instantly",
         "It asks a human for the keys"
        ],
        "answer": 1,
        "why": "Each AI system is specialised. There's no all-purpose thinking machine."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is artificial intelligence?",
     "options": [
      "Computer systems that do tasks we usually think need human intelligence",
      "A robot that is alive",
      "Any computer at all",
      "A type of cable"
     ],
     "a": 0,
     "why": "AI includes recognising speech, translating and predicting, all done by software learning from data."
    },
    {
     "q": "How do most modern AI systems get their abilities?",
     "options": [
      "Someone types every possible rule",
      "They learn patterns from many examples",
      "They are born with them",
      "From electricity alone"
     ],
     "a": 1,
     "why": "Machine learning finds patterns in example data instead of following hand-written rules."
    },
    {
     "q": "Which is an example of AI?",
     "options": [
      "A light switch",
      "Voice typing on a phone",
      "A ruler",
      "A printed timetable"
     ],
     "a": 1,
     "why": "Turning speech into text needs a system that learned from many recordings of speech."
    },
    {
     "q": "What does \"narrow AI\" mean?",
     "options": [
      "AI that is very small",
      "AI that is good at one kind of task only",
      "AI that works on thin phones",
      "AI that can't use the internet"
     ],
     "a": 1,
     "why": "All AI today is narrow; a translation AI can't also drive or play chess."
    },
    {
     "q": "Can AI be wrong?",
     "options": [
      "No, computers are never wrong",
      "Yes, it can be confidently wrong, so people should check it",
      "Only when the battery is low",
      "Only in Kiswahili"
     ],
     "a": 1,
     "why": "AI predicts from patterns; when the patterns don't fit a new situation, it can make mistakes."
    },
    {
     "q": "Why might a bank use AI?",
     "options": [
      "To print money",
      "To flag unusual transactions that might be fraud",
      "To open branches",
      "To replace all its staff"
     ],
     "a": 1,
     "why": "AI can learn what normal spending looks like and spot activity that doesn't fit."
    },
    {
     "q": "Which is a fixed rule, not AI?",
     "options": [
      "A school bell that rings at the same times every day",
      "A spam filter learning from reported emails",
      "Face unlock on a phone",
      "A translation app"
     ],
     "a": 0,
     "why": "The bell follows a set timetable; it doesn't learn from data."
    },
    {
     "q": "Is AI alive or does it have feelings?",
     "options": [
      "Yes, it has feelings",
      "No, it is software that processes data",
      "Only chatbots are alive",
      "Only when it talks"
     ],
     "a": 1,
     "why": "Even when AI writes like a person, it is a program predicting patterns, not a living being."
    },
    {
     "q": "Why should people check AI's work on important things like health or exams?",
     "options": [
      "AI is always wrong",
      "AI can make mistakes and has no common sense outside its data",
      "AI refuses to help",
      "AI is too slow"
     ],
     "a": 1,
     "why": "AI is a helpful tool, but people stay responsible for important decisions."
    },
    {
     "q": "A maps app predicts a traffic jam on Thika Road. What is it most likely using?",
     "options": [
      "Guesswork",
      "Patterns learned from lots of past and live traffic data",
      "A fixed timetable",
      "Radio announcements only"
     ],
     "a": 1,
     "why": "Learning from many phones' movement data lets it predict likely delays."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "ai",
   "id": "ai-data",
   "code": "A2",
   "name": "Data & Patterns",
   "part": "Training data, labels and features",
   "read": [
    {
     "icon": "📊",
     "title": "Data is AI's food",
     "text": "AI learns from data: photos, sounds, text, numbers. The more good, relevant examples it sees, the better it usually gets. A system that recognises maize leaf disease needs many photos of healthy and diseased leaves, taken in different light, on different phones."
    },
    {
     "icon": "🏷️",
     "title": "Labels",
     "text": "In supervised learning, every example comes with the right answer, called a label: this photo is \"healthy\", that one is \"maize streak virus\". The AI tries to find what separates the labels. Labelling is often done by people, and mistakes in labels become mistakes in the AI."
    },
    {
     "icon": "🔍",
     "title": "Features",
     "text": "Features are the details the AI looks at to make a decision. To tell mangoes from avocados, useful features might be colour, shape and skin texture. Choosing good features (or letting the AI discover them) is a big part of building a model."
    },
    {
     "icon": "🧪",
     "title": "Training data and test data",
     "text": "You don't test a learner with the exact questions they practised. In the same way, data is split: training data teaches the model, and separate test data, which the model has never seen, checks whether it really learned the pattern or just memorised the examples."
    },
    {
     "icon": "🗑️",
     "title": "Garbage in, garbage out",
     "text": "If the data is poor, so is the AI. Too few examples, wrong labels, or examples that only show one kind of situation (only sunny photos, only one region's accent) produce a model that fails in the real world. Good data is varied, correctly labelled and fairly collected."
    }
   ],
   "listen": [
    "AI learns from data: photos, sounds, text and numbers.",
    "A label is the right answer attached to each example.",
    "Features are the details the AI uses to decide.",
    "Training data teaches the model; test data checks it.",
    "Test data must be examples the model has never seen.",
    "Garbage in, garbage out: poor data makes poor AI."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Be the data collector",
    "steps": [
     "Imagine building an AI that tells ripe from unripe bananas. List the features you would use and how you would label 20 example photos.",
     "Explain why your photos should come from different shops, times of day and phones."
    ],
    "question": "Your features, and one reason your data needs variety.",
    "tasks": [
     {
      "type": "sort",
      "label": "Is each one a feature or a label?",
      "buckets": [
       "Feature",
       "Label"
      ],
      "items": [
       {
        "t": "The colour of a mango's skin",
        "b": 0
       },
       {
        "t": "\"This email is spam\"",
        "b": 1
       },
       {
        "t": "The length of a message",
        "b": 0
       },
       {
        "t": "\"This leaf has maize streak virus\"",
        "b": 1
       },
       {
        "t": "How round a fruit is",
        "b": 0
       },
       {
        "t": "\"This voice recording says habari\"",
        "b": 1
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Why is some data kept back as test data?",
        "options": [
         "To save storage",
         "To check the model on examples it has never seen",
         "Because it is less important",
         "To train twice as fast"
        ],
        "answer": 1,
        "why": "A model that only works on its training examples has memorised, not learned."
       },
       {
        "q": "A crop-disease AI was trained only on photos taken in bright sunshine. What is likely to happen on cloudy days?",
        "options": [
         "It works even better",
         "It may make more mistakes, because cloudy photos look different from its training data",
         "It stops needing data",
         "Nothing changes"
        ],
        "answer": 1,
        "why": "AI struggles with situations its training data didn't include."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What does AI learn from?",
     "options": [
      "Data, such as photos, text, sounds and numbers",
      "Only electricity",
      "Dreams",
      "Its own feelings"
     ],
     "a": 0,
     "why": "Patterns in data are where machine learning gets its abilities."
    },
    {
     "q": "What is a label in supervised learning?",
     "options": [
      "A sticker on the computer",
      "The correct answer attached to an example",
      "The name of the programmer",
      "The file size"
     ],
     "a": 1,
     "why": "Labels tell the model what each training example is, so it can learn to predict them."
    },
    {
     "q": "What are features?",
     "options": [
      "The details the AI uses to make a decision",
      "The prices of AI apps",
      "The buttons on a phone",
      "Mistakes in data"
     ],
     "a": 0,
     "why": "Colour, shape and size can be features for sorting fruit, for example."
    },
    {
     "q": "Why use separate test data?",
     "options": [
      "Training data is too small",
      "To check the model works on new examples, not just ones it memorised",
      "Test data is cheaper",
      "It makes the model bigger"
     ],
     "a": 1,
     "why": "Like a fair exam, test data must be new to the learner."
    },
    {
     "q": "What does \"garbage in, garbage out\" mean?",
     "options": [
      "AI eats rubbish",
      "Poor or wrong data produces a poor AI",
      "Old computers should be recycled",
      "AI deletes bad files"
     ],
     "a": 1,
     "why": "A model can only be as good as the examples it learned from."
    },
    {
     "q": "A label is wrong on many training photos. What happens to the AI?",
     "options": [
      "Nothing",
      "It learns those mistakes too",
      "It fixes the labels by itself",
      "It refuses to train"
     ],
     "a": 1,
     "why": "The model trusts its labels, so wrong labels teach wrong answers."
    },
    {
     "q": "Why should voice-typing data include many accents?",
     "options": [
      "To make files bigger",
      "So it works well for people from different regions, not just one",
      "Accents don't matter to AI",
      "To slow it down"
     ],
     "a": 1,
     "why": "If the data only has one accent, people with other accents get more mistakes."
    },
    {
     "q": "Which is the best training data for a banana-ripeness AI?",
     "options": [
      "10 photos from one shop at noon",
      "Many photos from different shops, times of day and phones, correctly labelled",
      "One very clear photo",
      "Photos of mangoes"
     ],
     "a": 1,
     "why": "Varied, correctly labelled examples help the model handle real-world situations."
    },
    {
     "q": "Who often labels training data?",
     "options": [
      "The AI itself, always",
      "People, who look at examples and record the right answer",
      "Nobody; labels appear automatically",
      "Only robots"
     ],
     "a": 1,
     "why": "Human labellers are a big part of building AI, which is why their accuracy matters."
    },
    {
     "q": "More data always fixes AI. True or false?",
     "options": [
      "True, any data helps",
      "False; the data must also be relevant, varied and correctly labelled",
      "True, if it is stored in the cloud",
      "False; AI doesn't use data"
     ],
     "a": 1,
     "why": "Lots of bad or one-sided data can make a model worse, not better."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "ai",
   "id": "ai-learn",
   "code": "A3",
   "name": "How Machines Learn",
   "part": "Models, decision trees and testing",
   "read": [
    {
     "icon": "🧠",
     "title": "What a model is",
     "text": "When AI learns, it builds a model: a set of rules or numbers that turns inputs (features) into a prediction. A model for crop prices might take the season and the rainfall, and predict the price of maize next month. The model is the part that is \"trained\"."
    },
    {
     "icon": "🌳",
     "title": "Decision trees",
     "text": "A decision tree is one simple kind of model. It asks yes/no questions, one after another, until it reaches an answer: \"Does it have feathers? Yes → bird. No → Does it breathe with gills? Yes → fish. No → mammal.\" Training means finding which questions to ask, and in what order."
    },
    {
     "icon": "🔁",
     "title": "Training is trial and improvement",
     "text": "Most models start bad and improve. They make predictions on the training data, measure how wrong they are, adjust a little, and repeat, often thousands or millions of times. Neural networks, the models behind modern speech and image AI, learn this way by adjusting millions of numbers."
    },
    {
     "icon": "📈",
     "title": "Accuracy and testing",
     "text": "Accuracy is the share of predictions that are correct. A model that is right 90 times out of 100 has 90% accuracy. It must be measured on test data the model has never seen. A model can score 100% on its training data and still fail on new examples."
    },
    {
     "icon": "🎯",
     "title": "Overfitting",
     "text": "Overfitting is when a model memorises its training examples instead of learning the general pattern, like a learner who memorises past-paper answers but can't solve a new question. In the explainer above, a tree can sort every training animal perfectly and still get a dolphin wrong."
    }
   ],
   "listen": [
    "A trained model turns inputs into a prediction.",
    "A decision tree asks yes or no questions until it reaches an answer.",
    "Training is trial and improvement, repeated many times.",
    "Neural networks learn by adjusting millions of numbers.",
    "Accuracy is the share of predictions that are correct.",
    "Always measure accuracy on test data the model hasn't seen.",
    "Overfitting is memorising the examples instead of the pattern."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Train and test your tree",
    "steps": [
     "In the explainer, build a tree that sorts all the training animals, then test it on the new ones. Note how many it gets right.",
     "Start again and build a different tree. Which questions worked best on the new animals, and why?"
    ],
    "question": "Your best tree's questions, and how many new animals it got right.",
    "tasks": [
     {
      "type": "order",
      "label": "Put the steps of building a model in order.",
      "items": [
       {
        "t": "Collect and label example data",
        "note": "For example, animals marked mammal, bird or fish."
       },
       {
        "t": "Split it into training data and test data",
        "note": "Keep some examples hidden from training."
       },
       {
        "t": "Train the model on the training data",
        "note": "It adjusts its rules to fit the examples."
       },
       {
        "t": "Measure accuracy on the test data",
        "note": "Check it on examples it has never seen."
       },
       {
        "t": "Improve and repeat, or put the model to use",
        "note": "Better data or features often matter more than anything else."
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "A model gets 45 out of 50 test examples right. What is its accuracy?",
        "options": [
         "45%",
         "50%",
         "90%",
         "95%"
        ],
        "answer": 2,
        "why": "45 ÷ 50 = 0.9, which is 90%."
       },
       {
        "q": "A model scores 100% on training data but 60% on test data. What is the most likely problem?",
        "options": [
         "The test data is too easy",
         "Overfitting: it memorised the training examples",
         "The model is perfect",
         "The computer is too slow"
        ],
        "answer": 1,
        "why": "A big gap between training and test results is the classic sign of overfitting."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is a model in machine learning?",
     "options": [
      "Rules or numbers that turn inputs into a prediction",
      "A person who poses for photos",
      "A type of computer case",
      "A spreadsheet only"
     ],
     "a": 0,
     "why": "Training adjusts the model so its predictions match the examples."
    },
    {
     "q": "How does a decision tree make a decision?",
     "options": [
      "It guesses randomly",
      "It asks a series of yes/no questions until it reaches an answer",
      "It asks the user to decide",
      "It looks up a dictionary"
     ],
     "a": 1,
     "why": "Each question splits the examples into smaller groups until each group has one answer."
    },
    {
     "q": "What does accuracy measure?",
     "options": [
      "How fast a model runs",
      "The share of predictions that are correct",
      "How big the model is",
      "How many features it uses"
     ],
     "a": 1,
     "why": "90% accuracy means 9 out of every 10 predictions are right."
    },
    {
     "q": "Why must accuracy be measured on test data?",
     "options": [
      "Test data is always larger",
      "To see if the model works on examples it has never seen",
      "Training data is secret",
      "It's faster"
     ],
     "a": 1,
     "why": "Scoring well only on familiar examples doesn't prove the model learned the pattern."
    },
    {
     "q": "What is overfitting?",
     "options": [
      "A model that is too small",
      "Memorising the training examples instead of learning the general pattern",
      "A computer that overheats",
      "Using too little data"
     ],
     "a": 1,
     "why": "An overfitted model looks perfect in training but fails on new data."
    },
    {
     "q": "How do most models improve during training?",
     "options": [
      "They are perfect from the start",
      "They predict, measure their errors, adjust slightly, and repeat many times",
      "A programmer edits every rule by hand",
      "They wait for updates"
     ],
     "a": 1,
     "why": "Many small corrections add up to a model that fits the data."
    },
    {
     "q": "Neural networks learn by...",
     "options": [
      "Growing real brain cells",
      "Adjusting millions of numbers to reduce their errors",
      "Reading the internet once",
      "Copying other networks"
     ],
     "a": 1,
     "why": "They're inspired by the brain, but they are maths running on computers."
    },
    {
     "q": "In the explainer, why did the dolphin trip up some trees?",
     "options": [
      "Dolphins are fish",
      "It lives in water and has almost no hair, unlike the mammals in the training data",
      "The tree was too short",
      "The computer was broken"
     ],
     "a": 1,
     "why": "The training data had no water-living mammals, so a tree relying on \"fur\" fails on dolphins."
    },
    {
     "q": "A model's accuracy on test data is low. What often helps most?",
     "options": [
      "Buying a bigger screen",
      "More varied, better-labelled data, or better features",
      "Training on the test data",
      "Deleting the test data"
     ],
     "a": 1,
     "why": "Better examples usually beat more training time. Training on the test data would just hide the problem."
    },
    {
     "q": "What is the first step in building a model?",
     "options": [
      "Collecting and labelling example data",
      "Measuring accuracy",
      "Selling the app",
      "Testing on new data"
     ],
     "a": 0,
     "why": "Without good data there is nothing for the model to learn from."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": "decision-tree"
  },
  {
   "track": "ai",
   "id": "ai-genai",
   "code": "A4",
   "name": "Chatbots & Generative AI",
   "part": "How AI writes text and makes images",
   "read": [
    {
     "icon": "✍️",
     "title": "Generative AI",
     "text": "Generative AI creates new content: text, images, music, or computer code. AI chatbots write answers, and image generators turn a short description into a picture. They work by learning patterns from enormous amounts of existing text and images."
    },
    {
     "icon": "🔮",
     "title": "Predicting the next word",
     "text": "A chatbot is built on a large language model. It was trained on billions of sentences to predict what word, or piece of a word, comes next. To answer you, it predicts one piece, adds it, and predicts again, over and over. The explainer above does the same thing with just a few sentences."
    },
    {
     "icon": "🤥",
     "title": "Confident but wrong",
     "text": "Because a chatbot predicts likely-sounding words rather than looking up facts, it can make things up, such as fake dates, quotes or sources, and say them confidently. This is often called \"hallucination\". Always check important facts against a reliable source, like your textbook, a teacher or an official website."
    },
    {
     "icon": "🌍",
     "title": "What it knows depends on its data",
     "text": "A model only knows patterns from its training data, which stops at a certain date. Languages with less text online, like Kiswahili, Sheng and other Kenyan languages, usually get weaker answers than English. Missing or one-sided data shows up in the answers."
    },
    {
     "icon": "💬",
     "title": "Good prompts, good use",
     "text": "A prompt is what you type to the chatbot. Clear prompts get better answers: say who you are, what you need, and how you want it (\"Explain photosynthesis to a Grade 7 learner in 5 short points\"). Use it to explain, quiz you, or give feedback, not to do your work for you."
    }
   ],
   "listen": [
    "Generative AI creates new text, images, music or code.",
    "A chatbot predicts the next word again and again.",
    "It can make up facts and sound very sure about them.",
    "Always check important facts against a reliable source.",
    "It knows only what was in its training data, which ends at a certain date.",
    "Kiswahili and Sheng answers are often weaker, because there was less training text.",
    "Clear prompts get better answers."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Predict like a chatbot",
    "steps": [
     "In the explainer, start with \"the\" and keep picking the most likely word. Does the sentence make sense? Then add your own sentence and see how the predictions change.",
     "If you have permission to use a chatbot, ask it something you already know well, and check every fact it gives."
    ],
    "question": "One sentence the predictor made, and why it chose those words.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "How does a chatbot produce an answer?",
        "options": [
         "It looks up a ready-made answer in a big list",
         "It predicts the next word (or piece of a word) again and again",
         "A person types every answer",
         "It copies the first website it finds"
        ],
        "answer": 1,
        "why": "Large language models generate text one piece at a time, choosing likely continuations."
       },
       {
        "q": "A chatbot gives you a quote \"from a famous Kenyan leader\" for your essay. What should you do?",
        "options": [
         "Use it straight away",
         "Check it in a reliable source first, because chatbots can invent quotes",
         "Ask the chatbot if it's sure, and trust the answer",
         "Change one word and use it"
        ],
        "answer": 1,
        "why": "Chatbots can produce convincing but fake quotes and sources. Asking the same chatbot doesn't prove anything."
       },
       {
        "q": "Which prompt will probably get the most useful answer?",
        "options": [
         "photosynthesis",
         "tell me stuff",
         "Explain photosynthesis to a Grade 7 learner in 5 short points with one example from a farm",
         "answer"
        ],
        "answer": 2,
        "why": "Saying who it's for, how long, and what kind of example gives the model clear instructions."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Is each one a good or poor way to use a chatbot for school?",
      "buckets": [
       "Good use",
       "Poor use"
      ],
      "items": [
       {
        "t": "Asking it to explain a topic you didn't understand",
        "b": 0
       },
       {
        "t": "Copying its essay and handing it in as your own",
        "b": 1
       },
       {
        "t": "Asking it to quiz you before a test",
        "b": 0
       },
       {
        "t": "Trusting its facts without checking",
        "b": 1
       },
       {
        "t": "Asking for feedback on a paragraph you wrote",
        "b": 0
       },
       {
        "t": "Pasting your ID number into it",
        "b": 1
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What does generative AI do?",
     "options": [
      "Only sorts files",
      "Creates new content such as text, images, music or code",
      "Generates electricity",
      "Repairs computers"
     ],
     "a": 1,
     "why": "It learns patterns from existing content and produces new examples."
    },
    {
     "q": "A large language model is trained to...",
     "options": [
      "Predict the next word or piece of a word",
      "Understand feelings",
      "Search the internet for every answer",
      "Translate only"
     ],
     "a": 0,
     "why": "Repeating that prediction step builds whole answers."
    },
    {
     "q": "What is an AI \"hallucination\"?",
     "options": [
      "A dream the computer has",
      "Made-up information stated confidently, such as a fake fact or source",
      "A broken screen",
      "A very fast answer"
     ],
     "a": 1,
     "why": "Predicting likely words doesn't guarantee they are true."
    },
    {
     "q": "Why are chatbot answers in Kiswahili often weaker than in English?",
     "options": [
      "Kiswahili is harder for computers to type",
      "There was much less Kiswahili text in its training data",
      "Chatbots refuse other languages",
      "Kiswahili has no grammar"
     ],
     "a": 1,
     "why": "Models learn from the text available; less text means weaker patterns."
    },
    {
     "q": "What is a prompt?",
     "options": [
      "A type of virus",
      "The instruction or question you type to the AI",
      "The AI's answer",
      "A keyboard shortcut"
     ],
     "a": 1,
     "why": "Clear, specific prompts usually lead to more useful answers."
    },
    {
     "q": "Why might a chatbot not know about last week's news?",
     "options": [
      "It is lazy",
      "Its training data stops at a certain date",
      "News is secret",
      "It only reads books"
     ],
     "a": 1,
     "why": "Unless it can search the web, a model only knows what was in its training data."
    },
    {
     "q": "Which is the best way to check a fact from a chatbot?",
     "options": [
      "Ask the same chatbot again",
      "Compare it with a reliable source, like a textbook, a teacher or an official site",
      "Assume it's right if it sounds confident",
      "Ask a friend's chatbot"
     ],
     "a": 1,
     "why": "Independent, trusted sources are how you confirm a fact."
    },
    {
     "q": "How does an image generator make pictures?",
     "options": [
      "It photographs real scenes",
      "It learned patterns from huge numbers of images and creates new ones from a description",
      "It draws with a robot arm",
      "It copies one image exactly"
     ],
     "a": 1,
     "why": "It produces new images that match the patterns it learned."
    },
    {
     "q": "In the explainer, why did the predictor sometimes have nothing to say?",
     "options": [
      "It ran out of battery",
      "The last word never appeared in its training sentences with a word after it",
      "It was switched off",
      "The word was too long"
     ],
     "a": 1,
     "why": "A model can only continue patterns it has seen. Big models just see far more text."
    },
    {
     "q": "What's an honest way to use a chatbot for homework?",
     "options": [
      "Copy its answer and hand it in",
      "Use it to explain or quiz you, do the work yourself, and say if your teacher allows AI help",
      "Ask it to pretend to be you",
      "Never think for yourself"
     ],
     "a": 1,
     "why": "Learning happens when you do the thinking; follow your school's rules on AI."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": "next-word"
  },
  {
   "track": "ai",
   "id": "ai-bias",
   "code": "A5",
   "name": "Bias & Fairness",
   "part": "When AI treats people unfairly",
   "read": [
    {
     "icon": "⚖️",
     "title": "What AI bias is",
     "text": "AI bias is when a system treats some groups of people unfairly, for example making more mistakes for women, for darker skin, for older people, or for one region's accent. AI doesn't choose to be unfair: it copies patterns, including unfair ones, from the data it learned from."
    },
    {
     "icon": "🔬",
     "title": "A real example: faces",
     "text": "In 2018, researchers Joy Buolamwini and Timnit Gebru tested commercial face-analysis systems. The systems were far less accurate for darker-skinned women than for lighter-skinned men. The training data had mostly lighter-skinned faces, so the systems learned them best."
    },
    {
     "icon": "📄",
     "title": "Another example: hiring",
     "text": "A large company built an AI to sort job applications, trained on CVs from people it had hired in the past, who were mostly men. The tool learned to rank women's CVs lower, and the company stopped using it. The AI faithfully copied an unfair history."
    },
    {
     "icon": "🗣️",
     "title": "Bias close to home",
     "text": "Voice assistants may understand some accents better than others. A credit-scoring app could learn to give fewer loans to people from certain areas if its data reflects past unfairness. In Kenya, where people speak many languages and live very different lives, data from one group may not represent everyone."
    },
    {
     "icon": "🛠️",
     "title": "Making AI fairer",
     "text": "Fairer AI needs varied data that represents everyone it will affect, testing accuracy separately for different groups, people reviewing important decisions, and openness about how a system decides. Asking \"who could this hurt, and who is missing from the data?\" is a skill everyone can practise."
    }
   ],
   "listen": [
    "AI bias is when a system treats some groups unfairly.",
    "AI copies patterns, including unfair ones, from its training data.",
    "Face systems were once far less accurate for darker-skinned women.",
    "A hiring AI learned to prefer men because its past data did.",
    "Bias can affect accents, loans and much more.",
    "Fairer AI needs varied data, testing for every group, and human review.",
    "Always ask: who could this hurt, and who is missing from the data?"
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Bias detective",
    "steps": [
     "Think of an AI that could be used in Kenya, such as a loan app, an exam marker or a voice assistant. Who might be missing from its data, and what could go wrong for them?",
     "Write one rule you would set to make it fairer."
    ],
    "question": "Your example AI, who might be left out, and your fairness rule.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "A school uses AI trained only on essays from one large urban school to mark essays nationally. What's the risk?",
        "options": [
         "None; essays are all the same",
         "It may mark learners from other regions or backgrounds unfairly, because they're missing from the data",
         "It will be too generous to everyone",
         "It will refuse to mark"
        ],
        "answer": 1,
        "why": "When a group is missing from the training data, the model's patterns may not fit them."
       },
       {
        "q": "Why did the hiring AI rank women's CVs lower?",
        "options": [
         "It was programmed to dislike women",
         "It learned from past hiring data that was mostly men",
         "Women's CVs were longer",
         "It was broken"
        ],
        "answer": 1,
        "why": "Nobody wrote an unfair rule; the AI copied the pattern in its history."
       },
       {
        "q": "Which step does most to reduce bias?",
        "options": [
         "Making the AI run faster",
         "Using varied data and testing accuracy separately for different groups",
         "Hiding how the AI works",
         "Using fewer examples"
        ],
        "answer": 1,
        "why": "Testing each group reveals unfair gaps, and varied data helps close them."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Is each one likely to make AI fairer or less fair?",
      "buckets": [
       "Fairer",
       "Less fair"
      ],
      "items": [
       {
        "t": "Collecting voice samples from many Kenyan regions and languages",
        "b": 0
       },
       {
        "t": "Training only on data from one city",
        "b": 1
       },
       {
        "t": "Letting a person review loan rejections",
        "b": 0
       },
       {
        "t": "Keeping the decision rules completely secret",
        "b": 1
       },
       {
        "t": "Checking accuracy for women and men separately",
        "b": 0
       },
       {
        "t": "Copying past decisions that were unfair",
        "b": 1
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is AI bias?",
     "options": [
      "AI that prefers some colours",
      "When an AI system treats some groups of people unfairly",
      "When AI is slow",
      "AI that has opinions on football"
     ],
     "a": 1,
     "why": "Bias shows up as more mistakes or worse outcomes for certain groups."
    },
    {
     "q": "Where does AI bias usually come from?",
     "options": [
      "Unfair or unrepresentative patterns in the training data",
      "The computer's colour",
      "Electricity",
      "The keyboard"
     ],
     "a": 0,
     "why": "The model learns whatever patterns the data contains, good or bad."
    },
    {
     "q": "What did the 2018 face-analysis study find?",
     "options": [
      "All systems were perfect",
      "Systems were much less accurate for darker-skinned women",
      "Systems worked best on children",
      "Faces can't be analysed"
     ],
     "a": 1,
     "why": "The training data had mostly lighter-skinned faces, so accuracy was uneven."
    },
    {
     "q": "Does AI choose to be unfair?",
     "options": [
      "Yes, AI has opinions",
      "No, it copies patterns from its data, including unfair ones",
      "Only on weekends",
      "Only chatbots do"
     ],
     "a": 1,
     "why": "Bias is a data and design problem, which people are responsible for fixing."
    },
    {
     "q": "Why test an AI's accuracy separately for different groups?",
     "options": [
      "To make the report longer",
      "An AI can be accurate overall yet much worse for one group",
      "Groups always score the same",
      "It makes the AI faster"
     ],
     "a": 1,
     "why": "An overall average can hide unfair gaps."
    },
    {
     "q": "Which data would make a Kenyan voice assistant fairer?",
     "options": [
      "Recordings from one Nairobi office",
      "Recordings from many regions, ages and languages",
      "Only English news readers",
      "No recordings at all"
     ],
     "a": 1,
     "why": "Representative data helps the AI understand everyone it will serve."
    },
    {
     "q": "Why should people review important AI decisions, like loans or exam results?",
     "options": [
      "To catch unfair or wrong decisions before they harm someone",
      "Because AI is never right",
      "To slow things down on purpose",
      "Because people enjoy paperwork"
     ],
     "a": 0,
     "why": "Human review adds a check for mistakes and unfairness."
    },
    {
     "q": "A model's data comes from past decisions that were unfair. What will it probably do?",
     "options": [
      "Fix the unfairness automatically",
      "Repeat the unfairness",
      "Refuse to learn",
      "Become fair over time on its own"
     ],
     "a": 1,
     "why": "Learning from history means learning its mistakes too, unless people correct for them."
    },
    {
     "q": "Which question best helps spot bias?",
     "options": [
      "How fast is it?",
      "Who could this hurt, and who is missing from the data?",
      "What colour is the logo?",
      "How much does it cost?"
     ],
     "a": 1,
     "why": "Thinking about missing groups and possible harm is the heart of fairness."
    },
    {
     "q": "Why does openness about how an AI decides help fairness?",
     "options": [
      "It makes the AI faster",
      "People can question and correct unfair decisions",
      "It hides mistakes",
      "It removes the need for data"
     ],
     "a": 1,
     "why": "Decisions that can be explained can be challenged and improved."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "ai",
   "id": "ai-safety",
   "code": "A6",
   "name": "Using AI Safely & Honestly",
   "part": "Deepfakes, privacy and honest work",
   "read": [
    {
     "icon": "🎭",
     "title": "Deepfakes",
     "text": "AI can now make fake videos, photos and voices that look and sound real; these are called deepfakes. They can show a leader saying something they never said, or put someone's face in a photo they were never in. Be extra careful with shocking clips, especially around elections."
    },
    {
     "icon": "📞",
     "title": "Voice-clone scams",
     "text": "Scammers can copy a voice from a short recording. A caller who sounds exactly like a relative may say they're in trouble and need M-Pesa urgently. Hang up and call the person back on the number you know, or ask a question only they could answer. Never send money because of a voice alone."
    },
    {
     "icon": "🔍",
     "title": "Check before you share",
     "text": "Before believing or forwarding something: Who posted it first? Do trusted news sources report it? Does the image have odd details, like strange hands, blurry text or mismatched shadows? If you can't confirm it, don't share it. Spreading fakes can hurt real people."
    },
    {
     "icon": "🔒",
     "title": "Protect your privacy",
     "text": "Anything you type or upload into an AI app may be stored by the company. Never share passwords, PINs, your ID number, your address, or photos of other people without permission. Kenya's Data Protection Act (2019) gives you rights over your personal data, but the safest data is the data you never share."
    },
    {
     "icon": "🧭",
     "title": "Honest, healthy use",
     "text": "Use AI to help you learn, not to pretend its work is yours. Follow your school's rules, and say when you used AI. Remember that running AI uses a lot of electricity and water in data centres, so use it when it really helps. And AI is a tool: for worries and feelings, talk to people you trust."
    }
   ],
   "listen": [
    "Deepfakes are AI-made videos, photos or voices that look real.",
    "A cloned voice can sound exactly like a relative asking for money.",
    "Hang up and call back on a number you know.",
    "Check who posted something, and whether trusted sources report it, before sharing.",
    "Never give an AI app your passwords, PIN, ID number or address.",
    "Use AI to learn, follow school rules, and say when you used it.",
    "For worries and feelings, talk to people you trust."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Stay safe with AI",
    "steps": [
     "Make a short \"AI safety card\" for your family: three warning signs of a voice-clone or deepfake scam, and what to do.",
     "Find out whether your school has rules about using AI for homework, and write them down."
    ],
    "question": "Your three warning signs, and what your family should do.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "A caller sounding exactly like your uncle says he is stranded and needs KSh 5,000 on M-Pesa right now. What should you do?",
        "options": [
         "Send it immediately, it's his voice",
         "Hang up and call him back on his usual number, or ask a question only he would know",
         "Send half the amount",
         "Share the call on social media"
        ],
        "answer": 1,
        "why": "Voices can be cloned. Checking through a number you already know defeats the scam."
       },
       {
        "q": "A shocking video shows a leader saying something outrageous the day before an election. What's the best first step?",
        "options": [
         "Forward it to every group",
         "Check whether trusted news sources report it before believing or sharing",
         "Assume it's real because it's a video",
         "Comment angrily"
        ],
        "answer": 1,
        "why": "Deepfakes are often released at sensitive moments. Confirm before you spread it."
       },
       {
        "q": "Which is safe to type into an AI chatbot?",
        "options": [
         "Your M-Pesa PIN",
         "Your ID number and home address",
         "A general question about how volcanoes form",
         "Your school portal password"
        ],
        "answer": 2,
        "why": "General questions are fine; personal and secret information should never go into AI apps."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Is each one a safe or risky way to use AI?",
      "buckets": [
       "Safe",
       "Risky"
      ],
      "items": [
       {
        "t": "Asking AI to explain a maths method, then solving the problem yourself",
        "b": 0
       },
       {
        "t": "Uploading a friend's photo to an AI app without asking",
        "b": 1
       },
       {
        "t": "Telling your teacher you used AI to check your grammar",
        "b": 0
       },
       {
        "t": "Sharing an unverified AI video during an election",
        "b": 1
       },
       {
        "t": "Calling back a relative on their known number after a strange voice call",
        "b": 0
       },
       {
        "t": "Typing your password into a chatbot to \"fix your account\"",
        "b": 1
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is a deepfake?",
     "options": [
      "A very deep website",
      "An AI-made video, photo or voice that looks or sounds real but is fake",
      "A broken file",
      "A type of password"
     ],
     "a": 1,
     "why": "Deepfakes copy real people's faces or voices to create things that never happened."
    },
    {
     "q": "How can you check a voice call that might be cloned?",
     "options": [
      "Trust it if the voice matches",
      "Hang up and call back on a number you know, or ask something only they would know",
      "Send money quickly to be safe",
      "Give them your PIN to prove it's you"
     ],
     "a": 1,
     "why": "Scammers control the call they made, but not the number you call back."
    },
    {
     "q": "Which is a warning sign of an AI-generated image?",
     "options": [
      "Odd hands, blurry text or mismatched shadows",
      "It is in colour",
      "It has a caption",
      "It was posted in the morning"
     ],
     "a": 0,
     "why": "Generators often get small details like fingers and text wrong, though they're improving."
    },
    {
     "q": "What should you never share with an AI app?",
     "options": [
      "A question about history",
      "Passwords, PINs, your ID number or your address",
      "A maths problem",
      "A request for a poem"
     ],
     "a": 1,
     "why": "AI companies may store what you type, so keep personal and secret information out."
    },
    {
     "q": "Which Kenyan law gives you rights over your personal data?",
     "options": [
      "The Traffic Act",
      "The Data Protection Act (2019)",
      "The Tea Act",
      "There is none"
     ],
     "a": 1,
     "why": "It gives you rights over how your personal data is collected and used."
    },
    {
     "q": "What is honest use of AI for schoolwork?",
     "options": [
      "Handing in AI's essay as your own",
      "Using AI to help you learn, doing the work yourself, and saying when you used it",
      "Never telling anyone",
      "Copying a friend's AI answer"
     ],
     "a": 1,
     "why": "Honesty keeps learning real and follows school rules."
    },
    {
     "q": "Why does using AI have an environmental cost?",
     "options": [
      "It makes phones heavier",
      "Data centres running AI use a lot of electricity and water",
      "It uses paper",
      "It has no cost at all"
     ],
     "a": 1,
     "why": "Large AI models run on huge computers that need power and cooling."
    },
    {
     "q": "You see a shocking post but can't confirm it's real. What should you do?",
     "options": [
      "Not share it",
      "Share it with a warning",
      "Share it to ask others",
      "Change the caption and share it"
     ],
     "a": 0,
     "why": "Sharing unconfirmed content can spread lies and hurt real people."
    },
    {
     "q": "Who should you talk to about worries and feelings?",
     "options": [
      "Only an AI chatbot",
      "People you trust, like family, a teacher or a counsellor",
      "Nobody",
      "Strangers online"
     ],
     "a": 1,
     "why": "AI can't replace real care and support from people."
    },
    {
     "q": "Why are deepfakes especially risky around elections?",
     "options": [
      "Elections use more electricity",
      "Fake clips of leaders can mislead voters before the truth comes out",
      "Voters can't use phones",
      "Elections ban videos"
     ],
     "a": 1,
     "why": "A convincing fake spread at the right moment can do damage before it's corrected."
    }
   ],
   "cbe": "nice",
   "strandRef": null,
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-evolution",
   "code": "S1",
   "name": "How Computers Evolved",
   "part": "History and architecture",
   "read": [
    {
     "icon": "🧮",
     "title": "Calculating before electricity",
     "text": "People built calculating tools long before electricity: the abacus, Napier's bones, the slide rule and Blaise Pascal's adding machine, the Pascaline (1642). In the 1830s Charles Babbage designed the Analytical Engine, a programmable machine, and Ada Lovelace wrote what is often called the first computer program for it."
    },
    {
     "icon": "⚡",
     "title": "Generations of computers",
     "text": "Electronic computers are often grouped into generations by the technology inside: first, vacuum tubes (1940s–50s); second, transistors; third, integrated circuits (many transistors on one chip); fourth, microprocessors, a whole CPU on one chip (from the 1970s). Some books call today's AI-focused systems the fifth generation."
    },
    {
     "icon": "📉",
     "title": "Smaller, faster, cheaper",
     "text": "Each generation made computers smaller, faster, cheaper and less power-hungry. ENIAC (1945) filled a large room and weighed about 27 tonnes. A modern smartphone is millions of times more powerful and fits in your pocket."
    },
    {
     "icon": "🏛️",
     "title": "The von Neumann architecture",
     "text": "Most computers follow the von Neumann architecture: a CPU, a memory that holds both the program and the data, input and output devices, and buses connecting them. The CPU repeats one cycle: fetch an instruction from memory, decode it, execute it."
    },
    {
     "icon": "🔌",
     "title": "Buses: the computer's roads",
     "text": "A bus is a set of wires carrying signals between parts. The data bus carries the data itself, the address bus carries the memory location to read or write, and the control bus carries commands such as read, write and clock signals."
    }
   ],
   "listen": [
    "Before electricity, people calculated with the abacus, the slide rule and Pascal's adding machine.",
    "Babbage designed a programmable engine, and Ada Lovelace wrote a program for it.",
    "Computer generations moved from vacuum tubes to transistors, chips, and microprocessors.",
    "Every step made computers smaller, faster and cheaper.",
    "Most computers keep programs and data in the same memory: the von Neumann design.",
    "The CPU fetches, decodes and executes instructions, over and over.",
    "Buses carry data, addresses and control signals between the parts."
   ],
   "video": {
    "id": "mCq8-xTH7jA",
    "title": "How Computers Work: What Makes a Computer, a Computer?",
    "channel": "Code.org"
   },
   "mission": {
    "title": "History and the parts",
    "steps": [
     "Find out the processor and memory of a computer or phone you can use (Settings › About, or System Information).",
     "Ask an older relative what the first computer or phone they used was like, and compare it to today's."
    ],
    "question": "The processor you found, and one difference between an old computer and today's.",
    "tasks": [
     {
      "type": "order",
      "label": "Put these milestones in time order, oldest first.",
      "items": [
       {
        "t": "The abacus",
        "note": "One of the oldest calculating tools, still used to teach counting."
       },
       {
        "t": "Pascal's adding machine (1642)",
        "note": "A mechanical calculator with gears."
       },
       {
        "t": "Babbage's Analytical Engine design (1830s)",
        "note": "The first design for a general, programmable computer."
       },
       {
        "t": "ENIAC, built with vacuum tubes (1945)",
        "note": "First generation: huge, hot and power-hungry."
       },
       {
        "t": "Computers built with transistors (late 1950s)",
        "note": "Second generation: smaller and more reliable."
       },
       {
        "t": "Microprocessors: a CPU on one chip (1970s)",
        "note": "Fourth generation: this made personal computers possible."
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which bus carries the memory location the CPU wants to read?",
        "options": [
         "Data bus",
         "Address bus",
         "Control bus",
         "USB bus"
        ],
        "answer": 1,
        "why": "The address bus says WHERE in memory; the data bus then carries WHAT is stored there."
       },
       {
        "q": "In the von Neumann design, where is the program stored while it runs?",
        "options": [
         "Inside the keyboard",
         "In a separate program-only chip",
         "In main memory, together with the data",
         "On the screen"
        ],
        "answer": 2,
        "why": "Keeping programs and data in the same memory is the key idea of the von Neumann architecture."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "Which technology was used in first-generation computers?",
     "options": [
      "Vacuum tubes",
      "Microprocessors",
      "Integrated circuits",
      "Transistors"
     ],
     "a": 0,
     "why": "Vacuum tubes acted as switches in the earliest electronic computers, which made them big and hot."
    },
    {
     "q": "What did the microprocessor put on one chip?",
     "options": [
      "A whole hard disk",
      "A whole CPU",
      "The keyboard and mouse",
      "The internet connection"
     ],
     "a": 1,
     "why": "Putting the entire CPU on one chip (fourth generation) made small, affordable personal computers possible."
    },
    {
     "q": "Who wrote what is often called the first computer program?",
     "options": [
      "Blaise Pascal",
      "Bill Gates",
      "Ada Lovelace",
      "Alan Turing"
     ],
     "a": 2,
     "why": "Ada Lovelace wrote a method for Babbage's Analytical Engine to calculate a series of numbers."
    },
    {
     "q": "Which is a pre-electronic calculating tool?",
     "options": [
      "The slide rule",
      "The microprocessor",
      "The smartphone",
      "The router"
     ],
     "a": 0,
     "why": "Slide rules used sliding scales to multiply and divide, long before electronic calculators."
    },
    {
     "q": "What usually happened to computers with each new generation?",
     "options": [
      "They became larger and slower",
      "They became smaller, faster and cheaper",
      "They stopped needing electricity",
      "They became harder to use"
     ],
     "a": 1,
     "why": "Each new switching technology (tube, transistor, chip) was smaller and more efficient than the last."
    },
    {
     "q": "What is the CPU's basic repeating cycle?",
     "options": [
      "Save, print, close",
      "Fetch, decode, execute",
      "Input, sleep, output",
      "Download, install, run"
     ],
     "a": 1,
     "why": "The CPU fetches an instruction from memory, works out what it means, then carries it out, billions of times a second."
    },
    {
     "q": "Which bus carries signals such as \"read\" and \"write\"?",
     "options": [
      "Address bus",
      "Data bus",
      "Control bus",
      "Power bus"
     ],
     "a": 2,
     "why": "The control bus carries commands and timing; the other buses carry locations and the data itself."
    },
    {
     "q": "Integrated circuits were important because they...",
     "options": [
      "Put many transistors on one small chip",
      "Replaced electricity with steam",
      "Made computers heavier",
      "Were used only in calculators"
     ],
     "a": 0,
     "why": "Packing many transistors onto one chip made third-generation computers much smaller and more reliable."
    },
    {
     "q": "In the von Neumann architecture, programs and data are...",
     "options": [
      "Never stored at all",
      "Kept on separate machines",
      "Stored in the same memory",
      "Only kept on paper"
     ],
     "a": 2,
     "why": "A shared memory for programs and data is what defines the von Neumann design."
    },
    {
     "q": "ENIAC (1945) is best described as...",
     "options": [
      "A pocket calculator",
      "A room-sized, first-generation electronic computer",
      "An early smartphone",
      "A type of network cable"
     ],
     "a": 1,
     "why": "ENIAC used thousands of vacuum tubes and weighed about 27 tonnes."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 1.1 Evolution of Computers · 1.2 Computer Architecture",
   "explainer": "input-process-output"
  },
  {
   "track": "senior",
   "id": "s-io",
   "code": "S2",
   "name": "Input & Output",
   "part": "Devices and how to choose them",
   "read": [
    {
     "icon": "⌨️",
     "title": "Input devices",
     "text": "Input devices turn things in the real world into data the computer can process. Keyboards and mice are the familiar ones. Others include touch screens, microphones, cameras and scanners, and sensors that measure temperature, light or movement."
    },
    {
     "icon": "🔎",
     "title": "Automatic data capture",
     "text": "Some input devices read data without anyone typing. A barcode or QR code reader at the supermarket, Optical Mark Recognition (OMR) for multiple-choice answer sheets, Magnetic Ink Character Recognition (MICR) for the numbers on bank cheques, and fingerprint readers (biometrics) for identity."
    },
    {
     "icon": "🖨️",
     "title": "Output devices",
     "text": "Output devices present processed data to people. A monitor or projector gives soft copy, which you can see but not hold. A printer gives hard copy on paper; inkjets spray tiny ink drops, laser printers fuse toner with heat. Speakers and headphones give sound output."
    },
    {
     "icon": "🔁",
     "title": "Both input and output",
     "text": "Some devices do both jobs. A touch screen shows information and accepts taps. A headset has speakers and a microphone. A storage drive receives data and gives it back later."
    },
    {
     "icon": "🔌",
     "title": "Connecting devices",
     "text": "Devices connect through ports and wireless links: USB for most accessories, HDMI for screens and projectors, audio jacks, and wireless such as Bluetooth and Wi-Fi. Pick devices by the job: speed, accuracy, cost, the volume of data, and the needs of the user, for example screen readers for blind users."
    }
   ],
   "listen": [
    "Input devices turn the real world into data: keyboards, mice, cameras, sensors.",
    "Some devices capture data automatically, like barcode readers and OMR answer sheets.",
    "MICR reads the special magnetic numbers on bank cheques.",
    "Monitors give soft copy; printers give hard copy on paper.",
    "Touch screens and headsets are both input and output.",
    "USB, HDMI and Bluetooth connect devices to the computer.",
    "Choose a device for the job: speed, accuracy, cost and who will use it."
   ],
   "video": {
    "id": "DKGZlaPlVLY",
    "title": "How Computers Work: CPU, Memory, Input & Output",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Device detective",
    "steps": [
     "List every input and output device in your school's computer room or at home.",
     "Find the ports on a computer or laptop and name each one."
    ],
    "question": "Three input devices and two output devices you found.",
    "tasks": [
     {
      "type": "sort",
      "label": "Sort each device: input, output, or both?",
      "buckets": [
       "Input",
       "Output",
       "Both"
      ],
      "items": [
       {
        "t": "Barcode reader",
        "b": 0
       },
       {
        "t": "Laser printer",
        "b": 1
       },
       {
        "t": "Touch screen",
        "b": 2
       },
       {
        "t": "Microphone",
        "b": 0
       },
       {
        "t": "Projector",
        "b": 1
       },
       {
        "t": "Headset with microphone",
        "b": 2
       },
       {
        "t": "Fingerprint reader",
        "b": 0
       },
       {
        "t": "Speakers",
        "b": 1
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "A school wants to mark 500 multiple-choice answer sheets quickly. Which input method fits best?",
        "options": [
         "Typing every answer by keyboard",
         "Optical Mark Recognition (OMR)",
         "A microphone",
         "A fingerprint reader"
        ],
        "answer": 1,
        "why": "OMR reads the shaded marks on answer sheets automatically, which is fast and accurate for large volumes."
       },
       {
        "q": "A bank needs to read the account numbers printed on cheques. Which technology does this?",
        "options": [
         "QR codes",
         "A webcam",
         "Magnetic Ink Character Recognition (MICR)",
         "A touch screen"
        ],
        "answer": 2,
        "why": "Cheque numbers are printed in magnetic ink, so MICR can read them reliably even through stamps or marks."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is the job of an input device?",
     "options": [
      "To get data into the computer",
      "To show results on paper",
      "To cool the processor",
      "To store files permanently"
     ],
     "a": 0,
     "why": "Input devices turn actions and the real world (keys, sound, light, touch) into data the computer can process."
    },
    {
     "q": "Which gives a hard copy?",
     "options": [
      "A monitor",
      "A projector",
      "A printer",
      "A speaker"
     ],
     "a": 2,
     "why": "Hard copy is output you can hold, like a printed page; screens and projectors give soft copy."
    },
    {
     "q": "Which device is both input and output?",
     "options": [
      "Keyboard",
      "Touch screen",
      "Printer",
      "Scanner"
     ],
     "a": 1,
     "why": "A touch screen displays information (output) and senses your finger (input)."
    },
    {
     "q": "A supermarket till reads product prices using...",
     "options": [
      "A barcode reader",
      "MICR",
      "A plotter",
      "A projector"
     ],
     "a": 0,
     "why": "Barcodes encode the product number; the reader scans it and the system looks up the price."
    },
    {
     "q": "Which technology reads the shaded answers on multiple-choice exam sheets?",
     "options": [
      "MICR",
      "OMR",
      "HDMI",
      "Bluetooth"
     ],
     "a": 1,
     "why": "Optical Mark Recognition detects where marks are on a printed form."
    },
    {
     "q": "A laser printer forms the image using...",
     "options": [
      "Sprayed ink drops",
      "Sound waves",
      "Toner fused with heat",
      "Magnetic ink"
     ],
     "a": 2,
     "why": "Laser printers attract powdered toner to the paper and melt it in place; inkjets are the ones that spray ink."
    },
    {
     "q": "Which port is most often used to connect a projector or TV screen?",
     "options": [
      "Ethernet",
      "HDMI",
      "Audio jack",
      "SIM slot"
     ],
     "a": 1,
     "why": "HDMI carries high-quality video and sound to displays."
    },
    {
     "q": "A fingerprint reader is an example of...",
     "options": [
      "Biometric input",
      "Soft copy output",
      "A storage device",
      "A network cable"
     ],
     "a": 0,
     "why": "Biometric devices identify people by body features like fingerprints or faces."
    },
    {
     "q": "Which is soft copy output?",
     "options": [
      "A printed report",
      "A document shown on a monitor",
      "A photocopy",
      "A receipt"
     ],
     "a": 1,
     "why": "Soft copy is displayed on a screen and disappears when you close it; hard copy is printed."
    },
    {
     "q": "For a blind learner, which device helps most with output?",
     "options": [
      "A bigger monitor",
      "A colour printer",
      "A screen reader with speakers or headphones",
      "A webcam"
     ],
     "a": 2,
     "why": "Screen readers turn on-screen text into speech, so choosing devices means thinking about the user's needs."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 1.3 Input/Output (I/O) Devices",
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-storage-cpu",
   "code": "S3",
   "name": "Storage & the CPU",
   "part": "Memory, storage and the processor",
   "read": [
    {
     "icon": "🧠",
     "title": "Primary storage",
     "text": "Primary storage is memory the CPU uses directly. RAM holds the programs and data in use right now and is volatile: it is wiped when power goes off. ROM is non-volatile and holds start-up instructions (firmware). Cache is a small, very fast memory close to the CPU for data it needs again and again."
    },
    {
     "icon": "💾",
     "title": "Secondary storage",
     "text": "Secondary storage keeps files when the power is off: hard disk drives (HDD) with spinning platters, solid-state drives (SSD) with no moving parts, USB flash drives and memory cards, optical discs (CD, DVD), and cloud storage on someone else's servers over the internet."
    },
    {
     "icon": "📏",
     "title": "Measuring storage",
     "text": "1 byte is 8 bits. Storage sizes go kilobyte (KB), megabyte (MB), gigabyte (GB), terabyte (TB). In computing, each step is traditionally 1024 times the last (1 KB = 1024 bytes), though drive makers often use 1000. A photo might be 3 MB; a phone might store 128 GB."
    },
    {
     "icon": "🛡️",
     "title": "Caring for storage",
     "text": "Back up important files in at least two places. Eject flash drives before pulling them out. Keep hard disks away from knocks, heat and strong magnets. Scan removable drives for malware, because they spread infections between computers."
    },
    {
     "icon": "⚙️",
     "title": "Inside the CPU",
     "text": "The CPU has a Control Unit that directs the fetch–decode–execute cycle, an Arithmetic Logic Unit (ALU) that does calculations and comparisons, and registers: tiny, ultra-fast storage inside the CPU. Speed depends on clock speed (in GHz), the number of cores working in parallel, and cache size."
    }
   ],
   "listen": [
    "Primary storage is used directly by the CPU: RAM, ROM and cache.",
    "RAM is volatile and forgets everything when the power goes off.",
    "ROM keeps its start-up instructions even without power.",
    "Secondary storage, like SSDs, hard disks and flash drives, keeps files long-term.",
    "One byte is eight bits; then kilobytes, megabytes, gigabytes and terabytes.",
    "Back up important files, and always eject flash drives safely.",
    "Inside the CPU, the control unit directs, the ALU calculates, and registers hold data."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Inspect your storage",
    "steps": [
     "On a computer or phone, find how much storage is used and free (Settings › Storage).",
     "Find the processor's speed in GHz and its number of cores (System Information or Settings › About)."
    ],
    "question": "Free storage, processor speed, and number of cores you found.",
    "tasks": [
     {
      "type": "order",
      "label": "Order these from fastest to slowest.",
      "items": [
       {
        "t": "CPU registers",
        "note": "Inside the CPU itself: the fastest of all, but tiny."
       },
       {
        "t": "Cache memory",
        "note": "Very fast memory right next to the CPU."
       },
       {
        "t": "RAM",
        "note": "Main memory: fast, and much bigger than cache."
       },
       {
        "t": "Solid-state drive (SSD)",
        "note": "No moving parts, so it is fast for long-term storage."
       },
       {
        "t": "Hard disk drive (HDD)",
        "note": "Spinning platters and a moving head make it the slowest here."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Is it primary or secondary storage?",
      "buckets": [
       "Primary",
       "Secondary"
      ],
      "items": [
       {
        "t": "RAM",
        "b": 0
       },
       {
        "t": "USB flash drive",
        "b": 1
       },
       {
        "t": "Cache",
        "b": 0
       },
       {
        "t": "Hard disk drive",
        "b": 1
       },
       {
        "t": "ROM",
        "b": 0
       },
       {
        "t": "Cloud storage",
        "b": 1
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "How many megabytes are in 2 GB (using 1 GB = 1024 MB)?",
        "options": [
         "200 MB",
         "1,000 MB",
         "2,048 MB",
         "20,480 MB"
        ],
        "answer": 2,
        "why": "2 × 1024 = 2048. Each unit is 1024 times the one below it."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "Which memory loses its contents when the power goes off?",
     "options": [
      "RAM",
      "ROM",
      "SSD",
      "DVD"
     ],
     "a": 0,
     "why": "RAM is volatile; ROM and secondary storage are non-volatile and keep their data."
    },
    {
     "q": "What does ROM usually store?",
     "options": [
      "Your music files",
      "Start-up instructions (firmware)",
      "Web pages you visit",
      "Temporary calculations only"
     ],
     "a": 1,
     "why": "ROM holds instructions the computer needs to start, and keeps them without power."
    },
    {
     "q": "Which part of the CPU performs calculations and comparisons?",
     "options": [
      "Control unit",
      "Arithmetic Logic Unit (ALU)",
      "Power supply",
      "Hard disk"
     ],
     "a": 1,
     "why": "The ALU does arithmetic (add, subtract) and logic (compare, AND, OR)."
    },
    {
     "q": "What is the job of the control unit?",
     "options": [
      "To direct the fetch–decode–execute cycle",
      "To store files permanently",
      "To display images",
      "To connect to Wi-Fi"
     ],
     "a": 0,
     "why": "The control unit coordinates the CPU, deciding what happens next at each step."
    },
    {
     "q": "Why is an SSD faster than a hard disk drive?",
     "options": [
      "It is always larger",
      "It has no moving parts",
      "It uses magnetic ink",
      "It runs on solar power"
     ],
     "a": 1,
     "why": "A hard disk must spin and move a read head; an SSD reads its flash chips electronically."
    },
    {
     "q": "Cache memory is used to...",
     "options": [
      "Keep files after power is off",
      "Hold data the CPU needs again very soon, very close to it",
      "Print documents faster",
      "Replace the hard disk"
     ],
     "a": 1,
     "why": "Cache cuts the time the CPU waits for frequently used data."
    },
    {
     "q": "How many bits are in one byte?",
     "options": [
      "4",
      "8",
      "10",
      "1024"
     ],
     "a": 1,
     "why": "A byte is 8 bits, enough for 256 different values."
    },
    {
     "q": "Which is the best way to protect important files?",
     "options": [
      "Keep one copy on a flash drive only",
      "Keep backups in at least two different places",
      "Store them only in RAM",
      "Never save them"
     ],
     "a": 1,
     "why": "Any single device can fail, get lost or get infected; separate backups protect you."
    },
    {
     "q": "What does the clock speed of a CPU (in GHz) measure?",
     "options": [
      "How much it stores",
      "How many cycles it can run per second",
      "Its temperature",
      "Its screen size"
     ],
     "a": 1,
     "why": "3 GHz means about 3 billion clock cycles per second; more cycles generally means faster work."
    },
    {
     "q": "Which is an example of cloud storage?",
     "options": [
      "A DVD in a drawer",
      "RAM inside a laptop",
      "Files saved to an online service and kept on its servers",
      "A printed photo"
     ],
     "a": 2,
     "why": "Cloud storage keeps your files on another company's servers, reached over the internet."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 1.4 Computer storage · 1.5 Central Processing Unit (CPU)",
   "explainer": "memory"
  },
  {
   "track": "senior",
   "id": "s-os",
   "code": "S4",
   "name": "Operating Systems",
   "part": "The software that runs everything",
   "read": [
    {
     "icon": "🧩",
     "title": "What an operating system is",
     "text": "The operating system (OS) is the main software that manages the computer's hardware and runs other programs. Without it, apps could not use the screen, memory or storage. Examples: Windows, macOS and Linux on computers; Android and iOS on phones."
    },
    {
     "icon": "🗂️",
     "title": "What the OS manages",
     "text": "The OS manages processes (which programs run, and when), memory (which program uses which part of RAM), files and folders on storage, input and output devices through drivers, and security, such as user accounts and permissions."
    },
    {
     "icon": "🖱️",
     "title": "How you talk to it",
     "text": "The user interface is how you give the OS instructions. A graphical user interface (GUI) uses windows, icons, menus and a pointer. A command-line interface (CLI) uses typed commands. A GUI is easier to learn; a CLI can be faster for experts and for automation."
    },
    {
     "icon": "🗃️",
     "title": "Types of operating systems",
     "text": "Single-user systems serve one person at a time; multi-user systems, like servers, serve many at once. Multitasking runs several programs at the same time. Real-time operating systems respond within strict time limits, for example in car brakes or medical machines."
    },
    {
     "icon": "🔐",
     "title": "Keeping the OS healthy",
     "text": "Install updates: they fix security holes. Use only trusted app stores and sources. Give each person their own user account, and don't use the administrator account for everyday work. Licensed or open-source software is legal; pirated copies often hide malware."
    }
   ],
   "listen": [
    "The operating system manages the hardware and runs every other program.",
    "Windows, macOS and Linux run computers; Android and iOS run phones.",
    "The OS manages processes, memory, files, devices and security.",
    "A GUI uses windows and icons; a command line uses typed commands.",
    "Multitasking runs several programs; real-time systems respond instantly.",
    "Install updates; they close security holes.",
    "Get software from trusted sources: pirated copies often hide malware."
   ],
   "video": {
    "id": "xnyFYiK2rSY",
    "title": "How Computers Work: Hardware and Software",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Meet your OS",
    "steps": [
     "Find the name and version of the operating system on a computer or phone (Settings › About).",
     "Open Task Manager (Windows) or Activity Monitor (Mac), or your phone's battery or app list, and note which apps use the most memory."
    ],
    "question": "Your OS and version, and the app using the most memory.",
    "tasks": [
     {
      "type": "sort",
      "label": "Is each one an operating system, or an application that runs on one?",
      "buckets": [
       "Operating system",
       "Application"
      ],
      "items": [
       {
        "t": "Android",
        "b": 0
       },
       {
        "t": "Microsoft Word",
        "b": 1
       },
       {
        "t": "Linux",
        "b": 0
       },
       {
        "t": "WhatsApp",
        "b": 1
       },
       {
        "t": "Windows",
        "b": 0
       },
       {
        "t": "Web browser",
        "b": 1
       },
       {
        "t": "iOS",
        "b": 0
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which job is NOT done by the operating system?",
        "options": [
         "Deciding which program gets the CPU",
         "Managing files and folders",
         "Writing your English essay for you",
         "Controlling devices through drivers"
        ],
        "answer": 2,
        "why": "The OS manages resources; creating content is the job of applications and of you."
       },
       {
        "q": "A car's anti-lock brakes must respond within milliseconds. Which OS type suits this?",
        "options": [
         "Single-user desktop OS",
         "Real-time operating system",
         "Phone OS",
         "No OS at all"
        ],
        "answer": 1,
        "why": "Real-time systems guarantee a response within strict time limits, which safety systems need."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is the main job of an operating system?",
     "options": [
      "To manage hardware and run other programs",
      "To browse the internet only",
      "To type documents",
      "To play music"
     ],
     "a": 0,
     "why": "The OS sits between hardware and apps, sharing out the CPU, memory, storage and devices."
    },
    {
     "q": "Which is a phone operating system?",
     "options": [
      "Microsoft Excel",
      "Android",
      "Google Chrome",
      "Zoom"
     ],
     "a": 1,
     "why": "Android and iOS are mobile operating systems; the others are applications."
    },
    {
     "q": "A graphical user interface (GUI) uses...",
     "options": [
      "Windows, icons, menus and a pointer",
      "Only typed commands",
      "Only voice",
      "Punched cards"
     ],
     "a": 0,
     "why": "A GUI lets you point and click instead of typing commands."
    },
    {
     "q": "What do device drivers do?",
     "options": [
      "Drive the computer to school",
      "Let the OS control a specific piece of hardware",
      "Speed up the internet",
      "Delete viruses"
     ],
     "a": 1,
     "why": "A driver translates between the OS and a device, such as a printer or graphics card."
    },
    {
     "q": "Multitasking means...",
     "options": [
      "One program at a time only",
      "Running several programs at the same time",
      "Using many keyboards",
      "Having many users on one account"
     ],
     "a": 1,
     "why": "The OS switches the CPU between programs so quickly they seem to run together."
    },
    {
     "q": "Why should you install OS updates?",
     "options": [
      "They make the screen bigger",
      "They fix security holes and bugs",
      "They delete your files",
      "They are required to switch on"
     ],
     "a": 1,
     "why": "Attackers target known weaknesses; updates close them."
    },
    {
     "q": "A command-line interface is useful because...",
     "options": [
      "It needs no keyboard",
      "Experts can work fast and automate tasks with typed commands",
      "It shows more pictures",
      "It is the only way to use phones"
     ],
     "a": 1,
     "why": "Typed commands can be combined and repeated in scripts, which is powerful for automation."
    },
    {
     "q": "Which OS type serves many users at the same time?",
     "options": [
      "Single-user OS",
      "Multi-user OS",
      "Real-time OS only",
      "Calculator OS"
     ],
     "a": 1,
     "why": "Servers run multi-user systems so many people can use them at once."
    },
    {
     "q": "Why avoid pirated software?",
     "options": [
      "It is always slower",
      "It is illegal and often hides malware",
      "It cannot be installed",
      "It uses less storage"
     ],
     "a": 1,
     "why": "Cracked copies are a common way malware spreads, besides breaking copyright law."
    },
    {
     "q": "Memory management by the OS means...",
     "options": [
      "Deciding which program uses which part of RAM",
      "Remembering your passwords",
      "Buying more RAM",
      "Backing up to the cloud"
     ],
     "a": 0,
     "why": "The OS keeps programs from overwriting each other's memory and frees space when they close."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 1.6 Operating System (OS)",
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-setup",
   "code": "S5",
   "name": "Setting Up a Computer",
   "part": "Ports, cables and safety",
   "read": [
    {
     "icon": "🔌",
     "title": "Ports and cables",
     "text": "Each cable fits a matching port. USB (type A is the flat rectangle, type C is small and reversible) connects most accessories. HDMI and DisplayPort carry video and sound to screens; older screens use the blue VGA port. An RJ-45 port takes an Ethernet network cable. The round 3.5 mm jack is for audio."
    },
    {
     "icon": "🔋",
     "title": "Power",
     "text": "Desktops and monitors usually take a detachable power cable; laptops use a charger. Kenya has power cuts and surges, so plug into a surge protector, or better, a UPS (uninterruptible power supply), whose battery gives you time to save and shut down properly."
    },
    {
     "icon": "🛠️",
     "title": "The setup procedure",
     "text": "Place the computer on a stable desk with space around it for air. With everything switched off, connect the monitor, then the keyboard and mouse, then the network cable. Connect power last, switch on the monitor, then the computer. Finally, test it by doing a real task."
    },
    {
     "icon": "⚠️",
     "title": "Safety first",
     "text": "Never open a computer while it is plugged in. Keep drinks away and cables tidy so nobody trips. Use properly earthed sockets and don't overload them. Before touching parts inside, touch bare metal to discharge static electricity, which can damage chips."
    },
    {
     "icon": "♻️",
     "title": "E-waste",
     "text": "Old computers contain useful parts and also harmful materials like lead. Reuse parts that still work, such as a good monitor or keyboard, to set up another computer. Take broken equipment to licensed e-waste collectors; never burn it or dump it with ordinary rubbish."
    }
   ],
   "listen": [
    "Every cable has a matching port: USB, HDMI, VGA, Ethernet and audio.",
    "USB type C is small and reversible; type A is the flat rectangle.",
    "A UPS keeps the computer running during a power cut so you can save your work.",
    "Connect everything with the power off, and connect power last.",
    "Never open a computer while it is plugged in.",
    "Touch bare metal first to discharge static before handling parts.",
    "Reuse working parts, and take broken ones to licensed e-waste collectors."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Set it up right",
    "steps": [
     "With a teacher, connect a computer's monitor, keyboard, mouse and power in the correct order, then switch it on and use it.",
     "Identify every port on the back of a desktop or the sides of a laptop."
    ],
    "question": "The order you connected things in, and one safety step you followed.",
    "tasks": [
     {
      "type": "order",
      "label": "Put the setup steps in the right order.",
      "items": [
       {
        "t": "Place the computer on a stable, ventilated desk near a socket",
        "note": "A firm surface with air around it prevents falls and overheating."
       },
       {
        "t": "With everything off, connect the monitor (HDMI or VGA)",
        "note": "Connect cables with the power off to avoid sparks and damage."
       },
       {
        "t": "Connect the keyboard and mouse (USB)",
        "note": "Input devices next."
       },
       {
        "t": "Connect the network cable (RJ-45) if needed",
        "note": "Wired network if there is one."
       },
       {
        "t": "Plug power cables into a surge protector or UPS",
        "note": "Power goes last, through protection."
       },
       {
        "t": "Switch on the monitor, then the computer, and test it",
        "note": "Finish by doing a real task to check everything works."
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which port does an Ethernet network cable plug into?",
        "options": [
         "HDMI",
         "RJ-45",
         "3.5 mm audio jack",
         "VGA"
        ],
        "answer": 1,
        "why": "RJ-45 is the wider clip-in port used for wired networks."
       },
       {
        "q": "Which device lets you keep working for a few minutes during a power cut?",
        "options": [
         "A surge protector only",
         "An extension cable",
         "A UPS (uninterruptible power supply)",
         "An HDMI cable"
        ],
        "answer": 2,
        "why": "A UPS has a battery; a surge protector only blocks spikes and does nothing when power goes off."
       },
       {
        "q": "An old monitor still works perfectly. What is the best thing to do with it?",
        "options": [
         "Burn it",
         "Throw it in the rubbish pit",
         "Reuse it to set up another computer",
         "Leave it in the rain"
        ],
        "answer": 2,
        "why": "Reusing working parts cuts e-waste; broken parts should go to licensed e-waste collectors."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "Which port usually connects a modern monitor or projector?",
     "options": [
      "HDMI",
      "RJ-45",
      "Audio jack",
      "SIM slot"
     ],
     "a": 0,
     "why": "HDMI carries high-definition video and sound in one cable."
    },
    {
     "q": "The blue 15-pin port found on older screens is...",
     "options": [
      "USB-C",
      "VGA",
      "Ethernet",
      "Bluetooth"
     ],
     "a": 1,
     "why": "VGA is an older analogue video connection, still found on some school projectors."
    },
    {
     "q": "Which USB type is small and fits either way up?",
     "options": [
      "USB-A",
      "USB-C",
      "VGA",
      "RJ-45"
     ],
     "a": 1,
     "why": "USB-C is reversible, so it has no \"wrong way up\"."
    },
    {
     "q": "When should power cables be connected during setup?",
     "options": [
      "First, before anything else",
      "Last, after the other cables",
      "Never",
      "Only while the computer is running"
     ],
     "a": 1,
     "why": "Connecting power last reduces the risk of shocks and damage while you are plugging things in."
    },
    {
     "q": "Why touch bare metal before handling parts inside a computer?",
     "options": [
      "To warm your hands",
      "To discharge static electricity that can damage chips",
      "To clean the parts",
      "To speed up the computer"
     ],
     "a": 1,
     "why": "A static spark you cannot even feel can destroy sensitive components."
    },
    {
     "q": "What does a surge protector do?",
     "options": [
      "Blocks sudden spikes in voltage",
      "Keeps the computer on during a power cut",
      "Speeds up the internet",
      "Cools the processor"
     ],
     "a": 0,
     "why": "It protects against spikes; only a UPS keeps power flowing during an outage."
    },
    {
     "q": "Which is a safety rule when setting up a computer?",
     "options": [
      "Keep a cup of tea next to the keyboard",
      "Open the case while it is plugged in",
      "Keep cables tidy so nobody trips",
      "Overload one socket with many plugs"
     ],
     "a": 2,
     "why": "Loose cables cause falls and pulled equipment; overloaded sockets can overheat."
    },
    {
     "q": "Why is e-waste a problem if dumped or burned?",
     "options": [
      "It is too heavy",
      "It contains harmful materials like lead",
      "It makes noise",
      "It has no value at all"
     ],
     "a": 1,
     "why": "Burning or dumping releases toxic substances; proper collectors recover materials safely."
    },
    {
     "q": "A 3.5 mm jack is used for...",
     "options": [
      "Network cables",
      "Monitors",
      "Headphones and speakers",
      "Power"
     ],
     "a": 2,
     "why": "The small round audio jack carries sound to headphones and speakers."
    },
    {
     "q": "What is the last step of setting up a computer?",
     "options": [
      "Unpacking the box",
      "Connecting the mouse",
      "Switching on and testing it with a real task",
      "Buying a new monitor"
     ],
     "a": 2,
     "why": "Testing confirms everything is connected and working before people rely on it."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 1.7 Computer setup",
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-datacomm",
   "code": "S6",
   "name": "Data Communication",
   "part": "How data travels",
   "read": [
    {
     "icon": "📨",
     "title": "The five parts of communication",
     "text": "Every data communication has five parts: a sender, a receiver, the message (the data), a transmission medium that carries it (cable or radio waves), and a protocol: the agreed rules both sides follow so they understand each other. An M-Pesa message from one phone to another uses all five."
    },
    {
     "icon": "↔️",
     "title": "Direction: simplex, half-duplex, full-duplex",
     "text": "Simplex sends one way only, like a radio broadcast. Half-duplex sends both ways but one at a time, like a walkie-talkie (\"over!\"). Full-duplex sends both ways at once, like a phone call."
    },
    {
     "icon": "📜",
     "title": "Protocols and layered models",
     "text": "Protocols are rules for formatting, addressing and checking data. The internet uses the TCP/IP suite: IP addresses and routes packets; TCP makes sure they all arrive in order. The OSI model describes networking in seven layers, from the physical cable up to the application you use."
    },
    {
     "icon": "🧵",
     "title": "Guided media: cables",
     "text": "Guided media send signals along a physical path. Twisted-pair copper cable (as in Ethernet) is cheap and common. Coaxial cable is used for TV and some internet connections. Fibre-optic cable carries light, so it is very fast, crosses long distances and is not disturbed by electrical interference. It links Kenya to the world under the sea."
    },
    {
     "icon": "📡",
     "title": "Unguided media and bandwidth",
     "text": "Unguided (wireless) media use radio waves, microwaves, infrared or satellite links: Wi-Fi, Bluetooth and mobile data. Bandwidth is how much data a link can carry per second (for example 100 Mbps). A modem modulates digital data into a signal for the medium and demodulates it back at the other end."
    }
   ],
   "listen": [
    "Communication needs a sender, a receiver, a message, a medium and a protocol.",
    "Simplex is one way, half-duplex takes turns, and full-duplex goes both ways at once.",
    "Protocols are the agreed rules; the internet uses TCP/IP.",
    "Twisted pair is cheap, coaxial carries TV, and fibre carries light very fast.",
    "Wireless media include Wi-Fi, Bluetooth, mobile data and satellite.",
    "Bandwidth is how much data a link carries per second.",
    "A modem modulates and demodulates signals between devices."
   ],
   "video": {
    "id": "ZhEf7e4kopM",
    "title": "The Internet: Wires, Cables & Wifi",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Trace a message",
    "steps": [
     "Look at your home or school internet: is it fibre, mobile data, or another kind? Ask a teacher or parent.",
     "Run a speed test on a phone or computer and note the download speed in Mbps."
    ],
    "question": "Your connection type and the download speed you measured.",
    "tasks": [
     {
      "type": "sort",
      "label": "Is it guided (cable) or unguided (wireless) media?",
      "buckets": [
       "Guided",
       "Unguided"
      ],
      "items": [
       {
        "t": "Fibre-optic cable",
        "b": 0
       },
       {
        "t": "Wi-Fi",
        "b": 1
       },
       {
        "t": "Twisted-pair Ethernet cable",
        "b": 0
       },
       {
        "t": "Bluetooth",
        "b": 1
       },
       {
        "t": "Coaxial cable",
        "b": 0
       },
       {
        "t": "Satellite link",
        "b": 1
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "A walkie-talkie lets both people talk, but only one at a time. Which mode is this?",
        "options": [
         "Simplex",
         "Half-duplex",
         "Full-duplex",
         "No mode"
        ],
        "answer": 1,
        "why": "Half-duplex goes both ways but takes turns; a phone call, where both talk at once, is full-duplex."
       },
       {
        "q": "Which part of communication is \"the agreed rules both sides follow\"?",
        "options": [
         "The medium",
         "The sender",
         "The protocol",
         "The receiver"
        ],
        "answer": 2,
        "why": "Without shared rules (a protocol) the receiver could not make sense of the message."
       },
       {
        "q": "Which cable is NOT disturbed by electrical interference because it carries light?",
        "options": [
         "Twisted pair",
         "Coaxial",
         "Fibre-optic",
         "Power cable"
        ],
        "answer": 2,
        "why": "Fibre sends pulses of light through glass, so nearby electrical noise cannot affect it."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "Which is NOT one of the five parts of data communication?",
     "options": [
      "Sender",
      "Protocol",
      "Printer",
      "Transmission medium"
     ],
     "a": 2,
     "why": "The five parts are sender, receiver, message, medium and protocol; a printer is just an output device."
    },
    {
     "q": "A radio station broadcasting to listeners is an example of...",
     "options": [
      "Simplex",
      "Half-duplex",
      "Full-duplex",
      "A protocol"
     ],
     "a": 0,
     "why": "Data flows one way only: listeners cannot transmit back on the same channel."
    },
    {
     "q": "A normal phone call is...",
     "options": [
      "Simplex",
      "Half-duplex",
      "Full-duplex",
      "Not communication"
     ],
     "a": 2,
     "why": "Both people can speak and hear at the same time."
    },
    {
     "q": "What does TCP do in the TCP/IP suite?",
     "options": [
      "Draws web pages",
      "Makes sure packets arrive complete and in order",
      "Charges your phone",
      "Encrypts your screen"
     ],
     "a": 1,
     "why": "IP handles addressing and routing; TCP checks for lost packets and puts them back in order."
    },
    {
     "q": "How many layers does the OSI model have?",
     "options": [
      "3",
      "5",
      "7",
      "10"
     ],
     "a": 2,
     "why": "OSI has seven layers, from physical up to application."
    },
    {
     "q": "Fibre-optic cable carries data as...",
     "options": [
      "Electric current",
      "Pulses of light",
      "Sound waves",
      "Radio waves"
     ],
     "a": 1,
     "why": "Light through glass gives fibre its very high speed and long reach."
    },
    {
     "q": "Which is unguided (wireless) media?",
     "options": [
      "Twisted-pair cable",
      "Coaxial cable",
      "Wi-Fi",
      "Fibre-optic cable"
     ],
     "a": 2,
     "why": "Wireless signals travel through the air with no physical path."
    },
    {
     "q": "Bandwidth describes...",
     "options": [
      "How much data a link can carry per second",
      "The width of a cable",
      "The colour of a signal",
      "How many users have accounts"
     ],
     "a": 0,
     "why": "Higher bandwidth (more Mbps) means more data can flow at once."
    },
    {
     "q": "What does a modem do?",
     "options": [
      "Prints documents",
      "Converts between digital data and a signal for the medium",
      "Stores files",
      "Displays video"
     ],
     "a": 1,
     "why": "MOdulator-DEModulator: it turns data into a signal and back again."
    },
    {
     "q": "Why are undersea fibre cables important for Kenya?",
     "options": [
      "They power the national grid",
      "They connect Kenya's internet to the rest of the world at high speed",
      "They carry water to Mombasa",
      "They are used only for TV"
     ],
     "a": 1,
     "why": "International internet traffic travels through undersea fibre cables that land at Mombasa."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 2.1 Data communication · 2.2 Data Transmission Media",
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-networks",
   "code": "S7",
   "name": "Building Networks",
   "part": "Network elements and topologies",
   "read": [
    {
     "icon": "🗺️",
     "title": "Types of networks by size",
     "text": "A PAN (personal area network) links devices around one person, like a phone and earbuds over Bluetooth. A LAN (local area network) covers a home, office or school. A MAN (metropolitan area network) covers a city. A WAN (wide area network) spans countries; the internet is the biggest WAN."
    },
    {
     "icon": "🧰",
     "title": "Network devices",
     "text": "A network interface card (NIC) connects a device to a network. A switch joins devices in a LAN and sends data only to the right one. A router connects different networks, such as your LAN to the internet, and picks routes for packets. A wireless access point lets devices join by Wi-Fi. A modem connects to the service provider's line."
    },
    {
     "icon": "✅",
     "title": "Choosing a network",
     "text": "When planning a network, consider: cost, the number of users, distance, the speed needed, security, and how easy it is to grow and maintain. A school lab of 30 computers needs different equipment from one family's home."
    },
    {
     "icon": "🕸️",
     "title": "Physical and logical topology",
     "text": "Topology is the layout of a network. Physical topology is how devices are actually cabled; logical topology is how data flows between them. They can differ: a network can be wired as a star but pass data as if in a ring."
    },
    {
     "icon": "⭐",
     "title": "Common physical topologies",
     "text": "Bus: all devices share one main cable; cheap, but one break stops everything. Star: each device connects to a central switch; easy to fix, but the switch is a single point of failure. Ring: devices form a loop. Mesh: devices have many links, so data can go around failures. Tree: stars connected in levels, common in schools."
    }
   ],
   "listen": [
    "Networks by size: PAN, LAN, MAN, and WAN, the biggest of which is the internet.",
    "A switch joins devices in a LAN; a router connects networks together.",
    "A NIC connects a device; an access point adds Wi-Fi.",
    "Plan a network by cost, users, distance, speed and security.",
    "Physical topology is the cabling; logical topology is how data flows.",
    "In a bus, one break stops all; in a star, the centre is critical.",
    "Mesh networks route around failures, which makes them reliable."
   ],
   "video": {
    "id": "AYdF7b3nMto",
    "title": "The Internet: Packets, Routing & Reliability",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Map a network",
    "steps": [
     "Draw your school's or home network: which devices connect to which, and how (cable or Wi-Fi)?",
     "Find the router and count how many devices are connected to it (ask the person who manages it)."
    ],
    "question": "Which topology your drawing looks most like, and why.",
    "tasks": [
     {
      "type": "sort",
      "label": "Sort these networks by type.",
      "buckets": [
       "PAN",
       "LAN",
       "WAN"
      ],
      "items": [
       {
        "t": "Phone and wireless earbuds over Bluetooth",
        "b": 0
       },
       {
        "t": "A school's computer lab network",
        "b": 1
       },
       {
        "t": "The internet",
        "b": 2
       },
       {
        "t": "A smartwatch linked to a phone",
        "b": 0
       },
       {
        "t": "An office's Wi-Fi network",
        "b": 1
       },
       {
        "t": "A bank linking branches in Nairobi, Kisumu and Mombasa",
        "b": 2
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which device connects your home LAN to the internet and chooses routes for packets?",
        "options": [
         "A switch",
         "A router",
         "A NIC",
         "A printer"
        ],
        "answer": 1,
        "why": "Routers connect different networks; switches connect devices within one network."
       },
       {
        "q": "In which topology does one cable break bring the whole network down?",
        "options": [
         "Bus",
         "Star",
         "Mesh",
         "Tree"
        ],
        "answer": 0,
        "why": "All devices share one backbone cable in a bus, so a single break cuts everyone off."
       },
       {
        "q": "Which topology keeps working best if several links fail?",
        "options": [
         "Bus",
         "Ring",
         "Mesh",
         "Star"
        ],
        "answer": 2,
        "why": "Mesh gives many paths between devices, so data can take a route around broken links."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "A network covering one school is a...",
     "options": [
      "PAN",
      "LAN",
      "MAN",
      "WAN"
     ],
     "a": 1,
     "why": "A LAN covers a small area like a building or campus."
    },
    {
     "q": "Which is the largest WAN?",
     "options": [
      "The internet",
      "A school lab",
      "A Bluetooth headset",
      "A printer cable"
     ],
     "a": 0,
     "why": "The internet connects networks across the whole world."
    },
    {
     "q": "What does a switch do?",
     "options": [
      "Connects your network to the internet",
      "Joins devices in a LAN and sends data to the right one",
      "Converts light to sound",
      "Stores web pages"
     ],
     "a": 1,
     "why": "A switch learns which device is on which port and forwards data only there."
    },
    {
     "q": "A NIC is...",
     "options": [
      "A type of cable",
      "The part that connects a device to a network",
      "A network topology",
      "A web browser"
     ],
     "a": 1,
     "why": "The network interface card (wired or wireless) gives a device its network connection."
    },
    {
     "q": "In a star topology, what happens if the central switch fails?",
     "options": [
      "Nothing changes",
      "The whole network stops working",
      "Only one computer stops",
      "Data goes faster"
     ],
     "a": 1,
     "why": "Every device connects through the centre, so it is a single point of failure."
    },
    {
     "q": "Physical topology describes...",
     "options": [
      "How devices are actually cabled together",
      "How fast the internet is",
      "Which apps are installed",
      "The colour of the cables"
     ],
     "a": 0,
     "why": "Physical topology is the real layout; logical topology is how data flows across it."
    },
    {
     "q": "What does a wireless access point do?",
     "options": [
      "Prints wirelessly",
      "Lets devices join a network by Wi-Fi",
      "Charges phones",
      "Replaces the CPU"
     ],
     "a": 1,
     "why": "It is the radio bridge between wireless devices and the wired network."
    },
    {
     "q": "Which is a reason to choose a star topology for a school lab?",
     "options": [
      "It needs no switch",
      "A faulty cable affects only one computer, and it is easy to manage",
      "It uses one cable for everyone",
      "It cannot be expanded"
     ],
     "a": 1,
     "why": "Each device has its own cable to the switch, so faults are isolated and easy to find."
    },
    {
     "q": "A MAN usually covers...",
     "options": [
      "One room",
      "One person",
      "A city",
      "The whole world"
     ],
     "a": 2,
     "why": "Metropolitan area networks link sites across a town or city."
    },
    {
     "q": "Which is a key consideration when planning a network?",
     "options": [
      "The brand of the desks",
      "Cost, number of users, distance, speed and security",
      "The teacher's favourite colour",
      "How many printers are broken"
     ],
     "a": 1,
     "why": "These factors decide which media, devices and topology suit the job."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 2.3 Computer Network Elements · 2.4 Network Topologies",
   "explainer": "network-path"
  },
  {
   "track": "senior",
   "id": "s-programming",
   "code": "S8",
   "name": "Thinking Like a Programmer",
   "part": "Programming concepts and program development",
   "read": [
    {
     "icon": "🗣️",
     "title": "Programming words",
     "text": "A program is a set of instructions for a computer. Source code is the program as a person writes it. Syntax is the grammar rules of a language. A bug is a mistake; debugging is finding and fixing it. An IDE (integrated development environment) is an app for writing, running and debugging code."
    },
    {
     "icon": "🪜",
     "title": "Levels of programming languages",
     "text": "Machine code is pure binary that the CPU runs directly. Assembly language uses short words (mnemonics) like ADD and MOV, one per machine instruction. High-level languages such as Python, Java, C++ and Scratch read more like English and work on many computers. These lessons use Python."
    },
    {
     "icon": "⚙️",
     "title": "Compilers and interpreters",
     "text": "The CPU only understands machine code, so high-level code must be translated. A compiler translates the whole program first, producing a file that runs fast. An interpreter translates and runs it one line at a time, which makes testing easy. Python usually runs through an interpreter."
    },
    {
     "icon": "🔄",
     "title": "Stages of program development",
     "text": "Programs are built in stages: define the problem, design a solution (the algorithm), write the code, test and debug it, put it into use, then document and maintain it. Skipping design and testing is how bugs reach users."
    },
    {
     "icon": "🧭",
     "title": "Algorithms, pseudocode and flowcharts",
     "text": "An algorithm is a step-by-step solution. A good one is clear, finite (it ends), has inputs and outputs, and every step can actually be done. Pseudocode writes it in plain structured English (START, INPUT, OUTPUT, END). Flowcharts draw it: ovals for start and end, parallelograms for input and output, rectangles for processing, diamonds for decisions."
    }
   ],
   "listen": [
    "Source code is what programmers write; syntax is the language's grammar.",
    "A bug is a mistake, and debugging is fixing it.",
    "Machine code is binary; assembly uses short words; high-level languages read like English.",
    "A compiler translates everything first; an interpreter runs line by line.",
    "Programs are built in stages: define, design, code, test, use, maintain.",
    "A good algorithm is clear, finite and has inputs and outputs.",
    "In flowcharts, diamonds are decisions and parallelograms are input and output."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Design before you code",
    "steps": [
     "Write pseudocode for making tea: START, list each step, END.",
     "Draw a flowchart for: \"Input a mark. If it is 50 or more, output Pass, otherwise output Fail.\""
    ],
    "question": "Your pseudocode for making tea.",
    "tasks": [
     {
      "type": "order",
      "label": "Put the stages of program development in order.",
      "items": [
       {
        "t": "Define the problem",
        "note": "Be clear about what the program must do, and for whom."
       },
       {
        "t": "Design the solution (algorithm, pseudocode, flowchart)",
        "note": "Plan the steps before writing any code."
       },
       {
        "t": "Write the code",
        "note": "Turn the design into a programming language."
       },
       {
        "t": "Test and debug",
        "note": "Try normal, unusual and wrong inputs, and fix the bugs found."
       },
       {
        "t": "Put the program into use",
        "note": "Install it where people will use it."
       },
       {
        "t": "Document and maintain",
        "note": "Explain how it works and keep improving it."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Is each language low-level or high-level?",
      "buckets": [
       "Low-level",
       "High-level"
      ],
      "items": [
       {
        "t": "Machine code",
        "b": 0
       },
       {
        "t": "Python",
        "b": 1
       },
       {
        "t": "Assembly language",
        "b": 0
       },
       {
        "t": "Java",
        "b": 1
       },
       {
        "t": "Scratch",
        "b": 1
       },
       {
        "t": "C++",
        "b": 1
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "In a flowchart, which shape shows a decision such as \"Is mark >= 50?\"",
        "options": [
         "Oval",
         "Rectangle",
         "Diamond",
         "Parallelogram"
        ],
        "answer": 2,
        "why": "A diamond has two exits (yes and no), so it shows a decision."
       },
       {
        "q": "Which translator runs a program one line at a time?",
        "options": [
         "A compiler",
         "An interpreter",
         "An assembler",
         "A router"
        ],
        "answer": 1,
        "why": "An interpreter translates and runs each line in turn, so you see errors exactly where they happen."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is syntax?",
     "options": [
      "A type of computer virus",
      "The grammar rules of a programming language",
      "The speed of a program",
      "A kind of cable"
     ],
     "a": 1,
     "why": "Code that breaks the syntax rules cannot be translated, just as a sentence with broken grammar is hard to understand."
    },
    {
     "q": "Debugging means...",
     "options": [
      "Finding and fixing mistakes in a program",
      "Removing insects from the computer",
      "Deleting a program",
      "Printing the code"
     ],
     "a": 0,
     "why": "The word comes from early engineers literally finding a moth in a machine; today it means fixing errors."
    },
    {
     "q": "Which language uses short words such as ADD and MOV?",
     "options": [
      "Python",
      "Machine code",
      "Assembly language",
      "English"
     ],
     "a": 2,
     "why": "Assembly gives each machine instruction a short word (mnemonic), which is easier than raw binary."
    },
    {
     "q": "Why must high-level code be translated?",
     "options": [
      "To make it colourful",
      "Because the CPU only understands machine code",
      "To make it longer",
      "Because of the internet"
     ],
     "a": 1,
     "why": "Compilers and interpreters turn human-friendly code into the CPU's binary instructions."
    },
    {
     "q": "What does a compiler do?",
     "options": [
      "Translates the whole program into machine code before it runs",
      "Runs one line at a time",
      "Draws flowcharts",
      "Stores files in the cloud"
     ],
     "a": 0,
     "why": "Compiling first produces a ready-to-run file, which then runs fast."
    },
    {
     "q": "Which is a characteristic of a good algorithm?",
     "options": [
      "It never ends",
      "It is clear and finishes after a finite number of steps",
      "It has no output",
      "It can only run on one computer"
     ],
     "a": 1,
     "why": "An algorithm that never ends, or whose steps are unclear, cannot reliably solve a problem."
    },
    {
     "q": "What is pseudocode?",
     "options": [
      "A secret password",
      "An algorithm written in structured plain language",
      "A type of compiler",
      "Machine code"
     ],
     "a": 1,
     "why": "Pseudocode lets you plan logic without worrying about a language's exact syntax."
    },
    {
     "q": "In a flowchart, a parallelogram represents...",
     "options": [
      "A decision",
      "Start or end",
      "Input or output",
      "Processing"
     ],
     "a": 2,
     "why": "Parallelograms show data coming in (INPUT) or going out (OUTPUT)."
    },
    {
     "q": "Which stage comes right after writing the code?",
     "options": [
      "Defining the problem",
      "Testing and debugging",
      "Designing the algorithm",
      "Buying a computer"
     ],
     "a": 1,
     "why": "Code must be tested, and its bugs fixed, before people rely on it."
    },
    {
     "q": "An IDE is...",
     "options": [
      "A network cable",
      "A type of algorithm",
      "An app for writing, running and debugging code",
      "A storage device"
     ],
     "a": 2,
     "why": "IDEs combine an editor, a way to run code, and debugging tools in one place."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 3.1 Computer Programming Concepts · 3.2 Program development",
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-variables",
   "code": "S9",
   "name": "Variables & Operators",
   "part": "Identifiers, data types and operators in Python",
   "read": [
    {
     "icon": "📦",
     "title": "Variables and constants",
     "text": "A variable is a named box in memory whose value can change, for example marks = 85. A constant is a value that should not change while the program runs. Python has no special constant type, so by convention constants are written in capitals: PASS_MARK = 50."
    },
    {
     "icon": "🏷️",
     "title": "Naming rules (identifiers)",
     "text": "An identifier is the name you give a variable or function. In Python it may contain letters, digits and underscores, but must not start with a digit, must have no spaces, and must not be a keyword like if, for or class. Names are case-sensitive: Marks and marks are different. Choose meaningful names like total_fees, not x."
    },
    {
     "icon": "🔤",
     "title": "Data types",
     "text": "Every value has a type. int is a whole number (42), float is a decimal (3.5), str is text in quotes (\"Nairobi\"), and bool is True or False. The type decides what you can do: 5 + 3 is 8, but \"5\" + \"3\" joins text and gives \"53\"."
    },
    {
     "icon": "⌨️",
     "title": "Input and output",
     "text": "print() shows output on the screen. input() reads what the user types, and always gives back text (a str). To do maths with it, convert it first: age = int(input(\"Age? \"))."
    },
    {
     "icon": "➕",
     "title": "Operators",
     "text": "Arithmetic: + − * / for add, subtract, multiply and divide, // for whole-number division, % for the remainder, ** for power. Comparison: == (equal to), != (not equal), <, >, <=, >=, which give True or False. Logical: and, or, not combine conditions. = assigns a value; == compares."
    }
   ],
   "listen": [
    "A variable is a named box whose value can change.",
    "By convention, constants are written in capitals, like PASS_MARK.",
    "Names can't start with a digit, can't have spaces, and can't be keywords.",
    "int is whole numbers, float is decimals, str is text, bool is True or False.",
    "input always gives text, so convert it with int before doing maths.",
    "Double slash divides to a whole number; percent gives the remainder.",
    "One equals sign assigns; two equals signs compare."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Your first variables",
    "steps": [
     "If you can, open Python (on a computer, or a free online Python editor) and try: name = input(\"Name? \") then print(\"Habari\", name).",
     "Write a program that asks for a price in KSh and prints the price with 16% VAT added."
    ],
    "question": "Your VAT program, or what you expect it to print for a price of 100.",
    "tasks": [
     {
      "type": "sort",
      "label": "Which names are valid Python identifiers?",
      "buckets": [
       "Valid",
       "Invalid"
      ],
      "items": [
       {
        "t": "total_marks",
        "b": 0
       },
       {
        "t": "2nd_place",
        "b": 1
       },
       {
        "t": "student name",
        "b": 1
       },
       {
        "t": "_count",
        "b": 0
       },
       {
        "t": "class",
        "b": 1
       },
       {
        "t": "mpesa2",
        "b": 0
       }
      ]
     },
     {
      "type": "typing",
      "label": "Type this Python statement exactly. It stores 85 in a variable called marks.",
      "target": "marks = 85"
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "What does print(7 // 2) show?",
        "options": [
         "3.5",
         "3",
         "1",
         "14"
        ],
        "answer": 1,
        "why": "// divides and drops the decimal part: 7 ÷ 2 = 3.5, so the whole-number answer is 3."
       },
       {
        "q": "What does print(7 % 2) show?",
        "options": [
         "1",
         "3",
         "3.5",
         "0"
        ],
        "answer": 0,
        "why": "% gives the remainder: 7 = 2 × 3 + 1, so the remainder is 1. It is handy for checking odd and even numbers."
       },
       {
        "q": "What does print(\"5\" + \"3\") show?",
        "options": [
         "8",
         "53",
         "An error",
         "15"
        ],
        "answer": 1,
        "why": "With quotes these are text, and + joins text together. Without quotes, 5 + 3 would be 8."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "Which is a valid Python variable name?",
     "options": [
      "1st_student",
      "my marks",
      "my_marks",
      "for"
     ],
     "a": 2,
     "why": "It uses only letters and an underscore, doesn't start with a digit, and isn't a keyword."
    },
    {
     "q": "What type is the value 3.75?",
     "options": [
      "int",
      "float",
      "str",
      "bool"
     ],
     "a": 1,
     "why": "Numbers with a decimal point are floats; whole numbers are ints."
    },
    {
     "q": "What type does input() always return?",
     "options": [
      "int",
      "float",
      "str (text)",
      "bool"
     ],
     "a": 2,
     "why": "Whatever the user types arrives as text, so convert it with int() or float() for maths."
    },
    {
     "q": "What is the result of 2 ** 3?",
     "options": [
      "6",
      "5",
      "8",
      "23"
     ],
     "a": 2,
     "why": "** means \"to the power of\": 2 × 2 × 2 = 8."
    },
    {
     "q": "What does == do?",
     "options": [
      "Assigns a value",
      "Compares two values and gives True or False",
      "Adds two numbers",
      "Prints text"
     ],
     "a": 1,
     "why": "A single = stores a value; == asks \"are these equal?\""
    },
    {
     "q": "Which is a bool value?",
     "options": [
      "True",
      "\"True\"",
      "1.0",
      "true_value"
     ],
     "a": 0,
     "why": "True and False (capital T and F, no quotes) are Python's two boolean values."
    },
    {
     "q": "Are the names Marks and marks the same variable in Python?",
     "options": [
      "Yes, case doesn't matter",
      "No, Python is case-sensitive",
      "Only for numbers",
      "Only inside functions"
     ],
     "a": 1,
     "why": "Python treats uppercase and lowercase letters as different, so these are two separate names."
    },
    {
     "q": "What does print(10 > 3 and 2 > 5) show?",
     "options": [
      "True",
      "False",
      "10",
      "An error"
     ],
     "a": 1,
     "why": "and needs both sides to be True; 2 > 5 is False, so the whole expression is False."
    },
    {
     "q": "Why write PASS_MARK in capitals?",
     "options": [
      "Python requires it",
      "By convention it signals a constant that shouldn't change",
      "It makes the program faster",
      "Capitals use less memory"
     ],
     "a": 1,
     "why": "Python doesn't enforce constants, so programmers use capital names to show intent."
    },
    {
     "q": "What does print(17 % 5) show?",
     "options": [
      "3",
      "2",
      "3.4",
      "85"
     ],
     "a": 1,
     "why": "17 = 5 × 3 + 2, so the remainder is 2."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 3.3 Identifiers and Operators",
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-control",
   "code": "S10",
   "name": "Decisions & Loops",
   "part": "Control structures in Python",
   "read": [
    {
     "icon": "🛤️",
     "title": "Three control structures",
     "text": "Every program is built from three structures. Sequence: steps run one after another. Selection: the program chooses a path with if. Iteration: the program repeats steps with a loop. Combine these and you can solve almost any problem."
    },
    {
     "icon": "🔀",
     "title": "Selection with if, elif and else",
     "text": "if checks a condition; elif (\"else if\") checks another; else runs when none matched. For example: if marks >= 80, print \"A\"; elif marks >= 50, print \"Pass\"; else print \"Try again\". Python uses a colon and indentation (usually 4 spaces) to show which lines belong to each branch."
    },
    {
     "icon": "🔁",
     "title": "for loops",
     "text": "A for loop repeats once for each item. range(5) gives 0, 1, 2, 3, 4 (five numbers, starting at 0). range(1, 6) gives 1 to 5. Example: for i in range(3): print(i) prints 0, then 1, then 2."
    },
    {
     "icon": "⏳",
     "title": "while loops",
     "text": "A while loop repeats as long as a condition is True, which suits cases where you don't know how many repeats are needed, like asking for a PIN until it is correct. Make sure something inside the loop changes the condition, or it will loop forever."
    },
    {
     "icon": "⛔",
     "title": "break and continue",
     "text": "break leaves a loop immediately, for example when you find what you were searching for. continue skips the rest of this round and jumps to the next one, for example to skip negative numbers. Use them sparingly, to keep loops easy to follow."
    }
   ],
   "listen": [
    "Programs use three structures: sequence, selection and iteration.",
    "if, elif and else choose which path the program takes.",
    "Python uses a colon and indentation to show what belongs to each part.",
    "A for loop repeats once for each item, and range starts counting at zero.",
    "A while loop repeats as long as a condition stays true.",
    "Make sure a while loop's condition eventually becomes false.",
    "break leaves a loop; continue skips to the next round."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Program a grader",
    "steps": [
     "Write a program that inputs a mark and prints A for 80 and above, Pass for 50 to 79, and Try again below 50.",
     "Write a loop that prints the 7 times table from 7 × 1 to 7 × 12."
    ],
    "question": "Your grader program, or how you planned it.",
    "tasks": [
     {
      "type": "order",
      "label": "Put these steps in order for a grading program.",
      "items": [
       {
        "t": "Ask the user for a mark",
        "note": "input() reads it as text."
       },
       {
        "t": "Convert the mark to a number",
        "note": "int() so we can compare it."
       },
       {
        "t": "If the mark is 80 or more, print A",
        "note": "The first, highest condition is checked first."
       },
       {
        "t": "Else if the mark is 50 or more, print Pass",
        "note": "elif is only checked if the first condition was False."
       },
       {
        "t": "Otherwise, print Try again",
        "note": "else catches every remaining case."
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "What does for i in range(3): print(i) print?",
        "options": [
         "1 2 3",
         "0 1 2",
         "0 1 2 3",
         "3 3 3"
        ],
        "answer": 1,
        "why": "range(3) starts at 0 and stops before 3, giving three numbers: 0, 1, 2."
       },
       {
        "q": "Which loop suits \"keep asking for the PIN until it is correct\"?",
        "options": [
         "A for loop over range(10)",
         "A while loop",
         "No loop",
         "An if statement only"
        ],
        "answer": 1,
        "why": "You don't know in advance how many tries it will take, so loop while the PIN is wrong."
       },
       {
        "q": "In a loop, what does break do?",
        "options": [
         "Skips to the next round",
         "Leaves the loop immediately",
         "Restarts the program",
         "Deletes the loop"
        ],
        "answer": 1,
        "why": "break exits the whole loop; continue only skips the rest of the current round."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "Which structure repeats steps?",
     "options": [
      "Sequence",
      "Selection",
      "Iteration",
      "Declaration"
     ],
     "a": 2,
     "why": "Iteration means looping, using for or while."
    },
    {
     "q": "What does range(1, 6) produce?",
     "options": [
      "1, 2, 3, 4, 5, 6",
      "1, 2, 3, 4, 5",
      "0, 1, 2, 3, 4, 5",
      "6, 5, 4, 3, 2, 1"
     ],
     "a": 1,
     "why": "range starts at the first number and stops before the second."
    },
    {
     "q": "In Python, how do you show which lines belong inside an if?",
     "options": [
      "With curly brackets",
      "With a colon and indentation",
      "With semicolons",
      "With capital letters"
     ],
     "a": 1,
     "why": "Python uses indentation, not brackets, to group lines into a block."
    },
    {
     "q": "If marks = 65, what does this print: if marks >= 80: A / elif marks >= 50: Pass / else: Try again?",
     "options": [
      "A",
      "Pass",
      "Try again",
      "Nothing"
     ],
     "a": 1,
     "why": "65 is not ≥ 80, so the elif is checked, and 65 ≥ 50 is True, so it prints Pass."
    },
    {
     "q": "When does a while loop stop?",
     "options": [
      "When its condition becomes False",
      "After exactly 10 rounds",
      "Never",
      "When the screen fills up"
     ],
     "a": 0,
     "why": "A while loop keeps going as long as its condition is True."
    },
    {
     "q": "What is an infinite loop?",
     "options": [
      "A very fast loop",
      "A loop whose condition never becomes False, so it never ends",
      "A loop with one round",
      "A for loop over a list"
     ],
     "a": 1,
     "why": "If nothing inside the loop changes the condition, it runs forever and the program hangs."
    },
    {
     "q": "What does continue do inside a loop?",
     "options": [
      "Ends the program",
      "Leaves the loop",
      "Skips the rest of this round and starts the next one",
      "Repeats the same round"
     ],
     "a": 2,
     "why": "continue is useful to skip unwanted items, such as negative numbers."
    },
    {
     "q": "How many times does for i in range(5): print(\"Hi\") print Hi?",
     "options": [
      "4",
      "5",
      "6",
      "1"
     ],
     "a": 1,
     "why": "range(5) gives five numbers (0 to 4), so the loop runs five times."
    },
    {
     "q": "Which keyword means \"otherwise, check this condition\"?",
     "options": [
      "else",
      "elif",
      "while",
      "break"
     ],
     "a": 1,
     "why": "elif adds another condition, checked only if the earlier ones were False."
    },
    {
     "q": "Sequence means...",
     "options": [
      "Steps run one after another in order",
      "Steps are chosen by a condition",
      "Steps are repeated",
      "Steps are skipped"
     ],
     "a": 0,
     "why": "Sequence is the default: the computer runs each line in order unless told otherwise."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 3.4 Control Structures",
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-containers",
   "code": "S11",
   "name": "Lists & Searching",
   "part": "Data structures, sorting and searching",
   "read": [
    {
     "icon": "📋",
     "title": "Lists",
     "text": "A list holds many values in order, in square brackets: marks = [70, 85, 90]. Positions (indexes) start at 0, so marks[0] is 70 and marks[2] is 90. Lists can change: marks.append(65) adds a value at the end, and len(marks) tells you how many items there are."
    },
    {
     "icon": "🔒",
     "title": "Tuples and sets",
     "text": "A tuple is like a list but cannot be changed once made, in round brackets: point = (3, 4). Use one for data that should stay fixed. A set holds unique values in curly brackets: {\"Maths\", \"English\"}. Adding a duplicate does nothing, which makes sets great for removing repeats."
    },
    {
     "icon": "📒",
     "title": "Dictionaries",
     "text": "A dictionary stores key and value pairs, like a phone book: phones = {\"Amani\": \"0712 000 000\"}. You look values up by key, phones[\"Amani\"], instead of by position. Keys must be unique."
    },
    {
     "icon": "🗄️",
     "title": "Two-dimensional lists",
     "text": "A list can hold other lists, like a table with rows and columns: table = [[1, 2], [3, 4]]. table[1][0] means row 1, column 0, which is 3. This is useful for timetables, spreadsheets and game boards."
    },
    {
     "icon": "🔍",
     "title": "Searching and sorting",
     "text": "Linear search checks items one by one from the start; it works on any list but is slow for big ones. Binary search needs a sorted list: check the middle, then throw away the half that can't contain the target, and repeat, which is very fast. Bubble sort sorts by repeatedly swapping neighbours that are in the wrong order."
    }
   ],
   "listen": [
    "A list holds values in order, and its positions start at zero.",
    "append adds to a list; len counts its items.",
    "A tuple can't be changed once made.",
    "A set keeps only unique values.",
    "A dictionary stores key and value pairs, like a phone book.",
    "Linear search checks every item; binary search halves a sorted list each time.",
    "Bubble sort swaps neighbours until everything is in order."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Class marks",
    "steps": [
     "If you can, open Python and make a list of five marks. Print the highest with max() and the average with sum() divided by len().",
     "Make a dictionary of three classmates and their favourite subjects, then print one of them by name."
    ],
    "question": "Your list of marks, and its highest mark and average.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "marks = [70, 85, 90]. What is marks[1]?",
        "options": [
         "70",
         "85",
         "90",
         "An error"
        ],
        "answer": 1,
        "why": "Indexes start at 0, so index 1 is the second item, 85."
       },
       {
        "q": "Which container suits storing each student's name with their phone number?",
        "options": [
         "A tuple",
         "A set",
         "A dictionary",
         "A plain number"
        ],
        "answer": 2,
        "why": "A dictionary maps a key (the name) to a value (the phone number) for quick look-up."
       },
       {
        "q": "You want a list of subjects with no repeats. Which container does this automatically?",
        "options": [
         "List",
         "Set",
         "Tuple",
         "String"
        ],
        "answer": 1,
        "why": "Sets keep only unique values, so duplicates disappear."
       }
      ]
     },
     {
      "type": "order",
      "label": "Put the steps of a binary search in order.",
      "items": [
       {
        "t": "Start with a sorted list",
        "note": "Binary search only works if the list is in order."
       },
       {
        "t": "Look at the middle item",
        "note": "Compare it with the value you want."
       },
       {
        "t": "If it matches, you have found it",
        "note": "Stop here."
       },
       {
        "t": "If the target is smaller, keep the left half; if bigger, keep the right half",
        "note": "Half of the list is thrown away at every step."
       },
       {
        "t": "Repeat with the half that is left until found or nothing remains",
        "note": "Even 1,000 items need only about 10 checks."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "In Python, list positions start at...",
     "options": [
      "0",
      "1",
      "-1",
      "10"
     ],
     "a": 0,
     "why": "The first item is index 0, which is why the last of five items is index 4."
    },
    {
     "q": "What does len([4, 8, 15]) give?",
     "options": [
      "15",
      "3",
      "27",
      "2"
     ],
     "a": 1,
     "why": "len counts items; there are three numbers in the list."
    },
    {
     "q": "What does marks.append(65) do?",
     "options": [
      "Deletes 65",
      "Adds 65 to the end of the list",
      "Sorts the list",
      "Finds 65"
     ],
     "a": 1,
     "why": "append grows the list by one item at the end."
    },
    {
     "q": "Which container cannot be changed after it is created?",
     "options": [
      "List",
      "Dictionary",
      "Tuple",
      "Set"
     ],
     "a": 2,
     "why": "Tuples are immutable, which protects data that should stay fixed, like coordinates."
    },
    {
     "q": "What do you need before you can use binary search?",
     "options": [
      "A dictionary",
      "A sorted list",
      "A very small list",
      "An internet connection"
     ],
     "a": 1,
     "why": "Binary search decides which half to throw away, and that only works if the list is in order."
    },
    {
     "q": "Linear search works by...",
     "options": [
      "Checking items one by one from the start",
      "Checking only the middle",
      "Sorting the list first",
      "Guessing randomly"
     ],
     "a": 0,
     "why": "It is simple and works on unsorted lists, but it can be slow for long ones."
    },
    {
     "q": "In a dictionary, you find a value using its...",
     "options": [
      "Position number",
      "Key",
      "Colour",
      "Length"
     ],
     "a": 1,
     "why": "Dictionaries look values up by key, like finding a number by a person's name."
    },
    {
     "q": "table = [[1, 2], [3, 4]]. What is table[1][0]?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "a": 2,
     "why": "table[1] is the second row, [3, 4], and position 0 in that row is 3."
    },
    {
     "q": "What does bubble sort repeatedly do?",
     "options": [
      "Deletes the largest item",
      "Swaps neighbouring items that are in the wrong order",
      "Splits the list in half",
      "Adds new items"
     ],
     "a": 1,
     "why": "After enough passes of swapping neighbours, every item \"bubbles\" into place."
    },
    {
     "q": "What happens if you add \"Maths\" twice to a set?",
     "options": [
      "The set holds it twice",
      "Python shows an error",
      "The set keeps only one \"Maths\"",
      "The set is deleted"
     ],
     "a": 2,
     "why": "Sets store each value only once."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 3.5 Data Structures",
   "explainer": ""
  },
  {
   "track": "senior",
   "id": "s-functions",
   "code": "S12",
   "name": "Functions",
   "part": "Modular programming",
   "read": [
    {
     "icon": "🧱",
     "title": "Why functions?",
     "text": "A function is a named block of code that does one job. Modular programming breaks a big program into functions, so each part is easier to write, test, fix and reuse. It is like a school: each department does its own job, and together they run everything."
    },
    {
     "icon": "🧰",
     "title": "Built-in and user-defined",
     "text": "Built-in functions come with Python: print(), input(), len(), int(), max(), round(). User-defined functions are the ones you write yourself with def. Once defined, you can call your function as many times as you like."
    },
    {
     "icon": "✍️",
     "title": "Defining a function",
     "text": "def area(length, width): return length * width. This defines a function named area with two parameters. Calling area(3, 4) passes 3 and 4 in as arguments, and the function returns 12. Inside a real program, the body goes on its own indented lines under the def line."
    },
    {
     "icon": "↩️",
     "title": "Parameters and return values",
     "text": "Parameters are the names in the definition (length, width); arguments are the actual values you pass in (3, 4). return sends a result back to the caller and ends the function. A function without return gives back the special value None."
    },
    {
     "icon": "🔭",
     "title": "Scope: local and global",
     "text": "A variable created inside a function is local: it exists only while the function runs and can't be used outside it. A variable created outside all functions is global. Prefer passing values in as parameters and returning results; it keeps functions independent and easy to test."
    }
   ],
   "listen": [
    "A function is a named block of code that does one job.",
    "Modular programs are easier to write, test, fix and reuse.",
    "Python has built-in functions like print and len, and you can write your own with def.",
    "Parameters are names in the definition; arguments are the values you pass in.",
    "return sends a result back and ends the function.",
    "Variables made inside a function are local to it.",
    "Pass values in and return results, so functions stay independent."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Write a fees function",
    "steps": [
     "If you can, open Python and write a function fees_due(paid, total) that returns the balance. Test it with fees_due(15000, 40000).",
     "Write a function is_even(n) that returns True if n is even. Hint: use %."
    ],
    "question": "Your fees_due function, and the result of fees_due(15000, 40000).",
    "tasks": [
     {
      "type": "sort",
      "label": "Is each function built into Python, or user-defined?",
      "buckets": [
       "Built-in",
       "User-defined"
      ],
      "items": [
       {
        "t": "print()",
        "b": 0
       },
       {
        "t": "len()",
        "b": 0
       },
       {
        "t": "area(length, width), written with def",
        "b": 1
       },
       {
        "t": "input()",
        "b": 0
       },
       {
        "t": "fees_due(paid, total), written with def",
        "b": 1
       },
       {
        "t": "max()",
        "b": 0
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "def area(length, width): return length * width. What does area(3, 4) return?",
        "options": [
         "7",
         "12",
         "34",
         "Nothing"
        ],
        "answer": 1,
        "why": "The arguments 3 and 4 become length and width, and the function returns 3 × 4."
       },
       {
        "q": "In def greet(name): ..., what is name?",
        "options": [
         "A parameter",
         "An argument",
         "A return value",
         "A global constant"
        ],
        "answer": 0,
        "why": "Names in the definition are parameters; the values passed in when calling are arguments."
       },
       {
        "q": "A variable created inside a function is...",
        "options": [
         "Global",
         "Local to that function",
         "A constant",
         "Shared by every program"
        ],
        "answer": 1,
        "why": "Local variables exist only while the function runs, which stops functions interfering with each other."
       }
      ]
     },
     {
      "type": "order",
      "label": "What happens, in order, when a program calls area(3, 4)?",
      "items": [
       {
        "t": "The program reaches the call area(3, 4)",
        "note": "The calling code pauses here."
       },
       {
        "t": "The arguments 3 and 4 are passed into the parameters length and width",
        "note": "Inside the function, length is 3 and width is 4."
       },
       {
        "t": "The function body runs",
        "note": "It calculates length * width."
       },
       {
        "t": "return sends 12 back to the caller",
        "note": "The function ends at return."
       },
       {
        "t": "The program continues using the value 12",
        "note": "For example, print(area(3, 4)) shows 12."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What keyword defines a function in Python?",
     "options": [
      "function",
      "def",
      "return",
      "call"
     ],
     "a": 1,
     "why": "def (short for define) starts a function definition."
    },
    {
     "q": "Which is a built-in Python function?",
     "options": [
      "len()",
      "area()",
      "fees_due()",
      "greet()"
     ],
     "a": 0,
     "why": "len comes with Python; the others are names someone would define themselves."
    },
    {
     "q": "What does return do?",
     "options": [
      "Prints a value",
      "Sends a result back to the caller and ends the function",
      "Repeats the function",
      "Deletes the function"
     ],
     "a": 1,
     "why": "Unlike print, return hands the value back so the program can keep using it."
    },
    {
     "q": "Why use modular programming?",
     "options": [
      "To make programs longer",
      "Parts are easier to write, test, fix and reuse",
      "It makes the computer louder",
      "It removes the need to test"
     ],
     "a": 1,
     "why": "Small functions with one job each are simpler to understand and can be reused."
    },
    {
     "q": "In area(3, 4), what are 3 and 4?",
     "options": [
      "Parameters",
      "Arguments",
      "Return values",
      "Keywords"
     ],
     "a": 1,
     "why": "The actual values passed in a call are arguments."
    },
    {
     "q": "What does a function return if it has no return statement?",
     "options": [
      "0",
      "An error",
      "None",
      "True"
     ],
     "a": 2,
     "why": "Python functions without return give back the special value None."
    },
    {
     "q": "A global variable is created...",
     "options": [
      "Inside a function",
      "Outside all functions",
      "Only in loops",
      "Only in dictionaries"
     ],
     "a": 1,
     "why": "Global variables live at the top level of the program."
    },
    {
     "q": "def double(n): return n * 2. What does double(double(3)) give?",
     "options": [
      "6",
      "12",
      "9",
      "3"
     ],
     "a": 1,
     "why": "double(3) is 6, then double(6) is 12. The result of one call can be passed to another."
    },
    {
     "q": "Why is it better to pass values as parameters than to rely on global variables?",
     "options": [
      "It is required by law",
      "It keeps functions independent and easier to test",
      "Globals use no memory",
      "Parameters make code slower"
     ],
     "a": 1,
     "why": "A function that only uses its parameters behaves the same wherever it is called."
    },
    {
     "q": "Which line correctly calls a function named greet with the argument \"Amani\"?",
     "options": [
      "def greet(\"Amani\")",
      "greet(\"Amani\")",
      "return greet",
      "greet = \"Amani\""
     ],
     "a": 1,
     "why": "Calling a function is its name followed by the arguments in brackets."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 10 · 3.6 Functions",
   "explainer": ""
  },
  {
   "track": "senior11",
   "id": "s11-datarep",
   "code": "S13",
   "name": "Number Systems & Codes",
   "part": "Data representation",
   "read": [
    {
     "icon": "🔢",
     "title": "Four number systems",
     "text": "Computers store everything as binary (base 2: digits 0 and 1). People use decimal (base 10). Programmers often use octal (base 8: digits 0–7) and hexadecimal (base 16: digits 0–9 then A–F, where A = 10 and F = 15), because they are short ways to write long binary numbers."
    },
    {
     "icon": "➗",
     "title": "Decimal to binary",
     "text": "Divide by 2 again and again, writing down each remainder, then read the remainders from the bottom up. 13 ÷ 2 = 6 r1, 6 ÷ 2 = 3 r0, 3 ÷ 2 = 1 r1, 1 ÷ 2 = 0 r1, so 13 = 1101 in binary. The same method works for octal (divide by 8) and hex (divide by 16)."
    },
    {
     "icon": "✖️",
     "title": "Back to decimal with place values",
     "text": "Each place is worth a power of the base. In binary the places are 8, 4, 2, 1 from the left: 1101 = 8 + 4 + 0 + 1 = 13. In hex the places are 256, 16, 1: 2F = 2 × 16 + 15 = 47."
    },
    {
     "icon": "🧩",
     "title": "Binary, octal and hex shortcuts",
     "text": "One hex digit is exactly 4 bits, and one octal digit is exactly 3 bits. So group binary from the right: 1111 1010 = FA in hex, and 011 111 010 = 372 in octal. This is why hex is used for colours (#FF0000 is red) and memory addresses."
    },
    {
     "icon": "🔤",
     "title": "Character codes: ASCII, EBCDIC, BCD",
     "text": "Text is stored as numbers using a coding scheme. ASCII gives each character a code (A = 65, a = 97, 0 = 48). EBCDIC is an older scheme used on IBM mainframes. BCD (binary-coded decimal) stores each decimal digit in its own 4 bits: 59 becomes 0101 1001. Unicode extends ASCII to cover every language, including emoji."
    }
   ],
   "listen": [
    "Computers use binary; people use decimal; programmers also use octal and hex.",
    "Hex digits go from 0 to 9, then A to F, where F means fifteen.",
    "To convert decimal to binary, keep dividing by two and read the remainders upwards.",
    "Binary place values are 8, 4, 2 and 1, doubling each time.",
    "One hex digit is four bits, and one octal digit is three bits.",
    "ASCII codes the capital letter A as 65.",
    "BCD stores each decimal digit in its own four bits."
   ],
   "video": {
    "id": "USCBCmwMCDA",
    "title": "How Computers Work: Binary & Data",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Convert like a computer",
    "steps": [
     "Convert your age and the day of the month you were born into binary, then into hex.",
     "Use the explainer above to build the ASCII code for the first letter of your name."
    ],
    "question": "Your age in binary and in hex.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "What is decimal 13 in binary?",
        "options": [
         "1011",
         "1101",
         "1110",
         "1001"
        ],
        "answer": 1,
        "why": "13 = 8 + 4 + 1, so the 8, 4 and 1 places are on: 1101."
       },
       {
        "q": "What is binary 1010 in decimal?",
        "options": [
         "5",
         "10",
         "12",
         "1010"
        ],
        "answer": 1,
        "why": "1010 = 8 + 0 + 2 + 0 = 10."
       },
       {
        "q": "What is hexadecimal FF in decimal?",
        "options": [
         "15",
         "99",
         "200",
         "255"
        ],
        "answer": 3,
        "why": "F = 15, so FF = 15 × 16 + 15 = 255, the largest value one byte can hold."
       },
       {
        "q": "What is decimal 59 in BCD?",
        "options": [
         "0011 1011",
         "0101 1001",
         "1001 0101",
         "0111 0011"
        ],
        "answer": 1,
        "why": "BCD codes each digit separately: 5 = 0101 and 9 = 1001."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Which number system is each value written in?",
      "buckets": [
       "Binary",
       "Octal",
       "Hexadecimal"
      ],
      "items": [
       {
        "t": "1011 0110",
        "b": 0
       },
       {
        "t": "3F",
        "b": 2
       },
       {
        "t": "0x1A",
        "b": 2
       },
       {
        "t": "0b101",
        "b": 0
       },
       {
        "t": "0o17",
        "b": 1
       },
       {
        "t": "A9",
        "b": 2
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is the base of the hexadecimal system?",
     "options": [
      "2",
      "8",
      "10",
      "16"
     ],
     "a": 3,
     "why": "Hex has sixteen digits: 0–9 and A–F."
    },
    {
     "q": "In hexadecimal, what value does the digit C stand for?",
     "options": [
      "11",
      "12",
      "13",
      "14"
     ],
     "a": 1,
     "why": "A = 10, B = 11, C = 12, up to F = 15."
    },
    {
     "q": "What is binary 1111 in decimal?",
     "options": [
      "4",
      "11",
      "15",
      "16"
     ],
     "a": 2,
     "why": "8 + 4 + 2 + 1 = 15."
    },
    {
     "q": "How many bits does one hexadecimal digit represent?",
     "options": [
      "2",
      "3",
      "4",
      "8"
     ],
     "a": 2,
     "why": "Four bits give 16 combinations (0000 to 1111), exactly one hex digit."
    },
    {
     "q": "What is octal 17 in decimal?",
     "options": [
      "17",
      "15",
      "7",
      "23"
     ],
     "a": 1,
     "why": "Octal places are 8 and 1: 1 × 8 + 7 = 15."
    },
    {
     "q": "Which digits are allowed in octal?",
     "options": [
      "0 to 7",
      "0 to 8",
      "0 and 1",
      "0 to 9 and A to F"
     ],
     "a": 0,
     "why": "Base 8 needs eight digits, 0 through 7."
    },
    {
     "q": "In ASCII, what is the code for capital A?",
     "options": [
      "1",
      "48",
      "65",
      "97"
     ],
     "a": 2,
     "why": "Capital A is 65; small a is 97, which is why \"A\" and \"a\" are different to a computer."
    },
    {
     "q": "Binary 1111 1010 written in hex is...",
     "options": [
      "AF",
      "FA",
      "F0",
      "15 10"
     ],
     "a": 1,
     "why": "Split into 4-bit groups: 1111 = F and 1010 = A, giving FA."
    },
    {
     "q": "Which coding scheme stores each decimal digit in its own 4 bits?",
     "options": [
      "ASCII",
      "EBCDIC",
      "BCD",
      "HTML"
     ],
     "a": 2,
     "why": "Binary-coded decimal keeps digits separate, which suits displays and calculators."
    },
    {
     "q": "Why do programmers use hexadecimal?",
     "options": [
      "Computers store data in hex",
      "It is a short, readable way to write long binary numbers",
      "It is faster than binary",
      "It only works for colours"
     ],
     "a": 1,
     "why": "Computers still store binary; hex just makes it four times shorter for people to read."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 1.1 Data Representation",
   "explainer": "bits"
  },
  {
   "track": "senior11",
   "id": "s11-binarith",
   "code": "S14",
   "name": "Binary Arithmetic",
   "part": "Signed numbers, addition and subtraction",
   "read": [
    {
     "icon": "➕",
     "title": "Adding in binary",
     "text": "Binary addition has four rules: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1), and 1 + 1 + 1 = 11 (write 1, carry 1). Add column by column from the right, just like decimal: 0101 + 0011 = 1000, which is 5 + 3 = 8."
    },
    {
     "icon": "🔓",
     "title": "Unsigned numbers",
     "text": "An unsigned number has no sign, so it can only be zero or positive. With 8 bits, unsigned values run from 0 (0000 0000) to 255 (1111 1111). If a result needs more bits than you have, it overflows and the answer is wrong."
    },
    {
     "icon": "±",
     "title": "Sign and magnitude",
     "text": "To store negative numbers, one simple method uses the leftmost bit as a sign: 0 for positive, 1 for negative. In 8 bits, +5 is 0000 0101 and −5 is 1000 0101. The problem: it has two zeros (+0 and −0), and adding signed numbers this way does not work directly."
    },
    {
     "icon": "🔁",
     "title": "One's and two's complement",
     "text": "One's complement makes a number negative by flipping every bit: +5 = 0000 0101 becomes 1111 1010. Two's complement flips every bit and then adds 1: −5 = 1111 1011. Two's complement has only one zero, and computers use it because ordinary addition then works for negative numbers too. With 8 bits it covers −128 to +127."
    },
    {
     "icon": "➖",
     "title": "Subtracting by adding",
     "text": "Computers subtract by adding the two's complement. To work out 7 − 5: write +7 as 0000 0111 and −5 as 1111 1011, then add them, giving 1 0000 0010. Drop the extra carry on the left and the answer is 0000 0010, which is 2. One adding circuit can do both jobs."
    }
   ],
   "listen": [
    "In binary, one plus one is one-zero: write zero and carry one.",
    "Unsigned eight-bit numbers go from zero to two hundred and fifty-five.",
    "Sign and magnitude uses the first bit as the sign, but it has two zeros.",
    "One's complement flips every bit.",
    "Two's complement flips every bit, then adds one.",
    "Eight-bit two's complement covers minus one hundred and twenty-eight to plus one hundred and twenty-seven.",
    "Computers subtract by adding the two's complement."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Work it out by hand",
    "steps": [
     "Add 0110 + 0111 in binary and check your answer in decimal.",
     "Write −12 in 8-bit sign and magnitude, one's complement and two's complement."
    ],
    "question": "Your three ways of writing −12.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "What is 0101 + 0011 in binary?",
        "options": [
         "0110",
         "1000",
         "0111",
         "1100"
        ],
        "answer": 1,
        "why": "5 + 3 = 8, and 8 in binary is 1000. Work right to left: 1+1 = 10, carry 1; 0+1+1 = 10, carry 1; 1+0+1 = 10, carry 1; 0+0+1 = 1."
       },
       {
        "q": "What is −5 in 8-bit two's complement?",
        "options": [
         "1000 0101",
         "1111 1010",
         "1111 1011",
         "0000 0101"
        ],
        "answer": 2,
        "why": "+5 is 0000 0101. Flip the bits (1111 1010), then add 1: 1111 1011."
       },
       {
        "q": "What is −5 in 8-bit one's complement?",
        "options": [
         "1000 0101",
         "1111 1010",
         "1111 1011",
         "0111 1010"
        ],
        "answer": 1,
        "why": "One's complement just flips every bit of +5 (0000 0101)."
       },
       {
        "q": "What is the largest unsigned 8-bit number?",
        "options": [
         "127",
         "128",
         "255",
         "256"
        ],
        "answer": 2,
        "why": "1111 1111 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255."
       }
      ]
     },
     {
      "type": "order",
      "label": "Put the steps for finding −6 in two's complement (8 bits) in order.",
      "items": [
       {
        "t": "Write +6 in binary: 0000 0110",
        "note": "Start from the positive number."
       },
       {
        "t": "Flip every bit: 1111 1001",
        "note": "This is the one's complement."
       },
       {
        "t": "Add 1: 1111 1010",
        "note": "This is the two's complement, −6."
       },
       {
        "t": "Check: 0000 0110 + 1111 1010 = 1 0000 0000; drop the carry and you get 0",
        "note": "A number plus its negative is zero, so the answer is right."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "In binary, 1 + 1 equals...",
     "options": [
      "2",
      "10",
      "11",
      "0"
     ],
     "a": 1,
     "why": "Binary has no digit 2, so 1 + 1 = 10: write 0 and carry 1."
    },
    {
     "q": "In binary, 1 + 1 + 1 equals...",
     "options": [
      "10",
      "11",
      "111",
      "3"
     ],
     "a": 1,
     "why": "That's 3 in decimal, which is 11 in binary: write 1 and carry 1."
    },
    {
     "q": "In sign and magnitude, what does the leftmost bit show?",
     "options": [
      "Whether the number is positive or negative",
      "The largest digit",
      "Whether there was a carry",
      "The parity"
     ],
     "a": 0,
     "why": "0 means positive and 1 means negative; the other bits hold the size."
    },
    {
     "q": "Why do computers prefer two's complement?",
     "options": [
      "It uses fewer bits",
      "It has one zero, and normal addition works for negative numbers",
      "It only stores positive numbers",
      "It is easier to read"
     ],
     "a": 1,
     "why": "One adding circuit can handle positive and negative numbers, and subtraction too."
    },
    {
     "q": "What is the range of 8-bit two's complement?",
     "options": [
      "0 to 255",
      "−128 to +127",
      "−127 to +127",
      "−255 to +255"
     ],
     "a": 1,
     "why": "There is one more negative number than positive, because zero takes one of the non-negative patterns."
    },
    {
     "q": "How does a computer usually work out A − B?",
     "options": [
      "With a separate subtracting circuit only",
      "By adding A to the two's complement of B",
      "By flipping A",
      "By dividing"
     ],
     "a": 1,
     "why": "Adding the two's complement of B gives the same result as subtracting B."
    },
    {
     "q": "What problem does sign and magnitude have?",
     "options": [
      "It cannot store positive numbers",
      "It has two zeros, +0 and −0",
      "It needs 16 bits",
      "It only works in hex"
     ],
     "a": 1,
     "why": "0000 0000 and 1000 0000 both mean zero, which wastes a pattern and complicates maths."
    },
    {
     "q": "What is overflow?",
     "options": [
      "A result that is too big to fit in the available bits",
      "A spilled drink on the keyboard",
      "A very small number",
      "Adding zero"
     ],
     "a": 0,
     "why": "For example, 200 + 100 in unsigned 8 bits needs 9 bits, so the stored answer is wrong."
    },
    {
     "q": "Flip all bits of 0000 1100. What do you get?",
     "options": [
      "0000 1100",
      "1111 0011",
      "1111 0100",
      "1100 0000"
     ],
     "a": 1,
     "why": "Every 0 becomes 1 and every 1 becomes 0. That is the one's complement of +12."
    },
    {
     "q": "What is 0110 + 0111 in binary?",
     "options": [
      "1100",
      "1101",
      "1111",
      "1011"
     ],
     "a": 1,
     "why": "6 + 7 = 13, which is 1101 in binary."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 1.2 Binary Arithmetic Operations",
   "explainer": ""
  },
  {
   "track": "senior11",
   "id": "s11-gates",
   "code": "S15",
   "name": "Logic Gates",
   "part": "Gates, truth tables and Boolean expressions",
   "read": [
    {
     "icon": "🚦",
     "title": "What a logic gate is",
     "text": "A logic gate is a tiny electronic circuit that takes one or more inputs, each 0 (off) or 1 (on), and gives one output. Gates are built from transistors, and billions of them inside a CPU make every decision a computer takes."
    },
    {
     "icon": "✳️",
     "title": "AND, OR, NOT",
     "text": "AND gives 1 only when all inputs are 1, like a lift that moves only when the door is closed AND a button is pressed. OR gives 1 when at least one input is 1. NOT has one input and flips it: 1 becomes 0 and 0 becomes 1."
    },
    {
     "icon": "🔄",
     "title": "NAND, NOR, XOR, XNOR",
     "text": "NAND is NOT AND: it gives 0 only when all inputs are 1. NOR is NOT OR: it gives 1 only when all inputs are 0. XOR (exclusive OR) gives 1 when the inputs are different. XNOR gives 1 when they are the same. NAND and NOR are called universal gates, because any other gate can be built from them alone."
    },
    {
     "icon": "📋",
     "title": "Truth tables",
     "text": "A truth table lists every possible input combination and the output for each. Two inputs give 4 rows (00, 01, 10, 11); three inputs give 8 rows. It is the clearest way to describe exactly what a gate or circuit does."
    },
    {
     "icon": "✍️",
     "title": "Boolean expressions",
     "text": "Gates can be written as Boolean algebra: A · B (or AB) for A AND B, A + B for A OR B, Ā (A with a bar, also written A′) for NOT A, and A ⊕ B for XOR. So Q = Ā · B means \"output Q is 1 when A is 0 AND B is 1\"."
    }
   ],
   "listen": [
    "A logic gate takes inputs of zero or one and gives a single output.",
    "AND needs all inputs on; OR needs at least one.",
    "NOT flips its input.",
    "NAND and NOR are the opposites of AND and OR, and they can build any other gate.",
    "XOR is on when the inputs differ; XNOR when they match.",
    "A truth table lists every input combination and its output.",
    "In Boolean algebra, a dot means AND, a plus means OR, and a bar means NOT."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Gates in real life",
    "steps": [
     "Use the explainer above: test each gate with all four input combinations and write its truth table.",
     "Find one real-life example of an AND decision and one of an OR decision at home or school."
    ],
    "question": "Your two real-life examples, and which gate each one matches.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "A = 1, B = 1. What does an XOR gate output?",
        "options": [
         "1",
         "0"
        ],
        "answer": 1,
        "why": "XOR gives 1 only when the inputs are different; here they are the same."
       },
       {
        "q": "A = 0, B = 0. What does a NOR gate output?",
        "options": [
         "1",
         "0"
        ],
        "answer": 0,
        "why": "NOR is NOT OR. 0 OR 0 = 0, and NOT 0 = 1."
       },
       {
        "q": "A = 1, B = 1. What does a NAND gate output?",
        "options": [
         "1",
         "0"
        ],
        "answer": 1,
        "why": "NAND is NOT AND. 1 AND 1 = 1, and NOT 1 = 0. It is the only case where NAND gives 0."
       },
       {
        "q": "Which gate gives 1 when at least one input is 1?",
        "options": [
         "AND",
         "OR",
         "NOR",
         "XNOR"
        ],
        "answer": 1,
        "why": "OR needs any one input on."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Match each description to its gate.",
      "buckets": [
       "AND",
       "OR",
       "NOT",
       "XOR"
      ],
      "items": [
       {
        "t": "Output is 1 only when both inputs are 1",
        "b": 0
       },
       {
        "t": "Flips the single input",
        "b": 2
       },
       {
        "t": "Output is 1 when the inputs are different",
        "b": 3
       },
       {
        "t": "Output is 1 if any input is 1",
        "b": 1
       },
       {
        "t": "Written as A · B",
        "b": 0
       },
       {
        "t": "Written as A + B",
        "b": 1
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "How many rows does a truth table for 3 inputs have?",
     "options": [
      "3",
      "6",
      "8",
      "9"
     ],
     "a": 2,
     "why": "Each input doubles the rows: 2 × 2 × 2 = 8."
    },
    {
     "q": "Which gate has only one input?",
     "options": [
      "AND",
      "XOR",
      "NOT",
      "NAND"
     ],
     "a": 2,
     "why": "NOT simply flips one input."
    },
    {
     "q": "What is the output of AND when A = 1 and B = 0?",
     "options": [
      "1",
      "0"
     ],
     "a": 1,
     "why": "AND needs every input to be 1."
    },
    {
     "q": "Why are NAND and NOR called universal gates?",
     "options": [
      "They are used in every country",
      "Any other gate can be built using only NAND (or only NOR) gates",
      "They have the most inputs",
      "They never output 0"
     ],
     "a": 1,
     "why": "Chip makers can build whole circuits from one type of gate, which simplifies manufacturing."
    },
    {
     "q": "In Boolean algebra, A + B means...",
     "options": [
      "A plus B in arithmetic",
      "A OR B",
      "A AND B",
      "NOT A"
     ],
     "a": 1,
     "why": "In Boolean algebra, + stands for OR and the dot stands for AND."
    },
    {
     "q": "XNOR outputs 1 when...",
     "options": [
      "The inputs are different",
      "The inputs are the same",
      "Both inputs are 0 only",
      "Never"
     ],
     "a": 1,
     "why": "XNOR is NOT XOR, so it is on for matching inputs (00 or 11)."
    },
    {
     "q": "A lift should move only if the door is closed AND a floor button is pressed. Which gate fits?",
     "options": [
      "AND",
      "OR",
      "NOT",
      "XOR"
     ],
     "a": 0,
     "why": "Both conditions must be true at the same time."
    },
    {
     "q": "A = 0. What is NOT A?",
     "options": [
      "0",
      "1"
     ],
     "a": 1,
     "why": "NOT flips the input."
    },
    {
     "q": "Logic gates inside a chip are built from...",
     "options": [
      "Vacuum tubes",
      "Transistors",
      "Magnets",
      "Batteries"
     ],
     "a": 1,
     "why": "Modern chips pack billions of tiny transistor switches to make gates."
    },
    {
     "q": "What does a truth table show?",
     "options": [
      "The cost of a circuit",
      "The output for every possible combination of inputs",
      "How hot a chip gets",
      "Only the inputs"
     ],
     "a": 1,
     "why": "Listing every combination leaves no case undescribed."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 1.3 Logic Gates",
   "explainer": "logic-gates"
  },
  {
   "track": "senior11",
   "id": "s11-circuits",
   "code": "S16",
   "name": "Logic Circuits",
   "part": "Combining gates to solve problems",
   "read": [
    {
     "icon": "🔗",
     "title": "From gates to circuits",
     "text": "A logic circuit joins gates together so the output of one gate becomes the input of another. With a few gates you can describe real rules, like \"sound the alarm if the system is armed AND a door OR a window opens\"."
    },
    {
     "icon": "🚨",
     "title": "A burglar alarm circuit",
     "text": "Let A = the alarm is armed, D = a door is open, W = a window is open. The rule is: Alarm = A AND (D OR W), written A · (D + W). An OR gate combines D and W, and its output goes into an AND gate together with A."
    },
    {
     "icon": "✍️",
     "title": "Boolean expressions from circuits",
     "text": "To find a circuit's expression, start at the inputs and write each gate's output in turn. An OR gate fed by D and W gives D + W. That goes into an AND gate with A, giving A · (D + W). Brackets show which part is worked out first."
    },
    {
     "icon": "📋",
     "title": "Truth tables for circuits",
     "text": "Evaluate the expression for every input combination. For A · (D + W): with A = 0 the output is always 0, so a disarmed alarm stays quiet. With A = 1 the output is 1 if D or W is 1. Three inputs give 8 rows to check."
    },
    {
     "icon": "➕",
     "title": "The half adder",
     "text": "Gates can also do maths. A half adder adds two bits: Sum = A XOR B, and Carry = A AND B. With A = 1 and B = 1: Sum = 0 and Carry = 1, giving 10, which is 2 in binary. Chain these together and you get the adders inside every CPU."
    }
   ],
   "listen": [
    "A logic circuit feeds the output of one gate into another.",
    "An alarm rule can be: armed AND, door OR window.",
    "That is written A dot, bracket, D plus W.",
    "Work out a circuit's expression gate by gate, from the inputs to the output.",
    "A truth table checks the circuit for every input combination.",
    "A half adder uses XOR for the sum and AND for the carry.",
    "Chains of adders are how the CPU does arithmetic."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Design a circuit",
    "steps": [
     "Use the explainer above: switch the alarm inputs on and off and fill in the 8-row truth table.",
     "Design a circuit for a security light: the light turns on when it is dark AND motion is detected. Write its Boolean expression."
    ],
    "question": "Your security-light expression, and one row of its truth table.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Alarm = A · (D + W). The alarm is armed (A = 1), the door is shut (D = 0) and a window is open (W = 1). Does it sound?",
        "options": [
         "Yes, output 1",
         "No, output 0"
        ],
        "answer": 0,
        "why": "D + W = 0 + 1 = 1, then A · 1 = 1 · 1 = 1."
       },
       {
        "q": "Same circuit: A = 0, D = 1, W = 1. Does it sound?",
        "options": [
         "Yes, output 1",
         "No, output 0"
        ],
        "answer": 1,
        "why": "Whatever the door and window do, A = 0 makes the AND gate output 0. A disarmed alarm stays quiet."
       },
       {
        "q": "A half adder gets A = 1 and B = 0. What are Sum and Carry?",
        "options": [
         "Sum 1, Carry 0",
         "Sum 0, Carry 1",
         "Sum 1, Carry 1",
         "Sum 0, Carry 0"
        ],
        "answer": 0,
        "why": "Sum = 1 XOR 0 = 1, Carry = 1 AND 0 = 0. That's 1 + 0 = 1."
       },
       {
        "q": "Which expression means \"Q is 1 when A is 1 and B is 0\"?",
        "options": [
         "A + B",
         "A · B̄",
         "Ā · B",
         "A ⊕ B̄"
        ],
        "answer": 1,
        "why": "B̄ (NOT B) is 1 exactly when B is 0, and the dot means AND."
       }
      ]
     },
     {
      "type": "order",
      "label": "Put the steps for analysing a logic circuit in order.",
      "items": [
       {
        "t": "Label every input (for example A, D, W)",
        "note": "Know what each input stands for."
       },
       {
        "t": "Write the output expression of the first gate(s) next to the inputs",
        "note": "For example, the OR gate gives D + W."
       },
       {
        "t": "Feed that into the next gate and write the full expression",
        "note": "For example, A · (D + W)."
       },
       {
        "t": "Build a truth table with every input combination",
        "note": "Three inputs need 8 rows."
       },
       {
        "t": "Check the table against the real-life rule",
        "note": "Make sure the circuit does what the problem asks."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is a logic circuit?",
     "options": [
      "A single transistor",
      "Gates connected so one gate's output feeds another",
      "A type of cable",
      "A program"
     ],
     "a": 1,
     "why": "Combining gates lets a circuit carry out more complex rules."
    },
    {
     "q": "For Q = A · (B + C), what is Q when A = 1, B = 0, C = 0?",
     "options": [
      "1",
      "0"
     ],
     "a": 1,
     "why": "B + C = 0, and 1 · 0 = 0."
    },
    {
     "q": "For Q = A + B · C, what is Q when A = 0, B = 1, C = 1?",
     "options": [
      "1",
      "0"
     ],
     "a": 0,
     "why": "AND is worked out before OR: B · C = 1, then 0 + 1 = 1."
    },
    {
     "q": "In a half adder, which gate gives the Sum?",
     "options": [
      "AND",
      "OR",
      "XOR",
      "NOT"
     ],
     "a": 2,
     "why": "The sum bit is 1 when exactly one input is 1, which is what XOR does."
    },
    {
     "q": "In a half adder, which gate gives the Carry?",
     "options": [
      "AND",
      "OR",
      "XOR",
      "NOR"
     ],
     "a": 0,
     "why": "You only carry when both bits are 1."
    },
    {
     "q": "How many rows does a truth table need for a circuit with 4 inputs?",
     "options": [
      "4",
      "8",
      "16",
      "32"
     ],
     "a": 2,
     "why": "2 × 2 × 2 × 2 = 16 combinations."
    },
    {
     "q": "In A · (D + W), why are the brackets there?",
     "options": [
      "For decoration",
      "To show that D + W is worked out first",
      "To show NOT",
      "To show the inputs are equal"
     ],
     "a": 1,
     "why": "Without brackets, AND would be done before OR, which would change the meaning."
    },
    {
     "q": "A school bell should ring when it is break time AND it is NOT a weekend. Which gate turns \"weekend\" into \"not weekend\"?",
     "options": [
      "AND",
      "OR",
      "NOT",
      "XOR"
     ],
     "a": 2,
     "why": "A NOT gate flips the weekend signal; its output then goes into an AND gate with \"break time\"."
    },
    {
     "q": "What is the main use of a truth table when designing a circuit?",
     "options": [
      "To check the circuit gives the right output in every case",
      "To decide the colour of the wires",
      "To count the transistors",
      "To measure the voltage"
     ],
     "a": 0,
     "why": "Checking every combination catches mistakes before the circuit is built."
    },
    {
     "q": "A half adder adds 1 + 1. What do Carry and Sum show?",
     "options": [
      "Carry 0, Sum 0",
      "Carry 0, Sum 1",
      "Carry 1, Sum 0",
      "Carry 1, Sum 1"
     ],
     "a": 2,
     "why": "1 + 1 = 10 in binary: carry 1, sum 0."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 1.4 Logic Circuits",
   "explainer": "logic-circuit"
  },
  {
   "track": "senior11",
   "id": "s11-protocols",
   "code": "S17",
   "name": "Network Standards & Protocols",
   "part": "TCP/IP, OSI and encapsulation",
   "read": [
    {
     "icon": "📏",
     "title": "Why standards exist",
     "text": "Standards are agreed specifications that let equipment from different makers work together. IEEE writes standards such as 802.3 (Ethernet) and 802.11 (Wi-Fi). The IETF publishes the internet's protocols. ISO created the OSI model. Because of standards, any phone can join any Wi-Fi network."
    },
    {
     "icon": "📜",
     "title": "Common protocols",
     "text": "HTTP and HTTPS load web pages (HTTPS is the encrypted version). SMTP sends email; POP3 and IMAP collect it. FTP transfers files. DNS turns names into IP addresses. DHCP gives devices an IP address automatically when they join a network. TCP delivers data reliably and in order; UDP is faster but doesn't guarantee delivery, which suits video calls."
    },
    {
     "icon": "🧱",
     "title": "The TCP/IP model",
     "text": "The internet follows the four-layer TCP/IP model. Application: the protocols apps use (HTTP, SMTP, DNS). Transport: TCP or UDP split data into segments and use port numbers to reach the right app. Internet: IP addresses and routes packets across networks. Network access: sends frames over the actual medium, such as Ethernet or Wi-Fi."
    },
    {
     "icon": "🏢",
     "title": "The OSI model",
     "text": "OSI describes networking in seven layers: 7 Application, 6 Presentation (formats and encryption), 5 Session (manages conversations), 4 Transport, 3 Network, 2 Data link (frames and MAC addresses), 1 Physical (bits on the wire). OSI's top three layers map to TCP/IP's Application layer, and its bottom two to Network access."
    },
    {
     "icon": "📦",
     "title": "Encapsulation and decapsulation",
     "text": "When you send data, each layer wraps it with its own header on the way down: data becomes a segment (transport), then a packet (internet), then a frame (network access), then bits on the wire. The receiver unwraps the layers in reverse on the way up. This is called decapsulation."
    }
   ],
   "listen": [
    "Standards let equipment from different makers work together.",
    "IEEE 802.11 is Wi-Fi, and 802.3 is Ethernet.",
    "HTTP loads pages, SMTP sends email, DNS finds addresses, and DHCP hands them out.",
    "TCP is reliable and ordered; UDP is fast but makes no promises.",
    "TCP/IP has four layers: application, transport, internet and network access.",
    "OSI has seven layers, from physical up to application.",
    "Each layer adds a header going down, and removes it coming up."
   ],
   "video": {
    "id": "5o8CwafCxnU",
    "title": "The Internet: IP Addresses & DNS",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Inspect a real network",
    "steps": [
     "On a computer, run ipconfig (Windows) or ifconfig (Mac or Linux) and find your IP address, subnet mask and default gateway.",
     "On a phone, open Wi-Fi settings: find the IP address that DHCP assigned and whether it uses 802.11n, ac or ax (if shown)."
    ],
    "question": "Your IP address and default gateway, and which protocol gave you that address.",
    "tasks": [
     {
      "type": "sort",
      "label": "Which TCP/IP layer does each one belong to?",
      "buckets": [
       "Application",
       "Transport",
       "Internet",
       "Network access"
      ],
      "items": [
       {
        "t": "HTTP",
        "b": 0
       },
       {
        "t": "TCP",
        "b": 1
       },
       {
        "t": "IP",
        "b": 2
       },
       {
        "t": "Ethernet frames",
        "b": 3
       },
       {
        "t": "DNS",
        "b": 0
       },
       {
        "t": "UDP",
        "b": 1
       },
       {
        "t": "Wi-Fi (802.11) radio signals",
        "b": 3
       }
      ]
     },
     {
      "type": "order",
      "label": "Put the OSI layers in order, from layer 1 (bottom) to layer 7 (top).",
      "items": [
       {
        "t": "Physical",
        "note": "Bits as electrical, light or radio signals."
       },
       {
        "t": "Data link",
        "note": "Frames and MAC addresses on the local network."
       },
       {
        "t": "Network",
        "note": "IP addresses and routing between networks."
       },
       {
        "t": "Transport",
        "note": "TCP or UDP, ports, reliable delivery."
       },
       {
        "t": "Session",
        "note": "Starts, manages and ends conversations."
       },
       {
        "t": "Presentation",
        "note": "Formats, compresses and encrypts data."
       },
       {
        "t": "Application",
        "note": "The protocols apps use, such as HTTP."
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which protocol gives your phone an IP address automatically when it joins Wi-Fi?",
        "options": [
         "DNS",
         "DHCP",
         "SMTP",
         "FTP"
        ],
        "answer": 1,
        "why": "DHCP (Dynamic Host Configuration Protocol) leases addresses so you don't have to set them by hand."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What does a network standard do?",
     "options": [
      "Makes the internet slower",
      "Lets equipment from different makers work together",
      "Charges devices",
      "Blocks all traffic"
     ],
     "a": 1,
     "why": "Agreed specifications mean any compliant device can talk to any other."
    },
    {
     "q": "Which IEEE standard is Wi-Fi?",
     "options": [
      "802.3",
      "802.11",
      "802.1",
      "404"
     ],
     "a": 1,
     "why": "The 802.11 family (n, ac, ax and so on) defines wireless LANs; 802.3 is wired Ethernet."
    },
    {
     "q": "Which protocol sends email?",
     "options": [
      "SMTP",
      "HTTP",
      "DHCP",
      "FTP"
     ],
     "a": 0,
     "why": "SMTP sends mail between servers; POP3 or IMAP fetch it into your inbox."
    },
    {
     "q": "Why would a video call use UDP instead of TCP?",
     "options": [
      "UDP is more secure",
      "Speed matters more than resending a lost packet",
      "TCP cannot carry video",
      "UDP uses no IP address"
     ],
     "a": 1,
     "why": "A late, resent frame is useless in a live call, so UDP's speed wins."
    },
    {
     "q": "How many layers does the TCP/IP model have?",
     "options": [
      "3",
      "4",
      "5",
      "7"
     ],
     "a": 1,
     "why": "Application, transport, internet and network access."
    },
    {
     "q": "Which OSI layer handles IP addresses and routing?",
     "options": [
      "Data link",
      "Network",
      "Session",
      "Physical"
     ],
     "a": 1,
     "why": "Layer 3 (network) moves packets between networks using IP addresses."
    },
    {
     "q": "What is encapsulation?",
     "options": [
      "Deleting old data",
      "Each layer adding its own header as data goes down the layers",
      "Encrypting a password",
      "Storing data in a capsule"
     ],
     "a": 1,
     "why": "Headers carry what each layer needs, such as ports, IP addresses and MAC addresses."
    },
    {
     "q": "At the transport layer, what directs data to the right application?",
     "options": [
      "The MAC address",
      "A port number",
      "The screen size",
      "The IP address only"
     ],
     "a": 1,
     "why": "Ports (like 443 for HTTPS) tell the computer which app should receive the data."
    },
    {
     "q": "Which OSI layer formats and encrypts data?",
     "options": [
      "Physical",
      "Transport",
      "Presentation",
      "Network"
     ],
     "a": 2,
     "why": "Layer 6 (presentation) handles formats, compression and encryption."
    },
    {
     "q": "What does the receiving computer do in decapsulation?",
     "options": [
      "Removes each layer's header on the way up",
      "Adds more headers",
      "Sends the data back",
      "Turns the data into light"
     ],
     "a": 0,
     "why": "Each layer reads and strips its header, until the app gets the original data."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 2.1 Computer Network Standards and Protocols",
   "explainer": "dns-lookup"
  },
  {
   "track": "senior11",
   "id": "s11-netsec",
   "code": "S18",
   "name": "Network Security",
   "part": "Threats and controls",
   "read": [
    {
     "icon": "🔺",
     "title": "The CIA triad",
     "text": "Network security protects three things. Confidentiality: only authorised people can read the data. Integrity: data is not changed without permission. Availability: systems and data are there when they are needed. Every threat attacks at least one of these, and every control protects at least one."
    },
    {
     "icon": "⚠️",
     "title": "Common threats",
     "text": "Malware: viruses, worms, trojans and ransomware, which locks files for payment. Phishing tricks people into giving away passwords or PINs. Denial of service (DoS, or DDoS from many machines) floods a service until it stops. Eavesdropping, or man-in-the-middle, intercepts data, often on open Wi-Fi. Weak passwords and careless insiders cause many breaches too."
    },
    {
     "icon": "🛡️",
     "title": "Technical controls",
     "text": "A firewall filters traffic using rules, blocking what isn't allowed. An intrusion detection system (IDS) watches for attack patterns and raises alerts. Encryption scrambles data so only the right key can read it: HTTPS for websites, WPA2 or WPA3 for Wi-Fi. Antivirus and anti-malware find and remove malicious software."
    },
    {
     "icon": "🔑",
     "title": "Access control",
     "text": "Give each user their own account with only the access they need (least privilege). Require strong passwords, and add multi-factor authentication, such as a code sent to your phone. Remove accounts when people leave. Keep server rooms and network equipment physically locked."
    },
    {
     "icon": "🔎",
     "title": "Keeping it secure",
     "text": "Install software updates promptly; they patch known weaknesses. Back up important data, offline or in a separate place, so ransomware can't hold you hostage. Audit and review logs to spot unusual activity. Train users to recognise phishing. In Kenya, the Computer Misuse and Cybercrimes Act (2018) makes unauthorised access to computer systems a crime."
    }
   ],
   "listen": [
    "Security protects confidentiality, integrity and availability: the CIA triad.",
    "Threats include malware, phishing, denial of service and eavesdropping.",
    "A firewall filters traffic; an IDS watches for attacks.",
    "Encryption, like HTTPS and WPA3, keeps data private.",
    "Give each user only the access they need, with strong passwords and multi-factor authentication.",
    "Update software, back up data, and review the logs.",
    "Kenya's Computer Misuse and Cybercrimes Act makes unauthorised access a crime."
   ],
   "video": {
    "id": "ZghMPWGXexs",
    "title": "The Internet: Encryption & Public Keys",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Secure a network",
    "steps": [
     "Check your home or school Wi-Fi settings (with permission): is it using WPA2 or WPA3, and has the router's default admin password been changed?",
     "Write three password rules you would set for your school's computers, and explain which part of the CIA triad each protects."
    ],
    "question": "Your three password rules, and what each protects.",
    "tasks": [
     {
      "type": "sort",
      "label": "Which part of the CIA triad does each attack mainly hit?",
      "buckets": [
       "Confidentiality",
       "Integrity",
       "Availability"
      ],
      "items": [
       {
        "t": "A hacker reads students' private records",
        "b": 0
       },
       {
        "t": "Someone secretly changes exam marks in the database",
        "b": 1
       },
       {
        "t": "A DDoS attack takes the school website offline",
        "b": 2
       },
       {
        "t": "Passwords are captured on open Wi-Fi",
        "b": 0
       },
       {
        "t": "Ransomware locks every file on the server",
        "b": 2
       },
       {
        "t": "A virus alters files without permission",
        "b": 1
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which control blocks unwanted network traffic using rules?",
        "options": [
         "Firewall",
         "Backup",
         "Printer",
         "Router admin page"
        ],
        "answer": 0,
        "why": "A firewall checks traffic against rules and blocks what isn't allowed."
       },
       {
        "q": "Your school's files are hit by ransomware. What lets you recover without paying?",
        "options": [
         "A faster computer",
         "Recent backups kept offline or separately",
         "A new password",
         "Turning off Wi-Fi"
        ],
        "answer": 1,
        "why": "Separate backups let you restore files; ransomware can't encrypt what it can't reach."
       },
       {
        "q": "An email from \"Admin\" asks you to reply with your password to keep your account. What is this?",
        "options": [
         "A system update",
         "Phishing",
         "Encryption",
         "A firewall alert"
        ],
        "answer": 1,
        "why": "Real administrators never ask for your password. Report it instead of replying."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What does the \"I\" in the CIA triad stand for?",
     "options": [
      "Internet",
      "Integrity",
      "Information",
      "Inspection"
     ],
     "a": 1,
     "why": "Integrity means data is accurate and only changed by authorised people."
    },
    {
     "q": "A DDoS attack mainly harms...",
     "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Encryption"
     ],
     "a": 2,
     "why": "Flooding a service with traffic stops genuine users from reaching it."
    },
    {
     "q": "What does an intrusion detection system (IDS) do?",
     "options": [
      "Encrypts files",
      "Monitors traffic for signs of attack and raises alerts",
      "Assigns IP addresses",
      "Charges batteries"
     ],
     "a": 1,
     "why": "An IDS spots suspicious patterns so administrators can respond quickly."
    },
    {
     "q": "Which Wi-Fi security setting is strongest?",
     "options": [
      "Open (no password)",
      "WEP",
      "WPA3",
      "Hidden network name only"
     ],
     "a": 2,
     "why": "WPA3 is the newest Wi-Fi encryption standard; WEP is broken, and hiding the name gives no real protection."
    },
    {
     "q": "What is least privilege?",
     "options": [
      "Giving users only the access they need for their job",
      "Giving everyone administrator rights",
      "Using the cheapest equipment",
      "Logging in as little as possible"
     ],
     "a": 0,
     "why": "Less access means less damage if an account is misused or stolen."
    },
    {
     "q": "Multi-factor authentication means...",
     "options": [
      "Using a longer password",
      "Needing two or more proofs of identity, such as a password and a phone code",
      "Logging in from many devices",
      "Sharing a password with a friend"
     ],
     "a": 1,
     "why": "A stolen password alone isn't enough to get in."
    },
    {
     "q": "Why install software updates promptly?",
     "options": [
      "They change the wallpaper",
      "They patch known security weaknesses",
      "They delete old files",
      "They are required to switch on"
     ],
     "a": 1,
     "why": "Attackers target weaknesses that have already been published; updates close them."
    },
    {
     "q": "Which threat pretends to be a useful program but does harm?",
     "options": [
      "Worm",
      "Trojan",
      "Firewall",
      "Backup"
     ],
     "a": 1,
     "why": "Like the wooden horse of the story, a trojan hides its harmful purpose inside something that looks useful."
    },
    {
     "q": "What law in Kenya covers unauthorised access to computer systems?",
     "options": [
      "The Traffic Act",
      "The Computer Misuse and Cybercrimes Act (2018)",
      "The Copyright Act only",
      "There is no such law"
     ],
     "a": 1,
     "why": "The 2018 Act makes offences like unauthorised access and interference with computer systems crimes."
    },
    {
     "q": "Why review and audit logs?",
     "options": [
      "To make the network faster",
      "To spot unusual activity and investigate incidents",
      "To print reports for fun",
      "To replace the firewall"
     ],
     "a": 1,
     "why": "Logs show who did what and when, which reveals attacks and misuse."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 2.2 Network Security",
   "explainer": ""
  },
  {
   "track": "senior11",
   "id": "s11-oop",
   "code": "S19",
   "name": "Object-Oriented Concepts",
   "part": "Classes, objects and the four principles",
   "read": [
    {
     "icon": "🧭",
     "title": "Two ways to organise programs",
     "text": "Procedural programming organises a program as a sequence of functions that act on data. Object-oriented programming (OOP) bundles the data and the functions that use it into objects, modelled on real things: a student, a bank account, a matatu. Large programs are easier to manage and reuse this way. Java, C++, C# and Python all support OOP."
    },
    {
     "icon": "🧱",
     "title": "Classes and objects",
     "text": "A class is a blueprint; an object is one thing built from it. The Student class describes what every student has (attributes such as name and admission number) and can do (methods such as enrol() and pay_fees()). Amani and Wanjiru are two different objects of that one class, each with their own values."
    },
    {
     "icon": "🔒",
     "title": "Encapsulation and abstraction",
     "text": "Encapsulation bundles data and methods together and hides the inner details, so the data can only be changed through the object's own methods. A bank balance should change only through deposit() and withdraw(). Abstraction shows only what users need: you call send_money() without seeing all the steps inside."
    },
    {
     "icon": "🧬",
     "title": "Inheritance and polymorphism",
     "text": "Inheritance lets a new class reuse an existing one: Teacher and Student can both inherit name and phone from a Person class, then add their own features. Polymorphism means one method name behaves differently for each class: area() works out a circle's area one way and a rectangle's another way."
    },
    {
     "icon": "🗂️",
     "title": "UML class diagrams",
     "text": "Programmers plan classes with UML (Unified Modelling Language) class diagrams: a box in three parts, holding the class name, its attributes, and its methods. Symbols show visibility: + for public, − for private, # for protected. An arrow with a hollow triangle points from a child class to its parent."
    }
   ],
   "listen": [
    "OOP bundles data and the functions that use it into objects.",
    "A class is a blueprint; an object is one thing made from it.",
    "Attributes describe an object; methods are what it can do.",
    "Encapsulation hides an object's data behind its methods.",
    "Abstraction shows only what the user needs.",
    "Inheritance reuses a parent class; polymorphism lets one method act differently.",
    "UML class diagrams show the class name, attributes and methods."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Model your school",
    "steps": [
     "Pick three things at school (for example Student, Teacher, Classroom) and list two attributes and two methods for each.",
     "Draw a UML class diagram for one of them, using + and − for public and private."
    ],
    "question": "Your class, with its attributes and methods.",
    "tasks": [
     {
      "type": "sort",
      "label": "Is each one a class or an object?",
      "buckets": [
       "Class",
       "Object"
      ],
      "items": [
       {
        "t": "Student (the blueprint)",
        "b": 0
       },
       {
        "t": "Amani, admission number 1021",
        "b": 1
       },
       {
        "t": "Matatu",
        "b": 0
       },
       {
        "t": "The matatu with plate KDA 123A",
        "b": 1
       },
       {
        "t": "BankAccount",
        "b": 0
       },
       {
        "t": "Wanjiru's savings account",
        "b": 1
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "A balance can only change through deposit() and withdraw(). Which principle is this?",
        "options": [
         "Encapsulation",
         "Inheritance",
         "Polymorphism",
         "Compilation"
        ],
        "answer": 0,
        "why": "Hiding the data and allowing changes only through the object's methods is encapsulation."
       },
       {
        "q": "Teacher and Student both reuse name and phone from a Person class. Which principle is this?",
        "options": [
         "Abstraction",
         "Inheritance",
         "Encapsulation",
         "Iteration"
        ],
        "answer": 1,
        "why": "Child classes inherit attributes and methods from a parent class."
       },
       {
        "q": "Circle.area() and Rectangle.area() calculate in different ways. Which principle is this?",
        "options": [
         "Encapsulation",
         "Inheritance",
         "Polymorphism",
         "Abstraction"
        ],
        "answer": 2,
        "why": "Polymorphism means \"many forms\": one method name, behaving differently for each class."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is a class?",
     "options": [
      "A blueprint that describes attributes and methods",
      "One specific object",
      "A type of loop",
      "A database table only"
     ],
     "a": 0,
     "why": "Objects are created from a class, the way houses are built from one plan."
    },
    {
     "q": "What is an object?",
     "options": [
      "A blueprint",
      "One instance created from a class, with its own values",
      "A function",
      "A comment"
     ],
     "a": 1,
     "why": "Each object has the class's attributes, but with its own values."
    },
    {
     "q": "Which describes what an object can DO?",
     "options": [
      "Attributes",
      "Methods",
      "Parameters only",
      "Comments"
     ],
     "a": 1,
     "why": "Methods are functions that belong to the object."
    },
    {
     "q": "Abstraction means...",
     "options": [
      "Copying a class",
      "Showing only the essential features and hiding complex details",
      "Making everything public",
      "Deleting objects"
     ],
     "a": 1,
     "why": "Users get a simple interface without needing to know how it works inside."
    },
    {
     "q": "In a UML class diagram, what does − before an attribute mean?",
     "options": [
      "Public",
      "Private",
      "Protected",
      "Deleted"
     ],
     "a": 1,
     "why": "+ is public, − is private and # is protected."
    },
    {
     "q": "Which is an advantage of OOP?",
     "options": [
      "Programs need no testing",
      "Code is easier to reuse and maintain in large programs",
      "It always runs faster",
      "It needs no classes"
     ],
     "a": 1,
     "why": "Objects group related code, and inheritance lets you reuse what exists."
    },
    {
     "q": "Which language does NOT support object-oriented programming?",
     "options": [
      "Java",
      "Python",
      "C++",
      "Plain machine code"
     ],
     "a": 3,
     "why": "Classes and objects are high-level ideas; machine code is just CPU instructions."
    },
    {
     "q": "Inheritance creates a relationship between...",
     "options": [
      "A parent class and a child class",
      "Two unrelated variables",
      "A loop and a function",
      "A file and a folder"
     ],
     "a": 0,
     "why": "The child class gets the parent's features and can add or change its own."
    },
    {
     "q": "Polymorphism literally means...",
     "options": [
      "Many classes",
      "Many forms",
      "Hidden data",
      "One method only"
     ],
     "a": 1,
     "why": "From Greek: \"poly\" means many and \"morph\" means form."
    },
    {
     "q": "How does procedural programming differ from OOP?",
     "options": [
      "Procedural uses objects; OOP doesn't",
      "Procedural organises code as functions acting on data; OOP bundles data and methods into objects",
      "They are exactly the same",
      "OOP has no functions"
     ],
     "a": 1,
     "why": "Both are valid; OOP models real-world things as objects."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 3.1 Object Oriented Programming (OOP) Concepts",
   "explainer": ""
  },
  {
   "track": "senior11",
   "id": "s11-oopimpl",
   "code": "S20",
   "name": "OOP in Python",
   "part": "Writing classes, objects and class relationships",
   "read": [
    {
     "icon": "✍️",
     "title": "Declaring a class",
     "text": "In Python, a class starts with class Student: and its methods go indented underneath. The special method __init__ is the constructor: it runs when a new object is made and sets its starting attributes, for example self.name = name. self means \"this particular object\"."
    },
    {
     "icon": "🆕",
     "title": "Creating and using objects",
     "text": "s = Student(\"Amani\", 1021) creates an object and calls __init__ for you. Use a dot to reach its parts: s.name gives \"Amani\", and s.greet() calls a method. Each object keeps its own attribute values, so another Student(\"Wanjiru\", 1022) has a different name."
    },
    {
     "icon": "📌",
     "title": "Instance and class (static) variables",
     "text": "Instance variables belong to one object (self.name). Class variables are shared by every object of the class, declared directly inside the class: school = \"Kenya High\". Java and C++ call these static variables. Change a class variable and every object sees the new value."
    },
    {
     "icon": "👁️",
     "title": "Visibility",
     "text": "Java and C++ use the keywords public, private and protected to control who can use an attribute. Python uses naming conventions instead: name is public, _name means protected (for this class and its children), and __name means private, and Python hides it from outside code. Good programs keep data private and expose methods."
    },
    {
     "icon": "🔗",
     "title": "Relationships between classes",
     "text": "Inheritance: class Teacher(Person): makes Teacher a kind of Person (an \"is-a\" link). Association: a Teacher teaches Students, but each exists separately. Aggregation: a Department has Teachers, who could exist without it. Composition: a House has Rooms that cannot exist without the house; delete the house and the rooms go too."
    }
   ],
   "listen": [
    "A class starts with the word class, and its methods are indented underneath.",
    "The constructor, underscore underscore init, sets up each new object.",
    "self means this particular object.",
    "Instance variables belong to one object; class variables are shared by all.",
    "Python marks protected with one underscore and private with two.",
    "class Teacher(Person) means Teacher inherits from Person.",
    "Association uses, aggregation has, and composition owns completely."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Code a class",
    "steps": [
     "If you can, open Python and write a BankAccount class with a balance, a deposit(amount) method, and a withdraw(amount) method that refuses to go below zero.",
     "Create two accounts, deposit into one, and print both balances to show that each object keeps its own data."
    ],
    "question": "Your BankAccount class, or how you planned it.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which method is Python's constructor?",
        "options": [
         "start()",
         "__init__",
         "main()",
         "new()"
        ],
        "answer": 1,
        "why": "__init__ runs automatically when an object is created and sets its starting values."
       },
       {
        "q": "s = Student(\"Amani\", 1021). What does s.name give, if __init__ stores self.name = name?",
        "options": [
         "Amani",
         "1021",
         "Student",
         "self"
        ],
        "answer": 0,
        "why": "The constructor saved the first argument in the object's name attribute."
       },
       {
        "q": "In Python, how do you mark an attribute as private?",
        "options": [
         "One underscore: _balance",
         "Two underscores: __balance",
         "Capital letters: BALANCE",
         "The word private"
        ],
        "answer": 1,
        "why": "Two leading underscores make Python hide the name from outside the class."
       },
       {
        "q": "A House has Rooms that are destroyed when the house is destroyed. Which relationship is this?",
        "options": [
         "Association",
         "Aggregation",
         "Composition",
         "Inheritance"
        ],
        "answer": 2,
        "why": "In composition the parts' lives depend on the whole."
       }
      ]
     },
     {
      "type": "order",
      "label": "Put the steps of creating and using an object in order.",
      "items": [
       {
        "t": "Define the class: class Student:",
        "note": "The blueprint comes first."
       },
       {
        "t": "Write the constructor __init__(self, name, adm) to set attributes",
        "note": "It stores self.name and self.adm."
       },
       {
        "t": "Create an object: s = Student(\"Amani\", 1021)",
        "note": "Python runs __init__ for you."
       },
       {
        "t": "Use the object: print(s.name) or s.greet()",
        "note": "Reach attributes and methods with a dot."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What does self refer to inside a method?",
     "options": [
      "The class name",
      "The particular object the method is working on",
      "The programmer",
      "The whole program"
     ],
     "a": 1,
     "why": "self lets each object reach its own attributes."
    },
    {
     "q": "How do you call the greet method of object s?",
     "options": [
      "greet.s()",
      "s.greet()",
      "s->greet",
      "call greet(s)"
     ],
     "a": 1,
     "why": "Python uses a dot: object.method()."
    },
    {
     "q": "A class variable is...",
     "options": [
      "Different for every object",
      "Shared by all objects of the class",
      "Only used in loops",
      "Always private"
     ],
     "a": 1,
     "why": "It is declared in the class body, not on self, so every object sees one value."
    },
    {
     "q": "What does class Teacher(Person): mean?",
     "options": [
      "Teacher contains a Person attribute",
      "Teacher inherits from Person",
      "Person inherits from Teacher",
      "Teacher and Person are unrelated"
     ],
     "a": 1,
     "why": "The parent class goes in the brackets."
    },
    {
     "q": "In Python, one leading underscore (_name) signals...",
     "options": [
      "Public",
      "Protected, for use within the class and its children",
      "A constant",
      "A syntax error"
     ],
     "a": 1,
     "why": "It's a convention telling other programmers not to use it from outside."
    },
    {
     "q": "Which keyword do Java and C++ use for attributes anyone may access?",
     "options": [
      "public",
      "private",
      "protected",
      "static"
     ],
     "a": 0,
     "why": "Public members can be used from anywhere; private ones only inside the class."
    },
    {
     "q": "A Department has Teachers who can still exist if the department closes. Which relationship is this?",
     "options": [
      "Composition",
      "Aggregation",
      "Inheritance",
      "Encapsulation"
     ],
     "a": 1,
     "why": "Aggregation is \"has-a\" where the parts can exist on their own."
    },
    {
     "q": "When does __init__ run?",
     "options": [
      "When the program ends",
      "Automatically, whenever a new object is created",
      "Only when you call it by name",
      "Never"
     ],
     "a": 1,
     "why": "Creating Student(\"Amani\", 1021) calls __init__ with those values."
    },
    {
     "q": "Why keep attributes private and expose methods?",
     "options": [
      "It makes code shorter",
      "It protects data from being changed in invalid ways",
      "Python requires it",
      "It uses less memory"
     ],
     "a": 1,
     "why": "A withdraw() method can refuse a negative balance; direct access can't."
    },
    {
     "q": "Two objects a and b are made from the same class. If a.name changes, what happens to b.name?",
     "options": [
      "It changes too",
      "Nothing; each object has its own instance variables",
      "It is deleted",
      "It becomes a class variable"
     ],
     "a": 1,
     "why": "Instance variables are stored separately in each object."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 3.2 Object Oriented Programming Implementation",
   "explainer": ""
  },
  {
   "track": "senior11",
   "id": "s11-db",
   "code": "S21",
   "name": "Relational Databases",
   "part": "Tables, keys and relationships",
   "read": [
    {
     "icon": "🗃️",
     "title": "Databases and the DBMS",
     "text": "Data is raw facts (85, \"Amani\"); information is data with meaning (\"Amani scored 85 in Maths\"). A database is an organised collection of related data. A database management system (DBMS), such as MySQL, PostgreSQL, Microsoft Access or Oracle, lets you create, store, search and secure it. Metadata (stored in a data dictionary) is data about the data, such as each field's name and type."
    },
    {
     "icon": "🌳",
     "title": "Database models",
     "text": "Hierarchical databases store data as a tree (one parent, many children). Network databases allow many links between records. Relational databases, the most common today, store data in tables that are linked by shared values. Object-oriented databases store data as objects, like OOP programs."
    },
    {
     "icon": "📊",
     "title": "Tables, records and fields",
     "text": "In a relational database each table holds one entity, such as Students. Each row is a record (one student), and each column is a field or attribute (name, admission number, class). Every field has a data type: text, integer, decimal, date or yes/no."
    },
    {
     "icon": "🔑",
     "title": "Keys",
     "text": "A primary key uniquely identifies each record, such as an admission number; it can never be blank or repeated. A foreign key is a field in one table that refers to the primary key of another, which is how tables link. A composite key combines two or more fields to be unique. A secondary key is used for searching, such as a surname."
    },
    {
     "icon": "🔗",
     "title": "Relationships and ER diagrams",
     "text": "Tables relate one-to-one (a student has one ID card), one-to-many (one class has many students) or many-to-many (students take many subjects, and each subject has many students). A many-to-many link needs a linking table. An entity-relationship (ER) diagram plans all this: rectangles for entities, ovals for attributes, diamonds for relationships."
    }
   ],
   "listen": [
    "Data is raw facts; information is data with meaning.",
    "A DBMS such as MySQL creates, stores and secures databases.",
    "Relational databases store data in linked tables.",
    "A row is a record, and a column is a field.",
    "A primary key uniquely identifies each record; a foreign key links to another table.",
    "Relationships can be one-to-one, one-to-many or many-to-many.",
    "ER diagrams use rectangles for entities and diamonds for relationships."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Design a school database",
    "steps": [
     "Design two tables, Students and Classes: list the fields, their data types, the primary key of each, and the foreign key that links them.",
     "Draw an ER diagram showing that one class has many students."
    ],
    "question": "Your two tables, with their keys.",
    "tasks": [
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which field makes the best primary key for a Students table?",
        "options": [
         "First name",
         "Admission number",
         "Favourite subject",
         "Age"
        ],
        "answer": 1,
        "why": "A primary key must be unique and never blank; names and ages repeat."
       },
       {
        "q": "The Students table has a field class_id that matches the primary key of the Classes table. What is class_id in Students?",
        "options": [
         "A primary key",
         "A foreign key",
         "A composite key",
         "Metadata"
        ],
        "answer": 1,
        "why": "A foreign key refers to another table's primary key, which links the tables."
       },
       {
        "q": "One class has many students, but each student is in one class. Which relationship is this?",
        "options": [
         "One-to-one",
         "One-to-many",
         "Many-to-many",
         "No relationship"
        ],
        "answer": 1,
        "why": "One class row links to many student rows."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Sort these database terms.",
      "buckets": [
       "Structure",
       "Key",
       "Relationship"
      ],
      "items": [
       {
        "t": "Table",
        "b": 0
       },
       {
        "t": "Record (row)",
        "b": 0
       },
       {
        "t": "Field (column)",
        "b": 0
       },
       {
        "t": "Primary key",
        "b": 1
       },
       {
        "t": "Foreign key",
        "b": 1
       },
       {
        "t": "One-to-many",
        "b": 2
       },
       {
        "t": "Many-to-many",
        "b": 2
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What is a DBMS?",
     "options": [
      "Software for creating, storing, searching and securing databases",
      "A type of cable",
      "A single table",
      "A spreadsheet formula"
     ],
     "a": 0,
     "why": "Examples include MySQL, PostgreSQL, Microsoft Access and Oracle."
    },
    {
     "q": "In a table, a row is called a...",
     "options": [
      "Field",
      "Record",
      "Key",
      "Model"
     ],
     "a": 1,
     "why": "Each row holds all the data about one item, such as one student."
    },
    {
     "q": "What is metadata?",
     "options": [
      "Very large data",
      "Data about data, such as field names and types",
      "Deleted data",
      "Encrypted data"
     ],
     "a": 1,
     "why": "Metadata describes the structure, and is often stored in a data dictionary."
    },
    {
     "q": "Which database model stores data in linked tables?",
     "options": [
      "Hierarchical",
      "Network",
      "Relational",
      "Paper-based"
     ],
     "a": 2,
     "why": "Relational databases use tables linked by keys."
    },
    {
     "q": "Which is true of a primary key?",
     "options": [
      "It can repeat",
      "It can be left blank",
      "It is unique for every record and never blank",
      "It must be text"
     ],
     "a": 2,
     "why": "Uniqueness lets the database find exactly one record."
    },
    {
     "q": "What is a composite key?",
     "options": [
      "Two or more fields that are unique together",
      "A key made of letters only",
      "A foreign key",
      "A password"
     ],
     "a": 0,
     "why": "For example, student ID plus subject ID identifies one exam result."
    },
    {
     "q": "How is a many-to-many relationship stored?",
     "options": [
      "In one table",
      "With a linking table between the two tables",
      "It cannot be stored",
      "In a spreadsheet"
     ],
     "a": 1,
     "why": "A linking table (such as Enrolments) holds pairs of foreign keys."
    },
    {
     "q": "In an ER diagram, a rectangle represents...",
     "options": [
      "An entity",
      "A relationship",
      "An attribute",
      "A key only"
     ],
     "a": 0,
     "why": "Rectangles are entities, ovals are attributes and diamonds are relationships."
    },
    {
     "q": "What is the difference between data and information?",
     "options": [
      "There is none",
      "Information is processed data that has meaning",
      "Data has meaning; information doesn't",
      "Information is always numbers"
     ],
     "a": 1,
     "why": "\"85\" is data; \"Amani scored 85 in Maths\" is information."
    },
    {
     "q": "What is a secondary key used for?",
     "options": [
      "Uniquely identifying records",
      "Searching and sorting by another field, such as surname",
      "Encrypting data",
      "Linking to the internet"
     ],
     "a": 1,
     "why": "Secondary keys speed up common searches but don't have to be unique."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 3.3 Relational Database Fundamentals",
   "explainer": ""
  },
  {
   "track": "senior11",
   "id": "s11-sql",
   "code": "S22",
   "name": "SQL",
   "part": "Structured Query Language",
   "read": [
    {
     "icon": "💬",
     "title": "What SQL is",
     "text": "SQL (Structured Query Language) is the standard language for working with relational databases. Many DBMSs use it, each with small differences: MySQL, PostgreSQL, SQLite, Oracle and Microsoft SQL Server. SQL statements are grouped by job: DDL defines structure, DML changes data, and DQL asks questions."
    },
    {
     "icon": "🏗️",
     "title": "DDL: defining structure",
     "text": "CREATE TABLE students (adm INT PRIMARY KEY, name VARCHAR(50), grade INT); builds a new table. ALTER TABLE changes it, for example to add a column. DROP TABLE deletes a whole table and all its data. Use DROP with great care: there is no undo."
    },
    {
     "icon": "✏️",
     "title": "DML: changing data",
     "text": "INSERT INTO students VALUES (1021, 'Amani', 11); adds a row. UPDATE students SET grade = 12 WHERE adm = 1021; changes matching rows. DELETE FROM students WHERE adm = 1021; removes them. Always include WHERE with UPDATE and DELETE; without it, every row changes or disappears."
    },
    {
     "icon": "🔍",
     "title": "DQL: asking questions",
     "text": "SELECT name, grade FROM students; lists those columns for every row. SELECT * picks all columns. WHERE filters rows (WHERE grade = 11), ORDER BY sorts (ORDER BY name), and GROUP BY groups rows for summaries, such as SELECT grade, COUNT(*) FROM students GROUP BY grade; which counts the students in each grade."
    },
    {
     "icon": "🔗",
     "title": "Relationships in SQL",
     "text": "A FOREIGN KEY constraint links tables, so the database refuses a student whose class_id doesn't exist. A JOIN combines related tables in one query: SELECT students.name, classes.teacher FROM students JOIN classes ON students.class_id = classes.id; shows each student with their class teacher."
    }
   ],
   "listen": [
    "SQL is the standard language for relational databases.",
    "DDL defines structure: create, alter and drop.",
    "DML changes data: insert, update and delete.",
    "DQL asks questions with select.",
    "Always use where with update and delete, or every row is affected.",
    "order by sorts results; group by makes summaries like counts.",
    "A join combines related tables in one query."
   ],
   "video": {
    "id": "",
    "title": "",
    "channel": ""
   },
   "mission": {
    "title": "Query a database",
    "steps": [
     "If you can, open a free online SQL editor (search for \"SQLite online\"), create a students table, insert five students, and select those in grade 11.",
     "Write a query that counts how many students are in each grade."
    ],
    "question": "Your SELECT query for grade 11 students.",
    "tasks": [
     {
      "type": "sort",
      "label": "Is each statement DDL, DML or DQL?",
      "buckets": [
       "DDL",
       "DML",
       "DQL"
      ],
      "items": [
       {
        "t": "CREATE TABLE",
        "b": 0
       },
       {
        "t": "INSERT INTO",
        "b": 1
       },
       {
        "t": "SELECT",
        "b": 2
       },
       {
        "t": "DROP TABLE",
        "b": 0
       },
       {
        "t": "UPDATE",
        "b": 1
       },
       {
        "t": "DELETE FROM",
        "b": 1
       },
       {
        "t": "ALTER TABLE",
        "b": 0
       }
      ]
     },
     {
      "type": "typing",
      "label": "Type this SQL query exactly. It lists every column for every student.",
      "target": "SELECT * FROM students;"
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "What does DELETE FROM students; (with no WHERE) do?",
        "options": [
         "Deletes one row",
         "Deletes every row in the table",
         "Deletes the table's structure",
         "Nothing"
        ],
        "answer": 1,
        "why": "Without WHERE, the condition applies to all rows. The table remains, but empty."
       },
       {
        "q": "Which query lists the names of students in grade 11 only?",
        "options": [
         "SELECT name FROM students;",
         "SELECT name FROM students WHERE grade = 11;",
         "SELECT 11 FROM students;",
         "UPDATE students SET grade = 11;"
        ],
        "answer": 1,
        "why": "WHERE filters the rows; the last option would change data instead of reading it."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What does SQL stand for?",
     "options": [
      "Structured Query Language",
      "Simple Question Logic",
      "Server Quick Link",
      "System Quality Level"
     ],
     "a": 0,
     "why": "It's the standard language for querying and managing relational databases."
    },
    {
     "q": "Which statement adds a new row?",
     "options": [
      "SELECT",
      "UPDATE",
      "INSERT INTO",
      "CREATE TABLE"
     ],
     "a": 2,
     "why": "INSERT adds records; CREATE TABLE makes a new table."
    },
    {
     "q": "Which statement changes existing data?",
     "options": [
      "INSERT",
      "UPDATE",
      "DROP",
      "SELECT"
     ],
     "a": 1,
     "why": "UPDATE ... SET ... WHERE changes matching rows."
    },
    {
     "q": "Which statement removes a whole table and all its data?",
     "options": [
      "DELETE",
      "DROP TABLE",
      "ALTER TABLE",
      "CLEAR"
     ],
     "a": 1,
     "why": "DROP removes the structure too; DELETE only removes rows."
    },
    {
     "q": "What does SELECT * mean?",
     "options": [
      "Select the first row",
      "Select all columns",
      "Select nothing",
      "Select the primary key only"
     ],
     "a": 1,
     "why": "* is shorthand for every column."
    },
    {
     "q": "Which clause sorts the results?",
     "options": [
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "SORT"
     ],
     "a": 2,
     "why": "ORDER BY name sorts alphabetically; add DESC for reverse order."
    },
    {
     "q": "What does GROUP BY grade with COUNT(*) produce?",
     "options": [
      "Every student's name",
      "The number of students in each grade",
      "The total of all grades",
      "An error"
     ],
     "a": 1,
     "why": "GROUP BY puts rows into groups, and COUNT counts each group."
    },
    {
     "q": "What is a JOIN used for?",
     "options": [
      "Combining related rows from two or more tables",
      "Deleting tables",
      "Creating users",
      "Encrypting data"
     ],
     "a": 0,
     "why": "A JOIN matches rows using keys, such as students.class_id = classes.id."
    },
    {
     "q": "CREATE, ALTER and DROP belong to...",
     "options": [
      "DDL (Data Definition Language)",
      "DML",
      "DQL",
      "HTML"
     ],
     "a": 0,
     "why": "They define or change the structure, not the data inside."
    },
    {
     "q": "Why should UPDATE nearly always have a WHERE clause?",
     "options": [
      "It runs faster",
      "Without it, every row in the table is changed",
      "SQL requires it",
      "To sort the results"
     ],
     "a": 1,
     "why": "A missing WHERE is one of the most common and costly database mistakes."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 3.4 Structured Query Language (SQL)",
   "explainer": ""
  },
  {
   "track": "senior11",
   "id": "s11-web",
   "code": "S23",
   "name": "Web Development",
   "part": "HTML, CSS and dynamic web apps",
   "read": [
    {
     "icon": "🌐",
     "title": "Web words",
     "text": "A web page is one document; a website is a group of linked pages; a web application does work for the user, like booking a bus ticket. The web follows the client–server model: your browser (the client) asks a web server for a page using HTTP, and the server sends it back."
    },
    {
     "icon": "🧱",
     "title": "HTML: structure",
     "text": "HTML (HyperText Markup Language) gives a page its structure using tags in angle brackets. Every page has <html>, a <head> holding the <title>, and a <body> holding the content. Common tags: <h1> heading, <p> paragraph, <a href=\"...\"> link, <img src=\"...\" alt=\"...\"> image, <ul> and <li> lists, <table> tables, <form> and <input> for user input."
    },
    {
     "icon": "🎨",
     "title": "CSS: style",
     "text": "CSS (Cascading Style Sheets) controls how a page looks: colours, fonts, spacing and layout. Inline CSS goes in a tag's style attribute. Internal CSS goes in a <style> block in the head. External CSS lives in a separate .css file linked to many pages, which is the best way to keep a whole site consistent."
    },
    {
     "icon": "⚙️",
     "title": "Static and dynamic pages",
     "text": "A static page shows the same content to everyone, straight from a file. A dynamic page is built when you ask for it. Client-side scripts (JavaScript) run in your browser, for example checking a form. Server-side scripts (such as PHP) run on the server, often reading or saving data in a database."
    },
    {
     "icon": "🔄",
     "title": "A dynamic web app, end to end",
     "text": "A learner fills in a registration form and taps Submit. The browser sends the form to the server. A PHP script checks the data and saves it to a MySQL database with SQL. The server then sends back a confirmation page. Design first with a wireframe (a simple sketch of the layout), and add alt text so everyone can use the site."
    }
   ],
   "listen": [
    "A browser, the client, asks a web server for pages using HTTP.",
    "HTML gives a page its structure with tags.",
    "Every page has a head with a title, and a body with the content.",
    "CSS controls colours, fonts and layout.",
    "External CSS keeps a whole site looking consistent.",
    "JavaScript runs in the browser; PHP runs on the server.",
    "A dynamic app sends form data to a server script that saves it in a database."
   ],
   "video": {
    "id": "kBXQZMmiA4s",
    "title": "The Internet: HTTP & HTML",
    "channel": "Code.org"
   },
   "mission": {
    "title": "Build a page",
    "steps": [
     "If you can, open a text editor, write a page with a heading, a paragraph, a list and a link, save it as index.html, and open it in a browser.",
     "Add an external style.css file that changes the heading colour and the font."
    ],
    "question": "The HTML tags you used, and what each one does.",
    "tasks": [
     {
      "type": "order",
      "label": "Put the parts of a basic HTML page in order, from top to bottom.",
      "items": [
       {
        "t": "<!DOCTYPE html>",
        "note": "Tells the browser this is an HTML5 document."
       },
       {
        "t": "<html>",
        "note": "Opens the whole page."
       },
       {
        "t": "<head> with a <title>",
        "note": "Information about the page, shown in the browser tab."
       },
       {
        "t": "<body>",
        "note": "Everything visible on the page goes here."
       },
       {
        "t": "</html>",
        "note": "Closes the page."
       }
      ]
     },
     {
      "type": "sort",
      "label": "Does each one run in the browser (client) or on the server?",
      "buckets": [
       "Client side",
       "Server side"
      ],
      "items": [
       {
        "t": "JavaScript checking a form before it is sent",
        "b": 0
       },
       {
        "t": "PHP saving a registration to the database",
        "b": 1
       },
       {
        "t": "CSS styling the page",
        "b": 0
       },
       {
        "t": "A MySQL query that finds a user's bookings",
        "b": 1
       },
       {
        "t": "HTML being displayed",
        "b": 0
       }
      ]
     },
     {
      "type": "pick",
      "label": "",
      "rounds": [
       {
        "q": "Which tag makes a link?",
        "options": [
         "<img>",
         "<a href=\"...\">",
         "<link>",
         "<p>"
        ],
        "answer": 1,
        "why": "The a (anchor) tag with an href address makes a clickable link."
       },
       {
        "q": "Which kind of CSS keeps a whole website consistent most easily?",
        "options": [
         "Inline CSS in every tag",
         "Internal CSS on every page",
         "One external .css file linked to every page",
         "No CSS"
        ],
        "answer": 2,
        "why": "Change one file and every linked page updates."
       }
      ]
     }
    ]
   },
   "quiz": [
    {
     "q": "What does HTML stand for?",
     "options": [
      "HyperText Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Machine Language"
     ],
     "a": 0,
     "why": "It marks up content with tags so browsers know what each part is."
    },
    {
     "q": "Where does the <title> tag go?",
     "options": [
      "In the body",
      "In the head",
      "After </html>",
      "In the CSS file"
     ],
     "a": 1,
     "why": "The title is information about the page, shown in the browser tab."
    },
    {
     "q": "What is CSS used for?",
     "options": [
      "Storing data",
      "Controlling how a page looks",
      "Sending email",
      "Running the server"
     ],
     "a": 1,
     "why": "HTML gives structure; CSS adds style."
    },
    {
     "q": "What does the alt attribute on an image do?",
     "options": [
      "Makes the image bigger",
      "Gives a text description, for screen readers and when the image can't load",
      "Links the image",
      "Changes its colour"
     ],
     "a": 1,
     "why": "Alt text makes images accessible to blind users and helps search engines."
    },
    {
     "q": "What is the difference between a static and a dynamic page?",
     "options": [
      "A static page is the same for everyone; a dynamic page is built when requested",
      "Static pages have no text",
      "Dynamic pages cannot use HTML",
      "There is no difference"
     ],
     "a": 0,
     "why": "Dynamic pages can show your own data, such as your bookings."
    },
    {
     "q": "Where does PHP run?",
     "options": [
      "In the browser",
      "On the web server",
      "In the CSS file",
      "On the keyboard"
     ],
     "a": 1,
     "why": "PHP is server-side: it builds the page or saves data before the response is sent."
    },
    {
     "q": "In the client–server model, the browser is the...",
     "options": [
      "Client",
      "Server",
      "Database",
      "Router"
     ],
     "a": 0,
     "why": "The client asks for resources, and the server responds."
    },
    {
     "q": "Which tag starts a bulleted list?",
     "options": [
      "<ol>",
      "<ul>",
      "<li>",
      "<list>"
     ],
     "a": 1,
     "why": "ul is an unordered (bulleted) list; ol is numbered; li is each item."
    },
    {
     "q": "What is a wireframe?",
     "options": [
      "A network cable",
      "A simple sketch of a page's layout, drawn before building it",
      "A type of virus",
      "A CSS file"
     ],
     "a": 1,
     "why": "Wireframes let you plan the layout cheaply before writing any code."
    },
    {
     "q": "A learner submits a form, and the data is saved in MySQL. Which order is right?",
     "options": [
      "Database → browser → server",
      "Browser → server script → database",
      "CSS → HTML → PHP",
      "Server → keyboard → browser"
     ],
     "a": 1,
     "why": "The browser sends the form, the server script checks it and saves it to the database."
    }
   ],
   "cbe": "strand",
   "strandRef": "Grade 11 · 3.5 Web Development Fundamentals",
   "explainer": ""
  }
 ]
};
