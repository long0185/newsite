import React from "react";
import Application from "./components/example/Application";
import NavBar from "./components/Navbar";
const ExpampleIrego = () => {
  return (
    <div>
      <NavBar />
      <div className="w-screen h_768 bg-gray-400 mt_104"></div>
      <Application />
    </div>
  );
};

export default ExpampleIrego;
