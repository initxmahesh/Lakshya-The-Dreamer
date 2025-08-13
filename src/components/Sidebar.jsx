import React from "react";
import logo from "../assets/logo.png"
import userImage from '../assets/mahesh.jpg'
import { LayoutDashboard } from "lucide-react";

const Sidebar = () => {
    return (
      <>
        <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
          {/*logo*/}
          <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
            <img src={logo} alt="logo" className="w-[11rem]"></img>
          </div>
          {/*Nav bar*/}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <div>
              <span className="text-blue-500">MENU</span>
              <div className="border-2 rounded-md mt-5 flex items-center justify-center">
                    <LayoutDashboard className="w-7 h-7 mt-4 rounded-lg text-slate-600 dark:text-slate-300 " />
                    <h1 className="ml-2 text-slate-400 dark:text-slate-100">Dashboard</h1>
              </div>
            </div>
          </nav>
          {/*User Profile*/}
          <div className="p-4 border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark: bg-slate-800/50">
              <img
                src={userImage}
                alt="user"
                className="w-10 h-10 rounded-full ring-2 ring-blue-500"
              ></img>
              <div className="flex-1 min-w-0">
                <div className="flex-1 min=w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                    Mahesh Chaudhary
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    Learner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Sidebar