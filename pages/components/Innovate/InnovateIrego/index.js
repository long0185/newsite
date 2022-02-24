import React from "react";
import s from "./index.module.css";

export default function index() {
  return (
    <>
    <div className={`${s.wrap} hidden mobile:flex flex-col items-center`}>
      <img
        src="/assets/2560/Innovate/title_img_2.png"
        className={`${s.top_img} relative mr-20 `}
      ></img>
      <span className={`${s.text} text-center mt-3 `}>
        iReCog可以为下肢iReGo提供虚拟现实的增配功能，
        增加患者贴近现实的训练方案，让患者更快的回归生活，让治疗师更便捷的提供治疗
      </span>
    </div>
    <div className={`${s.m_wrap}  mobile:hidden flex flex-col items-center`}>
      <img
        src="/assets/mobile/innovate/title_1.png"
        className={`${s.m_top_img} relative mr-20`}
      ></img>
      <span className={`${s.m_text} text-center mt-3 font_24`}>
        iReCog可以为下肢iReGo提供虚拟现实的增配功能，
        增加患者贴近现实的训练方案，让患者更快的回归生活，让治疗师更便捷的提供治疗
      </span>
    </div>
    </>
  );
}
