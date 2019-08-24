import React from 'react';

import Image from './components/Image'
import { images } from './data.js'

class HeadsOrScissors extends React.Component {
  state = {
    userChoice: '',
    endGameMessage: '',
  }

  checkIfUserWon = (randomValue, userChoice) => {
    return randomValue === userChoice && true;
  }

  getRandomValueFromArray = (anArray) => {
    return anArray[Math.floor(Math.random() * anArray.length)];
  }

  handleImageClick = (userChoice) => {
    const imageNames = images.map(image => image.name)
    const randomValue = this.getRandomValueFromArray(imageNames);
    const userWon = this.checkIfUserWon(randomValue, userChoice);

    const endGameMessage = userWon
      ? `Computer rolled ${randomValue}. You won`
      : `Computer rolled ${randomValue}. You lost`

    this.setState({
      userChoice,
      endGameMessage
    })

  }

  displayImageComponent = () =>
    images.map(image =>
     <Image
      key={image.id}
      image={image}
      onClick={() => this.handleImageClick(image.name)}
    />)

  render(){
    const { userChoice, endGameMessage } = this.state;
    return (
      <div>
        <h1>Heads or Tails</h1>
        <h3>Click one</h3>
        {this.displayImageComponent()}
        <p>{endGameMessage}</p>
      </div>
    );
  }
}

export default HeadsOrScissors;
