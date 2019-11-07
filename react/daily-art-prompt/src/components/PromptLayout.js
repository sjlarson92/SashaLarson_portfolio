import React, { useState } from 'react';
import { connect } from 'react-redux';
import PromptButton from './PromptButton.js'
import Prompt from './Prompt.js'

export const PromptLayout = ({ prompts }) => {
  const [index, setIndex] = useState(0)

  const handlePreviousButtonClick = () => {
    const newIndex = index - 1;
    if (newIndex >= 0) {
      setIndex(newIndex)
    }
  }

  const handleNextButtonClick = () => {
    const newIndex = index + 1;
    if (newIndex <= prompts.length - 1) {
      setIndex(newIndex)
    }
  }

  return (
    <div data-testid="mainContentContainer" className="prompt-row">
      <PromptButton
        data-testid="previousButton"
        onClick={handlePreviousButtonClick}
        text="Previous"
      />
      <Prompt
        prompt={prompts[index]}
      />
      <PromptButton
        data-testid="nextButton"
        onClick={handleNextButtonClick}
        text="Next"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  prompts: state.prompts
})

export default connect(mapStateToProps)(PromptLayout);
