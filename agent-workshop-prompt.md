# Prompt for Google AI Studio: Agent Workshop Application

## System Prompt

You are an expert full-stack developer tasked with building "Agent Workshop" — an interactive application for creating and managing AI agent memory systems. The app should feel modern, polished, and "vibe-native" with a dark theme, glass morphism effects, and smooth animations.

## Application Overview

Build a web application called "Agent Workshop" that guides users through creating comprehensive AI agent memory files through an interview-style onboarding experience. The app should automatically generate, scaffold, and preview agent memory systems.

## Core Features to Implement

### 1. Interview-Style Onboarding Flow

Create a multi-step wizard with the following questions (one per screen):

**Question 1: Identity**
- "What's this agent's name and role?"
- Input field with placeholder examples:
  - "Alfie Solomons — Business consigliere"
  - "The Chef — Task master"
  - "Gizmo — Deployment specialist"

**Question 2: Service**
- "Who does this agent serve?"
- Input for human profile (name, role, preferences)

**Question 3: Organization**
- "What organization do they belong to?"
- Input for company/project context

**Question 4: Responsibilities**
- "What are their core responsibilities?"
- Multi-line text area with bullet point support

**Question 5: Tools**
- "What tools do they need?"
- Checkbox/multi-select for common tools:
  - Git operations
  - File system access
  - Web browsing
  - API integrations
  - Database queries
  - Code execution

**Question 6: Communication Style**
- "How do they communicate?"
- Sliders/toggles for:
  - Formality (Casual ↔ Professional)
  - Verbosity (Concise ↔ Detailed)
  - Technical depth (Simple ↔ Technical)

**Question 7: Coordination**
- "What other agents do they coordinate with?"
- Multi-select or add custom agent names

**Question 8: Boundaries**
- "What boundaries do they have?"
- Multi-line text area for limitations, constraints

### 2. Template Library System

Implement agent type templates with pre-configured defaults:

| Type | Template Name | Default Files |
|------|---------------|---------------|
| Technical | Developer/Engineer | persona.md, skills/tools.md, context/tech.md |
| Business | Consigliere/Strategist | persona.md, context/organization.md, goals/ |
| Operational | Task Master/Coordinator | persona.md, work/queue.md, skills/ |
| Creative | Content/Marketing | persona.md, preferences/style.md, context/brand.md |
| Research | Analyst/Investigator | persona.md, context/domain.md, skills/research.md |

When user selects a template, auto-populate interview answers with sensible defaults.

### 3. Context Injection Panel

After interview, show a panel for automated context injection:

**Sources to offer:**
- Organization soul.md (mission, values, priorities)
- Existing agents (coordination context)
- Project documentation (technical context)
- Notion/Linear integration (active projects)
- Git history analysis (codebase patterns)

For each source, show checkboxes:
```
☐ Mission and values
☐ Current priorities
☐ Agent architecture
☐ Key projects
```

### 4. Memory Scaffolding Preview

Generate and display the directory structure:

```
system/
├── persona.md          # Identity, personality, communication style
├── human.md            # Who they serve
├── organization.md     # Company/project context
├── context/
│   ├── domain.md       # Domain-specific knowledge
│   ├── projects.md     # Active projects
│   └── coordination.md # Other agents, handoffs
├── goals/
│   └── current.md      # Active objectives
├── work/
│   ├── active.md       # Current task
│   └── queue.md        # Pending work
├── preferences/
│   ├── communication.md
│   └── boundaries.md
├── skills/
│   └── tools.md        # Available tools
└── history/
    └── sessions.md     # Session logs
```

### 5. File Preview & Editor

Show generated files in a split-pane interface:

**Left pane:** File tree with line counts
**Right pane:** Markdown preview with syntax highlighting

Each file should have:
- [Edit] button to modify content
- [Regenerate] button to recreate from template
- [Delete] button to remove file

**Bottom actions:**
- [Generate All] — Create all files
- [Download ZIP] — Export as archive
- [Push to Letta] — Sync to memory system (mock this)

### 6. Enhance Existing Agent Mode

Add a mode to analyze and enhance existing agents:

1. Dropdown to select existing agent
2. Analyze current memory files
3. Identify gaps (missing files, sparse content)
4. Suggest enhancements based on:
   - Organization soul.md
   - Other agents' memory
   - Project documentation
5. Generate missing/incomplete files

## Design Requirements

### Visual Style
- **Theme:** Dark mode with glass morphism
- **Colors:**
  - Background: `#030712` (slate-950)
  - Cards: `rgba(255, 255, 255, 0.05)` with backdrop blur
  - Borders: `rgba(255, 255, 255, 0.1)`
  - Accents: Sky-400, Emerald-400, Violet-400
  - Text: Slate-50 (primary), Slate-400 (secondary)

### Components
- Use shadcn/ui components (Button, Card, Input, Textarea, Select, Checkbox, Slider)
- Glass panel effect: `backdrop-blur-xl bg-white/5 border border-white/10`
- Smooth transitions: `transition-all duration-300`
- Hover effects: `hover:bg-white/10 hover:border-white/20`

### Layout
- Responsive design (mobile-first)
- Centered wizard with max-width 2xl
- Progress indicator at top
- Smooth step transitions (fade/slide)

### Animations
- Step transitions: Fade out/in
- File generation: Progress spinner
- Success states: Checkmark animation
- Hover states: Subtle scale/glow

## Technical Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **State:** React hooks (useState, useReducer)
- **Markdown:** react-markdown for preview
- **Icons:** Lucide React

## Example User Flow

1. User lands on homepage with hero section
2. Clicks "Create New Agent" or "Enhance Existing"
3. If new: Select template type (optional) or start fresh
4. Progress through 8 interview questions
5. Review context injection options
6. Preview generated memory structure
7. Edit individual files as needed
8. Download ZIP or push to Letta
9. See success confirmation with next steps

## Success Criteria

The app should:
- Feel polished and professional
- Guide users smoothly through the process
- Generate valid, well-structured markdown files
- Provide meaningful defaults based on template selection
- Allow easy customization before final generation
- Work responsively on mobile and desktop
- Have smooth animations and transitions
- Use proper TypeScript types throughout
- Follow accessibility best practices

## Additional Notes

- Mock the Letta integration (show success message)
- Include example outputs in comments
- Add tooltips for complex fields
- Provide "Skip" option for non-required questions
- Show progress percentage in header
- Add "Back" button to revisit previous steps
- Include keyboard navigation (Enter to continue)
- Save progress to localStorage (resume later)

---

## Implementation Prompt

"Build the Agent Workshop application as described above. Start with the project structure, then implement the interview wizard, followed by the preview/editor interface. Focus on creating a smooth, delightful user experience with proper TypeScript types, responsive design, and polished animations. Use the specified tech stack and design system."
