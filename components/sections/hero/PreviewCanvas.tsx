"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { memo } from "react";

import { AIAgentPreview } from "./previews/AIAgentPreview";
import { AutomationPreview } from "./previews/AutomationPreview";
import { SEOPreview } from "./previews/SEOPreview";
import { WebsitePreview } from "./previews/WebsitePreview";
import { ServiceTabId } from "./ServiceTabs";

interface PreviewCanvasProps {
  activeTab: ServiceTabId;
}

export const PreviewCanvas = memo(function PreviewCanvas({
  activeTab,
}: PreviewCanvasProps) {
  const renderActivePreview = () => {
    switch (activeTab) {
      case "ai-agents":
        return <AIAgentPreview />;
      case "automation":
        return <AutomationPreview />;
      case "seo":
        return <SEOPreview />;
      case "websites":
      default:
        return <WebsitePreview />;
    }
  };

  return (
    <div className="w-full max-w-[1180px] mt-6 -mb-10 mx-auto px-2 sm:px-0">
      {/* Large Product Canvas (No browser chrome) */}
      <div className="w-full h-[420px] sm:h-[480px] md:h-[520px] bg-white rounded-[24px] border border-[rgba(0,0,0,0.06)] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-5 sm:p-7 md:p-9 overflow-hidden relative transform-gpu">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {renderActivePreview()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});
