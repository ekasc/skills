# Component Anatomy

Premium component patterns that elevate interfaces beyond default styling.

## Double-Bezel / Nested Architecture

Never place a premium card, image, or container flatly on the background. They should look like physical, machined hardware using nested enclosures.

- **Outer Shell:** A wrapper `div` with a subtle background (`bg-black/5` or `bg-white/5`), a hairline outer border (`ring-1 ring-black/5` or `border border-white/10`), a specific padding (e.g. `p-1.5` or `p-2`), and a large outer radius (`rounded-[2rem]`).
- **Inner Core:** The actual content container inside the shell. It has its own distinct background color, its own inner highlight (`shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]`), and a mathematically calculated smaller radius (e.g. `rounded-[calc(2rem-0.375rem)]`) for concentric curves.

Use for: hero cards, feature panels, product showcases, testimonial blocks. Not for every card — apply where elevation communicates premium quality.

## Button-in-Button / Island Trailing Icon

Primary interactive buttons with an arrow or icon should never place the icon naked next to the text.

- **Structure:** Fully rounded pill (`rounded-full`) with generous padding (`px-6 py-3`).
- **Trailing icon:** The icon sits inside its own distinct circular wrapper (`w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center`) placed flush with the button's right inner padding.
- **Interaction:** On hover, the inner circle translates diagonally (`group-hover:translate-x-1 group-hover:-translate-y-[1px]`) and scales up slightly (`scale-105`), creating internal kinetic tension. Active state: `active:scale-[0.98]` for physical pressing feedback.

Use for: primary CTAs, "Get started" buttons, "Learn more" actions. Reserve for the single most important CTA per section.

## Ghost Card Fallback

When a card needs presence but a border + shadow would be too heavy:

- Omit the border entirely.
- Use only background color offset from the parent surface.
- Or use only spacing (padding + gap) to create the card region.
- Add an inner highlight when the card overlays a photo or gradient.

Cards exist only when elevation communicates real hierarchy. Otherwise group with `border-t`, `divide-y`, or negative space.

## Spotlight Borders (Premium)

Card borders that illuminate dynamically under the cursor:

```css
.card {
  position: relative;
}
.card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.15), transparent 40%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
```

Track `--mouse-x` and `--mouse-y` via `onPointerMove` using Motion's `useMotionValue` (not `useState`). Apply only when design variance > 5 and motion intensity > 4.

## Shape Consistency Lock

Pick ONE corner-radius scale for the page and stick to it:

- **All-sharp:** radius 0 (brutalism, data-heavy, industrial)
- **All-soft:** radius 12-16px (editorial, premium consumer, agency)
- **All-pill:** full radius for interactive only (buttons, tags), sharp or soft for containers

Mixed systems are allowed only with a documented rule (e.g. "buttons are full-pill, cards are 16px, inputs are 8px") followed everywhere. Round buttons in a square layout is broken design.
