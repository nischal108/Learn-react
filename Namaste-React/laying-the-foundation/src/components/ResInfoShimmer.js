import React from 'react';

function ResInfoShimmer() {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="bg-gray-200 h-6 w-3/4 rounded"></div>
      <div className="space-y-2">
        <div className="bg-gray-200 h-4 w-full rounded"></div>
        <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
        <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="bg-gray-200 h-6 w-full rounded"></div>
        <div className="bg-gray-200 h-6 w-5/6 rounded"></div>
        <div className="bg-gray-200 h-6 w-4/5 rounded"></div>
      </div>
    </div>
  );
}

export default ResInfoShimmer;
