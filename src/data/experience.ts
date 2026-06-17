import type { ExperienceItem } from "@/types";

/**
 * Professional experience timeline (most recent first).
 *
 * Copy is qualitative and truthful. Where you can confirm a hard number
 * (e.g. "improved engagement by 30%"), edit the achievement string to add it -
 * quantified results convert far better than qualitative ones.
 */
export const experience: ExperienceItem[] = [
  {
    role: "Frontend Engineer (leading frontend)",
    company: "Independent Purchasing Company (IPC)",
    companyUrl: "https://www.ipc-africa.com/",
    location: "Lagos, Nigeria",
    duration: "Apr 2025 to Present",
    summary:
      "Lead frontend development for IPC's business-critical products, GoSource and Relay Pilot, driving architecture decisions and building scalable systems alongside product, design, and backend teams.",
    contributions: [
      "Own frontend architecture for two production platforms, setting standards for scalability, maintainability, and performance.",
      "Spearheaded the full redesign and rebuild of GoSource, IPC's B2B procurement platform, modernizing the UI/UX end to end.",
      "Architected complex B2B features: supplier management, real-time inventory tracking, and streamlined order-processing workflows.",
      "Built Relay Pilot's real-time logistics experience: messaging, trip tracking, role-based dashboards, and secure file uploads.",
      "Partner with product and design to translate business objectives into technical solutions that ship.",
    ],
    achievements: [
      "Modernized GoSource's UX, measurably improving user satisfaction and engagement.",
      "Delivered real-time messaging (chat, typing indicators, unread counts, notifications) with efficient state management.",
      "Cut perceived load on data-heavy views through lazy loading and optimized rendering.",
    ],
    stack: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "Pinia", "WebSockets"],
  },
  {
    role: "Frontend Engineer",
    company: "Wosom Technologies",
    location: "Cyprus (Remote)",
    duration: "May 2024 to Feb 2025",
    summary:
      "Built scalable React + TypeScript applications with a focus on performance, access control, and real-time data.",
    contributions: [
      "Engineered scalable React + TypeScript applications against REST APIs and real-time updates.",
      "Implemented a role-based access control (RBAC) system with granular, permission-driven UI.",
      "Drove performance work across data-fetching and bundle delivery.",
    ],
    achievements: [
      "Reduced network requests by 60% with React Query caching and request deduplication.",
      "Improved load time by 40% via code splitting and lazy loading.",
      "Shipped a granular RBAC system that scaled cleanly across multiple user roles and permission levels.",
    ],
    stack: ["React", "TypeScript", "React Query", "REST APIs", "RBAC"],
  },
  {
    role: "Lead Frontend Engineer",
    company: "Spleet Africa",
    companyUrl: "https://spleet.africa",
    location: "Lagos, Nigeria",
    duration: "Nov 2021 to Apr 2024",
    summary:
      "Led frontend for a PropTech rental platform, building the marketplace, tenant verification, and a rental-financing (credit) product while establishing the team's engineering standards.",
    contributions: [
      "Architected scalable frontend systems that supported rapid, reliable feature delivery.",
      "Established frontend code-quality standards and best practices adopted across the team.",
      "Led frontend architecture decisions and cross-functional collaboration across product, design, and backend.",
      "Mentored junior developers, raising the bar on code review and delivery.",
    ],
    achievements: [
      "Awarded Best Frontend Engineer (Feb 2023) for technical contribution and delivery.",
      "Built a rental-financing product enabling tenants to access loans to finance rent.",
      "Helped scale the platform's product surface as the user base and listings grew.",
    ],
    stack: ["Vue.js", "Nuxt.js", "Vuex", "Pinia", "TypeScript", "Tailwind CSS"],
  },
];
