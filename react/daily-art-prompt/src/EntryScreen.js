import DailyArtPromptApp from './DailyArtPromptApp';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImagesAction } from './requests/imageApi'
import { getPromptsAction } from './requests/promptsApi'

export const EntryScreen = ({ getImages, getPrompts }) => {

    useEffect(() => {
        getImages()
        getPrompts()
    }, [getImages, getPrompts])

    return (
        <div>
            <DailyArtPromptApp data-testid="dailyArtPromptApp" />
        </div>
    )
}

export const dispatchFunctions = {
    getImages: getImagesAction,
    getPrompts: getPromptsAction
}

export default connect(null, dispatchFunctions)(EntryScreen)

