import * as TYPES from '../store/actions'
import moment from 'moment';

export const updateNextDateAction = () => (dispatch, getState) => {
    const date = moment(getState().date).add(1, 'day').format('YYYY-MM-DD')
    if(getState().prompts[date] !== undefined) {
        dispatch({
            type: TYPES.UPDATE_NEXT_DATE,
            payload: {
                date
            }
        })
    }
    
}

export const updatePreviousDateAction = () => (dispatch, getState) => {
    const date = moment(getState().date).subtract(1, 'day').format('YYYY-MM-DD')
    if(getState().prompts[date] !== undefined) {
        dispatch({
            type: TYPES.UPDATE_PREVIOUS_DATE,
            payload: {
                date
            }
        })
    }
}