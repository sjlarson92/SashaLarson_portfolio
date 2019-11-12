import { connect } from 'react-redux';
import React from 'react';
import PromptButton from './PromptButton.js'
import Prompt from './Prompt.js'
import { prompts } from '../data.js'


export const PromptLayout = ({ index, handleNextButtonClick, handlePreviousButtonClick }) =>
  (
    <div data-testid="mainContentContainer" className="prompt-row">
      <PromptButton
        data-testid="previousButton"
        onClick={() => handlePreviousButtonClick(index)}
        text="Previous"
      />
      <Prompt
        prompt={prompts[index]}
      />
      <PromptButton
        data-testid="nextButton"
        onClick={() => handleNextButtonClick(index)}
        text="Next"
      />
    </div>
  )

const mapStateToProps = (state) => ({
  index: state.index
})

const mapDispatchToProps = (dispatch) => ({
  handleNextButtonClick: (index) => dispatch({
    type: 'HANDLE_NEXT_BUTTON_CLICK', payload: {
      index
    }
  }),
  handlePreviousButtonClick: (index) => dispatch({
    type: 'HANDLE_PREVIOUS_BUTTON_CLICK', payload: {
      index
    }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(PromptLayout);
