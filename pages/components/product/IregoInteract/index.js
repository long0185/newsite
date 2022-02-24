import React from "react";
import Banner from "../../Banner";
import s from "./index.module.css";
export default function index() {
  return (
    <div
      id="interact"
      className={`bg_coffee flex flex-col items-center justify-center`}
    >
      <Banner img={"/assets/2560/product/irego/title-interact.png"}></Banner>
      <div className="p-0 flex w_1978 flex-col mobile:flex-row items-center mobile:items-start justify-between">
        <div className="flex flex-col">
          <span className="font_43 interact-big-title font-black">医生端</span>
          <span className="font_size_24 text-white interact-sm-title">
            远程训练计划的制定,查看训练报告,为医生提供更加智能化、精准化的工作平台。
          </span>
          <img
            className="interact-top-img img-fluid"
            src="/assets/2560/product/irego/doctor.png"
          />
        </div>
        <div className="flex flex-col mt-3 mobile:mt-0">
          <span className="font_43 interact-big-title font-black">用户端</span>
          <span className="font_size_24 text-white interact-sm-title">
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
      <div className="flex justify-center items-center mb_118 w-100">
        <div className="flex flex-col w_1978 ">
          <span className="font_43 interact-big-title font-black mb-4">人性化设计</span>
          <div className="w-100 flex flex-col mobile:flex-row justify-between">
            <div className="flex items-center mb-3 mobile:mb-0 m_w_910 ">
              <div className="p-0 text-center">
                <img
                  className="relative hidden mobile:block"
                  src="/assets/2560/product/irego/interact_1.png"
                ></img>
                <img
                  className="relative mobile:hidden h_400"
                  src="/assets/2560/product/irego/interact_1.png"
                ></img>
                <span className="friendly-span block  text-white mt-3">
                  骨盆宽度可调
                </span>
              </div>
              <div className="p-0 text-center ml-0 mobile:ml-1">
                <img
                  className="hidden mobile:block relative "
                  src="/assets/2560/product/irego/interact_2.png"
                ></img>
                <img
                  className="block relative mobile:hidden h_400"
                  src="/assets/2560/product/irego/interact_2.png"
                ></img>
                <span className="friendly-span block text-white mt-3">
                  屏幕角度可调
                </span>
              </div>
            </div>
            <div className="flex items-center mb-3 mobile:mb-0 m_w_910">
              <div className="p-0 text-center ml-0 mobile:ml-1 ">
                <img
                  className="hidden mobile:block relative h-100"
                  src="/assets/2560/product/irego/interact_3.png"
                ></img>
                <img
                  className="mobile:hidden relative h_400"
                  src="/assets/2560/product/irego/interact_3.png"
                ></img>
                <span className="friendly-span block text-white mt-3">扫脸登录</span>
              </div>
              <div className="p-0 text-center ml-0 mobile:ml-1">
                <img
                  className="relative hidden mobile:block h-100"
                  src="/assets/2560/product/irego/user-friendly_4.png"
                ></img>
                <img
                  className="relative mobile:hidden h_400"
                  src="/assets/2560/product/irego/user-friendly_4.png"
                ></img>
                <span className="friendly-span block text-white mt-3">语音鼓励、情感交流</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
