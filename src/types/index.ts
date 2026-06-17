import type { IconType } from "react-icons";

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

export interface Stat {
  /** The headline figure, e.g. "5+", "40%". */
  value: string;
  /** Short description of what the figure measures. */
  label: string;
}

export interface Profile {
  name: string;
  /** Role label shown as the eyebrow / title chip. */
  role: string;
  /** One-line positioning statement. */
  tagline: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  duration: string;
  /** Short framing of the role's scope. */
  summary: string;
  /** What I owned / drove day to day. */
  contributions: string[];
  /** Measurable outcomes. Wrap unverified figures in {{ }} so they are easy to find and replace. */
  achievements: string[];
  stack: string[];
}

/** One layer in a system architecture diagram (top-to-bottom flow). */
export interface ArchitectureLayer {
  label: string;
  /** Short note on the layer's role / tech. */
  note?: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  /** e.g. "FinTech · Crypto" */
  category: string;
  /** Industry vertical, e.g. "FinTech". */
  industry: string;
  /** Who uses the product. */
  targetUsers: string;
  /** The business objective the product serves. */
  businessGoals: string;
  /** Short one-liner for cards. */
  tagline: string;
  liveUrl?: string;
  repoUrl?: string;
  /** Years / period active. */
  period: string;
  role: string;
  featured?: boolean;
  overview: string;
  problem: string;
  solution: string[];
  challenges: string[];
  results: string[];
  takeaways: string[];
  stack: string[];
  /** Frontend-perspective system architecture (rendered as a diagram). */
  architecture: ArchitectureLayer[];
  /** Optional hero screenshot path under /public (e.g. "/images/gosource.png"). */
  image?: string;
  /** Optional additional screenshots for the case-study gallery. */
  gallery?: string[];
}

export interface SkillGroup {
  title: string;
  icon: IconType;
  skills: string[];
}

export interface Differentiator {
  title: string;
  description: string;
  icon: IconType;
}

/** Generic icon + title + description card (impact, process steps, exploring). */
export interface FeatureItem {
  title: string;
  description: string;
  icon: IconType;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface Article {
  title: string;
  description: string;
  topic: string;
  /** Reading time or status, e.g. "Coming soon". */
  meta: string;
  href?: string;
}

export interface Repo {
  name: string;
  description: string;
  href: string;
  tags: string[];
}
