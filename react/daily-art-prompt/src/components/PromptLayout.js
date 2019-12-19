import { connect } from 'react-redux';
import React from 'react';
import PromptButton from './PromptButton.js'
import Prompt from './Prompt.js'
import * as TYPES from '../store/actions'

export const PromptLayout = ({ prompts, index, handleNextButtonClick, handlePreviousButtonClick }) =>
  <div data-testid="mainContentContainer" className="prompt-row">
    <PromptButton
      data-testid="previousButton"
      onClick={() => handlePreviousButtonClick(index)}
      text="Previous"
    />
    {prompts.length > 0 &&
      (<Prompt
        data-testid="prompt"
        prompt={prompts[index]}
      />)
    }
    <PromptButton
      data-testid="nextButton"
      onClick={() => handleNextButtonClick(index, prompts.length)}
      text="Next"
    />
  </div>

export const mapStateToProps = (state) => ({
  index: state.index,
  prompts: state.prompts
})

export const mapDispatchToProps = (dispatch) => ({
  handleNextButtonClick: (index, promptslength) => dispatch({
    type: TYPES.UPDATE_NEXT_INDEX,
    payload: {
      index,
      promptslength: promptslength
    }
  }),
  handlePreviousButtonClick: (index) => dispatch({
    type: TYPES.UPDATE_PREVIOUS_INDEX,
    payload: {
      index
    }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(PromptLayout);
