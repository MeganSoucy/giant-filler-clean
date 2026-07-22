export const BOARD_SIZE = 24

// The first board uses only these six tile colors.
export const TILE_COLORS = [
  '#ef4444',
  '#f97316',
  '#facc15',
  '#22c55e',
  '#3b82f6',
  '#a855f7',
]

function getRandomTileColor() {
  // Pick one color position from the six-color palette.
  const colorIndex = Math.floor(Math.random() * TILE_COLORS.length)

  return TILE_COLORS[colorIndex]
}

export function createRandomBoard() {
  // Build board data separately so App.jsx only has to render it.
  return Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, getRandomTileColor),
  )
}
