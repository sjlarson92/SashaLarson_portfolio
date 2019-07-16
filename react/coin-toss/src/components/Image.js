import React from 'react';
import heads from './heads.jpg'
import tails from './tails.jpeg'

const imageClick = () => {
  console.log("image clicked!");
}
const Image = (props) => {
  if (props.name === "heads"){
    return (
    <div>
      <img className="image" src={heads} alt="heads"/>
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


export default Image;
