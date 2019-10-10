import React from 'react';

import './DailyArtPromptApp.css';
import beachPuppy from './images/beach-puppy.jpg';

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
            <h1>Daily Art Prompt</h1>
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
        <hr></hr>
        <div>
          <h1>Art Gallery</h1>
        </div>
        <div className="image-gallery">
          <div>
            <img src={beachPuppy}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DailyArtPromptApp;
