// src/constants.js

// Skills Section Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import postmanLogo from "./assets/tech_logo/postman.png";

// Project Section Logos
import careerCoachLogo from "./assets/work_logo/sensi-ai-logo.png";
import spotifyLogo from "./assets/work_logo/spotify-logo.png";
import netflixLogo from "./assets/work_logo/netflix-image.png";
import ecommerceLogo from "./assets/work_logo/ecommerce-logo.png";
import tomatoLogo from "./assets/work_logo/tomato-app-logo.png";
import eduQuestLogo from "./assets/work_logo/Ecommerce-front.png";

// Education Section Logos
import nitdLogo from "./assets/education_logo/nit-delhi-logo.png";
import schoolLogo from "./assets/education_logo/myschool-logo.png";

export const profile = {
  name: "Arun Kumar Singh",
  role: "Full Stack Developer",
  summary:
    "I build modern web applications with strong UI, clean architecture, and practical problem solving. My focus is on turning ideas into polished digital products that feel fast, useful, and intuitive.",
  location: "NIT Delhi, India",
  resumeUrl: "https://drive.google.com/file/d/1pjNzXP3mwEGqw3644ZFSgDOpbVlKuJEQ/view?usp=sharing",
  github: "https://github.com/arunkumarsingh-20",
  linkedin: "https://www.linkedin.com/in/arunkumar-singh-19334a29b/",
};

export const heroStats = [
  {
    label: "Projects",
    value: "6+",
    note: "Built and deployed",
  },
  {
    label: "Core Stack",
    value: "MERN",
    note: "Modern web development",
  },
  {
    label: "Education",
    value: "B.Tech ECE",
    note: "NIT Delhi",
  },
  {
    label: "Focus",
    value: "Web + DSA",
    note: "Frontend, backend, problem solving",
  },
];

export const featuredProjectId = 0;

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: nitdLogo,
    school: "National Institute of Technology Delhi, Delhi",
    date: "Nov 2022 - Present",
    grade: "7.1 CGPA",
    degree: "B.Tech, Electronics and Communication Engineering",
    desc:
      "I am pursuing B.Tech in Electronics and Communication Engineering at NIT Delhi, where I have built a strong foundation in core electronics and computer science subjects like DSA, Algorithms, and Web Development.",
  },
  {
    id: 1,
    img: schoolLogo,
    school: "St. Augustine Sr. Sec. School, Agra",
    date: "Mar 2021",
    grade: "91.8%",
    degree: "Senior Secondary (XII) - Science (PCM)",
    desc:
      "Completed Class 12th with Physics, Chemistry, and Mathematics, building a strong academic base and an interest in problem solving and technology.",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "St. Augustine Sr. Sec. School, Agra",
    date: "Mar 2019",
    grade: "92.6%",
    degree: "CBSE (X)",
    desc:
      "Completed Class 10th under the CBSE board with Science and Information Technology.",
  },
];

export const projects = [
  {
    id: 0,
    title: "SensiAI Career Coach App",
    description:
      "An AI-powered career guidance platform built with Next.js that helps users with career planning, skill suggestions, and interview preparation. It uses Prisma, Neon PostgreSQL, and Clerk for a scalable and secure experience.",
    image: careerCoachLogo,
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "GenAI"],
    github: "https://github.com/arunkumarsingh-20/Sensi-AI",
    webapp: "https://sensi-ai-assistant.vercel.app/",
  },
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A responsive frontend e-commerce experience inspired by Myntra, built using HTML, CSS, and JavaScript with product listings, categories, and a clean shopping interface.",
    image: ecommerceLogo,
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    github: "https://github.com/arunkumarsingh-20/myntra-clone",
    webapp: "https://myntraclone-8iv.pages.dev/",
  },
  {
    id: 2,
    title: "Music Streaming Website",
    description:
      "A music streaming platform inspired by Spotify, built with React, Node.js, Firebase, and Tailwind CSS with authentication, playback, and a modern audio player.",
    image: spotifyLogo,
    tags: ["React JS", "Node JS", "Firebase", "Tailwind CSS"],
    github: "https://sp0tiify.netlify.app/",
    webapp: "https://sp0tiify.netlify.app/",
  },
  {
    id: 3,
    title: "Netflix Frontend Clone",
    description:
      "A frontend Netflix clone built with HTML, CSS, and JavaScript featuring responsive sections, hover effects, and a polished streaming-style UI.",
    image: netflixLogo,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/arunkumarsingh-20/netflix",
    webapp: "https://netfliixcloneishere.netlify.app/",
  },
  {
    id: 4,
    title: "Tomato Food Ordering App",
    description:
      "A dynamic food ordering web app with cart functionality, item browsing, and responsive UI for an interactive ordering experience.",
    image: tomatoLogo,
    tags: ["React JS", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/arunkumarsingh-20/tomato-app",
    webapp: "https://t0mato.netlify.app/",
  },
  {
    id: 5,
    title: "EduQuest App",
    description:
      "An e-learning platform built with HTML, CSS, JavaScript, and Bootstrap 5 featuring video tutorials, quizzes, and certification support.",
    image: eduQuestLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/arunkumarsingh-20/Elearning-Website",
    webapp: "https://eduquestapp.netlify.app/",
  },
];

export const socialLinks = {
  github: "https://github.com/arunkumarsingh-20",
  linkedin: "https://www.linkedin.com/in/arun-kumar-singh-19334a29b/",
  instagram: "http://instagram.com/_.arun2511/",
  leetcode: "https://leetcode.com/codewiitharun2513",
  codechef: "https://www.codechef.com/users/arunsingh",
  codeforces: "https://codeforces.com/profile/coding_verse",
};
