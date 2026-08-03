"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

import { heroContent } from "@/config/hero";

export const HeroHeadline = memo(function HeroHeadline() {
  return (
    <div className="flex flex-col items-center text-center px-2 sm:px-0">
      {/* Editorial Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif font-normal text-[36px] min-[380px]:text-[42px] sm:text-[58px] md:text-[74px] lg:text-[84px] text-[#00020F] leading-[1.04] tracking-[-0.02em] max-w-[900px] text-balance transform-gpu"
      >
        {heroContent.heading}
      </motion.h1>

      {/* Supporting Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 sm:mt-6 font-sans font-medium text-[15px] sm:text-[17px] md:text-[18px] text-[#5F5F5F] leading-[1.65] max-w-[680px] text-balance transform-gpu"
      >
        {heroContent.description}
      </motion.p>
    </div>
  );
});
