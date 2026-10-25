// All copy here comes from Yash's resume, Behance profile and the Figma case-study boards.
// Edit this file to update the site — every section reads from it.

export const profile = {
  name: "Yash Lohar",
  role: "UI/UX Designer",
  location: "Gujarat, India",
  email: "yashloharwork01@gmail.com",
  phone: "+91 77788 51170",
  phoneHref: "tel:+917778851170",
  linkedin: "https://www.linkedin.com/in/yashlohar14/",
  behance: "https://www.behance.net/yashlohar14",
  figma:
    "https://www.figma.com/design/kJ8fH0WigNMiwMpIxCmau3/sem-2-project?node-id=0-1",
  summary:
    "UI/UX Designer focused on creating intuitive, user-centered digital experiences. Skilled in Figma, wireframing, prototyping, user research, visual design, and design systems.",
  background:
    "With a Bachelor's background in Commerce, Accounting, and Business Management, I bring a strong understanding of business needs and user requirements to create practical, engaging, and effective digital solutions.",
};

export const skills = [
  {
    title: "UX Design",
    tone: "blue",
    items: [
      "User Research",
      "User Persona",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    title: "Tools",
    tone: "red",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    title: "Design & Other",
    tone: "white",
    items: [
      "Visual Design",
      "Design Thinking",
      "Graphic Design",
      "Video Editing",
      "Accounting",
      "Business Management",
    ],
  },
] as const;

export const marquee = [
  "User Research",
  "Personas",
  "Empathy Mapping",
  "Card Sorting",
  "Information Architecture",
  "User Flows",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Design Systems",
  "UX Laws",
  "Ergonomics",
  "SCAMPER",
  "DFV Matrix",
  "Figma",
  "Photoshop",
  "Illustrator",
];

export const process = [
  {
    step: "01",
    title: "Discover",
    text: "Choose the problem space, then dig in with secondary research and primary research such as surveys and interviews.",
  },
  {
    step: "02",
    title: "Define",
    text: "Turn findings into user personas, empathy maps and journey maps so the real pain points are clear.",
  },
  {
    step: "03",
    title: "Ideate",
    text: "Structure the product with information architecture, card sorting and user flows.",
  },
  {
    step: "04",
    title: "Design",
    text: "Move from low-fidelity wireframes to high-fidelity screens built on a consistent design system.",
  },
  {
    step: "05",
    title: "Deliver",
    text: "Prototype the final experience and present it as a clear, evidence-backed case study.",
  },
];

export const education = [
  {
    title: "Master of Design — UI/UX Design",
    place: "Indus University",
    period: "2026 – 2027",
  },
  {
    title: "Bachelor of Commerce",
    place: "Neeldeep College, Gujarat University",
    period: "2022 – 2025",
  },
];

export const certifications = ["Google UX Design", "Google Prompting Essentials"];

export const languages = ["English", "Hindi", "Gujarati"];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year?: string;
  cover: string;
  accent: "blue" | "red" | "violet";
  summary: string;
  role: string;
  team?: string;
  methods: string[];
  problem?: string;
  approach?: string[];
  insights?: string[];
  behance?: string;
  figmaNode?: string;
  /** true = has a full case-study page built from the Figma board */
  board?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "attendx",
    title: "AttendX",
    tagline: "Track better. Learn better.",
    category: "Mobile App · UX Case Study",
    cover: "/covers/attendx.jpg",
    accent: "red",
    featured: true,
    board: true,
    summary:
      "A digital platform that connects parents and teachers to monitor student attendance in real time, with timely updates and alerts when a student is absent.",
    role: "UI/UX Designer · M.Des design project",
    methods: [
      "Survey",
      "Empathy map",
      "Card sorting",
      "Information architecture",
      "User flow",
      "Wireframing",
      "Design system",
      "Visual screens",
    ],
    problem:
      "Many students skip classes or take leave without informing their parents. Schools and parents lack a shared, timely channel, so absences are often discovered too late.",
    approach: [
      "Mapped primary, secondary and tertiary audiences — parents, teachers, principals, students and the wider school ecosystem.",
      "Ran qualitative research and surveys to understand how attendance is communicated today.",
      "Built personas, an empathy map and card-sorting sessions to shape the information architecture.",
      "Designed user flows, wireframes, a design system and high-fidelity screens for both parents and teachers.",
    ],
    insights: [
      "Absence alerts reach parents in real time, not after the fact.",
      "Parents and teachers each get a focused experience built for their task.",
      "One shared channel closes the communication gap between school and home.",
    ],
    behance:
      "https://www.behance.net/gallery/251712815/AttendX-School-Attendance-Tracking-App",
    figmaNode: "13-205",
  },
  {
    slug: "firstcry",
    title: "FirstCry for Kids",
    tagline: "A simpler, safer shopping app made for young users.",
    category: "App Redesign · UX Case Study",
    cover: "/covers/firstcry.jpg",
    accent: "blue",
    featured: true,
    board: true,
    summary:
      "Redesigned the FirstCry app into a kid version — simpler, cleaner and more engaging — by reducing visual clutter, improving navigation and organising content for younger users.",
    role: "UI/UX Designer · M.Des project",
    methods: [
      "Secondary research",
      "Parent survey (30 responses)",
      "Competitive analysis",
      "User persona",
      "Empathy mapping",
      "Information architecture",
      "User flow",
      "High-fidelity UI",
    ],
    problem:
      "FirstCry is a popular app for parents to buy baby and kids' products, but it currently contains too much information for a child to navigate on their own.",
    approach: [
      "Followed a Discover → Define → Ideate → Design → Deliver process.",
      "Studied kid-focused products such as YouTube Kids for patterns that already work for children.",
      "Surveyed 30 parents about their child's age, interest in shopping and safety concerns.",
      "Rebuilt the information architecture and flows around fewer, larger, more visual choices.",
    ],
    insights: [
      "Fewer options are better for kids — choice overload stops them quickly.",
      "Kids enjoy apps more when they are colourful, visual and playful.",
      "Safety matters most to parents, so purchases need a parent-controlled step.",
    ],
    behance:
      "https://www.behance.net/gallery/252367477/Redesigning-FirstCry-for-Kids-UIUX-Case-Study",
    figmaNode: "1-3",
  },
  {
    slug: "ytmusic-spotify",
    title: "YouTube Music vs Spotify",
    tagline: "An ergonomics study of two music giants.",
    category: "UX Research · Ergonomics",
    cover: "/covers/ytmusic-spotify.jpg",
    accent: "violet",
    featured: true,
    board: true,
    summary:
      "A comparative study of YouTube Music and Spotify across visual, interactive, cognitive and physical ergonomics, backed by surveys and interviews with real listeners.",
    role: "UX Researcher",
    methods: [
      "Secondary research",
      "Surveys & interviews",
      "App study",
      "Ergonomics analysis",
      "Competitive analysis",
      "Market compatibility",
    ],
    problem:
      "Both apps offer huge libraries and familiar designs — so what actually makes listeners stay with one over the other?",
    approach: [
      "Gathered articles, reports and reviews as secondary research.",
      "Conducted surveys and interviews to capture real listening habits.",
      "Studied both interfaces feature by feature through four ergonomic lenses.",
    ],
    insights: [
      "Users get attached to one app and stay comfortable with it over time.",
      "People rely on recommendations and ready-made playlists more than search.",
      "Spotify's simple queue, fast search and smooth device switching win most users.",
      "YouTube Music earns trust through its wider catalogue of content.",
    ],
    behance:
      "https://www.behance.net/gallery/256367815/Ergonomics-Study-YouTube-Music-vs-Spotify",
    figmaNode: "1-1112",
  },
  {
    slug: "ux-laws",
    title: "UX Laws in Quick-Commerce",
    tagline: "Blinkit, Zepto and Instamart through eight laws of UX.",
    category: "UX Research · Heuristics",
    cover: "/covers/ux-laws.jpg",
    accent: "blue",
    featured: true,
    board: true,
    summary:
      "A side-by-side study of three quick-commerce apps, checking how each one applies — or breaks — eight well-known UX laws.",
    role: "UX Researcher",
    methods: [
      "Fitts's law",
      "Miller's law",
      "Jakob's law",
      "Hick's law",
      "Tesler's law",
      "Weber's law",
      "Doherty threshold",
      "Von Restorff effect",
    ],
    problem:
      "Quick-commerce apps compete on seconds. Small interface decisions decide whether an order feels effortless or frustrating.",
    approach: [
      "Explained each UX law in plain language with its design implication.",
      "Captured matching screens from Blinkit, Zepto and Instamart.",
      "Compared how well each app follows the law and where it falls short.",
    ],
    insights: [
      "Zepto puts the Add button directly on product cards — a clear Fitts's law win.",
      "Familiar patterns (Jakob's law) let users switch between apps with almost no learning.",
      "Even strong apps slip on Hick's law when too many choices appear at once.",
    ],
    behance:
      "https://www.behance.net/gallery/256344463/UX-Laws-A-Study-of-3-Quick-Commerce-Apps",
    figmaNode: "1-1608",
  },
  {
    slug: "heat-box",
    title: "Heat-Box",
    tagline: "A lunch box that keeps Indian food warm and leak-free.",
    category: "Product Innovation · SCAMPER & DFV",
    cover: "/covers/heat-box.jpg",
    accent: "red",
    featured: true,
    board: true,
    summary:
      "A product-innovation study using the SCAMPER framework and a DFV matrix to design a heated, leak-proof lunch box for students and working professionals.",
    role: "Product Designer",
    methods: ["SCAMPER", "DFV matrix", "Sketching", "Revenue model", "Target users"],
    problem:
      "Food packed in the morning goes cold by lunchtime, and oily Indian dishes like sabzi often leak — leaving the lunch box dirty and smelly.",
    approach: [
      "Applied each SCAMPER lens — substitute, combine, adapt, modify, put to another use, eliminate, reverse.",
      "Designed a layered structure with built-in heating, vacuum sealing and internal partitions.",
      "Checked desirability, feasibility and viability with a full cost and revenue breakdown.",
    ],
    insights: [
      "Estimated cost of about ₹630 per unit against a ₹999 selling price.",
      "Removes the need for office or canteen reheating altogether.",
    ],
    behance: "https://www.behance.net/gallery/256341219/Product-Innovation-CASE-STUDY",
    figmaNode: "1-1008",
  },
  {
    slug: "fampay",
    title: "FamPay Redesign",
    tagline: "Fixing ergonomics in a payments app for 15–21 year olds.",
    category: "App Redesign · Ergonomics",
    cover: "/covers/fampay.jpg",
    accent: "red",
    board: true,
    summary:
      "A redesign of FamPay for users aged 15–21, focused on visual, physical and cognitive ergonomics so first-time users always know where to go.",
    role: "UI/UX Designer",
    methods: ["User research", "Pain-point mapping", "Visual ergonomics", "Physical ergonomics", "Cognitive ergonomics"],
    problem:
      "FamPay packs in many features but lacks visual consistency in its icons, and first-time users don't get a clear direction.",
    approach: [
      "Audited the app against visual, physical and cognitive ergonomic rules.",
      "Regrouped similar actions and re-placed icons within comfortable thumb reach.",
      "Separated the FamPay QR from the bank-linked QR to avoid confusion.",
    ],
    figmaNode: "46-13944",
  },
  {
    slug: "inshot",
    title: "InShot Redesign",
    tagline: "An everyday video editor, rethought through the pillars of UX.",
    category: "App Redesign · UX Case Study",
    cover: "/covers/inshot.jpg",
    accent: "red",
    board: true,
    summary:
      "A redesign of the InShot video editor evaluated through usability, desirability, accessibility, credibility, findability and value.",
    role: "UI/UX Designer",
    methods: ["Heuristic review", "Target users", "UX pillars", "Visual redesign"],
    problem:
      "Icons like Filter, Effects and Adjust look alike and sit too close together, causing mis-taps. There's no search inside tools, and the interface doesn't feel premium.",
    approach: [
      "Identified content creators, influencers and vloggers as the core audience.",
      "Scored the current app against each UX pillar to find the weakest areas.",
      "Redesigned the toolset with clearer icons, better spacing and search.",
    ],
    figmaNode: "1-945",
  },
  {
    slug: "sanchita",
    title: "Sanchita Snacks",
    tagline: "A digital ordering system for campus catering.",
    category: "Product Innovation · Service Design",
    cover: "/covers/sanchita.jpg",
    accent: "red",
    board: true,
    summary:
      "A digital solution for a busy campus snack shop — token display plus mobile ordering — to cut queues and help the owner manage the lunch rush.",
    role: "UX Designer",
    team: "with Yuvraj Sharma",
    methods: [
      "Observation",
      "Interviews",
      "User persona",
      "User journey map",
      "DFV matrix",
      "Information architecture",
      "User flow",
      "Brainstorming",
    ],
    problem:
      "Sanchita Snacks attracts many customers but has no proper order-tracking system, which leads to long queues and confusion at peak times.",
    approach: [
      "Observed the shop during rush hours and interviewed both customers and the owner.",
      "Built a persona around the owner's goals: serve quickly and manage the rush.",
      "Validated a combined token-screen and mobile-ordering solution with users.",
    ],
    figmaNode: "46-619",
  },
  {
    slug: "navjivan",
    title: "Navjivan Milk",
    tagline: "Brand identity for a dairy brand.",
    category: "Branding · Graphic Design",
    cover: "/covers/navjivan.jpg",
    accent: "blue",
    summary: "A branding project for Navjivan milk.",
    role: "Graphic Designer",
    methods: ["Branding", "Packaging", "Visual identity"],
    behance: "https://www.behance.net/gallery/253159047/Navjivan-milk-branding",
  },
  {
    slug: "quickart",
    title: "QuickArt",
    tagline: "Art supplies, fast delivery.",
    category: "Mobile App · Concept",
    cover: "",
    accent: "violet",
    summary:
      "A quick-delivery app for artists and art students to get art and stationery supplies within 15–20 minutes when they run out mid-work — so the creative flow isn't interrupted.",
    role: "UI/UX Designer",
    methods: ["User research", "User flows", "UI design"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);
export const caseStudies = projects.filter((p) => p.board);

export const figmaUrl = (node: string) =>
  `https://www.figma.com/design/kJ8fH0WigNMiwMpIxCmau3/sem-2-project?node-id=${node}`;
