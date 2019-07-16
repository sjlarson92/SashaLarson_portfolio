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
  const faveMovie = 'Avengers';
  const color = 'blue';
  const name = 'Sasha';
  const busy = true;
  const isUserBusy = (isBusy) => {
    if(isBusy){
      return <p>I&#39;m Busy</p>;
    } else {
      return null;
    }
  }
  return (
  <div>
    <h1>About Me</h1>
    <div>{isUserBusy(busy)}</div>
    <h2 className="header">Favorite Movies:</h2>
    <Movie title="Avengers"/>
    <Movie title="John Wick"/>
    <Movie title="Lego Movie"/>

    <h2 className="header">Travel Wish List:</h2>
    <Travel name="Italy"/>
    <Travel name="Japan"/>
    <Travel name="Greece"/>

    <p>My Favorite Color is: {color === 'blue' && color}</p>
    <p>My Name is: { name ? name : "A Mystery"}</p>

    <div>
      {renderFaveMovie(faveMovie)}
    </div>

  </div>
  )
}
export default App;
