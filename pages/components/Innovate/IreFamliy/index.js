import React from "react";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`${s.wrap} w-100 flex items-center justify-center flex-col`}>
      <img
        src="/assets/ire-banner.png"
        className={`${s.title_img} relative`}
      ></img>
      <div className={`${s.content} flex items-center justify-center flex-col mobile:flex-row`}>
        <img
          src="/assets/2560/Innovate/ire_logo.png"
          className={`${s.img_wrap} relative`}
        />
        <div className={`${s.text} flex justify-center flex-col mt-16 mobile:mt-0 mobile:ml-16`}>
          <span className={`font_30 font-extrabold block`}>“爱睿家”</span>
          <span className={`${s.line} block`}></span>
          <span className={`${s.desc} leading-10`}>
            是基于智能康复机器人技术打造的一体化精准康复医疗平台。其主要包含康复机器人iRe+系列产品，物联网化的康复设备。最终实现对上肢、下肢、认知等多方面、全面化的训练，覆盖用户不同时期、不同部位的康复训练，让康复训练变得可以数据量化，让传统的枯燥的康复训练变得有趣。最终帮助医疗机构实现智能化、标准化的智能康复平台。让传统康复医学训练升级为现代智能康复训练，达到解放治疗师、科学化医疗、数字化康复的目的。
          </span>
          <span className={`font_30 font-extrabold block mt-3`}>iRe+系列产品</span>
          <span className={`${s.line} block`}></span>
          <span className={`${s.desc} leading-10`}>
            目前包括有上肢，下肢，认知等形态各异的机器人。这些功能互补的机器人，让康复不再需要大量枯燥的人工训练，能够把康复的效率大大提高。以前传统只能是一对一的人工康复训练，现在通过机器人可以实现一对多的康复训练，从而解放治疗师。
          </span>
        </div>
      </div>
    </div>
  );
}
