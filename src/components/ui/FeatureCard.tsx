import React from "react";
import type { IconType } from "react-icons";
import Card from "./Card";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

/** Icon + title + description card. Shared by impact, why-me, exploring, etc. */
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card interactive className="h-full">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 dark:bg-primary/10 accent">
        <Icon className="text-xl" />
      </span>
      <h3 className="mb-2 font-semibold text-secondary dark:text-info">
        {title}
      </h3>
      <p className="muted text-sm leading-relaxed">{description}</p>
    </Card>
  );
};

export default FeatureCard;
