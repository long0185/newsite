import Image from "next/image";
import React from "react";
import s from "./index.module.css";
import banner from "assets/2560/info/banner.png";
export default function index() {
  return (
    <div className={`${s.wrap} col-12 p-0 position-relative`}>
      <Image layout="fill" src={banner} />
    </div>
  );
}
