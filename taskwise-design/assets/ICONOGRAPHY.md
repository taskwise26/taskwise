# Iconography — TaskWise

## Library: Lucide

TaskWise uses **[Lucide](https://lucide.dev)** as its primary icon library. Lucide ships ~1,400 line icons in a consistent geometric style with rounded line caps/joins — a strong match for the brand's soft authority. **This is a flagged substitution**: TaskWise does not yet have a custom icon library, so we adopted Lucide and tuned its stroke weight to fit the brand. Swap to a custom library when ready.

### CDN

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```

Or via inline SVG (preferred for marketing — no JS dependency, more direct styling):

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.75"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- Lucide icon path here -->
</svg>
```

## Style rules

| Property | Value |
| --- | --- |
| Stroke width | **1.75px** (Lucide's default 2px is too sharp for TaskWise) |
| Line cap / join | `round` / `round` |
| Default color | `currentColor` (inherits from text) |
| Default size | 20px in body, 24px in nav/buttons, 28–32px in feature cards |
| Fill | `none` — TaskWise icons are line-only |

## Feature card icon container

The signature treatment: a 48×48 squircle container in `--color-primary-50` (light periwinkle) with a 24px primary-color icon inside.

```html
<div class="feature-icon">
  <svg width="24" height="24" stroke="var(--color-primary)" ...><!-- icon --></svg>
</div>

<style>
.feature-icon {
  width: 48px; height: 48px;
  border-radius: 14px;
  background: var(--color-primary-50);
  display: grid; place-items: center;
  color: var(--color-primary);
}
</style>
```

## Canonical icon set

The icons used across marketing pages. Use these names exactly — they correspond to Lucide identifiers.

| Concept | Lucide name |
| --- | --- |
| Invoice automation | `file-text` |
| OCR / document verification | `scan-line` |
| Smart forms | `clipboard-list` |
| Integrations / connectors | `plug` |
| Messaging | `message-square` |
| Workflow orchestration | `workflow` |
| Audit trail | `shield-check` |
| Approvals | `check-circle-2` |
| Analytics | `bar-chart-3` |
| Scheduling | `calendar-clock` |
| Team / users | `users` |
| Settings | `settings-2` |
| Arrow CTA | `arrow-right` |
| External link | `arrow-up-right` |
| Plus / expand | `plus` |
| Close | `x` |

## Hard rules

- **No emoji.** Not in body copy, not in headings, not in marketing pages.
- **No Unicode pictograms** (★, ✓, →, etc.) — use the Lucide equivalent.
- **No icon-only buttons** on marketing pages — always paired with a label.
- **Never mix icon families.** If Lucide doesn't have it, draw a custom SVG to match Lucide's stroke style (1.75px round caps/joins).
- **No multi-color icons.** Single-stroke `currentColor` only. The only exception is the logo mark (which has the amber accent dot).
