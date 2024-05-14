import React from "react";
import Reveal from "./Reveal";
import { delay } from "framer-motion";

const Contact = () => {
  return (
    <section className="container py-10" id="contact">
      <div className="text-center max-w-ml mx-auto">
        <Reveal extraClass="mx-auto" showSlide={false}>
          <h3 className="text-lg font-mono text-green-700 dark:text-primary">
            04. What&apos;s Next?
          </h3>
        </Reveal>
        <Reveal
          showSlide={false}
          extraClass="mx-auto"
          transition={{ delay: 0.35 }}
        >
          <h2 className="text-secondary dark:text-info text-[48px] md:text-[60px] font-sans font-bold mb-3">
            Get in Touch
          </h2>
        </Reveal>
        <p className="text-secondary dark:text-warning text-lg font-sans mb-10"></p>
        <Reveal
          showSlide={false}
          extraClass="mx-auto"
          transition={{ delay: 0.45 }}
        >
          <a
            href="mailto:ktaiwo@gmail.com"
            className="btn btn-outline mx-auto px-3 md:px-6 text-green-700"
          >
            Say Hello
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
