import React from "react";
import { Outlet } from "react-router-dom";
import Topnav from "../components/shared/topnav/Topnav";
import Sidebar from "../components/sidebar/Sidebar";

function Layout() {
  return (
    <div className="bg-white h-screen w-full overflow-hidden">
      <Topnav></Topnav>
      <div className="flex gap-6 h-screen">
        <Sidebar></Sidebar>
        <div className="w-full pr-10 h-[calc(100%-90px)] relative overflow-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;
