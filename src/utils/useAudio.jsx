import { useEffect, useState } from "react";

const useAudio = ({ srcList }) => {
  const [audio] = useState(new Audio());
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [playMode, setPlayMode] = useState("normal");

  const [state, setState] = useState({
    duration: 0,
    time: 0,
    paused: true,
  });

  const otherStates = {
    isRepeat,
    playMode,
  };

  const controls = {
    play: () => {
      if (isLoaded) {
        audio
          .play()
          .then(() => {
            setState((prevState) => ({ ...prevState, paused: false }));
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    },
    pause: () => {
      audio.pause();
      setState((prevState) => ({ ...prevState, paused: true }));
    },
    playNext: () => {
      const nextIndex = currentSongIndex + 1;
      let index = 0;
      if (playMode === "shuffle" && srcList?.length > 0) {
        index = Math.floor(Math.random() * (srcList?.length - 1));
        setIsLoaded(false);
        setCurrentSongIndex(index);
      } else if (nextIndex < srcList.length) {
        audio.src = srcList[nextIndex];
        setIsLoaded(false);
        setCurrentSongIndex(nextIndex);
      }
    },
    playCurrent: () => {
      const index = currentSongIndex;
      if (index < srcList.length) {
        audio.src = srcList[index];
        setIsLoaded(false);
        setCurrentSongIndex(index);
      }
    },
    playPrevious: () => {
      const previousIndex = currentSongIndex - 1;
      let index = 0;
      if (playMode === "shuffle" && srcList?.length > 0) {
        index = Math.floor(Math.random() * (srcList?.length - 1));
        setIsLoaded(false);
        setCurrentSongIndex(index);
      } else if (previousIndex >= 0) {
        audio.src = srcList[previousIndex];
        setIsLoaded(false);
        setCurrentSongIndex(previousIndex);
      }
    },
    seek: (time) => {
      audio.currentTime = time;
      setState((prevState) => ({ ...prevState, time }));
    },
    setVolume: (volume) => {
      audio.volume = volume;
    },
    toggleRepeate: () => {
      setIsRepeat(!isRepeat);
      console;
    },
    togglePlayMode: (mode) => {
      setPlayMode(mode);
    },
  };

  useEffect(() => {
    audio.addEventListener("timeupdate", () => {
      setState((prevState) => ({ ...prevState, time: audio.currentTime }));
    });

    audio.addEventListener("loadedmetadata", () => {
      setState((prevState) => ({ ...prevState, duration: audio.duration }));
    });

    const handleAudioEnded = () => {
      if (playMode === "repeat") {
        controls.playCurrent();
      } else {
        controls.playNext();
      }
    };

    audio.addEventListener("ended", handleAudioEnded);

    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
      controls.play();
    });

    return () => {
      audio.removeEventListener("timeupdate", () => {});
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("ended", handleAudioEnded);
      audio.removeEventListener("canplaythrough", () => {});
    };
  }, [audio, controls, isRepeat]);

  useEffect(() => {
    audio.src = srcList[currentSongIndex];
    audio.load();

    return () => {
      audio.src = "";
      audio.load();
    };
  }, [audio, srcList, currentSongIndex]);

  return { element: null, state, controls, otherStates };
};

export default useAudio;
