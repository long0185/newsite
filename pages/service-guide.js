import React from "react";
import MaintainBanner from "./components/service/MaintainBanner";
import UseGuide from "./components/service/UseGuide";
import NavBar from "./components/Navbar";
const ServiceGuide = () => {
  return (
    <>
      <NavBar />
      <div className="mt_104 min_height">
        <MaintainBanner />
        <UseGuide />
      </div>
    </>
  );
};

export default ServiceGuide;
