import React from "react";
import Reveal from "./Reveal";

interface IProps {
  /** Two-digit section index, e.g. "03". */
  index: string;
  title: string;
  /** Optional supporting line under the heading. */
  subtitle?: string;
}

/**
 * Standard section header: numbered mono index + heading + trailing rule.
 * Used by every section for a consistent, senior editorial rhythm.
 */
const SectionTitle = ({ index, title, subtitle }: IProps) => {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal>
        <div className="flex items-center gap-3 font-mono">
          <span className="accent text-lg md:text-2xl">{index}.</span>
          <h2 className="text-2xl md:text-[34px] font-bold tracking-tight text-secondary dark:text-info">
            {title}
          </h2>
          <span className="h-px flex-1 bg-warning/30 ml-2 hidden sm:block" />
        </div>
      </Reveal>
      {subtitle && (
        <Reveal transition={{ delay: 0.15, duration: 0.5 }}>
          <p className="muted mt-3 max-w-prose text-base md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionTitle;
