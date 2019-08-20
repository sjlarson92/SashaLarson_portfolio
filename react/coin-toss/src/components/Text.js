import React from 'react';

const Text = (props) => {
  let coinResult = props.coinTossResult;
  let userWinLoss = props.userWinLoss;

  if (userWinLoss){
    return (
      <div>Rolled {coinResult}! You {userWinLoss}</div>
    )
  }
  else {
    return null
  }

}

export default Text;
