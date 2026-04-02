# Revision Implementation Notes

## Scope

This implementation applies the approved revision brief and UI simplification pack to the shipped static site without adding tooling, dependencies, or a second content model.

Files changed:

- `index.html`
- `styles.css`
- `script.js`

## What Changed

### 1. The Boomer Button is now a page-level persistent control

- Moved the toggle out of the hero and into a dedicated page control container so it stays reachable through the full scroll (`index.html`).
- Fixed its placement at the page level on desktop and moved it to a bottom control position on small screens (`styles.css`).
- Preserved local mode persistence through the existing `localStorage` key (`script.js`).

### 2. The left rail is now one teaching module instead of three competing panels

- Pulled the four core concepts out of the sticky rail and into a flatter primer strip above the main reading system (`index.html`, `styles.css`).
- Wrapped the left-side introduction, context core, active teaching notes, and glossary into one bounded `teaching-module` container (`index.html`).
- Added an active-milestone tracker inside that module so the reader can see which era the context panel is currently describing (`index.html`, `script.js`).
- Constrained the module height against the viewport and allowed internal overflow only when needed, matching the laptop-fit rule from the simplification pack (`styles.css`).

### 3. Nested surfaces were reduced across the page

- Flattened the concept cards into a lighter primer treatment instead of a boxed grid (`styles.css`).
- Removed repeated inner-card treatment from the context notes and glossary so the outer teaching module carries the main surface weight (`styles.css`).
- Flattened timeline card anatomy by converting the objective into a highlighted statement, turning the explainer pair into lighter text sections, and quieting the footer tags (`styles.css`).
- Reduced visual chrome inside the context visual by replacing several boxed regions with divider-led sections (`styles.css`).

### 4. Page pacing was widened

- Increased the spacing between hero, primer, main layout, timeline cards, and closing frame (`styles.css`).
- Kept the editorial structure intact while allowing more vertical travel so the timeline reads with less compression (`styles.css`).

### 5. Mode switching now restores the reader's place

- Captures the active milestone and its viewport offset before the mode swap (`script.js`).
- Re-renders the shared UI from the same milestone data model, then restores the matching milestone to the previous viewport relationship after layout updates (`script.js`).
- Keeps active-card state, glossary state, and context-panel state aligned to the same `activeId` after the swap (`script.js`).

## Compatibility Notes

- The site remains plain HTML, CSS, and JavaScript and is still GitHub Pages friendly.
- The revision preserves the existing milestone array and dual-mode schema rather than introducing separate normal-mode and Boomer-mode markup branches.

## Verification Performed

- `node --check script.js`
- Python `html.parser` pass against `index.html`
- Manual repository inspection of the revised DOM, CSS layout rules, and mode-toggle state logic

I did not perform a live browser rendering audit in this turn because no local browser or headless renderer was available in the environment.
