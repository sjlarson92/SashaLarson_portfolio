import React, { useState } from 'react';
import { connect } from 'react-redux';
import PromptButton from './PromptButton.js'
import Prompt from './Prompt.js'

const PromptLayout = (props) => {
  const [index, setIndex] = useState(0)

  const handlePreviousButtonClick = () => {
    const newIndex = index - 1;
    if (newIndex >= 0) {
      setIndex(newIndex)
    }
  }

  const handleNextButtonClick = () => {
    const { prompts } = this.props
    const newIndex = index + 1;
    if (newIndex <= prompts.length - 1) {
      setIndex(newIndex)
    }
  }

  return (
    <div data-testid="mainContentContainer" className="prompt-row">
      <PromptButton
        testID="previousButton"
        onClick={handlePreviousButtonClick}
        text="Previous"
      />
      <Prompt
        prompt={props.prompts[index]}
      />
      <PromptButton
        testID="nextButton"
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
