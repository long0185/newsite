import Image from "next/image";
import React from "react";
import svg from "assets/2560/home/logo.svg";
import InnovateSubnav from "./components/Innovate/InnovateSubnav";
import InnovateBanner from "./components/Innovate/InnovateBanner";
import IreFamliy from "./components/Innovate/IreFamliy";
import InnovateIrego from "./components/Innovate/InnovateIrego";
import InnovateIremo from "./components/Innovate/InnovateIremo";

export default function innovate(props) {
  return (
    <div className="contianer-fluid">
      <InnovateSubnav />
      <div className="tab-content border" id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <InnovateBanner />
          <IreFamliy />
          <InnovateIrego />
          <InnovateIremo />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        ></div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        ></div>
      </div>
    </div>
  );
}
