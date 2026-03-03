# Quickstart Guide: 002-drag-drop-reorder

This is the manual test Quickstart corresponding to the 002 drag-and-drop feature.

1. Ensure the application is actively running via `npm run dev`.
2. Add at least three unique tasks via the input field (e.g., "Task 1", "Task 2", "Task 3").
3. Click and hold on a task row. You should see a visual indication that the row is grabbed (e.g., elevated shadow).
4. Drag the task row down over the subsequent tasks. The surrounding tasks should smoothly slide out of the way to make room.
5. Release the mouse (Drop) when the task is in a new position. Verify the array order physically changes.
6. Verify edge case safety: Click the 'Active' filter. The ability to grab/drag rows should be visibly halted or simply not function, preventing index desyncs.
7. Return to 'All'. Reload the browser (`Cmd+R`). Confirm that your custom drag-and-drop sequence persisted perfectly.
