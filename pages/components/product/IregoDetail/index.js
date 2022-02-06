import React from "react";

import IregoVideo from "../IregoVideo";
import IregoAppearance from "../IregoAppearance";
import IregoAdvantage from "../IregoAdvantage";
import IregoUsefn from "../IregoUsefn";
import IregoQuality from "../IregoQuality";
import IregoSoftware from "../IregoSoftware";
import IregoInteract from "../IregoInteract";
export default function IregoDetail() {
  return (
    <div className="w-100 boder-top" id="pills-tabContent">
      <IregoVideo />
      <IregoAppearance />
      <IregoUsefn />
      <IregoSoftware />
      <IregoInteract />
      <IregoAdvantage />
      <IregoQuality />
    </div>
  );
}
