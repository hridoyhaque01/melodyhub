import { useEffect, useState } from "react";

const useAudio = ({ srcList }) => {
  const [audio] = useState(new Audio());
  const [state, setState] = useState({
    duration: 0,
    time: 0,
    paused: true,
  });
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [shuffledSongs, setShuffledSongs] = useState([]);

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
      if (isShuffle && shuffledSongs.length > 0) {
        const currentIndex = shuffledSongs.findIndex(
          (song) => song === audio.src
        );
        if (currentIndex === shuffledSongs.length - 1) {
          controls.pause();
        } else {
          const nextSong = shuffledSongs[currentIndex + 1];
          audio.src = nextSong;
          setIsLoaded(false);
          setCurrentSongIndex(srcList.indexOf(nextSong));
        }
      } else if (nextIndex < srcList.length) {
        audio.src = srcList[nextIndex];
        setIsLoaded(false);
        setCurrentSongIndex(nextIndex);
      }
    },
    playPrevious: () => {
      const previousIndex = currentSongIndex - 1;
      if (isShuffle && shuffledSongs.length > 0) {
        const currentIndex = shuffledSongs.findIndex(
          (song) => song === audio.src
        );
        if (currentIndex === 0) {
          controls.pause();
        } else {
          const previousSong = shuffledSongs[currentIndex - 1];
          audio.src = previousSong;
          setIsLoaded(false);
          setCurrentSongIndex(srcList.indexOf(previousSong));
        }
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
    toggleShuffle: () => {
      setIsShuffle(!isShuffle);
      if (!isShuffle) {
        setShuffledSongs([...srcList].sort(() => Math.random() - 0.5));
      } else {
        setShuffledSongs([]);
      }
    },
  };

  useEffect(() => {
    audio.addEventListener("timeupdate", () => {
      setState((prevState) => ({ ...prevState, time: audio.currentTime }));
    });

    audio.addEventListener("loadedmetadata", () => {
      setState((prevState) => ({ ...prevState, duration: audio.duration }));
    });

    audio.addEventListener("ended", () => {
      controls.playNext();
    });

    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
      controls.play();
    });

    return () => {
      audio.removeEventListener("timeupdate", () => {});
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("ended", () => {});
      audio.removeEventListener("canplaythrough", () => {});
    };
  }, [audio, controls]);

  useEffect(() => {
    audio.src = srcList[currentSongIndex];
    audio.load();

    return () => {
      audio.src = "";
      audio.load();
    };
  }, [audio, srcList, currentSongIndex]);

  return { element: null, state, controls };
};

export default useAudio;
