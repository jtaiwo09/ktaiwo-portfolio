import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <Section id="work">
      <SectionTitle
        index="05"
        title="Selected Work"
        subtitle="Products I've shipped across FinTech, logistics, PropTech, and marketplaces. Open any one for the full case study, problem, architecture, and results."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} transition={{ delay: 0.05 * i, duration: 0.5 }}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Work;
