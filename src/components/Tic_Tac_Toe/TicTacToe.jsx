import React, { useEffect, useState } from "react";
import "./style.css";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTrun, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  console.log(squares);

  const Square = ({ value, onClick }) => {
    return (
      <button onClick={onClick} className="square">
        {value}
      </button>
    );
  };

  const handleClick = (getCurrentSquare) => {
    let cpySquare = [...squares];
    if (getWinner(cpySquare) || cpySquare[getCurrentSquare]) return;
    cpySquare[getCurrentSquare] = isXTrun ? "X" : "O";
    setIsXTurn(!isXTrun);
    setSquares(cpySquare);
  };

  const getWinner = (squares) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw ! Restart The Game.");
    } else if (getWinner(squares)) {
      setStatus(`${getWinner(squares)} Won The Match ! Restart The Game.`);
    } else {
      setStatus(`Next Player ${isXTrun ? "X" : "o"}  Turn`);
    }
  }, [squares, isXTrun]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}
