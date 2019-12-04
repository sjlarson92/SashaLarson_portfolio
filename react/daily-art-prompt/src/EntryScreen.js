import DailyArtPromptApp from './DailyArtPromptApp';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { times } from 'lodash'
import * as TYPES from './store/actions'


export const EntryScreen = ({ setInitialImages }) => {

    let dogImages = []

    useEffect(() => {
        axios.get('https://dog.ceo/api/breed/doberman/images/random')
            .then((response) => {
                dogImages.push(response.data.message)
            })
        axios.get('https://dog.ceo/api/breed/doberman/images/random')
            .then((response) => {
                dogImages.push(response.data.message)
            })
        axios.get('https://dog.ceo/api/breed/doberman/images/random')
            .then((response) => {
                dogImages.push(response.data.message)
                setInitialImages(dogImages)
            })
    }, [])



    return (
        <div>
            <DailyArtPromptApp />
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => ({
    setInitialImages: (imageArray) => dispatch({
        type: TYPES.SET_INITIAL_IMAGES,
        payload: {
            imageArray
        }
    })
})

const ConnectedEntryScreen = connect(null, mapDispatchToProps)(EntryScreen)

export default ConnectedEntryScreen;