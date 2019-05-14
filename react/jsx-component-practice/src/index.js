import React from 'react';
import ReactDOM from 'react-dom';

let gotCharacters = [
  {
    name: "Jon Snow",
    pet: "Direwolf"

  },
  {
    name: "Cersei Lannister",
    pet: "Jamie Lannister"
  },
  {
    name: "Arya Stark",
    pet: "A girl has no pet"
  },
  {
    name: "Danearys Targaryean",
    pet: "Dragon"
  }];

let gotList = gotCharacters.map(function(character){
  return(<li>{character.name}</li>);
})

const App = () =>
<div>
  <h1>Game of Thrones Deadpool</h1>
  <h2>Characters:</h2>
  <ul>{gotList}</ul>
</div>

ReactDOM.render(<App/>, document.getElementById('root'));
