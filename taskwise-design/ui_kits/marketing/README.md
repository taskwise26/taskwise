# Marketing site UI kit

Production-grade recreation of the TaskWise marketing/landing page. Single-page experience that demonstrates every component in the design system in real context.

## Sections (top → bottom)

1. **Nav** — sticky, becomes opaque on scroll. Logo + center links + sign-in / book-a-demo CTAs.
2. **Hero** — headline + subhead + dual CTAs + meta trust strip + an animated workflow demo (the showcase).
3. **Logo strip** — fake customer logos in muted brand-tinted marks.
4. **Feature grid** — 6 cards (3×2) in the reference layout: rounded squircle icon + bold title + body + "learn more" link.
5. **OCR demo** — split panel: invoice scan animation on left, extracted fields appear sequentially on right.
6. **Messaging demo** — split panel: Slack approval flow + WhatsApp vendor notification side-by-side.
7. **Connectors grid** — 18 connector tiles + "+162 more" plus.
8. **Solutions** — 4 teaser cards by team (Finance / Ops / Sales / IT).
9. **Testimonials** — 3 cards with metric + quote + author.
10. **Pricing** — 3 tiers, middle one featured with primary border + amber "Most Popular" pill.
11. **Dark CTA** — charcoal panel with radial gradient backdrops.
12. **Footer** — 5-column dark footer with social, sitemap, and legal.

## Files
- `index.html` — the page itself
- `style.css` — page layout, components, nav, hero, sections
- `demos.css` — animated automation demo styles (workflow / OCR / messaging)
- `demos.js` — vanilla JS that drives the three demos with IntersectionObserver triggers

## Animated demos

The brief asked for "GIFs or videos to show a demo of the automation, as real as possible." Rather than baking pixel video, these are **live UI mockups** built in HTML/CSS/JS — they look like real product UI doing real work and stay crisp at any zoom level.

### Workflow demo (hero)
A 5-node DAG that lights up sequentially: trigger → OCR → PO lookup → branch → Slack approval. The active node gets a primary-blue ring + halo. Edges between nodes turn solid primary and pulse a dot left-to-right. Cycle restarts every ~7s.

### OCR demo
A printed-invoice mockup with a horizontal scan line that sweeps top-to-bottom. As the scan completes each region, a corresponding extracted field card on the right slides in with its value, confidence score, and (for the PO field) a "review" warning state.

### Messaging demo
Two stacked channel mockups (Slack approval + WhatsApp vendor confirmation). Messages appear in sequence with a typing-cadence stagger. The Slack message includes an interactive-looking approval card with Approve/Reject buttons.

All three demos start when their section enters the viewport (IntersectionObserver) and loop continuously.

## Caveats
- Customer logos in the trust strip are mocked (rounded shape + made-up name) — replace with real customer marks when available.
- Connector tiles use 2-letter monogram placeholders for licensed brand marks (Salesforce, Slack, etc.). Swap in real SVGs for production.
- No JSX/React — page is plain HTML/CSS/JS for direct editability. If a React port is needed, components are already cleanly split by section in `index.html` and can be lifted into JSX files.
