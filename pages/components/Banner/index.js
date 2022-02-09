import Image from "next/image";
import React from "react";
import Desc from "../Desc";
import s from "./index.module.css";
export default function index({ img, desc = "", classes = "",styles={} }) {
  return (
    <>
    <div
      className={`w-screen hidden mobile:flex items-center justify-center flex-col   ${
        desc ? s.banner_desc : s.banner
      }`}
      style={styles}
    >
      <div className={`position-relative ${s.img}`}>
        <Image src={img} layout="fill" />
      </div>
      {desc && <Desc classes={classes}>{desc}</Desc>}
    </div>
    <div
      className={`w-screen  mobile:hidden flex items-center justify-center flex-col   ${
        desc ? s.m_banner_desc : s.m_banner
      }`}
      style={styles}
    >
      <div className={`position-relative ${s.m_img}`}>
        <Image src={img} layout="fill" />
      </div>
      {desc && <Desc classes={classes}>{desc}</Desc>}
    </div>
    </>
    
  );
}
