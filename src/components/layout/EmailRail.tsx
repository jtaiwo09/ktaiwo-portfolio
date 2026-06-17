"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const variants = {
  hide: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } },
};

/** Fixed vertical email rail (desktop only). */
const EmailRail = () => {
  return (
    <motion.div
      variants={variants}
      initial="hide"
      animate="visible"
      className="fixed bottom-0 right-6 hidden xl:block"
    >
      <div className="flex flex-col items-center gap-6 after:h-28 after:w-px after:bg-warning/50 after:content-['']">
        <Link
          href={`mailto:${profile.email}`}
          className="writing-mode text-xs font-mono tracking-[2px] text-warning hover:accent transition-all"
        >
          {profile.email}
        </Link>
      </div>
    </motion.div>
  );
};

export default EmailRail;
