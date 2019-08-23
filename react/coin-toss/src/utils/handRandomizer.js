export const handRandomizer = () => {
  const handOptions = ["rock", "paper", "scissors"];
  return handOptions[Math.floor(Math.random() * handOptions.length)];
};

export const compareChoices = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie"
  }
  else if (userChoice === "rock") {
    if (computerChoice === "paper"){
      return "Lose"
    }
    else if (computerChoice === "scissors") {
      return "Win"
    }
  }
  else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Lose"
    }
    else if (computerChoice === "rock") {
      return "Win"
    }
  }
  else if (userChoice === "scissors") {
    if (computerChoice === "rock"){
      return "Lose"
    }
    else if (computerChoice === "paper") {
      return "Win"
    }
  }
}
