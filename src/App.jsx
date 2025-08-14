import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import {Routes, Route} from 'react-rout'

function App() {

  const [SidebarCollapse, setSidebarCollapse] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        <div className="flex h-screen overflow-hidden">
          <Sidebar collapse={SidebarCollapse} onToggle={()=>setSidebarCollapse(!SidebarCollapse)} currentPage={currentPage} onPageChange={setCurrentPage} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header hideSidebar={SidebarCollapse} onToggleSidebar={()=>setSidebarCollapse(!SidebarCollapse)} />
            <main className="flex-1 overflow-y-auto bg-transparent">
              <div className="p-6 -space-y-6">
                <Dashboard />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
