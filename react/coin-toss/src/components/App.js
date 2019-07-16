import React from 'react';
import headImage from './heads.jpg'
import tailsImage from './tails.jpeg'

const App = () => {

  return (
    <div>
      <h1>Heads or tails?</h1>

      <p>Click one </p>

      <div id="heads-div" className="image">
        <img src={headImage} alt="heads"/>
      </div>

      <div id="tails-div" className="image">
        <img src={tailsImage} alt="tails"/>
      </div>
    </div>
  )
}

export default App;
