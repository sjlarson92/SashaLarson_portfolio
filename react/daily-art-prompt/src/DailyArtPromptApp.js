import React from 'react';

import {promptsArray, promptsImages} from './data.js'
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
    promptsArray,
    currentPrompt: {id: 1, date: "October 11", text: "Puppy"},
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

  findPromptbyId = (promptId) => {
    const {promptsArray} = this.state;
    const newCurrentPrompt = promptsArray.find(prompt => prompt.id === promptId)
    return newCurrentPrompt
  }

  handleButtonClick = (num) => {
    console.log("say something")
    const {currentPrompt} = this.state;
    const currentId = currentPrompt.id;
    let newPromptId;
    if (num === -1){
      newPromptId = currentId - 1;
      if (newPromptId === 0){
        console.log("There are no previous prompts")
        return;
        //TODO: hide previous button if there are no previous prompts
      }
    }
    else {
      newPromptId = currentId + 1;
      console.log("newPromptId is: ", newPromptId);
    }
    const newCurrentPrompt = this.findPromptbyId(newPromptId)
    if (newCurrentPrompt === undefined){
      console.log("no more prompts")
      //TODO: hide next button when there are no future prompts
    }
    else {
      this.setState({
        currentPrompt: newCurrentPrompt,
      })
    }
  }

  render(){
    const { promptsImages, currentPrompt } = this.state;
    return (
      <div testID="appContainer" className="app">
        <div className="header">
          <div className="title">
            <h1 testID="header" style={styles.header}>Daily Art Prompt</h1>
          </div>
        </div>
        <PromptLayout
        currentPrompt={currentPrompt}
        handleButtonClick={this.handleButtonClick}
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
