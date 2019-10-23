import React from 'react';

const PromptButton = (props) =>
  <button
  onClick={props.handleButtonClick}>
    {props.text}
  </button>

export default PromptButton;
