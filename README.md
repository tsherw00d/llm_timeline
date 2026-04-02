# LLM Timeline

Static GitHub Pages site explaining LLM milestones through one persistent lens: tokens, context windows, and what the model actually sees.

## Files

- `index.html` — page structure
- `styles.css` — visual system, motion, and boomer theme
- `script.js` — milestone data, scroll syncing, and dual-copy mode
- `docs/narrative-product-brief.md` — content brief
- `docs/experience-architecture-pack.md` — interaction and design brief
- `docs/verification-report.md` — QA verification against the brief, architecture, and implementation

## Forge Artifacts

- `.codex/teams/llm-timeline-site.md` — approved team blueprint
- `.codex/agents/` — project-specific Forge agent definitions for the approved team roles
- `docs/verification-report.md` — QA review and release recommendation

## Implementation Notes

- `script.js` holds the shared milestone data model and the matching visual-state model used by both normal mode and Boomer mode.
- `index.html` includes a static first-pass rendering so the page still reads in document order if JavaScript does not execute; `script.js` rehydrates that markup into the scroll-synced experience on load.
- The site stays GitHub Pages friendly: plain `index.html`, `styles.css`, `script.js`, no bundler, no npm step, and `.nojekyll` at the repo root.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose your main branch and `/ (root)`.
5. Save.

The `.nojekyll` file is included so GitHub Pages serves the static files directly.
