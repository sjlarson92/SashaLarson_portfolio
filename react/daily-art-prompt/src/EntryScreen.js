import DailyArtPromptApp from './DailyArtPromptApp';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImagesAction } from './requests/imageApi'
import { getPromptsAction } from './requests/promptsApi'
import { getDateAction} from './requests/getDate'

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
    getDate: getDateAction
}

export default connect(null, dispatchFunctions)(EntryScreen)

