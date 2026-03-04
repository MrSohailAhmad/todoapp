# Research: Update Button Colors

**Feature**: Update Button Colors
**Date**: 2026-03-04

## Unknowns/Dependencies

The technical context requires utilizing Tailwind CSS classes in a React (Next.js 15) and minimalist dark-mode focused UI. No major unknowns were marked, but the specific color palette decisions need to be finalized based on the project constitution's minimalist guidelines.

## Color Scheme Selection

### Decision: Tailwind CSS Color Palette

- **Add Button (Success)**: Use the `green` or `emerald` palette to signify correct / positive actions. Specifically `bg-emerald-600 hover:bg-emerald-500` for good contrast against dark backgrounds.
- **Delete Button (Danger)**: Use the `red` or `rose` palette for destructive actions. `bg-red-600 hover:bg-red-500` will quickly communicate danger.
- **Goal Items (Distinct Color)**: Differentiate from standard items with `blue` or `indigo` accents. Using border styles or specific background highlights like `bg-indigo-900 border-indigo-700` helps goals stand out without breaking the minimalist dark mode aesthetic.
- **Text Color**: Use `text-white` or `text-gray-100` on strongly colored buttons to ensure WCAG AA accessible contrast limits are met.

### Rationale

Using built-in Tailwind colors ensures consistency, avoids custom CSS logic, and cleanly operates within the constraints of the constitution. A minimalist UI doesn't mean monochrome; it means purposeful, semantic uses of color where a success (green) or danger (red) indication provides maximum legibility and reduced cognitive load.

### Alternatives Considered

- **Custom Hex Codes**: Rejected since standardizing on Tailwind's default palette maintains simpler code and reliable accessibility contrast checks.
- **Border-only Colors (Outline Buttons)**: While minimalist, filled buttons for primary actions ("Add") and destructive actions ("Delete") afford a stronger hierarchical visual weight. We will reserve outlines for secondary actions if needed, or use a distinctive layout for Goals.
