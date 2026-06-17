import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle
        index="06"
        title="Skills & Toolkit"
        subtitle="Organized by what I actually use them for: from shipping interfaces to architecting and leading."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} transition={{ delay: 0.05 * i, duration: 0.5 }}>
            <Card interactive className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 dark:bg-primary/10 accent">
                  <group.icon className="text-lg" />
                </span>
                <h3 className="font-semibold text-secondary dark:text-info">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
