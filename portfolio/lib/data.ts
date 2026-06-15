// ─── Portfolio Data — Nikhil Pahuja ──────────────────────────────────────────
import dataflowImg from "@/media/projects/dataflow.png";
import excelhireImg from "@/media/projects/excelhire.png";
import finsightImg from "@/media/projects/finsight.png";
import arigatoImg from "@/media/projects/arigato.png";
// ─────────────────────────────────────────────────────────────────────────────

export const identity = {
  name: "Nikhil Pahuja",
  role: "Backend & AI Engineer",
  location: "Gurgaon, India",
  email: "nikhilpahuja75@gmail.com",
  phone: "+91 9821078067",
  github: "https://github.com/nikhilpahujaa",
  linkedin: "https://www.linkedin.com/in/nikhilpahujaa",
  portfolio: "https://nikportfolio.vercel.app/",
} as const;

export const roles = [
  "Backend Developer",
  "AI Engineer",
  "Node.js Developer",
  "Python Developer",
  "APIs & Microservices",
];

export const stats = [
  { value: "2+", label: "Years Exp" },
  { value: "2", label: "Projects" },
  { value: "2", label: "Companies" },
];

export const techStack = [
  {
    label: "Primary Stack",
    value: "JavaScript / Node.js / Python",
    detail: "Where the backend magic happens — robust, async, and battle-tested in production",
  },
  {
    label: "Cloud & DevOps",
    value: "Azure / Docker / AWS",
    detail: "Containerised, deployed, and monitored — real traffic, real scale",
  },
  {
    label: "Data Layer",
    value: "PostgreSQL / MongoDB / Redis",
    detail: "Relational structure, document flexibility, and blazing-fast cache — all three in the arsenal",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code" as const,
    items: ["JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend Frameworks",
    icon: "server" as const,
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "OAuth 2.0"],
  },
  {
    title: "Frontend",
    icon: "code" as const,
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Databases",
    icon: "database" as const,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore", "Redis"],
  },
  {
    title: "DevOps & Tools",
    icon: "cloud" as const,
    items: ["Docker", "Prometheus", "Grafana", "Git", "GitHub", "Postman", "Azure", "AWS"],
  },
  {
    title: "AI & ML",
    icon: "sparkles" as const,
    items: ["LangChain", "LLM Integration", "Prompt Engineering", "scikit-learn", "statsmodels"],
    accent: true,
  },
];

export type SkillIcon = (typeof skillGroups)[number]["icon"];

export const experience = [
  {
    role: "Backend & AI Engineer",
    company: "Shephertz, Gurgaon",
    period: "July 2024 — Present",
    bullets: [
      // WAnywhere — Employee Monitoring & Productivity Platform
      "Architected and shipped production REST APIs in Node.js, Express, MongoDB, and PostgreSQL for enterprise SaaS — locked down with JWT auth, RBAC, and Dockerized deployments carrying real user traffic.",
      "Squeezed 20% more performance out of backend and database layers through targeted optimisation and surgical code refactoring — measurable impact, zero guesswork.",
      "Built Docker-based CRUD microservice scaffolding tools for Node.js + MongoDB and FastAPI + MySQL, cutting new-service spin-up time dramatically across the engineering team.",
      // SocialAnywhere — AI-Powered Social Media Platform
      "Engineered cross-platform APIs and scheduling workflows handling publishing pipelines for Instagram, Facebook, Twitter/X, LinkedIn, and Reddit — five platforms, one coherent system.",
      "Designed and wired an AI content generation pipeline powered by OpenAI GPT-4, Groq (Llama 3), and Stability AI — with prompt engineering and multi-model fallback so the system never goes dark.",
      "Built FastAPI-based scheduling and analytics APIs that give the social publishing engine both its rhythm and its memory.",
      // CloudOptimiser — AI Cloud Cost Optimization Platform
      "Built cloud monitoring and cost optimisation APIs for Azure and AWS that improved resource utilisation by ~25%; layered in ML-based cost forecasting using scikit-learn and statsmodels so teams can see the bill before it arrives.",
      "Contributed to a microservices architecture spanning Docker, Prometheus, Grafana, and Azure Pipelines — improving deployment and observability efficiency by ~30% and turning black-box infrastructure into a fully visible system.",
    ],
  },
  {
    role: "Developer Intern",
    company: "HERE Technologies, Remote",
    period: "June 2023 — July 2023",
    bullets: [
      "Built Python automation scripts and Scrapy-based web crawlers to extract clean, structured POI data from the open web — turning raw noise into location intelligence.",
      "Processed, validated, and cleaned large datasets feeding directly into HERE's global location products — because bad data costs more than no data.",
    ],
  },
];

export const projects = [
  {
    name: "AriGato",
    subtitle: "Learn Japanese with AI",
    description:
      "An interactive Japanese learning platform (JLPT N5–N1) with AI-powered pronunciation practice, spaced repetition flashcards, and gamification features including XP system and achievement badges.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/ui", "Framer Motion", "Web Speech API"],
    url: "https://arigatoo.vercel.app/",
    period: "2024",
    featured: true,
    image: arigatoImg,
    highlights: [
      {
        label: "AI Speech",
        detail: "AI-powered pronunciation evaluation via Web Speech API"
      },
      {
        label: "Gamification",
        detail: "XP accumulation system, flashcard cycles, and achievement badges"
      }
    ],
  },
  {
    name: "DataFlow",
    subtitle: "Database Migration Studio",
    description:
      "Migrating databases is painful. DataFlow makes it surgical. A full-stack tool that automates migration from MySQL to PostgreSQL and MongoDB — handling schema analysis, type mapping, and relationship preservation so nothing gets lost in translation. Backed by a production-ready FastAPI engine with configurable migration workflows.",
    tech: ["React", "Tailwind CSS", "FastAPI", "Python", "MySQL", "PostgreSQL", "MongoDB"],
    url: "https://datafloww.vercel.app/",
    period: "2024",
    featured: true,
    image: dataflowImg,
    highlights: [
      {
        label: "Migration Engine",
        detail: "Automated schema analysis, type mapping, and relationship preservation — no data left behind",
      },
      {
        label: "Backend",
        detail: "Production-ready FastAPI REST APIs driving configurable, repeatable migration workflows",
      },
    ],
  },
  {
    name: "FinSight",
    subtitle: "Enterprise Financial Management Dashboard",
    description:
      "An enterprise-grade financial management dashboard with real-time transaction tracking, advanced analytics, and role-based access control. Features interactive charts, soft-delete audit trails, and secure JWT authentication.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Node.js", "Express", "Firebase", "JWT", "Docker"],
    url: "https://finsighttt.vercel.app",
    period: "2024",
    featured: true,
    image: finsightImg,
    highlights: [
      {
        label: "Analytics",
        detail: "Interactive financial charts and real-time transaction tracking"
      },
      {
        label: "Security",
        detail: "Role-based access control (RBAC) with JWT auth and audit trails"
      }
    ],
  },
  {
    name: "ExcelHire",
    subtitle: "AI-Powered Excel Interview Platform",
    description:
      "What if your interview platform was as smart as your best interviewer? ExcelHire uses OpenAI GPT-4 to run conversational Excel skill assessments — adaptive questions, real-time scoring, and LLM-generated feedback. Secure APIs for auth, interviews, evaluation, and reporting. Fully Dockerized and ready to scale.",
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Docker", "OpenAI GPT-4"],
    url: "https://excelhire.vercel.app/",
    period: "2024",
    featured: true,
    image: excelhireImg,
    highlights: [
      {
        label: "AI Engine",
        detail: "GPT-4 drives adaptive skill assessment and automated scoring — interviews that think on their feet",
      },
      {
        label: "Deployment",
        detail: "Fully Dockerized full-stack app — consistent, isolated, and dead easy to reproduce anywhere",
      },
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  university: "UPES, Dehradun",
  period: "2020 — 2024",
  cgpa: "8.02 CGPA",
};

export const schooling = [
  {
    level: "12th Grade",
    school: "Lions Public School, Gurgaon",
    period: "2019 — 2020",
    score: "80.4%",
  },
  {
    level: "10th Grade",
    school: "Lions Public School, Gurgaon",
    period: "2017 — 2018",
    score: "71.6%",
  },
];
