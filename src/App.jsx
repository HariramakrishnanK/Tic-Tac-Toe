import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/WINNING_COMBINATIONS";
import { useState } from "react";
import GameOver from "./components/GameOver";

function App() {
  function checkWinner(gameTurns) {
    for (let combinations of WINNING_COMBINATIONS) {
      const symbol = gameTurns.get(combinations.values().next().value);
      if (
        Array.from(combinations).every((comb) => gameTurns.get(comb) === symbol)
      )
        return players[symbol];
    }
    return null;
  }

  function handleSelectingCell(row, col) {
    let cell = `${row}, ${col}`;

    setGameTurns((latestGameTurns) => {
      let overallTurns = [[cell, activePlayer], ...latestGameTurns];
      return new Map(overallTurns);
    });
  }

  function handleRematch() {
    setGameTurns(new Map());
  }

  function handleNameUpdate(symbol, name) {
    setPlayers((players) => {
      return {
        ...players,
        [symbol]: name,
      };
    });
  }

  const [gameTurns, setGameTurns] = useState(new Map());
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  let gameTurnsArr = Array.from(gameTurns);

  let activePlayer = "X";
  let winner = null;

  if (gameTurnsArr.length >= 5) winner = checkWinner(gameTurns);
  if (!winner && gameTurnsArr.length === 9) winner = "Draw";

  if (gameTurnsArr.length > 0 && gameTurnsArr[0][1] === "X") activePlayer = "O";

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            onNameUpdate={handleNameUpdate}
            className={activePlayer === "X" ? "active" : ""}
          />
          <Player
            name="Player 2"
            symbol="O"
            onNameUpdate={handleNameUpdate}
            className={activePlayer === "O" ? "active" : ""}
          />
        </ol>
        {winner && <GameOver winner={winner} onReset={handleRematch} />}
        <GameBoard gameTurns={gameTurns} onButtonSelect={handleSelectingCell} />
      </div>
      <Log turns={Array.from(gameTurns)} />
    </main>
  );
}

export default App;
