import React, { useState, useEffect } from 'react'
import MusicList from '../components/MusicList'


const MusicChartContainer = ({ chooseGenre }) => {

    
    const [songs, setSongs] = useState([])

    useEffect(() => {
        getMusics(chooseGenre[0].url)
    }, [chooseGenre])


    const getMusics = url => {
        fetch(url)
            // fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res => res.json())
            .then(songsList => setSongs(songsList.feed.entry))
            .catch(err => console.error)
    }


    const handleSelectChange = event => {
        getMusics(event.target.value);
    }





    return (
        <div>
            <select onChange={handleSelectChange}>
                {chooseGenre.map(genre => {
                    return <option key={genre.name} value={genre.url}>{genre.name}</option>
                })}
            </select>
            <MusicList songs={songs} />
        </div>
    )
}

export default MusicChartContainer