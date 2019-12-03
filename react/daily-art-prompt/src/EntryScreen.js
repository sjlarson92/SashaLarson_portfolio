import DailyArtPromptApp from './DailyArtPromptApp';
import React, { useEffect } from 'react';
import axios from 'axios';

const EntryScreen = () => {

    let dogImages = []

    useEffect(() => {
        axios.get('https://dog.ceo/api/breed/doberman/images/random')
            .then((response) => {
                dogImages.push(response.data.message)
                console.log('dogImages is: ', dogImages)
            })
        axios.get('https://dog.ceo/api/breed/doberman/images/random')
            .then((response) => {
                dogImages.push(response.data.message)
                console.log('dogImages is: ', dogImages)
            })
        axios.get('https://dog.ceo/api/breed/doberman/images/random')
            .then((response) => {
                dogImages.push(response.data.message)
                console.log('dogImages is: ', dogImages)
            })
    }, [])

    return (
        <div>
            <DailyArtPromptApp />
        </div>
    )
}

export default EntryScreen;

// TODO: connect this app and dispatch an action with TYPE 'SET_INITIAL_IMAGES' for promptimages