"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const variants = {
  hide: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } },
};

/** Fixed vertical social rail (desktop only). Excludes the email link. */
const SocialRail = () => {
  const socials = profile.socials.filter((s) => s.name !== "Email");

  return (
    <motion.div
      variants={variants}
      initial="hide"
      animate="visible"
      className="fixed bottom-0 left-6 hidden xl:block"
    >
      <div className="flex flex-col items-center gap-6 after:h-28 after:w-px after:bg-warning/50 after:content-['']">
        {socials.map((el) => (
          <Link
            key={el.name}
            href={el.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={el.name}
            className="text-warning hover:accent transition-all duration-300 hover:-translate-y-0.5"
          >
            <el.icon className="text-xl" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialRail;
