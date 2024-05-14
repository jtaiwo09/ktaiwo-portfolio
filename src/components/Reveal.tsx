"use client";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useAnimation, useInView } from "framer-motion";

interface IProps {
  extraClass?: string;
  innerClass?: string;
  children: React.ReactNode;
  showSlide?: boolean;
  hidden?: {};
  visible?: {};
  transition?: {};
}
const Reveal = ({
  children,
  extraClass,
  innerClass,
  showSlide = true,
  hidden = { opacity: 0, y: 100 },
  visible = { opacity: 1, y: 0 },
  transition = { duration: 0.5, delay: 0.25 },
}: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={twMerge("relative overflow-hidden w-fit", extraClass)}
    >
      <motion.div
        variants={{
          hidden: hidden,
          visible: visible,
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ ...transition, duration: 0.5 }}
        className={twMerge("", innerClass)}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ ...transition, ease: "easeIn" }}
        className={`absolute top-1 bottom-4 left-0 right-0 dark:bg-primary bg-green-700 z-20 ${
          showSlide ? "block" : "hidden"
        }`}
      ></motion.div>
    </div>
  );
};

export default Reveal;
