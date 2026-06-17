import type { Repo } from "@/types";

export const githubUrl = "https://github.com/jtaiwo09";

/**
 * Notable repositories / shipped products with public code.
 * All links are real projects from your work.
 */
export const repos: Repo[] = [
  {
    name: "resolve-web-app",
    description:
      "Custodial crypto wallet: Quidax API integration, real-time pricing over WebSockets, and security controls.",
    href: "https://github.com/OmeriHQ/resolve-web-app",
    tags: ["Next.js", "TypeScript", "FinTech"],
  },
  {
    name: "CititaskerClient",
    description:
      "Task marketplace client: Paystack escrow, secure sessions with Server Actions, and data-rich dashboards.",
    href: "https://github.com/cititasker/CititaskerClient",
    tags: ["Next.js", "Payments", "Marketplace"],
  },
  {
    name: "gosource-admin-v2",
    description:
      "B2B procurement platform: supplier management, real-time inventory, and order-processing workflows.",
    href: "https://github.com/ipcafrica/gosource-admin-v2",
    tags: ["Vue.js", "Nuxt.js", "B2B"],
  },
  {
    name: "relay-frontend",
    description:
      "Real-time logistics platform: messaging, trip tracking, and role-based dashboards for riders and teams.",
    href: "https://github.com/ipcafrica/relay-frontend",
    tags: ["Vue.js", "Real-time", "Logistics"],
  },
];

/** Community & leadership contributions beyond shipped code. */
export const community = [
  "Mentored junior frontend engineers and led code-review culture at Spleet Africa.",
  "Set frontend standards and architecture decisions adopted across product teams.",
  "Open to speaking and writing on performance, real-time UX, and frontend payments.",
];
