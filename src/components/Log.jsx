export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(([cell, symbol]) => (
        <li key={cell}>
          {symbol} selected ({cell})
        </li>
      ))}
    </ol>
  );
}
