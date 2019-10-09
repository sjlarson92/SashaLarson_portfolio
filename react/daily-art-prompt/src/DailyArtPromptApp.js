import React from 'react';

import './DailyArtPromptApp.css';

class DailyArtPromptApp extends React.Component {
  state = {
    date: "2019-10-31",
    prompt: {id: 1, date: "October 31", text: "A cute pumpkin"}

  }

  render(){
    return (
      <div className="app">
        <div className="header">
          <div className="website-title">
            Daily Art Prompt
          </div>
        </div>
        <div className="row">
          <div>
            <button>Previous</button>
          </div>
          <div className="prompt">
            <div className="date">
              {this.state.date}
            </div>
            <div className="number">
              {this.state.prompt.id}
            </div>
            <div className="text">
              {this.state.prompt.text}
            </div>
          </div>
          <div>
            <button>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default DailyArtPromptApp;
