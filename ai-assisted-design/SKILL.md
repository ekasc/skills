---
name: ai-assisted-design
description: Design methodology for working with AI — you direct, AI executes. Covers three approaches (design skills, component-by-component, inspiration board) with a full workflow from idea to polished output. Use when building landing pages, apps, dashboards, posters, or any visual UI that needs to stand out.
---

# AI-Assisted Design

**Core philosophy:** AI executes, you direct. Taste cannot be prompted — it comes from your judgment. AI knows rules (spacing, color theory, hierarchy). It does not know what feels original or good. Your job is to curate, the AI's job is to build.

## The Taste Gap

AI can recite every design rule. It cannot feel why a margin is cramped or a typeface feels cheap. You work around this by:

1. Developing strong reference libraries
2. Building component-by-component so each piece is evaluated against its own purpose
3. Never asking AI to "design something good" — give it specific direction

## Three Approaches

### 1. Design Skills (Fast)
**When:** Short on time, small projects, prototyping

- Load a prebuilt design skill
- Give AI context (colors, audience, purpose)
- Prompt a few iterations
- Fix obvious issues
- Ship

**Result:** Decent. May feel generic if the skill is broad. Good skills avoid the worst slop.

### 2. Component-by-Component (Highest Quality)
**When:** The design needs to stand out. You want people to feel thought went into it.

Build one piece at a time. Each section has different constraints:
- **Navigation** — utility, scannability, responsive
- **Hero** — stop scrolling, communicate value fast
- **Features/Cards** — comparison, scannable info
- **Pricing** — clean comparison, trust cues
- **Testimonials** — credibility, not flash
- **CTA** — frictionless action
- **Footer** — information architecture

Never say "build me a full website." Build section by section, evaluate each against its purpose.

### 3. Inspiration Board (Balanced)
**When:** You have curated references but don't want to build from scratch

Collect screenshots from sources like Mobbin, Awwwards, Webflow, Craftwork, Rebrand Gallery, Component Gallery, Savee, Cosmos, Pinterest. Then tell AI:

> "Combine the style and direction of these references into a design for my product. Do not copy directly."

Still provide full context first. Let AI ask clarifying questions before generating.

## Full Workflow

### Phase 1: Define the Foundation
Ask yourself before touching any tool:

| Question | Why it matters |
|---|---|
| Who is this for? | Audience defines every design decision |
| What problem does it solve? | Keeps design functional, not decorative |
| What should it feel like? | Tone — playful, premium, technical, minimal |
| What should it represent? | Brand values visible in the UI |

Write this down. Use AI to ask you *questions*, not to design. Prompt it with something like:

> "Ask me questions about my product so you understand the audience, purpose, and brand before we start designing."

### Phase 2: Collect & Organize Inspiration
Browse reference sources and save what resonates. For each piece, ask *why* it works — layout, spacing, typography, structure, interaction.

Organize into component folders:
```
references/
├── navigation/
├── heros/
├── pricing/
├── cards/
├── dashboards/
├── animations/
└── typography/
```

**Good sources:** Mobbin, Pinterest, Cosmos, Awwwards, Webflow Templates, Craftwork, Rebrand Gallery, Component Gallery, Savee, Lummi

**Rule:** Do not copy entire designs. Combine ideas into something that fits your product.

### Phase 3: Map Structure
Define every section you need before building anything.

**For websites:** Navigation → Hero → Features → Pricing → Testimonials → CTA → Footer

**For apps:** Onboarding → Home → Search → Profile → Settings → Core flows → Empty states

Each section needs clear content. AI can help write copy, but the content structure comes from you.

### Phase 4: Build Component by Component
For each component:

1. Load the relevant references
2. Write a specific prompt (headline, description, CTA, visual)
3. Generate the component
4. Evaluate against its purpose
5. Iterate with specific feedback (not "make it better")

**Good prompt structure:**
```
Build a [component type] for [product].
Context: [audience, brand, feeling]
Content: [headline, copy, CTA]
References: [what inspired this]
Tone: [minimal, playful, premium, technical]
Colors: [primary palette]
Typography: [font choices]
```

### Phase 5: Generate Custom Assets
Use image generation for visuals that match your brand. Avoid stock photography.

Give clear context:
- **Colors** — exact hex values
- **Style** — flat, 3D, illustrated, photorealistic
- **Composition** — subject placement, negative space
- **Use case** — hero background, card illustration, icon set

SVG generation (use Quiver) is preferred for interactive elements — individual elements can be animated.

Video (Google Flow) enhances hero sections, backgrounds, and product demos.

### Phase 6: Add Depth
Use background removal and layering for:
- Depth (layered elements, parallax)
- Motion (hover states, transitions)
- Interaction (micro-interactions that feel responsive)

Small details make the biggest difference.

### Phase 7: Refine
Fix obvious issues immediately. Iterate with specific directional feedback — never "make it look better." Say what's wrong and why.

## Tool Reference

| Tool | Use |
|---|---|
| Image gen (Seedream 5.0, GPT Images 2.0, FLUX) | Custom visuals matching brand |
| Quiver | SVG generation (animatable elements) |
| Google Flow | Video for hero/background/demo |
| Lummi | Image library (verify brand match) |
| Background removal | Layering, depth, interaction |
| Cursor / Codex / Claude | Build harness |
| Mobbin | Real product screens, organized by category |

## Pitfalls

- **"Build me a full website"** — produces generic mean-of-everything slop. Build section by section.
- **"Make it look better"** — useless feedback. Say *what* is wrong and *why*.
- **No direction before prompting** — AI fills the vacuum with average. Give constraints.
- **Copying entire designs** — theft, and it doesn't fit your product. Combine ideas.
- **Skipping the foundation** — if you don't know who it's for, AI can't figure it out.
- **Passive inspiration browsing** — "ooh nice" and scrolling is useless. Ask *why* it works.

## Final Principle

AI collapses execution time from hours to minutes. The bottleneck shifts from "can I build this" to "should I build this" and "does this feel right." That is a harder problem, not an easier one. The best results will not come from better prompts. They will come from better taste.
