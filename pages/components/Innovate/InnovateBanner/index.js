import React from "react";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`bg-info relative`}>
      <img
        src="/assets/2560/Innovate/banner.png"
        className={`${s.ire_banner} hidden mobile:block relative`}
      />
      <img
        src="/assets/mobile/innovate/banner.png"
        className={`${s.m_ire_banner}  mobile:hidden relative`}
      />
    </div>
  );
}
