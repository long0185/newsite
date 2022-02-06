import React from "react";
import IremoVideo from "../IremoVideo";
import IremoApperance from "../IremoAppearance";
import IremoUsefn from "../IremoUsefn";
import IremoSoftware from "../IremoSoftware";
import IremoInteract from "../IremoInteract";
import IremoAdvantage from "../IremoAdvantage";
import IremoQuality from "../IremoQuality";

export default function index() {
  return (
    <div className="tab-content border-top" id="pills-tabContent">
      <IremoVideo />
      <IremoApperance />
      <IremoUsefn />
      <IremoSoftware />
      <IremoInteract />
      <IremoAdvantage />
      <IremoQuality />
    </div>
  );
}
