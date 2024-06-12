import React from 'react';

const Loading = () => {
  const spinnerStyle = {
    border: '16px solid #f3f3f3', // Light grey
    borderTop: '16px solid #3498db', // Blue
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif'
  };

  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{keyframesStyle}</style>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Loading;
