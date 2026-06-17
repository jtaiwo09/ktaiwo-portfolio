import type { MetadataRoute } from "next";
import { siteUrl, navLinks } from "@/data/profile";

/**
 * Sitemap exposed at /sitemap.xml. Includes the homepage and its in-page
 * section anchors so search engines understand the site structure.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  };

  const sections = navLinks.map((link) => ({
    url: `${siteUrl}/${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [home, ...sections];
}
