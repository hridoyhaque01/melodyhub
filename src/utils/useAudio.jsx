import React, { useEffect, useRef, useState } from "react";

const parseTimeRange = (ranges) =>
  ranges.length < 1
    ? {
        start: 0,
        end: 0,
      }
    : {
        start: ranges.start(0),
        end: ranges.end(0),
      };

export default ({ srcList, autoPlay = false, startPlaybackRate = 1 }) => {
  const [state, setOrgState] = useState({
    buffered: {
      start: 0,
      end: 0,
    },
    time: 0,
    duration: 0,
    paused: true,
    waiting: false,
    playbackRate: 1,
    endedCallback: null,
    currentSongIndex: 0,
  });
  const setState = (partState) => setOrgState({ ...state, ...partState });
  const ref = useRef(null);

  const element = React.createElement("audio", {
    src: srcList[state.currentSongIndex],
    controls: false,
    ref,
    onPlay: () => setState({ paused: false }),
    onPause: () => setState({ paused: true }),
    onWaiting: () => setState({ waiting: true }),
    onPlaying: () => setState({ waiting: false }),
    onEnded: () => {
      if (state.currentSongIndex === srcList.length - 1) {
        // Last song ended, reset to the first song
        setState({ currentSongIndex: 0 });
      } else {
        // Move to the next song
        setState({ currentSongIndex: state.currentSongIndex + 1 });
      }
      if (state.endedCallback) {
        state.endedCallback();
      }
    },
    onDurationChange: () => {
      const el = ref.current;
      if (!el) {
        return;
      }
      const { duration, buffered } = el;
      setState({
        duration,
        buffered: parseTimeRange(buffered),
      });
    },
    onTimeUpdate: () => {
      const el = ref.current;
      if (!el) {
        return;
      }
      setState({ time: el.currentTime });
    },
    onProgress: () => {
      const el = ref.current;
      if (!el) {
        return;
      }
      setState({ buffered: parseTimeRange(el.buffered) });
    },
  });

  let lockPlay = false;

  const controls = {
    play: () => {
      const el = ref.current;
      if (!el) {
        return undefined;
      }

      if (!lockPlay) {
        const promise = el.play();
        const isPromise = typeof promise === "object";

        if (isPromise) {
          lockPlay = true;
          const resetLock = () => {
            lockPlay = false;
          };
          promise.then(resetLock, resetLock);
        }

        return promise;
      }
      return undefined;
    },
    pause: () => {
      const el = ref.current;
      if (el && !lockPlay) {
        return el.pause();
      }
    },
    seek: (time) => {
      const el = ref.current;
      if (!el || state.duration === undefined) {
        return;
      }
      time = Math.min(state.duration, Math.max(0, time));
      el.currentTime = time || 0;
    },
    setPlaybackRate: (rate) => {
      const el = ref.current;
      if (!el || state.duration === undefined) {
        return;
      }

      setState({
        playbackRate: rate,
      });
      el.playbackRate = rate;
    },
    setEndedCallback: (callback) => {
      setState({ endedCallback: callback });
    },
    playPrevious: () => {
      if (state.currentSongIndex === 0) {
        // First song, wrap around to the last song
        setState({ currentSongIndex: srcList.length - 1 });
      } else {
        // Move to the previous song
        setState({ currentSongIndex: state.currentSongIndex - 1 });
      }
    },
    playNext: () => {
      if (state.currentSongIndex === srcList.length - 1) {
        // Last song, wrap around to the first song
        setState({ currentSongIndex: 0 });
      } else {
        // Move to the next song
        setState({ currentSongIndex: state.currentSongIndex + 1 });
      }
    },
  };

  useEffect(() => {
    const el = ref.current;
    controls.setPlaybackRate(startPlaybackRate);

    if (autoPlay && el.paused) {
      controls.play();
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    setState({
      paused: el.paused,
    });
  }, [state.currentSongIndex]);

  useEffect(() => {
    const el = ref.current;
    if (autoPlay && el.paused) {
      controls.play();
    }
  }, [state.currentSongIndex]);

  return { element, state, controls };
};
