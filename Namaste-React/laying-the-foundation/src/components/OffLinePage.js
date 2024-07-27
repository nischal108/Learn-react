import React from 'react';

function OffLinePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <p className="text-xl font-semibold text-red-500">Oops, you are offline.</p>
      </div>
    </div>
  );
}

export default OffLinePage;
