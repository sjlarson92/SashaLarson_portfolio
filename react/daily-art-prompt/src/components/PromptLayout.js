import React from 'react';

import PromptButton from './PromptButton.js'

class PromptLayout extends React.Component {
  state = {

  }

  render(){
    const { currentPrompt, handleButtonClick } = this.props;

    return (
      <div testID="mainContentContainer" className="prompt-row">
        <PromptButton
          handleButtonClick = {() => handleButtonClick(-1)}
          text="Previous"
        />
        <div className="prompt">
          <div testID="currentPromptDate" className="padding">
            {currentPrompt.date}
          </div>
          <div testID="currentPromptId" className="padding">
            Prompt #{currentPrompt.id}
          </div>
          <div
            testID="currentPromptText"
            className="text padding">
              {currentPrompt.text}
          </div>
        </div>
        <PromptButton
          handleButtonClick = {() => handleButtonClick()}
          text="Next"
        />
      </div>
      )
    }



}


export default PromptLayout;
