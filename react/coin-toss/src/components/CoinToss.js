import React from 'react';

const coinToss = (userChoice) => {
  console.log("this is the coinToss function");
  console.log("this is the userChoice: ", userChoice);
  var coinSides = ["heads", "tails"];
  console.log("coinsides: ", coinSides[0]);
  var flipResult = coinSides[0];
  return flipResult

}

export default coinToss;
