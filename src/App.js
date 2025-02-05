import React, {useState} from "react";
import './App.css';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick(){
    setValue('X');
  }

  return (
    <button
      className="square" 
      onClick={handleClick}>
        {value}
      </button>
  );
}

function Board(){
  return(
  <div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </div>
  );
}

function Game(){
  return(
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game;