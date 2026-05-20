---
name: taskwise-design
description: Use this skill to generate well-branded interfaces and assets for TaskWise, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# TaskWise Design Skill

TaskWise is a B2B automation SaaS for finance and operations teams. The brand reads **trustworthy, corporate, calm, and quietly authoritative** — never flashy, never aggressive.

## Getting started

1. Read `README.md` at the root of this skill — it's the source of truth for brand context, content rules, visual foundations, and iconography.
2. Import design tokens by linking `colors_and_type.css` from any HTML you generate. All colors, type sizes, spacing, radii, shadows, and motion variables come from there.
3. Reference `ui_kits/marketing/index.html` for a fully assembled example page. Copy patterns from it; don't reinvent.
4. For icons, use Lucide (see `assets/ICONOGRAPHY.md`) — 1.75px stroke, round caps/joins, currentColor.

## Available files

- `README.md` — brand voice, visual foundations, content rules, layout rules
- `SKILL.md` — this file
- `colors_and_type.css` — design tokens (CSS custom properties)
- `assets/logo-mark.svg`, `logo-horizontal.svg` — brand marks
- `assets/ICONOGRAPHY.md` — icon system rules + canonical icon list
- `preview/` — one-off design-system cards (colors, type, spacing, components)
- `ui_kits/marketing/` — complete recreated marketing site (page + components + animated demos)

## When generating artifacts

- **Always link `colors_and_type.css`** rather than redefining tokens.
- **Use Bricolage Grotesque for display, Manrope for body.** Both load from Google Fonts via the CSS import.
- **Warm periwinkle indigo** (`#4B52CC`) is primary. Warm amber (`#F2A93B`) is accent — sparing, max ~5% of any screen.
- **Warm neutrals only.** Page bg is `#FBFAF7`. Never use cool greys.
- **Generous radii** — buttons 12px, cards 20px, panels 28px, badges full-pill.
- **No emoji. No Unicode pictograms.** Lucide icons or custom SVGs only.
- **Sentence case** for headlines and buttons.
- **Second person** (you/your), specific verbs, real numbers, no exclamation marks.
- **Soft authority** — 1px borders + soft warm-tinted shadows, never one without the other on cards.
- Motion: 150–320ms, `cubic-bezier(0.32, 0.72, 0, 1)`. No bounces.

## When invoked with no other guidance

Ask the user what they want to build (landing page section, internal product UI, slide deck, etc.), then act as an expert TaskWise designer and produce static HTML files for review. If they're integrating into a real codebase, copy tokens + assets into their project and reference the rules here.
