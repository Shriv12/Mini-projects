import useTictactoe from '../hooks/Tictactoe.hooks.jsx'
import '../css/Tictactoe.css'
function Tictactoe() {
    const { board, calculateWinner, handleClick, gameStatus, resetGame } =
    useTictactoe();
  return (
    <div className="container">
      <div className="game">
        <div className="status">
          {gameStatus()}
          <button className="reset-btn" onClick={resetGame}>
            Reset game
          </button>
        </div>
        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Tictactoe