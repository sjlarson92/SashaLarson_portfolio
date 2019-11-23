import React from 'react';

const Prompt = ({ prompt }) =>
  <div className="prompt">
    <div data-testid="promptDate" className="padding">
      {prompt.date}
    </div>
    <div data-testid="promptId" className="padding">
      Prompt #{prompt.id}
    </div>
    <div
      data-testid="promptText"
      className="text padding">
      {prompt.text}
    </div>
  </div>


export default Prompt;
