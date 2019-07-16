import React from 'react';
import headImage from './heads.jpg'

const App = () => {

  return (
    <div>
      <h1>Heads or tails?</h1>

      <p>Click one </p>

      <div id="heads-div">
        <img src={headImage}/>
      </div>
    </div>
  )
}

export default App;
