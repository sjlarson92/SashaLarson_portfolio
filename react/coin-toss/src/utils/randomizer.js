const randomizer = () => {
  console.log("this is the randomizer funct")
  const handOptions = ["rock", "paper", "scissors"];
  const randomHand = handOptions[Math.floor(Math.random() * handOptions.length)];
  return randomHand;
};

export default randomizer;
