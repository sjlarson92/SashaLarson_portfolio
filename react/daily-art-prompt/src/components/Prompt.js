import React from 'react';

const Prompt = ({ prompt }) =>
  <div className="prompt">
    <div testID="promptDate" className="padding">
      {prompt.date}
    </div>
    <div testID="promptId" className="padding">
      Prompt #{prompt.id}
    </div>
    <div
      testID="promptText"
      className="text padding">
      {prompt.text}
    </div>
  </div>


export default Prompt;
