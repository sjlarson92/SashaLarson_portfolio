import DailyArtPromptApp from './DailyArtPromptApp';
import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash'
import * as TYPES from './store/actions'


export const EntryScreen = ({ setInitialImages }) => {

    const getInitialImages = useCallback(
        () => {
            _.times(3, () => axios.get('https://dog.ceo/api/breeds/image/random')
                .then((response) => {
                    console.log("api call")
                    setInitialImages(response.data.message)
                })
            )
        },
        [setInitialImages],
    )
    useEffect(() => {
        getInitialImages()
    }, [getInitialImages])



    return (
        <div>
            <DailyArtPromptApp />
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => ({
    setInitialImages: (image) => dispatch({
        type: TYPES.SET_INITIAL_IMAGES,
        payload: {
            image
        }
    })
})

const ConnectedEntryScreen = connect(null, mapDispatchToProps)(EntryScreen)

export default ConnectedEntryScreen;