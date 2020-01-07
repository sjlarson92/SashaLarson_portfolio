import { connect } from 'react-redux';
import React from 'react';
import PromptButton from './PromptButton.js'
import Prompt from './Prompt.js'
import * as TYPES from '../store/actions'

export const PromptLayout = ({ prompts, date, handleNextButtonClick, handlePreviousButtonClick }) =>
  <div data-testid="mainContentContainer" className="prompt-row">
    <PromptButton
      data-testid="previousButton"
      onClick={() => handlePreviousButtonClick()}
      text="Previous"
    />
    
    {Object.keys(prompts).length > 0 &&
      (<Prompt
        data-testid="prompt"
        prompt={prompts[date]}
      />)
    }
    <PromptButton
      data-testid="nextButton"
      onClick={() => handleNextButtonClick()}
      text="Next"
    />
  </div>

export const mapStateToProps = (state) => ({
  date: state.date,
  prompts: state.prompts
})

export const mapDispatchToProps = (dispatch) => ({
  handleNextButtonClick: (date) => dispatch({
    type: TYPES.UPDATE_NEXT_INDEX
  }),
  handlePreviousButtonClick: (date) => dispatch({
    type: TYPES.UPDATE_PREVIOUS_INDEX
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(PromptLayout);
