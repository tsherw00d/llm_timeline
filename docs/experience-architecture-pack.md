# Experience Architecture Pack

Approved handoff artifact for engineering and QA. This pack preserves the current site direction: an authored, scroll-driven timeline with one persistent explanatory lens centered on tokens, context windows, and what the model can actually see.

## Concept

The site is a scroll documentary with one persistent object at its center: the context core. It visualizes a finite working window that never disappears while the reader moves through the timeline. Tokens, prompts, retrieved evidence, tools, and workflow artifacts orbit around that core so the reader always sees the same explanatory relationship: what is in context, what does not fit, and what the model is being asked to do.

## Information Architecture

1. Hero frame: a short thesis, a plain-language lede, and the Boomer Button.
2. Persistent side panel: concept cards, the context core visual, and the active glossary.
3. Timeline rail: milestone cards in chronological order, with one active card at a time.
4. Closing frame: the core argument that modern LLM work is context engineering in public.

Desktop keeps the side panel sticky and the timeline scrollable. On mobile, the same pieces stack into a single column so the context panel leads into the timeline instead of floating beside it. The site direction stays the same; only the layout compresses.

## Aesthetic Direction

### Normal Mode

- Tone: mission-control editorial
- Mood: technical, cinematic, legible
- Visual language: dark glass panels, measured linework, orbital motion, and a pinned context window
- Palette: deep navy, oxidized teal, signal amber, warm ivory, coral red

### Boomer Mode

- Tone: 1950s control room meets illustrated field manual
- Mood: reassuring, tactile, simplified
- Visual language: filing cabinet, switchboard, print-ephemera, and desk-space metaphors
- Palette: cream, tobacco brown, diner red, turquoise enamel, faded ink blue

The site should feel authored, not templated. The typography can use local font stacks, but the hierarchy must still read as deliberate: emphatic headline, concise labels, and readable body copy.

## Persistent Visual System

The context core is the persistent visual anchor. It updates per milestone, but its meaning stays constant.

- The window ring shows how much context is available and how tightly the current milestone uses it.
- Incoming chips show the token groups currently “earning space” in the window.
- The inner rack shows the current mix of task, instruction, memory, evidence, and tool tokens.
- Overflow chips show what does not fit, what is stale, or what is less relevant than the current focus.
- The current milestone accent color should carry through the card, the core, and the active state.

This system is not decorative. It is the teaching device that keeps the token/context/objective lens visible across the full scroll.

## Milestone Card Spec

Every milestone card uses the same scan pattern so readers can compare eras without relearning the interface.

Required data fields:

- `id`
- `year`
- `era`
- `title`
- `whatChanged`
- `body`
- `sees`
- `window`
- `glossary`
- `accent`
- `windowScale`
- `tokenLoad`
- `windowLabel`
- `overflow`
- `orbitObjects`
- `boomerBody`
- `boomerSees`
- `boomerWindow`

Required card slots:

1. Era line: `year` plus `era`
2. Title
3. One-sentence `whatChanged`
4. Plain explanation paragraph
5. Explainer A: `What the model sees` or `What the machine has on the desk`
6. Explainer B: `Why the context window matters` or `Why the desk space matters`
7. Footer tags: glossary chips for the milestone terms

The persistent pattern must be preserved. Every card must answer the same two explainer questions plus the milestone change statement, so the reader can scan quickly and compare milestones consistently.

## Motion System

Desktop motion is scroll-synced. The active card rises and sharpens, the context core updates, orbit objects enter from offset positions, and the incoming chips swap in with a short fade. Inactive cards remain visible but subdued so the reader can still see the surrounding timeline.

Mobile motion must be simpler. The layout compresses into one column, the context panel stops acting like a separate floating column, and motion should rely on small opacity, translate, and scale shifts only. Nothing on mobile should require wide-screen choreography to be understood.

Reduced-motion mode keeps the same content and the same active-state logic, but removes travel and delay. Items should swap instantly, orbit movement should disappear, and emphasis should come from state, color, and hierarchy rather than animation timing.

## Dual-Mode Theming Rules

Normal mode and Boomer mode are one data system with two registers. The facts, dates, and milestone order do not change.

- Normal mode is the default editorial register.
- Boomer mode changes both presentation and wording.
- Theme changes may alter palette, typography, surface texture, and label copy, but they must not change meaning.
- Semantic roles should stay consistent across modes: task, instruction, memory, evidence, and tool can shift in value and texture, but they should not become different categories.
- The Boomer Button must switch the mode persistently for the current experience, not just repaint the page.

### Theme Token Table

| Role | Normal mode | Boomer mode | What changes |
| --- | --- | --- | --- |
| Background | deep navy with teal and amber glow | cream paper with warmer shadows | mood and material language |
| Surface | translucent glass panels | paper-stock panels | texture and contrast treatment |
| Headline voice | condensed editorial | serif field-manual voice | typographic register |
| Body voice | clear technical prose | shorter ELI5 prose | sentence length and analogy style |
| Labels | mono labels and rail markers | office memo labels | phrasing and atmosphere |
| Accent system | amber, teal, coral, violet, blue | tobacco red, turquoise, faded blue, brown | value shift, not meaning shift |

## Boomer Mode Copy Rules

- Use shorter sentences and fewer subordinate clauses.
- Translate the modern term into a familiar object first, then restate the real term.
- Keep one analogy family per card so the register does not drift.
- Use the approved analogy families only: index cards, Rolodexes, switchboards, filing cabinets, assembly lines, radio operators, instruction manuals, and newsroom copy desks.
- Keep the facts identical to normal mode. Boomer mode is a teaching register, not a different story.
- Avoid parody. The voice should be plainspoken, not gimmicky.

## Compact Interaction State Map

| State | Cards | Core visual | Glossary | Copy mode |
| --- | --- | --- | --- | --- |
| Default | inactive cards sit lower and muted | context ring and token rack show the current milestone | glossary shows active milestone terms | normal or Boomer, depending on toggle |
| Active | the centered card is highlighted and readable first | window scale, pressure, objective, and orbit objects update | active milestone terms are re-rendered | same data, same facts |
| Reduced-motion | no travel-heavy transitions; state swaps are immediate | orbit travel disappears and emphasis comes from hierarchy | same glossary content, simpler presentation | same data, same facts |
| Boomer mode | card copy rewrites into simpler office language | the core becomes a filing-and-switchboard console | glossary definitions shift to desk-space metaphors | visual and verbal register both change |

## MVP Build Slice

The first release should remain static-site friendly and dependency-free.

- One page
- Hero, persistent context panel, timeline, and closing frame
- Ten to twelve milestone cards
- Boomer Button with persistent mode switching
- Scroll-driven active state transitions
- Plain HTML, CSS, and JavaScript only
- GitHub Pages friendly file layout

## Quality Bar

- The page must feel like an editorial object with a clear point of view, not a dashboard.
- The token/context thread must stay legible even if motion is ignored.
- The Boomer Button must change both copy and visual language.
- Every milestone card must still make sense when read alone.
- No milestone title, heading, or glossary term should introduce unexplained jargon.
- The implementation direction should remain aligned with the current codebase: sticky context reference on desktop, stacked single-column compression on mobile, persistent mode toggle, and one shared milestone data model driving both presentations.
