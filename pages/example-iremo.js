import React from "react";
import Application from "./components/example/Application";
import NavBar from "./components/Navbar";
const ExpampleIrego = () => {
  return (
    <div>
      <NavBar />
      <div className="w-screen mt_104">
      <img className="img-fluid w-100 h-786" src="/assets/2560/example/banner.png" alt="" />
      </div>
      <Application />
    </div>
  );
};

export default ExpampleIrego;
