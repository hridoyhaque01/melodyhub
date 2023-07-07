import React, { useState } from "react";
import { thumbnail } from "../../../utils/getImages";
import useAudio from "../../../utils/useAudio";

const Player = ({ songs }) => {
  const { element, state, controls, otherStates } = useAudio({
    srcList: songs,
  });

  const [volume, setVolume] = useState("50");
  const [isShowVolumn, setIsShowVolumn] = useState(false);
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume.toString());
    controls.setVolume(newVolume / 100);
  };

  const handleTrackChange = (e) => {
    const currentTime = state.duration * (e.target.value / 100);
    controls.seek(currentTime);
  };
  return (
    <div className="grid grid-cols-4 items-center justify-between gap-2">
      {element}
      <div className="flex items-center gap-2">
        <div>
          <img
            src={thumbnail}
            alt=""
            className="w-10 h-10 rounded-md object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-whiteLow">Melody song</p>
          <p className="text-xs text-fadeLight">Lone</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 col-span-2">
        <div className="flex items-center gap-10 relative">
          {/* play mode  */}
          <button type="button" className="flex items-center ">
            {otherStates?.playMode === "normal" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="repeat"
                className="h-6 w-6 fill-white"
                onClick={() => controls?.togglePlayMode("repeat")}
              >
                <path d="M55 37.586l-5.293-5.293-1.414 1.561 7 7.146h1.414l7-7.146-1.414-1.488L57 37.586V15H8v2h47zM7 26.414V49h49v-2H9V26.414l5.293 5.293 1.414-1.561-7-7.146H7.293l-7 7.146 1.414 1.488z"></path>
              </svg>
            ) : otherStates?.playMode === "repeat" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-white"
                onClick={() => controls?.togglePlayMode("shuffle")}
              >
                <g clipPath="url(#clip0_2308_1717)">
                  <path
                    d="M11.5 14V8H10.5L8.5 9V10H10V14H11.5ZM17.5 12H16.5V14.5V16.5H10H5.5V13L1.5 17L5.5 21V17.5H17.5V12ZM15.5 1V4.5H3.5V10H4.5V7.5V5.5H10.5H15.5V9L19.5 5L15.5 1Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2308_1717">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                id="shuffle"
                onClick={() => controls?.togglePlayMode("normal")}
                className="h-6 w-6 fill-white"
              >
                <path d="m94.2 69.4-18-13c-.6-.4-1.4-.5-2.1-.2-.7.3-1.1 1-1.1 1.8v11H62L47.5 50 62 31h11v11c0 .8.4 1.4 1.1 1.8.3.1.6.2.9.2.4 0 .8-.1 1.2-.4l18-13c.5-.4.8-1 .8-1.6s-.3-1.2-.8-1.6l-18-13c-.6-.4-1.4-.5-2.1-.2-.7.3-1.1 1-1.1 1.8v11H61c-.6 0-1.2.3-1.6.8L45 46.7 30.6 27.8c-.4-.5-1-.8-1.6-.8H7c-1.1 0-2 .9-2 2s.9 2 2 2h21l14.5 19L28 69H7c-1.1 0-2 .9-2 2s.9 2 2 2h22c.6 0 1.2-.3 1.6-.8L45 53.3l14.4 18.9c.4.5 1 .8 1.6.8h12v11c0 .8.4 1.4 1.1 1.8.3.1.6.2.9.2.4 0 .8-.1 1.2-.4l18-13c.5-.4.8-1 .8-1.6s-.3-1.2-.8-1.6zM77 19.9 89.6 29 77 38.1V19.9zm0 60.2V61.9L89.6 71 77 80.1z"></path>
              </svg>
            )}
          </button>
          {/* decrease 10 second button */}
          <button
            type="button"
            onClick={() => controls.seek(state.time - 10)}
            className="flex items-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0988 15.5291V8.62532C10.1001 8.6179 10.0988 8.61027 10.0953 8.60365C10.0917 8.59702 10.086 8.59178 10.0791 8.58877C10.0722 8.58575 10.0645 8.58512 10.0572 8.58699C10.0499 8.58886 10.0434 8.59311 10.0388 8.59907C10.0388 8.59907 9.07135 9.98282 8.4751 10.3916"
                stroke="white"
                strokeLinecap="round"
              />
              <path
                d="M14.2125 8.44531H14.2088C13.0283 8.44531 12.0713 9.4023 12.0713 10.5828V13.3916C12.0713 14.5721 13.0283 15.5291 14.2088 15.5291H14.2125C15.393 15.5291 16.35 14.5721 16.35 13.3916V10.5828C16.35 9.4023 15.393 8.44531 14.2125 8.44531Z"
                stroke="white"
              />
              <path
                d="M3.58887 5.77734L4.56387 9.01734L7.80387 8.03859"
                stroke="white"
                strokeLinecap="round"
              />
              <path
                d="M4.55268 8.97666C5.27357 7.15328 6.62276 5.6478 8.35656 4.73218C10.0903 3.81655 12.0944 3.55113 14.0068 3.98387C15.9192 4.41661 17.6137 5.51897 18.7844 7.09183C19.9551 8.6647 20.5247 10.6044 20.3904 12.5605C20.256 14.5166 19.4266 16.3602 18.0519 17.7582C16.6771 19.1563 14.8478 20.0166 12.8942 20.1838C10.9406 20.3511 8.99165 19.8141 7.39931 18.6701C5.80698 17.526 4.67627 15.8502 4.21143 13.9454"
                stroke="white"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {/* prev play button */}
          <button
            type="button"
            className="flex items-center"
            onClick={controls.playPrevious}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                d="M38.234 40.8607C38.078 40.9479 37.9013 40.9913 37.7226 40.9864C37.544 40.9814 37.37 40.9283 37.219 40.8327L14.75 26.7357V40.2227C14.75 40.4879 14.6446 40.7422 14.4571 40.9298C14.2696 41.1173 14.0152 41.2227 13.75 41.2227C13.4848 41.2227 13.2304 41.1173 13.0429 40.9298C12.8554 40.7422 12.75 40.4879 12.75 40.2227V10.2227C12.75 9.95744 12.8554 9.70309 13.0429 9.51555C13.2304 9.32801 13.4848 9.22266 13.75 9.22266C14.0152 9.22266 14.2696 9.32801 14.4571 9.51555C14.6446 9.70309 14.75 9.95744 14.75 10.2227V23.7097L37.219 9.61366C37.3703 9.51883 37.5443 9.46626 37.7228 9.4614C37.9013 9.45654 38.0778 9.49956 38.2341 9.58601C38.3903 9.67246 38.5206 9.79917 38.6113 9.95298C38.7021 10.1068 38.7499 10.2821 38.75 10.4607V39.9857C38.75 40.3507 38.552 40.6857 38.234 40.8607ZM36.75 12.2697L16.102 25.2237L36.75 38.1787V12.2697Z"
                fill="#fff"
              />
            </svg>
          </button>
          {/* play button  */}
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
            onClick={() => {
              state.paused ? controls.play() : controls.pause();
            }}
          >
            {state.paused ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="play"
                className="w-6 h-6 fill-black"
              >
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                id="pause"
              >
                <path
                  fill="#000"
                  d="M8 5a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2z"
                ></path>
              </svg>
            )}
          </button>
          {/* next play button  */}
          <button
            type="button"
            className="flex items-center"
            onClick={controls.playNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              id="forward-button"
              className="h-6 w-6"
            >
              <path
                fill="#fff"
                d="M11.766 40.861a.992.992 0 0 0 1.015-.028L35.25 26.736v13.487a1 1 0 1 0 2 0v-30a1 1 0 0 0-2 0V23.71L12.781 9.614a1 1 0 0 0-1.531.847v29.525c0 .365.198.7.516.875zM13.25 12.27l20.648 12.954L13.25 38.179V12.27z"
              ></path>
            </svg>
          </button>
          {/* increase 10 second button */}
          <button
            type="button"
            className="flex items-center"
            onClick={() => controls.seek(state.time + 10)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.59885 15.5291V8.62532C8.60011 8.6179 8.59884 8.61027 8.59527 8.60365C8.59169 8.59702 8.586 8.59178 8.5791 8.58877C8.5722 8.58575 8.56449 8.58512 8.5572 8.58699C8.54991 8.58886 8.54345 8.59311 8.53885 8.59907C8.53885 8.59907 7.57135 9.98282 6.9751 10.3916"
                stroke="white"
                strokeLinecap="round"
              />
              <path
                d="M12.7125 8.44531H12.7088C11.5283 8.44531 10.5713 9.4023 10.5713 10.5828V13.3916C10.5713 14.5721 11.5283 15.5291 12.7088 15.5291H12.7125C13.893 15.5291 14.85 14.5721 14.85 13.3916V10.5828C14.85 9.4023 13.893 8.44531 12.7125 8.44531Z"
                stroke="white"
              />
              <path
                d="M20.4094 5.77734L19.4344 9.01734L16.1944 8.03859"
                stroke="white"
                strokeLinecap="round"
              />
              <path
                d="M19.4456 8.97666C18.7247 7.15328 17.3755 5.6478 15.6417 4.73218C13.9079 3.81655 11.9039 3.55113 9.9915 3.98387C8.07913 4.41661 6.38456 5.51897 5.21387 7.09183C4.04319 8.6647 3.47357 10.6044 3.60791 12.5605C3.74226 14.5166 4.57171 16.3602 5.94643 17.7582C7.32116 19.1563 9.15053 20.0166 11.1041 20.1838C13.0577 20.3511 15.0066 19.8141 16.599 18.6701C18.1913 17.526 19.322 15.8502 19.7869 13.9454"
                stroke="white"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {/* volumn */}
          <div className="flex items-center gap-4  ">
            <button
              className="flex items-center"
              onClick={() => setIsShowVolumn((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                id="volume"
                className="w-6 h-6 fill-white"
              >
                <path d="M90 50.00000000000001c0 8.6-2.5 16.9-7.3 24.1-.4.6-1 .9-1.7.9-.4 0-.8-.1-1.1-.3-.9-.6-1.2-1.8-.6-2.8C83.7 65.4 86 57.8 86 50c0-7.8-2.3-15.3-6.6-21.9-.6-.9-.4-2.2.6-2.8.9-.6 2.2-.3 2.8.6C87.5 33.1 90 41.4 90 50zm-10.2 0c0 5.8-1.5 11.6-4.4 16.8-.4.6-1 1-1.7 1-.3 0-.7-.1-1-.3-1-.5-1.3-1.8-.8-2.7 2.6-4.5 3.9-9.6 3.9-14.8 0-5.2-1.3-10.3-3.9-14.8-.5-1-.2-2.2.8-2.7s2.2-.2 2.7.7c2.9 5.2 4.4 11 4.4 16.8zm-10.2 0c0 3.2-.6 6.2-1.8 9.1-.3.8-1.1 1.2-1.8 1.2-.2 0-.5 0-.8-.1-1-.4-1.5-1.6-1.1-2.6 1-2.4 1.5-4.9 1.5-7.6s-.5-5.2-1.5-7.6c-.4-1 .1-2.2 1.1-2.6 1-.4 2.2.1 2.6 1.1 1.2 2.9 1.8 6 1.8 9.1zM58 16v68c0 .8-.5 1.5-1.2 1.8-.3.1-.5.2-.8.2-.5 0-1-.2-1.4-.6L36.2 67H12c-1.1 0-2-.9-2-2V35c0-1.1.9-2 2-2h24.2l18.4-18.4c.6-.6 1.4-.7 2.2-.4.7.3 1.2 1 1.2 1.8zM35 37H14v26h21V37zm19-16.2l-15 15v28.3l15 15V20.8z"></path>
                <path
                  fill="#00F"
                  d="M524-650v1684h-1784V-650H524m8-8h-1800v1700H532V-658z"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`flex flex-col gap-4 absolute right-0 -top-24 bg-dark-60 w-60 py-3 px-4 rounded-md volumn origin-bottom-right duration-300  ${
              isShowVolumn ? "scale-100 " : "scale-0"
            }`}
          >
            <p className="text-sm">Adjust Volumn</p>
            <div className="flex items-center gap-2 ">
              <button className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  id="volume"
                  className="w-6 h-6 fill-white"
                >
                  <path d="M90 50.00000000000001c0 8.6-2.5 16.9-7.3 24.1-.4.6-1 .9-1.7.9-.4 0-.8-.1-1.1-.3-.9-.6-1.2-1.8-.6-2.8C83.7 65.4 86 57.8 86 50c0-7.8-2.3-15.3-6.6-21.9-.6-.9-.4-2.2.6-2.8.9-.6 2.2-.3 2.8.6C87.5 33.1 90 41.4 90 50zm-10.2 0c0 5.8-1.5 11.6-4.4 16.8-.4.6-1 1-1.7 1-.3 0-.7-.1-1-.3-1-.5-1.3-1.8-.8-2.7 2.6-4.5 3.9-9.6 3.9-14.8 0-5.2-1.3-10.3-3.9-14.8-.5-1-.2-2.2.8-2.7s2.2-.2 2.7.7c2.9 5.2 4.4 11 4.4 16.8zm-10.2 0c0 3.2-.6 6.2-1.8 9.1-.3.8-1.1 1.2-1.8 1.2-.2 0-.5 0-.8-.1-1-.4-1.5-1.6-1.1-2.6 1-2.4 1.5-4.9 1.5-7.6s-.5-5.2-1.5-7.6c-.4-1 .1-2.2 1.1-2.6 1-.4 2.2.1 2.6 1.1 1.2 2.9 1.8 6 1.8 9.1zM58 16v68c0 .8-.5 1.5-1.2 1.8-.3.1-.5.2-.8.2-.5 0-1-.2-1.4-.6L36.2 67H12c-1.1 0-2-.9-2-2V35c0-1.1.9-2 2-2h24.2l18.4-18.4c.6-.6 1.4-.7 2.2-.4.7.3 1.2 1 1.2 1.8zM35 37H14v26h21V37zm19-16.2l-15 15v28.3l15 15V20.8z"></path>
                  <path
                    fill="#00F"
                    d="M524-650v1684h-1784V-650H524m8-8h-1800v1700H532V-658z"
                  ></path>
                </svg>
              </button>
              <input
                type="range"
                min={0}
                max={100}
                value={volume.toString()}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
        {/* track  */}
        <div className="track shrink-0 w-full">
          <div className="flex justify-between text-[10px] translate-y-3">
            <span>{(state.time / 60).toFixed(2)}</span>
            <span>{(state?.duration / 60).toFixed(2)}</span>
          </div>
          <div>
            <input
              type="range"
              min={0}
              max={100}
              value={(state.time / state.duration) * 100 || 0}
              onChange={handleTrackChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
