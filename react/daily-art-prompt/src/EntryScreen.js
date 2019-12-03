import DailyArtPromptApp from './DailyArtPromptApp';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EntryScreen = () => {

    const [dogImage, setDogImage] = useState(null)

    useEffect(() => {
        axios.get('https://dog.ceo/api/breed/doberman/images/random')
            .then((response) => {
                setDogImage(response.data.message)
            })
    }, [])

    return (
        <div>
            <DailyArtPromptApp />
            <div>
                <h1>API 2 </h1>
                <img src={dogImage} alt="dog" />
            </div>
        </div>
    )
}

export default EntryScreen;