import type { Article } from "@/types";

/**
 * Thought-leadership topics framed as areas of expertise you can write/speak on.
 * These are honest "topics + planned pieces", not fake published links.
 *
 * When you publish, set `href` to the live URL and update `meta` (e.g. "6 min read").
 */
export const articles: Article[] = [
  {
    title: "Designing escrow & payment flows on the frontend",
    description:
      "Lessons from integrating Paystack with escrow on CitiTasker, modeling fund states, validation, and trust between two-sided users.",
    topic: "Payments",
    meta: "Coming soon",
  },
  {
    title: "Real-time UI without the re-render tax",
    description:
      "How I keep chat, presence, and live tracking fast: deliberate state design, unread-count strategies, and lazy loading.",
    topic: "Real-time",
    meta: "Coming soon",
  },
  {
    title: "Cutting load time 40% and requests 60%",
    description:
      "A practical playbook: React Query caching, request deduplication, code splitting, and measuring what actually matters.",
    topic: "Performance",
    meta: "Coming soon",
  },
  {
    title: "Frontend RBAC that scales",
    description:
      "Designing granular, permission-driven UI that stays maintainable as roles multiply: patterns and pitfalls.",
    topic: "Architecture",
    meta: "Coming soon",
  },
];
