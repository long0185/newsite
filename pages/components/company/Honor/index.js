import s from "./index.module.css";
import React from "react";
import HonorSubnav from "../HonorSubnav";
import Banner from "../../../components/Banner";
export default function index() {
  return (
    <div id="honor" className={`w-100 p-0 ${s.wrap} d-center flex-col`}>
      <Banner img={"/assets/2560/company/title_honor.png"} />
      <HonorSubnav />
    </div>
  );
}
