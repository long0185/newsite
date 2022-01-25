import React from "react";
import Banner from "./components/Banner";
import Application from "./components/example/Application";
import SubNav from "./components/example/subnav";
export default function example() {
  return (
    <div className="">
      <SubNav />
      <div className="tab-content border" id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          {/* <Banner img={{}} classes={{}} /> */}
          <Application />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        ></div>
      </div>
    </div>
  );
}
