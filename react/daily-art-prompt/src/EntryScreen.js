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

export const dispatchFunctions = {
    getImages: getImagesAction
}

export const returnsHi = () => 'hi'

export default connect(null, dispatchFunctions)(EntryScreen)

