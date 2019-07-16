import React from 'react';
import Image from './Image.js'

const App = () => {

const result = null;
  const handleClick = () => {
    const result = <p>Something was clicked</p>

    return result;
  }

  return (
    <div>
      <h1>Heads or tails?</h1>

      <p>Click one </p>

      <div id="coinImages">
        <Image name="heads"/>
        <Image name="tails"/>
      </div>

      <div>
        {result}
      </div>

    </div>
  )
}

export default App;
