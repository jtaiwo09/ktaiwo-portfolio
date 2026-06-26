"use client";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { profile, positioning, industries } from "@/data/profile";

const Hero = () => {
  return (
    <section className="container relative flex min-h-[88vh] flex-col justify-center overflow-hidden py-20 md:py-24">
      {/* Soft ambient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 -z-10 h-72 w-72 rounded-full bg-brand/10 dark:bg-primary/10 blur-3xl"
      />

      {/* <Reveal>
        <p className="eyebrow mb-5 flex items-center gap-2">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
          {profile.availability}
        </p>
      </Reveal> */}

      <Reveal transition={{ delay: 0.05, duration: 0.5 }}>
        <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-secondary dark:text-info sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
          <span className="accent">.</span>
        </h1>
      </Reveal>

      <Reveal transition={{ delay: 0.09, duration: 0.5 }}>
        <p className="mt-3 font-mono text-base font-medium accent sm:text-lg">
          {profile.role}
        </p>
      </Reveal>

      <Reveal transition={{ delay: 0.12, duration: 0.5 }}>
        <h2 className="mt-4 max-w-4xl text-2xl font-bold !leading-[1.3] text-warning sm:text-3xl md:text-4xl lg:text-[44px]">
          {profile.tagline}
        </h2>
      </Reveal>

      <Reveal transition={{ delay: 0.2, duration: 0.5 }}>
        <p className="muted mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
          {positioning}
        </p>
      </Reveal>

      <Reveal transition={{ delay: 0.28, duration: 0.5 }}>
        <div className="mt-7 flex flex-wrap gap-2">
          {industries.map((industry) => (
            <Tag key={industry}>{industry}</Tag>
          ))}
        </div>
      </Reveal>

      <Reveal transition={{ delay: 0.36, duration: 0.5 }}>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="#contact" variant="primary">
            Let&apos;s build your product
            <FiArrowRight />
          </Button>
          <Button href="#work" variant="outline">
            View case studies
          </Button>
          <Button href={profile.resumeUrl} variant="outline" download>
            <FiFileText />
            Résumé
          </Button>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
