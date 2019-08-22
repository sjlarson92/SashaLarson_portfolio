export const coinToss = () => {
  const coinSides = ["heads","tails"];
  const flipResult = coinSides[Math.floor(Math.random() * coinSides.length)];
  return flipResult;
}
