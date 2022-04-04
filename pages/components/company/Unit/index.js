import React, { useEffect, useRef, useState } from "react";
import s from "./index.module.css";
import Banner from "../../../components/Banner";
import { useInViewport } from "react-in-viewport";
import { u_variants } from "../../product/IregoAppearance";
import { motion } from "framer-motion";

const list = ["/assets/2560/company/unit/1.png", "/assets/2560/company/unit/2.png", "/assets/2560/company/unit/3.png", "/assets/2560/company/unit/4.png", "/assets/2560/company/unit/5.png", "/assets/2560/company/unit/6.png", "/assets/2560/company/unit/7.png", "/assets/2560/company/unit/8.png", "/assets/2560/company/unit/9.png", "/assets/2560/company/unit/10.png", "/assets/2560/company/unit/11.png", "/assets/2560/company/unit/12.png", "/assets/2560/company/unit/13.png", "/assets/2560/company/unit/14.png", "/assets/2560/company/unit/15.png", "/assets/2560/company/unit/16.png", "/assets/2560/company/unit/17.png", "/assets/2560/company/unit/18.png"];

export default function index() {
  const [list, setList] = React.useState([]);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  const [isPc, setisPc] = useState(false);
  useEffect(() => {
    let width = document.documentElement.clientWidth;
    let bool = width <= 1080 ? false : true;
    setisPc(bool);
    window.addEventListener("resize", () => {
      width = document.documentElement.clientWidth;
      bool = width <= 1080 ? false : true;
      setisPc(bool);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/hospital")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            val = val.sort((a, b) => a.OrderNu - b.OrderNu);
            setList(val);
          }
        });
    }
    getList();
  }, []);
  return (
    <motion.div ref={myRef} variants={isPc ? u_variants : {}} animate={`${inViewport ? "enter" : "leave"}`} className={`w-100 p-0 ${s.wrap} d-center flex-col`} id="unit">
      <Banner img={"/assets/2560/company/title_unit.png"} />
      <div className={`${s.m_img_wrap} flex mobile:hidden flex-wrap mb_100`}>
        {list.map((item, index) => (
          <img key={index} src={item} className={`${s.m_img} ${index % 3 == 2 ? "border-right" : ""} ${index > 14 ? "border-bottom" : ""} border-left border-top img-fluid bg-$f4 relative hover:bg-white `}></img>
        ))}
      </div>
      <div className="hidden mobile:flex">
        <a href={list[0]?.Title} target="_blank">
          <img src={list[0]?.Imageurl} className={`${s.img} border img-fluid relative hover:bg-white hover:shadow-lg `}></img>
        </a>
        <a href={list[1]?.Title}>
          <img src={list[1]?.Imageurl} className={`${s.img} border-y  img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[2]?.Title}>
          <img src={list[2]?.Imageurl} className={`${s.img} border img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[3]?.Title}>
          <img src={list[3]?.Imageurl} className={`${s.img} border-y img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[4]?.Title}>
          <img src={list[4]?.Imageurl} className={`${s.img} border img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[5]?.Title}>
          <img src={list[5]?.Imageurl} style={{ borderRight: "1px solid #e5e7eb" }} className={`${s.img} border-y img-fluid relative hover:bg-white `}></img>
        </a>
      </div>
      <div className="hidden mobile:flex">
        <a href={list[6]?.Title}>
          <img src={list[6]?.Imageurl} className={`${s.img} img-fluid border-x relative hover:bg-white `}></img>
        </a>
        <a href={list[7]?.Title}>
          <img src={list[7]?.Imageurl} className={`${s.img} img-fluid  relative hover:bg-white `}></img>
        </a>
        <a href={list[8]?.Title}>
          <img src={list[8]?.Imageurl} className={`${s.img} img-fluid border-x relative hover:bg-white `}></img>
        </a>
        <a href={list[9]?.Title}>
          <img src={list[9]?.Imageurl} className={`${s.img} img-fluid  relative hover:bg-white `}></img>
        </a>
        <a href={list[10]?.Title}>
          <img src={list[10]?.Imageurl} className={`${s.img} img-fluid border-x relative hover:bg-white `}></img>
        </a>
        <a href={list[11]?.Title}>
          <img src={list[11]?.Imageurl} style={{ borderRight: "1px solid #e5e7eb" }} className={`${s.img} img-fluid  relative hover:bg-white `}></img>
        </a>
      </div>
      <div className={`hidden mobile:flex ${s.mt_150}`}>
        <a href={list[12]?.Title}>
          <img src={list[12]?.Imageurl} className={`${s.img} border img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[13]?.Title}>
          <img src={list[13]?.Imageurl} className={`${s.img} border-y img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[14]?.Title}>
          <img src={list[14]?.Imageurl} className={`${s.img} border img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[15]?.Title}>
          <img src={list[15]?.Imageurl} className={`${s.img} border-y img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[16]?.Title}>
          <img src={list[16]?.Imageurl} className={`${s.img} border img-fluid relative hover:bg-white `}></img>
        </a>
        <a href={list[17]?.Title}>
          <img src={list[17]?.Imageurl} style={{ borderRight: "1px solid #e5e7eb" }} className={`${s.img} border-y img-fluid relative hover:bg-white `}></img>
        </a>
      </div>
    </motion.div>
  );
}
