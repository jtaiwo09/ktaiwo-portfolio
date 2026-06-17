import type { CaseStudy } from "@/types";

/**
 * Detailed case studies. The `featured` ones render as full expandable studies;
 * all of them appear in the Work grid.
 *
 * Copy is qualitative and truthful - add confirmed numbers to the `results`
 * strings where you have them. Add a real screenshot by dropping a file in
 * /public/images and setting `image: "/images/<file>"` on the project.
 */
export const projects: CaseStudy[] = [
  {
    slug: "gosource",
    name: "GoSource",
    category: "B2B · Procurement & Supply Chain",
    industry: "B2B / Procurement & Supply Chain",
    targetUsers: "Food businesses, procurement teams, and their suppliers",
    businessGoals:
      "Streamline sourcing, ordering, and inventory so operations teams move faster with end-to-end visibility.",
    image: "/images/gosource.png",
    tagline:
      "B2B procurement platform that streamlines ordering, suppliers, and inventory for food businesses.",
    liveUrl: "https://dashboard.gosource.app/market",
    repoUrl: "https://github.com/ipcafrica/gosource-admin-v2",
    period: "2025 to Present",
    role: "Frontend Engineer (leading frontend)",
    featured: true,
    overview:
      "GoSource is IPC's tech-driven procurement platform that helps food businesses run sourcing, storage, and delivery in one place, connecting buyers with suppliers and giving operations teams real-time visibility.",
    problem:
      "The existing app had grown organically and was holding the business back: dated UX, fragmented workflows, and an architecture that made new B2B features slow and risky to ship.",
    solution: [
      "Led a complete redesign and rebuild, rethinking information architecture and core workflows around how procurement teams actually work.",
      "Architected a scalable, maintainable frontend foundation with clear module and state boundaries.",
      "Built supplier management, real-time inventory tracking, and streamlined order-processing flows.",
      "Worked directly with product and design to keep technical decisions aligned with business goals.",
    ],
    challenges: [
      "Modeling complex, multi-party procurement workflows without overwhelming the user.",
      "Keeping inventory and order state consistent and responsive across data-heavy views.",
      "Designing for long-term growth so new B2B features could be added without regressions.",
    ],
    results: [
      "Modernized UX that measurably improved user satisfaction and engagement.",
      "A frontend architecture that measurably shortened time-to-ship for new features.",
      "Faster, smoother data-heavy dashboards through targeted rendering and loading optimizations.",
    ],
    takeaways: [
      "Redesigns succeed when they start from real workflows, not screens.",
      "Investing early in module and state boundaries pays compounding dividends in B2B products.",
    ],
    stack: ["Vue.js", "Nuxt.js", "TypeScript", "Pinia", "Tailwind CSS"],
    architecture: [
      { label: "Nuxt (Vue 3) Web App", note: "SSR + SPA · Pinia state · Tailwind UI" },
      { label: "REST API Layer", note: "Auth, orders, suppliers, inventory" },
      { label: "Backend Services", note: "Procurement & order-processing logic" },
      { label: "Database", note: "Orders, suppliers, inventory records" },
    ],
  },
  {
    slug: "relay-pilot",
    name: "Relay Pilot",
    category: "Logistics · Real-Time Delivery",
    industry: "Logistics & Delivery",
    targetUsers: "Logistics companies, riders, and business shippers",
    businessGoals:
      "Coordinate live deliveries with real-time tracking and communication across every party.",
    image: "/images/relay-pilot.png",
    tagline:
      "Real-time logistics platform coordinating companies, riders, and businesses with live tracking and messaging.",
    liveUrl: "https://relaypilot.com",
    repoUrl: "https://github.com/ipcafrica/relay-frontend",
    period: "2025 to Present",
    role: "Frontend Engineer",
    featured: true,
    overview:
      "Relay Pilot coordinates deliveries across logistics companies, riders, and businesses, with real-time trip tracking, role-based dashboards, and an in-app messaging experience built for the field.",
    problem:
      "Coordinating live deliveries means many actors acting on the same constantly-changing data. The product needed real-time communication and tracking that stayed fast and reliable on mobile networks.",
    solution: [
      "Built a real-time messaging system: chat, typing indicators, unread counts, and notifications.",
      "Implemented secure file uploads using presigned URLs with a confirmation flow.",
      "Designed role-based dashboards tailored to riders and logistics teams.",
      "Integrated real-time trip tracking and delivery monitoring.",
      "Crafted a mobile-first chat experience optimized for on-the-go use.",
    ],
    challenges: [
      "Keeping real-time UI consistent (unread counts, presence) without excessive re-renders.",
      "Designing a chat experience that stays usable on constrained mobile connections.",
      "Handling secure media uploads without blocking the user.",
    ],
    results: [
      "A responsive real-time experience across riders, companies, and businesses.",
      "Efficient state management and lazy loading kept the app fast under live data.",
      "Secure, resilient upload flow for delivery proof and documents.",
    ],
    takeaways: [
      "Real-time UX lives or dies on state design: model it deliberately, not incidentally.",
      "Mobile-first isn't a viewport; it's an assumption about network and attention.",
    ],
    stack: ["Vue.js", "Nuxt.js", "TypeScript", "WebSockets", "Tailwind CSS"],
    architecture: [
      { label: "Nuxt (Vue 3) Web App", note: "Role-based dashboards · mobile-first chat" },
      { label: "REST API + WebSocket Gateway", note: "Live messaging, presence, trip events" },
      { label: "Backend Services", note: "Dispatch, tracking, notifications" },
      { label: "Object Storage", note: "Presigned-URL uploads (delivery proof)" },
      { label: "Database", note: "Trips, users, messages" },
    ],
  },
  {
    slug: "resolve",
    name: "Resolve",
    category: "FinTech · Custodial Crypto Wallet",
    industry: "FinTech / Crypto",
    targetUsers: "Retail crypto users holding and moving funds",
    businessGoals:
      "Let users custody balances and transact with live, trustworthy market data, securely.",
    image: "/images/resolve.png",
    tagline:
      "Custodial crypto wallet with live market data, secure transaction flows, and fraud controls.",
    liveUrl: "https://resolve-web-app-dev.vercel.app",
    repoUrl: "https://github.com/OmeriHQ/resolve-web-app",
    period: "2025 (Contract)",
    role: "Frontend Engineer (Contract)",
    featured: true,
    overview:
      "Resolve is a custodial crypto wallet letting users hold balances, track live markets, and move funds securely, built on the Quidax API with real-time pricing.",
    problem:
      "Financial products demand a frontend that is correct, secure, and trustworthy under real money movement, with live data, tight auth, and defenses against abuse.",
    solution: [
      "Built the wallet UI integrating the Quidax API for balances and transactions.",
      "Implemented real-time price updates over WebSockets for live market data.",
      "Designed a secure architecture with IP whitelisting and geo controls.",
      "Contributed to fraud-detection workflows on the client.",
    ],
    challenges: [
      "Presenting real-time financial data accurately without flicker or stale state.",
      "Building authentication and transaction flows that are secure by default.",
      "Surfacing risk and fraud signals without harming legitimate users.",
    ],
    results: [
      "A live, trustworthy wallet experience backed by real-time market data.",
      "Hardened access via IP whitelisting and geo controls.",
      "Client-side guardrails contributing to fraud prevention.",
    ],
    takeaways: [
      "In FinTech, 'correct and secure' is the feature: polish comes after trust.",
      "Real-time financial UIs need explicit state for loading, stale, and error.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "WebSockets",
      "Quidax API",
      "Tailwind CSS",
    ],
    architecture: [
      { label: "Next.js Web App", note: "Wallet UI · secure auth · transaction flows" },
      { label: "BFF / API Routes", note: "Session, request signing, access guards" },
      { label: "Quidax API (external)", note: "Balances, orders, transactions" },
      { label: "WebSocket Price Feed", note: "Real-time market data" },
    ],
  },
  {
    slug: "cititasker",
    name: "CitiTasker",
    category: "Marketplace · Payments & Escrow",
    industry: "Marketplace / Payments",
    targetUsers: "People outsourcing tasks and local service providers",
    businessGoals:
      "Enable trusted, escrow-backed transactions between strangers on a two-sided marketplace.",
    image: "/images/cititasker.png",
    tagline:
      "Task marketplace connecting people who need tasks done with local providers, with escrow-backed payments.",
    liveUrl: "https://www.cititasker.com",
    repoUrl: "https://github.com/cititasker/CititaskerClient",
    period: "Ongoing",
    role: "Frontend Engineer",
    featured: true,
    overview:
      "CitiTasker is a community marketplace connecting people who need tasks done with local service providers looking to earn, covering discovery, proposals, secure payments, and dispute resolution.",
    problem:
      "Two-sided marketplaces only work when both sides trust the money and the process. CitiTasker needed secure payments, clear multi-step workflows, and reliable notifications across both sides.",
    solution: [
      "Built secure authentication with HTTP-only cookies and Next.js Server Actions for robust session handling.",
      "Developed multi-step workflows for task creation, service proposals, and dispute resolution with strong validation.",
      "Integrated the Paystack payment gateway with escrow, enabling trust-based transactions between parties.",
      "Designed a real-time notification system for task updates, messages, and payment events.",
      "Created data-rich dashboards and tables (filtering, sorting, pagination) with TanStack React Table.",
    ],
    challenges: [
      "Designing escrow flows that hold funds safely and release them fairly.",
      "Managing complex multi-step state with validation across a two-sided flow.",
      "Keeping data-dense dashboards fast as records grow.",
    ],
    results: [
      "Secure, escrow-backed transactions that build trust between strangers.",
      "Smooth multi-step task and proposal flows with robust validation.",
      "Performant dashboards via code splitting, dynamic imports, and React Query caching.",
    ],
    takeaways: [
      "Payments and escrow are a UX problem as much as an integration problem.",
      "Server Actions + HTTP-only cookies are a clean baseline for secure sessions.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Paystack",
      "TanStack Table",
      "React Query",
      "Tailwind CSS",
    ],
    architecture: [
      { label: "Next.js (App Router) Web App", note: "Server Actions · HTTP-only cookie sessions" },
      { label: "API Layer", note: "Tasks, proposals, disputes, notifications" },
      { label: "Paystack (external)", note: "Payments + escrow" },
      { label: "Database", note: "Users, tasks, transactions" },
    ],
  },
  {
    slug: "spleet",
    name: "Spleet Africa",
    category: "PropTech · Rentals & Financing",
    industry: "PropTech / Rentals",
    targetUsers: "Landlords and tenants (renters)",
    businessGoals:
      "Make renting friction-free and financeable, with verification, automated rent, and rental loans.",
    image: "/images/spleet.png",
    tagline:
      "Rental platform for landlords and tenants, leasing, tenant verification, automated rent, and rental loans.",
    liveUrl: "https://spleet.africa",
    period: "2021 to 2024",
    role: "Lead Frontend Engineer",
    featured: false,
    overview:
      "Spleet is a PropTech platform where landlords lease apartments and tenants rent flexibly, with tenant verification, automated rent collection, and a credit facility for financing rent.",
    problem:
      "Renting in the region is friction-heavy and cash-flow-hard for tenants. Spleet needed a trustworthy marketplace plus a financing product, built on a frontend that could move fast as the product evolved.",
    solution: [
      "Architected scalable frontend systems that supported rapid feature delivery.",
      "Built the rental marketplace and a credit-facility product for financing rent.",
      "Established code-quality standards and led frontend architecture decisions.",
      "Mentored junior engineers and drove cross-functional collaboration.",
    ],
    challenges: [
      "Balancing speed of delivery with an architecture that wouldn't buckle as scope grew.",
      "Building financial (rental-loan) flows that are clear and trustworthy.",
      "Raising team-wide quality while shipping continuously.",
    ],
    results: [
      "Recognized as Best Frontend Engineer (Feb 2023).",
      "A maintainable architecture that supported continuous product growth.",
      "Higher team-wide code quality through standards and mentorship.",
    ],
    takeaways: [
      "Leadership is multiplying output through standards and mentorship, not just shipping more yourself.",
      "Financial UX in PropTech must make trust legible at every step.",
    ],
    stack: ["Vue.js", "Nuxt.js", "Vuex", "Pinia", "TypeScript", "Tailwind CSS"],
    architecture: [
      { label: "Nuxt (Vue 3) Web App", note: "Marketplace + financing flows · Vuex/Pinia" },
      { label: "REST API Layer", note: "Listings, leases, payments, KYC" },
      { label: "Backend Services", note: "Rent automation, credit/loan logic" },
      { label: "Database", note: "Listings, tenants, transactions" },
    ],
  },
];
