import React, { useState } from 'react';
import TicTacToe from '../components/TicTacToe';


const Home = () => {
  const [gameMode, setGameMode] = useState(null);

  const handleGameModeSelect = (mode) => {
    setGameMode(mode);
  };

  const handleHomeClick = () => {
    setGameMode(null);
  };

  return (
    <div className=" bg-teal-950 p-8 h-screen flex flex-col items-center justify-center scroll-pb-2 ">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-2xl">Tic Tac Toe Game</h1>
      {gameMode ? (
        <div>
          <TicTacToe gameMode={gameMode} />
          <button
            className="bg-teal-900 hover:bg-teal-700 text-black font-bold py-2 px-4 mt-4"
            onClick={handleHomeClick}
          >
            Home
          </button>
        </div>
      ) : (
        <div className="flex flex-col place-items-end scroll-pb-2 shadow-neutral-200">
          <p className=" text-black mb-4 drop-shadow-2xl">Select Game Mode:</p>
          <button
            className="bg-lime-50 hover:bg-lime-950 text-black font-bold py-2 px-4 mb-2"
            onClick={() => handleGameModeSelect('player-vs-player')}
          >
            Player vs Player
          </button>
          <button
            className="bg-lime-50 hover:bg-lime-950 text-black font-bold py-2 px-4"
            onClick={() => handleGameModeSelect('player-vs-computer')}
          >
            Player vs Computer
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
