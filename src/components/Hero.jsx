"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="container h-dvh max-h-[600px] py-20 sm:pt-[100px] flex items-center">
      <section className="select-none">
        <h2 className="text-green-700 dark:text-primary font-mono mb-3">
          Hi, my name is
        </h2>
        <div>
          <h1 className="text-secondary dark:text-info text-[40px] md:text-[60px] lg:text-[75px] font-sans font-extrabold leading-normal mb-2">
            Taiwo Joseph
            <span className="inline-block h-2 w-2 sm:w-3 sm:h-3 rounded-full ml-1 bg-green-700 dark:bg-primary"></span>
          </h1>
          <h1 className="text-green-700 dark:text-warning text-[40px] md:text-[60px] lg:text-[75px] font-sans font-extrabold leading-normal">
            I build things for the web
          </h1>
        </div>

        <p className="text-secondary dark:text-warning sm:text-[18px] font-sans max-w-xl my-8">
          I’m a design minded full stack engineer with a focus on creating
          usable and aesthetically pleasing products.
        </p>
        <Link
          className="btn btn-outline w-fit px-3 md:px-6 font-mono border border-green-700 dark:border-primary rounded text-[15px] font-normal capitalize text-green-700 dark:text-primary"
          href="#contact"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
};

export default Hero;
