import React from "react";
import MaintainBanner from "./components/service/MaintainBanner";
import TrainForm from "./components/service/TrainForm";
import TrainService from "./components/service/TrainService";
import NavBar from "./components/Navbar";
const ServiceTrain = () => {
  return (
    <>
      <NavBar />
      <div className="pt_104">
        <MaintainBanner />
        <TrainService />
        <TrainForm />
      </div>
    </>
  );
};

export default ServiceTrain;
