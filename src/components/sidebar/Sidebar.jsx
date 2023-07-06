import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const { isActiveSideBar } = useSelector((state) => state.common);

  console.log(isActiveSideBar);
  return (
    <div
      className={` fixed top-[72px] sm:top-[84px] xl:relative xl:top-0 ${
        isActiveSideBar ? "w-72" : "w-0 xl:w-72"
      } h-full bg-darkHigh overflow-auto duration-300 whitespace-nowrap shrink-0 z-50 text-fadeLow`}
    >
      <div className="py-20 px-6 w-full h-full">
        <div className="flex flex-col gap-10 ">
          <div>
            <h4>Browse Music</h4>
            <nav className="mt-6">
              <ul className="flex flex-col gap-1">
                <li>
                  <NavLink
                    to="/"
                    className="flex gap-2 items-center p-3 rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="home"
                        className="h-6 w-6 fill-fadeLow"
                      >
                        <path
                          fill="none"
                          stroke="#b3b3b3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023"
                          transform="translate(2.5 2)"
                        ></path>
                      </svg>
                    </span>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/albums"
                    className="flex gap-2 items-center p-3 rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        id="albums"
                        className="h-6 w-6 fill-fadeLow"
                      >
                        <path d="M464 144v288H48V144h416m16-16H32v320h448V128zM72 96h368v16H72zM104 64h304v16H104z"></path>
                      </svg>
                    </span>
                    <span>Albums</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tracks"
                    className="flex gap-2 items-center p-3 rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        id="music"
                        className="fill-fadeLow h-6 w-6"
                      >
                        <path
                          d="M29.55 1.21a1 1 0 0 0-1-.07l-15 6.65a1 1 0 0 0-.59.92v12.11A6.43 6.43 0 0 0 10.51 22a5.16 5.16 0 0 0-1.92 3.54A4.53 4.53 0 0 0 9.83 29 5.85 5.85 0 0 0 14 31c2.5 0 4-1.88 4-5V12.65l7-3.11v7.27a6.59 6.59 0 0 0-5.56 5.83 3.7 3.7 0 0 0 1 2.93A8 8 0 0 0 26 28c1.82 0 4-.91 4-5.24V2.05a1 1 0 0 0-.45-.84ZM28 22.76c0 3-1 3.24-2 3.24a6 6 0 0 1-4-1.76 1.76 1.76 0 0 1-.54-1.36c.48-4 4.53-4.18 4.47-4.18a1 1 0 0 0 .78-.25 1 1 0 0 0 .29-.75V8a1 1 0 0 0-1.41-.91l-9 4A1 1 0 0 0 16 12v14c0 3-1.51 3-2 3a3.85 3.85 0 0 1-2.68-1.32 2.54 2.54 0 0 1-.74-1.91c.32-2.78 3.2-3.08 3.41-3.09a1 1 0 0 0 1-1V9.36L28 3.59ZM2 6a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm8 5H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2Z"
                          data-name="13-music"
                        ></path>
                      </svg>
                    </span>
                    <span>Tracks</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/genres"
                    className="flex gap-2 items-center p-3 rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="music"
                        className="fill-fadeLow h-6 w-6"
                      >
                        <g data-name="Layer 2">
                          <g data-name="music">
                            <rect width="24" height="24" opacity="0"></rect>
                            <path d="M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span>Genres</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h4>Library</h4>
            <nav className="mt-6">
              <ul className="flex flex-col gap-1 ">
                <li>
                  <NavLink
                    to="/recentlyPlayed"
                    className="flex gap-2 items-center p-3 rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        id="files-recently"
                        className="w-6 h-6 fill-fadeLow "
                      >
                        <path
                          d="M40.14 14.45 30.8 4.9a3 3 0 0 0-2.14-.9H14a3 3 0 0 0-3 3v1h-1a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h1v27a3 3 0 0 0 3 3h21v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V20a1 1 0 0 0-2 0v21a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V16.55a3 3 0 0 0-.86-2.1ZM31 8l6.88 7H32a1 1 0 0 1-1-1Zm8 29a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14.66a1 1 0 0 1 .34.07V14a3 3 0 0 0 3 3h7ZM26 19a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm3-6a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2Z"
                          data-name="03 Files Recently"
                        ></path>
                      </svg>
                    </span>
                    <span>Recently Played</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favTracks"
                    className="flex gap-2 items-center p-3 rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="heart"
                        className="w-6 h-6 "
                      >
                        <path
                          fill="none"
                          fillRule="evenodd"
                          stroke="#b3b3b3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.26100981 17.8537669C7.09039739 16.5178915 5.07111022 14.9456454 3.2392904 13.1651694 1.95143752 11.8829466.9710055 10.3197719.373096631 8.59538613-.702856235 5.25030481.553929046 1.42082647 4.07111951.287520227 5.91961305-.307565201 7.93844933.0325524403 9.49609195 1.20147687L9.49609195 1.20147687C11.0543328.0339759987 13.0724617-.306022468 14.9210644.287520227 18.4382548 1.42082647 19.7040817 5.25030481 18.6281289 8.59538613 18.03022 10.3197719 17.049788 11.8829466 15.7619351 13.1651694 13.9301153 14.9456454 11.9108281 16.5178915 9.7402157 17.8537669L9.50513357 18 9.26100981 17.8537669zM13.2393229 4.0530216C14.3046302 4.39332197 15.061552 5.34972367 15.1561465 6.47500671"
                          transform="translate(2.5 3)"
                        ></path>
                      </svg>
                    </span>
                    <span>Favorite Tracks</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/charts"
                    className="flex gap-2 items-center p-3 rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        id="graph"
                        className="w-6 h-6 fill-fadeLow "
                      >
                        <path d="M42.549 16.701a2.891 2.891 0 0 0-2.888 2.888c0 .387.079.756.218 1.094L31.33 28.64a2.867 2.867 0 0 0-2.466-.349l-2.732-3.442c.204-.401.324-.841.324-1.304 0-1.592-1.295-2.888-2.888-2.888s-2.888 1.296-2.888 2.888c0 .146.027.286.048.428l-6.895 5.407a2.868 2.868 0 0 0-1.54-.454 2.891 2.891 0 0 0-2.888 2.888c0 1.593 1.295 2.889 2.888 2.889s2.888-1.296 2.888-2.889c0-.294-.057-.573-.139-.84l6.667-5.228c.018.015.031.035.049.049a2.894 2.894 0 0 0 2.907.423l2.627 3.31c-.28.45-.448.965-.448 1.514a2.891 2.891 0 0 0 2.888 2.889 2.892 2.892 0 0 0 2.888-2.889 2.86 2.86 0 0 0-.115-.762l8.736-8.13c.395.203.835.328 1.309.328 1.592 0 2.888-1.296 2.888-2.888s-1.296-2.889-2.889-2.889zm-30.256 16a.889.889 0 1 1 .002-1.778.889.889 0 0 1-.002 1.778zm10.72-8.464a.89.89 0 0 1 .555-1.581.889.889 0 0 1 .629 1.515v.001h-.001c-.352.35-.971.235-1.183.065zm6.719 7.693a.889.889 0 0 1-.54-1.593c.004-.003.01-.004.014-.008l.001-.001a.869.869 0 0 1 .526-.175.89.89 0 0 1-.001 1.777zm12.817-11.453a.889.889 0 1 1 .001-1.777.889.889 0 0 1-.001 1.777z"></path>
                      </svg>
                    </span>
                    <span>Chart</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
