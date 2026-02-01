/**
 * Centralized data layer for the portfolio website.
 * All personal info, experience, projects, and content are defined here.
 * This makes it easy to update content without touching component code.
 */

export const personalInfo = {
  name: "Jaazib Tariq",
  firstName: "Jaazib",
  title: "SWE & Computer Engineering Student",
  university: "University of Waterloo",
  email: "jtariq@uwaterloo.ca",
  
  socials: {
    github: "https://github.com/JaazibTariq",
    linkedin: "https://linkedin.com/in/Jaazib",
  },
  
  // Short intro displayed on the homepage
  tagline: "I'm a Computer Engineering student at the University of Waterloo who loves building, learning, and creating. Feel free to reach out if you want to work together, or just chat!",
  
  // Extended bio for about section
  bio: [
    "Hi! I am Jaazib, a passionate Computer Engineering student at the University of Waterloo, with a keen interest in software development and emerging technologies.",
    "My academic journey has equipped me with a strong foundation in both hardware and software aspects of computer systems. I'm always eager to learn new technologies and apply my skills to solve real-world problems.",
    "Thank you so much for taking the time to check out my portfolio, feel free to reach out!"
  ],
};

export const experiences = [
  {
    id: 1,
    company: "Super.com",
    role: "Software Engineering Intern",
    dateRange: "Mar 2025 – Present",
    url: "https://www.super.com",
    description: null, // Add description if needed
  },
  {
    id: 2,
    company: "SellStatic",
    role: "Senior Software Engineer",
    dateRange: "Jun 2024 – Present",
    url: "https://www.sellstatic.com",
    description: null,
  },
  {
    id: 3,
    company: "MAX – Muslims Achieving Excellence",
    role: "Frontend Engineering Intern",
    dateRange: "Aug 2024 – Dec 2024",
    url: "https://onemax.org",
    description: null,
  },
];

export const projects = [
  {
    id: 1,
    title: "CodeClashers",
    description: "Competitive coding platform with real-time matches and an AI-curated problem bank.",
    url: "https://github.com/JaazibTariq",
    tags: [], // Add technology tags if desired
  },
  {
    id: 2,
    title: "Capital Quest",
    description: "A 3D game where you learn about finance, investing, the stock market, and real estate.",
    url: "https://devpost.com/software/idk-mng58v",
    tags: [],
  },
  {
    id: 3,
    title: "Mesh AI",
    description: "AI-powered connection tool for software engineers looking to collaborate.",
    url: "https://github.com/jaedonvisva/mesh",
    tags: [],
  },
  {
    id: 4,
    title: "Typing Tussle",
    subtitle: "Rhythm Hacks Winner",
    description: "Turn-based typing battler built with Python and Pygame.",
    url: "https://devpost.com/software/3-1-ratio",
    tags: [],
  },
];

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Site metadata
export const siteMetadata = {
  title: "Jaazib Tariq | Portfolio",
  description: "Computer Engineering student at the University of Waterloo passionate about software development and emerging technologies.",
  author: "Jaazib Tariq",
};
