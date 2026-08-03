"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import React, { memo } from "react";

import { heroContent } from "@/config/hero";

export const HeroBadge = memo(function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 bg-white border border-[rgba(0,0,0,0.06)] shadow-[0_2px_8px_rgba(0,0,0,0.03)] px-4.5 py-2.5 rounded-xl transform-gpu"
    >
      <Sparkles className="w-3.5 h-3.5 text-[#0F0F11]" />
      <span className="font-sans font-semibold text-[12px] uppercase tracking-[0.12em] text-[#0F0F11]">
        {heroContent.badge}
      </span>
    </motion.div>
  );
});
