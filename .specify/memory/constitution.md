<!-- Sync Impact Report
Version Change: 0.0.0 -> 1.0.0
Modified Principles: None -> Stack, State, Persistence, Design System
Added Sections: Core Principles, Technical Stack & Architecture, Development Workflow
Removed Sections: None
Modified Templates:
  - .specify/templates/plan-template.md: ✅ updated
  - .specify/templates/spec-template.md: ✅ updated
  - .specify/templates/tasks-template.md: ✅ updated
  - .specify/templates/checklist-template.md: ✅ updated
TODOs: None
-->

# TodoApp Constitution

## Core Principles

### I. Simplicity in State Management

State must be managed using built-in React hooks (`useState`, `React Context`) unless complex requirements force an abstraction. External state management libraries (like Redux, Zustand) MUST NOT be introduced without strict justification.

### II. Local-First Persistence

All user data MUST initially be persisted in `localStorage`. The architecture SHOULD allow easy migration to an external database in the future, but the current immediate constraint is local execution.

### III. Aesthetic and Minimalist Design

The user interface MUST adhere to a "clean minimalist UI" philosophy. Dark mode MUST be the default theme. Components should favor ample whitespace, clear typography, and minimalistic structural boundaries.

### IV. Component-Driven UI

All visual elements MUST be constructed primarily with Tailwind CSS utility classes and Lucide Icons for iconography. Custom CSS should be avoided unless absolutely necessary for complex animations or overrides not solvable with Tailwind.

## Technical Stack & Architecture

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Iconography**: Lucide Icons
- **State Management**: React `useState`
- **Data Persistence**: `localStorage`

## Development Workflow

1. Functionality precedes abstraction. Get it working with basic React functionality before generalizing.
2. UI components must be responsive and respect the dark mode default setting upon initial load.

## Governance

This Constitution supersedes all other documentation.
Amendments require documentation, reasoning, and version bumps.
All PRs and modifications must verify compliance against these rules.

**Version**: 1.0.0 | **Ratified**: 2026-03-03 | **Last Amended**: 2026-03-03
