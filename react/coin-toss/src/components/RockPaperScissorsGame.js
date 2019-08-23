import React from 'react';

import rock1 from './images/rock1.jpg'
import paper1 from './images/paper1.jpg'
import scissors1 from './images/scissors1.jpg'
import {handRandomizer, compareChoices} from '../utils/handRandomizer.js'
import RockPaperScissorsResultText from './RockPaperScissorsResultText.js'

class RockPaperScissorsGame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userChoice: "",
      computerChoice: "",
      gameResult: ""
    };
  }

  imageClickEvent = (userChoice) => {
    console.log("userChoice: ", userChoice);
    const computerChoice = handRandomizer()
    console.log("computerChoice: ", computerChoice)
    const gameResult = compareChoices(userChoice, computerChoice)
    console.log("gameResult: ", gameResult)
    this.setState({
      userChoice,
      computerChoice,
      gameResult
    });
  }

  render(){
    return (
      <div>
        <img
          onClick={() => this.imageClickEvent("rock")}
          src={rock1}
          alt="rock" />
        <img
          onClick={() => this.imageClickEvent("paper")}
          src={paper1}
          alt="paper" />
        <img
          onClick={() => this.imageClickEvent("scissors")}
          src={scissors1}
          alt="scissors" />
        <RockPaperScissorsResultText computerChoice={this.state.computerChoice} gameResult={this.state.gameResult}/>
      </div>
      )
    }
}

export default RockPaperScissorsGame;
