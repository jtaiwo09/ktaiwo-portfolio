import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Profile from "../../../public/images/profile.jpeg";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { aboutParagraphs, aboutHighlights } from "@/data/about";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle
        index="02"
        title="About"
        subtitle="What I do, how I think, and the kind of problems I'm built to solve."
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7 lg:col-span-8">
          <div className="flex flex-col gap-5 text-base leading-relaxed md:text-lg">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} transition={{ delay: 0.05 * i, duration: 0.5 }}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item, i) => (
              <Reveal key={item} transition={{ delay: 0.05 * i, duration: 0.5 }}>
                <li className="flex items-start gap-2.5">
                  <FiCheck className="mt-1 shrink-0 accent" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 lg:col-span-4">
          <Reveal
            hidden={{ opacity: 0, x: 40 }}
            visible={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            extraClass="relative mx-auto w-full max-w-[320px]"
          >
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-brand/30 dark:border-primary/30" />
            <Image
              src={Profile}
              alt={`Portrait of Taiwo Joseph`}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 320px"
              className="aspect-square w-full rounded-2xl object-cover grayscale transition-all duration-300 hover:grayscale-0"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default About;
