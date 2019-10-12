import React from 'react';

import {promptsArray} from './data.js'
import './DailyArtPromptApp.css';
import beachPuppy from './images/beach-puppy.jpg';
import beagle from './images/beagle.jpg';
import puppyInCup from './images/puppy-in-cup.jpeg';

class DailyArtPromptApp extends React.Component {
  state = {
    promptsArray,
    currentPrompt: {id: 1, date: "October 11", text: "Puppy"}

  }

  handleImageClick = () => {
    console.log("Image was clicked");
  }

  findPromptbyId = (promptId) => {
    const {promptsArray} = this.state;
    console.log("promptId is: ", promptId);
    const newCurrentPrompt = promptsArray.find(prompt => prompt.id === promptId)
    return newCurrentPrompt
  }

  handleButtonClick = (num) => {
    const {currentPrompt} = this.state;
    const currentId = currentPrompt.id;
    let newPromptId;
    if (num === -1){
      newPromptId = currentId - 1;
      if (newPromptId === 0){
        return console.log("There are no previous prompts")
      }
    }
    else {
      newPromptId = currentId + 1;
      console.log("newPromptId is: ", newPromptId);
    }
    const newCurrentPrompt = this.findPromptbyId(newPromptId)
    console.log("newCurrentPrompt is: ", newCurrentPrompt);
    this.setState({
      currentPrompt: newCurrentPrompt,
    })
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
              {this.state.currentPrompt.date}
            </div>
            <div className="padding">
              Prompt #{this.state.currentPrompt.id}
            </div>
            <div className="text padding">
              {this.state.currentPrompt.text}
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
