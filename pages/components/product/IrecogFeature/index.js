import React from "react";
import s from "./index.module.css";
import Banner from "../../Banner";
export default function index() {
  return (
    <div
      id="feature"
      className={`${s.wrap} w-100 flex flex-col items-center `}
    >
      <Banner img={`/assets/2560/product/irecog/title-feathure.png`} />
      <div className={`w-100 flex flex-col mobile:flex-row items-center justify-center  ${s.content}`}>
        <div className={`${s.content_img}  relative`}>
          <img
            src={`/assets/2560/product/irecog/new_vr.png`}
            className={s.content_img}
          />
          <div
            className={`${s.svg_wrap} absolute flex items-start flex-col justify-center`}
          >
            <img
              src="/assets/2560/product/irecog/vr.svg"
              className={`${s.svg} relative`}
            ></img>
            <span className={`${s.big_title}`}>VR虚拟+现实场景</span>
            <span className={s.sm_title}>
              多感官实时交互，动+视+触+感知的综合训练系统，
            </span>
            <span className={s.sm_title}>实现多中心医护实时交互</span>
          </div>
        </div>
        <div
          className={`${s.content_img} flex mobile:hidden items-center justify-center`}
          style={{ background: "#303f5c" }}
        >
          <div
            className={`${s.svg_wrap} hidden absolute mobile:flex items-start flex-col justify-center`}
          >
            <img
              src={`/assets/2560/product/irecog/know.svg`}
              className={`${s.svg} relative`}
            ></img>
            <span className={`${s.big_title}`}>认知等级</span>
            <span className={s.sm_title}>
              根据认知等级，分初级、中级、高级训练。
            </span>
          </div>
          <div
            className={`mobile:hidden items-center flex  flex-col justify-center`}
          >
            <img
              src={`/assets/2560/product/irecog/know.svg`}
              className={`${s.svg} relative`}
            ></img>
            <span className={`${s.big_title}`}>认知等级</span>
            <span className={s.sm_title}>
              根据认知等级，分初级、中级、高级训练。
            </span>
          </div>
        </div>
        <div
          className={`${s.content_img} hidden mobile:block  relative`}
          style={{ background: "#303f5c" }}
        >
          <div
            className={`${s.svg_wrap} absolute flex items-start flex-col justify-center`}
          >
            <img
              src={`/assets/2560/product/irecog/know.svg`}
              className={`${s.svg} relative`}
            ></img>
            <span className={`${s.big_title}`}>认知等级</span>
            <span className={s.sm_title}>
              根据认知等级，分初级、中级、高级训练。
            </span>
          </div>
        </div>
      </div> 

      <div className={`w-100 flex flex-col mobile:flex-row items-center justify-center ${s.content} `}>
        
        <div
          className={`${s.content_img} hidden  mobile:block relative  item-center justify-center`}
          style={{ background: "#303f5c" }}
        >
          <div
            className={`${s.svg_wrap} absolute  flex items-start flex-col justify-center`}
          >
            <img
              src={`/assets/2560/product/irecog/class.svg`}
              className={`${s.svg} relative`}
            ></img>
            <span className={`${s.big_title}`}>沉浸感强</span>
            <span className={s.sm_title}>
              情景训练与日程生活结合，沉浸感强。
            </span>
          </div>
        </div>
        <div
          className={`${s.content_img}  relative`}
          style={{ background: "#fff" }}
        >
          <div className={`${s.bg_wrap} absolute`}>
            <img
              src={`/assets/2560/product/irecog/feature_4.png`}
              className={`${s.png} relative`}
            ></img>
          </div>
          <div
            className={`${s.svg_wrap} absolute flex items-start flex-col justify-center`}
          >
            <img
              src={`/assets/2560/product/irecog/platform.svg`}
              className={`${s.svg} relative`}
            ></img>
            <span className={`${s.big_title_4}`}>云平台</span>
            <span className={s.sm_title_4}>
              通过云平台可实时监控设备参数数据，为患者
            </span>
            <span className={s.sm_title_4}>提供安全可靠的康复数据社区。</span>
          </div>
        </div>
        <div
          className={`${s.content_img} flex mobile:hidden items-center justify-center  relative`}
          style={{ background: "#303f5c" }}
        >
          <div
            className={`${s.svg_wrap} flex items-center flex-col justify-center`}
          >
            <img
              src={`/assets/2560/product/irecog/class.svg`}
              className={`${s.svg} relative`}
            ></img>
            <span className={`${s.big_title}`}>沉浸感强</span>
            <span className={s.sm_title}>
              情景训练与日程生活结合，沉浸感强。
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
