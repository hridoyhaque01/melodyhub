import React, { useState } from "react";

function Topnav() {
  const [isActiveNote, setIsActiveNote] = useState(false);
  const [isActiveSetting, setIsActiveSetting] = useState(false);

  const [isRepeat, setIsRepeat] = useState(false);

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };
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
      <button onClick={controls.playPrevious}>Previous</button>
      <button onClick={controls.playNext}>Next</button>
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
}

export default Topnav;
{
  /* <div>
  <h4 className="text-sm font-normal">Sandro Choper</h4>
  <p className="text-xs font-thin">melody user</p>
</div>; */
}
