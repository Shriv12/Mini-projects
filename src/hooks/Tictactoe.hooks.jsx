import { useState } from "react";

const initailBoard = () => Array(9).fill(null);

const useTictactoe = () => {
  const [board, setBoard] = useState(initailBoard);
  const [isXNext, setIsXNext] = useState(true);
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    // check winner
    const winner = calculateWinner(board);
    
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const gameStatus = () => {
    const winner = calculateWinner(board)
    if(winner) return <span style={{color: '#131be2'}}>Player {winner} wins!</span>
    if(!board.includes(null)) return `Game is drawn`
    return `Player ${isXNext ? "X": "O"}'s turn`
  };

  const resetGame = () => {
    setBoard(initailBoard())
    setIsXNext(true)
  };

  return { board, calculateWinner, handleClick, gameStatus, resetGame };
};

export default useTictactoe;
