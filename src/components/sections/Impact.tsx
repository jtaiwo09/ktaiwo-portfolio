import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { impactHighlights, impactIntro } from "@/data/impact";

const Impact = () => {
  return (
    <Section id="impact">
      <SectionTitle index="01" title="Impact" subtitle={impactIntro} />
      <FeatureGrid items={impactHighlights} cols={3} />
    </Section>
  );
};

export default Impact;
