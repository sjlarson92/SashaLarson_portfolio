import React from 'react';

import Image from './Image'

const GameLayout = (props) =>
  <div>
    <h1>{props.header}</h1>
    <h3>{props.instructions}</h3>
    {props.imagesArray.map(image =>
     <Image
      key={image.id}
      image={image}
      onClick={() => props.onClick(image.name, props.imagesArray, props.gameType)}
    />)}
    <p>{props.endGameMessage}</p>
  </div>

export default GameLayout;
