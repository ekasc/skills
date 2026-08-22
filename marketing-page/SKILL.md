---
name: marketing-page
description: "Design, build, and audit high-converting marketing pages and landing sites. Covers hero design, CTA psychology, social proof, section ordering, conversion optimization, accessibility, performance, and SEO. Use for startup landing pages, product pages, SaaS marketing, mobile app websites, or any conversion-focused page. Triggers: landing page, hero section, above the fold, conversion optimization, marketing site review, cta button, saas landing page."
---

# Marketing Page Design & Review

Design, build, and audit marketing pages that convert. This skill covers two modes:

- **Build mode** — Create a new landing page from scratch with proven formulas
- **Review mode** — Audit an existing marketing page for conversion, trust, accessibility, and quality

---

## Build Mode

Design a high-converting landing page. Use the sections below to construct each piece.

### Above-the-Fold Formula

Everything visible before scrolling must communicate value in 5 seconds.

```
┌─────────────────────────────────────────────────┐
│  [Logo]              [Nav]        [CTA Button]  │
│                                                 │
│   Headline (6-12 words)                         │
│   ─────────────────────────                     │
│   Subheadline (15-25 words)        [Hero Image] │
│                                    showing the  │
│   [Primary CTA Button]            OUTCOME, not  │
│   "Start Free Trial"              the product   │
│                                                 │
│   Social proof: "Trusted by 10,000+ teams"      │
│   [logo] [logo] [logo] [logo] [logo]            │
└─────────────────────────────────────────────────┘
```

#### The 5 Elements

| Element | Rule | Example |
|---------|------|---------|
| **Headline** | 6-12 words, states the outcome | "Ship docs in minutes, not days" |
| **Subheadline** | 15-25 words, expands on how | "AI-powered documentation that writes itself from your codebase." |
| **Hero image** | Shows the OUTCOME, not the product | Person looking satisfied at results, not a UI screenshot |
| **Primary CTA** | Action verb + value | "Start Free Trial" not "Submit" |
| **Social proof** | Logos, count, or micro-testimonial | "Trusted by 10,000+ teams at [logos]" |

### Headlines

| Formula | Example |
|---------|---------|
| [Outcome] without [pain] | "Beautiful docs without the design skills" |
| [Outcome] in [timeframe] | "Launch your site in 5 minutes" |
| The [better way] to [common task] | "The faster way to build APIs" |
| Stop [pain]. Start [outcome]. | "Stop guessing. Start knowing." |

### CTA Buttons

| Good CTAs | Bad CTAs |
|-----------|----------|
| "Start Free Trial" | "Submit" |
| "Get Started Free" | "Click Here" |
| "See It in Action" | "Learn More" (low commitment) |

**Formula:** Action verb + value/outcome + (optional: reduce risk)

**Design:** High contrast with background (most visible element), minimum 44px height, repeated after each major section.

### Proven Section Order

| Section | Purpose |
|---------|---------|
| 1. **Hero** | Core value, primary CTA |
| 2. **Social Proof** | Build trust (logos, numbers, badges) |
| 3. **Problem** | Create empathy with recognized pain |
| 4. **Solution/Features** | 3 key features with visuals |
| 5. **How It Works** | 3 steps: sign up, configure, benefit |
| 6. **Testimonials** | 2-3 specific customer quotes |
| 7. **Pricing** | Clear tiers, highlight recommended |
| 8. **FAQ** | Handle 5-7 common objections |
| 9. **Final CTA** | Repeat primary CTA with urgency |

### Form Design

- Every field reduces conversion ~11% — minimize to name + email
- Single-column layout, inline validation, specific error messages
- Submit button text = action ("Create Account" not "Submit")

### Mobile Optimization

- CTA button full width, sticky CTA on scroll
- Font minimum 16px, tap targets minimum 48x48px
- No horizontal scrolling, images responsive
- Design mobile-first, prioritize headline + CTA

### Page Speed Targets

| Metric | Target |
|--------|--------|
| Hero image | < 200 KB |
| Total page weight | < 2 MB |
| JavaScript | < 200 KB |
| LCP | < 2.5s |

---

## Review Mode

Audit an existing marketing page. Produce a **prioritized audit** with concrete fixes and testable acceptance criteria.

### Output Structure

1. **Summary**
2. **Assumptions**
3. **Funnel map**
4. **Top issues (P0/P1/P2)**
5. **Fix plan**
6. **Verification checklist**
7. **Optional experiments** (max 3)

### Severity Rubric

- **P0**: Blocks understanding or conversion, or fails accessibility basics (keyboard path broken, low contrast, CTA unreachable on mobile)
- **P1**: High friction or credibility loss (competing CTAs, unclear proof, confusing section order)
- **P2**: Polish and consistency (spacing drift, minor copy tightening, visual hierarchy)

### Procedure

1. **Run the 10-second test** — Can a visitor answer: What is this? Who is it for? What outcome? What next?
2. **Map the funnel** — Arrival → Comprehension → Evaluation → Risk reduction → Action → Confirmation
3. **Audit by category** in this order:
   - Message + CTA
   - Conversion mechanics
   - Trust + objections
   - Accessibility
   - Responsive layout + readability
   - Performance
   - SEO + share previews
   - Motion + media polish
4. **Validate edge cases** — Small phones, 200% zoom, long strings, slow network, reduced motion, keyboard-only path
5. **Write issues** — Each with evidence, user impact, concrete fix, and testable acceptance criteria

### Audit Checklists

#### Above-the-fold
- [ ] Headline communicates outcome + audience + differentiator
- [ ] One primary CTA visible without scrolling on mobile
- [ ] Supporting line explains "how it works" or "why trust"
- [ ] Visual demonstrates product (real screenshots preferred)
- [ ] No more than one secondary CTA above the fold

#### Trust & Objections
- [ ] Plain-language privacy stance near CTA path
- [ ] Pricing clarity (or clear free boundaries)
- [ ] Proof located near CTAs, not buried
- [ ] FAQ answers real objections (privacy, platform support, refunds)

#### Accessibility (P0 if broken)
- [ ] Keyboard-only navigation reaches all interactive controls
- [ ] Visible focus indicator on every interactive element
- [ ] Semantic HTML (proper headings, buttons, links, form labels)
- [ ] Images have meaningful alt text or are decorative
- [ ] Color is not the only signal for state or meaning
- [ ] Reduced motion preference respected
- [ ] Touch targets minimum 48x48px (mobile), 24x24px CSS px (pointer)

#### Performance
- [ ] Images optimized (modern formats, responsive sizes)
- [ ] Below-the-fold media lazy-loaded
- [ ] No layout shift (reserve space for images/embeds)
- [ ] Limited font weights, render-blocking avoided

#### SEO & Shareability
- [ ] Single H1, logical H2/H3 structure
- [ ] Title + meta description are specific
- [ ] Open Graph/Twitter preview looks correct
- [ ] Accessible link text (no "click here")

### Issue Format

```
**Severity:** P0 / P1 / P2
**Category:** Message / CTA / Layout / Accessibility / Performance / SEO / Trust / Motion
**Evidence:** What you observed
**Why it matters:** User impact
**Fix:** Concrete action
**Acceptance criteria:**
- [ ] Testable condition 1
- [ ] Testable condition 2
```

### Verification Checklist

- [ ] Mobile Safari: hero CTA reachable and tappable
- [ ] Android Chrome: primary path works
- [ ] Desktop: keyboard-only completes CTA path
- [ ] Screen reader smoke test: CTA path understandable
- [ ] 200% zoom: no overlap or unreachable controls
- [ ] Reduced motion: no critical info depends on motion
- [ ] Share preview verified (iMessage/Slack/X)

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| No clear headline | 6-12 words, outcome-focused |
| CTA says "Learn More" | Action verb + specific value |
| Hero is a product screenshot | Show the outcome, use lifestyle imagery |
| Multiple competing CTAs | One primary, one secondary max |
| No social proof | Add logos, counts, or testimonials |
| Too many form fields | Name + email maximum |
| Desktop-only design | Design mobile-first |
| No urgency in final CTA | "Start your free 14-day trial" |
| Generic headline that could fit any app | Specific to your outcome + audience |
| Hype language without evidence | Replace claims with proof |
