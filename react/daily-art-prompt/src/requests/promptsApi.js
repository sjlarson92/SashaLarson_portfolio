import axios from 'axios'
import * as TYPES from '../store/actions'

export const getPromptsAction = () => (dispatch) => {
    axios.get('https://the-cocktail-db.p.rapidapi.com/list.php?i=list', {
        main: 'GET',
        headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "2b67ca4689mshf62ddb622772e77p114945jsn275c8aee2894"
        }

    })
        .then((response) => {
            console.log('response is: ', response.data.drinks[0])
            dispatch({
                type: TYPES.SET_INITIAL_PROMPTS,
                payload: {
                    promptsArray: response.data.drinks[0]
                }
            })
        })
}