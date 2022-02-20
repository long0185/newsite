import React from "react";
import s from "./index.module.css";
import Banner from "../../../components/Banner";

const list=[
  "/assets/2560/company/unit/1.png",
  "/assets/2560/company/unit/2.png",
  "/assets/2560/company/unit/3.png",
  "/assets/2560/company/unit/4.png",
  "/assets/2560/company/unit/5.png",
  "/assets/2560/company/unit/6.png",
  "/assets/2560/company/unit/7.png",
  "/assets/2560/company/unit/8.png",
  "/assets/2560/company/unit/9.png",
  "/assets/2560/company/unit/10.png",
  "/assets/2560/company/unit/11.png",
  "/assets/2560/company/unit/12.png",
  "/assets/2560/company/unit/13.png",
  "/assets/2560/company/unit/14.png",
  "/assets/2560/company/unit/15.png",
  "/assets/2560/company/unit/16.png",
  "/assets/2560/company/unit/17.png",
  "/assets/2560/company/unit/18.png"
]

export default function index() {
  return (
    <div className={`w-100 p-0 ${s.wrap} d-center flex-col`} id="unit">
      {/* <div className={`${s.title} relative`}>
        <Image layout="fill" src={title_unit} />
      </div> */}
      <Banner img={"/assets/2560/company/title_unit.png"} />
      <div className={`${s.m_img_wrap} flex mobile:hidden flex-wrap mb_100`}>
        {list.map((item,index)=>
         <img
         key={index}
         src={item}
         className={`${s.m_img} ${index%3==2?'border-right':''} ${index>14?'border-bottom':''} border-left border-top img-fluid bg-$f4 relative hover:bg-white `}
       ></img> 
        )}

      </div>
      <div className="hidden mobile:flex">
        <img
          src="/assets/2560/company/unit/1.png"
          className={`${s.img} border img-fluid relative hover:bg-white hover:shadow-lg `}
        ></img>
        <img
          src="/assets/2560/company/unit/2.png"
          className={`${s.img} border-y  img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/3.png"
          className={`${s.img} border img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/4.png"
          className={`${s.img} border-y img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/5.png"
          className={`${s.img} border img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/6.png"
          style={{borderRight:'1px solid #e5e7eb'}}
          className={`${s.img} border-y img-fluid relative hover:bg-white `}
        ></img>
      </div>
      <div className="hidden mobile:flex">
        <img
          src="/assets/2560/company/unit/7.png"
          className={`${s.img} img-fluid border-x relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/8.png"
          className={`${s.img} img-fluid  relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/9.png"
          className={`${s.img} img-fluid border-x relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/10.png"
          className={`${s.img} img-fluid  relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/11.png"
          className={`${s.img} img-fluid border-x relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/12.png"
          style={{borderRight:'1px solid #e5e7eb'}}
          className={`${s.img} img-fluid  relative hover:bg-white `}
        ></img>
      </div>
      <div className={`hidden mobile:flex ${s.mt_150}`}>
        <img
          src="/assets/2560/company/unit/13.png"
          className={`${s.img} border img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/14.png"
          className={`${s.img} border-y img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/15.png"
          className={`${s.img} border img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/16.png"
          className={`${s.img} border-y img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/17.png"
          className={`${s.img} border img-fluid relative hover:bg-white `}
        ></img>
        <img
          src="/assets/2560/company/unit/18.png"
          style={{borderRight:'1px solid #e5e7eb'}}
          className={`${s.img} border-y img-fluid relative hover:bg-white `}
        ></img>
      </div>
    </div>
  );
}
