import React from 'react';

const Text = (props) => {
  const coinResult = props.coinTossResult;
  const userWinLoss = props.userWinLoss;
  let textDiv;

  if (userWinLoss === "won"){
    textDiv = "win";
  }
  else{
    textDiv = "loss";
  }

  if (userWinLoss){
    return (
      <div id={textDiv}>Rolled {coinResult}! You {userWinLoss}</div>
    )
  }
  else {
    return null;
  }

}

export default Text;
