import React from "react";

type THistory = {
  squares: string;
};
interface IHistoryMoves {
  history: {
    squares: string[];
  }[];

  thisCanBeDoneSetStep: React.Dispatch<React.SetStateAction<number>>;
  thisCanBeDoneSetXNext: React.Dispatch<React.SetStateAction<boolean>>;
}
const HistoryMoves: React.FC<IHistoryMoves> = ({
  history,
  thisCanBeDoneSetStep,
  thisCanBeDoneSetXNext
}) => {
  const jumpTo = (step: number) => {
    thisCanBeDoneSetStep(step);
    thisCanBeDoneSetXNext(step % 2 === 0);
  };
  return (
    <>
      {history.map((step: any, move: any) => {
        const description = move ? `Go to move ${move}` : "Go to start";
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}> {description}</button>
          </li>
        );
      })}
    </>
  );
};

export default HistoryMoves;
