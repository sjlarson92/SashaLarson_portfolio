import React from 'react';

import {promptsImages} from './data.js'
import './DailyArtPromptApp.css';
import ImageLayout from './components/ImageLayout.js'
import PromptLayout from './components/PromptLayout.js'

const styles = {
  header: {
    color: 'red'
  }
}


class DailyArtPromptApp extends React.Component {
  state = {
    promptsImages
  }

  findImagebyId = (imageId) => {
    const {promptsImages} = this.state;
    return promptsImages.find(image => image.id === imageId);
  }

  handleImageDoubleClick = (imageId) => {
    const {promptsImages} = this.state;
    const index = imageId - 1;
    const liked = promptsImages[index].liked
    promptsImages[index].liked = !liked;
    console.log("updated promptsImages is: ", promptsImages);
    this.setState({
      promptsImages
    })
  }

  render(){
    const { promptsImages } = this.state;
    return (
      <div testID="appContainer" className="app">
        <div className="header">
          <div className="title">
            <h1 testID="header" style={styles.header}>Daily Art Prompt</h1>
          </div>
        </div>
        <PromptLayout
        />
        <hr></hr>
        <h1
        testID="artGalleryHeader"
        className="title">
        Art Gallery
        </h1>
        <div className="row">
          {promptsImages.map(image =>
            <ImageLayout
            testID="imagesArray"
            key={image.id}
            onDoubleClick={this.handleImageDoubleClick}
            image={image}
            />)}
        </div>
      </div>
    )
  }
}

export default DailyArtPromptApp;
