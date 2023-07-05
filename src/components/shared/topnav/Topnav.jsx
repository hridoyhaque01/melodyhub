import React, { useState } from "react";
import { Link } from "react-router-dom";
import { avater } from "../../../utils/getImages";

function Topnav() {
  const [isActiveNote, setIsActiveNote] = useState(false);
  const [isActiveSetting, setIsActiveSetting] = useState(false);

  return (
    <header className="py-5 px-6 sm:px-10 duration-300 bg-darkHigh">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <span className="text-sm">Melody</span>
          </Link>
        </div>
        <div className="hidden sm:flex items-center bg-black pr-2 rounded-sm ">
          <input
            type="text"
            placeholder="search here..."
            className="w-80 lg:w-[28rem] bg-transparent outline-none p-3 text-sm text-fadeLight duration-300"
          />

          <span type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="magnifier"
              className="w-5 h-5  fill-fade"
            >
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
            </svg>
          </span>
        </div>
        <div className="relative">
          <ul className="flex items-center gap-4 sm:gap-6">
            <li>
              <button
                type="button"
                className="relative flex items-center"
                onClick={() => setIsActiveSetting((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="setting"
                  className="h-5 w-5 sm:w-6 sm:h-6"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    transform="translate(2.5 1.5)"
                  >
                    <path d="M18.3066362,6.12356982 L17.6842106,5.04347829 C17.1576365,4.12955711 15.9906873,3.8142761 15.0755149,4.33867279 L15.0755149,4.33867279 C14.6398815,4.59529992 14.1200613,4.66810845 13.6306859,4.54104256 C13.1413105,4.41397667 12.7225749,4.09747295 12.4668193,3.66132725 C12.3022855,3.38410472 12.2138742,3.06835005 12.2105264,2.74599544 L12.2105264,2.74599544 C12.2253694,2.22917739 12.030389,1.72835784 11.6700024,1.3576252 C11.3096158,0.986892553 10.814514,0.777818938 10.2974829,0.778031878 L9.04347831,0.778031878 C8.53694532,0.778031878 8.05129106,0.97987004 7.69397811,1.33890085 C7.33666515,1.69793166 7.13715288,2.18454839 7.13958814,2.69107553 L7.13958814,2.69107553 C7.12457503,3.73688099 6.27245786,4.57676682 5.22654465,4.57665906 C4.90419003,4.57331126 4.58843537,4.48489995 4.31121284,4.32036615 L4.31121284,4.32036615 C3.39604054,3.79596946 2.22909131,4.11125048 1.70251717,5.02517165 L1.03432495,6.12356982 C0.508388616,7.03634945 0.819378585,8.20256183 1.72997713,8.73226549 L1.72997713,8.73226549 C2.32188101,9.07399614 2.68650982,9.70554694 2.68650982,10.3890161 C2.68650982,11.0724852 2.32188101,11.704036 1.72997713,12.0457667 L1.72997713,12.0457667 C0.820534984,12.5718952 0.509205679,13.7352837 1.03432495,14.645309 L1.03432495,14.645309 L1.6659039,15.7345539 C1.9126252,16.1797378 2.3265816,16.5082503 2.81617164,16.6473969 C3.30576167,16.7865435 3.83061824,16.7248517 4.27459956,16.4759726 L4.27459956,16.4759726 C4.71105863,16.2212969 5.23116727,16.1515203 5.71931837,16.2821523 C6.20746948,16.4127843 6.62321383,16.7330005 6.87414191,17.1716248 C7.03867571,17.4488473 7.12708702,17.764602 7.13043482,18.0869566 L7.13043482,18.0869566 C7.13043482,19.1435014 7.98693356,20.0000001 9.04347831,20.0000001 L10.2974829,20.0000001 C11.3504633,20.0000001 12.2054882,19.1490783 12.2105264,18.0961099 L12.2105264,18.0961099 C12.2080776,17.5879925 12.4088433,17.0999783 12.7681408,16.7406809 C13.1274382,16.3813834 13.6154524,16.1806176 14.1235699,16.1830664 C14.4451523,16.1916732 14.7596081,16.2797208 15.0389017,16.4393593 L15.0389017,16.4393593 C15.9516813,16.9652957 17.1178937,16.6543057 17.6475973,15.7437072 L17.6475973,15.7437072 L18.3066362,14.645309 C18.5617324,14.2074528 18.6317479,13.6859659 18.5011783,13.1963297 C18.3706086,12.7066935 18.0502282,12.2893121 17.6109841,12.0366133 L17.6109841,12.0366133 C17.17174,11.7839145 16.8513595,11.3665332 16.7207899,10.876897 C16.5902202,10.3872608 16.6602358,9.86577384 16.9153319,9.42791767 C17.0812195,9.13829096 17.3213574,8.89815312 17.6109841,8.73226549 L17.6109841,8.73226549 C18.5161253,8.20284891 18.8263873,7.04344892 18.3066362,6.13272314 L18.3066362,6.13272314 L18.3066362,6.12356982 Z"></path>
                    <circle cx="9.675" cy="10.389" r="2.636"></circle>
                  </g>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="relative flex items-center"
                onClick={() => setIsActiveNote((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="notification"
                  className="h-5 w-5 sm:w-6 sm:h-6"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M.00082545485 11.7871203L.00082545485 11.568135C.0329512746 10.9202451.240598836 10.2924906.602355621 9.74960514 1.20450201 9.09746185 1.61670318 8.29830554 1.79571385 7.43597814 1.79571385 6.76950123 1.79571385 6.09350321 1.85392645 5.4270263 2.15469153 2.21841601 5.32727806 3.37507799e-14 8.46105618 3.37507799e-14L8.53867298 3.37507799e-14C11.6724511 3.37507799e-14 14.8450376 2.21841601 15.1555048 5.4270263 15.2137174 6.09350321 15.1555048 6.76950123 15.2040153 7.43597814 15.3854338 8.30030508 15.7972211 9.10194449 16.3973735 9.75912624 16.7618363 10.2972046 16.9698126 10.9226612 16.9989037 11.568135L16.9989037 11.7775992C17.0205591 12.6480449 16.720769 13.4968208 16.1548211 14.167395 15.4069586 14.9514753 14.392113 15.4392693 13.3024038 15.5384332 10.1069938 15.8812057 6.8830333 15.8812057 3.68762325 15.5384332 2.59914366 15.4349924 1.58575794 14.9479001.835206008 14.167395.278 13.496309-.0177593319 12.6525831.00082545485 11.7871203zM6.05493552 18.8517756C6.55421005 19.478449 7.28739599 19.8840184 8.09222803 19.978725 8.89706007 20.0734316 9.70716835 19.8494655 10.3432635 19.3563938 10.5389031 19.2105605 10.7149406 19.0410062 10.8671768 18.8517756"
                    transform="translate(3.5 2)"
                  ></path>
                </svg>
                {/* <span className="absolute -top-1 right-0 text-xs h-2.5 w-2.5 flex bg-blue rounded-full"></span> */}
              </button>
            </li>
            <li>
              <div>
                <img src={avater} alt="" className="w-8 h-8 rounded-full" />
              </div>
            </li>
          </ul>
          {/* notifications  */}
          <div
            className={`absolute right-12 sm:right-16 top-0 w-60 sm:w-80 bg-darkHigh p-4 rounded-lg ${
              isActiveNote ? "scale-100" : "scale-0"
            }  translate-y-14 z-10 duration-300 origin-top-right shadow-md`}
          >
            <div className="flex items-center justify-between border-b border-blue pb-2">
              <p className="text-sm">Your notifications</p>
              <button type="button" className="text-blue text-sm">
                clear all
              </button>
            </div>

            {/* <div>No notification are found!</div> */}
            <div className=" divide-y divide-blue">
              <div className="flex items-start justify-between gap-4 py-2">
                <Link to="">
                  <p className="text-sm leading-5">
                    Lorem ipsum dolor sit amet consectetur...
                  </p>
                  <p className="text-xs text-fadeLight mt-2">45min ago</p>
                </Link>
                <button type="button" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    id="trash"
                    className="w-6 h-6"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="215.996"
                      x2="39.996"
                      y1="56"
                      y2="56"
                      fill="none"
                      stroke="#ff3333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                    ></line>
                    <line
                      x1="104"
                      x2="104"
                      y1="104"
                      y2="168"
                      fill="none"
                      stroke="#ff3333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                    ></line>
                    <line
                      x1="152"
                      x2="152"
                      y1="104"
                      y2="168"
                      fill="none"
                      stroke="#ff3333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                    ></line>
                    <path
                      fill="none"
                      stroke="#ff3333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                      d="M200 56V208a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56M168 56V40a16 16 0 0 0-16-16H104A16 16 0 0 0 88 40V56"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* settings  */}
          <div
            className={`absolute right-20 sm:right-28 top-0 w-52 sm:w-80 bg-darkHigh p-4 rounded-lg ${
              isActiveSetting ? "scale-100" : "scale-0"
            }  translate-y-14 z-10 duration-300 origin-top-right shadow-md`}
          >
            <div className="flex items-center justify-between border-b border-blue pb-2">
              <p className="text-sm">Your Settings</p>
              <button type="button" className="text-blue text-sm">
                clear all
              </button>
            </div>

            {/* <div>No notification are found!</div> */}
            <div className=" divide-y divide-blue">
              <div className="flex items-start justify-between gap-4 py-2">
                <Link to="">
                  <p className="text-sm leading-5">
                    Lorem ipsum dolor sit amet consectetur...
                  </p>
                  <p className="text-xs text-fadeLight mt-2">45min ago</p>
                </Link>
                <button type="button" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    id="trash"
                    className="w-6 h-6"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="215.996"
                      x2="39.996"
                      y1="56"
                      y2="56"
                      fill="none"
                      stroke="#ff3333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                    ></line>
                    <line
                      x1="104"
                      x2="104"
                      y1="104"
                      y2="168"
                      fill="none"
                      stroke="#ff3333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                    ></line>
                    <line
                      x1="152"
                      x2="152"
                      y1="104"
                      y2="168"
                      fill="none"
                      stroke="#ff3333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                    ></line>
                    <path
                      fill="none"
                      stroke="#ff3333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                      d="M200 56V208a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56M168 56V40a16 16 0 0 0-16-16H104A16 16 0 0 0 88 40V56"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topnav;
