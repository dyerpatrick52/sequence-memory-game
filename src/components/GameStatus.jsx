import { SEQUENCE } from "../utils/cardUtils";

function GameStatus({ sequenceIndex, isComplete, onReset }) {
  return (
    <div className="game-status">
      {isComplete ? (
        <>
          <p>You found all cards!</p>
          <button onClick={onReset}>Play Again</button>
        </>
      ) : (
        <p>Find: <strong>{SEQUENCE[sequenceIndex]}</strong></p>
      )}
    </div>
  );
}

export default GameStatus;
