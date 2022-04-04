import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar";
import s from "./index.module.css";
export default function index() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="mt_104">
        <div className={`${s.m_modal} bg-$gray mobile:hidden flex flex-col items-center`}>
          <div className={`${s.m_content} mt_63 bg-white flex flex-col items-center`}>
            <span className="font_36 mt-10 font-extrabold">iReGo操作指南 康复计划制定</span>
            <div className="flex justify-between items-center mt-6 text-$37">
              <div className="flex items-center mr-8">
                <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
                <span>2020年7月23日</span>
              </div>
              <div className="flex items-center ml-8">
                <span>浏览:231</span>
              </div>
            </div>
            <div className={`${s.m_vieo_wrap} mt-6`}>
              <video className="w-100 h-100" controls>
                <source src="/assets/iremo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={`${s.m_desc} font_30 text-$37 m_desc mt-6`}>内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</div>
            <div className={`${s.m_img} mt-6 bg-gray-400`}></div>
            <div className={`${s.m_desc} font_30 text-$37 m_desc mt-6`}>内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</div>
          </div>
          <div className={`${s.m_btn_wrap} mt_100 flex justify-between mb_100 `}>
            <button onClick={() => router.back()} className={`${s.m_btn_1} text-white font_size_30  bg-$primary`}>
              返回列表
            </button>
            <button className={`${s.m_btn_2} font_size_30 bg-white border-$primary`}>上一篇</button>
            <button className={`${s.m_btn_2} font_size_30 bg-white border-$primary`}>下一篇</button>
          </div>
        </div>
        <div className={`${s.modal} border hidden mobile:flex flex-col items-center`}>
          <div className="z-60  bg-$color opacity-70"></div>
          <div className={`${s.container}  flex flex-col justify-between   opacity-100 bg-white `}>
            <div onClick={() => router.back()} className={`${s.close} cursor-pointer absolute`}>
              <img src="/assets/2560/service/useguide/close.png" className="img-fluid w-100 h-100" />
            </div>
            <div className={`${s.wrap} w-100 flex-1 items-center flex flex-col mb_43 overflow-auto`}>
              <span className="font_36 mb_43 font-extrabold mb_43">iReGo操作指南 康复计划制定</span>
              <div className={`${s.video} mb_43 border flex items-center justify-center`}>
                <video className="w-100 h-100" controls>
                  <source src="/assets/iremo.mp4" type="video/mp4" />
                </video>
              </div>
              <span className="text-$37 font_size_18 mb_43">文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代 文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代 文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代 文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代</span>
              <div className="mb_43">
                <div className={`${s.img} bg-gray-500`}></div>
              </div>
              <span className="text-$37 font_size_18">文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代 文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代 文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代 文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代</span>
            </div>
            <div className={`${s.btns} flex justify-center  border-top items-center  left-0 z-80 right-0 bottom-30`}>
              <button onClick={() => router.back()} className={`${s.btn} text-white h_48 w_194 mr-2  bg-$primary`}>
                返回列表
              </button>
              <button className={`${s.btn} rounded w_194 h_48 mr-2 border border-$primary`}>上一篇</button>
              <button className={`${s.btn} rounded text-white w_194 h_48 mr-2 border bg-$primary`}>下一篇</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
