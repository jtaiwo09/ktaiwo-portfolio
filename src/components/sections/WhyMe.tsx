import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import { differentiators } from "@/data/whyme";

const WhyMe = () => {
  return (
    <Section id="why-me">
      <SectionTitle
        index="05"
        title="Why Work With Me"
        subtitle="What separates me from a developer who just writes frontend code."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, i) => (
          <Reveal key={item.title} transition={{ delay: 0.05 * i, duration: 0.5 }}>
            <Card interactive className="h-full">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 dark:bg-primary/10 accent">
                <item.icon className="text-xl" />
              </span>
              <h3 className="mb-2 font-semibold text-secondary dark:text-info">
                {item.title}
              </h3>
              <p className="muted text-sm leading-relaxed">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default WhyMe;
