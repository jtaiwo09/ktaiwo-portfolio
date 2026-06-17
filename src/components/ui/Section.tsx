import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Consistent section shell: anchor id, container width, and vertical rhythm.
 * Every page section wraps its content in this so spacing stays uniform.
 */
const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={twMerge("container scroll-mt-24 py-16 md:py-24", className)}
    >
      {children}
    </section>
  );
};

export default Section;
