"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const SERVICE_TABS = [
  { id: "websites", label: "Websites" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "automation", label: "Automation" },
  { id: "seo", label: "SEO" },
] as const;

export type ServiceTabId = typeof SERVICE_TABS[number]["id"];

interface ServiceTabsProps {
  activeTab: ServiceTabId;
  onTabChange: (id: ServiceTabId) => void;
}

export const ServiceTabs = memo(function ServiceTabs({
  activeTab,
  onTabChange,
}: ServiceTabsProps) {
  return (
    <div className="w-full flex justify-center overflow-x-auto no-scrollbar py-2 px-1">
      <div className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-zinc-200/50 border border-black/5">
        {SERVICE_TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative px-[22px] py-[14px] text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-none rounded-[12px] whitespace-nowrap cursor-pointer select-none",
                isActive
                  ? "text-[#00020F]"
                  : "text-[#6B7280] hover:text-[#00020F]"
              )}
            >
              <span className="relative z-10">{tab.label}</span>

              {/* Framer Motion Shared Layout active background glide */}
              {isActive && (
                <motion.div
                  layoutId="active-service-tab"
                  className="absolute inset-0 z-0 rounded-[12px] bg-white border border-[rgba(0,0,0,0.05)] shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.32,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
});
