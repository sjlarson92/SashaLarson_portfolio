
const checkIfUserWon = (userChoice, coinTossResult) => {
  if (userChoice === coinTossResult){
    //console.log("The user wins!")
    return "won"
  }
  else {
    //console.log("the user loses!")
    return "lost"
  }
}

export default checkIfUserWon;
