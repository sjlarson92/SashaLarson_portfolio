import React from 'react';


let gotCharacters = [
  {
    name: "Jon Snow",
    pet: "Ghost"

  },
  {
    name: "Cersei Lannister",
    pet: "Jamie Lannister"
  },
  {
    name: "Arya Stark",
    pet: "Nymeria"
  },
  {
    name: "Danearys Targaryean",
    pet: "Drogon"
  }];

let possibleDeaths = ["eaten by ", "murdered by ", "sat on by "]

let gotList2 = gotCharacters.map((character, index) =>
  <li key={index}>{character.name}</li>
)

const onPress = () => <h1>gotCharacters[0].name</h1>;

const App = () =>
  <div>
    <h1>Game of Thrones Deadpool</h1>
    <h2>Characters:</h2>
    <ul>{gotList2}</ul>
    <br/>

    <h2>How will they die?</h2>
    <button onClick={onPress}>Kill</button>
  </div>

export default App;
