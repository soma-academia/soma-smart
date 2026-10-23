---
id: s11-netsec
track: senior11
code: S18
name: Network Security
part: Threats and controls
cbe: strand
strand: Grade 11 · 2.2 Network Security
video: ZghMPWGXexs
video_title: The Internet: Encryption & Public Keys
video_channel: Code.org
explainer:
---

# S18 · Network Security

## Read

### 🔺 The CIA triad

Network security protects three things. Confidentiality: only authorised people can read the data. Integrity: data is not changed without permission. Availability: systems and data are there when they are needed. Every threat attacks at least one of these, and every control protects at least one.

### ⚠️ Common threats

Malware: viruses, worms, trojans and ransomware, which locks files for payment. Phishing tricks people into giving away passwords or PINs (Personal Identification Numbers). Denial of service (DoS, or DDoS from many machines) floods a service until it stops. Eavesdropping, or man-in-the-middle, intercepts data, often on open Wi-Fi. Weak passwords and careless insiders cause many breaches too.

### 🛡️ Technical controls

A firewall filters traffic using rules, blocking what isn't allowed. An intrusion detection system (IDS) watches for attack patterns and raises alerts. Encryption scrambles data so only the right key can read it: HTTPS (HyperText Transfer Protocol Secure) for websites, WPA2 (Wi-Fi Protected Access 2) or WPA3 (Wi-Fi Protected Access 3) for Wi-Fi. Antivirus and anti-malware find and remove malicious software.

### 🔑 Access control

Give each user their own account with only the access they need (least privilege). Require strong passwords, and add multi-factor authentication, such as a code sent to your phone. Remove accounts when people leave. Keep server rooms and network equipment physically locked.

### 🔎 Keeping it secure

Install software updates promptly; they patch known weaknesses. Back up important data, offline or in a separate place, so ransomware can't hold you hostage. Audit and review logs to spot unusual activity. Train users to recognise phishing. In Kenya, the Computer Misuse and Cybercrimes Act (2018) makes unauthorised access to computer systems a crime.

## Listen

- Security protects confidentiality, integrity and availability: the CIA triad.
- Threats include malware, phishing, denial of service and eavesdropping.
- A firewall filters traffic; an IDS watches for attacks.
- Encryption, like HTTPS and WPA3, keeps data private.
- Give each user only the access they need, with strong passwords and multi-factor authentication.
- Update software, back up data, and review the logs.
- Kenya's Computer Misuse and Cybercrimes Act makes unauthorised access a crime.

## Mission: Secure a network

- Check your home or school Wi-Fi settings (with permission): is it using WPA2 or WPA3, and has the router's default admin password been changed?
- Write three password rules you would set for your school's computers, and explain which part of the CIA triad each protects.

Question: Your three password rules, and what each protects.

### Task: sort
Label: Which part of the CIA triad does each attack mainly hit?
Buckets: Confidentiality | Integrity | Availability
- A hacker reads students' private records → Confidentiality
- Someone secretly changes exam marks in the database → Integrity
- A DDoS attack takes the school website offline → Availability
- Passwords are captured on open Wi-Fi → Confidentiality
- Ransomware locks every file on the server → Availability
- A virus alters files without permission → Integrity

### Task: pick

#### Which control blocks unwanted network traffic using rules?
- [x] Firewall
- [ ] Backup
- [ ] Printer
- [ ] Router admin page
Why: A firewall checks traffic against rules and blocks what isn't allowed.

#### Your school's files are hit by ransomware. What lets you recover without paying?
- [ ] A faster computer
- [x] Recent backups kept offline or separately
- [ ] A new password
- [ ] Turning off Wi-Fi
Why: Separate backups let you restore files; ransomware can't encrypt what it can't reach.

#### An email from "Admin" asks you to reply with your password to keep your account. What is this?
- [ ] A system update
- [x] Phishing
- [ ] Encryption
- [ ] A firewall alert
Why: Real administrators never ask for your password. Report it instead of replying.

## Quiz

### What does the "I" in the CIA triad stand for?
- [ ] Internet
- [x] Integrity
- [ ] Information
- [ ] Inspection
Why: Integrity means data is accurate and only changed by authorised people.

### A DDoS attack mainly harms...
- [ ] Confidentiality
- [ ] Integrity
- [x] Availability
- [ ] Encryption
Why: Flooding a service with traffic stops genuine users from reaching it.

### What does an intrusion detection system (IDS) do?
- [ ] Encrypts files so stolen data cannot be read
- [x] Monitors traffic for signs of attack and raises alerts
- [ ] Gives each device on the network its own IP address
- [ ] Makes a nightly backup copy of every file on the server
Why: An IDS spots suspicious patterns so administrators can respond quickly.

### Which Wi-Fi security setting is strongest?
- [ ] Open (no password)
- [ ] WEP
- [x] WPA3
- [ ] Hidden network name only
Why: WPA3 is the newest Wi-Fi encryption standard; WEP is broken, and hiding the name gives no real protection.

### What is least privilege?
- [x] Giving users only the access they need for their job
- [ ] Giving every staff member administrator rights to save time
- [ ] Buying the cheapest network equipment that does the job
- [ ] Logging in as few times a day as possible
Why: Less access means less damage if an account is misused or stolen.

### Multi-factor authentication means...
- [ ] Using a longer password with numbers and symbols
- [x] Needing two or more separate proofs of identity
- [ ] Logging in to the same account from many devices
- [ ] Changing your password every time you log in
Why: A password plus a code sent to your phone means a stolen password alone isn't enough to get in.

### Why install software updates promptly?
- [ ] They change the look of the desktop and menus
- [x] They patch known security weaknesses
- [ ] They delete old files to free up storage space
- [ ] They are needed before the computer will switch on
Why: Attackers target weaknesses that have already been published; updates close them.

### Which threat pretends to be a useful program but does harm?
- [ ] Worm
- [x] Trojan
- [ ] Firewall
- [ ] Backup
Why: Like the wooden horse of the story, a trojan hides its harmful purpose inside something that looks useful.

### What law in Kenya covers unauthorised access to computer systems?
- [ ] The Copyright Act, which protects creative works
- [x] The Computer Misuse and Cybercrimes Act (2018)
- [ ] The Employment Act, which covers workers' rights
- [ ] No law; only each organisation's own rules apply
Why: The 2018 Act makes offences like unauthorised access and interference with computer systems crimes.

### Why review and audit logs?
- [ ] To make the network run faster by clearing old records
- [x] To spot unusual activity and investigate incidents
- [ ] To replace the firewall so it is no longer needed
- [ ] To keep a backup copy of every file on the server
Why: Logs show who did what and when, which reveals attacks and misuse.
