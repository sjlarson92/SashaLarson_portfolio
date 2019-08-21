import React from 'react';
import rock1 from '../images/rock1.jpg'
import paper1 from '../images/paper1.jpg'
import scissors1 from '../images/scissors1.jpg'

const Image = () => {
  return (
    <div>
      <img src={rock1} alt="rock"/>
      <img src={paper1} alt="paper"/>
      <img src={scissors1} alt="scissors"/>
    </div>
  )
}

export default Image;
