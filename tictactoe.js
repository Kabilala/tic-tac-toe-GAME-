import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const squares = [...board];

    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? 'X' : 'O';
    setBoard(squares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (index) => (
    <button
      className="square bg-white border border-gray-500 text-xl font-bold h-10 w-10 flex items-center justify-center"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="mt-4">
      <div className="status text-white mb-4">{status}</div>
      <div className="board">
        <div className="board-row flex">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row flex">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row flex">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      {winner && (
        <div className="text-yellow-500 mb-3">
          Congratulations! Player {winner} wins!
        </div>
      )}
      <button
        className="bg-teal-900 hover:bg-teal-700 text-black font-bold py-2 px-4 mt-4"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
