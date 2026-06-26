import { FaGithub } from "react-icons/fa6";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import type { NavLink, Profile } from "@/types";

/** Canonical production URL - single source of truth for SEO/metadata. */
export const siteUrl = "https://ktaiwo.vercel.app";

/** OG/Twitter share image. */
export const ogImage =
  "https://res.cloudinary.com/wosom/image/upload/v1739782444/profile_wuvkzj.jpg";

/** Site-wide SEO description. */
export const siteDescription =
  "Taiwo Joseph is a frontend engineer with 5+ years building fast, reliable web products across FinTech, payments, PropTech, logistics, and B2B marketplaces, leading frontend architecture and shipping production-grade user experiences.";

/** Topics for structured data (schema.org knowsAbout). */
export const knowsAbout = [
  "Frontend Engineering",
  "React",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "Web Performance",
  "Web Accessibility",
  "Design Systems",
  "FinTech",
  "Payments Integration",
  "Real-time Web Applications",
];

export const profile: Profile = {
  name: "Taiwo Joseph",
  role: "Frontend Lead & Technical Lead",
  tagline:
    "I build fast, reliable web products for FinTech, marketplaces, and logistics.",
  location: "Lagos, Nigeria · Available worldwide",
  availability: "Available for new product work",
  email: "ktaiwo660@gmail.com",
  phone: "+234 706 772 9362",
  resumeUrl: "/cv.pdf",
  socials: [
    { name: "GitHub", href: "https://github.com/jtaiwo09", icon: FaGithub },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/taiwo-joseph-55214b7b",
      icon: FiLinkedin,
    },
    { name: "X", href: "https://twitter.com/", icon: FiTwitter },
    { name: "Email", href: "mailto:ktaiwo660@gmail.com", icon: FiMail },
  ],
};

/**
 * Hero positioning paragraph, answers "why hire me" in the first few seconds.
 */
export const positioning =
  "Frontend engineer with 5+ years turning complex business requirements into scalable, production-grade user experiences. I've led frontend across FinTech, payments, PropTech, logistics, and B2B marketplaces, shipping real-time platforms, secure payment and escrow flows, and high-performance dashboards used by businesses and their customers.";

export const industries = [
  "FinTech & Payments",
  "Crypto / Web3",
  "PropTech",
  "Logistics & Supply Chain",
  "B2B Marketplaces",
  "Enterprise SaaS",
];

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#why-me", label: "Why me" },
  { href: "#contact", label: "Contact" },
];
