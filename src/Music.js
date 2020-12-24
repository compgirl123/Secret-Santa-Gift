import React from 'react';

let audio = new Audio("/testjesus.mp3")

  const start = () => {
    audio.play()
  }

export default () => (
    <div>
    
    <audio media-player="audioPlayer" autoplay controls="controls" preload="auto" id="audioElement"
                crossOrigin="anonymous" src="{{{{audio}}}}"></audio>
  </div>
);