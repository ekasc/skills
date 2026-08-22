---
name: imagegen-frontend
description: "Premium image-generation skill for frontend design references. Supports three registers — web (landing pages, marketing sites, product comps), mobile (iOS/Android app screens, multi-screen flows), and brand (identity boards, logo systems, presentation decks). The first word of the request gates the register: "landing page / website / hero" → web, "app / mobile / screen / flow" → mobile, "brand / logo / identity / deck" → brand. Never compress multiple sections into one image — the core rule is one image per section."
---

# HARD OUTPUT RULE — ONE IMAGE PER SECTION

**Generate one separate image PER section. Always. No exceptions.**

- 1 section requested → 1 image
- 4 sections requested → 4 images
- 8 sections requested → 8 images
- "landing page" with no count → default to 6 sections → 6 images

Each image is one section, generated as its own image call. Never combine multiple sections into one frame. Never collapse output into a single image.

If you can only render one image at a time, output them sequentially, announcing each: "Section 1 of N: Hero", "Section 2 of N: Trust bar", etc.

---

# Register dispatch

The first word or intent of the user request determines which register applies:

| Signal | Register |
|---|---|
| "landing page", "website", "hero", "section", "marketing", "homepage", "SaaS site", "portfolio" | web |
| "app", "mobile", "iOS", "Android", "screen", "flow", "onboarding", "settings", "dashboard", "chat" | mobile |
| "brand", "logo", "identity", "deck", "board", "guidelines", "presentation", "kit" | brand |

When ambiguous, ask once which register. Default to web.

---

# Web register

Generates premium, conversion-aware website design references — hero sections, landing pages, marketing sites, startup sites, editorial brand pages, product pages, portfolios.

## Hero composition bias

The default **left-text / right-image hero is the most overused AI pattern**. Before reaching for it, consider:

- centered over background image
- bottom-left over image
- bottom-right over image
- top-left lead
- stacked center
- image-as-canvas
- off-grid editorial
- mini minimalist
- right-text / left-image (inverted classic)

Use left-text / right-image only when it is genuinely the strongest choice.

## Composition variety

- Vary CTAs per section (not all "Get started" buttons)
- Vary hero scales: some giant, some mid, some mini minimalist
- Use background-image freedom — not every section needs a flat background color
- Give each section a different layout family: split, centered, asymmetric, full-bleed, bento

## Narrative concept spine

The page should tell a story. Sections should follow a logical or emotional sequence. The hero sets up the problem; feature sections demonstrate the solution; social proof shows credibility; the CTA closes the conversion.

## Second-read moments

Each section should reveal something new on a second glance — a small detail, a typographic shift, a hidden visual element that rewards attention.

## Single consistent palette

Apply one palette across every section image in the set. Do not change accent color or background strategy mid-sequence.

## Image quality standards

- High-quality, art-directed imagery. Not generic stock.
- Text must be comfortably readable at normal zoom.
- Each section's image must be independently useful as a design reference.
- No tiny pills, labels, tags, system markers, or fake interface jargon cluttering the composition.

---

# Mobile register

Generates premium, app-native mobile screen concepts and flows — onboarding, auth, home dashboards, profile, settings, chat, e-commerce, fintech, health, social, productivity.

## Output format

By default, show screens inside a subtle premium iPhone-style phone mockup with a visible frame. The app content is the focus; the mockup provides context and polish.

## Framing rules

- The phone frame should be subtle: thin bezel, rounded corners, centered on a clean background.
- Status bar (time, battery, signal) should look realistic but uncluttered.
- Use the full frame area for content. Do not crop the app content inside the frame.
- For multi-screen flows, show 2-3 screens in sequence (left to right) connected by an arrow or spacing.

## Composition principles

- **Clean hierarchy:** One primary action per screen. Everything else is secondary.
- **Readable text:** Minimum font size must be legible at mockup scale. No micro-text.
- **Multi-screen consistency:** Same color palette, typography, and component language across all screens in a flow.
- **Controlled palette:** Max 1 accent color per screen set. Saturation < 80%.
- **Textured surfaces:** Flat vectors are the default; add noise, grain, or subtle gradients to break sterility.
- **Image-led composition:** Where the app uses photos or illustrations, feature them prominently.
- **Custom iconography:** Use tasteful, consistent icon style throughout. No generic system icons.
- **Non-generic creative direction:** Do not default to the "fintech = dark navy + gold" or "health = green + white" reflexes.

## Screen types

- **Onboarding flows:** 3-4 screens showing progressive feature reveal. Clean illustrations or photography. Minimal text per screen.
- **Auth flows:** Login, signup, or password reset. Single focused action per screen. Social login options framed as secondary.
- **Home dashboards:** Summary cards, recent activity, primary navigation visible. Data shown as real-looking content (not Lorem Ipsum).
- **Profile screens:** Avatar, name, key stats, settings links. Organized with clear section dividers.
- **Settings screens:** Grouped list of options with toggles, chevrons, and section headers.
- **Chat screens:** Message bubbles, input bar, avatar thumbnails. Realistic conversation content.
- **E-commerce:** Product grid, product detail, cart, checkout. Clean product photography, clear pricing.
- **Fintech:** Account overview, transaction list, send/pay flow. Tabular figures, clear numbers.
- **Health/Fitness:** Dashboard with rings/charts, workout log, progress summary. Motivational but restrained.

## Multi-screen flow rules

- Maximum 3 screens per flow for clarity.
- Maintain exact same palette and type across the sequence.
- Each screen should be recognizable as part of the same product.
- First screen establishes the pattern; subsequent screens iterate on it.

---

# Brand register

Generates premium brand-kit images — brand-guidelines boards, logo systems, identity decks, and visual-world presentations. For minimalist, cinematic, editorial, dark-tech, luxury, cultural, security, gaming, developer-tool, and consumer-app brand systems.

## Board composition

- **Canvas:** Dark charcoal outer background (`#1A1A1A` or `#111`). Clean grid-based presentation layout.
- **Panels:** Distinct content areas separated by strong gutters. Each panel carries one idea.
- **Density:** Restrained. Sparse typography, large negative space. Nothing is crowded.
- **Grid:** Flexible grid layout — 2-column, 3-column, or asymmetric depending on the content being shown.

## Typical board content

A brand board typically includes:

1. **Logo lockup** — primary logo, alternate orientations (horizontal, stacked, icon only). Shown in black, white, and one accent treatment.
2. **Color palette** — 4-6 color swatches with hex labels and functional roles. Displayed as clean filled rectangles with the color name and code.
3. **Typography** — Font specimen showing the brand typeface in display, body, and mono weights. Key character set.
4. **Tone / voice panel** — 3-4 words describing the brand voice, possibly with a short phrase set in the brand font.
5. **Application mockup** — The logo or brand system applied to a realistic surface (business card, packaging, app screen, billboard).
6. **Pattern / texture** — A brand pattern, monogram, or texture element shown at scale.

## Logo presentation

- Show logos as clean vector-style marks. Not rendered as 3D.
- Empty space around the logo is part of the design. Give it room.
- When showing multiple logo variations, align them precisely.
- Every logo should look intentional at the scale it's displayed.

## Composition signals of quality

- **Intentional:** Every element has a reason to exist. No decorative filler.
- **Premium:** Type choices, spacing, and color feel curated, not defaulted.
- **Minimal:** If it doesn't add information, remove it. Empty space is a feature.
- **Coherent:** All panels on a board read as part of the same system.
- **Strategic:** The board communicates not just what the brand looks like, but how it works.
- **Visually expensive:** A designed object, not a templated layout.

## Anti-patterns

- No messy AI moodboard collages (cropped images at random angles, overlapping polaroids, scattered elements).
- No "Inspiring words" word clouds or generic adjective scatterings.
- No purple/blue neon AI gradient aesthetic.
- No standard system fonts (Arial, Helvetica, Times New Roman). Every font choice is deliberate.
- No Lorem Ipsum. Use real brand-appropriate copy or meaningful placeholder text.
- No 3D renders of logos unless the brief explicitly calls for a volumetric treatment.
- No decorative borders, corner ornaments, or clip-art flourishes.
