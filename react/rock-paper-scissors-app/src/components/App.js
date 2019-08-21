import React from 'react';
import './App.css';
import Image from './Image.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: ""
    };
  }
render(){
  return (
    <div>
      <h1>Rock, Paper, Scissors!</h1>
      <div>
        <Image />
      </div>
    </div>
  )
}

}

export default App;
