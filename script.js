const uiCopy = {
  default: {
    heroEyebrow: "A visual field guide to modern LLM work",
    heroTitle: "The story is not magic. It is context.",
    heroLede:
      "Scroll from ChatGPT 3.5 to modern agent workflows and keep one mental model in view the whole time: an LLM only works with the tokens placed inside its current context window.",
    boomerLabel: "Boomer Button",
    boomerHint: "Switch to 1950s ELI5 mode",
    coreEyebrow: "Persistent lens",
    coreTitle: "What the model can hold right now",
    coreSummary:
      "The chamber below stands in for the context window. As the timeline moves, the chamber grows, the token stream thickens, and new kinds of instructions arrive around it.",
    incomingLabel: "Loaded into context",
    incomingCaption: "These are the items currently earning space in the window.",
    windowStageLabel: "Inside the window now",
    windowStageNote: "Useful context fills the window. Irrelevant material stays out.",
    objectiveLabel: "Current job",
    overflowTitle: "Outside the window",
    modelSeesTitle: "What the model sees",
    windowMattersTitle: "Why the window matters",
    glossaryLede: "Each term is restated in plain language before the jargon gets reused.",
    closingEyebrow: "Closing frame",
    closingTitle: "Modern LLM work is context engineering in public.",
    closingLede:
      "Better tools do not repeal token limits. They help people choose, shape, and hand off the right context more deliberately.",
    closingPoints: [
      {
        title: "The limit never left",
        body: "Long windows, retrieval, tools, and agents all work by managing what enters the model's finite working set."
      },
      {
        title: "Workflow beats mystique",
        body: "Strong results usually come from clearer prompts, tighter evidence, smaller tasks, and cleaner handoffs rather than magic hidden powers."
      },
      {
        title: "The core mechanism is still simple",
        body: "Even when the surrounding system looks sophisticated, the model is still producing tokens from the context it can currently see."
      }
    ]
  },
  boomer: {
    heroEyebrow: "A plainspoken tour of how these machine minds are used",
    heroTitle: "It is not sorcery. It is the papers on the desk.",
    heroLede:
      "Start with ChatGPT 3.5 and move forward year by year. The whole trick is simple: the machine can only work on the little word pieces and instructions sitting in front of it right now.",
    boomerLabel: "Modern Talk Off",
    boomerHint: "Use the 1950s easy-explainer view",
    coreEyebrow: "Keep this picture in mind",
    coreTitle: "What the machine has on its desk right now",
    coreSummary:
      "Think of this console as the model's working desk. As the years pass, the desk gets bigger, the paper stack gets taller, and more kinds of notes and tools get wheeled into reach.",
    incomingLabel: "Papers on the desk",
    incomingCaption: "These are the papers and tools the machine is using right now.",
    windowStageLabel: "What still fits on the desk",
    windowStageNote: "The useful papers stay on top. The clutter belongs elsewhere.",
    objectiveLabel: "Clerk's job right now",
    overflowTitle: "Still out in the hallway",
    modelSeesTitle: "What the machine has in front of it",
    windowMattersTitle: "Why desk space matters",
    glossaryLede: "Each shop term gets translated into plain talk before it shows up again.",
    closingEyebrow: "Last note",
    closingTitle: "Modern machine work is mostly about packing the desk well.",
    closingLede:
      "The fancy office gear does not remove the desk limit. It mostly helps people choose better papers, arrange them better, and pass cleaner packets from one clerk to the next.",
    closingPoints: [
      {
        title: "The desk is still finite",
        body: "Bigger desks, better filing tricks, and helper clerks still work by deciding what gets laid out in front of the machine."
      },
      {
        title: "Good office habits matter more than mystique",
        body: "Clear instructions, the right evidence, smaller jobs, and tidy memos do more than treating the machine like a wizard."
      },
      {
        title: "The basic machine has not changed",
        body: "Even with a lot of office machinery around it, the engine is still working from the word slips it can currently see."
      }
    ]
  }
};

const concepts = [
  {
    id: "tokens",
    title: "Tokens",
    defaultText:
      "Tokens are bite-sized word pieces. Billing, memory use, and model limits are usually counted in tokens, not words.",
    boomerText:
      "Think of tokens as tiny slips of paper. A sentence is really a pile of slips, not one neat block."
  },
  {
    id: "window",
    title: "Context Window",
    defaultText:
      "The context window is the finite amount of token material the model can actively consider in one pass.",
    boomerText:
      "The context window is the desk space. Only so many paper slips fit where the clerk can see them."
  },
  {
    id: "cutoff",
    title: "Cutoff Date",
    defaultText:
      "A cutoff date marks how recent the model's built-in training knowledge is. New facts usually need live tools or retrieved documents.",
    boomerText:
      "A cutoff date is the last day the encyclopedia was updated. Anything newer needs a fresh newspaper clipping."
  },
  {
    id: "parameters",
    title: "Parameters",
    defaultText:
      "Parameters are the learned weights inside the model. User controls can steer behavior, but they do not rewrite those weights on the fly.",
    boomerText:
      "Parameters are the machine's internal wiring. Turning a dial changes how it behaves, but it does not rebuild the motor."
  }
];

const glossaryDefinitions = {
  tokens: {
    default: "Tiny chunks of text the model counts and processes, often smaller than full words.",
    boomer: "Little paper slips the machine sorts through one piece at a time."
  },
  "context window": {
    default: "The total token space the model can actively pay attention to in one pass.",
    boomer: "The amount of desk space the clerk can use right now."
  },
  "cutoff date": {
    default: "The point after which the model's built-in training knowledge stops being reliably current.",
    boomer: "The last date printed in the encyclopedia sitting on the shelf."
  },
  "chat transcript": {
    default: "The running conversation history that still fits inside the current window.",
    boomer: "The stack of back-and-forth notes still lying on the desk."
  },
  "prompt engineering": {
    default: "Deliberately shaping instructions so the model can infer the task, constraints, and output format clearly.",
    boomer: "Writing a cleaner work ticket so the clerk knows exactly what job to do."
  },
  "few-shot examples": {
    default: "Small example inputs and outputs that show the model what kind of answer you want.",
    boomer: "Sample forms that show the clerk what a finished page should look like."
  },
  constraints: {
    default: "Rules that limit the answer, such as length, tone, scope, or forbidden moves.",
    boomer: "House rules telling the clerk what it must and must not do."
  },
  "formatting cues": {
    default: "Labels, delimiters, and structure that help the model parse the request correctly.",
    boomer: "Tabs and headings that keep the paperwork from getting mixed up."
  },
  "128K context": {
    default: "A much larger context window that can hold far more token material than early chat systems.",
    boomer: "A much bigger desk that can hold many more paper slips at once."
  },
  compression: {
    default: "Shortening earlier material so some of its meaning survives while using fewer tokens.",
    boomer: "Making a brief summary note so the clerk does not have to keep every full page."
  },
  "conversation history": {
    default: "Earlier turns in the exchange that remain available to the model.",
    boomer: "The earlier office notes still pinned to the case file."
  },
  "document ingestion": {
    default: "Pulling document text into the model's working context so it can be referenced in the answer.",
    boomer: "Loading the folder pages onto the desk so the clerk can use them."
  },
  retrieval: {
    default: "Fetching outside material and placing it into context instead of relying on memory alone.",
    boomer: "Getting the right folder from the cabinet when the clerk needs it."
  },
  RAG: {
    default: "Retrieval-augmented generation: answer generation supported by retrieved source material.",
    boomer: "Writing the memo with fresh folder pages open beside the typewriter."
  },
  "knowledge cutoff": {
    default: "The freshness limit of the model's built-in training knowledge.",
    boomer: "The date when the office encyclopedia stopped getting updates."
  },
  grounding: {
    default: "Tying the answer to supplied evidence instead of letting it float on unsupported guesses.",
    boomer: "Keeping the memo pinned to the actual paperwork on the desk."
  },
  reasoning: {
    default: "A mode where the model spends more work on planning or checking before it answers.",
    boomer: "Extra scratch-pad thinking before the clerk sends the final memo."
  },
  "reasoning tokens": {
    default: "Token budget spent on internal intermediate work rather than only on the visible answer.",
    boomer: "The scratch-paper space the clerk uses before typing the clean copy."
  },
  deliberation: {
    default: "Slower, more stepwise consideration before committing to an answer.",
    boomer: "Taking a moment to sort the papers before speaking."
  },
  "task decomposition": {
    default: "Breaking a bigger problem into smaller jobs with clearer objectives.",
    boomer: "Splitting one messy office job into several smaller desk tasks."
  },
  CLI: {
    default: "Command-line interface tools that expose files, commands, logs, and local project state.",
    boomer: "The teletype-and-terminal side of the office where the real work printouts appear."
  },
  "terminal output": {
    default: "The text returned by commands, including logs, errors, and status messages.",
    boomer: "The paper coming back from the teletype machine."
  },
  "repo context": {
    default: "The project files, structure, and history that give a coding task its local meaning.",
    boomer: "The folder drawers and project paperwork for this particular case."
  },
  diffs: {
    default: "Line-by-line changes showing what was added, removed, or edited in the codebase.",
    boomer: "Red-pencil marks showing what changed on the page."
  },
  "AGENTS.md": {
    default: "A repository file that stores durable instructions about how the local project should be handled.",
    boomer: "The standing office memo clipped to the front of the project folder."
  },
  "persistent instructions": {
    default: "Reusable guidance stored outside the current chat so it can be loaded again later.",
    boomer: "House rules that stay posted instead of being repeated every morning."
  },
  "repo policy": {
    default: "Project-specific rules about architecture, reviews, style, or workflow.",
    boomer: "The local office rulebook for this file room."
  },
  "context assembly": {
    default: "The act of choosing which instructions, files, and evidence go into the active window.",
    boomer: "Picking which papers belong on the desk before the clerk starts."
  },
  MCP: {
    default: "Model Context Protocol, a structured way for the model host to expose tools and resources.",
    boomer: "The switchboard system for calling the records room in a standard way."
  },
  tools: {
    default: "Callable actions such as commands, searches, or resource fetches that extend what the model can do.",
    boomer: "Office machines and service buttons the clerk can use to get the job done."
  },
  resources: {
    default: "External files or data returned to the model when needed.",
    boomer: "Folders, cards, or reports pulled in from another room."
  },
  "dynamic context": {
    default: "Context that is fetched or assembled at runtime instead of pasted all at once up front.",
    boomer: "Desk material that gets brought in as the job unfolds."
  },
  skills: {
    default: "Compact reusable instructions and references tuned for a recurring kind of task.",
    boomer: "Ready-made procedure cards for common office jobs."
  },
  plugins: {
    default: "Broader bundles that can package skills, tools, assets, and supporting configuration together.",
    boomer: "Larger office kits that bring procedure cards, tools, and cabinet keys in one bundle."
  },
  vocabulary: {
    default: "Task-specific terms that steer the model toward the right domain and workflow.",
    boomer: "Shop words that tell the clerk which line of work this belongs to."
  },
  "reusable context": {
    default: "High-value instructions or references that can be loaded across many similar tasks.",
    boomer: "Useful office packets you can pull off the shelf again and again."
  },
  hooks: {
    default: "Automatic steps that run before or after the main task to enforce checks or side work.",
    boomer: "Automatic checklist steps wired around the clerk's main assignment."
  },
  validation: {
    default: "Checking whether the output meets rules, tests, or acceptance criteria.",
    boomer: "Inspecting the finished page to make sure it follows the office rules."
  },
  automation: {
    default: "Work that runs automatically so the model does not have to remember every repetitive step.",
    boomer: "A machine-driven helper that handles the routine paperwork by itself."
  },
  guardrails: {
    default: "Built-in limits or checks that keep the workflow inside approved behavior.",
    boomer: "Safety rails that keep the clerk from wandering off the approved track."
  },
  subagents: {
    default: "Smaller task-specific workers that each get a narrower prompt and cleaner objective.",
    boomer: "Special clerks who each handle one smaller packet instead of one person juggling everything."
  },
  handoffs: {
    default: "The artifacts or messages passed from one worker to the next.",
    boomer: "The memos one clerk slides across the desk to another."
  },
  artifacts: {
    default: "Named outputs such as briefs, reports, code changes, or checklists that can be reviewed.",
    boomer: "The actual paperwork each clerk hands back when the job is done."
  }
};

const milestones = [
  {
    id: "chatgpt35",
    year: "2022.11",
    era: "ChatGPT lands",
    title: "ChatGPT 3.5",
    whatChanged:
      "A chat box made a general-purpose LLM feel like a tool regular people could actually use.",
    body:
      "On November 30, 2022, the big shift was interface, not magic. People discovered that if they placed the right tokens into a conversation, the model could draft, summarize, rewrite, and answer in a surprisingly useful way. It also made the limits visible: the model only had a modest amount of working room and a fixed knowledge cutoff.",
    boomerBody:
      "The breakthrough was giving people a simple switchboard to talk to. Once folks saw they could feed the machine the right little word slips, it became useful for letters, summaries, and questions. They also learned the machine had only so much desk space and an old encyclopedia in its head.",
    sees:
      "The model sees the chat transcript that still fits in the window: your latest request plus some earlier turns, chopped into tokens.",
    boomerSees:
      "The machine sees the pages still lying on its desk: your newest note and whatever earlier notes still fit.",
    window:
      "When the early window fills up, old instructions fall away or get compressed. That is why early chat sessions could lose the thread.",
    boomerWindow:
      "When the desk gets crowded, older papers get pushed aside. That is why the machine could forget the earlier part of the conversation.",
    glossary: ["tokens", "context window", "cutoff date", "chat transcript"],
    objectLabel: "chat turns",
    accent: "#f3b74b",
    windowScale: 0.76,
    tokenLoad: "modest",
    windowLabel: "compact",
    tokensInView: 8,
    overflow: ["older turns", "long attachments"],
    orbitObjects: [
      { label: "user prompt", x: "-8rem", y: "-6rem", startX: "-14rem", startY: "-12rem" },
      { label: "assistant reply", x: "8rem", y: "-4rem", startX: "15rem", startY: "-11rem" },
      { label: "system framing", x: "0rem", y: "7rem", startX: "0rem", startY: "14rem" }
    ]
  },
  {
    id: "prompting",
    year: "2023",
    era: "Prompt engineering",
    title: "Prompt Engineering Becomes a Discipline",
    whatChanged:
      "Users learned that the quality of the input tokens often mattered more than the model's mystique.",
    body:
      "Prompt engineering turned fuzzy requests into structured instructions: role, task, constraints, examples, desired format. The key lesson was practical and enduring. If you want better output, spend effort arranging the input tokens so the model can infer the job clearly.",
    boomerBody:
      "People stopped barking vague orders and started writing clearer work tickets. They learned that the machine does better when the instructions say who it is, what job it has, and what shape the answer should take.",
    sees:
      "The model sees better-organized tokens: clearer instructions, examples, delimiters, and formatting cues that reduce ambiguity.",
    boomerSees:
      "The machine sees a cleaner work order: fewer mixed signals and more labels telling it what goes where.",
    window:
      "A good prompt uses scarce window space wisely. Every unnecessary token is room you cannot spend on examples, retrieved facts, or output budget.",
    boomerWindow:
      "A good prompt uses desk space like a tidy clerk. Junk on the desk means less room for the important paperwork.",
    glossary: ["prompt engineering", "few-shot examples", "constraints", "formatting cues"],
    objectLabel: "structured prompts",
    accent: "#46c0b5",
    windowScale: 0.8,
    tokenLoad: "denser",
    windowLabel: "compact",
    tokensInView: 10,
    overflow: ["rambling setup", "duplicate instructions"],
    orbitObjects: [
      { label: "role", x: "-9rem", y: "-5rem", startX: "-16rem", startY: "-10rem" },
      { label: "examples", x: "9rem", y: "-2rem", startX: "16rem", startY: "-9rem" },
      { label: "format rules", x: "1rem", y: "7rem", startX: "3rem", startY: "15rem" }
    ]
  },
  {
    id: "long-context",
    year: "2023.11",
    era: "Longer windows",
    title: "Context Windows Stretch",
    whatChanged:
      "Much larger windows meant the model could consider longer conversations, larger documents, and more detailed instructions at once.",
    body:
      "This did not make the model all-knowing. It changed the size of the workbench. Larger context meant more source material, broader history, and fewer forced summaries between steps. It also made context management a first-class skill because window space, while larger, was still finite and expensive.",
    boomerBody:
      "The desk got a lot bigger. Now the machine could keep more papers in front of it at one time, but the desk was still not endless and the paper still had to be chosen carefully.",
    sees:
      "The model sees more tokens before it must drop or compress material, which allows longer documents and richer instruction sets to coexist.",
    boomerSees:
      "The machine can now spread more papers across the desk before it has to shove some into a side drawer.",
    window:
      "Longer windows reduce forgetting, but they also invite clutter. Bigger windows help only when the added tokens are relevant.",
    boomerWindow:
      "A bigger desk is helpful only if you put the right papers on it. A bigger mess is still a mess.",
    glossary: ["128K context", "compression", "conversation history", "document ingestion"],
    objectLabel: "bigger workbench",
    accent: "#7dd3a0",
    windowScale: 1,
    tokenLoad: "heavy",
    windowLabel: "expanded",
    tokensInView: 14,
    overflow: ["irrelevant pages", "redundant logs"],
    orbitObjects: [
      { label: "large docs", x: "-10rem", y: "-6rem", startX: "-18rem", startY: "-11rem" },
      { label: "long chats", x: "10rem", y: "-4rem", startX: "17rem", startY: "-11rem" },
      { label: "extra rules", x: "0rem", y: "8rem", startX: "0rem", startY: "16rem" }
    ]
  },
  {
    id: "retrieval",
    year: "2023-2024",
    era: "Cutoff meets retrieval",
    title: "Retrieval Beats Pretending the Model Knows Everything",
    whatChanged:
      "People stopped treating cutoff dates as a footnote and started fetching fresh documents into context on purpose.",
    body:
      "Retrieval changed the job from 'remember everything' to 'pull the right evidence into the window at the right moment.' Instead of hoping the model's training knew the answer, teams began supplying current documentation, policies, manuals, tickets, and database results as extra tokens.",
    boomerBody:
      "Instead of asking the machine to remember every fact ever printed, people started handing it the right folder at the right time. Fresh clippings beat old memory.",
    sees:
      "The model sees quoted or retrieved passages placed directly into the prompt, often with source labels and instructions about how to use them.",
    boomerSees:
      "The machine sees the exact folder pages you slid across the desk, usually with tabs telling it what each page is.",
    window:
      "Retrieval spends context window space on evidence. The tradeoff is simple: every source you add must earn its place because tokens used on stale or irrelevant text crowd out better material.",
    boomerWindow:
      "Every folder you place on the desk takes up room. If the folder is the wrong one, it crowds out the papers that mattered.",
    glossary: ["retrieval", "RAG", "knowledge cutoff", "grounding"],
    objectLabel: "retrieved folders",
    accent: "#f16f5d",
    windowScale: 1.04,
    tokenLoad: "evidence-heavy",
    windowLabel: "expanded",
    tokensInView: 13,
    overflow: ["stale docs", "irrelevant snippets"],
    orbitObjects: [
      { label: "policy docs", x: "-9rem", y: "-6rem", startX: "-17rem", startY: "-10rem" },
      { label: "source labels", x: "10rem", y: "-3rem", startX: "18rem", startY: "-8rem" },
      { label: "live data", x: "0rem", y: "8rem", startX: "1rem", startY: "16rem" }
    ]
  },
  {
    id: "reasoning",
    year: "2024-2025",
    era: "Reasoning workflows",
    title: "Thinking and Reasoning Tokens",
    whatChanged:
      "Reasoning-focused models made it more explicit that some work happens in hidden intermediate thinking before the final answer is returned.",
    body:
      "This reframed user expectations. The model was no longer just producing a quick surface completion. It could spend extra computation on planning, decomposition, or checking before speaking. That does not remove token economics. It adds another layer of budget and makes task framing even more important.",
    boomerBody:
      "Some models started taking a little more time behind the curtain before handing you the final memo. That means more internal scratch work before the polished answer comes back.",
    sees:
      "The model still sees prompts, tool results, and prior context. The difference is that it may consume extra internal reasoning budget before producing the outward reply.",
    boomerSees:
      "The machine still reads the same paperwork, but now it may do more scratch-pad thinking before it types the final page.",
    window:
      "Reasoning helps most when the context is clean. If the prompt is muddy or the window is cluttered, extra thinking can still chase the wrong objective.",
    boomerWindow:
      "A brighter clerk still needs a tidy desk. Extra pencil work does not help much if the wrong papers are on top.",
    glossary: ["reasoning", "reasoning tokens", "deliberation", "task decomposition"],
    objectLabel: "planning layer",
    accent: "#c4a0ff",
    windowScale: 1.08,
    tokenLoad: "deliberate",
    windowLabel: "expanded",
    tokensInView: 12,
    overflow: ["muddy goals", "contradictory asks"],
    orbitObjects: [
      { label: "plan", x: "-10rem", y: "-6rem", startX: "-18rem", startY: "-12rem" },
      { label: "checks", x: "10rem", y: "-2rem", startX: "16rem", startY: "-10rem" },
      { label: "draft answer", x: "0rem", y: "8rem", startX: "0rem", startY: "15rem" }
    ]
  },
  {
    id: "cli",
    year: "2024-2025",
    era: "Tools in the loop",
    title: "Command-Line Tools (CLI) Bring LLMs Into Real Work",
    whatChanged:
      "The model stopped being just a chat partner and started operating inside real files, commands, and local project context.",
    body:
      "CLI-based workflows matter because they expand the model's usable input with actual working artifacts: repository files, terminal output, logs, tests, and diffs. The model still acts on tokens, but those tokens now come from the real environment instead of only a pasted prompt.",
    boomerBody:
      "The machine moved from a question desk into the back office. Instead of talking in the abstract, it could read the files, inspect the printouts, and help with the actual job.",
    sees:
      "The model sees code, command output, error messages, configuration files, and your instructions all mixed into a richer working context.",
    boomerSees:
      "The machine sees the workbench itself: file folders, teletype printouts, and your assignment note all at once.",
    window:
      "CLI workflows make context selection more important, not less. Raw terminal spam can waste tokens quickly, so good tools summarize, filter, and target what gets shown.",
    boomerWindow:
      "A teletype can spit out yards of paper. If you dump all of it on the desk, the useful note gets buried.",
    glossary: ["CLI", "terminal output", "repo context", "diffs"],
    objectLabel: "working artifacts",
    accent: "#46c0b5",
    windowScale: 1.12,
    tokenLoad: "workbench",
    windowLabel: "tool-fed",
    tokensInView: 13,
    overflow: ["full logs", "vendor code", "noise"],
    orbitObjects: [
      { label: "repo files", x: "-10rem", y: "-5rem", startX: "-18rem", startY: "-10rem" },
      { label: "terminal", x: "10rem", y: "-3rem", startX: "18rem", startY: "-8rem" },
      { label: "diff", x: "0rem", y: "8rem", startX: "1rem", startY: "16rem" }
    ]
  },
  {
    id: "agentsmd",
    year: "2025",
    era: "Intent made explicit",
    title: "Repo Instruction Files (AGENTS.md)",
    whatChanged:
      "Teams started storing durable repo instructions near the work itself so the model could load project-specific behavior without rewriting it every session.",
    body:
      "AGENTS.md is a practical answer to repeated setup cost. Instead of spending valuable prompt tokens restating the same norms, repository instructions can define architecture expectations, coding rules, review standards, and local conventions. That shifts some context assembly from memory to files.",
    boomerBody:
      "Rather than repeating the house rules to every new clerk, teams pinned a standing memo to the front of the folder. The machine could read the memo and start with the local customs already in hand.",
    sees:
      "The model sees a stable instruction file alongside the immediate task, which improves consistency across sessions and users.",
    boomerSees:
      "The machine sees the standing office memo right next to the day's assignment.",
    window:
      "Persistent instruction files save attention, but they still consume tokens when loaded. Good AGENTS.md files are concise, specific, and worth the space they take up.",
    boomerWindow:
      "The standing memo still takes desk space, so it had better be short and worth reading.",
    glossary: ["AGENTS.md", "persistent instructions", "repo policy", "context assembly"],
    objectLabel: "standing memo",
    accent: "#f3b74b",
    windowScale: 1.14,
    tokenLoad: "policy-aware",
    windowLabel: "tool-fed",
    tokensInView: 12,
    overflow: ["vague rules", "duplicate policy"],
    orbitObjects: [
      { label: "AGENTS.md", x: "-10rem", y: "-6rem", startX: "-18rem", startY: "-10rem" },
      { label: "task", x: "10rem", y: "-3rem", startX: "18rem", startY: "-8rem" },
      { label: "house style", x: "0rem", y: "8rem", startX: "0rem", startY: "16rem" }
    ]
  },
  {
    id: "mcp",
    year: "2024-2025",
    era: "Connected systems",
    title: "Tool Switchboards (MCPs) Connect External Systems",
    whatChanged:
      "The model gained a cleaner way to ask for outside tools and resources instead of pretending everything had to be pasted manually.",
    body:
      "Model Context Protocol shifts context gathering into a structured interface. Rather than dumping every possible document into the prompt, the model or its host can request the specific resource it needs. This makes context assembly more dynamic, targeted, and tool-like.",
    boomerBody:
      "Instead of piling every folder on the desk before the job starts, the office got a switchboard. The clerk can ring the records room and ask for the exact folder it needs.",
    sees:
      "The model sees the resources returned by the protocol plus the tool schema that tells it what can be requested.",
    boomerSees:
      "The machine sees the folder that came back from the records room and the little card explaining which calls it can place.",
    window:
      "MCP does not abolish the context window. It helps choose better material to place inside it, at the moment it is needed.",
    boomerWindow:
      "The switchboard does not make the desk bigger. It just makes it easier to fetch the right file before the desk fills up.",
    glossary: ["MCP", "tools", "resources", "dynamic context"],
    objectLabel: "switchboard",
    accent: "#46c0b5",
    windowScale: 1.18,
    tokenLoad: "connected",
    windowLabel: "dynamic",
    tokensInView: 13,
    overflow: ["unused resources", "whole databases"],
    orbitObjects: [
      { label: "tool schema", x: "-10rem", y: "-6rem", startX: "-18rem", startY: "-10rem" },
      { label: "resource call", x: "10rem", y: "-3rem", startX: "18rem", startY: "-8rem" },
      { label: "returned data", x: "0rem", y: "8rem", startX: "0rem", startY: "16rem" }
    ]
  },
  {
    id: "skills-plugins",
    year: "2025",
    era: "Packaged know-how",
    title: "Skills and Plugins Package Reusable Context",
    whatChanged:
      "Reusable capability bundles let teams stop rebuilding the same instructions, references, and tool integrations from scratch.",
    body:
      "A skill is basically a compact playbook. A plugin is a broader bundle that can package skills, tools, and supporting assets. Both are ways to preload high-value context so the model starts closer to the job instead of burning tokens rediscovering the workflow every time.",
    boomerBody:
      "People started making ready-made instruction kits. One kit might hold a procedure card. A bigger kit might hold the card, the proper tools, and the cabinet key to fetch records.",
    sees:
      "The model sees a shaped starting context: targeted instructions, specialized vocabulary, bundled references, and permitted tool paths.",
    boomerSees:
      "The machine sees a prepared job packet instead of an empty desk and a shrug.",
    window:
      "Reusable packages help only when they are tight. Bloated skills and plugins waste window space just as surely as bad prompts do.",
    boomerWindow:
      "A fine office kit is compact. A bloated kit just eats half the desk before the day even begins.",
    glossary: ["skills", "plugins", "vocabulary", "reusable context"],
    objectLabel: "job packet",
    accent: "#f16f5d",
    windowScale: 1.2,
    tokenLoad: "preloaded",
    windowLabel: "dynamic",
    tokensInView: 14,
    overflow: ["bloated templates", "unused references"],
    orbitObjects: [
      { label: "skill", x: "-10rem", y: "-6rem", startX: "-18rem", startY: "-10rem" },
      { label: "plugin", x: "10rem", y: "-3rem", startX: "18rem", startY: "-8rem" },
      { label: "references", x: "0rem", y: "8rem", startX: "0rem", startY: "16rem" }
    ]
  },
  {
    id: "hooks",
    year: "2025",
    era: "Guardrails and automation",
    title: "Hooks Add Automatic Checks Around the Work",
    whatChanged:
      "Before-and-after automations started shaping the workflow so the model did not have to remember every check manually.",
    body:
      "Hooks move some discipline out of the conversational layer and into the runtime. That matters because token-based systems are fallible at rote repetition. If formatting, validation, or auditing can happen automatically around the model, the model can spend more of its context budget on reasoning about the real task.",
    boomerBody:
      "Instead of trusting the clerk to remember every checklist item, offices began wiring automatic steps before and after the main job. That leaves the clerk freer to think about the hard part.",
    sees:
      "The model sees the task plus whatever hook outputs are added back into the loop, such as validation results or policy checks.",
    boomerSees:
      "The machine sees the assignment and then the report from the automatic checker that ran beside it.",
    window:
      "Hooks keep repetitive rules out of the prompt, but their outputs still enter the window if they are relevant. Good hook design keeps those outputs short and actionable.",
    boomerWindow:
      "Automatic checklists save desk space only if the reports come back short and useful.",
    glossary: ["hooks", "validation", "automation", "guardrails"],
    objectLabel: "checklist automations",
    accent: "#7dd3a0",
    windowScale: 1.22,
    tokenLoad: "guardrailed",
    windowLabel: "dynamic",
    tokensInView: 13,
    overflow: ["verbose reports", "low-signal checks"],
    orbitObjects: [
      { label: "before hook", x: "-10rem", y: "-6rem", startX: "-18rem", startY: "-10rem" },
      { label: "after hook", x: "10rem", y: "-3rem", startX: "18rem", startY: "-8rem" },
      { label: "check result", x: "0rem", y: "8rem", startX: "0rem", startY: "16rem" }
    ]
  },
  {
    id: "subagents",
    year: "2025-2026",
    era: "Coordinated workflows",
    title: "Subagents Split the Work Without Changing the Core Rule",
    whatChanged:
      "Complex jobs began to be decomposed into smaller task-specific workers, each with its own tighter context and objective.",
    body:
      "Subagents matter because they replace one overloaded prompt with several focused contexts. Each worker sees a smaller slice, does one bounded job, and hands back an artifact. The breakthrough is not that the model became superhuman. It is that teams got better at dividing work so each context window carries less clutter.",
    boomerBody:
      "When one clerk's desk got too crowded, offices split the work across a few specialized clerks. Each clerk got a smaller packet, did one job, and sent back a clean memo.",
    sees:
      "Each subagent sees a narrower prompt, a smaller artifact set, and a more specific goal than a giant do-everything agent would.",
    boomerSees:
      "Each little clerk sees a smaller packet and a cleaner assignment than the poor soul handling the whole mess alone.",
    window:
      "Subagents are really a context management strategy. They work when handoffs are clear and fail when every worker gets bloated context or vague instructions.",
    boomerWindow:
      "Splitting the work helps only if each clerk gets a tidy packet. Handing everyone the whole filing cabinet misses the point.",
    glossary: ["subagents", "handoffs", "artifacts", "task decomposition"],
    objectLabel: "special clerks",
    accent: "#f3b74b",
    windowScale: 1.24,
    tokenLoad: "distributed",
    windowLabel: "orchestrated",
    tokensInView: 15,
    overflow: ["shared clutter", "bad handoffs"],
    orbitObjects: [
      { label: "worker A", x: "-11rem", y: "-6rem", startX: "-18rem", startY: "-10rem" },
      { label: "worker B", x: "11rem", y: "-3rem", startX: "18rem", startY: "-8rem" },
      { label: "handoff memo", x: "0rem", y: "8rem", startX: "0rem", startY: "16rem" }
    ]
  }
];

const milestoneVisuals = {
  chatgpt35: {
    objective: "Hold the conversation together long enough to answer the latest request.",
    boomerObjective: "Keep the conversation straight and answer the newest note.",
    visualCaption: "Chat history is the main context object in the window.",
    boomerCaption: "Most of the desk is taken up by the running conversation.",
    pressure: 0.7,
    segments: [
      { label: "system framing", share: 20, tone: "instruction" },
      { label: "chat history", share: 45, tone: "memory" },
      { label: "user prompt", share: 35, tone: "task" }
    ]
  },
  prompting: {
    objective: "Infer the job from clearer instructions, examples, and output rules.",
    boomerObjective: "Read the work ticket carefully and follow the labels.",
    visualCaption: "Prompt structure becomes a deliberate way to shape the visible tokens.",
    boomerCaption: "The desk is arranged more neatly so the machine knows what job it is doing.",
    pressure: 0.74,
    segments: [
      { label: "role + task", share: 26, tone: "instruction" },
      { label: "examples", share: 34, tone: "memory" },
      { label: "format rules", share: 18, tone: "instruction" },
      { label: "user ask", share: 22, tone: "task" }
    ]
  },
  "long-context": {
    objective: "Balance longer history, larger documents, and richer instructions in one pass.",
    boomerObjective: "Work from a bigger desk without turning it into a bigger mess.",
    visualCaption: "A larger window means more relevant material can stay active at once.",
    boomerCaption: "The desk is bigger, so more useful papers can stay in reach together.",
    pressure: 0.62,
    segments: [
      { label: "conversation history", share: 28, tone: "memory" },
      { label: "large docs", share: 38, tone: "evidence" },
      { label: "extra rules", share: 16, tone: "instruction" },
      { label: "current task", share: 18, tone: "task" }
    ]
  },
  retrieval: {
    objective: "Answer using fresh evidence pulled into the window right when it is needed.",
    boomerObjective: "Use the right folder instead of guessing from an old encyclopedia.",
    visualCaption: "Retrieved documents spend window space on current evidence instead of hope.",
    boomerCaption: "Fresh folders take up desk space, but they beat guessing from memory.",
    pressure: 0.78,
    segments: [
      { label: "user task", share: 16, tone: "task" },
      { label: "retrieved docs", share: 46, tone: "evidence" },
      { label: "source labels", share: 16, tone: "instruction" },
      { label: "recent history", share: 22, tone: "memory" }
    ]
  },
  reasoning: {
    objective: "Spend extra internal work on planning and checking before replying.",
    boomerObjective: "Do more scratch-pad thinking before sending the final memo.",
    visualCaption: "The visible context still matters because better reasoning starts from cleaner inputs.",
    boomerCaption: "Extra pencil work only helps if the right papers are already on the desk.",
    pressure: 0.67,
    segments: [
      { label: "task framing", share: 24, tone: "instruction" },
      { label: "facts in view", share: 34, tone: "evidence" },
      { label: "prior turns", share: 24, tone: "memory" },
      { label: "final answer target", share: 18, tone: "task" }
    ]
  },
  cli: {
    objective: "Work against real files, commands, and outputs instead of only a pasted prompt.",
    boomerObjective: "Read the actual file folders and teletype printouts, not just a summary note.",
    visualCaption: "The context window now includes real working artifacts from the environment.",
    boomerCaption: "The desk now holds the real office paperwork, not just a typed request.",
    pressure: 0.82,
    segments: [
      { label: "repo files", share: 34, tone: "evidence" },
      { label: "terminal output", share: 22, tone: "tool" },
      { label: "diffs + tests", share: 24, tone: "memory" },
      { label: "current instruction", share: 20, tone: "task" }
    ]
  },
  agentsmd: {
    objective: "Start from durable project instructions instead of restating norms every session.",
    boomerObjective: "Read the standing office memo before touching today's assignment.",
    visualCaption: "Persistent instruction files reduce repeated setup and stabilize behavior.",
    boomerCaption: "The standing memo keeps local rules handy without repeating them every time.",
    pressure: 0.61,
    segments: [
      { label: "AGENTS.md", share: 24, tone: "instruction" },
      { label: "repo files", share: 30, tone: "evidence" },
      { label: "task request", share: 18, tone: "task" },
      { label: "working history", share: 28, tone: "memory" }
    ]
  },
  mcp: {
    objective: "Request the right external resource at the moment it becomes relevant.",
    boomerObjective: "Ring the records room and ask for the exact folder you need.",
    visualCaption: "Structured tool calls help choose better context rather than stuffing everything in.",
    boomerCaption: "The switchboard fetches the right folder instead of piling every folder on the desk.",
    pressure: 0.69,
    segments: [
      { label: "tool schema", share: 16, tone: "tool" },
      { label: "returned resource", share: 42, tone: "evidence" },
      { label: "task request", share: 20, tone: "task" },
      { label: "chat history", share: 22, tone: "memory" }
    ]
  },
  "skills-plugins": {
    objective: "Begin with a reusable job packet instead of rebuilding workflow context from scratch.",
    boomerObjective: "Start with a prepared office kit instead of an empty desk and guesswork.",
    visualCaption: "Packaged instructions and references front-load the most useful context.",
    boomerCaption: "A good office kit brings the right instruction cards and tools to the desk.",
    pressure: 0.72,
    segments: [
      { label: "skill instructions", share: 24, tone: "instruction" },
      { label: "plugin/tool affordances", share: 16, tone: "tool" },
      { label: "bundled references", share: 34, tone: "evidence" },
      { label: "active task", share: 26, tone: "task" }
    ]
  },
  hooks: {
    objective: "Let automation handle repetitive checks so model attention stays on the real task.",
    boomerObjective: "Let the automatic checklist handle routine checks while the clerk thinks.",
    visualCaption: "Hook outputs matter only when they return short, relevant signals back into context.",
    boomerCaption: "The automatic checker helps when it returns a short useful note, not a pile of forms.",
    pressure: 0.58,
    segments: [
      { label: "task request", share: 22, tone: "task" },
      { label: "repo context", share: 34, tone: "evidence" },
      { label: "hook checks", share: 18, tone: "tool" },
      { label: "policy rules", share: 26, tone: "instruction" }
    ]
  },
  subagents: {
    objective: "Split one overloaded problem into smaller contexts with cleaner handoffs.",
    boomerObjective: "Give several clerks smaller packets instead of burying one clerk in everything.",
    visualCaption: "Subagents are really context management: each worker sees less clutter and a tighter goal.",
    boomerCaption: "The office runs better when each clerk gets a tidy packet and sends back a clean memo.",
    pressure: 0.64,
    segments: [
      { label: "worker brief", share: 22, tone: "instruction" },
      { label: "local files", share: 26, tone: "evidence" },
      { label: "handoff memo", share: 24, tone: "memory" },
      { label: "bounded task", share: 28, tone: "task" }
    ]
  }
};

const elements = {
  conceptGrid: document.getElementById("concept-grid"),
  timelineCards: document.getElementById("timeline-cards"),
  glossaryPanel: document.getElementById("glossary-panel"),
  glossaryLede: document.getElementById("glossary-lede"),
  tokenRack: document.getElementById("token-rack"),
  incomingItems: document.getElementById("incoming-items"),
  overflowItems: document.getElementById("overflow-items"),
  windowRing: document.getElementById("window-ring"),
  orbitLayer: document.getElementById("orbit-layer"),
  windowMeterFill: document.getElementById("window-meter-fill"),
  boomerButton: document.getElementById("boomer-button"),
  heroEyebrow: document.getElementById("hero-eyebrow"),
  heroTitle: document.getElementById("hero-title"),
  heroLede: document.getElementById("hero-lede"),
  boomerLabel: document.getElementById("boomer-label"),
  boomerHint: document.getElementById("boomer-hint"),
  coreEyebrow: document.getElementById("core-eyebrow"),
  coreTitle: document.getElementById("core-title"),
  coreSummary: document.getElementById("core-summary"),
  activeEra: document.getElementById("active-era"),
  incomingLabel: document.getElementById("incoming-label"),
  visualCaption: document.getElementById("visual-caption"),
  windowStageLabel: document.getElementById("window-stage-label"),
  windowStageNote: document.getElementById("window-stage-note"),
  objectiveLabel: document.getElementById("objective-label"),
  objectivePill: document.getElementById("objective-pill"),
  overflowTitle: document.getElementById("overflow-title"),
  modelSeesTitle: document.getElementById("model-sees-title"),
  windowMattersTitle: document.getElementById("window-matters-title"),
  modelSeesCopy: document.getElementById("model-sees-copy"),
  windowMattersCopy: document.getElementById("window-matters-copy"),
  windowStat: document.getElementById("window-stat"),
  tokenStat: document.getElementById("token-stat"),
  closingEyebrow: document.getElementById("closing-eyebrow"),
  closingTitle: document.getElementById("closing-title"),
  closingLede: document.getElementById("closing-lede"),
  closingPoint1Title: document.getElementById("closing-point-1-title"),
  closingPoint1Copy: document.getElementById("closing-point-1-copy"),
  closingPoint2Title: document.getElementById("closing-point-2-title"),
  closingPoint2Copy: document.getElementById("closing-point-2-copy"),
  closingPoint3Title: document.getElementById("closing-point-3-title"),
  closingPoint3Copy: document.getElementById("closing-point-3-copy")
};

const BOOMER_MODE_STORAGE_KEY = "llm-timeline-boomer-mode";
let boomerMode = false;
let activeId = milestones[0].id;
const cardMap = new Map();
let itemSwapTimer;
let scrollTicking = false;
const reducedMotionQuery =
  typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;

function prefersReducedMotion() {
  return reducedMotionQuery ? reducedMotionQuery.matches : false;
}

function loadStoredBoomerMode() {
  try {
    return window.localStorage.getItem(BOOMER_MODE_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function saveStoredBoomerMode() {
  try {
    window.localStorage.setItem(BOOMER_MODE_STORAGE_KEY, String(boomerMode));
  } catch {
    // Ignore storage failures; the toggle still works for the current session.
  }
}

function renderConcepts() {
  elements.conceptGrid.innerHTML = concepts
    .map((concept) => {
      const copy = boomerMode ? concept.boomerText : concept.defaultText;
      return `
        <article class="concept-card" id="concept-${concept.id}">
          <h3>${concept.title}</h3>
          <p>${copy}</p>
        </article>
      `;
    })
    .join("");
}

function cardMarkup(item) {
  const body = boomerMode ? item.boomerBody : item.body;
  const sees = boomerMode ? item.boomerSees : item.sees;
  const windowCopy = boomerMode ? item.boomerWindow : item.window;
  const visual = milestoneVisuals[item.id];
  const tagMarkup = item.glossary
    .map((tag) => `<span class="timeline-card__tag">${tag}</span>`)
    .join("");

  return `
    <p class="timeline-card__era">${item.year} · ${item.era}</p>
    <h3>${item.title}</h3>
    <p class="timeline-card__what-changed">${item.whatChanged}</p>
    <p class="timeline-card__body">${body}</p>
    <div class="timeline-card__objective">
      <p class="timeline-card__objective-label">${
        boomerMode ? "What the clerk is trying to do" : "What the model is trying to do"
      }</p>
      <p class="timeline-card__objective-copy">${
        boomerMode ? visual.boomerObjective : visual.objective
      }</p>
    </div>
    <div class="timeline-card__explainers">
      <article class="timeline-card__explainer">
        <h4>${boomerMode ? "What the machine has on the desk" : "What the model sees"}</h4>
        <p>${sees}</p>
      </article>
      <article class="timeline-card__explainer">
        <h4>${boomerMode ? "Why the desk space matters" : "Why the context window matters"}</h4>
        <p>${windowCopy}</p>
      </article>
    </div>
    <div class="timeline-card__footer">${tagMarkup}</div>
  `;
}

function renderTimeline() {
  elements.timelineCards.innerHTML = "";
  cardMap.clear();

  milestones.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-card";
    article.id = `milestone-${item.id}`;
    article.dataset.milestoneId = item.id;
    article.tabIndex = 0;
    article.setAttribute("aria-label", `${item.year}. ${item.title}`);
    article.innerHTML = cardMarkup(item);
    article.addEventListener("focus", () => activateMilestone(item.id));
    article.addEventListener("mouseenter", () => activateMilestone(item.id));
    elements.timelineCards.appendChild(article);
    cardMap.set(item.id, article);
  });
}

function renderGlossary(item) {
  elements.glossaryPanel.innerHTML = item.glossary
    .map((term) => {
      const definition = glossaryDefinitions[term];
      const copy = definition
        ? boomerMode
          ? definition.boomer
          : definition.default
        : "See the active milestone for the plain-language definition.";

      return `
        <article class="glossary-chip">
          <span class="glossary-chip__term">${term}</span>
          <p class="glossary-chip__copy">${copy}</p>
        </article>
      `;
    })
    .join("");
}

function renderOrbitObjects(item) {
  elements.orbitLayer.innerHTML = item.orbitObjects
    .map(
      (object) => `
        <span
          class="orbit-object"
          style="
            --orbit-x:${object.x};
            --orbit-y:${object.y};
            --orbit-start-x:${object.startX};
            --orbit-start-y:${object.startY};
            border-color:${item.accent}66;
          "
        >${object.label}</span>
      `
    )
    .join("");

  requestAnimationFrame(() => {
    elements.orbitLayer.querySelectorAll(".orbit-object").forEach((object) => {
      object.classList.add("is-visible");
    });
  });
}

function renderTokenRack(item) {
  const visual = milestoneVisuals[item.id];

  elements.tokenRack.innerHTML = visual.segments
    .map(
      (segment) => `
        <div class="window-segment">
          <div class="window-segment__head">
            <span class="window-segment__label">${segment.label}</span>
            <span class="window-segment__value">${segment.share}%</span>
          </div>
          <div class="window-segment__track">
            <div
              class="window-segment__fill window-segment__fill--${segment.tone}"
              style="--segment-width:${segment.share}%"
            ></div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderIncomingItems(item) {
  const visual = milestoneVisuals[item.id];
  const labels = visual.segments.map((entry) => entry.label);

  if (itemSwapTimer) {
    window.clearTimeout(itemSwapTimer);
  }

  elements.incomingItems.querySelectorAll(".context-chip").forEach((chip) => {
    chip.classList.remove("is-visible");
    chip.classList.add("is-exiting");
  });

  if (prefersReducedMotion()) {
    elements.incomingItems.innerHTML = labels
      .map(
        (label) => `
          <span class="context-chip is-visible" style="border-color:${item.accent}55">${label}</span>
        `
      )
      .join("");
    return;
  }

  itemSwapTimer = window.setTimeout(() => {
    elements.incomingItems.innerHTML = labels
      .map(
        (label) => `
          <span class="context-chip" style="border-color:${item.accent}55">${label}</span>
        `
      )
      .join("");

    requestAnimationFrame(() => {
      elements.incomingItems.querySelectorAll(".context-chip").forEach((chip) => {
        chip.classList.add("is-visible");
      });
    });
  }, 140);
}

function renderOverflow(item) {
  elements.overflowItems.innerHTML = item.overflow
    .map((label) => `<span class="overflow-chip">${label}</span>`)
    .join("");
}

function renderUiCopy() {
  const copy = boomerMode ? uiCopy.boomer : uiCopy.default;
  elements.heroEyebrow.textContent = copy.heroEyebrow;
  elements.heroTitle.textContent = copy.heroTitle;
  elements.heroLede.textContent = copy.heroLede;
  elements.boomerLabel.textContent = copy.boomerLabel;
  elements.boomerHint.textContent = copy.boomerHint;
  elements.coreEyebrow.textContent = copy.coreEyebrow;
  elements.coreTitle.textContent = copy.coreTitle;
  elements.coreSummary.textContent = copy.coreSummary;
  elements.incomingLabel.textContent = copy.incomingLabel;
  elements.visualCaption.textContent = copy.incomingCaption;
  elements.windowStageLabel.textContent = copy.windowStageLabel;
  elements.windowStageNote.textContent = copy.windowStageNote;
  elements.objectiveLabel.textContent = copy.objectiveLabel;
  elements.overflowTitle.textContent = copy.overflowTitle;
  elements.modelSeesTitle.textContent = copy.modelSeesTitle;
  elements.windowMattersTitle.textContent = copy.windowMattersTitle;
  elements.glossaryLede.textContent = copy.glossaryLede;
  elements.closingEyebrow.textContent = copy.closingEyebrow;
  elements.closingTitle.textContent = copy.closingTitle;
  elements.closingLede.textContent = copy.closingLede;
  elements.closingPoint1Title.textContent = copy.closingPoints[0].title;
  elements.closingPoint1Copy.textContent = copy.closingPoints[0].body;
  elements.closingPoint2Title.textContent = copy.closingPoints[1].title;
  elements.closingPoint2Copy.textContent = copy.closingPoints[1].body;
  elements.closingPoint3Title.textContent = copy.closingPoints[2].title;
  elements.closingPoint3Copy.textContent = copy.closingPoints[2].body;
}

function updateCardStates() {
  cardMap.forEach((card, id) => {
    card.classList.toggle("is-active", id === activeId);
    card.setAttribute("aria-current", id === activeId ? "true" : "false");
  });
}

function captureViewportAnchor() {
  const activeCard = cardMap.get(activeId);

  if (!activeCard) {
    return null;
  }

  return {
    id: activeId,
    top: activeCard.getBoundingClientRect().top
  };
}

function restoreViewportAnchor(anchor) {
  if (!anchor) {
    queueScrollSync();
    return;
  }

  window.requestAnimationFrame(() => {
    const restoredCard = cardMap.get(anchor.id);

    if (!restoredCard) {
      queueScrollSync();
      return;
    }

    const delta = restoredCard.getBoundingClientRect().top - anchor.top;

    if (Math.abs(delta) > 1) {
      window.scrollBy(0, delta);
    }

    queueScrollSync();
  });
}

function activateMilestone(id) {
  const item = milestones.find((entry) => entry.id === id);
  const visual = milestoneVisuals[id];

  if (!item || !visual) {
    return;
  }

  activeId = id;
  document.body.style.setProperty("--accent", item.accent);
  elements.activeEra.textContent = `${item.year} · ${item.era}`;
  elements.windowRing.style.setProperty("--window-scale", item.windowScale);
  elements.windowMeterFill.style.width = `${Math.round(visual.pressure * 100)}%`;
  elements.windowStat.textContent = `${boomerMode ? "Desk" : "Window"}: ${item.windowLabel}`;
  elements.tokenStat.textContent = `${boomerMode ? "Paper load" : "Token load"}: ${item.tokenLoad}`;
  elements.visualCaption.textContent = boomerMode ? visual.boomerCaption : visual.visualCaption;
  elements.windowStageNote.textContent = boomerMode
    ? `The useful papers take about ${Math.round(visual.pressure * 100)}% of the desk space right now.`
    : `High-value context is using about ${Math.round(visual.pressure * 100)}% of the available window right now.`;
  elements.objectivePill.textContent = boomerMode ? visual.boomerObjective : visual.objective;
  elements.modelSeesCopy.textContent = boomerMode ? item.boomerSees : item.sees;
  elements.windowMattersCopy.textContent = boomerMode ? item.boomerWindow : item.window;

  renderGlossary(item);
  renderOrbitObjects(item);
  renderTokenRack(item);
  renderIncomingItems(item);
  renderOverflow(item);
  updateCardStates();
}

function getClosestMilestoneId() {
  const focusLine = window.innerHeight * 0.42;
  let closestId = milestones[0].id;
  let closestDistance = Number.POSITIVE_INFINITY;

  cardMap.forEach((card, id) => {
    const rect = card.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const distance = Math.abs(center - focusLine);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestId = id;
    }
  });

  return closestId;
}

function syncActiveMilestoneToScroll() {
  const closestId = getClosestMilestoneId();

  if (closestId !== activeId) {
    activateMilestone(closestId);
  }
}

function queueScrollSync() {
  if (scrollTicking) {
    return;
  }

  scrollTicking = true;
  window.requestAnimationFrame(() => {
    scrollTicking = false;
    syncActiveMilestoneToScroll();
  });
}

function syncMode() {
  const anchor = captureViewportAnchor();
  document.body.classList.toggle("boomer-mode", boomerMode);
  elements.boomerButton.setAttribute("aria-pressed", String(boomerMode));
  renderUiCopy();
  renderConcepts();
  renderTimeline();
  activateMilestone(activeId);
  restoreViewportAnchor(anchor);
}

elements.boomerButton.addEventListener("click", () => {
  boomerMode = !boomerMode;
  saveStoredBoomerMode();
  syncMode();
});

boomerMode = loadStoredBoomerMode();
renderUiCopy();
renderConcepts();
renderTimeline();
activateMilestone(activeId);
window.addEventListener("scroll", queueScrollSync, { passive: true });
window.addEventListener("resize", queueScrollSync);
