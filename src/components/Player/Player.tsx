import React from 'react';
import YouTube from 'react-youtube';
// https://www.npmjs.com/package/react-youtube

const opts: object = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
        controls: 0,
    },
    
};

const _onReady = (e: any) => {
    e.target.pauseVideo();
  }



export const Player = () => {
    return (
        <YouTube videoId="YBYI7E2PqWE" opts={opts} onReady={_onReady} />
    )   

};
