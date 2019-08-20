import React from 'react';
import heads from './heads.jpg'
import tails from './tails.jpeg'
import coinToss from './CoinToss.js'
import checkIfUserWon from './Compare.js'
import Text from './Text.js'

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: "",
      coinTossResult: "",
      userWinLoss: "",
    };
  }

  imageClick = async (userChoice) => {
    console.log("user clicked on: ", userChoice);
    this.setState({
      userChoice: userChoice
    });
    await this.setState({
      coinTossResult: coinToss()
    });
    console.log("this is the coinTossResult: ", this.state.coinTossResult);
    this.setState({
      userWinLoss: checkIfUserWon(this.state.userChoice, this.state.coinTossResult)
    }, () => console.log("the user has: ", this.state.userWinLoss));

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

export default Image;
