import React from "react";
import MaintainBanner from "./components/service/MaintainBanner";
import MaintainForm from "./components/service/MaintainForm";
import NavBar from "./components/Navbar";
const ServiceMaintain = () => {
  return (
    <>
      <NavBar />
      <div className="pt_104">
        <MaintainBanner />
        <MaintainForm />
      </div>
    </>
  );
};

export default ServiceMaintain;
