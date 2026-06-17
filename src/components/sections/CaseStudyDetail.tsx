import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import type { CaseStudy } from "@/types";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import BrowserFrame from "@/components/ui/BrowserFrame";
import ArchitectureDiagram from "@/components/ui/ArchitectureDiagram";
import { profile } from "@/data/profile";

/** A labeled heading + body, reused for each narrative block. */
const Block = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <h2 className="mb-4 font-mono text-sm uppercase tracking-wider accent">
      {label}
    </h2>
    {children}
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2.5 leading-relaxed">
        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand dark:bg-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const MetaRow = ({ label, value }: { label: string; value: string }) => (
  <div className="border-b border-black/[0.06] py-3 last:border-0 dark:border-white/[0.06]">
    <dt className="font-mono text-xxs uppercase tracking-wider text-warning">
      {label}
    </dt>
    <dd className="mt-1 text-sm text-secondary dark:text-info">{value}</dd>
  </div>
);

const CaseStudyDetail = ({ project }: { project: CaseStudy }) => {
  return (
    <article className="container py-12 md:py-16">
      <Reveal>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-sm text-warning transition-colors hover:accent"
        >
          <FiArrowLeft /> All work
        </Link>
      </Reveal>

      {/* Header */}
      <header className="mt-8">
        <Reveal>
          <span className="eyebrow text-xs uppercase tracking-wider">
            {project.category}
          </span>
        </Reveal>
        <Reveal transition={{ delay: 0.05, duration: 0.5 }}>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-secondary dark:text-info md:text-5xl">
            {project.name}
          </h1>
        </Reveal>
        <Reveal transition={{ delay: 0.1, duration: 0.5 }}>
          <p className="muted mt-4 max-w-2xl text-lg leading-relaxed">
            {project.tagline}
          </p>
        </Reveal>
        <Reveal transition={{ delay: 0.15, duration: 0.5 }}>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" external>
                <FiExternalLink /> Visit live
              </Button>
            )}
            {project.repoUrl && (
              <Button href={project.repoUrl} variant="outline" external>
                <FiGithub /> View code
              </Button>
            )}
          </div>
        </Reveal>
      </header>

      {/* Hero visual */}
      <Reveal extraClass="mt-10" transition={{ delay: 0.1, duration: 0.5 }}>
        <BrowserFrame
          title={project.name}
          category={project.category}
          url={project.liveUrl}
          image={project.image}
          priority
          sizes="(max-width: 1024px) 100vw, 1000px"
        />
      </Reveal>

      {/* Overview + meta */}
      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Block label="Overview">
            <p className="text-lg leading-relaxed">{project.overview}</p>
          </Block>
        </div>
        <aside>
          <dl className="surface px-5 py-2">
            <MetaRow label="Industry" value={project.industry} />
            <MetaRow label="Target users" value={project.targetUsers} />
            <MetaRow label="Role" value={project.role} />
            <MetaRow label="Timeline" value={project.period} />
          </dl>
        </aside>
      </div>

      {/* Business goals */}
      <div className="mt-12">
        <Block label="Business goals">
          <p className="max-w-3xl text-lg leading-relaxed">
            {project.businessGoals}
          </p>
        </Block>
      </div>

      {/* Challenge / Solution / Outcome story */}
      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Block label="The challenge">
          <p className="leading-relaxed">{project.problem}</p>
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold text-secondary dark:text-info">
              Hard problems solved
            </h3>
            <BulletList items={project.challenges} />
          </div>
        </Block>
        <Block label="The solution">
          <BulletList items={project.solution} />
        </Block>
      </div>

      {/* Architecture */}
      <div className="mt-14">
        <Block label="System architecture">
          <p className="muted mb-8 max-w-2xl text-sm">
            How the frontend fits into the wider system, the decisions that kept
            it fast, secure, and maintainable.
          </p>
          <ArchitectureDiagram layers={project.architecture} />
        </Block>
      </div>

      {/* Results */}
      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Block label="Results & impact">
          <BulletList items={project.results} />
        </Block>
        <Block label="Lessons learned">
          <BulletList items={project.takeaways} />
        </Block>
      </div>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-14">
          <Block label="Screens">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className="surface relative aspect-[16/10] overflow-hidden p-0"
                >
                  <Image
                    src={src}
                    alt={`${project.name} screen ${i + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </Block>
        </div>
      )}

      {/* Stack */}
      <div className="mt-14">
        <Block label="Built with">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Block>
      </div>

      {/* CTA */}
      <div className="surface mt-16 flex flex-col items-center gap-5 p-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-secondary dark:text-info md:text-3xl">
          Building something like this?
        </h2>
        <p className="muted max-w-xl">
          If you need a frontend lead who can turn complex requirements into
          scalable, production-ready products, let&apos;s talk.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={`mailto:${profile.email}`} variant="primary">
            Start a conversation
          </Button>
          <Button href="/#work" variant="outline">
            More work <FiArrowRight />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyDetail;
