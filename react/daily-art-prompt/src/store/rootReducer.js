import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as TYPES from './actions'
import moment from 'moment';

export const promptImagesReducer = (state = [], action) => {
    switch (action.type) {
        case TYPES.SET_INITIAL_IMAGES:
            const image = action.payload.image
            const updatedImages = [...state, image]
            return updatedImages

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

        case TYPES.UPDATE_COMMENT_EDITING:
            return state.map(image => {
                if (image.id === action.payload.imageId) {
                    const updatedCommentsClassName = image.comments.map(comment => {
                        if (comment.id === action.payload.commentId) {
                            return {
                                ...comment,
                                editing: !comment.editing
                            }
                        }
                        else {
                            return comment
                        }
                    })
                    return {
                        ...image,
                        comments: updatedCommentsClassName
                    }
                }
                else {
                    return image
                }
            })

        case TYPES.EDIT_COMMENT:
            return state.map(image => {
                if (image.id === action.payload.imageId) {
                    const updatedComments = image.comments.map(comment => {
                        if (comment.id === action.payload.commentId) {
                            return {
                                ...comment,
                                text: action.payload.value,
                                editing: false
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

export const dateReducer = (state = null, action) => {
    switch (action.type) {
        case TYPES.SET_INITIAL_DATE:
            return moment().format('YYYY-MM-DD')
        case TYPES.UPDATE_NEXT_INDEX:
            console.log("state: ", state)
            const currentDate = moment(state)
            const newDate = currentDate.add(1, 'day').format('YYYY-MM-DD')
            console.log("newDate: ", newDate)
            return newDate
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

export const promptsReducer = (state = {}, action) => {
    switch (action.type) {
        case TYPES.SET_INITIAL_PROMPTS:
            console.log("prompts", action.payload.prompts)
            return action.payload.prompts
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    promptsImages: promptImagesReducer,
    date: dateReducer,
    prompts: promptsReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware),
    )
)