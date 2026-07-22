import './App.css'
import {
  BOARD_SIZE,
  PLAYER_ONE,
  PLAYER_TWO,
  TILE_COLORS,
  createRandomBoard,
} from './board'

// Create the board once when the page loads.
const board = createRandomBoard()

function ColorControls({ className, playerName }) {
  return (
    <section
      className={`player-panel ${className}`}
      aria-label={`${playerName} controls`}
    >
      <h2>{playerName}</h2>
      <div className="color-choices">
        {TILE_COLORS.map((color) => (
          <button
            className="color-button"
            key={color}
            style={{ backgroundColor: color }}
            type="button"
            aria-label={`Choose ${color} for ${playerName}`}
          />
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="game-screen">
      <h1>Giant Filler Clean</h1>

      <div className="game-layout">
        <ColorControls className="player-panel--one" playerName="Player 1" />

        <section
          className="board"
          style={{ '--board-size': BOARD_SIZE }}
          aria-label="Random 24 by 24 color board"
        >
          {/* Render each saved tile as one square. */}
          {board.map((row, rowIndex) =>
            row.map((tile, columnIndex) => (
              <div
                className={`tile${tile.owner ? ` tile--${tile.owner}` : ''}`}
                key={`${rowIndex}-${columnIndex}`}
                style={{ backgroundColor: tile.color }}
                data-owner={tile.owner ?? 'unclaimed'}
                data-marker={
                  tile.owner === PLAYER_ONE
                    ? '1'
                    : tile.owner === PLAYER_TWO
                      ? '2'
                      : undefined
                }
                aria-label={`Row ${rowIndex + 1}, column ${columnIndex + 1}, owner ${tile.owner ?? 'unclaimed'}`}
              />
            )),
          )}
        </section>

        <ColorControls className="player-panel--two" playerName="Player 2" />
      </div>
    </main>
  )
}

export default App
