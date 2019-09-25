import React from "react";

import Board from "./board";
import HistoryMoves from "./history";

import { calculateWinner } from "../utils/calculateWinner";

// top component
const Game: React.FC = () => {
  // state for history square value & check for turn
  const [history, setHistory] = React.useState([{ squares: [""] }]);
  const [xNext, setXNext] = React.useState(true);
  const [stepNumber, setStepNumber] = React.useState(0);

  // do i need to copy state due to immutability?
  const historyCopy = history;
  const { squares } = historyCopy[stepNumber];
  const winner = calculateWinner(squares);

  const status = winner
    ? `Winner: ${winner}`
    : `Next player ${xNext ? "X" : "O"}`;

  const handleClick = (i: number) => {
    // do i need to copy state due to immutability?
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[historyCopy.length - 1];
    // const current = history.slice(0, stepNumber + 1)[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] || calculateWinner(squares)) return;

    squares[i] = xNext ? "X" : "O";

    console.log("Squares", squares[i]);

    setHistory(
      historyCopy.concat([
        {
          squares
        }
      ])
    );
    // setHistory(
    //   history.concat([
    //     {
    //       squares
    //     }
    //   ])
    // );
    setStepNumber(historyCopy.length);
    // setStepNumber(history.length);
    setXNext(!xNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squareValue={squares}
          onClick={i => {
            handleClick(i);
          }}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {/* is this the best way? */}
          <HistoryMoves
            thisCanBeDoneSetStep={setStepNumber}
            thisCanBeDoneSetXNext={setXNext}
            history={history}
          />
        </ol>
      </div>
    </div>
  );
};

export default Game;
