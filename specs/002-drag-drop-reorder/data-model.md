# Data Model: Drag and Drop Reordering

## Primary Entities

### 1. TodoItem (Updates)

The structure of the `TodoItem` entity (`id`, `text`, `completed`, `createdAt`) defined in `001-todo-list` remains completely unchanged.

## State Validation and Transitions

- **Reordering (Sequence Updates)**:
  The absolute sequence of tasks is dictated by the exact element index inside the `TodoItem[]` global state array.
  When the drag ends successfully, the source element is spliced out of its original `startIndex` and spliced back into the destination `endIndex`.
- **Constraint Handling (Filters)**:
  Any request to run the splice-sort routine (`reorderTodos`) should be silently ignored (or visually disabled) if the current UI filter is not set to `All`.
