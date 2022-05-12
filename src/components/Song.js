import React from "react";
import './Song.css';

const Song = ({ song }) => {

    return (
        <div>
            <ul>
                <li>
                    <img src={song['im:image'][2].label} alt="image"/>
                    <p>Title : {song["im:name"].label}</p>
                    <p>Artist : <a href={song["im:artist"].attributes.href} target="_blank"> {song["im:artist"].label}</a></p>
                    <a href={song["id"].label} target="_blank">Go Listen</a>
                    <hr></hr>
                </li>
            </ul>
        </div>
    )
}

export default Song