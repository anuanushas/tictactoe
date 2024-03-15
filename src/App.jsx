import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [array, setArray] = useState(Array(9).fill(null));
  const [marker, setMarker] = useState(true);

  const checkingWinner = () => {
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const player of winnerCombinations) {
      const [a, b, c] = player;
      if (array[a] !== null && array[a] === array[b] && array[a] === array[c]) {
        return array[a];
      }
    }
    return null;
  };
  const isWinner = checkingWinner();
  const handleClick = (index) => {
    if (array[index] !== null || isWinner !== null) {
      return;
    }
    const newArray = [...array];
    newArray[index] = marker ? "X" : "O";
    setArray(newArray);
    setMarker(!marker);
  };

  const reset = () => {
    setArray(Array(9).fill(null));
  };

  const draw = array.every((item) => item !== null);

  return (
    <div className="container">
      {isWinner !== null ? (
        <h1>
          {isWinner} is Winner
          <br />
          <button className="button" onClick={() => reset()}>
            Play Again
          </button>
        </h1>
      ) : (
        <></>
      )}

      {!isWinner && draw ? (
        <h1>
          Draw
          <br />
          <button className="button" onClick={() => reset()}>
            Play Again
          </button>
        </h1>
      ) : (
        <></>
      )}
      <div className="row">
        <div className="col" onClick={() => handleClick(0)}>
          {array[0]}
        </div>
        <div className="col" onClick={() => handleClick(1)}>
          {array[1]}
        </div>
        <div className="col" onClick={() => handleClick(2)}>
          {array[2]}
        </div>
      </div>
      <div className="row">
        <div className="col" onClick={() => handleClick(3)}>
          {array[3]}
        </div>
        <div className="col" onClick={() => handleClick(4)}>
          {array[4]}
        </div>
        <div className="col" onClick={() => handleClick(5)}>
          {array[5]}
        </div>
      </div>
      <div className="row">
        <div className="col" onClick={() => handleClick(6)}>
          {array[6]}
        </div>
        <div className="col" onClick={() => handleClick(7)}>
          {array[7]}
        </div>
        <div className="col" onClick={() => handleClick(8)}>
          {array[8]}
        </div>
      </div>
    </div>
  );
};

export default App;
