---
description: "Task list for Drag and Drop Reordering feature implementation"
---

# Tasks: Drag and Drop Reordering

**Input**: Design documents from `/specs/002-drag-drop-reorder/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic dependencies for the new feature

- [x] T001 Install `@hello-pangea/dnd` dependency for drag-and-drop interactions

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core logic and state infrastructure that MUST be complete before UI can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 Update `useTodos` in `src/hooks/useTodos.ts` to include a `reorderTodos(startIndex, endIndex)` function that splices the `todos` array.
- [x] T003 Update `useTodos` in `src/hooks/useTodos.ts` to prevent reordering if `filter !== 'All'`.

**Checkpoint**: Infrastructure ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Drag and Drop to Reorder Tasks (Priority: P1) 🎯 MVP

**Goal**: Users can drag and drop their tasks to manually reorder them, both from top to bottom and bottom to top.

**Independent Test**: Can be fully tested by grabbing a task item, dragging it to a different position in the list, and dropping it. The list should update visually and the new order should persist on reload.

### Implementation for User Story 1

- [x] T004 [US1] Update `TodoItem.tsx` in `src/components/TodoItem.tsx` to accept drag references and properties (Draggable) and style grab interactables.
- [x] T005 [US1] Update `TodoList.tsx` in `src/components/TodoList.tsx` to wrap items in `Droppable` and `Draggable` components from `@hello-pangea/dnd`.
- [x] T006 [US1] Update `page.tsx` in `src/app/page.tsx` to wrap the list in `DragDropContext` and handle the `onDragEnd` event to call `reorderTodos`.
- [x] T007 [US1] Update `page.tsx` in `src/app/page.tsx` or `TodoList` to disable drag features visually/functionally if the current filter is not 'All'.

**Checkpoint**: At this point, User Story 1 should be fully functional (drag and drop changes array order and visually updates).

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect the feature overall

- [x] T008 [P] Verify edge case: dragging outside droppable boundaries snaps back without altering order.
- [x] T009 Run manual validation steps exactly as outlined in `specs/002-drag-drop-reorder/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2).

### Parallel Opportunities

- Hooks logic (`T002`, `T003`) can be built in parallel with basic UI wrapping (`T004`, `T005`).

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (`@hello-pangea/dnd` installation)
2. Complete Phase 2: Foundational state logic
3. Complete Phase 3: User Story 1 (`DragDropContext` integration)
4. **STOP and VALIDATE**: Test User Story 1 independently using the quickstart guide.
