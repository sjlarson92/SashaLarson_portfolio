import React from 'react';

const Prompt = (props) =>
  <div className="prompt">
    <div testID="currentPromptDate" className="padding">
      {props.prompt.date}
    </div>
    <div testID="currentPromptId" className="padding">
      Prompt #{props.prompt.id}
    </div>
    <div
      testID="currentPromptText"
      className="text padding">
        {props.prompt.text}
    </div>
  </div>


export default Prompt;
