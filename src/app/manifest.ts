import type { MetadataRoute } from "next";

/** Web app manifest exposed at /manifest.webmanifest. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taiwo Joseph | Frontend Engineer",
    short_name: "Taiwo Joseph",
    description:
      "Portfolio of Taiwo Joseph, frontend engineer building fast, reliable web products for FinTech, marketplaces, and logistics.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1A32",
    theme_color: "#0B1A32",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
