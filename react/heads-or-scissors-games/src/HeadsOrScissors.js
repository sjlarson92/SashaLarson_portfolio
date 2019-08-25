import React from 'react';

import GameLayout from './components/GameLayout'
import { headsOrTailsImages, rockPaperScissorsImages, rockPaperScissorsTypes as RPSTypes } from './data.js'

const types = {
  HEADSTAILS: 'heads-tails',
  ROCKPAPERSCISSORS: 'rock-paper-scissors'
}

const winStatusTypes = {
  WIN: 'WIN',
  LOSE: 'LOSE',
  TIE: 'TIE'
}

const endGameMessagesMap = {
  WIN: 'You won',
  LOSE: 'You lost',
  TIE: 'You tied'
}

class HeadsOrScissors extends React.Component {
  state = {
    resultForHeadsTails: '',
    resultForRockPaperScissors: ''
  }

  checkIfUserWonHeadsTails = (userChoice, randomValue) =>
    userChoice === randomValue ? winStatusTypes.WIN : winStatusTypes.LOSE;

  checkIfUserWonRockPaperScissors = (userChoice, randomValue) => {
    if (userChoice === randomValue) {
      return winStatusTypes.TIE;
    }
    else if ((userChoice === RPSTypes.ROCK && randomValue === RPSTypes.PAPER) ||
             (userChoice === RPSTypes.PAPER && randomValue === RPSTypes.SCISSORS) ||
             (userChoice === RPSTypes.SCISSORS && randomValue === RPSTypes.ROCK)) {
      return winStatusTypes.LOSE;
    }
    else {
      return winStatusTypes.WIN;
    }
  }

  getRandomValueFromArray = (anArray) => {
    return anArray[Math.floor(Math.random() * anArray.length)];
  }

  handleImageClick = (userChoice, imagesArray, gameType) => {
    const imageNames = imagesArray.map(image => image.name)
    const randomValue = this.getRandomValueFromArray(imageNames);
    let userWon;

    if (gameType === types.HEADSTAILS) {
       userWon = this.checkIfUserWonHeadsTails(userChoice, randomValue);
       const resultForHeadsTails = `Computer rolled ${randomValue}.
         ${endGameMessagesMap[userWon]}`;
       this.setState({
         resultForHeadsTails,
       })
    } else if (gameType === types.ROCKPAPERSCISSORS) {
      userWon = this.checkIfUserWonRockPaperScissors(userChoice, randomValue);
      const resultForRockPaperScissors = `Computer picked ${randomValue}.
        ${endGameMessagesMap[userWon]}`;
      this.setState({
        resultForRockPaperScissors,
      })
    }
  }

  render(){
    const { resultForHeadsTails, resultForRockPaperScissors } = this.state;
    return (
      <div>
        <GameLayout
          header="Heads or Tails"
          gameType={types.HEADSTAILS}
          instructions="Click one"
          imagesArray={headsOrTailsImages}
          endGameMessage={resultForHeadsTails}
          onClick={this.handleImageClick}
          />
          <GameLayout
            header="Rock, Paper, Scissors"
            gameType={types.ROCKPAPERSCISSORS}
            instructions="Pick one"
            imagesArray={rockPaperScissorsImages}
            endGameMessage={resultForRockPaperScissors}
            onClick={this.handleImageClick}
            />
      </div>
    );
  }
}

export default HeadsOrScissors;
