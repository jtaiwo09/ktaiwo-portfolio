import React from "react";
import type { Stat } from "@/types";
import Reveal from "./Reveal";

interface StatBlockProps {
  stats: Stat[];
}

/** Reusable metrics band. Used in the hero and anywhere numbers tell the story. */
const StatBlock = ({ stats }: StatBlockProps) => {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} transition={{ delay: 0.1 * i, duration: 0.5 }}>
          <div>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="accent text-3xl md:text-4xl font-bold tracking-tight">
              {stat.value}
            </dd>
            <p className="muted mt-1 text-sm leading-snug">{stat.label}</p>
          </div>
        </Reveal>
      ))}
    </dl>
  );
};

export default StatBlock;
