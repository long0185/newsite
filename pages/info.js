import React from "react";
import SubNav from "./components/Info/Subnav";
import Banner from "./components/Info/Banner";
import Infomation from "./components/Info/Infomation";
import Expert from "./components/Info/Expert";
export default function info() {
  return (
    <div className="">
      <SubNav />
      <Banner />
      <div className="tab-content border" id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Expert />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <Infomation />
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          d
        </div>
      </div>
    </div>
  );
}
