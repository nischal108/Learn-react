import React from "react";

const Shimmer = () => {
  return (
    <div className="p-4 max-w-sm mx-auto">
      <div className="bg-white h-40 rounded-md overflow-hidden mb-4 relative shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-white animate-shimmer"></div>
      </div>
      <div className="space-y-4">
        <div className="bg-white h-6 rounded-md w-3/4 shadow-md"></div>
        <div className="bg-white h-4 rounded-md w-full shadow-md"></div>
        <div className="bg-white h-4 rounded-md w-5/6 shadow-md"></div>
      </div>
    </div>
  );
};

export default Shimmer;
