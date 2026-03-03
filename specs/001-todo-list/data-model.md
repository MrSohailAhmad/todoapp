# Data Model: Todo List

## Primary Entities

### 1. TodoItem

The core entity representing a user's task.

- `id`: `string`
  - A unique identifier for the task, typically a randomly generated UUID or a timestamp string.
- `text`: `string`
  - The textual description of the task entered by the user. Must not be empty.
- `completed`: `boolean`
  - The state of the task, either `false` (Active) or `true` (Completed).
- `createdAt`: `number`
  - Timestamp (epoch) used to sort items chronologically.

---

## State Validation and Transitions

- **Creation**: When a `TodoItem` is created, `completed` starts as `false`. `text` must have length > 0.
- **Completion Toggle**: The user interaction switches `completed` `true <-> false`.
- **Filtering**: Filters aren't stored properties of a `TodoItem` but evaluated on-the-fly against the global app state. The available global filter views are:
  - `All`: Matches all items.
  - `Active`: Matches `completed === false`.
  - `Completed`: Matches `completed === true`.
- **Destruction**: Tasks are deleted by matching their `id` property from the source array.
