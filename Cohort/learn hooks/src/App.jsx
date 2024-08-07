import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({name:"Nischal", isBanned:false});

  return (
    <div className=" w-full h-screen flex flex-col gap-10 items-center justify-center m-auto bg-zinc-700">
      <h1 className="text-center text-lg text-white"> Name : {user.name}</h1>
      <h1 className="text-center text-lg text-white"> Ban : {user.isBanned.toString()}</h1>
      <button className={`px-4 py-2 rounded ${!user.isBanned ?"bg-blue-500":"bg-red-500"} text-sm`} onClick={() => setUser({...user, isBanned : ! user.isBanned}) }>
        Change
      </button>
    </div>
  );
}

export default App;
