"use client";

import { CheckCircle2, Database, MessageSquare, Play, RefreshCw, Zap } from "lucide-react";
import React, { memo } from "react";

export const AutomationPreview = memo(function AutomationPreview() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2">
          <Zap className="w-4.5 h-4.5 text-amber-500" />
          <span className="font-sans font-semibold text-sm text-[#00020F]">
            Enterprise Operations Automation Engine
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
            SYNC: 100% REAL-TIME
          </span>
        </div>
      </div>

      {/* Grid of Automation Triggers & Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto py-4">
        {/* Trigger */}
        <div className="p-4 rounded-xl bg-white border border-black/5 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 uppercase">
              TRIGGER
            </span>
            <Play className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <span className="text-xs font-semibold text-[#00020F]">Stripe Webhook Received</span>
          <p className="text-[11px] text-[#52525B]">New Enterprise Subscription Activated</p>
          <div className="text-[10px] font-mono text-emerald-600 pt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Fired instantly
          </div>
        </div>

        {/* Action 1 */}
        <div className="p-4 rounded-xl bg-white border border-black/5 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 uppercase">
              ACTION
            </span>
            <Database className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-xs font-semibold text-[#00020F]">Provision Workspace</span>
          <p className="text-[11px] text-[#52525B]">Database & API Credentials Generated</p>
          <div className="text-[10px] font-mono text-blue-600 pt-1 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin" /> Executing
          </div>
        </div>

        {/* Action 2 */}
        <div className="p-4 rounded-xl bg-white border border-black/5 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 uppercase">
              INTEGRATION
            </span>
            <MessageSquare className="w-3.5 h-3.5 text-purple-600" />
          </div>
          <span className="text-xs font-semibold text-[#00020F]">Slack & Hubspot Dispatch</span>
          <p className="text-[11px] text-[#52525B]">Account Executive Notified via Slack</p>
          <div className="text-[10px] font-mono text-purple-600 pt-1">Done in 21ms</div>
        </div>
      </div>

      {/* Caption Footer */}
      <div className="pt-3 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs text-[#52525B]">
        <span className="font-medium text-[#00020F]">
          Automate repetitive business operations.
        </span>
        <span className="text-[11px] font-mono">10,000+ Tasks Handled Monthly</span>
      </div>
    </div>
  );
});
