import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Adds hover lift + accent border for interactive cards. */
  interactive?: boolean;
}

/**
 * Base surface for every card-like block (projects, skills, why-me, etc.).
 * Centralizes border, background, radius, and hover behavior.
 */
const Card = ({ children, className, interactive }: CardProps) => {
  return (
    <div
      className={twMerge(
        "surface p-6 transition-all duration-300",
        interactive &&
          "hover:-translate-y-1 hover:border-brand/40 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-black/5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
