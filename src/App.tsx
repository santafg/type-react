import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center bg-green-400">
      <h1 className="text-white text-3xl my-4 mx-2 uppercase">Tasks</h1>
      <div className="bg-white px-4 py-2 rounded-xl ">
        <input placeholder="Enter Todo" className="border-none outline-none" type="text" />
        <button className="ml-2">GO</button>
      </div>
    </div>
  );
};

export default App;
