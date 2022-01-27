import React from "react";
import Banner from "../../Banner";
import s from "./index.module.css";
export default function index() {
  return (
    <div
      id="interact"
      className={`bg_coffee  adavantageImga d-flex flex-column align-item-center justify-content-center`}
    >
      <Banner img={"/assets/newtitle/irego/title_4.png"}></Banner>
      <div className="p-0  d-flex justify-content-center">
        <div className="d-flex flex-column doctor-wrap ">
          <span className="interact-big-title font-black ">医生端</span>
          <span className="interact-sm-title w_910">
            远程训练计划的制定,查看训练报告,为医生提供更加智能化、精准化的工作平台。
          </span>
          <img
            className="interact-top-img"
            src="/assets/2560/product/irego/doctor.png"
          />
        </div>
        <div className="d-flex flex-column">
          <span className="interact-big-title font-black">用户端</span>
          <span className="interact-sm-title w_910">
            及时训,无需医生陪伴,训练中采集和存储数据,完成后自动生成报告,为患者提供更优质可靠的康复训练数据。
          </span>
          <img
            className="interact-top-img img-fluid"
            src="/assets/2560/product/irego/user.png"
          ></img>
        </div>
      </div>
      <div className=" p-0 d-center">
        <div className="interact-line"></div>
      </div>
      <div className="flex justify-content-center mb_100">
        <div className="d-flex flex-column friendly-wrap">
          <span className="interact-big-title font-black mb-4">人性化设计</span>
          <div className="col-12 p-0 d-flex justify-between">
            <div className="p-0 text-center">
              <img
                className="h_424 w_624 position-relative"
                src="/assets/2560/product/irego/interact_1.png"
              ></img>
              <span className="friendly-span d-block text-white">
                骨盆宽度可调
              </span>
            </div>
            <div className="p-0 text-center">
              <img
                className="h_424 w_350 position-relative "
                src="/assets/2560/product/irego/interact_2.png"
              ></img>
              <span className="friendly-span d-block text-white">
                屏幕角度可调
              </span>
            </div>
            <div className="p-0 text-center">
              <img
                className="h_424 w_350 position-relative"
                src="/assets/2560/product/irego/interact_3.png"
              ></img>
              <span className="friendly-span d-block text-white">扫脸登录</span>
            </div>
            <div className="p-0 text-center">
              <img
                className="friendly-img-wrap_2 position-relative h_424"
                src="/assets/2560/product/irego/user-friendly_4.png"
              ></img>
              <span className="friendly-span d-block text-white">扫脸登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
