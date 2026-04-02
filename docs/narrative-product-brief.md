# Narrative Product Brief

Approved handoff artifact for the sequential Forge pipeline. This brief defines the narrative scope that downstream roles must preserve while they design, implement, and verify the site.

## Goal

Build a static GitHub Pages site that explains LLM development as a scroll-driven visual timeline centered on tokens, context windows, and real-world workflow patterns. The page should keep one explanatory lens in view from start to finish: an LLM only works with the tokens placed inside its current context window, and every workflow change matters only insofar as it changes what gets into that window, how it is organized, or what job the model is being asked to do.

## Audience Model

- Primary audience: technically curious readers who understand the general idea of AI tools but do not need implementation-level detail.
- Secondary audience: engineers and product people who know some LLM terms already and want a cleaner mental model of how workflows evolved.
- Tertiary audience: managers, designers, and operators who hear terms like MCP, agents, hooks, or reasoning tokens and need plain-language explanations.
- Reader assumption: the audience can follow a scroll-based narrative if each section answers the same three questions in simple language.

## Learning Objectives

By the end of the page, a reader should be able to:

1. Explain what a token is and why token count is the practical unit that constrains LLM work.
2. Explain what a context window is and why it determines what the model can actively consider at one time.
3. Explain why cutoff dates still matter even when a model sounds fluent and current.
4. Explain why prompts, parameters, tools, and workflows change behavior without changing the model's underlying knowledge.
5. Describe how retrieval, reasoning, agents, and orchestration mostly expand, structure, or route context rather than granting magic understanding.
6. Recognize that modern LLM work is mostly context engineering, task decomposition, and evidence management.

## Core Explanatory Rule

Every milestone must answer these three questions:

1. What tokens are being put in front of the model?
2. How much of that can fit into the current context window?
3. What is the model trying to do with those tokens right now?

If a milestone cannot be explained through those questions, it does not belong on the page.

## Milestone Scope

The page should follow the implementation direction already present in the site and keep the timeline focused on workflow shifts, not vendor scoring or exhaustive model history.

- Opening frame: ChatGPT 3.5, token basics, context window basics, cutoff basics, and parameters.
- Timeline milestones: prompt engineering, longer context windows, retrieval and tool use, reasoning and reasoning tokens, CLI tools, AGENTS.md, MCPs, skills and plugins, hooks, and subagents.
- Closing frame: the argument that modern LLM work is context engineering in public, and that the core mechanism is still next-token generation inside a finite working set.

## Content Guardrails

- Plain language first, then technical refinement.
- No unexplained jargon in headings or milestone titles.
- Every comparison should use a concrete analogy family, not a vague metaphor.
- Avoid vendor-war framing; describe workflow evolution, not product marketing.
- Do not imply that tools make the model omniscient, always current, or free of token limits.
- Distinguish between what is inside the model weights and what is inside the current context.
- Keep normal mode and Boomer mode factually identical underneath the copy and visual change.

## Boomer Mode Requirements

When the Boomer Button is active:

- Visual design shifts to a 1950s control-room and print-ephemera language.
- Copy switches to an ELI5 layer with shorter sentences and simpler structure.
- Analogies should feel era-appropriate without becoming parody.
- The factual claims and milestone sequence must remain aligned with normal mode.
- The mode change must affect both presentation and wording, not just colors or fonts.

Approved analogy families:

- Index cards
- Rolodexes
- Switchboards
- Filing cabinets
- Assembly lines
- Radio operators
- Instruction manuals
- Newsroom copy desks

## Acceptance Criteria

- A reader can scroll from ChatGPT 3.5 to modern agent workflows without losing the token/context thread.
- The token/context visual system remains visible for most of the experience.
- Each milestone has a date or era label plus a one-sentence "what changed" statement.
- The Boomer Button changes both the design system and the wording.
- The site works without a build step and can be published on GitHub Pages.
- Every milestone card can be checked against the milestone matrix in Appendix A.
- Every nontrivial term used in headings or milestone copy appears in Appendix B or is clearly defined in-page.

## Out of Scope

- Exhaustive model-by-model benchmark history or vendor feature matrices.
- Deep implementation tutorials for RAG stacks, agent runtimes, prompt frameworks, or deployment pipelines.
- Dark-pattern motion, autoplay audio, or decorative effects that distract from comprehension.
- User accounts, analytics dashboards, or any runtime dependency that breaks GitHub Pages simplicity.
- Claims that LLM tools remove token limits, eliminate hallucinations, or make the model fully up to date by default.
- New explanatory axes that dilute the token/context/objective lens.

## Appendix A: Milestone Scope Matrix

| Milestone | Date or Era | What changed | Tokens in play | Context impact | Model objective |
| --- | --- | --- | --- | --- | --- |
| Opening frame: ChatGPT 3.5 and core concepts | 2022.11 | A chat box made a general-purpose LLM feel usable to non-experts. | Chat transcript, system framing, user prompt, token basics. | Small windows made forgetting and compression visible. | Hold the conversation together and answer the latest request. |
| Prompt engineering | 2023 | Users learned that structured prompts often mattered more than mystique. | Role text, examples, constraints, formatting cues. | Better structure uses scarce window space more efficiently. | Infer the job from clearer instructions and output rules. |
| Longer context windows | 2023.11 | Much larger windows allowed longer conversations and larger documents. | Conversation history, large docs, extra rules, current task. | More relevant material can stay active at once, but clutter still hurts. | Balance longer history, larger documents, and richer instructions in one pass. |
| Retrieval and tool use | 2023-2024 | Teams began pulling fresh evidence into context on purpose. | Retrieved docs, source labels, recent history, user task. | Window space is spent on evidence instead of hope. | Answer using current evidence placed in the window at the right moment. |
| Reasoning and reasoning tokens | 2024-2025 | Models made hidden intermediate work more explicit. | Task framing, facts in view, prior turns, final answer target. | Better reasoning still depends on clean visible context. | Spend extra internal work on planning and checking before replying. |
| CLI tools | 2024-2025 | LLMs started working against real files, commands, and outputs. | Repo files, terminal output, diffs, tests, current instruction. | Real project artifacts make context richer but also noisier. | Work against actual local artifacts instead of only a pasted prompt. |
| AGENTS.md | 2025 | Durable repo instructions reduced repeated setup cost. | AGENTS.md, repo files, task request, working history. | Stable instructions save repeated prompt space when used well. | Start from project-specific rules instead of restating them every session. |
| MCPs | 2024-2025 | Structured tool access made external resources easier to request. | Tool schema, returned resources, task request, chat history. | Better selection matters more than stuffing everything into the prompt. | Request the right external resource at the moment it becomes relevant. |
| Skills and plugins | 2025 | Reusable bundles packaged instructions, references, and tool paths. | Skill instructions, plugin/tool affordances, bundled references, active task. | Preloaded context can save time if the bundle stays compact. | Begin with a reusable job packet instead of rebuilding from scratch. |
| Hooks | 2025 | Automatic checks moved repetitive discipline around the model. | Task request, repo context, hook checks, policy rules. | Short, relevant hook outputs help more than verbose reports. | Let automation handle repetitive checks so attention stays on the task. |
| Subagents | 2025-2026 | Larger jobs were split into smaller focused contexts. | Worker brief, local files, handoff memo, bounded task. | Clear handoffs reduce clutter and keep each context narrower. | Split one overloaded problem into smaller contexts with cleaner handoffs. |

## Appendix B: Glossary and Analogy Ledger

| Term | Plain-language definition | Approved analogy family |
| --- | --- | --- |
| tokens | Tiny chunks of text the model counts and processes. | Index cards, paper slips |
| context window | The total token space the model can actively consider in one pass. | Desk space, filing tray |
| cutoff date | The point after which built-in training knowledge stops being reliably current. | Encyclopedia date, newspaper stack |
| chat transcript | The running conversation history that still fits in the window. | Back-and-forth notes |
| prompt engineering | Shaping instructions so the model can infer the task, constraints, and format clearly. | Work ticket, instruction manual |
| few-shot examples | Small example inputs and outputs that show the desired pattern. | Sample forms, pattern cards |
| constraints | Rules that limit the answer, such as scope, tone, length, or forbidden moves. | House rules, job memo |
| formatting cues | Labels and structure that help the model parse the request correctly. | Tabs, headings, copy desk layout |
| compression | Shortening earlier material so some meaning survives while using fewer tokens. | Summary note, abstract |
| retrieval | Fetching outside material and placing it into context instead of relying on memory. | Filing cabinet, records room |
| grounding | Tying the answer to supplied evidence instead of unsupported guesses. | Papers on the desk |
| reasoning tokens | Token budget spent on internal intermediate work before the visible answer. | Scratch paper, working notes |
| task decomposition | Breaking a bigger problem into smaller jobs with clearer objectives. | Assembly line, smaller work orders |
| CLI | Command-line tools that expose files, commands, logs, and local project state. | Teletype, terminal desk |
| AGENTS.md | A repository file that stores durable instructions about how the local project should be handled. | Standing office memo |
| persistent instructions | Reusable guidance stored outside the current chat. | Posted rules, clipped memo |
| MCP | A structured way for the model host to expose tools and resources. | Switchboard |
| tools | Callable actions such as commands, searches, or resource fetches. | Office machines, service buttons |
| resources | External files or data returned to the model when needed. | Folders, cards, reports |
| dynamic context | Context assembled at runtime instead of pasted all at once. | Desk material brought in as needed |
| skills | Compact reusable instructions tuned for a recurring task. | Procedure cards |
| plugins | Broader bundles that package skills, tools, and supporting configuration. | Office kit |
| hooks | Automatic steps that run before or after the main task. | Automatic checklist |
| validation | Checking whether output meets rules, tests, or acceptance criteria. | Inspection stamp |
| automation | Work that runs automatically so the model does not have to remember every repeat step. | Machine helper |
| guardrails | Built-in limits or checks that keep the workflow in approved behavior. | Safety rails |
| subagents | Smaller task-specific workers with narrower prompts and cleaner objectives. | Specialized clerks |
| handoffs | Artifacts or messages passed from one worker to the next. | Passed memos |
| artifacts | Named outputs such as briefs, reports, code changes, or checklists. | Paperwork bundle |

## Appendix C: Acceptance Criteria Checklist

- [ ] The page starts with ChatGPT 3.5 and ends with subagents, with no drift into unrelated history.
- [ ] Every milestone card answers what changed, what tokens are in play, what fits in context, and what the model is trying to do.
- [ ] The persistent context visual stays visible through the scroll experience.
- [ ] Boomer mode changes both the copy layer and the visual style.
- [ ] The Boomer mode analogies come from the approved analogy families only.
- [ ] The glossary terms used in the page are defined in Appendix B or in clear in-page copy.
- [ ] The page remains a static site suitable for GitHub Pages.
- [ ] No new section weakens the token/context/objective through-line.

