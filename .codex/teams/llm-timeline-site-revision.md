---
goal: "Revise the shipped GitHub Pages LLM timeline so the left-side context visual reads cleanly on a MacBook viewport, the page gains more negative space, the Boomer Button stays available through scroll without losing place, and the UI is simplified without breaking the token/context teaching lens"
domain: software
complexity: team
topology: sequential-pipeline
agent_count: 4
estimated_cost_tier: medium
---

## Roles
1. **Product Narrative Lead** (`reuse: .codex/agents/product-narrative-lead.md`) — Reframes the revision goal, preserves the token/context/objective through-line, and writes the revision brief so simplification does not become content drift.
2. **Senior Product Designer** (`new: .codex/agents/senior-product-designer.md`) — Owns the MacBook-fit layout strategy, pacing model, surface reduction pass, and persistent Boomer Button interaction contract for this revision cycle.
3. **Lead Engineer** (`reuse: .codex/agents/lead-engineer.md`) — Translates the approved simplification pack into static HTML, CSS, and JavaScript changes without introducing build tooling or mode divergence.
4. **QA and Clarity Reviewer** (`reuse: .codex/agents/qa-and-clarity-reviewer.md`) — Verifies that the revision improves readability, spacing, sticky-toggle behavior, accessibility, and factual parity after implementation.

## Artifact Chain
1. Product Narrative Lead produces **Revision Brief** (markdown: preserved strengths, current-state tensions, revision goals, acceptance criteria, non-goals, approval gate)
2. Senior Product Designer receives the Revision Brief plus the shipped blueprint, architecture pack, verification report, and current implementation, then produces **UI Simplification Pack** (markdown: desktop layout strategy, MacBook viewport rules, component reduction matrix, pacing model, sticky-toggle behavior, implementation priorities)
3. Lead Engineer receives the UI Simplification Pack and produces **Revision Implementation Slice** (code + implementation notes: simplified layout, persistent Boomer Button behavior, responsive pacing adjustments, no-build static-site compatibility)
4. QA and Clarity Reviewer receives the Revision Implementation Slice plus Revision Brief and produces **Revision Verification Report** (markdown: acceptance verification, laptop viewport fit, sticky-toggle behavior, accessibility findings, parity findings, residual risks)

## Quality Gates
- **Revision Brief** must be reviewed before design simplification begins. It must explicitly preserve the shipped strengths that remain non-negotiable: one shared milestone model, one token/context lens, and factual parity between normal mode and Boomer mode.
- **UI Simplification Pack** must be reviewed before implementation begins. It must show how the left-side system fits on a MacBook-class viewport, where negative space is being added, which nested surfaces are being removed or merged, and how the Boomer Button remains continuously reachable without resetting the reader's place.
- **Revision Implementation Slice** must not begin until the user explicitly approves the planning artifacts from this revision cycle.
- **Revision Verification Report** must confirm that the simplified UI improves scanability and pacing without weakening the educational through-line or accessibility behavior.

## Topology
**Selected:** Sequential pipeline
**Rationale:** This revision is still dependency-heavy. The simplification pass cannot be treated as pure visual cleanup because it changes layout density, sticky behavior, and reading flow while preserving an existing narrative contract. The revision brief must define what stays fixed before the product designer removes or merges surfaces, and the engineer should not change the interaction system until those product decisions are approved.
**Alternatives considered:** Parallel-independent was rejected because narrative constraints, UI simplification, and sticky-toggle behavior all touch the same interaction contract. Centralized-coordinator was unnecessary because the handoff order is stable. Reusing the original learning-experience-architect as a primary revision role was rejected for this cycle because its design authority would materially overlap with the new senior product designer; the shipped `docs/experience-architecture-pack.md` remains the reference artifact instead.

## Anti-Patterns to Guard Against
- **Compaction by Panic:** Shrinking the left-side system until it technically fits but stops teaching. Prevention: optimize for one readable sticky teaching object, not the smallest possible object.
- **Simplification as Removal:** Deleting explanatory material without replacing it with a clearer hierarchy. Prevention: every removed box must have an explicit destination or reason for deletion.
- **Sticky Control Drift:** Keeping the Boomer Button visually styled but functionally tied to the hero block. Prevention: specify a page-level persistent control contract before implementation.
- **Box-in-Box Relapse:** Preserving a panel, then re-wrapping its children in more panels and chips until density returns. Prevention: enforce one dominant container per region and use typography before borders.
- **Scroll Pace Compression:** Trying to fit too much content above the fold and recreating the current cramped feeling. Prevention: accept more vertical travel in exchange for calmer reading intervals.
- **Mode-Parity Breakage:** Simplifying one mode faster than the other. Prevention: all structural decisions must apply to both normal and Boomer mode from the same milestone model.
