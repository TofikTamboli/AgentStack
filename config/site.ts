export const siteConfig = {
  name: "AgentStack",
  description:
    "Production-ready AI Agent Stack & Engineering Platform powering autonomous workflows and modern Web applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://agentstack.io",
  ogImage: "https://agentstack.io/og-image.png",
  links: {
    twitter: "https://twitter.com/agentstack",
    github: "https://github.com/agentstack",
  },
  author: {
    name: "AgentStack Team",
    url: "https://agentstack.io",
  },
  creator: "AgentStack",
  keywords: [
    "AI Agents",
    "AgentStack",
    "Autonomous Workflows",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "SEO Infrastructure",
    "Full-stack Web Applications",
  ],
};

export type SiteConfig = typeof siteConfig;
