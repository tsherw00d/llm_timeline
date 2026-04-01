# Narrative Product Brief

## Goal

Build a static GitHub Pages website that teaches the development of practical LLM usage through a visual timeline. The main explanatory lens is constant: an LLM only sees tokens placed inside a finite context window, and every new workflow pattern changes either what gets placed into that window, how those tokens are structured, or what task the model is being asked to perform.

## Audience

- Technical professionals who are curious about LLMs but are not necessarily software engineers
- Engineers who understand the tools but want a cleaner mental model of how the workflow evolved
- Managers, operators, designers, and product people who hear terms like MCP, agents, hooks, or reasoning tokens and want a plain-language explanation

## Learning Objectives

By the end of the page, a reader should understand:

1. What a token is and why token count is the unit that really constrains LLM work
2. What a context window is and why it determines what the model can actively consider at one time
3. Why cutoff dates matter even when a model sounds fluent and current
4. Why parameters and controls change behavior without changing what the model already knows
5. How prompt engineering, reasoning, tools, and agent workflows mostly expand or structure the model's input rather than granting magic understanding
6. Why modern workflows are increasingly about context management, task decomposition, and tool orchestration

## Core Explanatory Rule

Every milestone must answer these three questions:

1. What tokens are being put in front of the model?
2. How much of that can fit into the current context window?
3. What is the model trying to do with those tokens right now?

If a milestone cannot be explained through those questions, it does not belong on the page.

## Milestone Scope

### Opening Frame

- ChatGPT 3.5 as the launch milestone
- Token basics
- Context window basics
- Knowledge cutoff basics
- Parameters and controllable behavior

### Timeline Milestones

- Prompt engineering
- Longer context windows
- Retrieval and tool use as practical context extension
- Reasoning and reasoning tokens
- CLI tools
- AGENTS.md
- MCPs
- Skills
- Plugins
- Hooks
- Subagents

### Closing Frame

- Modern LLM work is mostly context engineering
- Better workflows do not remove token limits; they manage them more deliberately
- The model remains a next-token generator even when wrapped in sophisticated orchestration

## Content Guardrails

- Plain language first, then technical refinement
- No unexplained jargon in headings
- Every comparison should use a concrete analogy
- Avoid vendor-war framing; describe workflow evolution, not marketing claims
- Do not imply that tools make the model omniscient
- Distinguish between "inside the model weights" and "inside the current context"

## Boomer Mode Requirements

When the Boomer Button is active:

- Visual design shifts to a 1950s control-room and print-ephemera language
- Copy switches to an ELI5 layer with simpler sentence structure
- Analogies should feel era-appropriate without becoming parody
- The facts must remain aligned with the normal mode

Approved analogy families:

- Index cards
- Rolodexes
- switchboards
- filing cabinets
- assembly lines
- radio operators
- instruction manuals
- newsroom copy desks

## Acceptance Criteria

- A reader can scroll from ChatGPT 3.5 to modern agent workflows without losing the token/context thread
- The token/context visual system remains visible for most of the experience
- Each milestone has a date or era label plus a one-sentence "what changed" statement
- The Boomer Button updates both the design system and the wording
- The site works without a build step and can be published on GitHub Pages
