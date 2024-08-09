import React, { useEffect } from 'react';

const Notification = ({ message, status, setVisibility }) => {

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setVisibility(false);
            console.log("hey");
            
        },3000)


        return()=> clearTimeout(timer);

    },[setVisibility])


  return (
    
    <div className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg text-white ${status ? 'bg-green-500' : 'bg-red-500'}`}>
      <div className="relative">
        <div className={`loader absolute top-0 left-0 h-1 ${status ? 'bg-green-700' : 'bg-red-700'}`}></div>
        <p className="text-center">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
