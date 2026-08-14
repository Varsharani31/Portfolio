export const profile = {
  name: "Varsharani Pavan Kumar Kasliwal",
  firstName: "Varsharani",
  initials: "VK",
  roles: ["Computer Engineering Student", "Frontend Developer", "Python Developer", "Quick Learner"],
  tagline: "Final Year B.E. Computer Engineering",
  intro:
    "Hi, I'm Varsharani — a passionate, result-driven engineering student who loves turning ideas into clean, responsive web experiences.",
  description:
    "I'm a final-year Computer Engineering student with hands-on experience in web development, Python and AI-based internships. I enjoy clean UI design, efficient problem solving and reliable software. Currently looking for internships and fresher roles where I can learn, contribute and grow.",
  highlights: [
    { label: "Based in", value: "Kharepatan, Maharashtra" },
    { label: "Degree", value: "B.E. Computer Engineering" },
    { label: "Focus", value: "Full-Stack Web Development" },
  ],
  email: "ranikasliwal7@gmail.com",
  phone: "+91 93223 00188",
  location: "Kharepatan, Maharashtra, India",
  linkedin: "https://linkedin.com/in/varsharani-kasliwal-859271287/",
  github: "https://github.com/Varsharani31",
  leetcode: "https://leetcode.com/varsharani-kasliwal",
  available: "Open to internships & fresher roles",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Internships", href: "#internships" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const heroMeta = [
  { icon: "location", text: "Kharepatan, Maharashtra" },
  { icon: "graduation", text: "B.E. (Computer Engineering)" },
  { icon: "sparkle", text: "Open to work" },
];

export const marqueeTech = [
  "React", "JavaScript", "HTML5", "CSS3", "Node.js", "MongoDB", "Python",
  "Java", "Android Studio", "GitHub", "Responsive Design", "Problem Solving",
];

export const aboutPoints = [
  { icon: "code", title: "Clean Code", desc: "Readable, maintainable, well-structured code" },
  { icon: "design", title: "Responsive UI", desc: "Mobile-first, accessible interfaces" },
  { icon: "growth", title: "Quick Learner", desc: "Self-learning through hands-on practice" },
  { icon: "team", title: "Team Player", desc: "Adaptable, good listener, easy to work with" },
];

export const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "2", label: "Internships Done" },
  { value: "5", label: "Certifications" },
  { value: "15+", label: "Skills & Tools" },
];

export const education = [
  {
    degree: "B.E. in Computer Engineering",
    school: "Yashwantrao Bhonsale Institute of Technology, Sawantwadi",
    status: "Pursuing (2026)",
    grade: "Current CGPA: 7.91",
    detail:
      "Final year student currently specialising in web development, databases, data structures and software engineering.",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Government Polytechnic, Malvan",
    status: "Completed",
    grade: "77.66%",
    detail: "Completed the diploma with 77.66% — without any KT or backlogs.",
  },
  {
    degree: "Secondary School (SSC)",
    school: "Hometown, Kharepatan",
    status: "Completed",
    grade: "83.80%",
    detail: "Completed 10th standard from my hometown Kharepatan with 83.80%.",
  },
];

export const skills = [
  {
    category: "Frontend",
    note: "Languages & UI",
    icon: "code",
    items: ["HTML5", "CSS3", "JavaScript", "React (Basic)", "Responsive Design"],
  },
  {
    category: "Backend & Database",
    note: "Servers & Data",
    icon: "database",
    items: ["Node.js (Basic)", "MongoDB", "REST APIs"],
  },
  {
    category: "Programming",
    note: "Core & DSA",
    icon: "terminal",
    items: ["Python", "Java (Basic)", "Problem Solving", "OOP Concepts"],
  },
  {
    category: "Tools & Soft Skills",
    note: "Workflow & Mindset",
    icon: "wrench",
    items: ["Android Studio", "VS Code", "Antigravity", "GitHub", "Software Development", "Self Learning", "Adaptability", "Good Listener", "Quick Learner"],
  },
];

export const resumeBars = [
  { label: "JavaScript & Frontend", value: 85 },
  { label: "Python", value: 82 },
  { label: "Responsive Design", value: 88 },
  { label: "Problem Solving", value: 78 },
  { label: "Node.js & MongoDB", value: 70 },
];

export const resumeTags = [
  "Quick Learner", "Self Starter", "Adaptable", "Good Listener", "Detail Oriented",
];

export const internships = [
  {
    role: "AI Intern",
    company: "Codec Technology (Online)",
    period: "Online · 1 Month",
    tags: ["Python", "AI / ML"],
    points: [
      "Worked on AI-based tasks and applied machine learning concepts on real-world mini problems.",
      "Learned to document, present and demo AI workflows in a remote team setup.",
    ],
  },
  {
    role: "Cyber Security Intern",
    company: "Codec Technology (Online)",
    period: "Online · 1 Month",
    tags: ["Security", "Networking"],
    points: [
      "Gained practical exposure to cyber security fundamentals, common threats and protective tools.",
      "Performed hands-on security labs and shared findings with the mentor.",
    ],
  },
];

export const projects = [
  {
    title: "Aashirwad Cakes — Online Cake Website",
    category: "Full-Stack",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    description:
      "A responsive online ordering website built with React for Aashirwad Cakes — product showcase, order flow and a clean, mobile-friendly interface.",
    links: { type: "external", label: "Live Demo" },
  },
  {
    title: "Motive — Stress Relief App",
    category: "Mobile",
    tags: ["Python", "Flutter", "Android"],
    description:
      "A mobile app built with Python and Flutter that helps users manage stress with guided breathing, mood tracking and motivating content.",
    links: { type: "code", label: "Source Code" },
  },
  {
    title: "Botpress Chatbot",
    category: "Python / AI",
    tags: ["Botpress", "AI", "Chatbot"],
    description:
      "A conversational chatbot built with Botpress that automates Q&A and guides users through common queries with a friendly flow.",
    links: { type: "code", label: "Source Code" },
  },
  {
    title: "Personal Firewall",
    category: "Security",
    tags: ["Networking", "Security", "Rules"],
    description:
      "A personal firewall prototype that monitors and controls network traffic with custom allow/block rules, built during my cyber security training.",
    links: { type: "code", label: "Source Code" },
  },
];

export const certifications = [
  {
    title: "Java Programming — NPTEL",
    issuer: "NPTEL",
    tags: ["Java"],
  },
  {
    title: "DSA Training Program (10 Days)",
    issuer: "Yashwantrao Bhonsale Institute of Technology, by Prashant Jha Sir",
    tags: ["DSA", "Problem Solving"],
  },
  {
    title: "Python Training — KLIC",
    issuer: "KLIC",
    tags: ["Python"],
  },
  {
    title: "AI Internship Certificate",
    issuer: "Codec Technology",
    tags: ["AI", "Python"],
  },
  {
    title: "Cyber Security Internship Certificate",
    issuer: "Codec Technology",
    tags: ["Security"],
  },
];

export const resumeData = {
  summary:
    "I hold strong fundamentals in programming and web development, backed by AI and cyber security internships, hands-on projects and a clean academic record. I am looking for an opportunity where I can apply my skills to real-world problems and grow into a dependable software engineer.",
  downloadName: "Varsharani_Kasliwal_Resume.html",
};

export const contact = {
  intro:
    "I'm actively looking for internships and entry-level roles. Whether you have a question or an opportunity, feel free to reach out — I usually reply within 24 hours.",
  items: [
    { icon: "mail", label: "Email", value: "ranikasliwal7@gmail.com", href: "mailto:ranikasliwal7@gmail.com" },
    { icon: "phone", label: "Phone", value: "+91 93223 00188", href: "tel:+919322300188" },
    { icon: "location", label: "Location", value: "Kharepatan, Maharashtra, India" },
  ],
  social: [
    { label: "LinkedIn", icon: "linkedin", href: "https://linkedin.com/in/varsharani-kasliwal-859271287/" },
    { label: "GitHub", icon: "github", href: "https://github.com/Varsharani31" },
  ],
};

export const footerNote = "Designed & built by Varsharani Kasliwal — React + Vite";