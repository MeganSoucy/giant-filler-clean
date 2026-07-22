# Project Roadmap

## Milestone 1 — Complete

- Repository and project structure
- React and Vite application
- JavaScript and regular CSS setup
- Git and GitHub workflow
- Development server
- Lint command
- Production build command

## Milestone 2 — In Progress

### Completed

- Removed the Vite starter interface
- Added a responsive random 24 × 24 board with 576 tiles
- Added the six-colour palette
- Represented tiles as objects containing `color` and `owner`
- Added `PLAYER_ONE` and `PLAYER_TWO` constants
- Assigned Player 1 to the top-left starting tile
- Assigned Player 2 to the bottom-right starting tile
- Prevented identical starting colours
- Added visible Player 1 and Player 2 panels
- Added six visual colour buttons for each player
- Added vertical desktop colour columns
- Added mobile controls above and below the board
- Added Player 1 and Player 2 corner markers
- Enlarged the responsive board
- Positioned player panels close to opposite board corners
- Kept ESLint passing
- Kept the Vite production build passing

The colour buttons are currently visual only, and the board is not yet stored in React state. Turns and capture logic are not implemented.

### Next Tasks

1. Move the board into React state.
2. Track the active player.
3. Track each player's current colour.
4. Connect each player's colour buttons to move handling.
5. Reject illegal colour selections.
6. Recolour all tiles owned by the active player.
7. Implement breadth-first connected-region capture.
8. Alternate turns after legal moves.
9. Calculate tile counts and percentages.
10. Detect when no unclaimed tiles remain.
11. Display the winner or tie.
12. Add New Game behaviour.
13. Test starting-board fairness.
14. Test rule regressions and responsive behaviour.

## Milestone 3 — Stability and Polish — Not Started

- Expand automated and manual regression coverage.
- Refine accessibility announcements and keyboard interaction.
- Validate responsive layout across supported viewport sizes.
- Improve error handling, game feedback, and presentation.
- Confirm fair New Game behavior over repeated random boards.

## Milestone 4 — Optional Modes — Not Started

- Timed-turn mode with an approximately 10–15 second limit and automatic turn passing
- Beginner valid-move mode based on colours touching the active player's territory
- Additional accessibility refinements, including friendly colour names

## Deferred: Online Multiplayer

Online multiplayer remains deferred until the local game is stable. Architecture, hosting, server, database, account, security, synchronization, cost, and maintenance requirements must be discussed before implementation.
