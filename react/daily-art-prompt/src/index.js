import React from 'react';
import ReactDOM from 'react-dom';
import DailyArtPromptApp from './DailyArtPromptApp';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { promptsImages, prompts } from './data.js'

// const promptImagesReducer = (state, action) => {
//   console.log('state is: ', state)
//   if (action.type === 'UPDATE_PROMPT_IMAGES') {
//     console.log('promptImages Reducer action is ', action)
//     const updatedPromptImages = state.map(image => {
//       if (image.id === action.payload.imageId) {
//         return {
//           ...image,
//           liked: !image.liked,
//         }
//       } else {
//         return image;
//       }
//     })
//     return updatedPromptImages
//   }
//   else if (action.type === "whatever") {
//     console.log("rawr")
//   }
//   else {
//     return promptsImages
//   }
// }

const promptImagesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROMPT_IMAGES':
      const updatedPromptImages = state.map(image => {
        if (image.id === action.payload.imageId) {
          return {
            ...image,
            liked: !image.liked,
          }
        } else {
          return image;
        }
      })
      return updatedPromptImages
    case 'whatever':
      console.log('rawr')
      break
    default:
      return promptsImages
  }
}

const promptsReducer = (state, action) => {
  return prompts
}

const rootReducer = combineReducers({
  promptsImages: promptImagesReducer,
  prompts: promptsReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <DailyArtPromptApp />
  </Provider>,
  document.getElementById('root')
);
