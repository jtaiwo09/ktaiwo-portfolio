import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import WhyMe from "@/components/sections/WhyMe";
import Testimonials from "@/components/sections/Testimonials";
import Writing from "@/components/sections/Writing";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";

const Page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <WhyMe />
      <Testimonials />
      <Writing />
      <Community />
      <Contact />
    </main>
  );
};

export default Page;
