import React from "react";

export const portfolioData = {
  name: "Addissa Samson",
  role: "Software Developer & Product Designer",
  tagline:
    "Designing and building digital experiences that solve real-world problems.",

  email: "samsonaddissa247@gmail.com",

  socialLinks: {
    github: "https://github.com/samsonaddissa247-creator",
    linkedin: "https://www.linkedin.com/in/addissa-samson-2b45773a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },

  
  cv: {
    fileName: "Addissa-Samson-CV.pdf",
    path: "/documents/Addissa-Samson-CV.pdf",
    available: true,
  },
};

// About section paragraphs
export const aboutText = [
  "I am a passionate and dedicated software developer and designer with a strong focus on creating innovative digital solutions. With a background in both design and development, I bring a unique perspective to every project I work on. My goal is to craft user-centric experiences that not only meet but exceed expectations, leveraging the latest technologies and design principles.",
];

// Skills, grouped by category. Each skill just needs a name;
// the icon is looked up automatically in the Skills component.
export const skills = {
  Design: [
    "Figma",
    "UX Design",
    "UI Design",
    "Design Thinking",
    "Prototyping",
    "Wireframing",
  ],
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  "Backend / Other": ["Python", "Django", "Firebase", "Git","python", "GitHub"],
};

// Featured projects. Add a new object to this array to add a
// new project card — no other code needs to change.
export const projects = [
  {
    title: "Vivid horizon",
    description:
      "A landing page for a tourism company, showcasing destinations and travel packages with a focus on user experience and visual appeal.",
    image: "/images/Screenshot_20260723_102912_Files by Google.png",
    technologies: ["UX/UI Design", "HTML", "CSS", "JavaScript", "React"],
    demo: "https://vivid-ofl-landing-page.vercel.app/",
    github: "https://vercel.com/samsonaddissa247-8522s-projects?repo=https%3A%2F%2Fgithub.com%2Fsamsonaddissa247-creator%2FVividOFL",
  },
  {
    title: "SuperFert Landing page",
    description:
      "A landing page for a fertilizer company, showcasing products and services with a focus on user experience and visual appeal.",
    image: "/images/Superfert Landing Page (1).png",
    technologies: ["UX/UI Design", "HTML", "CSS", "JavaScript", "React"],
    demo: "https://super-fert-fertilizer.vercel.app/",
    github: "https://vercel.com/samsonaddissa247-8522s-projects?repo=https%3A%2F%2Fgithub.com%2Fsamsonaddissa247-creator%2FSuper-Fert-Fertilizer",
  },
  {
    title: "DBMS",
    description:
      "A database management system project that allows users to create, read, update, and delete records in a structured database.",
    image: "/images/Body.png",
    technologies: ["UX/UI Design", "Python", "Django", "SQLite"],
    demo: "https://dbms-learn-ofl.vercel.app/",
    github: "https://vercel.com/samsonaddissa247-8522s-projects?repo=https%3A%2F%2Fgithub.com%2Fsamsonaddissa247-creator%2Fdbms-learn-ofl",
    
  },
  {
    title: "Nexus",
    description: "A platform for my self to do my work and learn new things.",
    image: "",
    technologies: ["UX/UI Design", "HTML", "CSS", "JavaScript"],
    demo: "https://myuniverse-eight.vercel.app/",
    github: "https://github.com/samsonaddissa247-creator/myuniverse",
    
  },
  {
    title: "Expense tracker",
    description: "A web application that allows users to track their expenses, categorize them, and visualize spending patterns over time.",
    image: "/images/Screenshot (21).png",
    technologies: ["UX/UI Design", "HTML", "CSS", "JavaScript"],
    demo: "https://expense-tracker-sand-ten-91.vercel.app/",
    github: "https://vercel.com/samsonaddissa247-8522s-projects?repo=https%3A%2F%2Fgithub.com%2Fsamsonaddissa247-creator%2FExpense-Tracker",
    
  },
  {
    title: "Driving Safety Simulator",
    description: "A mini game that makes people know road signs and safety",
    image: "",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://myuniverse-eight.vercel.app/",
    github: "https://github.com/samsonaddissa247-creator/myuniverse",
    
  },
];

// Certificates. Add a new object to add a new certificate card.
export const certificates = [
  {
    title: "Introduction to Software Engineering",
    organization: "Coursera",
    date: "2026",
    description: "An introductory course covering the fundamentals of software engineering, including software development life cycle, methodologies, and best practices.",
    image: "/images/placeholder-project.png",
  },
  {
    title: "Crash Course on Python ",
    organization: "Coursera",
    date: "2026",
    description: "An introductory course covering the fundamentals of Python programming, including variables, data types, control structures, and functions.",
    image: "/images/placeholder-project.png",
  },
  {
    title: "Cyber security Foundamentals and threat mitigation",
    organization: "Coursera",
    date: "2026",
    description: "An introductory course covering the fundamentals of cyber security, including threat modeling, risk assessment, and mitigation strategies.",
    image: "/images/placeholder-project.png",
  },{
    title: "Prompt engineering for ChatGpt",
    organization: "Coursera",
    date: "2026",
    description: "An introductory course covering the fundamentals of prompt engineering for ChatGPT, including prompt design, optimization, and evaluation techniques.",
    image: "/images/placeholder-project.png",
  },

  
];

// Experience / education timeline. If you don't have employment
// history yet, keep this focused on learning and projects —
// never invent a job or company.
export const timeline = [
  {
    title: "Learning & Projects",
    place: "Self-directed",
    date: "Ongoing",
    description:
      "Youth Coding Instructor at Uncommon.Org, teaching Scratch programming and core computational concepts to students, enhancing their problem-solving skills .Designed and developed responsive landing pages and improving user experience and engagement.",
  },
];
