import React from "react";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`${s.wrap} col-12 d-center flex-column`}>
      <img
        src="/assets/2560/Innovate/title_famliy.png"
        className={`${s.title_img} position-relative`}
      ></img>
      <div className={`${s.content} d-center`}>
        <img
          src="/assets/2560/Innovate/ire_logo.png"
          className={`${s.img_wrap} position-relative`}
        />
        <div className={`${s.text} d-flex flex-column`}>
          <span className={`font_30 font-extrabold d-block`}>“爱睿家”</span>
          <span className={`${s.line} d-block`}></span>
          <span className={`${s.desc} leading-10`}>
            是基于智能康复机器人技术打造的一体化精准康复医疗平台。其主要包含康复机器人iRe+系列产品，物联网化的康复设备。最终实现对上肢、下肢、认知等多方面、全面化的训练，覆盖用户不同时期、不同部位的康复训练，让康复训练变得可以数据量化，让传统的枯燥的康复训练变得有趣。最终帮助医疗机构实现智能化、标准化的智能康复平台。让传统康复医学训练升级为现代智能康复训练，达到解放治疗师、科学化医疗、数字化康复的目的。
          </span>
          <span className={`font_30 font-extrabold d-block mt-3`}>iRe+系列产品</span>
          <span className={`${s.line} d-block`}></span>
          <span className={`${s.desc} leading-10`}>
            目前包括有上肢，下肢，认知等形态各异的机器人。这些功能互补的机器人，让康复不再需要大量枯燥的人工训练，能够把康复的效率大大提高。以前传统只能是一对一的人工康复训练，现在通过机器人可以实现一对多的康复训练，从而解放治疗师。
          </span>
        </div>
      </div>
    </div>
  );
}
