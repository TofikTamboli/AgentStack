"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

import { SpecularButton } from "@/components/ui/SpecularButton";
import { heroContent } from "@/config/hero";

export const HeroButtons = memo(function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full transform-gpu"
    >
      {/* Primary SpecularButton CTA */}
      <Link href={heroContent.cta.primary.href} className="w-full sm:w-auto">
        <SpecularButton
          size="lg"
          radius={12}
          tint="#00020F"
          tintOpacity={1}
          textColor="#ffffff"
          lineColor="#8EA8FF"
          baseColor="#475569"
          intensity={2.5}
          shineSize={12}
          shineFade={20}
          thickness={1.5}
          speed={0.35}
          followMouse
          proximity={300}
          autoAnimate
          className="w-full sm:w-auto"
        >
          <span>{heroContent.cta.primary.text}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </SpecularButton>
      </Link>

      {/* Secondary CTA */}
      <Link
        href={heroContent.cta.secondary.href}
        className="group flex items-center justify-center gap-2.5 h-[48px] px-[28px] rounded-xl text-[16px] font-semibold tracking-[-0.02em] leading-none bg-white text-[#00020F] border border-[rgba(0,0,0,0.06)] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[rgba(0,0,0,0.12)] hover:bg-zinc-50/80 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
      >
        <Compass className="w-4 h-4 text-[#52525B] transition-transform group-hover:rotate-45" />
        <span>{heroContent.cta.secondary.text}</span>
      </Link>
    </motion.div>
  );
});
