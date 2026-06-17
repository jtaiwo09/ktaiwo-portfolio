import React from "react";
import { twMerge } from "tailwind-merge";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

/** Small pill for technologies / categories. Consistent across all sections. */
const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-full border border-black/[0.08] dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1 font-mono text-xs text-secondary/80 dark:text-info/80",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
