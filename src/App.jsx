import { useGameState } from "./hooks/useGameState";
import Cards from "./components/Cards";
import GameStatus from "./components/GameStatus";
import "./App.css";

function App() {
  const { cards, sequenceIndex, isComplete, handleCardClick, resetGame } = useGameState();

  return (
    <div className="app">
      <h1>Sequence Memory Game</h1>
      <GameStatus sequenceIndex={sequenceIndex} isComplete={isComplete} onReset={resetGame} />
      <Cards cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
