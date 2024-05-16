"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hide: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, delay: 1 },
  },
};

const EmailContact = () => {
  return (
    <motion.div
      variants={variants}
      initial="hide"
      animate="visible"
      className="hidden lg:block fixed right-14 bottom-0"
    >
      <div className="flex flex-col items-center gap-6 after:content-[''] after:h-[120px] after:w-[1px] after:bg-warning">
        <Link
          href="mailto:ktaiwo660@gmail.com"
          className="text-xs text-secondary dark:text-info font-mono dark:hover:text-primary hover:text-green-700 text-xls transition-all tracking-[2px]"
          style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}
        >
          ktaiwo660@gmail.com
        </Link>
      </div>
    </motion.div>
  );
};

export default EmailContact;
