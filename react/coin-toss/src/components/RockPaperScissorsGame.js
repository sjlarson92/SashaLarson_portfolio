import React from 'react';

import rock1 from './images/rock1.jpg'
import paper1 from './images/paper1.jpg'
import scissors1 from './images/scissors1.jpg'
import randomizer from '../utils/randomizer.js'

class RockPaperScissorsGame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userChoice: "",
      computerChoice: ""
    };
  }

  imageClickEvent = (userChoice) => {
    console.log("userChoice: ", userChoice);
    this.setState({
      userChoice,
      computerChoice: randomizer()
    }, () => console.log("computerChoice: ", this.state.computerChoice));
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
      </div>
      )
    }
}

export default RockPaperScissorsGame;
