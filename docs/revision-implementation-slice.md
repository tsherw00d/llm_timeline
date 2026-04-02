# Revision Implementation Slice

## Scope

Implements the approved revision from `docs/revision-brief.md` and `docs/ui-simplification-pack.md` without changing the shipped milestone model, chronology, or static-site deployment model.

## What Changed

### 1. Page-level persistent Boomer Button

- Moved the Boomer Button out of the hero and into a persistent page control wrapper.
- Kept the existing single-mode state model and `localStorage` persistence.
- Added viewport-anchor restoration during mode swaps so the active milestone and reading position stay stable through re-render.

### 2. One sticky teaching module on desktop

- Collapsed the left rail into one `teaching-module` instead of separate intro, concept, context, and glossary surfaces.
- Added an active milestone tracker inside the module header.
- Kept the context core as the dominant teaching object while demoting the glossary to a lower-emphasis support section.

### 3. Concept and glossary demotion

- Moved the four core concepts into a flatter `concept-strip` above the main reading system.
- Flattened glossary chips and note cards so hierarchy comes from spacing and typography rather than stacked panels.

### 4. Timeline pacing and surface reduction

- Increased breathing room between the hero, main layout, timeline cards, and closing frame.
- Reduced box-in-box anatomy inside timeline cards by turning the objective into a highlighted statement and the explainer blocks into lighter sections.
- Quieted tags and secondary surfaces so the timeline reads more like an editorial walkthrough than a dashboard.

## Files Changed

- `index.html`
- `styles.css`
- `script.js`

## Implementation Notes

- No new dependencies or build tooling were introduced.
- Normal mode and Boomer mode still render from one shared milestone model.
- The revision intentionally accepts more vertical scroll in exchange for calmer pacing and a cleaner laptop composition.

## Local Verification Performed

- `node --check script.js`
- Parsed `index.html` with Python's standard `html.parser`
- Source review against the approved revision brief and UI simplification pack

## Follow-up Risk

- The sticky module now relies on internal height budgeting on shorter laptop viewports, so a live browser spot-check remains useful even though the source-level contract is satisfied.
