import axios from 'axios'
import _ from 'lodash'
import * as TYPES from '../store/actions'

export const getPromptsAction = () => (dispatch) => {
    let count = 0
    _.times(4, () =>
        axios.get('http://localhost:8080/prompt')
            .then((response) => {
                // dispatch({
                //     type: TYPES.SET_INITIAL_PROMPTS,
                //     payload: {
                //         text: response.data.drinks[count].strIngredient1
                //     }
                // })
                // count += 1
            })
            .catch((error) => {
                console.log('Failed to fetch prompt data from API with error: ', error)
            })
    )
}