import React from "react";
import s from "./index.module.css";

import Banner from "../../../components/Banner";

import title_unit from "assets/2560/company/title_unit.png";

export default function index() {
  return (
    <div className={`col-12 p-0 ${s.wrap} d-center flex-col`} id="unit">
      {/* <div className={`${s.title} relative`}>
        <Image layout="fill" src={title_unit} />
      </div> */}
      <Banner img={"/assets/2560/company/title_unit.png"} />
      <div className="flex">
        <img
          src="/assets/2560/company/unit/1.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/2.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/3.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/4.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/5.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/6.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
      </div>
      <div className="flex">
        <img
          src="/assets/2560/company/unit/7.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/8.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/9.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/10.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/11.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/12.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
      </div>
      <div className={`flex ${s.mt_150}`}>
        <img
          src="/assets/2560/company/unit/13.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/14.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/15.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/16.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/17.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
        <img
          src="/assets/2560/company/unit/18.png"
          className={`${s.img} relative hover:bg-white hover:scale-105 hover:z-50`}
        ></img>
      </div>
    </div>
  );
}
