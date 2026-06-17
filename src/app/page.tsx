import React from "react";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import About from "@/components/sections/About";
import HowIWork from "@/components/sections/HowIWork";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Exploring from "@/components/sections/Exploring";
import WhyMe from "@/components/sections/WhyMe";
import Testimonials from "@/components/sections/Testimonials";
import Writing from "@/components/sections/Writing";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";

const Page = () => {
  return (
    <main>
      <Hero />
      <Impact />
      <About />
      <HowIWork />
      <Experience />
      <Work />
      <Skills />
      <Exploring />
      <WhyMe />
      <Testimonials />
      <Writing />
      <Community />
      <Contact />
    </main>
  );
};

export default Page;
