import React from "react";
import { FiArrowRight, FiMail } from "react-icons/fi";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const linkedIn =
  profile.socials.find((s) => s.name === "LinkedIn")?.href ?? "#";

const Contact = () => {
  return (
    <Section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal extraClass="mx-auto">
          <p className="eyebrow">12. What&apos;s next</p>
        </Reveal>

        <Reveal extraClass="mx-auto" transition={{ delay: 0.1, duration: 0.5 }}>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-secondary dark:text-info md:text-5xl">
            Building a SaaS, FinTech, marketplace, or enterprise product?
          </h2>
        </Reveal>

        <Reveal extraClass="mx-auto" transition={{ delay: 0.18, duration: 0.5 }}>
          <p className="muted mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg">
            If you need a frontend engineer who can turn complex requirements
            into scalable, production-ready user experiences, and lead the
            frontend while doing it, let&apos;s talk about your next product.
          </p>
        </Reveal>

        <Reveal extraClass="mx-auto" transition={{ delay: 0.26, duration: 0.5 }}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${profile.email}`} variant="primary">
              <FiMail />
              Start a conversation
            </Button>
            <Button href={linkedIn} variant="outline" external>
              Connect on LinkedIn
              <FiArrowRight />
            </Button>
          </div>
        </Reveal>

        <Reveal extraClass="mx-auto" transition={{ delay: 0.34, duration: 0.5 }}>
          <p className="muted mt-8 font-mono text-xs">
            {profile.email} · {profile.location}
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
