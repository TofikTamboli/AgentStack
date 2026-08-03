"use client";

import { ArrowRight, Bot, Calendar, CheckCircle2, Cpu, Mail, UserCheck } from "lucide-react";
import React, { memo } from "react";

export const AIAgentPreview = memo(function AIAgentPreview() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Top Status */}
      <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2">
          <Bot className="w-4.5 h-4.5 text-indigo-600" />
          <span className="font-sans font-semibold text-sm text-[#00020F]">
            Autonomous Agent Orchestration Node
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
            DISPATCHER: ACTIVE 24/7
          </span>
        </div>
      </div>

      {/* Node Workflow Canvas (User -> AI -> CRM -> Email -> Booking) */}
      <div className="my-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-2 items-center relative">
          {/* Node 1: User Input */}
          <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-xs flex flex-col gap-1.5 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-zinc-400 uppercase">Input</span>
              <UserCheck className="w-3.5 h-3.5 text-blue-600" />
            </div>
            <span className="text-xs font-semibold text-[#00020F]">1. User Inquiry</span>
            <span className="text-[11px] text-[#52525B]">Inbound Web Form</span>
          </div>

          <div className="hidden sm:flex justify-center text-indigo-400">
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>

          {/* Node 2: AI Reasoning Agent */}
          <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200/60 shadow-xs flex flex-col gap-1.5 relative z-10 ring-2 ring-indigo-500/20">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-indigo-600 uppercase">AI Core</span>
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            </div>
            <span className="text-xs font-semibold text-[#00020F]">2. Agent Logic</span>
            <span className="text-[11px] text-indigo-700 font-mono">Qualifies Intent (18ms)</span>
          </div>

          <div className="hidden sm:flex justify-center text-indigo-400">
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>

          {/* Node 3: Dispatch (CRM + Email + Booking) */}
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/60 shadow-xs flex flex-col gap-1.5 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-600 uppercase">Dispatch</span>
              <div className="flex items-center gap-1 text-emerald-600">
                <Mail className="w-3 h-3" />
                <Calendar className="w-3 h-3" />
              </div>
            </div>
            <span className="text-xs font-semibold text-[#00020F]">3. Booking Live</span>
            <span className="text-[11px] text-emerald-700 font-mono">CRM Updated & Sent</span>
          </div>
        </div>

        {/* Live Execution Metric */}
        <div className="mt-6 p-3 rounded-xl bg-zinc-50 border border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="text-[#00020F] font-medium">Last Action: Scheduled Discovery Meeting for Lead #3892</span>
          </div>
          <span className="text-[11px] font-mono text-[#52525B]">Latency: 142ms</span>
        </div>
      </div>

      {/* Caption Footer */}
      <div className="pt-3 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs text-[#52525B]">
        <span className="font-medium text-[#00020F]">
          Autonomous AI systems that work 24/7.
        </span>
        <span className="text-[11px] font-mono">0 Human Bottlenecks</span>
      </div>
    </div>
  );
});
