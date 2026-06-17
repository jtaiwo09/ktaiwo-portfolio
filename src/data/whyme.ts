import {
  FiTrendingUp,
  FiTarget,
  FiUsers,
  FiZap,
  FiLayers,
  FiShield,
} from "react-icons/fi";
import type { Differentiator } from "@/types";

export const differentiators: Differentiator[] = [
  {
    title: "5+ years in complex domains",
    description:
      "FinTech, payments, crypto, PropTech, logistics, and B2B marketplaces. I've shipped where correctness, security, and scale actually matter.",
    icon: FiTrendingUp,
  },
  {
    title: "Product mindset, not just code",
    description:
      "I translate business requirements into user-friendly solutions, and weigh engineering decisions against real business outcomes.",
    icon: FiTarget,
  },
  {
    title: "Leadership & mentorship",
    description:
      "I've led frontend teams, set code-quality standards, driven architecture decisions, and mentored engineers, multiplying output beyond my own.",
    icon: FiUsers,
  },
  {
    title: "Performance & scalability",
    description:
      "Measurable wins like 40% faster loads and 60% fewer requests, built on code splitting, caching, and deliberate state design.",
    icon: FiZap,
  },
  {
    title: "Architecture for the long run",
    description:
      "I design frontends with clear module and state boundaries so new features ship fast without piling on regressions.",
    icon: FiLayers,
  },
  {
    title: "Production-ready & secure",
    description:
      "Secure auth, RBAC, payment and escrow flows, accessibility, and testing standards expected in real production systems.",
    icon: FiShield,
  },
];
