import React from 'react';
import heads from './heads.jpg'
import tails from './tails.jpeg'
import { coinToss } from '../utils/CoinToss.js'
import checkIfUserWon from '../utils/Compare.js'
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

  imageClick = (userChoice) => {
    const coinTossResult = coinToss()
    this.setState({
      userChoice,
      coinTossResult,
      userWinLoss: checkIfUserWon(userChoice, coinTossResult)
    });
  }

  render(){
    const { coinTossResult, userWinLoss } = this.state;
    return (
      <div>
        <div>
          <img
            onClick={() => this.imageClick("heads")}
            className="image"
            src={heads}
            alt="head coin"/>
          <img
            onClick={() => this.imageClick("tails")}
            className= "image"
            src={tails}
            alt="tail coin"/>
        </div>
        <Text
          coinTossResult={coinTossResult}
          userWinLoss ={userWinLoss}/>
      </div>
    )
  }
}

export default CoinTossGame;
