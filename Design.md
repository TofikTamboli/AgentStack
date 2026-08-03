# DESIGN INSPIRATION CONTEXT

The primary design inspiration for this project is **Lander Studio**.

IMPORTANT:
This is a design reference only.

DO NOT clone, copy, recreate, or closely imitate their layouts, components, spacing, animations, copywriting, illustrations, or visual assets.

Instead, study the design principles behind the website and reinterpret them into a unique design system for AgentStack.

The final website must have its own identity while maintaining the same premium quality.

--------------------------------------------------

# Design Philosophy

The website should communicate:

• Premium craftsmanship
• Modern technology
• Trust
• Elegance
• Simplicity
• Innovation
• Confidence

Every design decision should reinforce these values.

--------------------------------------------------

# Typography Inspiration

Use a high-contrast typography system.

Large editorial serif headings paired with clean modern sans-serif UI text.

Desired feeling:
Luxury meets technology.

Possible font pairing:
- Headings: Instrument Serif
- Body: Inter Tight

Never overuse the serif font.
Reserve it for important marketing statements.
Everything else should use the modern sans-serif font.

--------------------------------------------------

# Color Philosophy

Use a restrained palette.

- Primary Background: Off-white / warm neutral
- Primary Text: Near black
- Secondary Text: Dark gray
- Accent Color: A single premium brand accent used intentionally throughout the website (Examples: Blue, Purple, Electric Indigo).

Never use many competing accent colors.
The design should feel calm and premium.

--------------------------------------------------

# Layout Principles

- Large whitespace.
- Comfortable reading rhythm.
- Clear visual hierarchy.
- Large section spacing.
- Consistent container widths.
- Balanced alignment.
- No visual clutter.
- Every section should breathe.

--------------------------------------------------

# Visual Style

- Minimalistic.
- Elegant.
- Modern.
- High-end.
- Editorial.
- Technology focused.
- Sophisticated.
- Soft rounded corners.
- Subtle shadows.
- Premium gradients.
- Glassmorphism only when it genuinely improves the design.

--------------------------------------------------

# Motion Philosophy

Animations should feel expensive.

Use:
• Smooth fade transitions
• Gentle reveal animations
• Soft parallax
• Micro interactions
• Premium hover effects
• Smooth page transitions
• Refined scrolling

Avoid:
• Flashy animations
• Overly aggressive motion
• Bouncing effects
• Excessive rotating elements
• Gimmicky interactions

Animation should support the content—not distract from it.

--------------------------------------------------

# Navigation Philosophy

- Simple.
- Minimal.
- Easy to scan.
- Persistent CTA.
- Focused on conversion.

--------------------------------------------------

# Component Philosophy

Every component should look custom designed.
Avoid default component-library appearance.
Customize spacing, typography, borders, hover states, and animations to create a distinctive AgentStack identity.

--------------------------------------------------

# Portfolio Presentation

Projects should feel like premium case studies.
- Large previews.
- Beautiful mockups.
- Generous whitespace.
- Interactive but elegant.

--------------------------------------------------

# User Experience

- Navigation should be effortless.
- Content should be easy to scan.
- The visitor should always know what to do next.
- Every section should naturally lead toward the primary CTA.

--------------------------------------------------

# Performance Philosophy

Beauty should never compromise speed.

Prioritize:
• Fast loading
• Optimized assets
• Excellent Lighthouse scores
• Accessibility
• SEO
• Responsive layouts

--------------------------------------------------

# Brand Personality

AgentStack is not "just another web agency."

It is an AI-first digital engineering studio that builds premium websites, intelligent automation, AI agents, and scalable digital products.

The website should reflect this positioning through thoughtful design rather than excessive decoration.

--------------------------------------------------

# Final Principle

Take inspiration from Lander Studio's design philosophy—not its implementation.

Build something original that is instantly recognizable as AgentStack.

The goal is not similarity.

The goal is achieving the same level of quality, refinement, and attention to detail while creating a completely unique premium experience.

--------------------------------------------------
--------------------------------------------------

# PIXEL-PERFECT TOKEN & IMPLEMENTATION SPECIFICATIONS

## Style Foundations & Tokens
- **Visual Style**: Clean, functional, implementation-oriented
- **Main Font Style**:
  - `font.family.primary`: `Inter Tight`
  - `font.family.stack`: `Inter Tight, Inter Tight Placeholder, sans-serif`
  - `font.size.base`: `15px`
  - `font.weight.base`: `500`
  - `font.lineHeight.base`: `22.5px`
- **Typography Scale**:
  - `font.size.xs`: `12px`
  - `font.size.sm`: `15px`
  - `font.size.md`: `16px`
  - `font.size.lg`: `17px`
  - `font.size.xl`: `18px`
  - `font.size.2xl`: `20px`
  - `font.size.3xl`: `26px`
  - `font.size.4xl`: `32px`
- **Color Palette Tokens**:
  - `color.surface.base`: `#000000`
  - `color.surface.muted`: `#111111`
  - `color.surface.strong`: `#e0e0e0`
  - `color.text.secondary`: `#ffffff`
  - `color.text.tertiary`: `#333333`
  - `color.text.inverse`: `#0000ee`
- **Spacing Scale**:
  - `space.1`: `12px`
  - `space.2`: `14px`
  - `space.3`: `18px`
  - `space.4`: `20px`
  - `space.5`: `24px`
  - `space.6`: `30px`
  - `space.7`: `40px`
  - `space.8`: `50px`
- **Radius, Shadow & Motion Tokens**:
  - `radius.xs`: `12px`
  - `radius.sm`: `16px`
  - `shadow.1`: `rgba(0, 0, 0, 0.15) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 5px 18px 0px`
  - `motion.duration.instant`: `400ms`

---

## Accessibility Rules (WCAG 2.2 AA)
- Target: **WCAG 2.2 AA**
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

---

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for: `default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`, and `error`.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

---

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

---

## Guideline Authoring & Component Expectations
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

---

## Quality Gates
- Every non-negotiable rule must use **"must"**.
- Every recommendation should use **"should"**.
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
