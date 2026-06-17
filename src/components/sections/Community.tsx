import React from "react";
import Link from "next/link";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { repos, community, githubUrl } from "@/data/community";

const Community = () => {
  return (
    <Section id="open-source">
      <SectionTitle
        index="11"
        title="Open Source & Community"
        subtitle="Public code from shipped products, plus how I contribute beyond writing it myself."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Repos */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} transition={{ delay: 0.05 * i, duration: 0.5 }}>
              <Link
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card interactive className="h-full">
                  <div className="mb-3 flex items-center justify-between">
                    <FiGithub className="text-xl accent" />
                    <FiArrowUpRight className="text-warning" />
                  </div>
                  <h3 className="font-mono text-base font-semibold text-secondary dark:text-info">
                    {repo.name}
                  </h3>
                  <p className="muted mt-2 text-sm leading-relaxed">
                    {repo.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {repo.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Community panel */}
        <Reveal transition={{ delay: 0.1, duration: 0.5 }}>
          <Card className="flex h-full flex-col">
            <h3 className="font-semibold text-secondary dark:text-info">
              Beyond the code
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {community.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed">
                  <span className="accent mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-current" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button href={githubUrl} variant="outline" external>
                <FiGithub /> View GitHub
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
};

export default Community;
