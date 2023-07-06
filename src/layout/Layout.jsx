import React from "react";
import { Outlet } from "react-router-dom";
import audioFile from "../assets/test.mp3";
import Player from "../components/shared/player/Player";
import Topnav from "../components/shared/topnav/Topnav";
import RightSideContent from "../components/sidebar/RightSideContent";
import Sidebar from "../components/sidebar/Sidebar";

function Layout() {
  return (
    <div className="bg-black text-white h-screen w-full overflow-hidden">
      <Topnav></Topnav>
      <audio controls>
        <source src={audioFile} type="audio/mpeg" />
      </audio>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-72px)] sm:h-[calc(100vh-84px)] overflow-auto">
        <Sidebar></Sidebar>
        <div className="w-full px-10 relative">
          <Outlet></Outlet>
        </div>
        <RightSideContent></RightSideContent>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-player backdrop-blur-md z-[60]">
        <Player songs={[audioFile]}></Player>
      </div>
    </div>
  );
}

export default Layout;
