const allQuestions = [
  {
    "subject": "CS",
    "text": "Binary number system is a base _____ system",
    "answer": "2"
  },
  {
    "subject": "CS",
    "text": "The sample rate is the number of samples taken in a _____",
    "answer": "second"
  },
  {
    "subject": "CS",
    "text": "The sample resolution is the number of _____ per sample",
    "answer": "bits"
  },
  {
    "subject": "CS",
    "text": "Image resolution: number of _____ in an image",
    "answer": "pixels"
  },
  {
    "subject": "CS",
    "text": "_____ is the smallest component of the image",
    "answer": "Pixel"
  },
  {
    "subject": "CS",
    "text": "512 KiB = _____ MiB",
    "answer": "0.5"
  },
  {
    "subject": "CS",
    "text": "Georgia compresses photographs to store them on the USB flash memory drive. It is important that the compression does not affect the quality of the photographs in any way. State which type of compression is the most suitable.",
    "answer": "Lossless compression"
  },
  {
    "subject": "CS",
    "text": "The header of a packet contains _____ IP address and _____ (IP) address",
    "answer": "Destination/receivers, Originator's/senders"
  },
  {
    "subject": "CS",
    "text": "The header of a packet contains _____ number and _____ detection method.",
    "answer": "packet, Error"
  },
  {
    "subject": "CS",
    "text": "A packet contains header, _____, trailer",
    "answer": "payload"
  },
  {
    "subject": "CS",
    "text": "_____ data transmission means data goes in both directions at the same time",
    "answer": "Full‑duplex"
  },
  {
    "subject": "CS",
    "text": "_____ data transmission is when data is transmitted a single bit at a time.",
    "answer": "Serial"
  },
  {
    "subject": "CS",
    "text": "_____ data transmission is when multiple bits of data are sent all at once.",
    "answer": "Parallel"
  },
  {
    "subject": "CS",
    "text": "If a user wants to transmit data over a long distance, with the highest chance of accuracy, _____ data transmission should be used.",
    "answer": "serial"
  },
  {
    "subject": "CS",
    "text": "If data needs to be transmitted in one direction only, for example from a computer to a printer, _____ data transmission should be used.",
    "answer": "simplex"
  },
  {
    "subject": "CS",
    "text": "The data before encryption is known as _____ text.",
    "answer": "plain"
  },
  {
    "subject": "CS",
    "text": "When the data has been encrypted it is known as _____ text.",
    "answer": "cypher"
  },
  {
    "subject": "CS",
    "text": "The register that is used for calculations.",
    "answer": "ACC(Accumulator)"
  },
  {
    "subject": "CS",
    "text": "Part inside CPU, used to carry out calculations on data.",
    "answer": "ALU"
  },
  {
    "subject": "CS",
    "text": "A signal that can be sent from a device tells the CPU that its attention is required.",
    "answer": "Interrupt"
  },
  {
    "subject": "CS",
    "text": "Part inside CPU, used to control the interaction of different parts of the CPU.",
    "answer": "CU(Control Unit)"
  },
  {
    "subject": "CS",
    "text": "_____ sensor measures the amount of liquid flowing through an environment",
    "answer": "Flow"
  },
  {
    "subject": "CS",
    "text": "Solid-state storage is non-_____",
    "answer": "volatile"
  },
  {
    "subject": "CS",
    "text": "_____ storage is used to permanently store software and data files",
    "answer": "Secondary"
  },
  {
    "subject": "CS",
    "text": "A MAC address is a media _____ control address",
    "answer": "access"
  },
  {
    "subject": "CS",
    "text": "A network device has a _____ MAC address can help identify the device in the network.",
    "answer": "unique"
  },
  {
    "subject": "CS",
    "text": "An IP address is an Internet _____ address.",
    "answer": "Protocol"
  },
  {
    "subject": "CS",
    "text": "An IP address can be static or _____.",
    "answer": "Dynamic"
  },
  {
    "subject": "CS",
    "text": "_____ can connect multiple devices and automatically assign them an IP address",
    "answer": "Router"
  },
  {
    "subject": "CS",
    "text": "_____ storage is a collection of servers that store data in a remote location",
    "answer": "Cloud"
  },
  {
    "subject": "CS",
    "text": "An example of _____ level language is assembly language/machine code",
    "answer": "low"
  },
  {
    "subject": "CS",
    "text": "_____ level language can directly manipulate the hardware",
    "answer": "Low"
  },
  {
    "subject": "CS",
    "text": "_____ level language can use specialised hardware",
    "answer": "Low"
  },
  {
    "subject": "CS",
    "text": "One function of the _____ is that it has the built‑in compiler.",
    "answer": "IDE"
  },
  {
    "subject": "CS",
    "text": "_____ takes one statement at a time and executes it",
    "answer": "Interpreter"
  },
  {
    "subject": "CS",
    "text": "_____ generates an error report at the end of translation of the whole program",
    "answer": "Compiler"
  },
  {
    "subject": "CS",
    "text": "A programming language that is written using mnemonic codes.",
    "answer": "assembly language"
  },
  {
    "subject": "CS",
    "text": "It is easier to debug since each line of code is analysed and checked before being executed.",
    "answer": "Interpreter"
  },
  {
    "subject": "CS",
    "text": "It produces fast, executable code that runs directly on the processor.",
    "answer": "Compiler"
  },
  {
    "subject": "CS",
    "text": "Generates an error report at the end of translation of the whole program.",
    "answer": "Compiler"
  },
  {
    "subject": "CS",
    "text": "Stops the translation process as soon as the first error is encountered.",
    "answer": "Interpreter"
  },
  {
    "subject": "CS",
    "text": "Once translated, the translator does not need to be present for the program to run.",
    "answer": "Compiler"
  },
  {
    "subject": "CS",
    "text": "The program will not run at all if an error is detected.",
    "answer": "Compiler"
  },
  {
    "subject": "CS",
    "text": "One function of _____ is to display web pages by rendering HTML",
    "answer": "web browser"
  },
  {
    "subject": "CS",
    "text": "_____ cookies are stored in memory/RAM",
    "answer": "Session"
  },
  {
    "subject": "CS",
    "text": "A text file sent by a web server to collect data about a user's browsing habits. It is _____.",
    "answer": "cookie"
  },
  {
    "subject": "CS",
    "text": "_____ cookies are stored on the hard drive/secondary storage",
    "answer": "Persistent"
  },
  {
    "subject": "CS",
    "text": "One function of web _____ is to send URL to DNS.",
    "answer": "browser"
  },
  {
    "subject": "CS",
    "text": "A _____ is one that only exists electronically.",
    "answer": "digital currency"
  },
  {
    "subject": "CS",
    "text": "The process that uses a digital ledger to track the use of digital currency.",
    "answer": "Blockchain"
  },
  {
    "subject": "EAP",
    "text": "The new law aims to _____ wildlife conservation efforts.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. promote",
      "B. promoted",
      "C. promoting",
      "D. promotion"
    ]
  },
  {
    "subject": "EAP",
    "text": "He _____ for the job because he lacked the necessary qualifications.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. didn't apply",
      "B. didn't applying",
      "C. not applying",
      "D. not apply"
    ]
  },
  {
    "subject": "EAP",
    "text": "The manager decided to _____ the project deadline due to unforeseen circumstances.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. extend",
      "B. extending",
      "C. extended",
      "D. extends"
    ]
  },
  {
    "subject": "EAP",
    "text": "She expressed _____ about the safety of the new building.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. concern",
      "B. concerning",
      "C. concerns",
      "D. concerned"
    ]
  },
  {
    "subject": "EAP",
    "text": "The company plans to _____ its operations in the Asia-Pacific region.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. expand",
      "B. expanding",
      "C. expanded",
      "D. expands"
    ]
  },
  {
    "subject": "EAP",
    "text": "The team's performance was _____ by their recent victories.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. enhance",
      "B. enhancing",
      "C. enhanced",
      "D. enhances"
    ]
  },
  {
    "subject": "EAP",
    "text": "The government announced measures to _____ economic growth.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. stimulate",
      "B. stimulated",
      "C. stimulating",
      "D. stimulation"
    ]
  },
  {
    "subject": "EAP",
    "text": "The students were _____ with the results of their hard work.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. satisfy",
      "B. satisfied",
      "C. satisfies",
      "D. satisfying"
    ]
  },
  {
    "subject": "EAP",
    "text": "The teacher _____ the students' progress regularly.",
    "answer": "Key: B or D",
    "isMultipleChoice": true,
    "options": [
      "A. monitor",
      "B. monitored",
      "C. monitoring",
      "D. monitors"
    ]
  },
  {
    "subject": "EAP",
    "text": "She was _____ by the beauty of the landscape.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. impress",
      "B. impressed",
      "C. impresses",
      "D. impressing"
    ]
  },
  {
    "subject": "EAP",
    "text": "The project requires careful _____ of available resources.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. management",
      "B. managing",
      "C. managed",
      "D. manages"
    ]
  },
  {
    "subject": "EAP",
    "text": "He made an effort to _____ his knowledge of the subject.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. expand",
      "B. expanded",
      "C. expanding",
      "D. expands"
    ]
  },
  {
    "subject": "EAP",
    "text": "The company decided to _____ its marketing strategy.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. revise",
      "B. revised",
      "C. revising",
      "D. revises"
    ]
  },
  {
    "subject": "EAP",
    "text": "The candidate's performance in the interview was _____.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. satisfy",
      "B. satisfying",
      "C. satisfied",
      "D. satisfaction"
    ]
  },
  {
    "subject": "EAP",
    "text": "The government is considering _____ measures to address the issue.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. enact",
      "B. enacted",
      "C. enacting",
      "D. enacts"
    ]
  },
  {
    "subject": "EAP",
    "text": "The organization is committed to _____ environmental sustainability.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. promote",
      "B. promoting",
      "C. promoted",
      "D. promotes"
    ]
  },
  {
    "subject": "EAP",
    "text": "The students _____ their study habits to achieve better results these days.",
    "answer": "Key: C or D",
    "isMultipleChoice": true,
    "options": [
      "A. modify",
      "B. modifying",
      "C. modified",
      "D. modifies"
    ]
  },
  {
    "subject": "EAP",
    "text": "The team's success was _____ by their hard work and dedication.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. enhance",
      "B. enhanced",
      "C. enhances",
      "D. enhancing"
    ]
  },
  {
    "subject": "EAP",
    "text": "Yesterday, the manager _____ the importance of teamwork to the staff.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. emphasize",
      "B. emphasized",
      "C. emphasizes",
      "D. emphasizing"
    ]
  },
  {
    "subject": "EAP",
    "text": "She expressed _____ about the upcoming exam.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. concern",
      "B. concerned",
      "C. concerns",
      "D. concerning"
    ]
  },
  {
    "subject": "EAP",
    "text": "The company plans to _____ its product range next year.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. expand",
      "B. expanding",
      "C. expanded",
      "D. expands"
    ]
  },
  {
    "subject": "EAP",
    "text": "The government's decision to raise taxes was _____ by many citizens.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. criticize",
      "B. criticized",
      "C. criticizing",
      "D. criticizes"
    ]
  },
  {
    "subject": "EAP",
    "text": "The team needs to _____ their efforts to meet the deadline.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. intensify",
      "B. intensified",
      "C. intensifying",
      "D. intensifies"
    ]
  },
  {
    "subject": "EAP",
    "text": "The teacher _____ the students' performance in the test.",
    "answer": "Key: B or C",
    "isMultipleChoice": true,
    "options": [
      "A. evaluate",
      "B. evaluated",
      "C. evaluates",
      "D. evaluating"
    ]
  },
  {
    "subject": "EAP",
    "text": "The company is _____ a new marketing campaign to attract customers.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. develop",
      "B. developing",
      "C. developed",
      "D. develops"
    ]
  },
  {
    "subject": "EAP",
    "text": "The team _____ their victory in the final match last year.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. celebrate",
      "B. celebrated",
      "C. celebrates",
      "D. celebrating"
    ]
  },
  {
    "subject": "EAP",
    "text": "She _____ her studies to pursue a career in medicine just now.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. interrupt",
      "B. interrupted",
      "C. interrupts",
      "D. interrupting"
    ]
  },
  {
    "subject": "EAP",
    "text": "The organization is committed to _____ human rights.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. promote",
      "B. promoted",
      "C. promoting",
      "D. promotes"
    ]
  },
  {
    "subject": "EAP",
    "text": "He _____ his opinion on the matter during the meeting.",
    "answer": "Key: B or C",
    "isMultipleChoice": true,
    "options": [
      "A. express",
      "B. expressed",
      "C. expresses",
      "D. expressing"
    ]
  },
  {
    "subject": "EAP",
    "text": "The government plans to _____ stricter regulations to protect the environment.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. enforce",
      "B. enforced",
      "C. enforcing",
      "D. enforces"
    ]
  },
  {
    "subject": "EAP",
    "text": "The students were _____ with the results of their hard work.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. satisfy",
      "B. satisfying",
      "C. satisfied",
      "D. satisfaction"
    ]
  },
  {
    "subject": "EAP",
    "text": "The company _____ its workforce to remain competitive this year.",
    "answer": "Key: B or D",
    "isMultipleChoice": true,
    "options": [
      "A. streamline",
      "B. streamlined",
      "C. streamlining",
      "D. streamlines"
    ]
  },
  {
    "subject": "EAP",
    "text": "The teacher _____ the importance of punctuality to the students yesterday.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. emphasize",
      "B. emphasized",
      "C. emphasizes",
      "D. emphasizing"
    ]
  },
  {
    "subject": "EAP",
    "text": "The organization is _____ measures to reduce its carbon footprint.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. undertake",
      "B. undertaking",
      "C. undertook",
      "D. undertakes"
    ]
  },
  {
    "subject": "EAP",
    "text": "The company decided to _____ its product line to attract more customers.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. diversify",
      "B. diversified",
      "C. diversifying",
      "D. diversifies"
    ]
  },
  {
    "subject": "EAP",
    "text": "She _____ the opportunity to study abroad last semester.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. seize",
      "B. seized",
      "C. seizes",
      "D. seizing"
    ]
  },
  {
    "subject": "EAP",
    "text": "She was deeply _____ by the novel's tragic ending.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. affected",
      "B. effected",
      "C. affective",
      "D. affectionate"
    ]
  },
  {
    "subject": "EAP",
    "text": "The new policy will have a significant _____ on the economy.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. affect",
      "B. effect",
      "C. affection",
      "D. effective"
    ]
  },
  {
    "subject": "EAP",
    "text": "He tried to _____ his enthusiasm for the project during the meeting.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. convey",
      "B. convince",
      "C. confide",
      "D. conceal"
    ]
  },
  {
    "subject": "EAP",
    "text": "The painting _____ a sense of calmness and serenity.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. evokes",
      "B. invokes",
      "C. provokes",
      "D. revokes"
    ]
  },
  {
    "subject": "EAP",
    "text": "She decided to _____ the offer and join the company.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. except",
      "B. accept",
      "C. excepted",
      "D. accepted"
    ]
  },
  {
    "subject": "EAP",
    "text": "The company's decision to downsize will _____ many employees.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. affect",
      "B. effect",
      "C. infect",
      "D. afflict"
    ]
  },
  {
    "subject": "EAP",
    "text": "The film's _____ soundtrack added to the overall emotional impact.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. dramatic",
      "B. drastically",
      "C. dramatically",
      "D. dramatization"
    ]
  },
  {
    "subject": "EAP",
    "text": "The chef's _____ cooking skills impressed the judges.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. culinary",
      "B. culinary's",
      "C. cuisine",
      "D. culinary-wise"
    ]
  },
  {
    "subject": "EAP",
    "text": "The _____ of the storm forced many residents to evacuate.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. severity",
      "B. seriously",
      "C. severe",
      "D. severance"
    ]
  },
  {
    "subject": "EAP",
    "text": "She had a _____ expression on her face as she listened to the news.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. puzzled",
      "B. puzzledly",
      "C. puzzle",
      "D. puzzles"
    ]
  },
  {
    "subject": "EAP",
    "text": "The novel's _____ storyline kept readers engaged until the very end.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. intricate",
      "B. intrigued",
      "C. intricately",
      "D. intricacy"
    ]
  },
  {
    "subject": "EAP",
    "text": "The _____ artist created stunning works of art that captivated audiences.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. prolific",
      "B. prolix",
      "C. proclivity",
      "D. proactive"
    ]
  },
  {
    "subject": "EAP",
    "text": "His _____ knowledge of the subject impressed the interview panel.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. thorough",
      "B. thoroughly",
      "C. through",
      "D. throughout"
    ]
  },
  {
    "subject": "EAP",
    "text": "The car's _____ design made it stand out on the road.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. sleek",
      "B. sleekly",
      "C. sleigh",
      "D. slick"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____ a plastic paint that mixes with water; it is waterproof when dry.",
    "answer": "B. Acrylic",
    "isMultipleChoice": true,
    "options": [
      "A. Watercolor",
      "B. Acrylic",
      "C. Colored pencil",
      "D. Gouache"
    ]
  },
  {
    "subject": "Art-design",
    "text": "The name of this Art movement was coined from Claude Monet’s paintings.",
    "answer": "B. Impressionism",
    "isMultipleChoice": true,
    "options": [
      "A. Expressionism",
      "B. Impressionism",
      "C. Cubism",
      "D. Surrealism"
    ]
  },
  {
    "subject": "Art-design",
    "text": "Red, yellow and blue are called the _______.",
    "answer": "B. Primary Colors",
    "isMultipleChoice": true,
    "options": [
      "A. Secondary Colors",
      "B. Primary Colors",
      "C. Analogous Colors",
      "D. Complementary Colors"
    ]
  },
  {
    "subject": "Art-design",
    "text": "The shapes that are found in nature.",
    "answer": "C. Organic shapes",
    "isMultipleChoice": true,
    "options": [
      "A. Amoebas",
      "B. Leaves",
      "C. Organic shapes",
      "D. Geometric shapes"
    ]
  },
  {
    "subject": "Art-design",
    "text": "It is used to describe the way a three-dimensional work feels when touched.",
    "answer": "A. Texture",
    "isMultipleChoice": true,
    "options": [
      "A. Texture",
      "B. Color",
      "C. Value",
      "D. Form"
    ]
  },
  {
    "subject": "Art-design",
    "text": "What are the three secondary colors?",
    "answer": "A. Green, Orange, Purple",
    "isMultipleChoice": true,
    "options": [
      "A. Green, Orange, Purple",
      "B. Orange, Red, Yellow",
      "C. Purple, Red, Blue",
      "D. Green, Blue, Yellow"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: soft drawing material made from burned wood.",
    "answer": "A. Charcoal",
    "isMultipleChoice": true,
    "options": [
      "A. Charcoal",
      "B. Oil paint",
      "C. Acrylic",
      "D. Pastel"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: a variety of materials e.g. paper, photographs, fabric stuck on a surface.",
    "answer": "B. Collage",
    "isMultipleChoice": true,
    "options": [
      "A. Mood board",
      "B. Collage",
      "C. Story board",
      "D. Painting"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: the placement or arrangement of visual elements.",
    "answer": "B. Composition",
    "isMultipleChoice": true,
    "options": [
      "A. Colour",
      "B. Composition",
      "C. Perspective",
      "D. Concept"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: from the original source or personal experience e.g., your recordings from what you can see.",
    "answer": "D. First-hand",
    "isMultipleChoice": true,
    "options": [
      "A. Illustration",
      "B. Photo",
      "C. Second-hand",
      "D. First-hand"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: paint that mixes with water.",
    "answer": "C. Watercolour",
    "isMultipleChoice": true,
    "options": [
      "A. Oil paint",
      "B. Acrylic",
      "C. Watercolour",
      "D. Pastel"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: objects and sculpture made from fired clay.",
    "answer": "A. Ceramics",
    "isMultipleChoice": true,
    "options": [
      "A. Ceramics",
      "B. Clay",
      "C. Stone",
      "D. Charcoal"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: paint that needs to mix with a solvent, and takes a long time to dry.",
    "answer": "B. Oil paint",
    "isMultipleChoice": true,
    "options": [
      "A. Charcoal",
      "B. Oil paint",
      "C. Acrylic",
      "D. Pastel"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: the physical volume of a shape and the space that it occupies.",
    "answer": "C. Form",
    "isMultipleChoice": true,
    "options": [
      "A. Shape",
      "B. Space",
      "C. Form",
      "D. Colour"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: the process of visual communication and problem-solving using typography, photography and illustration.",
    "answer": "A. Graphic design",
    "isMultipleChoice": true,
    "options": [
      "A. Graphic design",
      "B. Fashion design",
      "C. Product design",
      "D. Craft design"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: the final submission that you supply for the coursework (A2 size) or the final work that you complete in the externally set assignment (A2 size).",
    "answer": "C. Final outcome",
    "isMultipleChoice": true,
    "options": [
      "A. Supporting studies",
      "B. Portfolio",
      "C. Final outcome",
      "D. Recording"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: the coursework material that you supply alongside your final outcome to support your coursework submission, which should be no more than four sheets (eight sides) of A2.",
    "answer": "A. Supporting studies",
    "isMultipleChoice": true,
    "options": [
      "A. Supporting studies",
      "B. Portfolio",
      "C. Final outcome",
      "D. Recording"
    ]
  },
  {
    "subject": "Art-design",
    "text": "_____: all coursework projects start with a theme, which may be set by your teacher or be something that you have developed yourself.",
    "answer": "A. Theme (course term)",
    "isMultipleChoice": true,
    "options": [
      "A. Theme (course term)",
      "B. Portfolio",
      "C. Final outcome",
      "D. Recording"
    ]
  },
  {
    "subject": "Biology",
    "text": "This is the process of _____",
    "answer": "osmosis"
  },
  {
    "subject": "Biology",
    "text": "This is the definition of _____",
    "answer": "absorption"
  },
  {
    "subject": "Biology",
    "text": "This is the definition of _____",
    "answer": "respiration"
  },
  {
    "subject": "Biology",
    "text": "_____ means one of the thousands of microscopic tubes inside a kidney, where urine is made.",
    "answer": "nephron"
  },
  {
    "subject": "Biology",
    "text": "The following phenomenon in plant cells is _____",
    "answer": "plasmolysis",
    "image": "../Biology/q5.png"
  },
  {
    "subject": "Biology",
    "text": "Reagent DCPIP is used to test _____",
    "answer": "vitamin C"
  },
  {
    "subject": "Biology",
    "text": "The specificity of an enzyme is that the enzyme binds one type of substrates due to the _____ shape of the active site with the substrate.",
    "answer": "complementary"
  },
  {
    "subject": "Biology",
    "text": "_____ is a disease caused by a bacterium which is transmitted in contaminated water.",
    "answer": "cholera"
  },
  {
    "subject": "Biology",
    "text": "This is the definition of _____",
    "answer": "deamination"
  },
  {
    "subject": "Biology",
    "text": "The term _____ means a group of organisms that can reproduce to produce fertile offspring.",
    "answer": "species"
  },
  {
    "subject": "Biology",
    "text": "This is the definition of _____",
    "answer": "community"
  },
  {
    "subject": "Biology",
    "text": "_____ is the small, circular molecules of DNA found in many prokaryotic cells.",
    "answer": "plasmid"
  },
  {
    "subject": "Biology",
    "text": "_____ is extra oxygen needed after anaerobic respiration has taken place, in order to break down the lactic acid produced.",
    "answer": "oxygen debt"
  },
  {
    "subject": "Biology",
    "text": "_____ means the part of a plant to which sucrose or amino acids are transported, and where they are used or stored.",
    "answer": "sink"
  },
  {
    "subject": "Biology",
    "text": "_____ means automatically and rapidly integrating and coordinating stimuli with the responses of effectors.",
    "answer": "reflex action"
  },
  {
    "subject": "Biology",
    "text": "_____ wall contains lignin, to provide support for the plant.",
    "answer": "xylem"
  },
  {
    "subject": "Biology",
    "text": "_____ is when water evaporates from the surfaces of the mesophyll cells into the air spaces, and then diffuses out of the leaves through the stomata as water vapour.",
    "answer": "transpiration"
  },
  {
    "subject": "Biology",
    "text": "After pollination, _____ land on the stigma and begin to grow a pollen tube.",
    "answer": "pollen grains"
  },
  {
    "subject": "Biology",
    "text": "The process of converting nitrate ions to nitrogen gas is called _____",
    "answer": "denitrification"
  },
  {
    "subject": "Biology",
    "text": "Variation in which there are distinct categories of phenotype, with no intermediates is called _____",
    "answer": "discontinuous variation"
  },
  {
    "subject": "Biology",
    "text": "The outer layer of tissue on a plant, as well as the outer layer of an animal's skin, is called _____",
    "answer": "epidermis"
  },
  {
    "subject": "Biology",
    "text": "The tissue that covers a surface in an animal (for example, an epithelium covers the inside of the wall of the human alimentary canal) is called _____",
    "answer": "epithelium"
  },
  {
    "subject": "Biology",
    "text": "The insoluble protein produced to form a mesh with the platelets during blood clotting is called _____",
    "answer": "fibrin"
  },
  {
    "subject": "Biology",
    "text": "Hormone _____ is secreted by the pancreas, which increases blood glucose concentration.",
    "answer": "glucagon"
  },
  {
    "subject": "Biology",
    "text": "_____ means two chromosomes that contain the same genes in the same position; have the same shape and size; one from the mother and one from the father.",
    "answer": "Homologous chromosomes"
  },
  {
    "subject": "Biology",
    "text": "Living animals release carbon dioxide. This is an example of which life process?",
    "answer": "A. Excretion",
    "isMultipleChoice": true,
    "options": [
      "A. Excretion",
      "B. Movement",
      "C. Nutrition",
      "D. Sensitivity"
    ]
  },
  {
    "subject": "Biology",
    "text": "What is a role of water in digestion?",
    "answer": "B. It is a solvent.",
    "isMultipleChoice": true,
    "options": [
      "A. It is an enzyme.",
      "B. It is a solvent.",
      "C. It is soluble.",
      "D. It is a mineral."
    ]
  },
  {
    "subject": "Biology",
    "text": "The lack of which component of a balanced diet will lead to the development of scurvy?",
    "answer": "C. Vitamin C",
    "isMultipleChoice": true,
    "options": [
      "A. Calcium",
      "B. Iron",
      "C. Vitamin C",
      "D. Vitamin D"
    ]
  },
  {
    "subject": "Biology",
    "text": "The diagram shows the structures in a reflex arc. What is X?",
    "answer": "B. Relay neurone",
    "isMultipleChoice": true,
    "options": [
      "A. Effector",
      "B. Relay neurone",
      "C. Sensory neurone",
      "D. Synapse"
    ],
    "image": "../Biology/q29.png"
  },
  {
    "subject": "Biology",
    "text": "In a sperm cell, which structure contains enzymes that can digest the jelly coat of an egg cell?",
    "answer": "A. Acrosome",
    "isMultipleChoice": true,
    "options": [
      "A. Acrosome",
      "B. Flagellum",
      "C. Mitochondria",
      "D. Nucleus"
    ]
  },
  {
    "subject": "Biology",
    "text": "What is the principal source of energy for most food chains?",
    "answer": "D. Sunlight",
    "isMultipleChoice": true,
    "options": [
      "A. Carbon dioxide gas",
      "B. Glucose",
      "C. Oxygen",
      "D. Sunlight"
    ]
  },
  {
    "subject": "Biology",
    "text": "Bacteria are useful for manufacturing products for human use. Which statement explains why they are useful?",
    "answer": "D. Bacteria reproduce very rapidly.",
    "isMultipleChoice": true,
    "options": [
      "A. Bacteria can be grown without nutrients.",
      "B. Bacteria do not have a nucleus.",
      "C. Bacteria infect human cells.",
      "D. Bacteria reproduce very rapidly."
    ]
  },
  {
    "subject": "Biology",
    "text": "An animal has four legs, hair and a tail. To which group of vertebrates does it belong?",
    "answer": "C. Mammals",
    "isMultipleChoice": true,
    "options": [
      "A. Amphibians",
      "B. Birds",
      "C. Mammals",
      "D. Reptiles"
    ]
  },
  {
    "subject": "Biology",
    "text": "What is an example of a tissue?",
    "answer": "B. The palisade mesophyll",
    "isMultipleChoice": true,
    "options": [
      "A. A chloroplast",
      "B. The palisade mesophyll",
      "C. A neurone",
      "D. The pancreas"
    ]
  },
  {
    "subject": "Biology",
    "text": "Dental decay is caused when bacteria break down sugars and produce acids. In which order are the parts of the teeth damaged by acid?",
    "answer": "B. Enamel → dentine → pulp",
    "isMultipleChoice": true,
    "options": [
      "A. Dentine → pulp → enamel",
      "B. Enamel → dentine → pulp",
      "C. Enamel → pulp → dentine",
      "D. Pulp → dentine → enamel"
    ]
  },
  {
    "subject": "Biology",
    "text": "Which blood vessel delivers oxygenated blood to the heart muscles?",
    "answer": "D. Coronary artery",
    "isMultipleChoice": true,
    "options": [
      "A. Pulmonary artery",
      "B. Aorta",
      "C. Pulmonary vein",
      "D. Coronary artery"
    ]
  },
  {
    "subject": "Biology",
    "text": "The diagram shows a section of a human vein. What is the function of the part labelled X?",
    "answer": "A. To make sure the blood flows to the heart",
    "isMultipleChoice": true,
    "options": [
      "A. To make sure the blood flows to the heart",
      "B. To make sure the blood flows to the kidneys",
      "C. To make sure the blood flows to the brain",
      "D. To make sure the blood flows to the lungs"
    ],
    "image": "../Biology/q37.png"
  },
  {
    "subject": "Biology",
    "text": "Campylobacter is a bacterium that can cause food poisoning. Which word describes Campylobacter?",
    "answer": "C. Pathogen",
    "isMultipleChoice": true,
    "options": [
      "A. Antibody",
      "B. Disease",
      "C. Pathogen",
      "D. Symptom"
    ]
  },
  {
    "subject": "Biology",
    "text": "What is the approximate percentage of oxygen in expired air?",
    "answer": "C. 16%",
    "isMultipleChoice": true,
    "options": [
      "A. 0.04%",
      "B. 4%",
      "C. 16%",
      "D. 21%"
    ]
  },
  {
    "subject": "Biology",
    "text": "Which statement about the formation of urea is correct?",
    "answer": "B. Urea is formed in the liver from excess amino acids.",
    "isMultipleChoice": true,
    "options": [
      "A. Urea is formed in the kidneys from excess amino acids.",
      "B. Urea is formed in the liver from excess amino acids.",
      "C. Urea is formed in the kidneys from excess fatty acids.",
      "D. Urea is formed in the liver from excess fatty acids."
    ]
  },
  {
    "subject": "Biology",
    "text": "Which endocrine gland secretes the hormone that stimulates the heartbeat?",
    "answer": "A. Adrenal",
    "isMultipleChoice": true,
    "options": [
      "A. Adrenal",
      "B. Ovary",
      "C. Pancreas",
      "D. Testis"
    ]
  },
  {
    "subject": "Biology",
    "text": "The diagram represents processes in sexual reproduction. Which processes are represented by the letters P, Q and R?",
    "answer": "B",
    "image": "../Biology/q42.png"
  },
  {
    "subject": "Biology",
    "text": "Letters H, J, K and L show the organisms that make up a simple food web. Which row identifies the types of organism shown in the food web?",
    "answer": "C",
    "image": "../Biology/q43.png"
  },
  {
    "subject": "Biology",
    "text": "What are undesirable effects of deforestation?",
    "answer": "D. An increase in soil erosion and an increase in carbon dioxide in the atmosphere",
    "isMultipleChoice": true,
    "options": [
      "A. A decrease in soil erosion and a decrease in carbon dioxide in the atmosphere",
      "B. A decrease in soil erosion but an increase in carbon dioxide in the atmosphere",
      "C. An increase in soil erosion but a decrease in carbon dioxide in the atmosphere",
      "D. An increase in soil erosion and an increase in carbon dioxide in the atmosphere"
    ]
  },
  {
    "subject": "Biology",
    "text": "Starch is digested by amylase in the mouth, but it is not digested in the stomach. What is the reason for this?",
    "answer": "B. The pH in the stomach is not suitable for the amylase to work",
    "isMultipleChoice": true,
    "options": [
      "A. All starch digestion is completed in the mouth",
      "B. The pH in the stomach is not suitable for the amylase to work",
      "C. The starch does not stay in the stomach long enough to be digested",
      "D. The temperature in the stomach is not suitable for the amylase to work"
    ]
  },
  {
    "subject": "Biology",
    "text": "What is a function of some white blood cells?",
    "answer": "D. To produce antibodies",
    "isMultipleChoice": true,
    "options": [
      "A. To carry glucose",
      "B. To carry oxygen",
      "C. To produce antibiotics",
      "D. To produce antibodies"
    ]
  },
  {
    "subject": "Biology",
    "text": "Which statement applies to respiration?",
    "answer": "A. It involves enzymes",
    "isMultipleChoice": true,
    "options": [
      "A. It involves enzymes",
      "B. Energy is absorbed",
      "C. It only takes place in animal cells",
      "D. Oxygen is released"
    ]
  },
  {
    "subject": "Biology",
    "text": "What type of cell must an organ contain to detect a stimulus?",
    "answer": "B. Receptor",
    "isMultipleChoice": true,
    "options": [
      "A. Blood",
      "B. Receptor",
      "C. Skin",
      "D. Xylem"
    ]
  },
  {
    "subject": "Biology",
    "text": "Which statement about the process of asexual reproduction is correct?",
    "answer": "D. It requires only one parent",
    "isMultipleChoice": true,
    "options": [
      "A. It produces genetically different offspring",
      "B. It requires two parents",
      "C. It produces gametes",
      "D. It requires only one parent"
    ]
  },
  {
    "subject": "Biology",
    "text": "Which description of a population is correct?",
    "answer": "D. All the red deer in a forest",
    "isMultipleChoice": true,
    "options": [
      "A. All the birds in a rainforest",
      "B. All the arachnids in a garden",
      "C. All the arthropods in the world",
      "D. All the red deer in a forest"
    ]
  },
  {
    "subject": "Business",
    "text": "_____ are businesses owned by shareholders but they can sell shares to the public and their shares are tradeable on the Stock Exchange.",
    "answer": "Public limited companies"
  },
  {
    "subject": "Business",
    "text": "_____ is a person who organises, operates and takes the risk for a new business venture.",
    "answer": "Entrepreneur"
  },
  {
    "subject": "Business",
    "text": "One of the key characteristics of a successful entrepreneur is:",
    "answer": "B. they are risk takers",
    "isMultipleChoice": true,
    "options": [
      "A. they are always rich",
      "B. they are risk takers",
      "C. they are usually shy",
      "D. they want to avoid hard working"
    ]
  },
  {
    "subject": "Business",
    "text": "All of the following are likely reasons why people work except:",
    "answer": "D. to watch TV",
    "isMultipleChoice": true,
    "options": [
      "A. to earn money",
      "B. to have social contact",
      "C. to gain recognition",
      "D. to watch TV"
    ]
  },
  {
    "subject": "Business",
    "text": "Which type of leadership style best defines “let it be”?",
    "answer": "C. Laissez-faire leadership",
    "isMultipleChoice": true,
    "options": [
      "A. Autocratic leadership",
      "B. Democratic leadership",
      "C. Laissez-faire leadership",
      "D. Centralized leadership"
    ]
  },
  {
    "subject": "Business",
    "text": "Using capital employed as a measure, which appears to be the largest firm?",
    "answer": "A",
    "isMultipleChoice": true,
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "image": "../Busniess/q5.png"
  },
  {
    "subject": "Business",
    "text": "Using the number of employees as a measure, which appears to be the largest firm?",
    "answer": "B",
    "isMultipleChoice": true,
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "image": "../Busniess/q5.png"
  },
  {
    "subject": "Business",
    "text": "Using the value of sales turnover as a measure, which appears to be the largest firm?",
    "answer": "C",
    "isMultipleChoice": true,
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "image": "../Busniess/q5.png"
  },
  {
    "subject": "Business",
    "text": "Which one of the following is a niche market business?",
    "answer": "D. Wuhan Britain-China school",
    "isMultipleChoice": true,
    "options": [
      "A. Huawei",
      "B. NONG FU SHAN QUAN",
      "C. WA-HAHA",
      "D. Wuhan Britain-China school"
    ]
  },
  {
    "subject": "Business",
    "text": "The formula of market share is _____",
    "answer": "Company sales / total market sales × 100%"
  },
  {
    "subject": "Business",
    "text": "The 4 Ps of the marketing mix are:",
    "answer": "C. Promotion, place, price, product",
    "isMultipleChoice": true,
    "options": [
      "A. Price, product, people, place",
      "B. Product, promotion, profit, place",
      "C. Promotion, place, price, product",
      "D. Place, profit, price, promotion"
    ]
  },
  {
    "subject": "Business",
    "text": "In which type of production are several identical products completed at each stage before passing on to the next stage?",
    "answer": "B. Batch production",
    "isMultipleChoice": true,
    "options": [
      "A. Flow production",
      "B. Batch production",
      "C. Job production",
      "D. Lean production"
    ]
  },
  {
    "subject": "Business",
    "text": "Which one of the following products is most likely to be produced using batch production methods?",
    "answer": "A. School uniforms",
    "isMultipleChoice": true,
    "options": [
      "A. School uniforms",
      "B. Washing machines",
      "C. A popular chocolate bar",
      "D. Hand-made watches"
    ]
  },
  {
    "subject": "Business",
    "text": "A product sells for $7. Material and other variable costs are $3 per unit. Fixed costs are $60,000. The break-even level of output is:",
    "answer": "A. 15,000 units",
    "isMultipleChoice": true,
    "options": [
      "A. 15,000 units",
      "B. 60,000 units",
      "C. 20,000 units",
      "D. We cannot tell from the information given"
    ]
  },
  {
    "subject": "Business",
    "text": "When a raw material loses weight and bulk during processing, location of the processing business is likely to be:",
    "answer": "A. Close to the sources of raw materials",
    "isMultipleChoice": true,
    "options": [
      "A. Close to the sources of raw materials",
      "B. Close to the major markets",
      "C. Close to supplies of skilled labour",
      "D. Close to manufacturers of processing machinery"
    ]
  },
  {
    "subject": "Business",
    "text": "Which of the following sources of finance is most likely to be used by a company planning to take over another business?",
    "answer": "C. Share issue",
    "isMultipleChoice": true,
    "options": [
      "A. Bank overdraft",
      "B. Leasing",
      "C. Share issue",
      "D. Trade credit"
    ]
  },
  {
    "subject": "Business",
    "text": "Which of the following is the value of X? ($000)",
    "answer": "B. 2",
    "isMultipleChoice": true,
    "options": [
      "A. (2)",
      "B. 2",
      "C. 4",
      "D. 6"
    ],
    "image": "../Busniess/q171819.png"
  },
  {
    "subject": "Business",
    "text": "Which of the following is the value of Y? ($000)",
    "answer": "C. 9",
    "isMultipleChoice": true,
    "options": [
      "A. (9)",
      "B. 6",
      "C. 9",
      "D. 15"
    ],
    "image": "../Busniess/q171819.png"
  },
  {
    "subject": "Business",
    "text": "Which of the following is the value of Z? ($000)",
    "answer": "C. 5",
    "isMultipleChoice": true,
    "options": [
      "A. (15)",
      "B. (5)",
      "C. 5",
      "D. 15"
    ],
    "image": "../Busniess/q171819.png"
  },
  {
    "subject": "Business",
    "text": "The gross profit margin was _____",
    "answer": "33%",
    "image": "../Busniess/q20.png"
  },
  {
    "subject": "Business",
    "text": "_____ leadership style is where the manager expects to be in charge of the business and to have their orders followed.",
    "answer": "Autocratic"
  },
  {
    "subject": "Business",
    "text": "_____ are graphs which show how costs and revenues of a business change with sales.",
    "answer": "Break-even charts"
  },
  {
    "subject": "Business",
    "text": "_____ outlines the responsibilities and duties to be carried out by someone employed to do a specific job.",
    "answer": "Job description"
  },
  {
    "subject": "Business",
    "text": "_____ is an identifiable sub-group of a whole market in which consumers have similar characteristics or preferences.",
    "answer": "Market segment"
  },
  {
    "subject": "Business",
    "text": "_____ is a financial plan for the marketing of a product or product range for some specified period of time.",
    "answer": "Marketing budget"
  },
  {
    "subject": "Business",
    "text": "The ‘location decision’ for a business means:",
    "answer": "C. Deciding where a business is going to operate from",
    "isMultipleChoice": true,
    "options": [
      "A. Deciding where the departments of a business are located in the factory",
      "B. A shop-owner deciding on the positions for products in the shop",
      "C. Deciding where a business is going to operate from",
      "D. Deciding where a business is going to market its products"
    ]
  },
  {
    "subject": "Business",
    "text": "Which of the following is an example of internal finance for a limited company?",
    "answer": "D. Selling off inventories",
    "isMultipleChoice": true,
    "options": [
      "A. Selling shares",
      "B. Selling debentures",
      "C. Obtaining a loan",
      "D. Selling off inventories"
    ]
  },
  {
    "subject": "Business",
    "text": "Which of the following sources of finance is most likely to be used by a company planning to take over another business?",
    "answer": "C. Share issue",
    "isMultipleChoice": true,
    "options": [
      "A. Bank overdraft",
      "B. Leasing",
      "C. Share issue",
      "D. Trade credit"
    ]
  },
  {
    "subject": "Business",
    "text": "A large national toy retailer wants to inform potential consumers of its huge product range. It would be most likely to use:",
    "answer": "B. Children’s television",
    "isMultipleChoice": true,
    "options": [
      "A. Billboards and posters",
      "B. Children’s television",
      "C. Evening radio programmes",
      "D. National newspapers"
    ]
  },
  {
    "subject": "Business",
    "text": "All of the following are examples of forms of media technology that can be used to communicate with customers except:",
    "answer": "B. Internal e-mail",
    "isMultipleChoice": true,
    "options": [
      "A. Business website",
      "B. Internal e-mail",
      "C. Social networking sites",
      "D. SMS messages"
    ]
  },
  {
    "subject": "Business",
    "text": "According to F.W Taylor's rule, employees can be motivated by _____",
    "answer": "money"
  },
  {
    "subject": "Business",
    "text": "Job rotation is a Financial reward (True or False)",
    "answer": "False"
  },
  {
    "subject": "Business",
    "text": "_____ are items owned by the business for less than 1 year, e.g., raw materials, cash.",
    "answer": "Current assets"
  },
  {
    "subject": "Business",
    "text": "The formula to calculate working capital is: _____",
    "answer": "Working capital = current assets - current liabilities"
  },
  {
    "subject": "Business",
    "text": "_____ is a term which is used to describe all the activities which go into marketing a product or service. (Hint: Four Ps – product, price, place, and promotion)",
    "answer": "Marketing mix"
  },
  {
    "subject": "Business",
    "text": "_____ refers to a diagram that outlines the internal management structure.",
    "answer": "Organisational chart"
  },
  {
    "subject": "Business",
    "text": "Which one of the following businesses is most likely to be badly affected by a long recession?",
    "answer": "A. A luxury car maker",
    "isMultipleChoice": true,
    "options": [
      "A. A luxury car maker",
      "B. The postal service",
      "C. A company operating bus services",
      "D. A bakery"
    ]
  },
  {
    "subject": "Business",
    "text": "XYZ Co. has found out that one of its suppliers employs children to do dangerous production work. The managers of XYZ do nothing about this. This is an example of:",
    "answer": "C. Putting profits before ethics",
    "isMultipleChoice": true,
    "options": [
      "A. Putting profit before costs",
      "B. Putting ethics before profit",
      "C. Putting profits before ethics",
      "D. Putting publicity before profits"
    ]
  },
  {
    "subject": "Business",
    "text": "_____ is the continuous improvement of products and processes by focusing on quality at every stage of production.",
    "answer": "Total quality management"
  },
  {
    "subject": "Business",
    "text": "_____ is a way of keeping a product at the maturity stage of the life cycle and extending the cycle.",
    "answer": "Extension strategy"
  },
  {
    "subject": "Chemistry",
    "text": "_____ which is atom with same element, that have a different number of neutrons.",
    "answer": "Isotope"
  },
  {
    "subject": "Chemistry",
    "text": "The average mass of the _____ of an element, relative to 1/12th of the mass of _____",
    "answer": "Key: D",
    "isMultipleChoice": true,
    "options": [
      "A. atoms, 1H",
      "B. atoms, 12C",
      "C. isotopes, 1H",
      "D. isotopes, 12C"
    ]
  },
  {
    "subject": "Chemistry",
    "text": "_____: the change of physical state from gas to liquid.",
    "answer": "Condensing"
  },
  {
    "subject": "Chemistry",
    "text": "<sup>23</sup><sub>11</sub>Na nucleon number is _____",
    "answer": "23"
  },
  {
    "subject": "Chemistry",
    "text": "Ionic bond is a strong _____ attraction between oppositely charged ions",
    "answer": "electrostatic"
  },
  {
    "subject": "Chemistry",
    "text": "_____ is formed when a pair of electrons is shared between two atoms leading to noble gas electronic configurations.",
    "answer": "Covalent bond"
  },
  {
    "subject": "Chemistry",
    "text": "_____ is the electrostatic attraction between the positive ions in a giant metallic lattice and a 'sea' of delocalised electrons",
    "answer": "Metallic bond"
  },
  {
    "subject": "Chemistry",
    "text": "The _____ for making ammonia under 450℃, 200atm, and Fe as catalyst.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. Contact process",
      "B. Addition reaction",
      "C. Haber process",
      "D. polymerization process"
    ]
  },
  {
    "subject": "Chemistry",
    "text": "What is the Avogadro constant?",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. 5.01 × 1021",
      "B. 3.14 × 1022",
      "C. 6.02 × 1023",
      "D. 4.05 × 1024"
    ]
  },
  {
    "subject": "Chemistry",
    "text": "_____ is the decomposition of an ionic compound, when molten or in aqueous solution, by the passage of an electric current.",
    "answer": "Electrolysis"
  },
  {
    "subject": "Chemistry",
    "text": "The _____ as the molten or aqueous substance that undergoes electrolysis.",
    "answer": "electrolyte"
  },
  {
    "subject": "Chemistry",
    "text": "_____ (coating with zinc) is an example of a barrier method and sacrificial protection.",
    "answer": "Galvanizing"
  },
  {
    "subject": "Chemistry",
    "text": "Colour of methyl orange in alkaline solution is _____, colour of thymolphthalein is acidic solution is _____",
    "answer": "yellow, colourless"
  },
  {
    "subject": "Chemistry",
    "text": "An _____ transfers thermal energy to the surroundings leading to an increase in the temperature of the surroundings",
    "answer": "exothermic reaction"
  },
  {
    "subject": "Chemistry",
    "text": "The transfer of thermal energy during a reaction is called the _____ of the reaction.",
    "answer": "enthalpy change"
  },
  {
    "subject": "Chemistry",
    "text": "_____, Ea, as the minimum energy that colliding particles must have to react.",
    "answer": "Activation energy"
  },
  {
    "subject": "Chemistry",
    "text": "Catalyst increase the rate of a reaction and is _____ at the end of reaction.",
    "answer": "unchanged"
  },
  {
    "subject": "Chemistry",
    "text": "Write down the electronic configuration of Chloride ions (Cl<sup>-</sup>): _____",
    "answer": "2,8,8"
  },
  {
    "subject": "Chemistry",
    "text": "What is meant by the term <strong>acid</strong>? _____",
    "answer": "Proton donor"
  },
  {
    "subject": "Chemistry",
    "text": "What is meant by the term <strong>strong acid</strong>: an acid that is _____ dissociated in aqueous solution",
    "answer": "completely"
  },
  {
    "subject": "Chemistry",
    "text": "What is meant by the term <strong>weak acid</strong>: an acid that is _____ dissociated in aqueous solution",
    "answer": "partially"
  },
  {
    "subject": "Chemistry",
    "text": "Al<sub>2</sub>O<sub>3</sub> and ZnO are examples of _____ oxides.",
    "answer": "amphoteric"
  },
  {
    "subject": "Chemistry",
    "text": "Hydrated substance is a substance that is _____ combined with water.",
    "answer": "chemically"
  },
  {
    "subject": "Chemistry",
    "text": "_____ as the water molecules present in hydrated crystals.",
    "answer": "Water of crystallisation"
  },
  {
    "subject": "Chemistry",
    "text": "Alkali metal: _____ metal in the periodic table.",
    "answer": "Group I"
  },
  {
    "subject": "Chemistry",
    "text": "Halogen: _____ elements in the periodic table.",
    "answer": "Group VII"
  },
  {
    "subject": "Chemistry",
    "text": "Alloy is a _____ of a metal with other elements.",
    "answer": "mixture"
  },
  {
    "subject": "Chemistry",
    "text": "Photosynthesis the reaction between _____ and _____ to produce _____ and _____ in the presence of chlorophyll and using energy from light.",
    "answer": "carbon dioxide, water, glucose, oxygen"
  },
  {
    "subject": "Chemistry",
    "text": "Write down equation represents photosynthesis.",
    "answer": "Key: 6CO2 + 6H2O → C6H12O6 + 6O2"
  },
  {
    "subject": "Chemistry",
    "text": "Functional group is an atom or group of atoms that determine the chemical properties of a _____",
    "answer": "homologous series"
  },
  {
    "subject": "Chemistry",
    "text": "Saturated compound: molecules in which all carbon--carbon bonds are _____",
    "answer": "single bonds"
  },
  {
    "subject": "Chemistry",
    "text": "Hydrocarbon is a compound containing _____",
    "answer": "only carbon and hydrogen"
  },
  {
    "subject": "Chemistry",
    "text": "Polymers as large molecules built up from many smaller molecules called _____",
    "answer": "monomers"
  },
  {
    "subject": "Chemistry",
    "text": "Which diagram represents the outer-shell electron arrangement in a nitrogen molecule?",
    "answer": "Key: D",
    "image": "../Chemistry/q34.png"
  },
  {
    "subject": "Chemistry",
    "text": "Which diagram represents the arrangement of the outer-shell electrons of a noble gas?",
    "answer": "Key: A",
    "image": "../Chemistry/q35.png"
  },
  {
    "subject": "Chemistry",
    "text": "_____ is loss of electrons.",
    "answer": "Oxidation"
  },
  {
    "subject": "Chemistry",
    "text": "_____ has a decrease in oxidation number.",
    "answer": "Reduction"
  },
  {
    "subject": "Chemistry",
    "text": "Oxidising agent is a substance that _____ another substance and is itself _____",
    "answer": "oxidises, reduced"
  },
  {
    "subject": "Chemistry",
    "text": "Reducing agent is a substance that reduces another substance and is itself _____",
    "answer": "oxidized"
  },
  {
    "subject": "Chemistry",
    "text": "When a reversible reaction reach its equilibrium, the concentration of reactants and products _____",
    "answer": "remain constant/no longer change"
  },
  {
    "subject": "Chemistry",
    "text": "_____ is a solution containing the maximum concentration of a solute dissolved in the solvent at a specified temperature",
    "answer": "Saturated solution"
  },
  {
    "subject": "Chemistry",
    "text": "Bromine is a _____ at room temperature and pressure.",
    "answer": "red-brown liquid"
  },
  {
    "subject": "Chemistry",
    "text": "Iodine is a _____ at room temperature and pressure.",
    "answer": "grey-black solid"
  },
  {
    "subject": "Chemistry",
    "text": "Stainless steel as a mixture of iron and other elements such as _____",
    "answer": "chromium/nickel/carbon"
  },
  {
    "subject": "Chemistry",
    "text": "_____ as compounds with the same molecular formula, but different structural formulae",
    "answer": "Structural isomers"
  },
  {
    "subject": "Chemistry",
    "text": "State that an _____ has molecules in which one or more carbon--carbon bonds are not single bonds.",
    "answer": "unsaturated compound"
  },
  {
    "subject": "Chemistry",
    "text": "In a _____ <strong>one atom or group of atoms</strong> is replaced by another atom or group of atoms.",
    "answer": "substitution reaction"
  },
  {
    "subject": "Chemistry",
    "text": "Fermentation of aqueous glucose at _____°C in the presence of _____ and in the absence of oxygen.",
    "answer": "25-35, yeast"
  },
  {
    "subject": "Chemistry",
    "text": "_____ as natural polyamides and that they are formed from amino acid monomers",
    "answer": "Proteins"
  },
  {
    "subject": "Chemistry",
    "text": "Sources of the sulfur dioxide in the contact process is _____",
    "answer": "burning sulfur/roasting sulfide ores"
  },
  {
    "subject": "Chinese",
    "text": "久之，文备<strong>坐</strong>事下狱。（可提示 文甫：人名）",
    "answer": "Key: 因为译文：过了很久，皇甫文备因为出事被打入监狱。"
  },
  {
    "subject": "Chinese",
    "text": "而二三子者，以为己力，不亦<strong>诬</strong>乎？",
    "answer": "Key: 欺骗译文：而他们二三个人却把它作为自己的功劳，不是在骗人吗？"
  },
  {
    "subject": "Chinese",
    "text": "<strong>尤</strong>而效之，罪又甚焉。",
    "answer": "Key: 差错，过失，犯错译文：知道这是过错却又去效仿，那么罪过就更严重。"
  },
  {
    "subject": "Chinese",
    "text": "吾自有目，<strong>乌</strong>用镜<strong>为</strong>？",
    "answer": "Key: 乌：怎么，哪里。为：呢译文：我自己拥有眼睛，怎么还要用镜子呢？还见\"何辞为\"\"奚以之九万里而南为\""
  },
  {
    "subject": "Chinese",
    "text": "视世所称美人，<strong>鲜</strong>当意者。",
    "answer": "Key: 少译文：放眼世上那些称为美人的，很少有称心如意的。还见\"既无伯叔，终鲜兄弟\"。"
  },
  {
    "subject": "Chinese",
    "text": "冯异为人谦退不<strong>伐</strong>。",
    "answer": "Key: 夸耀、自夸译文：冯异为人谦恭退让不喜夸耀。"
  },
  {
    "subject": "Chinese",
    "text": "光武以此<strong>多</strong>之。",
    "answer": "Key: 赞美译文：光武因为这个称赞他。"
  },
  {
    "subject": "Chinese",
    "text": "左<strong>次</strong>泉州，成功复取南靖。",
    "answer": "Key: 驻扎。左:撤兵译文：撤兵驻扎在泉州，郑成功又攻取了南靖。"
  },
  {
    "subject": "Chinese",
    "text": "列坐其<strong>次</strong>",
    "answer": "Key: 处所、旁边译文：一一排列坐在水边。"
  },
  {
    "subject": "Chinese",
    "text": "成功谋举兵，兵寡，<strong>如</strong>南澳募兵。",
    "answer": "Key: 往、到译文：郑成功谋划起兵举事，兵员不足，便到南澳去招募兵丁。"
  },
  {
    "subject": "Chinese",
    "text": "<strong>乘</strong>彼垝垣",
    "answer": "Key: 登上译文：登上那矮墙"
  },
  {
    "subject": "Chinese",
    "text": "<strong>将</strong>子无怒",
    "answer": "Key: 请译文：请你不要发怒"
  },
  {
    "subject": "Chinese",
    "text": "以我<strong>贿</strong>迁",
    "answer": "Key: 财物，嫁妆译文：把我的嫁妆带走"
  },
  {
    "subject": "Chinese",
    "text": "靡使归<strong>聘</strong>",
    "answer": "Key: 探问译文：没有使者回去探问家人"
  },
  {
    "subject": "Chinese",
    "text": "忧心<strong>孔</strong>疚",
    "answer": "Key: 很译文：心里忧虑很是纠结痛苦"
  },
  {
    "subject": "Chinese",
    "text": "枉用相<strong>存</strong>",
    "answer": "Key: 问候译文：枉驾车马来问候我"
  },
  {
    "subject": "Chinese",
    "text": "<strong>始</strong>入门，夜被劫",
    "answer": "Key: 刚译文：刚入家门，晚上就被劫掠。"
  },
  {
    "subject": "Chinese",
    "text": "唐浮图慧褒<strong>始</strong>舍于其址，而卒葬之",
    "answer": "Key: 最初"
  },
  {
    "subject": "Chinese",
    "text": "逖居京口，<strong>纠</strong>合骁健",
    "answer": "Key: 集合译文：祖逖居住在京口，集合骁勇健将。"
  },
  {
    "subject": "Chinese",
    "text": "尤<strong>工</strong>画马",
    "answer": "Key: 精于译文：尤其精于画马。"
  },
  {
    "subject": "Chinese",
    "text": "<strong>书</strong>，足以记名姓而已。",
    "answer": "Key: 写字译文：写字只足以记记名姓罢了。"
  },
  {
    "subject": "Chinese",
    "text": "<strong>即</strong>坊肆中发书而熟复之",
    "answer": "Key: 就到译文：到街坊店铺里打开书来仔细复习它。"
  },
  {
    "subject": "Chinese",
    "text": "<strong>间</strong>有意欲起，而乱书围之",
    "answer": "Key: 偶尔译文：偶尔有意想起身，但房中散乱之书包围着起不来。"
  },
  {
    "subject": "Chinese",
    "text": "切须常加<strong>简</strong>束",
    "answer": "Key: 检查译文：切须经常对之加以检查约束。"
  },
  {
    "subject": "Chinese",
    "text": "客请予与对局，予颇<strong>易</strong>之。",
    "answer": "Key: 轻视译文：客人请我和他一起对战下棋，我非常轻视他。"
  },
  {
    "subject": "Chinese",
    "text": "<strong>甫</strong>下数子（棋子），客已先得手。",
    "answer": "Key: 刚译文：刚下几个棋子，客人已经先我得手。"
  },
  {
    "subject": "Chinese",
    "text": "我<strong>业</strong>治驼",
    "answer": "Key: 职业译文：我的职业就是治疗驼背（的问题）。"
  },
  {
    "subject": "Chinese",
    "text": "何以<strong>异</strong>于此医也哉",
    "answer": "Key: 和...不同译文：这与那个医生有什么不同呢？"
  },
  {
    "subject": "Chinese",
    "text": "馈<strong>汝</strong>浆",
    "answer": "Key: 你译文：赠与你琼浆。"
  },
  {
    "subject": "Chinese",
    "text": "父怒不<strong>与</strong>",
    "answer": "Key: 给译文：父亲生气了不肯给"
  },
  {
    "subject": "Chinese",
    "text": "<strong>谨</strong>庠序之教",
    "answer": "Key: 认真庠：商之学校。序：周之学校译文：认真兴办学校教育"
  },
  {
    "subject": "Chinese",
    "text": "<strong>申</strong>之以孝悌之义",
    "answer": "Key: 反复教导译文：用尊老敬上的道义反复教导他们"
  },
  {
    "subject": "Chinese",
    "text": "声非加<strong>疾</strong>也，而闻者彰",
    "answer": "Key: 强译文：声音并没有加强，但听声之人却听得清晰明白"
  },
  {
    "subject": "Chinese",
    "text": "<strong>参</strong>省乎己",
    "answer": "Key: 检查译文：对自己进行检查反省"
  },
  {
    "subject": "Chinese",
    "text": "\"不足<strong>为</strong>外人道也。\"（《桃花源记》）",
    "answer": "Key: 表示动作、行为的对象。可译为\"向\"\"对\"等。"
  },
  {
    "subject": "Chinese",
    "text": "圣人之所以为圣，......<strong>其</strong>皆出于此乎？（《师说》）",
    "answer": "Key: 放在句首，表示测度、反诘、婉商、期望等语气，视情况可译为\"大概\"\"难道\"\"还是\"\"可要\"等，或省去。"
  },
  {
    "subject": "Chinese",
    "text": "向吾不为斯役，<strong>则</strong>久已病矣。（《捕蛇者说》）",
    "answer": "Key: 表示假设关系。有的用在前一分句，引出假设的情况，相当于\"假使\"\"如果\"；有的用于后面的分句，表示假设或推断的结果，相当于\"那么\"\"就\"。"
  },
  {
    "subject": "Chinese",
    "text": "晋侯、秦伯围郑，<strong>以</strong>其无礼于晋，且贰于楚也。（《烛之武退秦师》）",
    "answer": "Key: 表示因果关系，常用在表原因的分句前，可译为\"因为\"。"
  },
  {
    "subject": "Chinese",
    "text": "<strong>盖</strong>均无贫，和无寡，安无倾。（《季氏将伐颛臾》）",
    "answer": "Key: \"盖\"用在句首，作副词，表示下边说的一些话，是带有推测性的断定，相当于现代汉语中\"大概\"\"推想\"的意思。"
  },
  {
    "subject": "Chinese",
    "text": "故木受绳则直，金就砺<strong>则</strong>利。（《劝学》）",
    "answer": "Key: 表承接。表示两件事情在时间上、事理上的紧密联系。可译为\"就\"\"便\"或译为\"原来是\"\"已经是\"。"
  },
  {
    "subject": "Chinese",
    "text": "归去来兮，请息交<strong>以</strong>绝游。（《归去来兮辞》）",
    "answer": "Key: 表示并列或递进关系，可译为\"而\"\"又\"\"而且\"\"并且\"等，或者省去。"
  },
  {
    "subject": "Chinese",
    "text": "寡人之<strong>于</strong>国也，尽心焉耳矣。（《寡人之于国也》）",
    "answer": "Key: 引进动作的时间、处所、范围、对象、方面、原因等，视情况可译为\"在\"\"在......方面\""
  },
  {
    "subject": "Chinese",
    "text": "不（通\"\"否）者，若属皆且<strong>为</strong>所虏！（《鸿门宴》）",
    "answer": "Key: 表示被动关系。读阳平声，可译为\"被\"。"
  },
  {
    "subject": "Chinese",
    "text": "君子博学<strong>而</strong>日参省乎己。（《劝学》）",
    "answer": "Key: 表示递进关系。可译为\"并且\"或\"而且\"。"
  },
  {
    "subject": "Economics",
    "text": "Scarcity -- _____ resources cannot satisfy _____ human wants.",
    "answer": "Key: Limited/unlimited"
  },
  {
    "subject": "Economics",
    "text": "Opportunity cost: the _____ forgone.",
    "answer": "Key: next best alternative(choice)"
  },
  {
    "subject": "Economics",
    "text": "Production possibility curve: the _____ possible output combinations of two G&amp;S can be produced with existing _____ and _____ being fully and efficiently used.",
    "answer": "Key: maximum/ resources/ technology"
  },
  {
    "subject": "Economics",
    "text": "Capital: _____ resources used to _____ other G&amp;S.",
    "answer": "Key: Man-made/ produce"
  },
  {
    "subject": "Economics",
    "text": "Enterprise: The willingness and ability to organize resources, including _____ and _____.",
    "answer": "Key: risk-taking/decision-making"
  },
  {
    "subject": "Economics",
    "text": "Free goods: Goods that are _____ in supply, do not use scarce resources to produce, having no _____.",
    "answer": "Key: unlimited/ opportunity cost"
  },
  {
    "subject": "Economics",
    "text": "Factor mobility: including _____ mobility and _____ mobility.",
    "answer": "Key: occupational/ geographical"
  },
  {
    "subject": "Economics",
    "text": "Three key economic questions (decisions): _____ to produce, _____ to produce and _____ to produce.",
    "answer": "Key: what/ how/ for whom"
  },
  {
    "subject": "Economics",
    "text": "Market economic system: Economic decisions are made by market forces which are _____ and _____, aiming for _____.",
    "answer": "Key: consumers(demand)/producers(supply)/profit maximization"
  },
  {
    "subject": "Economics",
    "text": "Market failure: _____ or _____ allocation of resources.",
    "answer": "Key: misallocation/ inefficient"
  },
  {
    "subject": "Economics",
    "text": "Private cost: costs that occur to _____ or _____ who conduct the actions.",
    "answer": "Key: producers/ consumers"
  },
  {
    "subject": "Economics",
    "text": "External cost: _____ impacts/costs imposed to _____.",
    "answer": "Key: negative/ third parties"
  },
  {
    "subject": "Economics",
    "text": "Social cost is the sum of _____ and _____.",
    "answer": "Key: private cost/ external cost"
  },
  {
    "subject": "Economics",
    "text": "Supply: the amount of a good or service that producers _____ and _____ to make and sell at different prices.",
    "answer": "Key: willing/ able"
  },
  {
    "subject": "Economics",
    "text": "Quantity demanded: The amount of a good or service consumers are willing and able to buy at _____.",
    "answer": "Key: each price/a given price"
  },
  {
    "subject": "Economics",
    "text": "_____ good are products whose demand _____ as income rise, such as junk food.",
    "answer": "Key: Inferior, fall"
  },
  {
    "subject": "Economics",
    "text": "Disposable income: income left after deduction of _____ tax.",
    "answer": "Key: income"
  },
  {
    "subject": "Economics",
    "text": "Substitutes: a product is a substitute when its purchase can _____ the want for another good or service.",
    "answer": "Key: replace"
  },
  {
    "subject": "Economics",
    "text": "Complementary goods: Products need to be consumed together, they are in _____.",
    "answer": "Key: joint demand"
  },
  {
    "subject": "Economics",
    "text": "Subsidy: a payment provided by _____ to _____ to help reduce their _____.",
    "answer": "Key: government/ producers/ costs of production"
  },
  {
    "subject": "Economics",
    "text": "Market Equilibrium: when market demand _____ market supply so there will be no pressure to change the market _____.",
    "answer": "Key: equals/ price"
  },
  {
    "subject": "Economics",
    "text": "Market Disequilibrium: when market demand does not equal market supply, such as _____ and _____.",
    "answer": "Key: shortage(excess demand)/surplus(excess supply)"
  },
  {
    "subject": "Economics",
    "text": "PED is calculated by percentage change in _____ over percentage change in _____.",
    "answer": "Key: quantity demanded/ price"
  },
  {
    "subject": "Economics",
    "text": "Price elastic of demand: a small change in _____ lead to greater change in _____, the value of PED is _____ than1.",
    "answer": "Key: price/ quantity demanded/ greater"
  },
  {
    "subject": "Economics",
    "text": "Perfectly _____ supply: quantity supplied does not change when price changes, the value of PES equals _____.",
    "answer": "Key: inelastic/ zero"
  },
  {
    "subject": "Economics",
    "text": "Reward for saving and cost of borrowing.",
    "answer": "Key: Interests"
  },
  {
    "subject": "Economics",
    "text": "Net advantage: All the _____ and _____ factors that affect the attractiveness of a particular job or occupation",
    "answer": "Key: wage/ non-wage"
  },
  {
    "subject": "Economics",
    "text": "Public limited company: firms can sell _____ to the public through _____.",
    "answer": "Key: shares/ stock exchange"
  },
  {
    "subject": "Economics",
    "text": "A state-owned enterprise is also called _____ which are firms owned by the _____.",
    "answer": "Key: public corporation/ government"
  },
  {
    "subject": "Economics",
    "text": "Multinational company is a firm that has business operations in more than one countries. It usually has its headquarter based in _____ country and subsidiaries in _____ countries.",
    "answer": "Key: home/ host"
  },
  {
    "subject": "Economics",
    "text": "Four goals of business organizations are profit maximization, _____, _____ and social welfare.",
    "answer": "Key: survival/ growth"
  },
  {
    "subject": "Economics",
    "text": "Productivity: measuring the amount of _____ that can be produced with a given amount of _____ over a period of time.",
    "answer": "Key: output/ input"
  },
  {
    "subject": "Economics",
    "text": "Fixed cost do not vary with the level of _____, it exists when output is _____.",
    "answer": "Key: output/ zero"
  },
  {
    "subject": "Economics",
    "text": "Total revenue equals _____ per unit times _____ sold",
    "answer": "Key: price/ quantity"
  },
  {
    "subject": "Economics",
    "text": "Profit equals total _____ minus total _____.",
    "answer": "Key: revenue/ cost"
  },
  {
    "subject": "Economics",
    "text": "Average cost: total _____ divided by total _____.",
    "answer": "Key: costs/ output"
  },
  {
    "subject": "Economics",
    "text": "Internal Economies of scale: _____ decreases as the production scale _____.",
    "answer": "Key: average cost/ increases"
  },
  {
    "subject": "Economics",
    "text": "_____ economies of scale: firms within an industry may have _____ as the industry expands.",
    "answer": "Key: External/ lower average cost"
  },
  {
    "subject": "Economics",
    "text": "Perfect competition: large number of firms sell _____ product to the large number of consumers in the market so that producers are price _____.",
    "answer": "Key: same/ takers"
  },
  {
    "subject": "Economics",
    "text": "Monopoly: a single supplier controls the total _____ of a product to a market and has significant market power so that it is a price _____.",
    "answer": "Key: supply/ maker"
  },
  {
    "subject": "Economics",
    "text": "_____ merger: firms engaged in the _____ stage of production of the same type of G&amp;S combine. E.g. a paper manufacturer merges with another paper manufacturer.",
    "answer": "Key: Horizontal/ same"
  },
  {
    "subject": "Economics",
    "text": "_____ merger: one firm combines with another at an earlier stage in its supply chain.",
    "answer": "Key: Backward vertical"
  },
  {
    "subject": "Economics",
    "text": "_____ merger: two or more firms from different industries combine into one firm, producing a wide range of different products.",
    "answer": "Key: Conglomerate/lateral"
  },
  {
    "subject": "Economics",
    "text": "Capital-_____ production method requires more capital input than _____.",
    "answer": "Key: intensive/ labour"
  },
  {
    "subject": "Economics",
    "text": "Trade union: an organization of workers that aims to promote and protect the interests of their _____ with the purpose of improving their _____ and _____.",
    "answer": "Key: members/ wages/ working conditions"
  },
  {
    "subject": "Economics",
    "text": "Primary sector: production or extraction of _____.",
    "answer": "Key: natural resources"
  },
  {
    "subject": "Economics",
    "text": "_____ sector: using unprocessed natural resources and other unfinished products to make finished goods.",
    "answer": "Key: Secondary/manufacturing"
  },
  {
    "subject": "Economics",
    "text": "_____ Demand is the sum of consumer expenditure, investment, government spending plus _____ minus _____.",
    "answer": "Key: Aggregate/ export/ import"
  },
  {
    "subject": "Economics",
    "text": "_____ tax is the proportion of income take in tax rises as income rises. Direct tax tends to be progressive, can be used to reduce _____.",
    "answer": "Key: Progressive/ income inequality"
  },
  {
    "subject": "Economics",
    "text": "_____ tax takes the same proportion of income whatever the level of income.",
    "answer": "Key: Proportional"
  },
  {
    "subject": "Economics",
    "text": "Fiscal policy aims to influence aggregate demand and economic activities through _____ and _____.",
    "answer": "Key: taxes/ government spending"
  },
  {
    "subject": "Economics",
    "text": "Monetary policy aims to influence aggregate demand and economic activities through the change in _____, _____, _____.",
    "answer": "Key: money supply/ interest rate/ exchange rate"
  },
  {
    "subject": "Economics",
    "text": "Economic growth means an _____ in the _____ of an economy over a year.",
    "answer": "Key: increase/ real GDP(total output)"
  },
  {
    "subject": "Economics",
    "text": "Economic _____ means a decrease in the _____ of an economy over at least 2 consecutive quarters.",
    "answer": "Key: Recession/ real GDP"
  },
  {
    "subject": "Economics",
    "text": "_____ refers to a general and sustained fall in the price level of goods and services in an economy.",
    "answer": "Key: Deflation"
  },
  {
    "subject": "Economics",
    "text": "Consumer price index(CPI) is the _____ of goods and services in the market basket consumed by a typical household comparing a base year.",
    "answer": "Key: weighted average price"
  },
  {
    "subject": "Economics",
    "text": "_____ GDP is the value of GDP measured at their current market prices.",
    "answer": "Key: Nominal"
  },
  {
    "subject": "Economics",
    "text": "Real GDP measures changes in total output assuming prices are _____ over time, adjusted for _____.",
    "answer": "Key: unchanged/ inflation"
  },
  {
    "subject": "Economics",
    "text": "Unemployment is the situation where people that are _____ and _____ to work cannot find a job.",
    "answer": "Key: willing/ able"
  },
  {
    "subject": "Economics",
    "text": "Unemployment rate is the number of unemployed over _____.",
    "answer": "Key: labour force"
  },
  {
    "subject": "Economics",
    "text": "_____ unemployment are people 'in-between' jobs.",
    "answer": "Key: Frictional"
  },
  {
    "subject": "Economics",
    "text": "Cyclical unemployment occurs when there is a significant fall in _____ for goods and services in the economy during an _____.",
    "answer": "Key: aggregate demand/ economic recession"
  },
  {
    "subject": "Economics",
    "text": "Technical unemployment: arises from factor substitution that _____ replaces _____.",
    "answer": "Key: capital/ labour"
  },
  {
    "subject": "Economics",
    "text": "Human development index (HDI) provides a wider measure of living standards and economic welfare, it combines _____, _____ and years of schooling into a single index with a value between 0 and 1.",
    "answer": "Key: GDP per capita, life expectancy"
  },
  {
    "subject": "Economics",
    "text": "Absolute poverty exists when people with very low income are unable to afford basic _____.",
    "answer": "Key: necessities"
  },
  {
    "subject": "Economics",
    "text": "_____ poverty exists when people have lower income than the average income level within a society.",
    "answer": "Key: Relative"
  },
  {
    "subject": "Economics",
    "text": "Three main factors affecting population growth: _____, _____, net migration (Immigration and emigration.)",
    "answer": "Key: Birth rate/ Death rate"
  },
  {
    "subject": "Economics",
    "text": "Characteristics of developed economies: _____ birth rate, _____ life expectancy, high level of saving and investment, well-trained workforce and the export of high value goods.",
    "answer": "Key: low/ high"
  },
  {
    "subject": "Economics",
    "text": "Protectionism involves the use of _____ by government to restrict international market access and competition.",
    "answer": "Key: trade barriers"
  },
  {
    "subject": "Economics",
    "text": "_____ is a kind of indirect tax to increase the price of import goods and services to make them more _____ and discourage domestic consumers from buying them.",
    "answer": "Key: Tariff/ expensive"
  },
  {
    "subject": "Economics",
    "text": "_____ is a limit on the _____ of imports allowed into a country each month or year.",
    "answer": "Key: Quota/ quantity(number)"
  },
  {
    "subject": "Economics",
    "text": "_____ is ban on the importation of particular product, or on all imports from a particular country.",
    "answer": "Key: Embargo"
  },
  {
    "subject": "Economics",
    "text": "Exchange rate is the _____ of one currency expressed in terms of another _____.",
    "answer": "Key: price/ currency"
  },
  {
    "subject": "Economics",
    "text": "_____ is a rise in the value of one currency against others in a _____ exchange rate system.",
    "answer": "Key: Appreciation/ floating"
  },
  {
    "subject": "Economics",
    "text": "_____ is a fall in the value of one currency against others in a _____ exchange rate system.",
    "answer": "Key: Depreciation/ floating"
  },
  {
    "subject": "Economics",
    "text": "_____ is a rise in the value of one currency against others by government's intervention.",
    "answer": "Key: Revaluation"
  },
  {
    "subject": "Economics",
    "text": "_____ is a fall in the value of one currency against others by government's intervention.",
    "answer": "Key: Devaluation"
  },
  {
    "subject": "Economics",
    "text": "_____: government/public revenue higher than government spending.",
    "answer": "Key: Budget surplus"
  },
  {
    "subject": "Economics",
    "text": "Trade deficit: total value of _____ is higher than total value of _____.",
    "answer": "Key: imports/exports"
  },
  {
    "subject": "Economics",
    "text": "Balance of payment surplus: _____ of a country is higher than _____ of a country.",
    "answer": "Key: receipts(credits)/payments(debits)"
  },
  {
    "subject": "Math",
    "text": "An acute angle is an angle _____ 90 degrees.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. less than",
      "B. equal to",
      "C. greater than",
      "D. less than or equal to"
    ]
  },
  {
    "subject": "Math",
    "text": "A straight line drawn from one point on the edge of a circle to another is called _____.",
    "answer": "Key: D",
    "isMultipleChoice": true,
    "options": [
      "A. perimeter",
      "B. diameter",
      "C. circumference",
      "D. chord"
    ]
  },
  {
    "subject": "Math",
    "text": "Find the gradient of the line segment AB, where A (5, -7) and B (2, -4).",
    "answer": "Key: -1"
  },
  {
    "subject": "Math",
    "text": "Find the next term of the following sequence: 22, 17, 12, 7, 2, _____",
    "answer": "Key: -3"
  },
  {
    "subject": "Math",
    "text": "The set of input values for a function is called the _____ of the function.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. intercept",
      "B. range",
      "C. domain",
      "D. gradient"
    ]
  },
  {
    "subject": "Math",
    "text": "What is range of the following graph?",
    "answer": "Key: D",
    "isMultipleChoice": true,
    "options": [
      "A. 7-19",
      "B. 2-19",
      "C. 3-6",
      "D. 3-19"
    ],
    "image": "../Math/q6.png"
  },
  {
    "subject": "Math",
    "text": "For composite functions, fg(x) = gf(x). (True or False)",
    "answer": "Key: False"
  },
  {
    "subject": "Math",
    "text": "For all positive integer n, √n is always an irrational number. (True or False)",
    "answer": "Key: False"
  },
  {
    "subject": "Math",
    "text": "Polynomials of the form ax³ + bx² + cx + d (where a ≠ 0) are called _____ functions.",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. linear",
      "B. quadratic",
      "C. cubic",
      "D. quartic"
    ]
  },
  {
    "subject": "Math",
    "text": "Which one is a geometric progression?",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. 2,3,4,5,...",
      "B. 3,6,9,12,...",
      "C. -8,4,-2,1,...",
      "D. 2,4,8,12,..."
    ]
  },
  {
    "subject": "Math",
    "text": "The sequence 5,8,11,14,17,... is called an arithmetic progression. Each term differs from the term before by a constant. This constant is called _____",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. common multiple",
      "B. common difference",
      "C. common ratio",
      "D. common distance"
    ]
  },
  {
    "subject": "Math",
    "text": "The product of the gradients of two perpendicular lines is always _____.",
    "answer": "Key: -1"
  },
  {
    "subject": "Math",
    "text": "Parallel lines have equal _____.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. intercepts",
      "B. gradients",
      "C. magnitude",
      "D. vectors"
    ]
  },
  {
    "subject": "Math",
    "text": "The part highlighted in red is called the _____ of the circle.",
    "answer": "Key: D",
    "isMultipleChoice": true,
    "options": [
      "A. chord",
      "B. radian",
      "C. perimeter",
      "D. arc"
    ],
    "image": "../Math/q14.png"
  },
  {
    "subject": "Math",
    "text": "The sine and cosine functions are called _____ functions because they repeat themselves over and over again.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. repetitive",
      "B. periodic",
      "C. timely",
      "D. frequent"
    ]
  },
  {
    "subject": "Math",
    "text": "The periods of y = sin(2x) and y = tan(x) are the same. (True or False)",
    "answer": "Key: True"
  },
  {
    "subject": "Math",
    "text": "dy/dx is called the _____ of y with respect to x.",
    "answer": "Key: D",
    "isMultipleChoice": true,
    "options": [
      "A. fraction",
      "B. difference",
      "C. integral",
      "D. derivative"
    ]
  },
  {
    "subject": "Math",
    "text": "The derivative of a curve f(x) tells you the _____ of the curve.",
    "answer": "Key: A",
    "isMultipleChoice": true,
    "options": [
      "A. gradient",
      "B. area",
      "C. x-intercept",
      "D. y-intercept"
    ]
  },
  {
    "subject": "Math",
    "text": "The denominator of the fraction π/9 is _____.",
    "answer": "Key: 9"
  },
  {
    "subject": "Math",
    "text": "d²y/dx² is called _____ of y with respect to x.",
    "answer": "Key: second derivative"
  },
  {
    "subject": "Math",
    "text": "Maximum and minimum points are both turning points, or _____ points.",
    "answer": "Key: stationary"
  },
  {
    "subject": "Math",
    "text": "Find the gradient of the curve y = x² + 1 at the point (2,1).",
    "answer": "Key: 4"
  },
  {
    "subject": "Math",
    "text": "Stationary points/turning points of a function f(x) occur when dy/dx = _____.",
    "answer": "Key: 0"
  },
  {
    "subject": "Math",
    "text": "The domain of the function f⁻¹(x) is the _____ of the function f(x).",
    "answer": "Key: range"
  },
  {
    "subject": "Math",
    "text": "To solve 2x+5=15, first we _____ 5 from both sides to get 2x=10. Then we _____ both sides by 2 to find x=5.",
    "answer": "Key: subtract, divide"
  },
  {
    "subject": "Math",
    "text": "_____ of line segment AB is a line that is perpendicular to AB and goes across the midpoint of AB.",
    "answer": "Key: perpendicular bisector"
  },
  {
    "subject": "Math",
    "text": "The function y = x²(x - 1) has _____ points of intersection with the x-axis.",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ]
  },
  {
    "subject": "Math",
    "text": "The function y = -x² - 4 has no points of intersection with the x-axis. (True or False)",
    "answer": "Key: True"
  },
  {
    "subject": "Physics",
    "text": "Define speed as distance travelled _____",
    "answer": "Key: per unit time"
  },
  {
    "subject": "Physics",
    "text": "Define velocity as _____ in a given _____",
    "answer": "Key: speed, direction"
  },
  {
    "subject": "Physics",
    "text": "A vector quantity has both _____ and _____",
    "answer": "Key: magnitude, direction"
  },
  {
    "subject": "Physics",
    "text": "Define acceleration as change in _____ per unit _____",
    "answer": "Key: velocity, time"
  },
  {
    "subject": "Physics",
    "text": "Weight is a _____ force on an object that has _____",
    "answer": "Key: gravitational, mass"
  },
  {
    "subject": "Physics",
    "text": "Define gravitational field strength as _____ per unit _____",
    "answer": "Key: (gravitational) force, mass"
  },
  {
    "subject": "Physics",
    "text": "Define density as _____ per unit _____",
    "answer": "Key: mass, volume"
  },
  {
    "subject": "Physics",
    "text": "Define the spring constant as _____ per unit _____",
    "answer": "Key: force, extension"
  },
  {
    "subject": "Physics",
    "text": "Hooke's law: the extension of the spring is (directly) proportional to the force acting on it, _____",
    "answer": "Key: within the limit of proportionality"
  },
  {
    "subject": "Physics",
    "text": "Define the moment of a force as moment = force × _____ from the pivot.",
    "answer": "Key: perpendicular distance"
  },
  {
    "subject": "Physics",
    "text": "Two conditions for an object in equilibrium: _____ is zero and _____ is zero.",
    "answer": "Key: resultant force, resultant moment"
  },
  {
    "subject": "Physics",
    "text": "Define momentum as mass × _____. Don't accept speed",
    "answer": "Key: velocity"
  },
  {
    "subject": "Physics",
    "text": "Define impulse as force × _____",
    "answer": "Key: time (for the force acts)"
  },
  {
    "subject": "Physics",
    "text": "Define resultant force as the rate of change in _____",
    "answer": "Key: momentum"
  },
  {
    "subject": "Physics",
    "text": "Magnitude of centripetal force depends on object's mass, _____",
    "answer": "Key: (rotation) speed/radius (of the circular path)"
  },
  {
    "subject": "Physics",
    "text": "Define power as the rate of _____",
    "answer": "Key: doing work/work done/energy transferred"
  },
  {
    "subject": "Physics",
    "text": "Define pressure as _____ per unit _____",
    "answer": "Key: force, area"
  },
  {
    "subject": "Physics",
    "text": "Define specific heat capacity as the _____ per unit mass to raise the temperature of a substance per unit _____",
    "answer": "Key: energy required, temperature (change)"
  },
  {
    "subject": "Physics",
    "text": "Define evaporation as the _____ particles overcoming the attraction force and escaping from the _____ of the liquid.",
    "answer": "Key: more energetic, surface"
  },
  {
    "subject": "Physics",
    "text": "Transverse wave: the direction of vibrations is _____ to the direction of propagation.",
    "answer": "Key: perpendicular"
  },
  {
    "subject": "Physics",
    "text": "Longitudinal wave: the direction of vibrations is _____ to the direction of propagation.",
    "answer": "Key: parallel"
  },
  {
    "subject": "Physics",
    "text": "The normal line divides the angle between the _____ and the _____ into two equal angles.",
    "answer": "Key: incident ray, reflected ray"
  },
  {
    "subject": "Physics",
    "text": "The angle between the _____ and the _____ is known as the angle of incidence.",
    "answer": "Key: incident ray, normal"
  },
  {
    "subject": "Physics",
    "text": "The angle between the _____ and the _____ is known as the angle of reflection.",
    "answer": "Key: reflected ray, normal"
  },
  {
    "subject": "Physics",
    "text": "Define ultrasound as sound with a _____ higher than _____",
    "answer": "Key: frequency, 20 kHz"
  },
  {
    "subject": "Physics",
    "text": "If the temperature stays constant, the _____ of the gas is inversely proportional to its _____",
    "answer": "Key: pressure, volume"
  },
  {
    "subject": "Physics",
    "text": "Define critical angle as the angle of _____ when angle of refraction is 90°",
    "answer": "Key: incidence"
  },
  {
    "subject": "Physics",
    "text": "Metal can conduct electricity easily because it has _____",
    "answer": "Key: free (moving) electrons"
  },
  {
    "subject": "Physics",
    "text": "State what is meant by electromotive force (e.m.f.):",
    "answer": "Key: B",
    "isMultipleChoice": true,
    "options": [
      "A. The force supplied to move electrons.",
      "B. Energy supplied in driving unit charge around a complete circuit.",
      "C. The driving force provided by electric motor.",
      "D. The current induced by electromagnetism."
    ]
  },
  {
    "subject": "Physics",
    "text": "_____ can protect the appliance when the current is too high.",
    "answer": "Key: Circuit breaker/fuse"
  },
  {
    "subject": "Physics",
    "text": "_____ can be used to avoid electric shock when touching the metal case.",
    "answer": "Key: Earthing (wire)/connecting to earth"
  },
  {
    "subject": "Physics",
    "text": "Iron, cobalt, _____, and steel are four common magnetic metals.",
    "answer": "Key: nickel"
  },
  {
    "subject": "Physics",
    "text": "Permeant magnets are _____ to be magnetized and _____ to lose magnetism.",
    "answer": "Key: hard/difficult, hard/difficult"
  },
  {
    "subject": "Physics",
    "text": "The direction of magnetic field points from _____ pole to _____ pole.",
    "answer": "Key: north, south"
  },
  {
    "subject": "Physics",
    "text": "To determine the force acting on a wire with current in a magnetic field, Fleming _____ rule can be used.",
    "answer": "Key: left hand"
  },
  {
    "subject": "Physics",
    "text": "Define Monochromatic as light of _____",
    "answer": "Key: a single [frequency/wavelength]"
  },
  {
    "subject": "Physics",
    "text": "Alpha particle is a _____ nucleus.",
    "answer": "Key: helium"
  },
  {
    "subject": "Physics",
    "text": "Gamma ray is a high energetic _____",
    "answer": "Key: (electromagnetic) wave/electromagnetic radiation/photons"
  },
  {
    "subject": "Physics",
    "text": "_____ particles have the strongest ionizing ability and weakest penetrating ability.",
    "answer": "Key: Alpha"
  },
  {
    "subject": "Physics",
    "text": "Background radiation counting is not constant, means that radioactivity",
    "answer": "Key: C",
    "isMultipleChoice": true,
    "options": [
      "A. is spontaneous",
      "B. is dangerous",
      "C. is random",
      "D. is weak"
    ]
  },
  {
    "subject": "Physics",
    "text": "Transformer can induce current in the secondary coil when the primary coil produces a _____",
    "answer": "Key: changing magnetic field"
  },
  {
    "subject": "Physics",
    "text": "To reverse the direction of induced e.m.f., direction of _____ can be reversed.",
    "answer": "Key: cutting/relative motion/magnetic field"
  },
  {
    "subject": "Physics",
    "text": "The density of electric/magnetic field lines presents the _____ of field.",
    "answer": "Key: strength"
  },
  {
    "subject": "Physics",
    "text": "Electrons flow in the _____ direction to the conventional current.",
    "answer": "Key: opposite"
  },
  {
    "subject": "Physics",
    "text": "Thermistor's resistance _____ as temperature increases.",
    "answer": "Key: decreases/lowers"
  },
  {
    "subject": "Physics",
    "text": "Resistance of a conducting wire is inversely proportional to the _____ of the wire.",
    "answer": "Key: (cross-sectional) area"
  },
  {
    "subject": "Physics",
    "text": "Lenz's law states that the current induced in the coil always _____ the change which produced it.",
    "answer": "Key: oppose/resist"
  },
  {
    "subject": "Physics",
    "text": "Accretion is a process of interstellar dust and gas gathering by the pull of _____",
    "answer": "Key: gravity/gravitational force"
  },
  {
    "subject": "Physics",
    "text": "Red shift is observed when the source is _____ relative to the observer.",
    "answer": "Key: moving away"
  }
];

export default allQuestions;
