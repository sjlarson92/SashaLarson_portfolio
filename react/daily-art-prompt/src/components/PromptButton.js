import React from 'react';

const PromptButton = ({onClick, text}) =>
  <button onClick={onClick}>
    {text}
  </button>

export default PromptButton;
