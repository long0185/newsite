import React from "react";
import s from "./index.module.css";

import Banner from "../../../components/Banner";
export default function index() {
  return (
    <div className={`col-12 p-0 ${s.wrap} d-center flex-col`} id="contact">
      {/* <div className={`${s.title} relative`}>
        <Image layout="fill" src={title_contact} />
      </div> */}
      <Banner img={"/assets/2560/company/title_contact.png"} />
      <div className={`flex ${s.mb_270}`}>
        <div className={`${s.item} flex flex-col mr-3`}>
          <img
            src="/assets/2560/company/location.svg"
            className={`${s.location} relative`}
          ></img>
          <img
            src="/assets/2560/company/name.svg"
            className={`${s.img} relative mt-2`}
          ></img>
          <div className={`flex flex-col ${s.address}`}>
            <span>技术服务热线：（021）31076003</span>
            <span>研发中心：上海市宝山区上大路99号</span>
            <span>
              生产中心：中国（上海）自由贸易试验区临港新片区新杨公路1566号12号楼301室
            </span>
            <span>公司网址：www.ga-robot.com</span>
          </div>
        </div>
        <div className={`${s.item} flex flex-col mr-3`}>
          <div>
            <span className="c_title">咨询请留下您的信息</span>
            <span className="c_sub_title text-gray-500 ml-2">
              我们将第一时间与您取得联系
            </span>
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="sm_input mr-3 pl-2"
              placeholder="姓名："
            />
            <input
              type="text"
              className="sm_input mr-3 pl-2"
              placeholder="电话："
            />
            <input type="text" className="sm_input pl-2" placeholder="邮箱：" />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="full_input pl-2"
              placeholder="备注："
            />
          </div>
          <div className="mt-3 w-100  flex items-center justify-center ">
            <button className="mr-5 rounded nav-link bg-$primary px-5 py-2 text-white">
              立即提交
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
