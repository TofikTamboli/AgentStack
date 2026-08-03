"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

import { heroContent } from "@/config/hero";

export const HeroStatusBadge = memo(function HeroStatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-[10px] px-[16px] py-[10px] rounded-full bg-[#FFFFFF] border border-[rgba(0,0,0,0.05)] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-default transform-gpu"
    >
      <span className="w-2 h-2 rounded-full bg-[#22C55E] ring-2 ring-[#22C55E]/20 shadow-[0_0_8px_rgba(34,197,94,0.3)] shrink-0" />
      <span className="font-sans font-medium text-[13px] leading-none text-[#52525B]">
        {heroContent.statusBadge.label}
      </span>
    </motion.div>
  );
});
