import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { CaseStudy } from "@/types";
import Card from "./Card";
import Tag from "./Tag";
import BrowserFrame from "./BrowserFrame";

interface Props {
  project: CaseStudy;
}

/** Compact, scannable project card linking to the full case-study page. */
const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block h-full"
      aria-label={`Read the ${project.name} case study`}
    >
      <Card interactive className="flex h-full flex-col overflow-hidden p-0">
        <div className="border-b border-black/[0.06] dark:border-white/[0.06]">
          <BrowserFrame
            chrome={false}
            title={project.name}
            category={project.category}
            image={project.image}
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="eyebrow text-xs uppercase tracking-wider">
            {project.category}
          </span>
          <div className="mt-2 flex items-baseline justify-between gap-3">
            <h3 className="text-xl font-bold text-secondary dark:text-info">
              {project.name}
            </h3>
            <span className="font-mono text-xs text-warning">
              {project.period}
            </span>
          </div>
          <p className="muted mt-2 text-sm leading-relaxed">
            {project.tagline}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <span className="accent mt-5 inline-flex items-center gap-1.5 font-mono text-sm">
            Read case study
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
