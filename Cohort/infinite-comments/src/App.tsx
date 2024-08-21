
import React from "react";
import CommentList from "./components/CommentList";

const App: React.FC = () => {
  return (
    <div className="App w-full h-screen bg-gray-800 text-white flex items-center flex-col">
      <CommentList />
    </div>
  );
};

export default App;
