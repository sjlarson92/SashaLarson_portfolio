import React from 'react';

const PromptButton = (props) =>
  <button
  onClick={props.onClick}>
    {props.text}
  </button>

export default PromptButton;
