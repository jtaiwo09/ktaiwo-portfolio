import React from "react";
import Image from "next/image";

interface BrowserFrameProps {
  title: string;
  /** e.g. "FinTech · Crypto" */
  category: string;
  url?: string;
  /** Real screenshot path under /public. Falls back to a generated panel. */
  image?: string;
  /** Show the browser chrome bar. Set false to use as flush card media. */
  chrome?: boolean;
}

/** The screenshot-or-placeholder viewport, shared by both modes. */
const Media = ({
  title,
  category,
  image,
}: Pick<BrowserFrameProps, "title" | "category" | "image">) => (
  <div className="relative aspect-[16/10] w-full">
    {image ? (
      <Image
        src={image}
        alt={`${title} screenshot`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 600px"
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand/10 via-transparent to-brand/5 dark:from-primary/10 dark:to-accent">
        <div className="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgba(120,120,120,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
        <span className="relative font-mono text-xs uppercase tracking-widest accent">
          {category}
        </span>
        <span className="relative mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary dark:text-info">
          {title}
        </span>
      </div>
    )}
  </div>
);

/**
 * Project visual. With `chrome` (default) it renders a self-contained browser
 * frame; without it, just the media so it can sit flush inside a card.
 * Shows a real screenshot when provided, otherwise a branded placeholder.
 */
const BrowserFrame = ({
  title,
  category,
  url,
  image,
  chrome = true,
}: BrowserFrameProps) => {
  if (!chrome) return <Media title={title} category={category} image={image} />;

  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : "";

  return (
    <div className="overflow-hidden rounded-xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-secondary shadow-sm">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-black/[0.06] dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        {host && (
          <span className="ml-3 truncate rounded bg-black/[0.04] dark:bg-white/[0.05] px-2 py-0.5 font-mono text-[11px] text-warning">
            {host}
          </span>
        )}
      </div>
      <Media title={title} category={category} image={image} />
    </div>
  );
};

export default BrowserFrame;
