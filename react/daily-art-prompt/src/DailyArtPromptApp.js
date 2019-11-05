import React from 'react';
import { connect } from 'react-redux';

import './DailyArtPromptApp.css';
import ImageLayout from './components/ImageLayout.js'
import PromptLayout from './components/PromptLayout.js'

export class DailyArtPromptApp extends React.Component {
  state = {
    promptsImages: this.props.promptsImages,
  }

  findImagebyId = (imageId) => {
    const { promptsImages } = this.state;
    return promptsImages.find(image => image.id === imageId);
  }

  handleImageDoubleClick = (imageId) => {
    const { promptsImages } = this.state;
    const updatePromptImages = promptsImages.map(image => {
      if (image.id === imageId) {
        return {
          ...image,
          liked: !image.liked,
        }
      } else {
        return image;
      }
    })
    this.setState({
      promptsImages: updatePromptImages
    })
  }

  render() {
    const { promptsImages } = this.state;
    return (
      <div data-testid="appContainer" className="app">
        <div className="header">
          <div className="title">
            <h1 data-testid="header" style={{ color: 'red' }}>Daily Art Prompt</h1>
          </div>
        </div>
        <PromptLayout />
        <hr></hr>
        <h1
          data-testid="artGalleryHeader"
          className="title">
          Art Gallery
        </h1>
        <div className="row">
          {promptsImages.map(image =>
            <ImageLayout
              testID={`image-${image.id}`}
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

const ConnnectedDailyArtPrompt = connect(mapStateToProps)(DailyArtPromptApp)

export default ConnnectedDailyArtPrompt;
