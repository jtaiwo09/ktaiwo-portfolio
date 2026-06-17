import React from "react";
import Link from "next/link";
import { profile, navLinks } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="container flex flex-col items-center gap-6 py-10 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xxs">
          {navLinks.map((el) => (
            <Link
              key={el.href}
              href={el.href}
              className="text-warning hover:accent transition-colors"
            >
              {el.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {profile.socials.map((el) => (
            <Link
              key={el.name}
              href={el.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={el.name}
              className="text-warning hover:accent transition-all hover:-translate-y-0.5"
            >
              <el.icon className="text-lg" />
            </Link>
          ))}
        </div>

        <p className="font-mono text-xxs text-warning">
          Designed & built by {profile.name} · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
