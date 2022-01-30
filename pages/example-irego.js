import React from "react";
import Application from "./components/example/Application";
import NavBar from "./components/Navbar";
const ExpampleIrego = () => {
  return (
    <div>
      <NavBar />
      <div className="w-screen bg-gray-400 mt_104">
      <img className="h_786 img-fluid" src="/assets/2560/example/banner.png" alt="" />
      </div>
      <Application />
    </div>
  );
};

export default ExpampleIrego;
