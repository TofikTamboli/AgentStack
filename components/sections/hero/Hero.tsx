"use client";

import React, { memo } from "react";

import { Container } from "@/components/ui/Container";

import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroHeadline } from "./HeroHeadline";
import { HeroStatusBadge } from "./HeroStatusBadge";
import { HeroVisual } from "./HeroVisual";

export const Hero = memo(function Hero() {
  return (
    <section className="relative w-full pt-32 md:pt-40 pb-16 overflow-hidden">
      {/* Static Radial White Spotlight Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.9),rgba(245,245,245,0))]" />

      <Container className="relative z-10 flex flex-col items-center">
        {/* 1. Small Premium Top Badge */}
        <HeroBadge />

        {/* 2. Editorial Headline & Paragraph */}
        <div className="mt-8">
          <HeroHeadline />
        </div>

        {/* 3. Trust Badge */}
        <div className="mt-6 mb-6">
          <HeroStatusBadge />
        </div>

        {/* 4. Twin CTA Buttons */}
        <HeroButtons />

        {/* 5. Interactive Hero Visual (Left OptionWheel + Right ServicePreviewPanel) */}
        <HeroVisual />
      </Container>
    </section>
  );
});
