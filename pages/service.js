import React from "react";
import MaintainBanner from "./components/service/MaintainBanner";
import MaintainForm from "./components/service/MaintainForm";
import ServiceSubnav from "./components/service/serviceSubnav";
import TrainForm from "./components/service/TrainForm";
import TrainService from "./components/service/TrainService";
import UseGuide from "./components/service/UseGuide";
export default function service() {
  return (
    <div className="contianer-fluid">
      <ServiceSubnav />
      <div className="tab-content border" id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <MaintainBanner />
          <MaintainForm />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <MaintainBanner />
          <UseGuide />
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <MaintainBanner />
          <TrainService />
          <TrainForm />
        </div>
      </div>
    </div>
  );
}
