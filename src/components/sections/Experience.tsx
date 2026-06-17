import React from "react";
import Link from "next/link";
import { FiExternalLink, FiTrendingUp } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { experience } from "@/data/experience";

const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle
        index="04"
        title="Experience"
        subtitle="Roles where I owned frontend architecture, shipped business-critical products, and led delivery."
      />

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-0 top-2 hidden h-full w-px bg-warning/20 sm:block" />

        <div className="flex flex-col gap-12">
          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
            >
              <article className="relative sm:pl-10">
                {/* Node */}
                <span className="absolute left-[-4px] top-2 hidden h-2.5 w-2.5 rounded-full bg-brand dark:bg-primary ring-4 ring-white dark:ring-secondary sm:block" />

                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold text-secondary dark:text-info">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-warning">
                    {job.duration}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-2 font-mono text-sm">
                  {job.companyUrl ? (
                    <Link
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accent inline-flex items-center gap-1 hover:underline"
                    >
                      {job.company}
                      <FiExternalLink className="text-xs" />
                    </Link>
                  ) : (
                    <span className="accent">{job.company}</span>
                  )}
                  <span className="text-warning">· {job.location}</span>
                </div>

                <p className="muted mt-4 max-w-prose">{job.summary}</p>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-mono text-xxs uppercase tracking-wider text-secondary dark:text-info">
                      Key contributions
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {job.contributions.map((c, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="accent mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-current" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-mono text-xxs uppercase tracking-wider text-secondary dark:text-info">
                      Achievements & impact
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {job.achievements.map((a, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <FiTrendingUp className="accent mt-0.5 shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
