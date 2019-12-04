import React from 'react';
import { connect } from 'react-redux';
import './DailyArtPromptApp.css';
import ImageLayout from './components/ImageLayout.js'
import PromptLayout from './components/PromptLayout.js'
import * as TYPES from './store/actions'

export const DailyArtPromptApp = ({ promptsImages, updatePromptImages, addComment }) => {

  const handleKeyDown = (e, imageId) => {
    if (e.keyCode === 13) {
      const value = e.target.value
      addComment(value, imageId)
    }
  }

  return (
    <div data-testid="appContainer" className={"app"}>
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
      {/* <div className="row">
        {promptsImages.map(image =>
          <ImageLayout
            data-className='imageLayout'
            data-testid={`image-${image.id}`}
            key={image.id}
            onDoubleClick={() => updatePromptImages(image.id)}
            image={image}
            onKeyDown={(e) => handleKeyDown(e, image.id)}
          />)}
      </div> */}
      <div>
        {promptsImages.map(image =>
          <img
            src={image}
            alt='dog'
          />
        )}
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  promptsImages: state.promptsImages
})

export const mapDispatchToProps = (dispatch) => ({
  updatePromptImages: (imageId) => dispatch({
    type: TYPES.UPDATE_PROMPT_IMAGES,
    payload: {
      imageId
    }
  }),
  addComment: (value, imageId) => dispatch({
    type: TYPES.ADD_COMMENT,
    payload: {
      imageId,
      value
    }
  })
})

const ConnnectedDailyArtPrompt = connect(mapStateToProps, mapDispatchToProps)(DailyArtPromptApp)

export default ConnnectedDailyArtPrompt;
