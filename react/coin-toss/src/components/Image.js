import React from 'react';
import heads from './heads.jpg'
import tails from './tails.jpeg'

const imageClick = () => {
  console.log("image clicked!");

}

class Image extends React.Component {
  render(){
    if (this.props.name === "heads"){
      return (
      <div>
        <div>
          <img onClick={imageClick} className="image" src={heads} alt="heads"/>
        </div>
      </div>
      )
    }
    else {
      return (
        <div>
          <img onClick={imageClick} className="image" src={tails} alt="tails"/>
        </div>
      )
    }
  }
}

export default Image;
