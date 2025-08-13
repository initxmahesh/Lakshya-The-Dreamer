import React from "react";
import Goaltrace from "./Goaltrace";
import Interest from "./Interest";
import CareerGoals from "./CareerGoals";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-[84vh] max-w-screen overflow-hidden">
        <div className="flex-1 flex items-stretch p-2 overflow-hidden">
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
