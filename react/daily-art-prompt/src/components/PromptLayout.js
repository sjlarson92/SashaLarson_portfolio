import React from 'react';

import {promptsArray} from '../data.js'
import PromptButton from './PromptButton.js'
import Prompt from './Prompt.js'

class PromptLayout extends React.Component {
  state = {
    promptsArray,
    currentPrompt: {id: 1, date: "October 11", text: "Puppy"}
  }

  findPromptbyId = (promptId) => {
    const {promptsArray} = this.state;
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
        console.log("There are no previous prompts")
        return;
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
    const { currentPrompt } = this.state;

    return (
      <div testID="mainContentContainer" className="prompt-row">
        <PromptButton
          testID="previousButton"
          onClick={() => this.handleButtonClick(-1)}
          text="Previous"
        />
        <Prompt
          currentPrompt={currentPrompt}
        />
        <PromptButton
          testID="nextButton"
          onClick={this.handleButtonClick}
          text="Next"
        />
      </div>
      )
    }
}


export default PromptLayout;
