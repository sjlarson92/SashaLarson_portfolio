import React from 'react';
import Image from './Image.js'

const App = () => {


  return (
    <div>
      <h1>Heads or tails?</h1>

      <p>Click one </p>

      <div id="coinImages">
        <Image name="heads"/>
        <Image name="tails"/>
      </div>

    </div>
  )
}

export default App;
