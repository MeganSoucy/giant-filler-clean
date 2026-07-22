# Changelog

## Unreleased

### Added

- A responsive random 24 × 24 board containing 576 tiles.
- The six-colour red, orange, yellow, green, blue, and purple palette.
- Tile objects with `color` and `owner` fields.
- `PLAYER_ONE` and `PLAYER_TWO` ownership constants.
- Player 1 ownership of the top-left starting tile and Player 2 ownership of the bottom-right starting tile.
- Starting-colour protection so the two players never begin with the same colour.
- Visible Player 1 and Player 2 panels with six accessible, square colour buttons per player.
- Vertical colour-button columns on desktop and compact controls above and below the board on mobile.
- Visible `1` and `2` markers on the players' corner starting tiles.

### Changed

- Enlarged the responsive board so individual tiles are easier to see.
- Positioned the player panels close to opposite corners of the board while preserving a no-clipping mobile layout.
- Removed the Vite starter interface in favour of the game board and player-control layout.

### Validation

- ESLint passes with `npm --prefix client run lint`.
- The Vite production build passes with `npm --prefix client run build`.

### Current Limitations

- The colour buttons are visual only and do not handle selections.
- The board is not stored in React state.
- Active-player tracking, player colour tracking, turn alternation, illegal-move blocking, recolouring, breadth-first connected-region capture, scoring, tile percentages, end-game detection, winner or tie display, New Game behaviour, and fairness testing are not implemented yet.
