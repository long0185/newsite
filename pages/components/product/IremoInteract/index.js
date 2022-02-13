import React from "react";
import s from "./index.module.css";
import Banner from "../../Banner";
export default function index() {
  return (
    <div
      id="interact"
      className={` bg_coffee product-interact w-100 flex flex-col items-center justify-center`}
    >
      <Banner img={"/assets/newtitle/iremo/title_4.png"} />
      <div className="p-0 flex w_1978 flex-col mobile:flex-row items-center mobile:items-start justify-between">
        <div className="flex flex-col ">
          <span className="font_43 interact-big-title font-black ">医生端</span>
          <span className="font_size_36 h-28 text-white interact-sm-title ">
            远程训练计划的制定,查看训练报告,为医生提供更加智能化、精准化的工作平台。
          </span>
          <img
            className="interact-top-img"
            src="/assets/2560/product/irego/doctor.png"
          />
        </div>
        <div className="flex flex-col">
          <span className="font_43 interact-big-title font-black">用户端</span>
          <span className="font_size_36 h-28 text-white interact-sm-title ">
            及时训,无需医生陪伴,训练中采集和存储数据,完成后自动生成报告,为患者提供更优质可靠的康复训练数据。
          </span>
          <img
            className="interact-top-img img-fluid"
            src="/assets/2560/product/irego/user.png"
          ></img>
        </div>
      </div>
      <div className=" p-0 d-center">
        <div className="hidden mobile:block interact-line"></div>
        <div className="mobile:hidden m-interact-line"></div>
      </div>
      {/* <div className="w-100 p-0  flex justify-center">
        <div className="flex flex-col doctor-wrap ">
          <span className="interact-big-title font-black">医生端</span>
          <span className="interact-sm-title">
            远程训练计划的制定,查看训练报告,为医生提供更加智能化、精准化的工作平台。
          </span>
          <img
            src="/assets/2560/product/irego/doctor.png"
            className="interact-top-img relative"
          ></img>
        </div>
        <div className="flex flex-col">
          <span className="interact-big-title font-black">用户端</span>
          <span className="interact-sm-title w_910">
            及时训练,无需医生陪伴,训练中采集和存储数据,完成后自动生成报告,为患者提供更优质可靠的康复训练数据。
          </span>
          <img
            src="/assets/2560/product/irego/user.png"
            className="interact-top-img relative"
          ></img>
        </div>
      </div>
      <div className="w-100 p-0 d-center">
        <div className="interact-line"></div>
      </div> */}
      <div className="w-100 p-0 flex justify-center mb_100 ">
        <div className="flex flex-col friendly-wrap">
          <span className={`${s.big_title} font-black`}>人性化设计</span>
          <div className="w-100 hidden p-0 mobile:flex justify-center">
            <div className="p-0 text-center">
              <img
                src="/assets/2560/product/iremo/user-friendly_1.png"
                className={`${s.u_img} relative`}
              ></img>
              <span className="friendly-span block text-white mt-3">
                力过载保护
              </span>
            </div>
            <div className="p-0 text-center mx-2">
              <img
                src="/assets/2560/product/iremo/friend_3.png"
                className={`${s.u_img} relative`}
              ></img>
              <span className="friendly-span block text-white mt-3">
                针对性参数设置（具有主动、被动、按需三种训练模式）
              </span>
            </div>
            <div className="p-0 text-center">
              <img
                src="/assets/2560/product/iremo/user-friendly_3.png"
                className={`${s.u_img} relative`}
              ></img>
              <span className="friendly-span block text-white mt-3">
                多种登录方式
              </span>
            </div>
          </div>
          <div className="w-100 mobile:hidden p-0 items-center justify-center">
            <div className="flex flex-col items-center">
              <img className={`${s.m_big_img}`} src="/assets/2560/product/iremo/user-friendly_1.png" alt="" />
              <span className="text-gray-200 mt-2 font_size_24">力过载保护</span>
            </div>
            <div className="flex items-start w_909 mt-5 justify-between">
              <div className="flex flex-col items-center">
                <img className={`${s.m_sm_img}`} src="/assets/2560/product/iremo/friend_3.png" />
                <span className="text-gray-200 mt-2 font_size_24 w_450 text-center">针对性参数设置（具有主动、被动、按需三种训练模式）</span>
              </div>
              <div className="flex flex-col items-center">
                <img className={`${s.m_sm_img}`} src="/assets/2560/product/iremo/user-friendly_3.png" />
                <span className="text-gray-200 mt-2 font_size_24 w_450 text-center">多种登录方式</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
