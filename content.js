/* Soma Smart — free CBE digital-literacy course content.
 * Two tracks: 'primary' (Grade 4–6, ages ~8–10) and 'junior' (Grade 7–9, ages ~12–15).
 * Each module: read cards → listen (narrated) → watch (optional video) → mission → quiz.
 * Mastery levels (not prizes): new → learning → practised → mastered.
 * video.id = YouTube id ("" shows a friendly no-video screen). quiz 'a' = index of correct option.
 * Kenyan, practical references; light Kiswahili/Sheng. Verify technical facts before publishing.
 */
window.COURSE = {
 "title": "Soma Smart",
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
   "level": "Grade 4–6 · ages ~8–10",
   "blurb": "Start here. Learn what a computer is, how to use it, and how to stay safe online."
  },
  {
   "id": "junior",
   "name": "Computers & Networks",
   "level": "Grade 7–9 · ages ~12–15",
   "blurb": "Go deeper: inside the computer, how it runs fast, and how the whole internet connects."
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
    "id": "",
    "title": "",
    "channel": ""
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
   "strandRef": "Grade 4–6 · Digital devices & their parts"
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
      "target": "Soma Smart Kenya"
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
   "strandRef": "Grade 4–6 · Basic operations: mouse & keyboard"
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
   "strandRef": "Grade 4–6 · File handling / basic operations"
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
   "strandRef": "Grade 4–6 · Digital safety & responsible use"
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
    "id": "",
    "title": "",
    "channel": ""
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
   "strandRef": null
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
    "id": "",
    "title": "",
    "channel": ""
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
   "strandRef": "Grade 7–9 · Hardware basics: the motherboard & boot"
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
    "id": "",
    "title": "",
    "channel": ""
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
   "strandRef": null
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
   "strandRef": null
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
    "id": "",
    "title": "",
    "channel": ""
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
   "strandRef": "Grade 7–9 · Memory & storage basics"
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
   "strandRef": null
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
    "id": "",
    "title": "",
    "channel": ""
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
   "strandRef": "Grade 7–9 · Digital safety & security"
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
   "strandRef": null
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
    "id": "",
    "title": "",
    "channel": ""
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
   "strandRef": null
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
    "id": "",
    "title": "",
    "channel": ""
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
   "strandRef": "Grade 7–9 · Networks: device to server"
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
    "id": "",
    "title": "",
    "channel": ""
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
     "q": "In the URL 'https://soma-smart.pages.dev', which part is the Top-Level Domain (TLD)?",
     "options": [
      ".dev",
      "https",
      "soma-smart",
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
   "strandRef": "Grade 7–9 · How the web works: domains, DNS & HTTPS"
  }
 ]
};
