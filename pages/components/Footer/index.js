import React, { useState } from "react";
import s from "./index.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  show: {
    translateY: "-15rem",
    height: "15rem",
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    translateY: 0,
    height: 0,
    transition: {
      duration: 0.8,
    },
    transitonEnd: {},
  },
};
export default function Footer() {
  const [show, setShow] = useState(false);
  return (
    <div className="footer w-100 d-flex align-items-center justify-content-between relative">
      <div className="left-footer pl-16">
        <span className="pl-3 ml-3">
          Copyright © 2016上海金矢机器人科技有限公司 All Rights Reserved.
          沪ICP备19033942号
        </span>
        <span className="mx-3">|</span>
        <Link href={'/legal-declaration'} >
          <span className="mr-5 cursor-pointer">法律声明</span></Link>
      </div>
      <div className={` h-100   right-0  absolute z-20 ${s.right} `}>
        <div>
          <img
            className={` footer-img ${s.phone} absolute`}
            src="/assets/2560/home/phone.svg"
          />
        </div>
        <span className={`${s.num} `}>咨询热线：400-120-8888</span>
        <div className="">
          <img
            src="/assets/2560/home/weixin.svg"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={`${s.wx} footer-img cursor-pointer absolute`}
          ></img>
        </div>
      </div>
      <motion.img
        variants={variants}
        animate={show ? "show" : "hidden"}
        src="/assets/2560/home/qrcode.png"
        className={` absolute right-3 z-10 ${s.qrcode} `}
      ></motion.img>
    </div>
  );
}
