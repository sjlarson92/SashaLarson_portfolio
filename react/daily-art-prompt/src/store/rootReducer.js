import { promptsImages, prompts } from '../data.js'
import { createStore, combineReducers } from 'redux';
import * as TYPES from './actions'

export const promptImagesReducer = (state = promptsImages, action) => {
    switch (action.type) {
        case TYPES.UPDATE_PROMPT_IMAGES:
            const updatedPromptImages = state.map(image => {
                if (image.id === action.payload.imageId) {
                    return {
                        ...image,
                        liked: !image.liked,
                    }
                }
                else {
                    return image;
                }
            })
            return updatedPromptImages

        case TYPES.ADD_COMMENT:
            return state.map(image => {
                if (image.id === action.payload.imageId) {
                    const newComment = {
                        id: image.comments.length > 0
                            ? image.comments[image.comments.length - 1].id + 1
                            : 1,
                        text: action.payload.value
                    }
                    return {
                        ...image,
                        comments: [...image.comments, newComment]
                    }
                }
                else {
                    return image;
                }
            })

        case TYPES.DELETE_COMMENT:
            return state.map(image => {
                if (image.id === action.payload.imageId) {
                    const updatedComments = image.comments.map(comment => {
                        if (comment.id === action.payload.commentId) {
                            return {
                                ...comment,
                                deleted: true
                            }
                        }
                        else {
                            return comment
                        }
                    })
                    return {
                        ...image,
                        comments: updatedComments
                    }
                }
                else {
                    return image
                }
            })

        default:
            return state
    }
}

export const indexReducer = (state = 0, action) => {
    switch (action.type) {
        case TYPES.UPDATE_NEXT_INDEX:
            const newIndex = action.payload.index + 1;
            if (newIndex <= prompts.length - 1) {
                return newIndex
            }
            else {
                return state
            }
        case TYPES.UPDATE_PREVIOUS_INDEX:
            const updatedIndex = action.payload.index - 1;
            if (updatedIndex >= 0) {
                return updatedIndex
            }
            else {
                return state
            }
        default:
            return state
    }

}

export const classNamesReducer = (state = { editingClassName: 'hidden', notEditingClassName: '' }, action) => {
    switch (action.type) {
        case TYPES.UPDATE_CLASS_NAMES:
            return {
                editingClassName: '',
                notEditingClassName: 'hidden'
            }
        default:
            return state
    }

}

export const rootReducer = combineReducers({
    promptsImages: promptImagesReducer,
    index: indexReducer,
    classNames: classNamesReducer

})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)