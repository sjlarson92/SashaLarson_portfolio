import { connect } from 'react-redux';
import React from 'react';
import PromptButton from './PromptButton.js'
import Prompt from './Prompt.js'
import { prompts } from '../data.js'
import * as TYPES from '../store/actions'


export const PromptLayout = ({ index, handleNextButtonClick, handlePreviousButtonClick }) =>
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

export const mapStateToProps = (state) => ({
  index: state.index
})

export const mapDispatchToProps = (dispatch) => ({
  handleNextButtonClick: (index) => dispatch({
    type: TYPES.UPDATE_NEXT_INDEX, payload: {
      index
    }
  }),
  handlePreviousButtonClick: (index) => dispatch({
    type: TYPES.UPDATE_PREVIOUS_INDEX, payload: {
      index
    }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(PromptLayout);
