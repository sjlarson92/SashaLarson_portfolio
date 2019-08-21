import React from 'react';
import Image from './Image.js'

const App = () => {
  return (
    <div>
      <h1>Heads or tails?</h1>
      <p>Click one </p>
      <div id="coinImages">
        <Image/>
      </div>
      <div>
        <h1>Add Rock Paper Scissors here!</h1>
      </div>
    </div>
  )
}

export default App;
