import React from 'react';
import { connect } from 'react-redux';

import './DailyArtPromptApp.css';
import ImageLayout from './components/ImageLayout.js'
import PromptLayout from './components/PromptLayout.js'

export class DailyArtPromptApp extends React.Component {
  // state = {
  //   promptsImages: this.props.promptsImages,
  // }

  findImagebyId = (imageId) => {
    const { promptsImages } = this.props;
    return promptsImages.find(image => image.id === imageId);
  }

  handleImageDoubleClick = (imageId) => {
    this.props.updatePromptImages(imageId)

  }

  render() {
    const { promptsImages } = this.props;
    return (
      <div data-testid="appContainer" className="app">
        <div className="header">
          <div className="title">
            <h1 data-testid="header" style={{ color: 'red' }}>Daily Art Prompt</h1>
          </div>
        </div>
        <PromptLayout data-testid="promptLayout" />
        <hr></hr>
        <h1
          data-testid="artGalleryHeader"
          className="title">
          Art Gallery
        </h1>
        <div className="row">
          {promptsImages.map(image =>
            <ImageLayout
              data-testid={`image-${image.id}`}
              key={image.id}
              onDoubleClick={this.handleImageDoubleClick}
              image={image}
            />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  promptsImages: state.promptsImages
})

const mapDispatchToProps = (dispatch) => ({
  updatePromptImages: (imageId) => dispatch({
    type: 'UPDATE_PROMPT_IMAGES', payload: {
      imageId
    }
  })
})

const ConnnectedDailyArtPrompt = connect(mapStateToProps, mapDispatchToProps)(DailyArtPromptApp)

export default ConnnectedDailyArtPrompt;
