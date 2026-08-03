"use client";

import React, { memo } from "react";
import { Activity, Bot, CheckCircle2, Cpu, Zap } from "lucide-react";

interface FloatingCardProps {
  id: string;
  text: string;
  subtext: string;
  position: string;
  onHover: (id: string) => void;
}

export const FloatingCard = memo(function FloatingCard({
  id,
  text,
  subtext,
  position,
  onHover,
}: FloatingCardProps) {
  const getIcon = () => {
    switch (id) {
      case "leads":
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
      case "seo":
        return <Activity className="w-3.5 h-3.5 text-blue-600" />;
      case "agent":
        return <Bot className="w-3.5 h-3.5 text-indigo-600" />;
      case "speed":
        return <Zap className="w-3.5 h-3.5 text-amber-500" />;
      default:
        return <Cpu className="w-3.5 h-3.5 text-purple-600" />;
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "-top-6 -left-4 sm:-top-8 sm:-left-8";
      case "top-right":
        return "-top-6 -right-4 sm:-top-8 sm:-right-8";
      case "middle-left":
        return "top-1/3 -left-6 sm:-left-12 hidden lg:flex";
      case "bottom-left":
        return "-bottom-6 -left-4 sm:-bottom-8 sm:-left-6";
      case "bottom-right":
      default:
        return "-bottom-6 -right-4 sm:-bottom-8 sm:-right-6";
    }
  };

  const animClass = id === "leads" || id === "agent" ? "animate-float-1" : "animate-float-2";

  return (
    <div
      onMouseEnter={() => onHover(id)}
      className={`absolute z-20 cursor-pointer transform-gpu ${getPositionClasses()} ${animClass}`}
    >
      <div className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-200">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-100 group-hover:bg-zinc-200/80 transition-colors">
          {getIcon()}
        </div>
        <div className="flex flex-col text-left">
          <span className="font-sans font-semibold text-xs text-[#00020F] leading-tight">
            {text}
          </span>
          <span className="font-sans text-[11px] text-[#5F5F5F] leading-tight pt-0.5">
            {subtext}
          </span>
        </div>
      </div>
    </div>
  );
});
