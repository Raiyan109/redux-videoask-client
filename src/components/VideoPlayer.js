import React from 'react';
import ReactPlayer from 'react-player';
const VideoPlayer = ({ url, playing, setPlaying }) => {
    return (
        <ReactPlayer
            url={url}
            playing={playing}
            width="100vw"
            height="100vh"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
        />
    );
};

export default VideoPlayer;