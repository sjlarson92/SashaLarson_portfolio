import DailyArtPromptApp from './DailyArtPromptApp';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImagesAction } from './requests/imageApi'
import { getPromptsAction } from './requests/promptsApi'
import * as TYPES from './store/actions'

export const EntryScreen = ({ getImages, getPrompts, getDate }) => {

    useEffect(() => {
        getImages()
        getPrompts()
        getDate()
    }, [getImages, getPrompts, getDate])

    return (
        <div>
            <DailyArtPromptApp data-testid="dailyArtPromptApp" />
        </div>
    )
}

export const dispatchFunctions = {
    getImages: getImagesAction,
    getPrompts: getPromptsAction,
    getDate: () => (dispatch) => {
        dispatch({
            type: TYPES.SET_INITIAL_DATE
        })
    }
}

export default connect(null, dispatchFunctions)(EntryScreen)

