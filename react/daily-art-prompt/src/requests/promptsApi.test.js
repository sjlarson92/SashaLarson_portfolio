import { getPromptsAction } from './promptsApi'
import axios from 'axios';
import * as TYPES from '../store/actions'

jest.mock('axios')

jest.mock('../EntryScreen')

const dispatch = jest.fn()

const response = {
    data: {
        drinks: [
            {
                strIngredient1: 'prompts text'
            },
            {
                strIngredient1: 'prompts text 2'
            },
            {
                strIngredient1: 'prompts text 3'
            },
            {
                strIngredient1: 'prompts text 4'
            }
        ]
    }
}

describe('getPromptsAction', () => {
    beforeEach(() => { jest.clearAllMocks() })

    it('should call the api 4 times', async () => {
        axios.get.mockResolvedValue(response)
        await getPromptsAction()(dispatch)
        expect(axios.get).toHaveBeenCalledTimes(4)
    })
    it('should call api with correct params', () => {
        axios.get.mockResolvedValue(response)
        getPromptsAction()(dispatch)
        expect(axios.get).toHaveBeenCalledWith('https://the-cocktail-db.p.rapidapi.com/list.php?i=list', {
            main: 'GET',
            headers: {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "2b67ca4689mshf62ddb622772e77p114945jsn275c8aee2894"
            }
        })
    })

})

describe('when api response is resolved', () => {
    it('should call dispatch the correct number of times', () => {
        axios.get.mockResolvedValue(response)
        getPromptsAction()(dispatch)
        expect(dispatch).toHaveBeenCalledTimes(4)
    })

    it('should call dispatch with correct parameters', () => {
        axios.get.mockResolvedValue(response)
        getPromptsAction()(dispatch)
        expect(dispatch).toHaveBeenCalledWith({
            type: TYPES.SET_INITIAL_PROMPTS,
            payload: {
                text: response.data.drinks[0].strIngredient1
            }
        })
    })

})
describe('when api response is rejected', () => {
    it('should not call dispatch', () => {
        jest.clearAllMocks()
        axios.get.mockRejectedValue()
        getPromptsAction()(dispatch)
        expect(dispatch).not.toHaveBeenCalled()
    })

})
