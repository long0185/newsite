import React from "react";
import Usefn from "../IrecogUse";
import Feature from "../IrecogFeature";
export default function IregoDetail() {
  return (
    <div className="tab-content border" id="pills-tabContent">
      <Usefn />
      <Feature />
      <div
        className="tab-pane fade show active bg-info"
        id="fn-detail"
        role="tabpanel"
        aria-labelledby="fn-detail-tab"
      ></div>
    </div>
  );
}
