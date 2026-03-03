---
description: "Task list for Todo List feature implementation"
---

# Tasks: Todo List

**Input**: Design documents from `/specs/001-todo-list/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/schema.ts

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Next.js 15 project with Tailwind CSS v4 and React 19 in `/`
- [x] T002 [P] Install `lucide-react` for iconography
- [x] T003 [P] Configure project folder structure as defined in `plan.md` (`src/app`, `src/components`, `src/hooks`, `src/lib`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create types definition file matching `contracts/schema.ts` in `src/lib/types.ts`
- [x] T005 Implement `localStorage` interaction unit `getTodos` and `setTodos` in `src/lib/storage.ts`
- [x] T006 [P] Configure Tailwind `dark` mode and global styles in `src/app/globals.css`
- [x] T007 [P] Create minimalistic base layout honoring dark mode in `src/app/layout.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Add Todo Item (Priority: P1) 🎯 MVP

**Goal**: Users can add new items to their todo list.

**Independent Test**: Type into a new item input, verify it appears in the list.

### Implementation for User Story 1

- [x] T008 [US1] Create custom hook `useTodos` to manage state array of `TodoItem`s in `src/hooks/useTodos.ts`
- [x] T009 [US1] Integrate `useTodos` with `storage.ts` to hydrate on mount and persist on change
- [x] T010 [P] [US1] Build pure UI component `TodoInput.tsx` in `src/components/TodoInput.tsx`
- [x] T011 [P] [US1] Build pure UI component `TodoItem.tsx` (display text only) in `src/components/TodoItem.tsx`
- [x] T012 [P] [US1] Build pure UI component `TodoList.tsx` in `src/components/TodoList.tsx`
- [x] T013 [US1] Integrate `TodoInput.tsx` and `TodoList.tsx` inside `src/app/page.tsx` using `useTodos` hook

**Checkpoint**: At this point, User Story 1 should be fully functional (can add items and persist).

---

## Phase 4: User Story 2 - Toggle Completion Status (Priority: P1)

**Goal**: Users can mark todo items as completed or active.

**Independent Test**: Clicking a checkbox on an item changes its visual state.

### Implementation for User Story 2

- [x] T014 [P] [US2] Add `toggleTodo` function to `useTodos` hook in `src/hooks/useTodos.ts`
- [x] T015 [P] [US2] Update `TodoItem.tsx` to include a clickable checkbox using Lucide icons in `src/components/TodoItem.tsx`
- [x] T016 [US2] Wire `toggleTodo` functionality directly to `TodoItem.tsx` instances rendered in `src/components/TodoList.tsx`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Delete Todo Item (Priority: P2)

**Goal**: Users can delete items from their list.

**Independent Test**: Clicking a delete button next to an item removes it permanently.

### Implementation for User Story 3

- [x] T017 [P] [US3] Add `deleteTodo` function to `useTodos` hook in `src/hooks/useTodos.ts`
- [x] T018 [P] [US3] Update `TodoItem.tsx` to include a delete icon/button using Lucide icons in `src/components/TodoItem.tsx`
- [x] T019 [US3] Wire `deleteTodo` functionality directly to `TodoItem.tsx` instances rendered in `src/components/TodoList.tsx`

**Checkpoint**: Items can now be deleted and persistence is maintained.

---

## Phase 6: User Story 4 - Filter Todo Items (Priority: P2)

**Goal**: Users can filter lists to show 'All', 'Active', or 'Completed'.

**Independent Test**: Selecting different filter options updates visible items.

### Implementation for User Story 4

- [x] T020 [P] [US4] Update `useTodos` hook to accept and expose the current `FilterConfig` state in `src/hooks/useTodos.ts`
- [x] T021 [P] [US4] Add a filtered getter inside `useTodos` that returns items matching the current filter in `src/hooks/useTodos.ts`
- [x] T022 [P] [US4] Build pure UI component `FilterBar.tsx` in `src/components/FilterBar.tsx`
- [x] T023 [US4] Integrate `FilterBar.tsx` into `src/app/page.tsx`, passing filter state and setter
- [x] T024 [US4] Update `TodoList.tsx` in `src/app/page.tsx` to use the filtered array returned by `useTodos`

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T025 [P] Verify edge cases: preventing empty inputs and duplicate UI states across all components
- [x] T026 Check application performance footprint (ensure <100ms UI interactions)
- [x] T027 Run manual validation steps exactly as outlined in `specs/001-todo-list/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User Story 1 (P1 MVP) logically blocks full end-to-end testing of US2, US3, US4, but component scaffolding runs can theoretically occur in parallel. Sequentially (US1 → US2 → US3 → US4) is recommended.
- **Polish (Phase 7)**: Depends on all user stories being complete

### Parallel Opportunities

- In **Phase 3**, UI components (`TodoInput.tsx`, `TodoItem.tsx`, `TodoList.tsx`) can be scaffolded fully in parallel via mocked data arrays before they are wired into `page.tsx`.
- The core data hook (`useTodos`) and the pure presentation layer (`src/components/*`) have explicit separation making them great candidates for parallelization.

### Implementation Strategy

#### MVP First

1. Complete Phase 1 & 2.
2. Complete Phase 3 (US1).
3. STOP and TEST independent MVP adding behavior.
4. Progress to US2, US3, US4 sequentially to validate each sub-feature against local persistence.
