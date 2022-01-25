import Image from "next/image";
import React from "react";
import ire_banner from "assets/2560/innovate/banner.png";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`bg-info position-relative`}>
      <div className={`${s.ire_banner} position-relative`}>
        <Image layout="fill" src={ire_banner} />
      </div>
    </div>
  );
}
