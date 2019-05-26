import React from 'react';
import Movie from './Movies.js'
import Travel from './Travel.js'

const App = () =>
  <div>
    <h1>About Me</h1>

    <h2>Favorite Movies:</h2>
    <Movie title="Avengers"/>
    <Movie title="John Wick"/>
    <Movie title="Lego Movie"/>

    <h2>Travel Wish List:</h2>
    <Travel name="Italy"/>
    <Travel name="Japan"/>
    <Travel name="Greece"/>

  </div>

export default App;
