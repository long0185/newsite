import React from "react";
import Banner from "./components/Info/Banner";
import Infomation from "./components/Info/Infomation";
import Expert from "./components/Info/Expert";
import NavBar from "./components/Navbar";
export default function info() {
  return (
    <>
      <NavBar />
      <div className="mt_104">
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
         
        </div>
      </div>
    </>
  );
}
