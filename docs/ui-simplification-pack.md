# UI Simplification Pack

This pack translates the revision brief into a product-design handoff for the next implementation pass. It assumes the current site already works and remains conceptually sound. The job here is to make it calmer, clearer, and more durable on a MacBook-class laptop viewport.

## Design Intent

Shift the interface from "rich explanatory dashboard" toward "calm editorial instrument." The page should still feel authored, but it should stop asking the reader to parse several equally loud containers at once. The left side should become one readable companion system. The timeline should gain more pause between ideas. The toggle should feel permanently available and safe to use mid-scroll.

## Primary Product Decisions

### 1. Make the left side a single sticky teaching module

The left column should read as one anchored object with internal hierarchy, not as three separate products stacked vertically. The reader should be able to understand the active state at a glance:

- top: compact status and orientation
- middle: the context chamber visual
- bottom: the active explanation in plain language

Secondary reference material should no longer live as a full always-open block below the main object unless it earns that weight.

### 2. Move passive reference content out of the always-on path

The concept primer and glossary are useful, but they currently occupy permanent boxed real estate. In the revision:

- the four core concepts should compress into a lighter-weight intro treatment near the hero or into a flatter inline reference strip
- active glossary terms should be tied more directly to the current milestone, not presented as a large standing panel at all times
- only the content needed for the active teaching moment should stay visually prominent

### 3. Reduce nested surfaces before changing aesthetics

The next pass should not solve density by swapping one decorative style for another. It should remove structural layers:

- fewer bordered sub-panels inside already bordered regions
- fewer boxed explainer blocks inside timeline cards
- fewer chip clusters presented as primary structure
- more hierarchy expressed through spacing, headings, alignment, and type contrast

### 4. Pace the story with more air

The current page is competent but compact. The revision should introduce deliberate breathing room:

- more space below the hero before the full timeline rhythm begins
- larger intervals between milestone cards
- calmer internal spacing within cards
- more visual rest around the closing frame

Longer scroll is acceptable if the page becomes easier to absorb.

## MacBook Viewport Rules

The MacBook-class laptop viewport is the primary desktop target for this revision. The design should satisfy these rules:

- the sticky left module must fit as one legible object without forcing the user to mentally stitch together multiple stacked panels
- the timeline column must still show a meaningful portion of the active card beside that module
- the sticky module may use internal prioritization or internal scrolling for secondary material, but its primary teaching state must remain visible without clipping
- the layout should feel intentionally composed in the laptop middle band, not merely tolerated until the single-column breakpoint

## Layout Model

### Hero

Keep the hero short and forceful. It should establish the thesis and expose the mode toggle, but it should not consume the vertical budget needed by the first reading state.

Recommended changes:

- reduce visual chrome around hero actions
- tighten the hero to thesis, lede, and toggle
- create a stronger transition gap between hero and the main reading system

### Sticky Context Module

Recompose the current left rail into one primary module:

- header row: small status labels such as window scale and token load
- main chamber: the persistent context visual
- explanation stack: the current objective plus the two short teaching statements
- optional secondary layer: collapsible or lower-emphasis glossary support

The module should not contain three separate full-strength card groups before the reader reaches the timeline.

### Timeline Cards

Flatten the card anatomy:

- keep era, title, what changed, body, and teaching lines
- reduce inset card count inside each milestone
- treat the objective as a highlighted statement, not necessarily a fully boxed sub-card
- treat the two explainers as clean text blocks or a lighter paired layout, not as equally heavy nested cards
- keep tags supportive, not dominant

### Closing Frame

Preserve the closing argument, but let it exhale. The closing frame should feel like a conclusion, not another dense stack of panels at the same weight as the timeline body.

## Surface Reduction Matrix

| Current region | Revision action | Reason |
| --- | --- | --- |
| Hero action box | Flatten | Keep the toggle prominent without letting the hero feel like a second control panel |
| Concept grid | Merge or demote | The concepts are foundational, but they do not need a permanent full-strength boxed grid once the story starts |
| Glossary panel | Demote and contextualize | Glossary content should support the active milestone instead of competing with the main visual system |
| Context core outer shell | Keep | This remains the main teaching object |
| Flow-lane inner boxes inside the core | Flatten where possible | Too many inner containers make the visual feel smaller and busier |
| Timeline objective block | Simplify | Preserve emphasis while reducing sub-card weight |
| Timeline explainer cards | Flatten | Typography and spacing can separate them without another layer of boxed chrome |
| Tag clusters | Quiet down | Tags should aid scanning, not behave like a second focal point |

## Pacing and Spacing Rules

1. One region should carry the strongest visual emphasis at a time.
2. Every major section should gain more top and bottom space than it has now.
3. Cards should have clearer vertical intervals so chronology feels paced, not stacked.
4. Dense micro-elements should be reduced before increasing overall visual decoration.
5. If a section still feels busy after flattening, remove another container before shrinking type or reducing whitespace.

## Boomer Button Contract

The Boomer Button becomes a persistent page control.

Requirements:

- it remains reachable throughout scrolling, not only while the hero is in play
- toggling preserves the reader's current place in the narrative
- toggling preserves the current active milestone rather than resetting the experience
- both modes update in place from the same data model
- the control remains obvious but should not overpower the reading path

Implementation intent for engineering:

- capture the current active milestone and the reader's anchor before mode swap
- apply the mode change
- restore the same milestone and viewport relationship after the DOM updates
- persist the chosen mode locally without changing chronology or state identity

## Simplification Heuristics

Use these tests before approving any revised screen:

- If two adjacent boxes serve one idea, merge them.
- If a border can be replaced by spacing and a heading, remove the border.
- If the glossary can wait until the active card changes, make it contextual.
- If the sticky module cannot be summarized in one sentence, it is still too fragmented.
- If the toggle feels attached to a section instead of the page, reposition it.
- If the page got shorter but not calmer, the wrong things were removed.

## Responsive and Accessibility Notes

- On narrower layouts, the sticky module can collapse into document flow, but the Boomer Button should still remain persistent at the page level.
- Reduced-motion behavior should remain state-based and immediate.
- Simplification must preserve keyboard access, focus visibility, ARIA state, and dual-mode parity.
- The revision should not rely on hidden complexity or hover-only meaning to replace removed boxes.

## Implementation Priority Order

1. Recompose the page-level layout and persistent toggle placement.
2. Simplify the sticky left module so it fits the laptop target.
3. Flatten timeline card anatomy and increase pacing.
4. Re-home glossary and concept-support content into lower-emphasis contextual placements.
5. Tune both modes together so simplification does not drift.

## Approval Checklist

- The revised layout is visibly calmer on a MacBook-class viewport.
- The left-side system reads as one sticky teaching object.
- The page has more negative space and slower pacing.
- The Boomer Button remains available throughout the scroll.
- Toggling modes preserves place and active milestone.
- Nested boxes are materially reduced across both the sticky module and timeline cards.
- The token/context/objective through-line remains intact.
