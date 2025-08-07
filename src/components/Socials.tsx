"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

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

const variants = {
  hide: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, delay: 1 },
  },
};

const Socials = () => {
  return (
    <motion.div
      variants={variants}
      initial="hide"
      animate="visible"
      className="hidden lg:block fixed left-14 bottom-0"
    >
      <div className="flex flex-col items-center gap-8 after:content-[''] after:h-[120px] after:w-[1px] after:bg-warning">
        {socials.map((el) => (
          <Link
            key={el.name}
            href={el.href}
            className="text-secondary dark:text-warning dark:hover:text-primary hover:text-green-700 text-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <el.icon className="text-xl" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Socials;
