import fullScreenButton from "../../assets/icons/fullscreen.svg";
import playButton from "../../assets/icons/play.svg";
import pauseButton from "../../assets/icons/pause.svg";
import volumeUpButton from "../../assets/icons/volume_up.svg";
import volumeOffButton from "../../assets/icons/volume_off.svg";
import "./MainVideo.scss";
import React, { useState } from 'react';


const MainVideo = (props) => {
    // Play buton state
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    // Volume buton state
    const [isUp, setIsUp] = useState(false);
    const toggleVolume = () => {
        setIsUp(!isUp);
    };
    return (
    <section className="player">
        <video poster={props.image} className="player__video"></video>
        <div className="player__controls">
            <button className="player__play" type="button" onClick={togglePlay}>
                    <img className="player__play-icon" src={isPlaying ? pauseButton : playButton} alt={isPlaying ? "Pause Button" : "Play Button"} />
             </button>
            <div className="player__progress-bar">
                <progress className="player__progress-scale" value="0" min="0" max="100"></progress>
                <div className="player__progress-time">0:00 / 4:01</div>
            </div>
            <div className="player__right-controls">
                <button className="player__fullscreen" type="button" data-state="play"><img src={fullScreenButton} alt="Fullscreen Button" /> </button>
                <button className="player__volume" type="button" onClick={toggleVolume}>
                    <img src={isUp ? volumeOffButton : volumeUpButton} alt={isUp ? "Volume off" : "Volume up"} />
                </button>
            </div>
        </div>
    </section>
);
}

export default MainVideo;