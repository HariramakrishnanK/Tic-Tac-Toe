export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{`${winner} ${winner === "Draw" ? "" : "won"}!`}</p>
      <p>
        <button onClick={onReset}>Rematch!</button>
      </p>
    </div>
  );
}
