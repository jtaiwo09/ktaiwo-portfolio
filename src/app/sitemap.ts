import type { MetadataRoute } from "next";
import { siteUrl, navLinks } from "@/data/profile";
import { projects } from "@/data/projects";

/**
 * Sitemap at /sitemap.xml: homepage, in-page section anchors, and every
 * dedicated case-study page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: siteUrl,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
  };

  const sections = navLinks.map((link) => ({
    url: `${siteUrl}/${link.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudies = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [home, ...sections, ...caseStudies];
}
