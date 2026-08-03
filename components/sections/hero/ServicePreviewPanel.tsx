"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Globe, Layers, ShieldCheck } from "lucide-react";
import React, { memo } from "react";

import { ProjectItem, ServiceCategory } from "@/config/services";

interface ServicePreviewPanelProps {
  category: ServiceCategory;
  projectIndex: number;
  onPrevProject: () => void;
  onNextProject: () => void;
}

export const ServicePreviewPanel = memo(function ServicePreviewPanel({
  category,
  projectIndex,
  onPrevProject,
  onNextProject,
}: ServicePreviewPanelProps) {
  const fallbackProject: ProjectItem = {
    id: "default",
    title: "Bespoke Digital Experience",
    gradient: "from-[#00020F] via-zinc-900 to-indigo-950",
    visualType: "website",
  };

  const projectsList = category?.projects ?? [fallbackProject];
  const totalProjects = projectsList.length;
  const currentProject: ProjectItem =
    projectsList[projectIndex] ?? projectsList[0] ?? fallbackProject;

  const isFirst = projectIndex === 0;
  const isLast = projectIndex === totalProjects - 1;

  return (
    <div className="w-full max-w-[760px] h-[440px] min-[400px]:h-[480px] sm:h-[530px] md:h-[560px] lg:h-[580px] bg-white rounded-[24px] border border-[rgba(0,0,0,0.06)] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden relative transform-gpu">
      {/* 1. Museum Mat Soft Inner Canvas */}
      <div className="w-full flex-1 p-2.5 sm:p-3 rounded-[18px] bg-[#FAFAFA] shadow-[0_2px_8px_rgba(0,0,0,0.025)] overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${category?.id ?? "cat"}-${currentProject.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`w-full h-full rounded-[12px] bg-gradient-to-br ${currentProject.gradient} p-4 sm:p-7 flex flex-col justify-between text-white overflow-hidden relative shadow-sm`}
          >
            {/* Visual Header Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-300 truncate max-w-[180px] sm:max-w-none">
                  {category?.category ?? "WEB ENGINEERING"}
                </span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            {/* High-Craft Full-Bleed Artwork Representation */}
            <div className="my-auto w-full max-w-lg mx-auto bg-white/10 backdrop-blur-xl rounded-xl border border-white/15 p-3.5 sm:p-5 shadow-2xl flex flex-col gap-2.5 sm:gap-3 z-10 text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-serif text-base sm:text-xl font-normal text-white tracking-tight truncate mr-2">
                  {currentProject.title}
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-white/20 text-white font-semibold shrink-0">
                  LIVE SITE
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1">
                <div className="h-14 sm:h-16 rounded-lg bg-white/10 border border-white/10 p-1.5 sm:p-2 flex flex-col justify-between">
                  <Globe className="w-3.5 h-3.5 text-indigo-300" />
                  <span className="text-[9px] sm:text-[10px] font-mono text-zinc-200 truncate">Sub-350ms</span>
                </div>
                <div className="h-14 sm:h-16 rounded-lg bg-white/10 border border-white/10 p-1.5 sm:p-2 flex flex-col justify-between">
                  <Layers className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="text-[9px] sm:text-[10px] font-mono text-zinc-200 truncate">Fluid UI</span>
                </div>
                <div className="h-14 sm:h-16 rounded-lg bg-white/10 border border-white/10 p-1.5 sm:p-2 flex flex-col justify-between">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                  <span className="text-[9px] sm:text-[10px] font-mono text-zinc-200 truncate">100 SEO</span>
                </div>
              </div>
            </div>

            {/* Footer Render Tag */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-400 z-10 pt-2 border-t border-white/10">
              <span className="truncate mr-2">AgentStack Portfolio Showcase</span>
              <span className="shrink-0">4K Render</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Single Line Project Title & Navigation Footer */}
      <div className="pt-2.5 sm:pt-3 px-1 flex flex-col gap-1.5 sm:gap-2">
        {/* Single Line Project Title */}
        <div className="w-full text-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentProject.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="font-sans text-[14px] sm:text-[16px] font-semibold text-[#00020F] truncate tracking-tight"
            >
              {currentProject.title}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* 3. Navigation Row (← Project 1 / N →) */}
        <div className="flex items-center justify-between pt-1 border-t border-[rgba(0,0,0,0.06)]">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={onPrevProject}
            disabled={isFirst}
            aria-label="Previous Project"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#00020F] shadow-xs hover:bg-zinc-50 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:translate-y-0 disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:shadow-none disabled:cursor-not-allowed transition-all duration-250 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Counter */}
          <span className="font-sans font-medium text-[12px] sm:text-[13px] text-[#5F5F5F] tracking-wide">
            Project {projectIndex + 1} / {totalProjects}
          </span>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={onNextProject}
            disabled={isLast}
            aria-label="Next Project"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#00020F] shadow-xs hover:bg-zinc-50 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:translate-y-0 disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:shadow-none disabled:cursor-not-allowed transition-all duration-250 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
});
