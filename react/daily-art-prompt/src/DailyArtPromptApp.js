import React from 'react';

import './DailyArtPromptApp.css';
import beachPuppy from './images/beach-puppy.jpg';
import beagle from './images/beagle.jpg';
import puppyInCup from './images/puppy-in-cup.jpeg';

class DailyArtPromptApp extends React.Component {
  state = {
    date: "October 31, 2019",
    prompt: {id: 1, date: "October 31", text: "Puppy"}

  }

  handleImageClick = () => {
    console.log("Image was clicked");
  }

  handleButtonClick = (num) => {

    if (num === -1){
      console.log("Previous button was clicked");
    }
    else {
      console.log("Next button was clicked");
    }
  }

  render(){
    return (
      <div className="app">
        <div className="header">
          <div className="website-title">
            <h1>Daily Art Prompt</h1>
          </div>
        </div>
        <div className="prompt-row">
          <div>
            <button onClick={() => this.handleButtonClick(-1)}>Previous</button>
          </div>
          <div className="prompt">
            <div className="padding">
              {this.state.date}
            </div>
            <div className="padding">
              Prompt #{this.state.prompt.id}
            </div>
            <div className="text padding">
              {this.state.prompt.text}
            </div>
          </div>
          <div>
            <button onClick={() => this.handleButtonClick()}>Next</button>
          </div>
        </div>
        <hr></hr>
        <div>
          <h1>Art Gallery</h1>
        </div>
        <div className="row">
          <div className="column">
            <img src={beachPuppy} alt="Puppy on the beach" onClick={() => this.handleImageClick()}/>
          </div>
          <div className="column">
            <img src={beagle} alt="beagle puppy"/>
          </div>
          <div className="column">
            <img src={puppyInCup} alt="Puppy in a cup"/>
          </div>
        </div>
      </div>
    )
  }
}

export default DailyArtPromptApp;
