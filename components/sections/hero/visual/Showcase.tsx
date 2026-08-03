"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Activity, Bot, CheckCircle2, Cpu, Globe, ShieldCheck, Zap } from "lucide-react";

interface ShowcaseProps {
  activeView: string;
}

export function Showcase({ activeView }: ShowcaseProps) {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] bg-[#FBFBF9] overflow-hidden rounded-b-[20px] p-4 sm:p-6 md:p-8 flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {activeView === "website" || activeView === "leads" ? (
          /* View 1: Real Bespoke Luxury Studio Website Showcase */
          <motion.div
            key="website-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-between"
          >
            {/* Header / Nav of Showcase Website */}
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-normal text-[#00020F]">LUMEN ARCHITECTURE</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-[#52525B]">
                <span>Projects</span>
                <span>Philosophy</span>
                <span>Studio</span>
                <span>Contact</span>
              </div>
              <div className="px-3 py-1 text-xs font-semibold rounded-full bg-[#00020F] text-white">
                Book Visit
              </div>
            </div>

            {/* Main Showcase Hero Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-auto items-center">
              <div className="md:col-span-7 flex flex-col items-start gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[rgba(0,0,0,0.06)] text-[11px] font-semibold uppercase tracking-wider text-[#00020F]">
                  <Globe className="w-3 h-3 text-indigo-600" />
                  Bespoke Architectural Engineering
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#00020F] leading-[1.05]">
                  Constructing Modern Sanctuary Built For Eternity.
                </h2>
                <p className="text-xs sm:text-sm text-[#52525B] max-w-md leading-relaxed">
                  High-craft minimalist residences designed in harmony with natural topography and sustainable structural materials.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#00020F] text-white">
                    Explore Portfolio
                  </span>
                  <span className="px-4 py-2 text-xs font-medium rounded-lg bg-white border border-[rgba(0,0,0,0.06)] text-[#00020F]">
                    Our Philosophy
                  </span>
                </div>
              </div>

              {/* Showcase Image / Graphic Card */}
              <div className="md:col-span-5 h-[180px] sm:h-[220px] rounded-xl bg-gradient-to-br from-zinc-200 via-stone-200 to-zinc-300 p-4 flex flex-col justify-between border border-[rgba(0,0,0,0.06)] shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono text-zinc-600 uppercase">Project #048</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/80 text-zinc-800">2026 Completed</span>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-lg border border-black/5 shadow-sm">
                  <span className="font-serif text-sm font-medium text-zinc-900 block">Villa Serenita, Zurich</span>
                  <span className="text-[11px] text-zinc-500 block">3,400 sq.m · Organic Concrete & Timber</span>
                </div>
              </div>
            </div>

            {/* Showcase Footer Metrics */}
            <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs text-[#52525B]">
              <div className="flex items-center gap-4">
                <span>✦ 100% Lighthouse Score</span>
                <span>✦ Next.js App Router</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Conversion Rate +312%</span>
              </div>
            </div>
          </motion.div>
        ) : activeView === "agent" || activeView === "automation" ? (
          /* View 2: AI Agent Autonomous Workflow Visualizer */
          <motion.div
            key="agent-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-indigo-600" />
                <span className="font-sans font-semibold text-sm text-[#00020F]">AgentStack Autonomous Workflow Engine</span>
              </div>
              <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-emerald-100 text-emerald-800">STATUS: ACTIVE 24/7</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-900">1. Inbound Lead</span>
                  <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <p className="text-xs text-zinc-500">Autonomous qualification & parsing of lead requirements.</p>
                <div className="text-[11px] font-mono text-emerald-600 pt-2">✓ Processed in 42ms</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm flex flex-col gap-2 ring-2 ring-indigo-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-900">2. AI Agent Match</span>
                  <Zap className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <p className="text-xs text-zinc-500">Calendar scheduling & CRM contact creation dispatched.</p>
                <div className="text-[11px] font-mono text-indigo-600 pt-2">⚡ Agent Executing...</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-900">3. Confirmation</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="text-xs text-zinc-500">Automated discovery briefing sent to client inbox.</p>
                <div className="text-[11px] font-mono text-zinc-500 pt-2">Next Run in 12s</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs text-[#52525B]">
              <span>Zero Human Bottleneck</span>
              <span>100% Reliability SLA</span>
            </div>
          </motion.div>
        ) : (
          /* View 3: Performance & SEO Audit Analytics Showcase */
          <motion.div
            key="seo-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span className="font-sans font-semibold text-sm text-[#00020F]">Core Web Vitals & SEO Analytics</span>
              </div>
              <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-blue-100 text-blue-800">SPEED: 99/100</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-auto">
              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm text-center">
                <span className="text-2xl font-semibold text-emerald-600 block font-mono">99</span>
                <span className="text-xs text-zinc-500">Performance</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm text-center">
                <span className="text-2xl font-semibold text-emerald-600 block font-mono">100</span>
                <span className="text-xs text-zinc-500">Accessibility</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm text-center">
                <span className="text-2xl font-semibold text-emerald-600 block font-mono">100</span>
                <span className="text-xs text-zinc-500">Best Practices</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm text-center">
                <span className="text-2xl font-semibold text-emerald-600 block font-mono">100</span>
                <span className="text-xs text-zinc-500">SEO</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs text-[#52525B]">
              <span>First Contentful Paint: 0.3s</span>
              <span>Largest Contentful Paint: 0.6s</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
