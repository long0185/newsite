import Image from "next/image";
import React from "react";
import Desc from "../Desc";
import s from "./index.module.css";
export default function index({ img, desc = "", classes = "" }) {
  return (
    <div
      className={`col-12 d-center flex-column  ${
        desc ? s.banner_desc : s.banner
      }`}
    >
      <div className={`position-relative ${s.img}`}>
        <Image src={img} layout="fill" />
      </div>
      {desc && <Desc classes={classes}>{desc}</Desc>}
    </div>
  );
}
