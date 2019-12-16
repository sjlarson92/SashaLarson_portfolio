import { getImagesAction } from './imageApi'
import axios from 'axios';
import * as TYPES from '../store/actions'

jest.mock('axios')

jest.mock('../EntryScreen')

const dispatch = jest.fn()

describe('getImagesAction', () => {
    beforeEach(() => { jest.clearAllMocks() })

    it('should call the api 3 times', () => {
        axios.get.mockResolvedValue({
            data: {
                message: 'dogPic'
            }
        })
        const secondFunc = getImagesAction()
        secondFunc(dispatch)
        expect(axios.get).toHaveBeenCalledTimes(3)
    })
    it('should call api with correct params', () => {
        axios.get.mockResolvedValue({
            data: {
                message: 'dogPic'
            }
        })
        getImagesAction()(dispatch)
        expect(axios.get).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random')
    })

    describe('when api response is resolved', () => {
        it('should call dispatch with corret params', async () => {
            axios.get.mockResolvedValue({
                data: {
                    message: 'dogPic'
                }
            })
            await getImagesAction()(dispatch)
            expect(dispatch).toHaveBeenCalledWith({
                type: TYPES.SET_INITIAL_IMAGES,
                payload: {
                    src: 'dogPic'
                }
            })
        })
    })
    describe('when api response is rejected', () => {
        it('should not call dispatch', async () => {
            axios.get.mockRejectedValue()
            await getImagesAction()(dispatch)
            expect(dispatch).not.toHaveBeenCalled()
        })

    })





})
