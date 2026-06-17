import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import { process } from "@/data/howiwork";

const HowIWork = () => {
  return (
    <Section id="how-i-work">
      <SectionTitle
        index="03"
        title="How I Work"
        subtitle="I bring process and product strategy, not just coding. This is how I take work from goal to shipped."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((step, i) => (
          <Reveal key={step.title} transition={{ delay: 0.05 * i, duration: 0.5 }}>
            <Card interactive className="h-full">
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 dark:bg-primary/10 accent">
                  <step.icon className="text-xl" />
                </span>
                <span className="font-mono text-2xl font-bold text-warning/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 font-semibold text-secondary dark:text-info">
                {step.title}
              </h3>
              <p className="muted text-sm leading-relaxed">{step.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default HowIWork;
