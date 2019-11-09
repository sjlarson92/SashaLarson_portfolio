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

export const promptsReducer = (state, action) => {
    return prompts
}

export const rootReducer = combineReducers({
    promptsImages: promptImagesReducer,
    prompts: promptsReducer
})

export const store = createStore(rootReducer)