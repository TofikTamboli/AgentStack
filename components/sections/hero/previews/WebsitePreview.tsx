"use client";

import React, { memo } from "react";
import { ArrowUpRight, CheckCircle2, Layers, Smartphone, Sparkles, Zap } from "lucide-react";

export const WebsitePreview = memo(function WebsitePreview() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Top Bar of Website Concept */}
      <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#00020F] flex items-center justify-center text-white font-serif text-sm font-semibold">
            V
          </div>
          <span className="font-serif text-base font-medium text-[#00020F] tracking-tight">
            VANGUARD LABS
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-5 text-xs font-medium text-[#52525B]">
          <span>Solutions</span>
          <span>Case Studies</span>
          <span>Engine</span>
          <span>Company</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200/60">
            <Smartphone className="w-3 h-3" />
            100 Mobile Score
          </span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#00020F] text-white">
            Request Demo
          </span>
        </div>
      </div>

      {/* Hero Showcase Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-auto items-center py-4">
        <div className="md:col-span-7 flex flex-col items-start gap-3.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-[11px] font-semibold uppercase tracking-wider text-[#00020F]">
            <Sparkles className="w-3 h-3 text-indigo-600" />
            Next-Gen Digital Platform
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl text-[#00020F] leading-[1.05] tracking-tight">
            Engineering High-Performance Digital Experiences.
          </h3>
          <p className="text-xs sm:text-sm text-[#52525B] max-w-md leading-relaxed">
            Ultra-fast sub-400ms page loads, bespoke serif typography, and automated conversion pipelines designed for global scale.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#00020F] text-white inline-flex items-center gap-1.5"
            >
              <span>Explore Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              className="px-4 py-2 text-xs font-medium rounded-lg bg-white border border-[rgba(0,0,0,0.06)] text-[#00020F]"
            >
              System Architecture
            </button>
          </div>
        </div>

        {/* Feature Cards Column */}
        <div className="md:col-span-5 grid grid-cols-1 gap-3">
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-zinc-50 to-stone-100 border border-[rgba(0,0,0,0.06)] flex items-start gap-3 shadow-xs">
            <div className="p-2 rounded-lg bg-white shadow-xs border border-black/5">
              <Zap className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#00020F] block">Sub-400ms Edge Loading</span>
              <span className="text-[11px] text-[#52525B] block">Vercel Global CDN with static edge generation.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-br from-zinc-50 to-stone-100 border border-[rgba(0,0,0,0.06)] flex items-start gap-3 shadow-xs">
            <div className="p-2 rounded-lg bg-white shadow-xs border border-black/5">
              <Layers className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#00020F] block">Conversion Engine Built-in</span>
              <span className="text-[11px] text-[#52525B] block">Integrated lead routing & analytics instrumentation.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Caption & Status Footer */}
      <div className="pt-3 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs text-[#52525B]">
        <span className="font-medium text-[#00020F]">
          Modern websites engineered for speed, SEO, and conversions.
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 text-emerald-600 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Production Ready
        </span>
      </div>
    </div>
  );
});
