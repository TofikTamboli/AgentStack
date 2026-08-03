export const heroContent = {
  badge: "AI-FIRST DIGITAL STUDIO",
  heading: "Premium Websites & AI Systems for Modern Businesses.",
  description:
    "We engineer bespoke digital platforms, autonomous AI agent workflows, and high-performance Web applications for forward-thinking enterprises.",
  statusBadge: {
    label: "Accepting New Projects",
  },
  cta: {
    primary: {
      text: "Book Discovery Call",
      href: "/#contact",
    },
    secondary: {
      text: "Explore Our Work",
      href: "/#work",
    },
  },
  floatingChips: [
    { id: "leads", text: "+312 Leads", subtext: "Average client growth", position: "top-left" },
    { id: "seo", text: "99 SEO Score", subtext: "Technical audit rank", position: "top-right" },
    { id: "agent", text: "AI Booking Agent", subtext: "Autonomous workflow", position: "middle-left" },
    { id: "speed", text: "<400ms Speed", subtext: "Lighthouse core vitals", position: "bottom-left" },
    { id: "automation", text: "Automation Live", subtext: "24/7 client dispatch", position: "bottom-right" },
  ],
};

export type HeroContent = typeof heroContent;
