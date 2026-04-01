# Experience Architecture Pack

## Concept

The site is a scroll documentary with one persistent object at its center: a "context core." This core visualizes the finite context window as a chamber with a fixed carrying capacity. Tokens, tools, prompts, and workflow artifacts orbit around it as the reader advances through time.

## Aesthetic Direction

### Normal Mode

- Tone: mission-control editorial
- Mood: technical, cinematic, legible
- Visual move: the context window stays pinned on screen while milestone objects fly in and out around it
- Palette: deep navy, oxidized teal, signal amber, warm ivory, coral red
- Texture: subtle grain, radial glows, technical diagrams, measured linework

### Boomer Mode

- Tone: 1950s control room meets illustrated field manual
- Mood: reassuring, tactile, simplified
- Visual move: the same core becomes a filing-and-switchboard console rather than a futuristic chamber
- Palette: cream, tobacco brown, diner red, turquoise enamel, faded ink blue
- Texture: paper fibers, halftone dots, print shadows, rounded chrome accents

## Layout

### Desktop

- Sticky left column for the context core, glossary chips, and the Boomer Button
- Scroll column on the right with large era cards
- A vertical year rail ties milestones together

### Mobile

- Context core becomes a sticky top panel
- Timeline cards stack underneath
- Motion simplifies to opacity, translate, and scale only

## Persistent Visual System

The context core never fully disappears. It updates per milestone:

- Token stream density changes
- Context window capacity ring grows over time
- New artifact types appear: prompts, retrieved docs, tool calls, agent instructions, memory files
- Overflow tokens remain outside the chamber to show what does not fit

## Milestone Card Structure

Each timeline card contains:

1. Era label
2. Milestone title
3. One-sentence "what changed"
4. Plain explanation
5. "What the model sees" summary
6. "Why the context window matters" summary
7. Small glossary tags for terms introduced in that card

## Motion System

- Scroll activates one milestone at a time
- Inactive cards fade and shift away
- Active milestone objects enter the context core region from different vectors
- Irrelevant objects drift outward and desaturate rather than vanishing instantly
- Reduced-motion mode disables flights and uses simple state swaps

## Content Model

Each milestone needs:

- `id`
- `year`
- `era`
- `title`
- `whatChanged`
- `objectLabel`
- `accent`
- `windowScale`
- `tokensInView`
- `defaultCopy`
- `boomerCopy`
- `glossary`

## Boomer Mode Copy Rules

- Shorter sentences
- Fewer subordinate clauses
- One analogy per concept
- Prefer concrete nouns over abstract language
- Translate modern workflow terms into a familiar metaphor, then restate the real term

Examples:

- Context window -> "the stack of papers on the desk right now"
- Tokens -> "little word pieces"
- Retrieval -> "pulling the right folder from the cabinet"
- Agents -> "special clerks with one job each"
- Hooks -> "automatic checklists that run before or after the main job"

## MVP Build Slice

The first release should include:

- One page
- Sticky context core
- Ten to twelve milestone cards
- Boomer Button
- Scroll-driven active state transitions
- Plain HTML, CSS, and JavaScript only
- GitHub Pages friendly file layout

## Quality Bar

- The page must feel authored, not templated
- Typography must carry personality even with local font stacks
- Motion should guide understanding, not compete with reading
- The same data source should drive both normal and Boomer copy modes
