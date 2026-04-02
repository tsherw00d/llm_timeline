# Revision Brief

This document starts a revision cycle for the shipped LLM timeline site. It does not replace the original blueprint. It narrows the next pass to a product-design and layout revision that preserves the educational model already validated in the first release.

## Revision Goal

Revise the current one-page GitHub Pages experience so that:

- the left-side token/context system fits and reads well on a MacBook-class laptop viewport
- the page has more negative space and calmer pacing, even if that increases scroll length
- the Boomer Button remains available throughout the reading flow and preserves the reader's current place when toggled
- the UI receives a full simplification pass, with special attention to reducing box-in-box nesting

## Shipped Strengths to Preserve

- One shared milestone model still drives both normal mode and Boomer mode.
- The page still teaches one explanatory lens: tokens in play, context pressure, and current model objective.
- The site remains static, dependency-light, and GitHub Pages friendly.
- The Boomer mode continues to change both wording and presentation, not just styling.
- The timeline still reads as an authored editorial walkthrough rather than a generic dashboard.

## Current-State Tensions

### 1. The left column is teaching too many things at once

The current desktop composition stacks a concept grid, a large context core, and an always-open glossary in one sticky column. On a MacBook-class viewport this creates a compressed reading object rather than one clear teaching object. The user sees several bordered regions competing for attention before the active timeline card has enough room to breathe.

### 2. The page is visually dense from the first screen onward

The current system uses repeated borders, panels, chips, and inset cards across almost every region. The result is coherent, but the page carries nearly the same emphasis level everywhere. That limits pacing and makes the timeline feel busier than it needs to.

### 3. The Boomer Button behaves like a hero accessory, not a page control

The toggle is visually strong, but its sticky behavior is scoped to the hero area rather than the full page reading experience. In a revision pass, the reader should be able to switch modes at any point in the scroll without hunting for the control or losing the active milestone.

### 4. Too much structure is expressed through containers instead of hierarchy

The current interface often solves separation with another box: panel inside panel, explainer inside card, card inside rail, chip inside panel. That works mechanically, but it makes the UI feel more dashboard-like than editorial. The next pass should simplify by clarifying hierarchy, not by adding alternate ornament.

## Revision Principles

1. Preserve the teaching model, simplify the shell.
2. Design for the MacBook middle band first, then scale wider and narrower from that center.
3. Prefer one strong surface per region over multiple equal-weight surfaces.
4. Use spacing, typography, and sequence before adding borders, panels, and chips.
5. Treat the Boomer Button as persistent product infrastructure, not a decorative toggle.
6. Accept more scroll if it produces calmer reading and clearer comparisons.

## Success Criteria

- A reader can understand the left-side system as one coherent sticky module on a MacBook-class viewport.
- The hero, sticky module, timeline cards, and closing frame each have distinct breathing room rather than one continuous block of similar density.
- The Boomer Button stays reachable throughout the page and does not reset the active milestone or scroll position when toggled.
- The number of nested bordered surfaces is materially reduced without removing required teaching content.
- The page still preserves the token/context/objective lens for every milestone.
- Normal mode and Boomer mode remain structurally aligned and factually identical.

## Non-Goals

- Rewriting the milestone chronology or replacing the original narrative lens
- Introducing build tooling, frameworks, or runtime dependencies
- Turning the experience into a multi-page app, dashboard, or tutorial product
- Adding new feature scope unrelated to readability, pacing, simplification, or toggle persistence
- Reopening historical claims already accepted unless the revision explicitly depends on them

## Artifact Contract for This Revision Cycle

The planning pass produces two documents before any implementation:

1. `docs/revision-brief.md`
2. `docs/ui-simplification-pack.md`

The engineer does not begin code changes until those artifacts are approved.

## Approval Gate

Stop after the revision blueprint, the new product-design role definition, this revision brief, and the UI simplification pack. Wait for explicit approval before implementation work begins.
