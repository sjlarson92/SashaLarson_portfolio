import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
    const [dogImage, setDogImage] = useState(null)

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                setDogImage(response.data.message)
            })
            .catch((error) => {
                console.log("Error fetching picsture", error)
            })
    }, [])

    return (
        <div>
            <h1> API </h1>
            <img
                src={dogImage}
                alt="dog"
            />
        </div>
    )
}



export default Api