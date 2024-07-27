import React from 'react';

class AboutShimmer extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-6 animate-pulse">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
        <div className="w-full text-center">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/2 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded mb-4 w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-2/3 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/2 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-3/4 mx-auto"></div>
        </div>
      </div>
    );
  }
}

export default AboutShimmer;
