import React from 'react';

import Image from './components/Image'
import { images } from './data.js'

class HeadsOrScissors extends React.Component {
  state = {
    userChoice: '',
    endGameMessage: ''
  }

  handleImageClick = (userChoice) => {
    this.setState({
      userChoice,
      endGameMessage: `You chose ${userChoice}`
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
