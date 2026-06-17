import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { differentiators } from "@/data/whyme";

const WhyMe = () => {
  return (
    <Section id="why-me">
      <SectionTitle
        index="08"
        title="Why Work With Me"
        subtitle="What separates me from a developer who just writes frontend code."
      />
      <FeatureGrid items={differentiators} cols={3} />
    </Section>
  );
};

export default WhyMe;
