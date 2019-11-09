import { promptImagesReducer, promptsReducer, rootReducer } from './rootReducer'
import { promptsImages, prompts } from '../data'
import { combineReducers } from '../../../../../../../../Caches/typescript/3.6/node_modules/redux'

describe('promptImagesReducer', () => {
    describe('when the action.type equals UPDATE_PROMPT_IMAGES', () => {
        describe('when image.id equals payload.imageId and image.liked  is false', () => {
            it('should update image.liked  to true', () => {
                const state = [
                    {
                        id: 1,
                        liked: false
                    }
                ]
                const action = {
                    type: 'UPDATE_PROMPT_IMAGES',
                    payload: {
                        imageId: 1
                    }
                }
                expect(promptImagesReducer(state, action)).toEqual([{
                    id: 1,
                    liked: true
                }])
            })
        })
        describe('when image.id equals payload.imageId and when image.liked is true', () => {
            it('should update image.liked to false', () => {
                const state = [
                    {
                        id: 1,
                        liked: true
                    }
                ]
                const action = {
                    type: 'UPDATE_PROMPT_IMAGES',
                    payload: {
                        imageId: 1
                    }
                }
                expect(promptImagesReducer(state, action)).toEqual([{
                    id: 1,
                    liked: false
                }])
            })
        })

        describe('when image.id does not equal payload.imageId', () => {
            it('should return the image unchanged', () => {
                const state = [
                    {
                        id: 1,
                        liked: true
                    }
                ]
                const action = {
                    type: 'UPDATE_PROMPT_IMAGES',
                    payload: {
                        imageId: 2
                    }
                }
                expect(promptImagesReducer(state, action)).toEqual([{
                    id: 1,
                    liked: true
                }])
            })
        })

        describe('when action.type does not equal any of the cases', () => {
            describe('when goes to the default case', () => {
                it('should return promptsImages unchanged', () => {
                    const state = [
                    ]
                    const action = {
                        type: '',
                    }
                    expect(promptImagesReducer(state, action)).toEqual(promptsImages)
                })
            })
        })
    })
})

describe('promptsReducer', () => {
    it('should return prompts when given correct params', () => {
        const state = []
        const action = {}
        expect(promptsReducer(state, action)).toEqual(prompts)
    })
})

// describe('rootReducer', () => {
//     it('should call combineReducers with the correct params', () => {
//         const combineReducers = jest.fn()
//         expect(combineReducers).toHaveBeenCalledWith({
//             promptsImages,
//             prompts
//         })
//     })
// })    