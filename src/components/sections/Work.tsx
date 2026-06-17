import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import CaseStudy from "./CaseStudy";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <Section id="work">
      <SectionTitle
        index="03"
        title="Selected Work"
        subtitle="A few products I've shipped: the problem, what I built, and the impact. Expand any one for the full case study."
      />

      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <Reveal key={project.slug} transition={{ delay: 0.05, duration: 0.5 }}>
            <CaseStudy data={project} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Work;
