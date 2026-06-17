"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import BrowserFrame from "@/components/ui/BrowserFrame";
import type { CaseStudy as CaseStudyType } from "@/types";

/** Labeled block used for the detailed sub-sections (DRY within a case study). */
const DetailBlock = ({
  label,
  items,
}: {
  label: string;
  items: string[];
}) => (
  <div>
    <h4 className="mb-2 font-mono text-xxs uppercase tracking-wider accent">
      {label}
    </h4>
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed">
          <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-warning" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface Props {
  data: CaseStudyType;
  /** Reverse the media/text columns for visual rhythm. */
  flip?: boolean;
}

const CaseStudy = ({ data, flip }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden p-0">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
        {/* Media */}
        <div
          className={`p-6 md:p-8 ${flip ? "lg:order-2" : ""}`}
        >
          <BrowserFrame
            title={data.name}
            category={data.category}
            url={data.liveUrl}
            image={data.image}
          />
        </div>

        {/* Summary */}
        <div className="flex flex-col p-6 md:p-8 lg:pt-8">
          <span className="eyebrow text-xs uppercase tracking-wider">
            {data.category}
          </span>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
            <h3 className="text-2xl font-bold text-secondary dark:text-info">
              {data.name}
            </h3>
            <span className="font-mono text-xs text-warning">{data.period}</span>
          </div>
          <p className="muted mt-1 font-mono text-xs">{data.role}</p>

          <p className="mt-4 text-sm leading-relaxed md:text-base">
            {data.overview}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {data.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs">
            {data.liveUrl && (
              <Link
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent inline-flex items-center gap-1.5 hover:underline"
              >
                <FiExternalLink /> Live
              </Link>
            )}
            {data.repoUrl && (
              <Link
                href={data.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent inline-flex items-center gap-1.5 hover:underline"
              >
                <FiGithub /> Code
              </Link>
            )}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="ml-auto inline-flex items-center gap-1.5 text-secondary dark:text-info hover:accent transition-colors"
            >
              {open ? "Hide case study" : "Read case study"}
              <FiChevronDown
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable deep-dive */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-black/[0.06] dark:border-white/[0.06] p-6 md:p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <DetailBlock label="The problem" items={[data.problem]} />
                <DetailBlock label="My solution" items={data.solution} />
                <DetailBlock label="Hard problems solved" items={data.challenges} />
                <DetailBlock label="Results & impact" items={data.results} />
                <div className="md:col-span-2">
                  <DetailBlock label="Key takeaways" items={data.takeaways} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default CaseStudy;
