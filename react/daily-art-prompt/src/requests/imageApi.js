import axios from 'axios';
import _ from 'lodash'
import * as TYPES from '../store/actions'

export const getImagesAction = () => (dispatch) => {
    _.times(3, () => axios.get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            console.log("api call")
            dispatch({
                type: TYPES.SET_INITIAL_IMAGES,
                payload: {
                    src: response.data.message
                }
            })
        })
    )
}

//write tests for this file!