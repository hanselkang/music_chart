import React, { useState, useEffect } from 'react'
import MusicList from '../components/MusicList'

const MusicChartContainer = () => {

    const [songs, setSongs] = useState([])
    

    useEffect(() => {
        getMusics()
    }, [])

    const getMusics = (event) => {
        // fetch(event.target.value)
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res => res.json())
            .then(songsList => setSongs(songsList.feed.entry))
    }

    

    const chooseGenre = 
    [{ name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" },
    { name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" },
    { name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" },
    { name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" }].map((song, index) => {
        return <option value={song.url} key={index}>{song.name}</option>
    })

    return (
        <div>
            <select defaultValue="" onChange={getMusics}>
                {chooseGenre}
            </select>
            <MusicList songs={songs} />
        </div>
    )
}

export default MusicChartContainer