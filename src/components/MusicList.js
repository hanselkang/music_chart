import React from 'react'
import Songs from './Song'

const MusicList = ({ songs }) => {

    const songList = songs.map((song, index) => {
        return (
            <Songs song={song} key={index}/>
        )
    })

    return (
        <div>
            {songList}
        </div>
    )

}


export default MusicList