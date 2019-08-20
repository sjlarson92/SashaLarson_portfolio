import React from 'react';

const coinToss = () => {
  console.log("this is inside the coinToss function");
  let coinSides = ["heads","tails"];
  console.log("coinsides parameter passed is: ", coinSides[0]);
  let flipResult = coinSides[Math.floor(Math.random() * coinSides.length)];
  return flipResult

}

export default coinToss;
