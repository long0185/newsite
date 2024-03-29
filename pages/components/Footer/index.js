/** @format */

import React, { useState } from "react";
import s from "./index.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import ToTop from "../ToTop";
import { useRouter } from "next/router";

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
  const [m_show, setM_show] = useState(false);
  const { pathname } = useRouter();
  return (
    <>
      {pathname !== "/" && !show && <ToTop />}
      <div className='mobile:hidden bg-gray-100 pt-5 pb-2 w-screen items-center justify-around h_267 flex flex-col'>
        <div className='flex justify-around items-center w-100'>
          <div className='flex items-center pl-3'>
            <img className={`${s.m_phone}`} src='/assets/2560/home/phone.svg' />
            <span className={`${s.m_num} font_36 text-$86`}>咨询热线：(021)31076003</span>
          </div>
          <div onClick={() => setM_show(!m_show)} className='flex items-center pr-12  relative'>
            <motion.img
              animate={{
                opacity: `${m_show ? "1" : 0}`,
              }}
              transition={{
                duration: 2,
              }}
              className={`${s.m_qrcode} absolute img-fluid`}
              src='/assets/2560/home/qrcode.png'
            />
            <img className={`${s.m_phone} mr-2`} src='/assets/2560/home/weixin.svg' />
            <span className={`${s.m_num} font_36 text-$86 `}>公众号</span>
          </div>
        </div>
        <div className='flex w-100 flex-col justify-center items-center'>
          <span className="className='font_size_24 text-$86 text-center'">Copyright © 2016上海金矢机器人科技有限公司 All Rights Reserved.</span>
          <a href='http://beian.miit.gov.cn/' target={`_blank`} className='font_size_24 text-$86 text-center'>
            沪ICP备19033942号-2
          </a>
          <div className='flex font_size_24 text-$8 mt-3'>
            <a href='/out/legal-declaration' className='font_size_24 text-$86'>
              法律声明
            </a>
            <span className='mx-16'>|</span>
            <a href='https://www.irego.cn/monitor/#/Login' target={"_blank"} className='font_size_24 text-$86'>
              金矢机器人云平台
            </a>
            {/* <span className="mx-16">|</span> */}
            {/* <a href="#" className="font_size_24 text-$86">
              后台登录
            </a> */}
          </div>
        </div>
      </div>
      <div className='hidden mobile:flex footer w-100 items-center justify-between relative'>
        <div className='left-footer pl-16'>
          <span className='pl-3 ml-3'>Copyright © 2016上海金矢机器人科技有限公司 All Rights Reserved. </span>
          <a href='http://beian.miit.gov.cn/' target={`_blank`} className=' hover:text-blue-500 hover:border-b-2 border-blue-500'>
            沪ICP备19033942号-2
          </a>
          <span className='mx-3'>|</span>
          <a href='/out/legal-declaration'>
            <span className='mx-3 cursor-pointer'>法律声明</span>
          </a>
          <span className='mx-3'>|</span>
          <a href={"https://www.irego.cn/monitor/#/Login"} target='_blank'>
            <span className='mx-3 cursor-pointer'>金矢机器人云平台</span>
          </a>
        </div>
        <div className={` h-100   right-0  absolute z-20 ${s.right} `}>
          <img className={` footer-img ${s.phone} absolute`} src='/assets/2560/home/phone.svg' />
          <span className={`${s.num} ml-2 mobile:ml-5`}>咨询热线：(021)31076003</span>
          <div className=''>
            <img src='/assets/2560/home/weixin.svg' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className={`${s.wx} footer-img cursor-pointer absolute`}></img>
          </div>
        </div>
        <motion.img variants={variants} animate={show ? "show" : "hidden"} src='/assets/2560/home/qrcode.png' className={` absolute right-3 z-10 ${s.qrcode} `}></motion.img>
      </div>
    </>
  );
}
