import * as TYPES from '../store/actions'

export const getDateAction = () => (dispatch) => {
    dispatch({
        type: TYPES.SET_INITIAL_DATE
    })
}