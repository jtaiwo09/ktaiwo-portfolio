import {
  FiLayout,
  FiCpu,
  FiDatabase,
  FiShield,
  FiUsers,
  FiLink,
} from "react-icons/fi";
import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    icon: FiLayout,
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Architecture & Performance",
    icon: FiCpu,
    skills: [
      "System Design",
      "Performance Optimization",
      "Scalability",
      "Accessibility",
      "Code Splitting & Lazy Loading",
    ],
  },
  {
    title: "State & Data",
    icon: FiDatabase,
    skills: [
      "React Query",
      "Zustand",
      "Vuex",
      "Pinia",
      "WebSockets (Pusher)",
      "REST APIs",
    ],
  },
  {
    title: "Styling & UI",
    icon: FiLayout,
    skills: [
      "Tailwind CSS",
      "Sass",
      "shadcn/ui",
      "Material UI",
      "Responsive Design",
      "Design Systems",
    ],
  },
  {
    title: "Security, Payments & Integrations",
    icon: FiShield,
    skills: [
      "Auth (Clerk, NextAuth)",
      "HTTP-only Cookies",
      "RBAC",
      "Paystack",
      "Cloudinary",
      "Quidax API",
    ],
  },
  {
    title: "Quality, Collaboration & Leadership",
    icon: FiUsers,
    skills: [
      "Technical Leadership",
      "Mentoring",
      "Product Collaboration",
      "Agile Delivery",
      "Code Review Standards",
      "Testing (Jest, Testing Library)",
    ],
  },
];
