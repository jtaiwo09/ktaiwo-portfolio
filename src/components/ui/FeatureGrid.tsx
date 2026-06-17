import React from "react";
import type { FeatureItem } from "@/types";
import Reveal from "./Reveal";
import FeatureCard from "./FeatureCard";

interface FeatureGridProps {
  items: FeatureItem[];
  /** Columns at the largest breakpoint (2 or 3). */
  cols?: 2 | 3;
}

const colClass: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

/** Responsive grid of FeatureCards with staggered reveal. */
const FeatureGrid = ({ items, cols = 3 }: FeatureGridProps) => {
  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass[cols]}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} transition={{ delay: 0.05 * i, duration: 0.5 }}>
          <FeatureCard
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </Reveal>
      ))}
    </div>
  );
};

export default FeatureGrid;
