import React from "react";
import Banner from "./components/Info/Banner";
import Infomation from "./components/Info/Infomation";
import Expert from "./components/Info/Expert";
import NavBar from "./components/Navbar";
export default function info() {
  return (
    <>
      <NavBar />
      <div className="mt_104 min_height">
        <Banner />
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <Expert />
          </div>
        </div>
      </div>
    </>
  );
}
