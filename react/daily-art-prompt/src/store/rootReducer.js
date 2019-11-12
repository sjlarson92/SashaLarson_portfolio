import { promptsImages, prompts } from '../data.js'
import { createStore, combineReducers } from 'redux';

export const promptImagesReducer = (state, action) => {
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

        default:
            return promptsImages
    }
}

export const indexReducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_NEXT_BUTTON_CLICK':
            const newIndex = action.payload.index + 1;
            if (newIndex <= prompts.length - 1) {
                return newIndex
            }
            else {
                return state
            }
        case 'HANDLE_PREVIOUS_BUTTON_CLICK':
            const updatedIndex = action.payload.index - 1;
            if (updatedIndex >= 0) {
                return updatedIndex
            }
            else {
                return state
            }
        default:
            return 0
    }

}

export const rootReducer = combineReducers({
    promptsImages: promptImagesReducer,
    index: indexReducer

})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)