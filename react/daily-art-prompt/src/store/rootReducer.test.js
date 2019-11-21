import { promptImagesReducer, indexReducer } from './rootReducer'
import * as TYPES from './actions'

describe('promptImagesReducer', () => {
    describe('when the action.type equals TYPES.UPDATE_PROMPT_IMAGES', () => {
        describe('when image.id equals payload.imageId and image.liked  is false', () => {
            it('should update image.liked  to true', () => {
                const state = [
                    {
                        id: 1,
                        liked: false
                    }
                ]
                const action = {
                    type: TYPES.UPDATE_PROMPT_IMAGES,
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
                    type: TYPES.UPDATE_PROMPT_IMAGES,
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
                    type: TYPES.UPDATE_PROMPT_IMAGES,
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
                it('should return the state unchanged', () => {
                    const state = [
                    ]
                    const action = {
                        type: '',
                    }
                    expect(promptImagesReducer(state, action)).toEqual(state)
                })
            })
        })
    })

    describe('when the action.type equals TYPES.ADD_COMMENT', () => {
        describe('when key clicked equals ENTER', () => {
            describe('when image.id equals payload.imageId', () => {
                it('should add newComment to image.comments', () => {

                })
            })
        })
        describe('when key clicked is not ENTER', () => {

        })
    })
})

describe('indexReducer', () => {
    describe('when action.type equals UPDATE_NEXT_INDEX', () => {
        describe('when there is a next prompt', () => {
            it('should return newIndex', () => {
                const state = [
                    {
                        index: 0
                    }
                ]
                const action = {
                    type: TYPES.UPDATE_NEXT_INDEX,
                    payload: {
                        index: state[0].index
                    }
                }
                expect(indexReducer(state, action)).toEqual(state[0].index + 1)
            })
        })

        describe('when there is no next prompt', () => {
            it('should return state unchanged', () => {
                const state = [
                    {
                        index: 2
                    }
                ]
                const action = {
                    type: TYPES.UPDATE_NEXT_INDEX,
                    payload: {
                        index: 2
                    }
                }
                expect(indexReducer(state, action)).toEqual(state)
            })
        })
    })

    describe('when action.type equals UPDATE_PREVIOUS_INDEX', () => {
        describe('when there is a previous prompt', () => {
            it('should return the previous index', () => {
                const state = [{
                    index: 1
                }]
                const action = {
                    type: TYPES.UPDATE_PREVIOUS_INDEX,
                    payload: {
                        index: state[0].index
                    }
                }
                expect(indexReducer(state, action)).toEqual(state[0].index - 1)

            })
        })
        describe('when there is no previous prompt', () => {
            it('should return state unchanged', () => {
                const state = [{
                    index: 0
                }]
                const action = {
                    type: TYPES.UPDATE_PREVIOUS_INDEX,
                    payload: {
                        index: state[0].index
                    }
                }
                expect(indexReducer(state, action)).toEqual(state)
            })
        })
    })

    describe('when action.type defaults', () => {
        it('should return state', () => {
            const state = [{
                index: 1
            }]
            const action = {
                type: '',
                payload: {
                    index: state[0].index
                }
            }
            expect(indexReducer(state, action)).toEqual(state)
        })
    })
})
