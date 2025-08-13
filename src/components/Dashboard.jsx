import React from "react";
import Goaltrace from "./Goaltrace";
import Interest from "./Interest";
import CareerGoals from "./CareerGoals";



const Dashboard = () => {
  return (
    <>
        <div className="pl-5 pt-5">
          <h1 className="font-bold text-5xl text-slate-900/90 dark:text-slate-100/80">Your Career Journey</h1>
          <p className="text-sm text-slate-900 dark:text-slate-100/80">
            Track Your Progress, Explore Opportuinities, and achieve your career
            goals
          </p>
        </div>
      <div className="flex h-[84vh] max-w-screen overflow-hidden">
        <div className="flex-1 flex items-stretch pt-10 overflow-hidden">
          <div className="flex-1 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
            <Goaltrace />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-1 overflow-hidden">
          <div className="flex-1 bg-white rounded-lg shadow-md flex overflow-hidden">
            <Interest />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md flex overflow-hidden">
            <CareerGoals />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
