# Feature Research: Drag and Drop Reordering

## Technical Analysis

Based on the specifications, the application requires a smooth, 60fps drag-and-drop React interface capable of securely updating a global sort sequence without causing unnecessary component re-renders. We need to select the optimal dependency.

### Drag and Drop Library (Needs Clarification Resolved)

- **Decision**: `@hello-pangea/dnd` (A modern, maintained fork of `react-beautiful-dnd`).
- **Rationale**: It perfectly aligns with Next.js 15 (React 19) expectations, is extremely accessible, has built-in auto-scrolling, is purely declarative, and integrates smoothly over standard lists without forcing a heavy abstraction layer like `dnd-kit` might, nor relying on the buggy raw HTML5 API.
- **Alternatives Considered**:
  - `@dnd-kit/core`: Powerful but requires assembling many sub-primitives (Sensors, Collision detection) that adds unnecessary complexity given our minimalist Constitution.
  - Raw HTML5 Drag and Drop API: Highly inconsistent across browsers; lacks built-in animation primitives resulting in jittery DOM updates that violate the 60fps SC constraint.
  - `react-beautiful-dnd`: Abandoned by Atlassian, causes Strict Mode warnings in React 18+.

### Filtering Conflicts

- **Decision**: Disable drag-and-drop while any list filter aside from 'All' is active.
- **Rationale**: If a user drags an 'Active' task below another 'Active' task while filtering, its actual position in the underlying mixed 'All' array becomes highly ambiguous. Disabling interaction on filtered views is the industry standard approach for list sorting and prevents data corruption while adhering to our simplicity principles.

**Conclusion**: We will proceed with installing `@hello-pangea/dnd` as our single feature addition and update `plan.md` mentally to reflect this resolved framework constraint.
