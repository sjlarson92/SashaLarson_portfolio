import axios from 'axios'
import _ from 'lodash'
import * as TYPES from '../store/actions'

export const getPromptsAction = () => (dispatch) => {
    let i = 0
    _.times(4, () =>
        axios.get('https://the-cocktail-db.p.rapidapi.com/list.php?i=list', {
            main: 'GET',
            headers: {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "2b67ca4689mshf62ddb622772e77p114945jsn275c8aee2894"
            }

        })
            .then((response) => {
                dispatch({
                    type: TYPES.SET_INITIAL_PROMPTS,
                    payload: {
                        text: response.data.drinks[i].strIngredient1
                    }
                })
                i += 1
            })
    )
}