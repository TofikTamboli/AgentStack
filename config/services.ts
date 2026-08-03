export interface ProjectItem {
  id: string;
  title: string;
  gradient: string;
  visualType: "website" | "app" | "ai" | "analytics" | "ecommerce" | "healthcare";
}

export interface ServiceCategory {
  id: string;
  label: string;
  category: string;
  projects: ProjectItem[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "website-development",
    label: "Website Development",
    category: "WEB ENGINEERING",
    projects: [
      {
        id: "luxury-dental",
        title: "Luxury Dental Clinic Website",
        gradient: "from-[#0A0D18] via-[#111827] to-[#1E1B4B]",
        visualType: "website",
      },
      {
        id: "lumen-architects",
        title: "LUMEN Alpine Architectural Studio",
        gradient: "from-[#0F172A] via-[#1E293B] to-[#334155]",
        visualType: "website",
      },
      {
        id: "construction-hq",
        title: "KRONOS Global Engineering Firm",
        gradient: "from-[#18181B] via-[#27272A] to-[#3F3F46]",
        visualType: "website",
      },
      {
        id: "vanguard-capital",
        title: "Vanguard Private Wealth Partners",
        gradient: "from-[#0B132B] via-[#1C2541] to-[#3A506B]",
        visualType: "website",
      },
      {
        id: "atelier-design",
        title: "Studio Atelier International Portfolio",
        gradient: "from-[#1E1E24] via-[#2B2D42] to-[#4A4E69]",
        visualType: "website",
      },
      {
        id: "apex-launch",
        title: "Apex Enterprise Cloud Launch Page",
        gradient: "from-[#111827] via-[#1F2937] to-[#374151]",
        visualType: "website",
      },
    ],
  },
  {
    id: "e-commerce",
    label: "E-Commerce",
    category: "DIGITAL COMMERCE",
    projects: [
      {
        id: "maison-fragrance",
        title: "Maison De Parfum Luxury Goods Store",
        gradient: "from-[#0F172A] via-[#1E1B4B] to-[#311042]",
        visualType: "ecommerce",
      },
      {
        id: "solis-eyewear",
        title: "Solis Artisan Eyewear Storefront",
        gradient: "from-[#1C1917] via-[#292524] to-[#44403C]",
        visualType: "ecommerce",
      },
      {
        id: "nordic-living",
        title: "Nordic Living Furniture & Decor",
        gradient: "from-[#172554] via-[#1E3A8A] to-[#1D4ED8]",
        visualType: "ecommerce",
      },
      {
        id: "velo-bikes",
        title: "Velo Performance Electric Cycles",
        gradient: "from-[#022C22] via-[#064E3B] to-[#047857]",
        visualType: "ecommerce",
      },
    ],
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    category: "AUTONOMOUS AI",
    projects: [
      {
        id: "ai-healthcare-dash",
        title: "AI Healthcare Autonomous Dashboard",
        gradient: "from-[#0B0F19] via-[#111827] to-[#1F2937]",
        visualType: "ai",
      },
      {
        id: "booking-concierge",
        title: "AgentStack Autonomous Sales Concierge",
        gradient: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
        visualType: "ai",
      },
      {
        id: "support-dispatcher",
        title: "OmniChannel AI Support Dispatcher",
        gradient: "from-[#18181B] via-[#27272A] to-[#09090B]",
        visualType: "ai",
      },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    category: "OPERATIONAL AUTOMATION",
    projects: [
      {
        id: "billing-pipeline",
        title: "Stripe Enterprise Billing Pipeline",
        gradient: "from-[#1E1B4B] via-[#2E1065] to-[#3B0764]",
        visualType: "analytics",
      },
      {
        id: "onboarding-dispatch",
        title: "Automated Client Onboarding Flow",
        gradient: "from-[#030712] via-[#111827] to-[#1F2937]",
        visualType: "analytics",
      },
    ],
  },
  {
    id: "crm-dashboard",
    label: "CRM Dashboard",
    category: "ENTERPRISE PORTAL",
    projects: [
      {
        id: "exec-portal",
        title: "Executive Pipeline Revenue Dashboard",
        gradient: "from-[#0B132B] via-[#1C2541] to-[#0F172A]",
        visualType: "analytics",
      },
    ],
  },
  {
    id: "seo-optimization",
    label: "SEO Optimization",
    category: "SEARCH ARCHITECTURE",
    projects: [
      {
        id: "seo-audit-portal",
        title: "Lighthouse Vitals & Ranking Engine",
        gradient: "from-[#022C22] via-[#064E3B] to-[#0F172A]",
        visualType: "analytics",
      },
    ],
  },
  {
    id: "web-applications",
    label: "Web Applications",
    category: "SAAS ARCHITECTURE",
    projects: [
      {
        id: "cloud-collaboration",
        title: "Cloud Workstream Collaboration Suite",
        gradient: "from-[#0B0F19] via-[#1E293B] to-[#0F172A]",
        visualType: "app",
      },
    ],
  },
  {
    id: "saas-platforms",
    label: "SaaS Platforms",
    category: "CLOUD PRODUCTS",
    projects: [
      {
        id: "b2b-saas-launch",
        title: "Multi-Tenant B2B SaaS Product",
        gradient: "from-[#111827] via-[#1F2937] to-[#030712]",
        visualType: "app",
      },
    ],
  },
  {
    id: "landing-pages",
    label: "Landing Pages",
    category: "CONVERSION DESIGN",
    projects: [
      {
        id: "premium-restaurant",
        title: "Premium Restaurant Landing Page",
        gradient: "from-[#1C1917] via-[#292524] to-[#0F172A]",
        visualType: "website",
      },
    ],
  },
  {
    id: "healthcare-solutions",
    label: "Healthcare Solutions",
    category: "COMPLIANT TECH",
    projects: [
      {
        id: "telehealth-portal",
        title: "HIPAA Virtual Care Patient Portal",
        gradient: "from-[#082F49] via-[#0C4A6E] to-[#0F172A]",
        visualType: "healthcare",
      },
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate",
    category: "PROPTECH PLATFORMS",
    projects: [
      {
        id: "real-estate-corporate",
        title: "Real Estate Corporate Showcase",
        gradient: "from-[#1C1917] via-[#44403C] to-[#0F172A]",
        visualType: "website",
      },
    ],
  },
  {
    id: "restaurant-websites",
    label: "Restaurant Websites",
    category: "HOSPITALITY TECH",
    projects: [
      {
        id: "michelin-bistro",
        title: "Maison Bistro Digital Reservation Engine",
        gradient: "from-[#1C1917] via-[#292524] to-[#44403C]",
        visualType: "website",
      },
    ],
  },
];
