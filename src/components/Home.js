import React, { useState } from 'react';
import Button from './Button';
import VideoPlayer from './VideoPlayer';

const Home = () => {
    const [url, setUrl] = useState('https://streamable.com/5quccd');
    const [playing, setPlaying] = useState(false);
    const texts = ["Campaign Structure", "Learn Facebook basics", "3rd Choice"]
    const handleOnClick = () => {

    }

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
            <VideoPlayer
                url={url}
                playing={playing}
                setPlaying={setPlaying}
                controls='true'
            />

            <div
                style={{
                    position: 'absolute',
                    top: '70%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <h1 style={{ color: 'white', position: 'absolute', top: '-300px', left: '-200px' }}>Welcome</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {texts.map(text => <Button text={text} key={text} onclick={onclick} />)}
                </div>

            </div>
        </div>
    );
};

export default Home;