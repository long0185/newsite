import React from "react";
import s from "./index.module.css";
import Banner from "../../Banner";
export default function index() {
  return (
    <div
      id="interact"
      className={`${s.wrap} ${s.interact} product-interact col-12 d-flex flex-column align-item-center justify-content-center`}
    >
      <Banner img={"/assets/newtitle/iremo/title_4.png"} />
      <div className="col-12 p-0  d-flex justify-content-center">
        <div className="d-flex flex-column doctor-wrap ">
          <span className="interact-big-title font-black">医生端</span>
          <span className="interact-sm-title">
            远程训练计划的制定,查看训练报告,为医生提供更加智能化、精准化的工作平台。
          </span>
          <img
            src="/assets/2560/product/irego/doctor.png"
            className="interact-top-img position-relative"
          ></img>
        </div>
        <div className="d-flex flex-column">
          <span className="interact-big-title font-black">用户端</span>
          <span className="interact-sm-title w_910">
            及时训练,无需医生陪伴,训练中采集和存储数据,完成后自动生成报告,为患者提供更优质可靠的康复训练数据。
          </span>
          <img
            src="/assets/2560/product/irego/user.png"
            className="interact-top-img position-relative"
          ></img>
        </div>
      </div>
      <div className="col-12 p-0 d-center">
        <div className="interact-line"></div>
      </div>
      <div className="col-12 p-0 d-flex justify-content-center ">
        <div className="d-flex flex-column friendly-wrap">
          <span className={`${s.big_title} font-black`}>人性化设计</span>
          <div className="col-12 p-0 d-flex justify-content-center">
            <div className="p-0 text-center">
              <img
                src="/assets/2560/product/iremo/user-friendly_1.png"
                className={`${s.u_img} position-relative`}
              ></img>
              <span className="friendly-span d-block text-white">
                力过载保护
              </span>
            </div>
            <div className="p-0 text-center mx-2">
              <img
                src="/assets/2560/product/iremo/friend_3.png"
                className={`${s.u_img} position-relative`}
              ></img>
              <span className="friendly-span d-block text-white">
                针对性参数设置（具有主动、被动、按需三种训练模式）
              </span>
            </div>
            <div className="p-0 text-center">
              <img
                src="/assets/2560/product/iremo/user-friendly_3.png"
                className={`${s.u_img} position-relative`}
              ></img>
              <span className="friendly-span d-block text-white">
                多种登录方式
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
