import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";

/** robots.txt exposed at /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
