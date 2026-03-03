# Implementation Plan: Drag and Drop Reordering

**Branch**: `002-drag-drop-reorder` | **Date**: 2026-03-03 | **Spec**: [specs/002-drag-drop-reorder/spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-drag-drop-reorder/spec.md`

## Summary

Add drag-and-drop capability to the existing `TodoList` component, allowing users to reorder tasks manually. The drag-and-drop interactions will be powered by a modern React library (determined in research), ensuring smooth 60fps animations. The new sequence will update the global state and automatically persist to `localStorage`.

## Technical Context

**Language/Version**: TypeScript / Node.js
**Primary Dependencies**: Next.js 15, React 19, Tailwind CSS v4, Lucide React, @hello-pangea/dnd
**Storage**: Web `localStorage`
**Testing**: Manual testing based on spec independent tests
**Target Platform**: Web Browser
**Project Type**: Web Application
**Performance Goals**: Interactions (like toggling state or filtering) in < 100ms; Dragging at smooth 60fps.
**Constraints**: Runs entirely in the client browser, strictly local execution without a database, defaults to Dark Mode
**Scale/Scope**: Small monolithic application interface

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- [x] Simplicity in State Management: Uses React useState, lacks unapproved external stores. (Will integrate sorting logically with existing state).
- [x] Local-First Persistence: Stores data via localStorage; external DB requires explicit user request.
- [x] Aesthetic Design: Minimalist UI, Dark mode default, Tailwind CSS, Lucide Icons.

## Project Structure

### Documentation (this feature)

```text
specs/002-drag-drop-reorder/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   └── TodoInput.tsx (unchanged but relevant)
├── hooks/
│   └── useTodos.ts
└── lib/
```

**Structure Decision**: The drag-and-drop logical wrappers will be contained within `TodoList.tsx` and `TodoItem.tsx`. The global sort mechanism will be exposed by `useTodos.ts`. No major architectural restructuring is needed.

## Complexity Tracking

> No violations of Constitution Check.
