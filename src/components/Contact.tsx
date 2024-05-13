import React from "react";

const Contact = () => {
  return (
    <section className="container py-10" id="contact">
      <div className="text-center max-w-ml mx-auto">
        <h3 className="text-lg font-mono text-green-700 dark:text-primary">
          04. What&apos;s Next?
        </h3>
        <h2 className="text-secondary dark:text-info text-[48px] md:text-[60px] font-sans font-bold mb-3">
          Get in Touch
        </h2>
        <p className="text-secondary dark:text-warning text-lg font-sans mb-10"></p>
        <a
          href="mailto:ktaiwo@gmail.com"
          className="btn btn-outline mx-auto px-3 md:px-6 text-green-700"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
