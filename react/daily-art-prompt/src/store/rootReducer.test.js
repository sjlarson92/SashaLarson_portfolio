import { promptImagesReducer, indexReducer } from './rootReducer'
import * as TYPES from './actions'

describe('promptImagesReducer', () => {
    describe('when action.type equals SET_INITIAL_IMAGES', () => {
        describe('when there is no images in state', () => {
            it('should return updatedImages with correct attributes', () => {
                const state = []
                const action = {
                    type: TYPES.SET_INITIAL_IMAGES,
                    payload: {
                        src: "apiCall"
                    }
                }
                expect(promptImagesReducer(state, action)).toEqual([{
                    id: 1,
                    src: action.payload.src,
                    liked: false,
                    comments: []
                }])
            })
        })
        describe('when there are images in state', () => {
            it('should return updatedImages with previous state and new Image', () => {
                const state = [{
                    id: 2,
                    src: "firstImage",
                    liked: false,
                    comments: []
                }]
                const action = {
                    type: TYPES.SET_INITIAL_IMAGES,
                    payload: {
                        src: "apiCall"
                    }
                }
                expect(promptImagesReducer(state, action)).toEqual([
                    ...state,
                    {
                        id: 3,
                        src: action.payload.src,
                        liked: false,
                        comments: []
                    }

                ])
            })

        })


    })

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
    })

    describe('when the action.type equals ADD_COMMENT', () => {
        describe('when image.id equals payload.imageId', () => {
            describe('when there are no previous comments', () => {
                it('should return image with new comment added', () => {
                    const state = [
                        {
                            id: 1,
                            comments: []
                        }
                    ]
                    const action = {
                        type: TYPES.ADD_COMMENT,
                        payload: {
                            imageId: 1,
                            value: 'new comment'
                        }
                    }
                    expect(promptImagesReducer(state, action)).toEqual(
                        [
                            {
                                id: 1,
                                comments: [{
                                    id: 1,
                                    text: 'new comment'
                                }]
                            }
                        ]
                    )
                })
            })
            describe('when there are previous comments', () => {
                it('should return image with new comment added', () => {
                    const state = [
                        {
                            id: 1,
                            comments: [{ id: 1 }]
                        }
                    ]
                    const action = {
                        type: TYPES.ADD_COMMENT,
                        payload: {
                            imageId: 1,
                            value: 'new comment'
                        }
                    }
                    expect(promptImagesReducer(state, action)).toEqual(
                        [
                            {
                                id: 1,
                                comments: [
                                    {
                                        id: 1
                                    },
                                    {
                                        id: 2,
                                        text: 'new comment'
                                    }]
                            }
                        ]
                    )
                })
            })
        })
        describe('when image.id does not equal payload.imageId', () => {
            it('should return image unchanged', () => {
                const state = [{
                    id: 1,
                    comments: []
                }]
                const action = {
                    type: TYPES.ADD_COMMENT,
                    payload: {
                        imageId: 2,
                        value: 'new comment'
                    }
                }
                expect(promptImagesReducer(state, action)).toEqual(state)
            })
        })
    })

    describe('when action.type equals DELETE_COMMENT', () => {
        describe('when image.id equals imageId given', () => {
            describe('when comment.id equals commentId given', () => {
                it('should return comment with deleted attribute true', () => {
                    const state = [
                        {
                            id: 1,
                            comments: [
                                {
                                    id: 1,
                                }
                            ]
                        }
                    ]
                    const action = {
                        type: TYPES.DELETE_COMMENT,
                        payload: {
                            imageId: 1,
                            commentId: 1
                        }
                    }
                    const result = promptImagesReducer(state, action)
                    expect(result[0].comments[0].deleted).toEqual(true)
                })
            })
            describe('when comment.id does not equal commentId given', () => {
                it('should return comment unchanged', () => {
                    const state = [
                        {
                            id: 1,
                            comments: [
                                {
                                    id: 1,
                                }
                            ]
                        }
                    ]
                    const action = {
                        type: TYPES.DELETE_COMMENT,
                        payload: {
                            imageId: 1,
                            commentId: 2
                        }
                    }
                    const result = promptImagesReducer(state, action)
                    expect(result[0].comments[0]).toEqual(state[0].comments[0])
                })

            })
        })
        describe('when image.id does not equal imageId given', () => {
            it('should return image unchanged', () => {
                const state = [
                    {
                        id: 1,
                        comments: [
                            {
                                id: 1,
                            }
                        ]
                    }
                ]
                const action = {
                    type: TYPES.DELETE_COMMENT,
                    payload: {
                        imageId: 2,
                        commentId: 1
                    }
                }
                const result = promptImagesReducer(state, action)
                expect(result[0]).toEqual(state[0])
            })

        })
    })

    describe('when action.type equals UPDATE_COMMENT_EDITING', () => {
        describe('when image.id === imageId given', () => {
            describe('when comment.id === commentId given', () => {
                it('should return comment with editing attribute updated', () => {
                    const state = [
                        {
                            id: 1,
                            comments: [
                                {
                                    id: 1,
                                }
                            ]
                        }
                    ]
                    const action = {
                        type: TYPES.UPDATE_COMMENT_EDITING,
                        payload: {
                            imageId: 1,
                            commentId: 1,
                            editing: false
                        }
                    }
                    const result = promptImagesReducer(state, action)
                    expect(result[0].comments[0].editing).toEqual(!action.payload.editing)
                })

            })
            describe('when comment.id does not equal commentId given', () => {
                it('should return comment unchanged', () => {
                    const state = [
                        {
                            id: 1,
                            comments: [
                                {
                                    id: 1,
                                }
                            ]
                        }
                    ]
                    const action = {
                        type: TYPES.UPDATE_COMMENT_EDITING,
                        payload: {
                            imageId: 1,
                            commentId: 2
                        }
                    }
                    const result = promptImagesReducer(state, action)
                    expect(result[0].comments[0]).toEqual(state[0].comments[0])
                })
            })
        })
        describe('when image.id does not equal imageId given', () => {
            it('should return image unchanged', () => {
                const state = [
                    {
                        id: 1,
                        comments: [
                            {
                                id: 1,
                            }
                        ]
                    }
                ]
                const action = {
                    type: TYPES.UPDATE_COMMENT_EDITING,
                    payload: {
                        imageId: 2,
                        commentId: 1
                    }
                }
                const result = promptImagesReducer(state, action)
                expect(result[0]).toEqual(state[0])
            })

        })
    })

    describe('when action.type equals EDIT_COMMENT', () => {
        describe('when image.id equals imageId given', () => {
            describe('when comment.id equals commentId given', () => {
                it('should return comment with updated text value and editing attribute set to false', () => {
                    const state = [
                        {
                            id: 1,
                            comments: [
                                {
                                    id: 1,
                                }
                            ]
                        }
                    ]
                    const action = {
                        type: TYPES.EDIT_COMMENT,
                        payload: {
                            imageId: 1,
                            commentId: 1,
                            value: 'updated comment'
                        }
                    }
                    const result = promptImagesReducer(state, action)
                    expect(result[0].comments[0]).toEqual({
                        id: 1,
                        text: 'updated comment',
                        editing: false
                    })
                })
            })
            describe('when commend.id does not equal commentId given', () => {
                it('should return comment unchanged', () => {
                    const state = [
                        {
                            id: 1,
                            comments: [
                                {
                                    id: 1,
                                }
                            ]
                        }
                    ]
                    const action = {
                        type: TYPES.EDIT_COMMENT,
                        payload: {
                            imageId: 1,
                            commentId: 2
                        }
                    }
                    const result = promptImagesReducer(state, action)
                    expect(result[0].comments[0]).toEqual(state[0].comments[0])
                })
            })
        })
        describe('when image.id does not equal imageId given', () => {
            it('should return image unchanged', () => {
                const state = [
                    {
                        id: 1,
                        comments: [
                            {
                                id: 1,
                            }
                        ]
                    }
                ]
                const action = {
                    type: TYPES.EDIT_COMMENT,
                    payload: {
                        imageId: 2,
                        commentId: 1
                    }
                }
                const result = promptImagesReducer(state, action)
                expect(result[0]).toEqual(state[0])
            })

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
