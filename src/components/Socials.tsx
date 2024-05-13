"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

const socials = [
  {
    name: "github",
    href: "https://github.com/jtaiwo09",
    icon: FaGithub,
  },
  {
    name: "twitter",
    href: "https://twitter.com/",
    icon: FiTwitter,
  },
  {
    name: "linkedin",
    href: "https://github.com/jtaiwo09",
    icon: FiLinkedin,
  },
  {
    name: "instagram",
    href: "https://github.com/jtaiwo09",
    icon: FaInstagram,
  },
];

const Socials = () => {
  return (
    <div className="hidden lg:block fixed left-14 bottom-0">
      <div className="flex flex-col items-center gap-8 after:content-[''] after:h-[150px] after:w-[1px] after:bg-info">
        {socials.map((el) => (
          <Link
            key={el.name}
            href={el.href}
            className="text-secondary dark:text-warning dark:hover:text-primary hover:text-green-700 text-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <el.icon className="text-2xl" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
