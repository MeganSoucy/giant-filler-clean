# Giant Filler Clean — Game Design Document

## Project Overview

Giant Filler Clean is a local two-player territory-capture game inspired by Filler. Players expand from opposite corners by choosing colours and capturing connected regions. The initial scope is a reliable, responsive local game with clear rules, scoring, and end-game feedback.

## Technology

- Windows development environment
- PowerShell command line
- React user interface
- Vite development and production tooling
- JavaScript
- Regular CSS
- No unnecessary libraries

## Board and Starting Positions

- The board is 24 × 24, for a total of 576 tiles.
- Every tile contains a colour and an owner.
- Unclaimed tiles have no owner.
- Player 1 starts on the top-left tile.
- Player 2 starts on the bottom-right tile.
- The two starting tiles must never begin with the same colour.

## Colours

The palette contains six colours:

- Red
- Orange
- Yellow
- Green
- Blue
- Purple

## Turn and Capture Rules

1. Player 1 and Player 2 alternate turns.
2. On a turn, the active player selects a colour.
3. Every tile already owned by that player changes to the selected colour.
4. Connected unclaimed tiles of the selected colour are captured for that player.
5. Capture must use breadth-first search or equivalent connected-region logic so only orthogonally connected eligible tiles are captured.
6. A legal move completes before the active player changes.

## Illegal-Move Rules

- A player cannot select the opponent's current colour.
- Any selection that violates the game rules must be blocked.
- Illegal moves must not recolour tiles, capture territory, or advance the turn.

## Scoring

- Display each player's owned-tile count.
- Display each player's percentage of the 576-tile board.
- Counts and percentages must update after every legal move.

## End-Game Rules

- The game ends when no unclaimed tiles remain.
- The player owning more tiles wins.
- Equal tile counts produce a tie.
- The winner or tie must be displayed clearly.
- A New Game action must create a fresh valid board and reset all game state.

## Starting-Board Fairness

Starting boards must be reasonably fair. The players must begin with different colours, and testing should check for severe starting-position or reachable-region imbalances without requiring every random board to be perfectly symmetrical.

## Interface Requirements

- Keep the board centred and responsive.
- Show Player 1 near the board's top-left area and Player 2 near its bottom-right area on desktop.
- Show six accessible square colour controls for each player.
- Stack Player 1 controls above and Player 2 controls below the board on small screens.
- Keep the full board visible without horizontal scrolling or clipping.
- Clearly mark the two starting tiles.
- Keep controls comfortably tappable on mobile.
- Display active player, current colours, scores, percentages, end-game result, and New Game control when those systems are implemented.

## Implemented Status

- Random responsive 24 × 24 board and six-colour palette
- Tile objects containing `color` and `owner`
- Player ownership constants
- Opposite-corner starting ownership
- Different starting colours for the two players
- Responsive Player 1 and Player 2 panels
- Six accessible visual colour buttons per player
- Vertical desktop controls and stacked mobile controls
- Visible `1` and `2` starting-tile markers
- Enlarged board with panels positioned close to opposite corners
- Passing ESLint and Vite production build

## Unimplemented Status

- React state for the board
- Active-player tracking
- Current-colour tracking
- Functional colour selection
- Illegal-move validation
- Owned-tile recolouring
- Breadth-first connected-region capture
- Turn alternation
- Tile counts and percentages
- End-game detection
- Winner or tie display
- New Game behaviour
- Starting-board fairness and rule-regression tests

The current colour buttons are visual only. No turn or capture behavior should be described as working yet.

## Current Scope

The current scope is local two-player play. Online multiplayer is excluded until the local game is stable. Any future online work requires an explicit architecture discussion covering hosting, server responsibilities, persistent storage or database needs, accounts, security, synchronization, and operating cost.
