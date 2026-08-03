"use client";

import { Activity, Bot, ChevronDown, ChevronUp } from "lucide-react";
import React, { memo, useCallback, useMemo, useRef, useState } from "react";

import { OptionWheel, OptionWheelRef } from "@/components/ui/OptionWheel";
import { ServiceCategory,SERVICES_DATA } from "@/config/services";

import { ServicePreviewPanel } from "./ServicePreviewPanel";

export const HeroVisual = memo(function HeroVisual() {
  const wheelRef = useRef<OptionWheelRef>(null);

  // Service State (Driven exclusively by OptionWheel)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Project State (Driven ONLY by Preview Panel bottom left/right arrows)
  const [projectIndex, setProjectIndex] = useState(0);

  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const wheelItems = useMemo(
    () => SERVICES_DATA.map((s) => s.label),
    []
  );

  const activeCategory: ServiceCategory = useMemo(() => {
    return SERVICES_DATA[activeCategoryIndex] ?? SERVICES_DATA[0] ?? {
      id: "default",
      label: "Website Development",
      category: "WEB ENGINEERING",
      projects: [],
    };
  }, [activeCategoryIndex]);

  // OptionWheel change callback
  const handleWheelChange = useCallback((index: number) => {
    setActiveCategoryIndex(index);
    setProjectIndex(0); // Reset project counter to Project 1 automatically
  }, []);

  // Desktop Left Arrow Controls (Invoke OptionWheel internal navigation API)
  const handlePrevService = useCallback(() => {
    wheelRef.current?.selectPrevious();
  }, []);

  const handleNextService = useCallback(() => {
    wheelRef.current?.selectNext();
  }, []);

  // Hold mouse down >400ms auto-scroll for OptionWheel
  const stopHoldScroll = useCallback(() => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    if (autoIntervalRef.current) {
      clearInterval(autoIntervalRef.current);
      autoIntervalRef.current = null;
    }
  }, []);

  const startHoldScroll = useCallback(
    (direction: "up" | "down") => {
      stopHoldScroll();
      if (direction === "up") {
        handlePrevService();
      } else {
        handleNextService();
      }

      holdTimerRef.current = setTimeout(() => {
        autoIntervalRef.current = setInterval(() => {
          if (direction === "up") {
            handlePrevService();
          } else {
            handleNextService();
          }
        }, 300);
      }, 400);
    },
    [handlePrevService, handleNextService, stopHoldScroll]
  );

  // Project Navigation Handlers (Controlled ONLY by Preview Panel bottom arrows)
  const handlePrevProject = useCallback(() => {
    setProjectIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNextProject = useCallback(() => {
    const total = activeCategory.projects.length;
    setProjectIndex((prev) => Math.min(total - 1, prev + 1));
  }, [activeCategory.projects.length]);

  return (
    <div className="relative mt-12 md:mt-16 -mb-10 w-full max-w-[1320px] mx-auto px-2 sm:px-4">
      {/* 2 Subtle Floating Decoration Cards */}
      <div className="absolute -top-4 left-4 z-30 hidden lg:block animate-float-1">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-xs text-xs font-medium text-[#00020F]">
          <Bot className="w-3.5 h-3.5 text-indigo-600" />
          <span>AI Powered</span>
        </div>
      </div>

      <div className="absolute -top-4 right-4 z-30 hidden lg:block animate-float-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-xs text-xs font-medium text-[#00020F]">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <span>99 Lighthouse Score</span>
        </div>
      </div>

      {/* Main Split Layout: 40% OptionWheel | 60% Preview Panel */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">
        {/* Desktop Left OptionWheel + Left Service Up/Down Buttons (40% Split) */}
        <div className="hidden md:flex items-center w-full md:w-[42%] lg:w-[40%] h-[480px]">
          {/* Desktop Left OptionWheel Service Controls ONLY */}
          <div className="hidden lg:flex flex-col gap-3 mr-4 z-20 shrink-0">
            {/* ChevronUp (Previous Service in OptionWheel) */}
            <button
              type="button"
              onMouseDown={() => startHoldScroll("up")}
              onMouseUp={stopHoldScroll}
              onMouseLeave={stopHoldScroll}
              onTouchStart={() => startHoldScroll("up")}
              onTouchEnd={stopHoldScroll}
              aria-label="Previous Service"
              className="w-[42px] h-[42px] rounded-xl bg-[#FFFFFF] border border-[rgba(0,0,0,0.06)] shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#00020F] hover:bg-[#F8F8F8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:translate-y-0 active:bg-zinc-100 transition-all duration-250 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronUp className="w-5 h-5 text-[#00020F]" />
            </button>

            {/* ChevronDown (Next Service in OptionWheel) */}
            <button
              type="button"
              onMouseDown={() => startHoldScroll("down")}
              onMouseUp={stopHoldScroll}
              onMouseLeave={stopHoldScroll}
              onTouchStart={() => startHoldScroll("down")}
              onTouchEnd={stopHoldScroll}
              aria-label="Next Service"
              className="w-[42px] h-[42px] rounded-xl bg-[#FFFFFF] border border-[rgba(0,0,0,0.06)] shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#00020F] hover:bg-[#F8F8F8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:translate-y-0 active:bg-zinc-100 transition-all duration-250 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronDown className="w-5 h-5 text-[#00020F]" />
            </button>
          </div>

          {/* OptionWheel */}
          <div className="w-full h-full flex-1 min-w-[340px]">
            <OptionWheel
              ref={wheelRef}
              items={wheelItems}
              defaultSelected={0}
              onChange={handleWheelChange}
              side="left"
              fontSize={2.4}
              spacing={1.35}
              curve={1.15}
              tilt={5}
              blur={1.2}
              fade={0.18}
              minOpacity={0.05}
              smoothing={200}
              inset={38}
              loop
              draggable
              textColor="#8A8A8A"
              activeColor="#00020F"
              soundVolume={0.2}
            />
          </div>
        </div>

        {/* Mobile Horizontal Selector (<768px) */}
        <div className="block md:hidden w-full overflow-x-auto no-scrollbar py-2">
          <div className="inline-flex items-center gap-2 px-2">
            {SERVICES_DATA.map((s, idx) => {
              const isActive = idx === activeCategoryIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    wheelRef.current?.selectIndex(idx);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-[#00020F] text-white"
                      : "bg-[#FFFFFF] text-[#8A8A8A] border border-black/5"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Museum Mat Full-Canvas Portfolio Panel (60% Split) */}
        <div className="w-full md:w-[58%] lg:w-[60%] flex justify-center md:justify-end">
          <ServicePreviewPanel
            category={activeCategory}
            projectIndex={projectIndex}
            onPrevProject={handlePrevProject}
            onNextProject={handleNextProject}
          />
        </div>
      </div>
    </div>
  );
});
