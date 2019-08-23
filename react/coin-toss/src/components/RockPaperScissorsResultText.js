import React from 'react';

const RockPaperScissorsResultText = (props) => {
  const computerChoice = props.computerChoice;
  const gameResult = props.gameResult;
  let textDiv;

  if (gameResult === "Win"){
    textDiv = "win";
  }
  else if (gameResult === "Tie") {
    textDiv = "tie"
  }
  else{
    textDiv = "loss";
  }

  if (gameResult) {
    return (
      <div id={textDiv}>Computer picked {computerChoice}, you {gameResult}! </div>
    );
  }
  else {
    return null;
  }
}

export default RockPaperScissorsResultText;
