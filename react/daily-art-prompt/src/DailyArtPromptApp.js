import React from 'react';

import {promptsArray, promptsImages} from './data.js'
import './DailyArtPromptApp.css';
import ImageLayout from './components/ImageLayout.js'

class DailyArtPromptApp extends React.Component {
  state = {
    promptsArray,
    currentPrompt: {id: 1, date: "October 11", text: "Puppy"},
  }

  handleImageDoubleClick = () => {
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
        //TODO: hide previous button if there are no previous prompts
      }
    }
    else {
      newPromptId = currentId + 1;
      console.log("newPromptId is: ", newPromptId);
    }
    const newCurrentPrompt = this.findPromptbyId(newPromptId)
    if (newCurrentPrompt === undefined){
      console.log("no more prompts")
      //TODO: hide next button when there are no future prompts
    }
    else {
      this.setState({
        currentPrompt: newCurrentPrompt,
      })
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
          <ImageLayout
          imagesArray={promptsImages}
          onDoubleClick={() => this.handleImageDoubleClick()}
          />
        </div>
      </div>
    )
  }
}

export default DailyArtPromptApp;
