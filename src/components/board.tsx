import React from "react";

import Square from "./square";

interface IBoard {
  squareValue: string[];
  onClick: (event: number) => void;
}

// full board
const Board: React.FC<IBoard> = ({ squareValue, onClick }) => {
  const renderSquare = (i: number) => {
    return <Square squareValue={squareValue[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
