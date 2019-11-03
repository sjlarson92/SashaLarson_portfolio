import React, { useState } from 'react';

import {prompts} from '../data.js'
import PromptButton from './PromptButton.js'
import Prompt from './Prompt.js'

const PromptLayout = (props) => {
  const [index, setIndex] = useState(0)

  const handlePreviousButtonClick = () => {
    const newIndex = index - 1;
    if (newIndex >= 0){
      setIndex(newIndex)
    }
  }

  const handleNextButtonClick = () => {
    const newIndex = index + 1;
    if(newIndex <= prompts.length - 1){
      setIndex(newIndex)
    }
  }

    return (
      <div testID="mainContentContainer" className="prompt-row">
        <PromptButton
          testID="previousButton"
          onClick={handlePreviousButtonClick}
          text="Previous"
        />
        <Prompt
          prompt={prompts[index]}
        />
        <PromptButton
          testID="nextButton"
          onClick={handleNextButtonClick}
          text="Next"
        />
      </div>
      )
}


export default PromptLayout;
