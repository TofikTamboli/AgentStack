"use client";

import React, { memo, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Globe, Shield, Smartphone, Sparkles, Zap } from "lucide-react";

export const DeviceShowcase = memo(function DeviceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  // RAF throttled mouse 3D parallax
  const rafId = useRef<number | null>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !laptopRef.current || !phoneRef.current) return;
    if (rafId.current !== null) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      if (!containerRef.current || !laptopRef.current || !phoneRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = clientX - centerX;
      const mouseY = clientY - centerY;

      const rotY = (mouseX / (rect.width / 2)) * 2;
      const rotX = -(mouseY / (rect.height / 2)) * 2;

      laptopRef.current.style.transform = `translate3d(0, 0, 0) rotateX(${rotX.toFixed(
        2
      )}deg) rotateY(${rotY.toFixed(2)}deg)`;
      phoneRef.current.style.transform = `translate3d(0, 0, 20px) rotateX(${(
        rotX * 1.3
      ).toFixed(2)}deg) rotateY(${(rotY * 1.3).toFixed(2)}deg)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    if (laptopRef.current) {
      laptopRef.current.style.transform = "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)";
    }
    if (phoneRef.current) {
      phoneRef.current.style.transform = "translate3d(0,0,20px) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.97, 1]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ scale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mt-14 md:mt-18 -mb-10 w-full max-w-[1180px] mx-auto perspective-1000 transform-gpu px-2 sm:px-0"
    >
      {/* Outer Multi-Device Canvas */}
      <div className="relative w-full flex items-center justify-center py-6 sm:py-10">
        {/* Floating Stat Chip Top-Left */}
        <div className="absolute -top-3 left-2 sm:top-2 sm:left-6 z-30 animate-float-1">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-xs font-medium text-[#00020F]">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>0.3s First Contentful Paint</span>
          </div>
        </div>

        {/* Floating Stat Chip Top-Right */}
        <div className="absolute -top-3 right-2 sm:top-2 sm:right-6 z-30 animate-float-2">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-xs font-medium text-[#00020F]">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>100/100 Core Web Vitals</span>
          </div>
        </div>

        {/* 1. Main MacBook Pro Device Frame */}
        <div
          ref={laptopRef}
          className="w-full max-w-[980px] bg-[#111115] rounded-[24px] p-2.5 sm:p-3.5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-transform duration-200 ease-out transform-gpu will-change-transform relative z-10"
        >
          {/* MacBook Notch & Screen Bar */}
          <div className="w-full h-7 bg-[#1A1A20] rounded-t-[18px] flex items-center justify-between px-4 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="px-3 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5 flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-indigo-400" />
              <span>lumen.architects.io</span>
            </div>
            <div className="w-4" />
          </div>

          {/* Screen Content Render */}
          <div className="w-full h-[360px] sm:h-[440px] md:h-[480px] bg-[#FAF9F6] rounded-b-[18px] p-5 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between pb-4 border-b border-black/5">
              <span className="font-serif text-lg text-[#00020F]">LUMEN ARCHITECTURE</span>
              <div className="hidden sm:flex items-center gap-5 text-xs text-zinc-500 font-medium">
                <span>Residences</span>
                <span>Philosophy</span>
                <span>Press</span>
                <span>Contact</span>
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#00020F] text-white">
                Book Consultation
              </span>
            </div>

            <div className="my-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 flex flex-col gap-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-zinc-200/60 text-[10px] font-semibold text-zinc-800 uppercase tracking-wider w-max">
                  <Sparkles className="w-3 h-3 text-indigo-600" />
                  Bespoke Architectural Engineering
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-[#00020F] leading-[1.05]">
                  Organic Sanctuaries Sculpted in Timber & Light.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-sm leading-relaxed">
                  High-craft alpine residences designed for environmental longevity and modern structural elegance.
                </p>
              </div>

              <div className="md:col-span-5 h-[160px] sm:h-[200px] rounded-xl bg-gradient-to-br from-zinc-200 via-stone-300 to-zinc-400 p-4 flex flex-col justify-between border border-black/5">
                <span className="text-[10px] font-mono text-zinc-700 uppercase">Villa Vals, Swiss Alps</span>
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-lg border border-black/5">
                  <span className="font-serif text-xs font-semibold text-zinc-900 block">3,800 sq.m Private Residence</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-zinc-500">
              <span>✦ Engineered by AgentStack</span>
              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live 4K Production Render
              </span>
            </div>
          </div>
        </div>

        {/* 2. Floating Mobile Device (Overlapping Bottom-Right) */}
        <div
          ref={phoneRef}
          className="absolute -bottom-4 right-2 sm:bottom-0 sm:right-4 z-20 w-[180px] sm:w-[240px] bg-[#0F0F12] rounded-[32px] p-2 border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-transform duration-200 ease-out transform-gpu hidden xs:block"
        >
          {/* Dynamic Island Notch */}
          <div className="w-full h-5 bg-black rounded-t-[26px] flex justify-center items-center">
            <div className="w-14 h-3 bg-zinc-900 rounded-full" />
          </div>

          {/* Mobile Screen Content */}
          <div className="w-full h-[300px] sm:h-[380px] bg-[#FAF9F6] rounded-[24px] p-4 flex flex-col justify-between overflow-hidden text-left">
            <div className="flex items-center justify-between pb-2 border-b border-black/5">
              <span className="font-serif text-xs font-semibold text-[#00020F]">LUMEN</span>
              <Smartphone className="w-3 h-3 text-zinc-500" />
            </div>
            <div className="my-auto flex flex-col gap-2">
              <span className="text-[10px] font-semibold text-indigo-600 uppercase">Mobile Native</span>
              <h4 className="font-serif text-base text-[#00020F] leading-tight">
                Organic Sanctuaries
              </h4>
              <p className="text-[10px] text-zinc-500">
                100% fluid mobile viewport with touch gesture physics.
              </p>
              <div className="mt-1 px-3 py-1 rounded bg-[#00020F] text-white text-[10px] text-center font-semibold">
                View Mobile Site
              </div>
            </div>
            <div className="pt-2 border-t border-black/5 text-[9px] font-mono text-zinc-400 text-center">
              iPhone 16 Pro Viewport
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
