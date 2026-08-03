"use client";

import { ArrowLeft, ArrowRight, Lock, RotateCw, Share2 } from "lucide-react";

interface BrowserHeaderProps {
  activeView: string;
}

export function BrowserHeader({ activeView }: BrowserHeaderProps) {
  return (
    <div className="flex items-center justify-between h-11 px-4 border-b border-[rgba(0,0,0,0.06)] bg-white/80 backdrop-blur-md rounded-t-[20px]">
      {/* Navigation Controls */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 mr-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 inline-block" />
        </div>
        <button
          type="button"
          aria-label="Back"
          className="p-1 rounded-md text-[#52525B] hover:bg-black/5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          aria-label="Forward"
          className="p-1 rounded-md text-[#52525B] hover:bg-black/5 transition-colors"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          aria-label="Refresh"
          className="p-1 rounded-md text-[#52525B] hover:bg-black/5 transition-colors"
        >
          <RotateCw className="w-3 h-3" />
        </button>
      </div>

      {/* URL Pill */}
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F5F5F5] border border-[rgba(0,0,0,0.04)] text-xs font-medium text-[#52525B] max-w-[280px] sm:max-w-[360px] w-full justify-center">
        <Lock className="w-3 h-3 text-emerald-600" />
        <span className="truncate">agentstack.io/showcase/{activeView}</span>
      </div>

      {/* Share / Options */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          aria-label="Share"
          className="p-1 rounded-md text-[#52525B] hover:bg-black/5 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
