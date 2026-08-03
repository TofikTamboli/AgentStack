"use client";

import React, { memo } from "react";
import { Activity, TrendingUp } from "lucide-react";

export const SEOPreview = memo(function SEOPreview() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2">
          <Activity className="w-4.5 h-4.5 text-emerald-600" />
          <span className="font-sans font-semibold text-sm text-[#00020F]">
            Lighthouse Vitals & Search Index Audit
          </span>
        </div>
        <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 font-semibold">
          RANKING: #1 PAGE GOOGLE
        </span>
      </div>

      {/* Core 4 Metric Scorecards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-auto py-4">
        <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-xs text-center flex flex-col items-center justify-center">
          <span className="text-3xl font-bold font-mono text-emerald-600">99</span>
          <span className="text-xs font-medium text-[#00020F] pt-1">Performance</span>
          <span className="text-[10px] text-zinc-400">Sub-400ms FCP</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-xs text-center flex flex-col items-center justify-center">
          <span className="text-3xl font-bold font-mono text-emerald-600">100</span>
          <span className="text-xs font-medium text-[#00020F] pt-1">Accessibility</span>
          <span className="text-[10px] text-zinc-400">WCAG 2.2 AA</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-xs text-center flex flex-col items-center justify-center">
          <span className="text-3xl font-bold font-mono text-emerald-600">100</span>
          <span className="text-xs font-medium text-[#00020F] pt-1">Best Practices</span>
          <span className="text-[10px] text-zinc-400">Security Audit</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-xs text-center flex flex-col items-center justify-center">
          <span className="text-3xl font-bold font-mono text-emerald-600">100</span>
          <span className="text-xs font-medium text-[#00020F] pt-1">SEO Score</span>
          <span className="text-[10px] text-zinc-400">JSON-LD Schema</span>
        </div>
      </div>

      {/* Organic Traffic Growth Meter */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span className="font-semibold text-emerald-950">+248% Organic Search Traffic Growth</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-700">Audit Verified</span>
      </div>

      {/* Caption Footer */}
      <div className="pt-3 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs text-[#52525B]">
        <span className="font-medium text-[#00020F]">
          Technical SEO built into every project.
        </span>
        <span className="text-[11px] font-mono text-emerald-600 font-semibold">100/100 Core Vitals</span>
      </div>
    </div>
  );
});
