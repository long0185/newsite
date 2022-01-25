import Image from "next/image";
import React from "react";
import ire_banner from "assets/2560/innovate/banner.png";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`bg-info position-relative`}>
      <img
        src="/assets/2560/innovate/banner.png"
        className={`${s.ire_banner} position-relative`}
      />
    </div>
  );
}
