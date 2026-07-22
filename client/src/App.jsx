import './App.css'
import { BOARD_SIZE, createRandomBoard } from './board'

// Create the board once when the page loads.
const board = createRandomBoard()

function App() {
  return (
    <main className="game-screen">
      <h1>Giant Filler Clean</h1>

      <section
        className="board"
        style={{ '--board-size': BOARD_SIZE }}
        aria-label="Random 24 by 24 color board"
      >
        {/* Render each saved tile as one square. */}
        {board.map((row, rowIndex) =>
          row.map((tile, columnIndex) => (
            <div
              className="tile"
              key={`${rowIndex}-${columnIndex}`}
              style={{ backgroundColor: tile.color }}
              aria-label={`Row ${rowIndex + 1}, column ${columnIndex + 1}, owner ${tile.owner ?? 'unclaimed'}`}
            />
          )),
        )}
      </section>
    </main>
  )
}

export default App
