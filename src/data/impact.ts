import {
  FiLayers,
  FiZap,
  FiShield,
  FiActivity,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import type { FeatureItem } from "@/types";

/** Short product-minded lead line for the Impact section. */
export const impactIntro =
  "I don't just build frontends, I help businesses solve real problems and ship products people rely on. Here's the kind of impact that looks like.";

/**
 * Outcome-focused highlights (impact + career milestones in one place).
 * All truthful and drawn from real work, framed around results, not tech.
 */
export const impactHighlights: FeatureItem[] = [
  {
    title: "Shipped across 6 industries",
    description:
      "Production apps in FinTech, crypto, PropTech, logistics, B2B procurement, and marketplaces, each with its own constraints.",
    icon: FiLayers,
  },
  {
    title: "Led frontend at scale",
    description:
      "Owned frontend architecture and direction at Spleet and IPC, setting standards and driving decisions across teams.",
    icon: FiUsers,
  },
  {
    title: "Built financing & payment products",
    description:
      "A rental-financing (credit) product at Spleet, and escrow-backed payments with Paystack on CitiTasker.",
    icon: FiShield,
  },
  {
    title: "Delivered real-time platforms",
    description:
      "Live logistics tracking and messaging (Relay Pilot) and real-time market data for a crypto wallet (Resolve).",
    icon: FiActivity,
  },
  {
    title: "Measurable performance wins",
    description:
      "40% faster load times and 60% fewer network requests through code splitting, caching, and deliberate state design.",
    icon: FiZap,
  },
  {
    title: "Recognized for impact",
    description:
      "Awarded Best Frontend Engineer at Spleet Africa (2023) for technical contribution and delivery.",
    icon: FiTrendingUp,
  },
];
