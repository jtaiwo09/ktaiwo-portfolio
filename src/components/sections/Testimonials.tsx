import React from "react";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import {
  testimonials,
  recognition,
  workingStyle,
} from "@/data/testimonials";

const linkedIn =
  profile.socials.find((s) => s.name === "LinkedIn")?.href ?? "#";

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <SectionTitle
        index="06"
        title="Recognition & References"
        subtitle="Verified recognition, the themes references consistently raise, and recommendations available on request."
      />

      {testimonials.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} transition={{ delay: 0.05 * i, duration: 0.5 }}>
              <Card className="h-full">
                <FaQuoteLeft className="accent mb-4 text-xl" />
                <p className="text-base leading-relaxed">{t.quote}</p>
                <div className="mt-5">
                  <p className="font-semibold text-secondary dark:text-info">
                    {t.name}
                  </p>
                  <p className="muted text-sm">
                    {t.title}, {t.company}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Verified award */}
          <Reveal extraClass="md:col-span-5">
            <Card className="flex h-full flex-col justify-between">
              <div>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 dark:bg-primary/10 accent">
                  <FiAward className="text-2xl" />
                </span>
                <h3 className="text-xl font-bold text-secondary dark:text-info">
                  {recognition.award}
                </h3>
                <p className="muted mt-1">
                  {recognition.org} · {recognition.date}
                </p>
                <p className="mt-4 text-sm leading-relaxed">
                  Recognized for technical contribution, delivery, and raising
                  the team&apos;s engineering standard.
                </p>
              </div>
            </Card>
          </Reveal>

          {/* Working style + references CTA */}
          <Reveal extraClass="md:col-span-7" transition={{ delay: 0.1, duration: 0.5 }}>
            <Card className="flex h-full flex-col">
              <h3 className="font-semibold text-secondary dark:text-info">
                What it&apos;s like to work with me
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {workingStyle.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <FiCheckCircle className="mt-0.5 shrink-0 accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="muted text-sm">
                  Written recommendations from managers and teammates are
                  available on request.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button href={linkedIn} variant="outline" external>
                    View LinkedIn
                  </Button>
                  <Button href={`mailto:${profile.email}`} variant="outline">
                    Request references
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      )}
    </Section>
  );
};

export default Testimonials;
