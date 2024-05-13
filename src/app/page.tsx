import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default Page;
