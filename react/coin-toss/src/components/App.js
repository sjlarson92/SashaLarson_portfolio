import React from 'react';
import Hhhhh from './CoinTossGame.js'
import RockPaperScissorsGame from './RockPaperScissorsGame.js'

const App = () => {
  return (
    <div>
      <h1>Heads or tails?</h1>
      <p>Click one </p>
      <div id="coinImages">
        <Hhhhh/>
      </div>

      <div>
        <h1>Rock, Paper, Scissors!</h1>
        <RockPaperScissorsGame />
      </div>
    </div>
  )
}

export default App;
