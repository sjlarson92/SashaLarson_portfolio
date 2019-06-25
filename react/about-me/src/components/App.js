import React from 'react';
import Movie from './Movies.js'
import Travel from './Travel.js'

const renderFaveMovie = (faveMovie) => {
  let faveMoviesentence;
  if (faveMovie === 'Avengers' ){
    faveMoviesentence = <p>Avengers Assemble!</p>;
  }
  else if (faveMovie === 'John Wick'){
    faveMoviesentence = <p>Keanu Reaves Rocks!</p>;
  }
  else {
    faveMoviesentence = <p>Everything is Awesome!</p>;
  }
  return faveMoviesentence
}

const App = () => {
  const faveMovie = 'John Wick';
  return (
  <div>
    <h1>About Me</h1>

    <h2 className="header">Favorite Movies:</h2>
    <Movie title="Avengers"/>
    <Movie title="John Wick"/>
    <Movie title="Lego Movie"/>

    <div>
      {renderFaveMovie(faveMovie)}
    </div>

    <h2 className="header">Travel Wish List:</h2>
    <Travel name="Italy"/>
    <Travel name="Japan"/>
    <Travel name="Greece"/>

  </div>
  )
}
export default App;
