"use client";
import React, { use } from "react";
import Link from "next/link";
import { FiDownload, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { StoreContext } from "@/providers";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { navLinks, profile } from "@/data/profile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.08, duration: 0.5 },
  },
};
const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const { showNav, toggleShowNavbar } = use(StoreContext);

  return (
    <header className="sticky top-0 z-[99] border-b border-transparent bg-white/80 dark:bg-secondary/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4 font-mono">
        <Link
          href="/"
          className="accent text-2xl md:text-[28px] font-extrabold tracking-tight"
        >
          JTK<span className="text-warning">.</span>
        </Link>

        <div className="flex items-center gap-x-6">
          <nav className="hidden md:block">
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center gap-x-7"
            >
              {navLinks.map((el, i) => (
                <motion.li key={el.href} variants={item}>
                  <Link
                    href={el.href}
                    className="group flex items-center gap-x-1 text-xxs"
                  >
                    <span className="accent">{`0${i + 1}.`}</span>
                    <span className="text-secondary dark:text-info group-hover:accent transition-colors">
                      {el.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={item}>
                <a href={profile.resumeUrl} download>
                  <span className="btn btn-outline min-h-0 py-2 text-xxs font-normal capitalize">
                    <FiDownload className="text-base" />
                    Résumé
                  </span>
                </a>
              </motion.li>
            </motion.ul>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <button
              aria-label="Open menu"
              onClick={toggleShowNavbar}
              className="md:hidden text-2xl text-secondary dark:text-primary"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[100] h-dvh w-full bg-black/20 backdrop-blur-sm transition-all md:hidden ${
          showNav ? "translate-x-0" : "translate-x-full delay-300"
        }`}
        onClick={toggleShowNavbar}
      >
        <div
          className={`fixed right-0 top-0 h-dvh w-[72%] bg-white dark:bg-accent shadow-2xl transition-transform duration-300 ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end px-5 py-6">
            <button aria-label="Close menu" onClick={toggleShowNavbar}>
              <MdClose className="text-2xl" />
            </button>
          </div>
          <ul className="mx-auto mt-4 w-fit font-mono">
            {navLinks.map((el, i) => (
              <li key={el.href} className="mb-2" onClick={toggleShowNavbar}>
                <Link
                  href={el.href}
                  className="flex items-center gap-x-2 px-4 py-2 text-base"
                >
                  <span className="accent">{`0${i + 1}.`}</span>
                  <span className="text-secondary dark:text-info">
                    {el.label}
                  </span>
                </Link>
              </li>
            ))}
            <li className="mt-4 px-4" onClick={toggleShowNavbar}>
              <a href={profile.resumeUrl} download className="btn btn-outline">
                <FiDownload /> Résumé
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
