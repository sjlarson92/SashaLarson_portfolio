import React from 'react';
import heads from './heads.jpg'
import tails from './tails.jpeg'
import {coinToss} from './CoinToss.js'
import checkIfUserWon from './Compare.js'
import Text from './Text.js'

class CoinTossGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: "",
      coinTossResult: "",
      userWinLoss: "",
    };
  }

  imageClick = async (choice) => {
    console.log("choice", choice);
    const randomizerResult = coinToss()
    this.setState({
      userChoice: choice,
      coinTossResult: randomizerResult,
      userWinLoss: checkIfUserWon(choice, randomizerResult)
    });
  }

  render(){
    return (
      <div>
        <div>
          <img onClick={() => this.imageClick("heads")} className="image" src={heads} alt="head coin"/>
          <img onClick={() => this.imageClick("tails")} className= "image" src={tails} alt="tail coin"/>
        </div>
        <Text coinTossResult={this.state.coinTossResult} userWinLoss ={this.state.userWinLoss}/>
      </div>
    )
  }

}

export default CoinTossGame;
