# Project Style Guide

## Working Approach

- Keep changes beginner-friendly, small, targeted, and easy to review.
- Prefer the simplest implementation that meets the current milestone.
- Avoid unrelated refactors and unnecessary libraries.
- Preserve existing behavior unless a task explicitly changes it.
- Verify changes with lint and production build commands.

## File Responsibilities

- `client/src/App.jsx`: React rendering, event wiring, and state coordination.
- `client/src/App.css`: Game interface styling and responsive layout.
- `client/src/board.js`: Board constants, tile creation, and board-related game logic.
- `client/src/index.css`: Global element styling and application-wide defaults.

Keep responsibilities separated. Board algorithms should not be hidden in presentation markup, and component-specific layout rules should not be moved into global CSS.

## JavaScript Conventions

- Use modern JavaScript with `const` by default and `let` only when reassignment is required.
- Use descriptive names for players, tiles, rows, columns, colours, ownership, and game state.
- Export shared constants instead of duplicating values.
- Keep functions focused and small enough to understand easily.
- Prefer pure functions for board transformations and calculations.
- Avoid hidden mutation. When a function intentionally mutates newly created local data, keep that scope explicit.
- Handle invalid input and illegal moves deliberately rather than relying on incidental behavior.

## React Conventions

- Use function components.
- Keep rendering declarative.
- Store changing game data in React state.
- Treat React state as immutable: create new arrays, rows, tiles, and objects rather than modifying existing state in place.
- Keep derived values such as counts and percentages derived from current state unless caching is justified.
- Pass explicit props and use stable keys.
- Use real button elements for actions and always set `type="button"` when the button should not submit a form.
- Do not add state before behavior requires it, but move the board into state before implementing moves.

## CSS and Responsive-Layout Conventions

- Use regular CSS and meaningful class names.
- Keep the board square and responsive.
- Prevent horizontal scrolling and clipping at supported viewport sizes.
- Keep desktop player panels near opposite board corners.
- Stack controls above and below the board when side-by-side space is insufficient.
- Maintain comfortable touch targets on mobile.
- Use media queries for meaningful layout changes rather than device-specific styling.
- Preserve visible keyboard focus and support reduced-motion preferences when animation is introduced.
- Avoid duplicating palette values in CSS when JavaScript already supplies tile and button colours.

## Accessibility Conventions

- Use semantic HTML whenever possible.
- Give every interactive control an accessible name.
- Prefer friendly colour names in user-facing and assistive announcements; hexadecimal labels are temporary.
- Keep keyboard focus visible and navigation order logical.
- Do not rely on colour alone to communicate ownership, active player, legality, scores, or results.
- Announce illegal moves, turn changes, captures, scores, and game-over results when those features are implemented.
- Maintain sufficient text, control, and focus-indicator contrast.

## Game-Logic Conventions

- Keep the 24 × 24 board dimensions and six-colour palette centralized in `board.js`.
- Represent every tile with `color` and `owner` fields.
- Use ownership constants consistently.
- Validate a move before changing board or turn state.
- Block selection of the opponent's current colour.
- Recolour all tiles owned by the active player as one immutable update.
- Use breadth-first search or equivalent connected-region logic for capture.
- Capture only eligible orthogonally connected unclaimed tiles.
- Alternate turns only after a legal move completes.
- Derive tile counts, percentages, and end-game status from the board.
- Keep random starting-board generation testable and reasonably fair.

## Git Workflow

- Inspect `git status` and the relevant diff before editing.
- Keep commits focused on one coherent change.
- Run lint, build, and `git diff --check` before committing.
- Review the complete diff for accidental changes.
- Use clear imperative commit messages.
- Do not commit generated build output unless the repository explicitly requires it.
- Do not push or rewrite history without explicit authorization.

## Documentation Updates

- Update the changelog, development log, design document, roadmap, ideas, and style guide when project state or decisions change.
- Use exact dates for dated development-log entries.
- Separate implemented functionality from planned or optional work.
- Record validation results and known limitations accurately.
- Keep Git checkpoint references current.
- Never describe visual-only controls or planned gameplay rules as implemented.
