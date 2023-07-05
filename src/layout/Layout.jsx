import React from "react";
import { Outlet } from "react-router-dom";
import Topnav from "../components/shared/topnav/Topnav";
import Sidebar from "../components/sidebar/Sidebar";

function Layout() {
  return (
    <div className="bg-black text-white h-screen w-full overflow-hidden">
      <Topnav></Topnav>
      <div className="flex gap-6 h-[calc(100vh-72px)] sm:h-[calc(100vh-84px)] overflow-auto">
        <Sidebar></Sidebar>
        <div className="w-full pr-10 relative">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;
