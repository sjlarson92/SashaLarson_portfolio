import React from 'react';

const Prompt = (props) =>
  <div className="prompt">
    <div testID="currentPromptDate" className="padding">
      {props.currentPrompt.date}
    </div>
    <div testID="currentPromptId" className="padding">
      Prompt #{props.currentPrompt.id}
    </div>
    <div
      testID="currentPromptText"
      className="text padding">
        {props.currentPrompt.text}
    </div>
  </div>


export default Prompt;
