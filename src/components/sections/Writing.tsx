import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { articles } from "@/data/writing";

const Writing = () => {
  return (
    <Section id="writing">
      <SectionTitle
        index="07"
        title="Writing & Thought Leadership"
        subtitle="Engineering topics I work in and write about: performance, real-time UX, payments, and frontend architecture."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {articles.map((article, i) => {
          const isLive = Boolean(article.href);
          const content = (
            <Card interactive={isLive} className="h-full">
              <div className="mb-3 flex items-center justify-between">
                <Tag>{article.topic}</Tag>
                <span className="font-mono text-xxs text-warning">
                  {article.meta}
                </span>
              </div>
              <h3 className="flex items-start gap-1.5 text-lg font-semibold text-secondary dark:text-info">
                {article.title}
                {isLive && <FiArrowUpRight className="mt-1 shrink-0 accent" />}
              </h3>
              <p className="muted mt-2 text-sm leading-relaxed">
                {article.description}
              </p>
            </Card>
          );

          return (
            <Reveal key={article.title} transition={{ delay: 0.05 * i, duration: 0.5 }}>
              {isLive ? (
                <Link
                  href={article.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Writing;
