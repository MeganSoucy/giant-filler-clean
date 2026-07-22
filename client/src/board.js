export const BOARD_SIZE = 24
export const PLAYER_ONE = 'player-one'
export const PLAYER_TWO = 'player-two'

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
  const board = Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => ({
      color: getRandomTileColor(),
      owner: null,
    })),
  )

  const playerOneTile = board[0][0]
  const playerTwoTile = board[BOARD_SIZE - 1][BOARD_SIZE - 1]

  playerOneTile.owner = PLAYER_ONE
  playerTwoTile.owner = PLAYER_TWO

  if (playerTwoTile.color === playerOneTile.color) {
    playerTwoTile.color = TILE_COLORS.find(
      (color) => color !== playerOneTile.color,
    )
  }

  return board
}
