import React from "react";
import Desc from "../Desc";
import s from "./index.module.css";
export default function index({ img, desc = "", classes = "",styles={} }) {
  return (
    <>
    <div
      className={`w-100 hidden mobile:flex items-center justify-center flex-col   ${
        desc ? s.banner_desc : s.banner
      }`}
      style={styles}
    >
      <img src={img} className={`relative ${s.img}`} />
      {desc && <Desc classes={classes}>{desc}</Desc>}
    </div>
    <div
      className={`w-screen  mobile:hidden flex items-center justify-center flex-col   ${
        desc ? s.m_banner_desc : s.m_banner
      }`}
      style={styles}
    >
      <img src={img} className={`relative ${s.m_img}`} />
      {desc && <Desc classes={classes}>{desc}</Desc>}
    </div>
    </>
    
  );
}
