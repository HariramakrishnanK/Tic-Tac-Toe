export default function GameBoard({ gameTurns, onButtonSelect }) {
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for (let [cell, symbol] of gameTurns) {
    let [row, col] = cell.split(", ");
    gameBoard[row][col] = symbol;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => onButtonSelect(rowIndex, cellIndex)}>
                  {cell ? cell : ""}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
