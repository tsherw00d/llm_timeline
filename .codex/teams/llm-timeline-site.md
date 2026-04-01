---
goal: "Build a GitHub Pages site that explains LLM development as a scroll-driven visual timeline centered on tokens, context windows, and real-world workflow patterns"
domain: software
complexity: team
topology: sequential-pipeline
agent_count: 4
estimated_cost_tier: medium
---

## Roles
1. **Product Narrative Lead** — Defines the audience model, learning goals, milestone scope, and the plain-language narrative rules that keep every section tied back to tokens, context windows, and what the model actually sees.
2. **Learning Experience Architect** — Designs the information architecture, visual grammar, scroll choreography, and dual-mode content system including the 1950s "Boomer Button" theme and ELI5 copy transformation rules.
3. **Lead Engineer** — Implements the static site, animation system, milestone content model, theme switching, and GitHub Pages deployment path with performance and accessibility guardrails.
4. **QA and Clarity Reviewer** — Verifies technical accuracy, readability for a technical but mixed audience, accessibility, animation usability, and fidelity between normal mode and Boomer mode.

## Artifact Chain
1. Product Narrative Lead produces **Narrative Product Brief** (markdown: audience segments, learning objectives, milestone list, glossary requirements, content guardrails, acceptance criteria, out-of-scope list)
2. Learning Experience Architect receives the Narrative Product Brief and produces **Experience Architecture Pack** (markdown + wireframe notes: site map, timeline sections, persistent token/context visual system, animation map, dual-theme design tokens, Boomer mode copy rules)
3. Lead Engineer receives the Experience Architecture Pack and produces **MVP Implementation Slice** (code + content schema: static site, scroll-driven timeline, milestone cards, persistent token/context visuals, Boomer Button theme/content toggle, deployment config)
4. QA and Clarity Reviewer receives the MVP Implementation Slice plus Narrative Product Brief and produces **Verification Report** (markdown: factual spot-checks, readability checks, accessibility findings, animation/performance findings, acceptance criteria verification)

## Quality Gates
- **Narrative Product Brief** must be reviewed before architecture begins. Every planned milestone must explicitly answer: what tokens are in play, what fits in context, and what the model is being asked to do.
- **Experience Architecture Pack** must be reviewed before implementation begins. The token/context visual system must persist across the timeline rather than disappearing between sections.
- **MVP Implementation Slice** must demonstrate both modes. The Boomer Button must switch both presentation and copy, not just colors and fonts.
- **Verification Report** must confirm that jargon is defined in plain language, animations do not block comprehension, and each milestone preserves the same conceptual through-line from prompt to context to model behavior.

## Topology
**Selected:** Sequential pipeline
**Rationale:** The work has strong dependencies. The content model and educational framing must be defined before the interaction system can be designed, and the interaction system must be defined before implementation can be built coherently. This is a good fit for a plan → experience design → build → validate flow.
**Alternatives considered:** Parallel-independent was rejected because content accuracy, motion design, and implementation all depend on the same conceptual model of tokens and context windows. Centralized-coordinator was unnecessary because the dependency chain is stable rather than dynamic. Single-agent was possible for a rough prototype, but the combined pedagogy, interaction design, and implementation scope is broad enough that explicit role boundaries improve the plan quality.

## Anti-Patterns to Guard Against
- **Timeline Drift:** Adding milestones because they are famous rather than because they reinforce the core explanatory lens. Prevention: every section must tie back to tokens, context windows, and model objective.
- **Animation Over Substance:** Making the timeline visually impressive but cognitively harder to follow. Prevention: motion must reveal relationships, not merely decorate transitions.
- **Jargon Stack:** Explaining one advanced term with three other advanced terms. Prevention: every concept gets a plain-language definition first, then the technical refinement.
- **Boomer Mode as Skin-Deep:** Changing colors and typography without changing the mental model or vocabulary. Prevention: Boomer mode must rewrite explanations with era-matched analogies while preserving factual meaning.
- **Theme Divergence:** Normal mode and Boomer mode drifting into inconsistent claims. Prevention: both modes must derive from the same underlying milestone data and conceptual schema.
