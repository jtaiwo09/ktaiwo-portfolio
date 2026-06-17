import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "outline";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** External links open in a new tab; downloads set the download attr. */
  external?: boolean;
  download?: boolean;
  className?: string;
}

/**
 * The single CTA primitive. All buttons/links-as-buttons route through here so
 * styling stays identical everywhere.
 */
const Button = ({
  href,
  children,
  variant = "primary",
  external,
  download,
  className,
}: ButtonProps) => {
  const classes = twMerge(
    "btn",
    variant === "primary" ? "btn-primary" : "btn-outline",
    className
  );

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download: true } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default Button;
