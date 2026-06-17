"use client";
import React, { use, useEffect } from "react";
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

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showNav]);

  return (
    <>
      {/* NOTE: backdrop-blur lives on this inner bar, NOT on a parent of the
          drawer — backdrop-filter creates a containing block that would break
          the drawer's `fixed` positioning. */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-md dark:border-white/[0.06] dark:bg-secondary/80">
        <div className="container flex items-center justify-between py-4 font-mono">
          <Link
            href="/"
            className="accent text-2xl font-extrabold tracking-tight md:text-[28px]"
          >
            JTK<span className="text-warning">.</span>
          </Link>

          <div className="flex items-center gap-x-6">
            <nav className="hidden md:block">
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex items-center gap-x-6 lg:gap-x-7"
              >
                {navLinks.map((el, i) => (
                  <motion.li key={el.href} variants={item}>
                    <Link
                      href={el.href}
                      className="group flex items-center gap-x-1 text-xxs"
                    >
                      <span className="accent">{`0${i + 1}.`}</span>
                      <span className="text-secondary transition-colors group-hover:accent dark:text-info">
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
                className="text-2xl text-secondary md:hidden dark:text-primary"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden={!showNav}
        onClick={toggleShowNavbar}
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          showNav ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed right-0 top-0 z-[101] flex h-dvh w-[82%] max-w-[320px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden dark:bg-accent ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end px-5 py-6">
          <button
            aria-label="Close menu"
            onClick={toggleShowNavbar}
            className="text-2xl text-secondary dark:text-info"
          >
            <MdClose />
          </button>
        </div>
        <ul className="mt-2 flex flex-col px-6 font-mono">
          {navLinks.map((el, i) => (
            <li key={el.href} onClick={toggleShowNavbar}>
              <Link
                href={el.href}
                className="flex items-center gap-x-2 py-3 text-base"
              >
                <span className="accent">{`0${i + 1}.`}</span>
                <span className="text-secondary dark:text-info">{el.label}</span>
              </Link>
            </li>
          ))}
          <li className="mt-6" onClick={toggleShowNavbar}>
            <a
              href={profile.resumeUrl}
              download
              className="btn btn-outline w-full"
            >
              <FiDownload /> Résumé
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
