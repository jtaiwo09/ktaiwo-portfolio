import {
  FiCpu,
  FiGitBranch,
  FiLayers,
  FiZap,
  FiGrid,
  FiGlobe,
} from "react-icons/fi";
import type { FeatureItem } from "@/types";

/** Keeps the portfolio feeling active and forward-looking. */
export const exploring: FeatureItem[] = [
  {
    title: "AI-powered user experiences",
    description:
      "Designing interfaces where AI is a first-class part of the product, not a bolt-on.",
    icon: FiCpu,
  },
  {
    title: "Agentic workflows",
    description:
      "Using AI-assisted and agentic tooling to accelerate delivery without lowering the quality bar.",
    icon: FiGitBranch,
  },
  {
    title: "Frontend architecture at scale",
    description:
      "Patterns that keep large codebases fast to build in and safe to change.",
    icon: FiLayers,
  },
  {
    title: "Performance engineering",
    description:
      "Squeezing real-world speed from rendering, data, and the network.",
    icon: FiZap,
  },
  {
    title: "Design systems",
    description:
      "Reusable, accessible component systems that keep product teams consistent and fast.",
    icon: FiGrid,
  },
  {
    title: "Modern web platform",
    description:
      "Server components, streaming, and the evolving capabilities of the web platform.",
    icon: FiGlobe,
  },
];
