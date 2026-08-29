---
name: cdp-dom-debugging
description: Debug DOM geometry/layout bugs in running Electron or Chrome apps by measuring live state over the Chrome DevTools Protocol instead of theorizing from code. Covers the transformed-rects trap (getBoundingClientRect during CSS animations), React child-before-parent ref ordering, and a repeatable CDP measurement workflow. Use when a UI bug survives two or more plausible fixes, when scroll-to-element lands at the wrong position, when geometry differs between mount-time and settled measurements, or when you need runtime evidence from a renderer you cannot click.
---

# CDP DOM Debugging

## The rule

When a geometry bug survives two plausible fixes, **stop reading code and start measuring**.
Static analysis of effect timing and CSS cannot see what actually renders. Get runtime evidence
via CDP before attempting fix #3.

## Trap 1: getBoundingClientRect lies during animations/transforms

If any ancestor has an active CSS `transform` — entrance animations like
`scale(.98) → 1`, transitions, `will-change` — every rect distance is measured in
*transformed* space. Scroll math written from those rects lands systematically short
(e.g. true delta 12319px measured as 12076px under scale(0.98)), then the animation
completes, content expands back, and nothing re-corrects.

Symptoms: wrong on fresh mount, correct after unrelated re-renders (animation only
restarts on mount); failure magnitude varies run to run; arithmetic off by a constant
ratio ≈ the current scale factor.

Fix: compute scroll/clamp positions from **layout offsets**, which are pre-transform:

```js
// rows are direct children of the scroller; shared offsetParent cancels out
const relTop = el.offsetTop - container.offsetTop;
const relBottom = relTop + el.offsetHeight;
if (relTop < container.scrollTop) container.scrollTop = relTop;
else if (relBottom > container.scrollTop + container.clientHeight)
  container.scrollTop = relBottom - container.clientHeight;
```

Never mix: rect deltas are viewport-space (transformed), offsets are layout-space.

## Trap 2: React attaches refs bottom-up

A child's ref callback fires before its parent's ref is assigned. A row ref that reads
`containerRef.current` silently no-ops on fresh mounts (parent ref still null) but works
after sibling updates (container persists). Resolve the container from the element itself
(`el.parentElement` / `el.closest(...)`) inside child refs.

Also: a single piece of view state (`highlightIndex`) should have exactly one writer.
Multiple reset effects plus one placement effect race — order flips depending on whether
each is passive or layout, and the bug inverts when you change timing.

## Workflow: measure a live Electron renderer

1. Enable CDP on the dev app:
   - `electron . --remote-debugging-port=9222`, or gate it: env var → extra spawn arg.
   - If a watcher owns the app (esbuild restart-on-change), add the switch in code near
     app ready, touch the entry file, then remove it after debugging.
2. Find the page target:

```bash
curl -s http://127.0.0.1:9222/json/list   # grab webSocketDebuggerUrl
```

3. Drive and measure with [scripts/cdp.mjs](scripts/cdp.mjs):

```bash
# evaluate any expression in the live page
node scripts/cdp.mjs 9222 'document.querySelectorAll("button").length'

# open a port and keep sampling geometry over time (edit the script's main body)
node scripts/cdp.mjs 9222 --open 'button[title*="Switch model"]'
```

Programmatic UI driving needs no assistive access:

```js
// click via real bubbling events (React handles them)
[...document.querySelectorAll("button")].find(b => b.title.includes("Switch model")).click();
// synthetic keyboard through the app's own window listener
document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
```

4. Sample geometry over time — a single snapshot hides mid-flight states. Sample at
   50/100/200/500ms after triggering.

5. Diff mount-time vs settled state from *inside* the component: temporarily record
   heights/offsets into `window.__log` at the suspect call site, read the array via CDP,
   compare against a settled sample. Zero diff means the data never changed — suspect
   coordinate spaces (trap 1), not content.

## Checklist before claiming a geometry fix

- [ ] Reproduced the failure N times via CDP with a numeric assertion (`inView: false`)
- [ ] Same assertion passes N times after the fix
- [ ] Fix does not depend on animation timing, effect order, or HMR freshness
- [ ] Temporary instrumentation and debug switches removed
