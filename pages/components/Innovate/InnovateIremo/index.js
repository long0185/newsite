import React from "react";
import s from "./index.module.css";

export default function index() {
  return (
    <div className={`${s.wrap} d-flex flex-column align-items-center`}>
      <img
        src="/assets/2560/innovate/title_img_3.png"
        className={`${s.top_img} position-relative  mr-20`}
      />
      <span className={`${s.text} text-center ml-16`}>
        iReCog可以为下肢iReGo提供虚拟现实的增配功能，
        增加患者贴近现实的训练方案，让患者更快的回归生活，让治疗师更便捷的提供治疗
      </span>
    </div>
  );
}
