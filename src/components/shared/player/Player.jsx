import React from "react";
import useAudio from "../../../utils/useAudio";
const Player = ({ songs }) => {
  const singleSong = songs[0];
  const { element, state, controls } = useAudio({
    src: singleSong,
  });

  return (
    <div>
      {element}
      <button onClick={() => controls.seek(state.time - 10)}>-10 sec</button>
      <button
        onClick={() => {
          state.paused ? controls.play() : controls.pause();
        }}
      >
        {state.paused ? "play" : "pause"}
      </button>
      <button onClick={() => controls.seek(state.time + 10)}>+10 sec</button>
      <br />
      {Math.round(state.time)} / {Math.round(state.duration)}
      <br />
      Playback Speed (100 = 1)
      <br />
      <input
        onChange={(e) => controls.setPlaybackRate(e.target.value / 100)}
        type="number"
        value={state.playbackRate * 100}
      />
    </div>
  );
};

export default Player;
