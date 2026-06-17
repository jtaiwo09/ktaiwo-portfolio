import {
  FiSearch,
  FiClipboard,
  FiCode,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import type { FeatureItem } from "@/types";

/** My working process, shows I bring strategy and process, not just code. */
export const process: FeatureItem[] = [
  {
    title: "Discovery",
    description:
      "Start with the business goal and the user. Understand the problem, constraints, and what success actually means before writing code.",
    icon: FiSearch,
  },
  {
    title: "Planning",
    description:
      "Break requirements into a scalable technical plan, choosing architecture, state, and boundaries that fit how the product will grow.",
    icon: FiClipboard,
  },
  {
    title: "Development",
    description:
      "Build maintainable, performant, accessible interfaces, with clear components, sensible state, and an eye on edge cases.",
    icon: FiCode,
  },
  {
    title: "Optimization",
    description:
      "Measure and improve, speed, reliability, and UX, using profiling, caching, and code splitting where it actually moves the needle.",
    icon: FiTrendingUp,
  },
  {
    title: "Collaboration",
    description:
      "Work closely with design, product, and backend, translating between them and keeping technical decisions aligned with outcomes.",
    icon: FiUsers,
  },
];
