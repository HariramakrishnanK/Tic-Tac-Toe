import { useState } from "react";

export default function Player({ name, symbol, onNameUpdate, ...props }) {
  const [editMode, setEditMode] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  let playerNameElement = <span className="player-name">{playerName}</span>;

  if (editMode) {
    playerNameElement = (
      <input
        type="text"
        required
        className="player-name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
    );
  }

  function handleEditClick() {
    //editing stores the value of editMode state variable and toggles it
    if (editMode) onNameUpdate(symbol, playerName);
    setEditMode((editing) => !editing);
  }

  return (
    <>
      <li {...props}>
        <span className="player">
          {playerNameElement}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{editMode ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
