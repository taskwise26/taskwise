# TaskWise Design System

A complete brand and UI system for **TaskWise** — a B2B automation SaaS that helps companies from SMEs to enterprises **automate tasks and wisely safeguard their profits**.

---

## Who is TaskWise?

TaskWise is a workflow automation platform sold to operations, finance, and IT leaders who need to remove repetitive work from their teams without losing control or auditability. The product wraps several capabilities into one orchestration layer:

- **Invoice & quotation automation** — generate, send, reconcile.
- **OCR document verification** — extract and validate fields from PDFs, scans, photos.
- **Smart forms** — branded intake forms that route into downstream systems.
- **Integrations** — 180+ pre-built connectors (CRMs, ERPs, accounting, storage, messaging).
- **Messaging automation** — outbound + transactional flows across WhatsApp, Slack, Teams, Email.
- **Workflow orchestration** — visual builder that ties all of the above together with conditional logic, approvals, and human-in-the-loop steps.

TaskWise's positioning is **calm, precise, and corporate**. It is not a flashy "AI for everyone" toy — it is the dependable backbone a CFO or COO can stake their quarterly numbers on.

### Reference materials

- **Content reference:** flowdesk.ai / flowmate.io (automation-engine framing, B2B SaaS landing page conventions). Content reference only — TaskWise has its own ownable visual identity.
- **Primary use case for this system:** marketing & landing pages — hero, feature grids, testimonials, pricing, CTAs, nav, footer.

---

## Index

| File / Folder | What's in it |
| --- | --- |
| `README.md` | This document — brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Skill manifest — entry point when this system is loaded as a Claude Skill. |
| `colors_and_type.css` | All design tokens as CSS custom properties: color, type, spacing, radii, shadows, motion. |
| `fonts/` | Font loading (Google Fonts: Bricolage Grotesque, Manrope). |
| `assets/` | Logo files (SVG), product mark, icon manifest, sample brand imagery. |
| `preview/` | One-off design-system cards (colors, type, components, spacing). |
| `ui_kits/marketing/` | Production-grade marketing site recreation — nav, hero, feature grid, pricing, testimonials, footer, automation demos. |

---

## Content fundamentals

TaskWise copy is **direct, confident, and quiet**. It speaks to a senior buyer who has seen demos before and is tired of breathless marketing.

### Voice rules

- **Second person (you / your).** TaskWise speaks *to* the customer's team, not *about* itself in third person.
- **Specific verbs over hype.** "Reconcile 4,000 invoices a month" not "supercharge your finance team."
- **Numbers earn their place.** Use them when they are real — "180+ connectors", "$2M+ in receivables processed". Never invent stats for filler.
- **No emoji.** Anywhere. Ever. (See iconography below.)
- **No exclamation marks** in marketing copy — they undercut authority. Save them for transactional UI ("Saved!").
- **Sentence case** for headings and buttons — `Book a demo`, not `Book A Demo`. Feels less corporate-shouty.
- **Title case** is reserved for proper nouns and product names (`Workflow Builder`, `OCR Inspector`).

### Tone examples

> ✅ **Headline:** "Quietly automate the work that drains your team."
> ✅ **Subhead:** "Invoices, approvals, document checks, and 180+ integrations — orchestrated in one place, with the audit trail your finance team actually wants."
> ✅ **Feature title:** "OCR that reads the messy stuff."
> ✅ **Feature body:** "Crumpled receipts, blurry phone photos, multi-page PDFs — TaskWise extracts the fields you need and validates them against your records before anything moves."
> ✅ **CTA primary:** `Book a demo` / `Start free`
> ✅ **CTA secondary:** `See it in action` / `Explore connectors`

> ❌ Avoid: "Revolutionize your workflows!", "AI-powered magic ✨", "Supercharge your team's productivity."
> ❌ Avoid: ALL CAPS headlines, exclamation marks in marketing, em-dash overuse, "Imagine if…" openers.

### Word ledger

| Use | Avoid |
| --- | --- |
| automate, orchestrate, route | supercharge, unleash, revolutionize |
| precise, reliable, auditable | magical, effortless, seamless |
| your team, your operations | businesses, organizations (generic) |
| invoice, quotation, approval | "documents" (vague) |

---

## Visual foundations

The whole system is built around **soft authority** — geometry that's rounded but disciplined, color that's warm but professional, surfaces that feel inhabitable rather than sterile.

### Color
- **Primary** is a warm periwinkle indigo (`#4B52CC`). It's deliberately *not* the teal/mint that dominates automation tools, and not the corporate blue of legacy enterprise software. It reads intelligent and dependable.
- **Accent** is a warm amber (`#F2A93B`), used sparingly — primary CTAs, key chart highlights, "what's new" badges. Roughly 5% of any screen.
- **Neutrals are warm**, not cool. The page background is `#FBFAF7` (warm off-white), surfaces are pure white, borders are `#E8E4DC` (soft warm sand). This is critical — cool grey neutrals will break the brand.
- **Semantic colors** are muted: success is a forest sage (`#3E9B6E`), warning is honey (`#E6A23C`), error is brick (`#D85959`). Nothing screams.

### Typography
- **Display:** Bricolage Grotesque (Google Fonts). Variable, soft geometric humanist — has rounded terminals that match the brand's curvature without losing intellectual weight. Used for H1–H4 and hero numbers.
- **Body:** Manrope (Google Fonts). Highly legible humanist sans with subtly rounded letterforms. Used for body, labels, captions, all UI text.
- **Headings** use weight 500–600 (never 700+ — too aggressive). Body uses 400, emphasis 500–600.
- **Tracking:** display headings get `letter-spacing: -0.02em` (tight, confident). Body sits at 0. Small caps / labels at `+0.04em`.
- **Line height:** display 1.05–1.15, body 1.6, captions 1.5.

### Corner radii
This is the brand's most distinctive geometric move. **Everything is rounded** — and the radii are *generous*, not timid.
- Buttons: 12px (`--radius-md`)
- Inputs: 12px
- Cards: 20px (`--radius-lg`)
- Section containers / hero panels: 28px (`--radius-xl`)
- Icon containers: 14px with a noticeable squircle feel
- Avatars: full pill (50%)
- Pills/badges: full pill (`--radius-full`)

Never use right angles on a surface a user can interact with. A 4px chip looks generic; TaskWise chips are pill-shaped.

### Spacing
8px base grid. Tokens: 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96, 128. Section padding on marketing pages is 96–128px vertically on desktop, 56–72px on mobile.

### Shadows / elevation
**Restrained, multi-layer, warm.** No hard 4-pixel drop shadows.
- `--shadow-sm`: `0 1px 2px rgba(27, 29, 46, 0.04), 0 1px 1px rgba(27, 29, 46, 0.03)` — for buttons and inputs at rest.
- `--shadow-md`: `0 4px 14px -4px rgba(27, 29, 46, 0.06), 0 2px 4px rgba(27, 29, 46, 0.04)` — for cards.
- `--shadow-lg`: `0 24px 48px -16px rgba(27, 29, 46, 0.10), 0 8px 16px -8px rgba(27, 29, 46, 0.06)` — for hero panels, popovers, modals.
- All shadow tints are warmed by the deep heading color (`#1B1D2E`), not pure black, so they sit naturally on the warm-white background.

### Borders
1px hairline borders in `#E8E4DC`. Cards usually have **both** a 1px border and a subtle shadow — the border defines edge, the shadow provides depth. This is the "soft authority" trick: the page never looks flat, but never looks lifted-and-floating either.

### Backgrounds
- Default page background: warm off-white `#FBFAF7`.
- Section variants:
  - **Soft tint** (`#F5F3EE`) — every other section, gentle alternation.
  - **Primary tint** (`#EEF0FB`) — for one or two hero/CTA sections per page.
  - **Charcoal** (`#1B1D2E`) — for the footer and the occasional dark CTA section.
- **Subtle background patterns:** very faint dot grid (4% opacity primary) or large soft blurred orb (radial gradient, 6% opacity) — used at most once per page, behind the hero.
- **No gradients across foreground UI.** Gradients are reserved for huge ambient page backdrops only.

### Hover & press states
- Buttons darken by ~8% on hover (use `oklch` or pre-computed darker variant tokens), translate up 1px on hover (only buttons, never cards), translate back to 0 on press.
- Cards on hover: shadow grows from `--shadow-md` to `--shadow-lg`, **no translation**, border tints slightly toward primary at 8% opacity.
- Links: underline appears (1px, primary at 60%), or color shifts to primary-darker. Never use blue underline on link hover — use the primary color.
- Press state: button shrinks to 98% scale and removes its shadow.

### Motion
- **Easing:** `cubic-bezier(0.32, 0.72, 0, 1)` (a soft swift-out) — feels confident, never bouncy.
- **Duration:** 150ms for hovers, 220ms for state changes, 320ms for layout transitions, 500–800ms for hero entry choreography.
- **No bounces, no springs, no slides over 800ms.** TaskWise motion is *calm*. Think of it as a senior product manager nodding — not a sales rep waving.
- **Stagger** on lists: 40ms between siblings. Subtle.
- Fades are usually paired with a 4–8px translateY for entry, never more.

### Imagery
- **Warm color grading.** Slight orange-cream cast on all photography to match the off-white page background.
- People photography is muted, calm, indoors, professional. No stock-photo grins.
- **Product UI screenshots** are the primary "image" — TaskWise sells by showing the product, not stock photography.
- Sparing use of illustration. When used: simple geometric line + soft-fill, primary + accent only, never multi-color.
- **No 3D renders, no AI-generated images, no glassmorphism.**

### Transparency & blur
- Nav bar background: `rgba(251, 250, 247, 0.78)` with `backdrop-filter: blur(16px)` when scrolled.
- Modal backdrops: `rgba(27, 29, 46, 0.45)` with `backdrop-filter: blur(4px)`.
- Otherwise, surfaces are opaque. No frosted cards floating in space.

### Layout
- Marketing max content width: **1200px**. Wider feels like an enterprise data product, narrower feels like a personal blog.
- Section vertical padding: 96–128px desktop, 64–80px mobile.
- Hero section is full-bleed background with content centered in the 1200 column.
- Footer is dark charcoal, full-bleed, 4-column on desktop.

---

## Iconography

TaskWise uses **[Lucide](https://lucide.dev)** as its icon library. Lucide is loaded from a CDN — see `assets/ICONOGRAPHY.md` for full details.

- **Style:** line icons, 1.75px stroke (slightly heavier than Lucide default 2px feels too sharp — we lighten it), rounded line caps and joins.
- **Default size:** 20px (in body text), 24px (in nav, buttons), 28–32px (in feature card icon containers).
- **Color:** inherits text color by default. In feature cards, icons sit in a rounded squircle container filled with `--color-primary-50` and the icon stroked in `--color-primary`.
- **No emoji. No Unicode pictograms. No mixing icon families.** If Lucide doesn't have it, we use a custom SVG drawn to match Lucide's stroke style (1.75px round caps/joins).
- **No icon-only buttons** in marketing — always paired with a label. Icon-only buttons are reserved for product UI (close, more, etc.).

See `assets/ICONOGRAPHY.md` for the canonical icon list used across marketing pages.

---

## Open questions / asks

This is v1. The system is opinionated but expects iteration. Tell me:
1. Does the **warm periwinkle indigo** primary feel right, or should we explore a refined sage / slate-blue / deep teal alternative?
2. Is **Bricolage Grotesque + Manrope** the pairing? I considered General Sans + Satoshi (Fontshare) for more distinctiveness — happy to swap.
3. The logo concept is a soft squircle mark with a "checked-task → loop" glyph. Want alternative directions?
4. Do you want a **dark mode** explored even though the brief says light-only? (I'll skip unless you ask.)
