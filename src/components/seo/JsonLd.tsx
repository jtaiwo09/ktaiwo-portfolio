import React from "react";
import {
  profile,
  siteUrl,
  ogImage,
  siteDescription,
  knowsAbout,
} from "@/data/profile";
import { experience } from "@/data/experience";

/**
 * Structured data (schema.org) for rich results and stronger search visibility.
 * Renders a Person + WebSite graph built from the central profile data.
 */
const JsonLd = () => {
  const personId = `${siteUrl}/#person`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: siteUrl,
        image: ogImage,
        jobTitle: "Frontend Engineer & Technical Lead",
        description: siteDescription,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        worksFor: {
          "@type": "Organization",
          name: experience[0]?.company ?? "Independent Purchasing Company (IPC)",
        },
        knowsAbout,
        sameAs: profile.socials
          .filter((s) => s.name !== "Email")
          .map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Taiwo Joseph Portfolio",
        description: siteDescription,
        publisher: { "@id": personId },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Taiwo Joseph | Frontend Engineer",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": personId },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Structured data must be injected as raw JSON.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
