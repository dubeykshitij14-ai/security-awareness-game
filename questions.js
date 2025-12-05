// questions.js
// All 45 questions: Phishing (15), Password (15), Malware (15)

const QUESTIONS = {
  phishing: [
    {
      id: 1,
      difficulty: "easy",
      text: "Phishing is mainly used to:",
      options: [
        "Upgrade a system",
        "Steal sensitive information",
        "Clean malware",
        "Speed up network traffic"
      ],
      correctIndex: 1,
      explanation: "Phishing tricks users into giving passwords, bank details, OTPs, and other sensitive information."
    },
    {
      id: 2,
      difficulty: "easy",
      text: "The most common method used in phishing attacks is:",
      options: [
        "Phone calls",
        "Emails",
        "Meetings",
        "Posters"
      ],
      correctIndex: 1,
      explanation: "Email phishing is the most popular and widely used method."
    },
    {
      id: 3,
      difficulty: "easy",
      text: "A fake website that looks real is called:",
      options: [
        "Spoofing",
        "Blocking",
        "Filtering",
        "Mirroring"
      ],
      correctIndex: 0,
      explanation: "Spoofed websites mimic real ones to steal login data and other information."
    },
    {
      id: 4,
      difficulty: "easy",
      text: "A common sign of a phishing email is:",
      options: [
        "Perfect grammar",
        "Incorrect grammar and spelling",
        "Full contact details",
        "Verified signature"
      ],
      correctIndex: 1,
      explanation: "Many phishing emails contain spelling errors, poor grammar, and suspicious links."
    },
    {
      id: 5,
      difficulty: "easy",
      text: "“SMiShing” refers to:",
      options: [
        "Email phishing",
        "SMS-based phishing",
        "Voice phishing",
        "Social media phishing"
      ],
      correctIndex: 1,
      explanation: "SMiShing = SMS + Phishing. It uses text messages to trick users."
    },
    {
      id: 6,
      difficulty: "easy",
      text: "Vishing means phishing through:",
      options: [
        "Phone calls",
        "Video",
        "Websites",
        "USB devices"
      ],
      correctIndex: 0,
      explanation: "Vishing uses voice calls to trick victims into sharing information."
    },
    {
      id: 7,
      difficulty: "medium",
      text: "Spear phishing targets:",
      options: [
        "Everyone",
        "A specific person or group",
        "All bank customers",
        "Teenagers only"
      ],
      correctIndex: 1,
      explanation: "Spear phishing is personalized and targets specific individuals or groups."
    },
    {
      id: 8,
      difficulty: "medium",
      text: "Whaling attacks target:",
      options: [
        "Students",
        "Government only",
        "Senior executives (CEOs, CFOs)",
        "Hackers"
      ],
      correctIndex: 2,
      explanation: "Whaling targets high-level executives such as CEOs and CFOs."
    },
    {
      id: 9,
      difficulty: "medium",
      text: "Which email protocols help detect spoofing?",
      options: [
        "WPA & WEP",
        "SPF, DKIM, DMARC",
        "TCP & UDP",
        "SMTP only"
      ],
      correctIndex: 1,
      explanation: "SPF, DKIM, and DMARC help verify genuine senders and protect against fake emails."
    },
    {
      id: 10,
      difficulty: "medium",
      text: "Phishing emails often create a sense of:",
      options: [
        "Relaxation",
        "Urgency or fear",
        "Happiness",
        "Boredom"
      ],
      correctIndex: 1,
      explanation: "Attackers use urgency or fear such as “Account suspended!” to trick users."
    },
    {
      id: 11,
      difficulty: "medium",
      text: "Which of the following is NOT a type of phishing?",
      options: [
        "Vishing",
        "Smishing",
        "Whaling",
        "Data compression"
      ],
      correctIndex: 3,
      explanation: "Data compression is not related to phishing attacks."
    },
    {
      id: 12,
      difficulty: "medium",
      text: "The link in a phishing email usually redirects to:",
      options: [
        "A news page",
        "A fake login page",
        "A shopping website",
        "A real support page"
      ],
      correctIndex: 1,
      explanation: "Fake login pages are used to steal usernames and passwords."
    },
    {
      id: 13,
      difficulty: "hard",
      text: "Attackers gather personal information from social media mainly for:",
      options: [
        "Spear phishing",
        "Botnet attacks",
        "SQL injection",
        "Antivirus bypass"
      ],
      correctIndex: 0,
      explanation: "Spear-phishing attackers use personal info to make messages realistic and convincing."
    },
    {
      id: 14,
      difficulty: "hard",
      text: "Which of the following BEST prevents phishing?",
      options: [
        "Clicking all links",
        "Verifying email sender and domain",
        "Sharing OTPs",
        "Saving passwords everywhere"
      ],
      correctIndex: 1,
      explanation: "Always check the email domain, spelling, link preview, and sender identity before clicking."
    },
    {
      id: 15,
      difficulty: "hard",
      text: "Which combination BEST protects an organization from phishing?",
      options: [
        "Antivirus only",
        "Security awareness training + Email authentication + Filters",
        "Strong passwords only",
        "Turning off Wi-Fi"
      ],
      correctIndex: 1,
      explanation: "Effective phishing prevention needs user training, email authentication checks, and filtering."
    }
  ],

  password: [
    {
      id: 1,
      difficulty: "easy",
      text: "A strong password should contain:",
      options: [
        "Only letters",
        "Only numbers",
        "A mix of letters, numbers & symbols",
        "Only your name"
      ],
      correctIndex: 2,
      explanation: "Strong passwords use uppercase, lowercase, digits, and symbols."
    },
    {
      id: 2,
      difficulty: "easy",
      text: "Which of the following is the weakest password?",
      options: [
        "Password123",
        "K!t#2024",
        "R@nd0mP@ss",
        "G&hT9*W2"
      ],
      correctIndex: 0,
      explanation: "“Password123” is predictable and easily guessable."
    },
    {
      id: 3,
      difficulty: "easy",
      text: "A common method attackers use to crack weak passwords is called:",
      options: [
        "Browsing",
        "Brute force attack",
        "Copy-paste",
        "File sharing"
      ],
      correctIndex: 1,
      explanation: "Brute force tries thousands or millions of combinations until the password matches."
    },
    {
      id: 4,
      difficulty: "easy",
      text: "How often should you change important passwords?",
      options: [
        "Never",
        "Every 6–12 months",
        "Every day",
        "Once in 10 years"
      ],
      correctIndex: 1,
      explanation: "Regular updates help protect against leaked or exposed credentials."
    },
    {
      id: 5,
      difficulty: "easy",
      text: "What should you AVOID using as a password?",
      options: [
        "Your birthday",
        "Random characters",
        "Strong symbols",
        "Long phrases"
      ],
      correctIndex: 0,
      explanation: "Personal information like birthdays is easy for attackers to guess."
    },
    {
      id: 6,
      difficulty: "easy",
      text: "A password manager helps by:",
      options: [
        "Sharing passwords with friends",
        "Storing and generating strong passwords",
        "Making passwords shorter",
        "Disabling login pages"
      ],
      correctIndex: 1,
      explanation: "Password managers securely generate and store strong passwords."
    },
    {
      id: 7,
      difficulty: "medium",
      text: "Two-Factor Authentication (2FA) adds security by:",
      options: [
        "Asking for your favourite color",
        "Requiring username and password only",
        "Adding an extra verification step like OTP",
        "Allowing auto-login"
      ],
      correctIndex: 2,
      explanation: "2FA adds a second layer such as SMS OTP, authenticator app, or biometrics."
    },
    {
      id: 8,
      difficulty: "medium",
      text: "Which type of password is the MOST secure?",
      options: [
        "12345678",
        "Qwertyuiop",
        "MyDogTom2024!",
        "Tom123"
      ],
      correctIndex: 2,
      explanation: "It’s long, mixed, and not easily predictable."
    },
    {
      id: 9,
      difficulty: "medium",
      text: "Which technique guesses passwords using a list of commonly used passwords?",
      options: [
        "Dictionary attack",
        "DDoS attack",
        "MITM attack",
        "SQL Injection"
      ],
      correctIndex: 0,
      explanation: "A dictionary attack uses predefined wordlists of common passwords."
    },
    {
      id: 10,
      difficulty: "medium",
      text: "What is the best length for a strong password?",
      options: [
        "4–6 characters",
        "6–8 characters",
        "10–12 characters or more",
        "Exactly 5 characters"
      ],
      correctIndex: 2,
      explanation: "Longer passwords (10–12+ characters) take far more time to crack."
    },
    {
      id: 11,
      difficulty: "medium",
      text: "Which of these is a secure practice?",
      options: [
        "Using the same password everywhere",
        "Writing passwords on paper",
        "Sharing passwords with close friends",
        "Using unique passwords for every account"
      ],
      correctIndex: 3,
      explanation: "Unique passwords prevent multiple accounts from being compromised at once."
    },
    {
      id: 12,
      difficulty: "medium",
      text: "Which of the following is a passphrase?",
      options: [
        "xy#5",
        "12345abc",
        "SkyBlueForest*2024",
        "pass123"
      ],
      correctIndex: 2,
      explanation: "A passphrase uses long combinations of unrelated words and symbols."
    },
    {
      id: 13,
      difficulty: "hard",
      text: "What is “salting” in password security?",
      options: [
        "Encrypting network data packets",
        "Adding random data to passwords before hashing",
        "Saving passwords in plain text",
        "Making passwords shorter"
      ],
      correctIndex: 1,
      explanation: "Salt protects against rainbow table attacks by adding randomness before hashing."
    },
    {
      id: 14,
      difficulty: "hard",
      text: "Which hashing algorithm is MOST recommended for storing passwords?",
      options: [
        "MD5",
        "SHA-1",
        "bcrypt / Argon2",
        "ROT13"
      ],
      correctIndex: 2,
      explanation: "bcrypt and Argon2 are slow, secure, and designed specifically for password hashing."
    },
    {
      id: 15,
      difficulty: "hard",
      text: "A system that locks a user out after several failed attempts is protecting against:",
      options: [
        "Malware infection",
        "Brute-force attacks",
        "Device overheating",
        "Network delay"
      ],
      correctIndex: 1,
      explanation: "Account lockout policies reduce the chance of successful brute-force password guessing."
    }
  ],

  malware: [
    {
      id: 1,
      difficulty: "easy",
      text: "Malware is short for:",
      options: [
        "Malfunction software",
        "Malicious software",
        "Manual software",
        "Management software"
      ],
      correctIndex: 1,
      explanation: "Malware = Malicious + Software designed to harm a system."
    },
    {
      id: 2,
      difficulty: "easy",
      text: "Which of the following is a type of malware?",
      options: [
        "Antivirus",
        "Trojan",
        "Firewall",
        "Backup"
      ],
      correctIndex: 1,
      explanation: "A Trojan disguises itself as a legitimate program but is harmful."
    },
    {
      id: 3,
      difficulty: "easy",
      text: "A virus spreads mainly by:",
      options: [
        "Attaching to files or programs",
        "Shutting down power",
        "Cleaning the system",
        "Cooling the CPU"
      ],
      correctIndex: 0,
      explanation: "Computer viruses attach to files and spread when files are opened or shared."
    },
    {
      id: 4,
      difficulty: "easy",
      text: "Ransomware does what?",
      options: [
        "Deletes all movies",
        "Encrypts files and demands money",
        "Speeds up the computer",
        "Extends warranty"
      ],
      correctIndex: 1,
      explanation: "Ransomware locks or encrypts data and asks the victim to pay a ransom."
    },
    {
      id: 5,
      difficulty: "easy",
      text: "A worm spreads through:",
      options: [
        "USBs only",
        "Network and internet connections",
        "Printers",
        "Screensavers"
      ],
      correctIndex: 1,
      explanation: "Worms self-replicate and spread automatically through networks."
    },
    {
      id: 6,
      difficulty: "easy",
      text: "Which malware is designed to secretly monitor user activities?",
      options: [
        "Spyware",
        "Paint tool",
        "Calculator",
        "Media player"
      ],
      correctIndex: 0,
      explanation: "Spyware records activities like keystrokes and browsing behavior."
    },
    {
      id: 7,
      difficulty: "medium",
      text: "A Trojan horse is called so because it:",
      options: [
        "Protects the computer",
        "Looks safe but contains hidden malware",
        "Travels via Bluetooth only",
        "Blocks hackers"
      ],
      correctIndex: 1,
      explanation: "Like the myth, a Trojan pretends to be legitimate but is harmful inside."
    },
    {
      id: 8,
      difficulty: "medium",
      text: "Which malware can record keystrokes to steal passwords?",
      options: [
        "Rootkit",
        "Keylogger",
        "Worm",
        "Botnet"
      ],
      correctIndex: 1,
      explanation: "Keyloggers capture what you type, including passwords and card numbers."
    },
    {
      id: 9,
      difficulty: "medium",
      text: "Adware mainly does what?",
      options: [
        "Displays unwanted advertisements",
        "Repairs broken files",
        "Formats the computer",
        "Stores backups"
      ],
      correctIndex: 0,
      explanation: "Adware shows pop-up ads, often without user consent."
    },
    {
      id: 10,
      difficulty: "medium",
      text: "Botnets are used for:",
      options: [
        "Cleaning system junk",
        "Attacking targets using many infected devices",
        "Saving battery power",
        "Storing files"
      ],
      correctIndex: 1,
      explanation: "Botnets perform large-scale attacks (like DDoS) using networks of infected computers."
    },
    {
      id: 11,
      difficulty: "medium",
      text: "A rootkit is dangerous because it:",
      options: [
        "Deletes images",
        "Hides itself and gives attackers system-level access",
        "Slows down gaming",
        "Shows ads only"
      ],
      correctIndex: 1,
      explanation: "Rootkits hide deep in the system and allow attackers to control it secretly."
    },
    {
      id: 12,
      difficulty: "medium",
      text: "Which malware pretends to remove malware but is actually malware itself?",
      options: [
        "Fake antivirus",
        "Keylogger",
        "Worm",
        "Ransomware"
      ],
      correctIndex: 0,
      explanation: "Fake antiviruses trick users into installing them and then infect the system."
    },
    {
      id: 13,
      difficulty: "hard",
      text: "Polymorphic malware is dangerous because it:",
      options: [
        "Changes its code to avoid detection",
        "Only runs on weekends",
        "Requires no internet",
        "Is always visible to antivirus"
      ],
      correctIndex: 0,
      explanation: "Polymorphic malware modifies its structure to bypass signature-based antivirus tools."
    },
    {
      id: 14,
      difficulty: "hard",
      text: "Fileless malware infects a system by:",
      options: [
        "Running entirely in RAM without saving files",
        "Downloading large files",
        "Using CD-ROMs",
        "Only attacking old computers"
      ],
      correctIndex: 0,
      explanation: "Fileless malware lives in memory, making it harder to detect with traditional methods."
    },
    {
      id: 15,
      difficulty: "hard",
      text: "Zero-day malware exploits:",
      options: [
        "Outdated antivirus",
        "Newly discovered vulnerabilities with no available patch",
        "Slow computers",
        "Gaming applications"
      ],
      correctIndex: 1,
      explanation: "Zero-day attacks exploit unknown security flaws before developers can fix them."
    }
  ]
};
