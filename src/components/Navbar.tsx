"use client";
import React, { use } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { FiDownload, FiMenu } from "react-icons/fi";
import { StoreContext } from "@/providers";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};

const data = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "#about",
    name: "About",
  },
  {
    href: "#work",
    name: "Work",
  },
  {
    href: "#contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const { showNav, toggleShowNavbar } = use(StoreContext);

  return (
    <header className="sticky top-0 bg-white dark:bg-secondary z-[99]">
      <div className="flex justify-between items-center font-mono w-full py-6 max-w-[90%] lg:max-w-full mx-auto lg:px-14">
        <Link
          href="/"
          className="text-2xl md:text-[32px] text-green-700 dark:text-primary font-extrabold"
        >
          JTK
        </Link>
        <div className="flex items-center gap-x-6">
          <nav className="hidden md:block">
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center gap-x-8"
            >
              {data.map((el, i) => (
                <motion.li key={i} variants={item}>
                  <Link
                    href={el.href}
                    className="flex gap-x-1 text-xxs items-center"
                  >
                    <span className="text-green-700 dark:text-primary">{`0${
                      i + 1
                    }.`}</span>
                    <p className="text-secondary dark:text-info dark:hover:text-primary">
                      {el.name}
                    </p>
                  </Link>
                </motion.li>
              ))}
              <li>
                <a
                  href="/cv.pdf"
                  download={true}
                  className="flex gap-x-1 text-xxs"
                >
                  <button className="btn btn-outline bg-transparent text-secondary hover:text-white dark:hover:text-primary dark:text-white flex gap-2 border text-xxs font-normal capitalize px-4 hover:border-primary border-secondary">
                    <FiDownload className="text-base" />
                    Resume
                  </button>
                </a>
              </li>
            </motion.ul>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <FiMenu
              className="text-2xl md:hidden text-secondary dark:text-primary"
              onClick={toggleShowNavbar}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed h-dvh backdrop-blur-sm left-0 top-0 w-full bg-transparent z-[100] transition-all ${
          showNav ? "translate-x-0" : "translate-x-full delay-300"
        }`}
        onClick={toggleShowNavbar}
      >
        <div
          className={`w-[70%] transition-transform duration-300 shadow-[0_0_30px_-15px_rgba(0,0,0,0.3)] bg-white dark:bg-accent fixed top-0 right-0 h-dvh ${
            showNav ? "translate-x-0" : "translate-x-[100%]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-6 px-5">
            <MdClose
              className="text-2xl w-fit ml-auto"
              onClick={toggleShowNavbar}
            />
          </div>
          <ul className="w-fit mx-auto mt-5">
            {data.map((el, i) => (
              <li key={i} className="mb-3 last:mb-0" onClick={toggleShowNavbar}>
                <Link
                  href={el.href}
                  className="flex gap-x-1 text-base items-center px-4 py-2"
                >
                  <span className="text-green-700 dark:text-primary">{`0${
                    i + 1
                  }.`}</span>
                  <p className="text-secondary dark:text-info dark:hover:text-primary">
                    {el.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
