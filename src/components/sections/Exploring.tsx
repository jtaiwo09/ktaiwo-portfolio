import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { exploring } from "@/data/exploring";

const Exploring = () => {
  return (
    <Section id="exploring">
      <SectionTitle
        index="07"
        title="Currently Exploring"
        subtitle="Where I'm investing in growth, so the work stays modern and the thinking stays sharp."
      />
      <FeatureGrid items={exploring} cols={3} />
    </Section>
  );
};

export default Exploring;
