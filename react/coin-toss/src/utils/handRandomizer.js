const handRandomizer = () => {
  const handOptions = ["rock", "paper", "scissors"];
  return handOptions[Math.floor(Math.random() * handOptions.length)];
};

const compareChoices = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie"
  }

}
export default handRandomizer;
