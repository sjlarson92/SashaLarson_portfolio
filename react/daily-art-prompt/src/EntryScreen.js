import DailyArtPromptApp from './DailyArtPromptApp';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImagesAction } from './requests/imageApi'

export const EntryScreen = ({ getImages }) => {

    useEffect(() => {
        getImages()
    }, [])

    return (
        <div>
            <DailyArtPromptApp data-testid="dailyArtPromptApp" />
        </div>
    )
}

const dispatchFunctions = {
    getImages: getImagesAction
}

const ConnectedEntryScreen = connect(null, dispatchFunctions)(EntryScreen)

export default ConnectedEntryScreen;

//write tests for this file!