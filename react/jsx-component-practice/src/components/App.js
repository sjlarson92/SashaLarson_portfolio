import React from 'react';
import Character from './Characters.js'
import Death from './Deaths.js'


const App = () =>
  <div>
    <h1>Game of Thrones Deadpool</h1>
    <h2>Characters:</h2>
    <ul>
      <Character name="Jon Snow"/>
      <Character name="Daenerys Targaryen"/>
      <Character name="Tyrion Lannister"/>
    </ul>
    <br/>
    <h2>Ways to die:</h2>
    <ul>
      <Death text="Eaten alive"/>
      <Death text="Dragon fire"/>
      <Death text="Poison"/>
    </ul>

    <button>Kill</button>

  </div>

export default App;
