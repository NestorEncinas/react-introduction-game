import React from "react";

interface ISquare {
  squareValue: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

// each square
const Square: React.FC<ISquare> = ({ squareValue, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {squareValue}
    </button>
  );
};

export default Square;
