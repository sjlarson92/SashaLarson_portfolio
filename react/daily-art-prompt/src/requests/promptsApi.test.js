import { getPromptsAction } from './promptsApi'
import axios from 'axios';
import * as TYPES from '../store/actions'

jest.mock('axios')

jest.mock('../EntryScreen')

const dispatch = jest.fn()

describe('getPromptsAction', () => {
    beforeEach(() => { jest.clearAllMocks() })

    it('should call the api 4 times', () => {
        axios.get.mockResolvedValue({
            data: {
                message: 'this is prompt text'
            }
        })
        const testFunc = getPromptsAction()
        testFunc(dispatch)
        expect(axios.get).toHaveBeenCalledTimes(4)
    })
    it('should call api with correct params', () => {

    })

})

describe('when api response is resolved', () => {

})
describe('when api response is rejected', () => {

})
