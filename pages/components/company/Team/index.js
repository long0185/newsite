import React from "react";
import s from "./index.module.css";

import Banner from "../../../components/Banner";

export default function index() {
  return (
    <div id="team" className="d-center flex-col">
      <Banner
        img={"/assets/2560/company/title_team.png"}
        desc={
          <>
            <span>
              公司组织结构完整，下设：技术部、生产部、营销部、品质部、设计部、财务部、行政部七大部门，研发团队：博士5人，硕士6人，本科19人。
            </span>
            <span>
              研发团队核心人员具有参与美国、德国相关的康复机器人研发经验，掌握核心关键技术。
            </span>
          </>
        }
      />

      <div
        className={`${s.wrap} col-12 p-0 flex items-center justify-center mt-5`}
      >
        <div className={`${s.ceo} mr-4 flex flex-col justify-around pl-4`}>
          <div className="flex mt-2">
            <img
              src="/assets/2560/company/lyw.png"
              className={`${s.img} relative`}
            ></img>
            <div className="flex flex-col ml-3">
              <span className="font_30">李育文</span>
              <span>CEO / 博士</span>
              <span>东方学者</span>
            </div>
          </div>
          <div className="flex opacity-70">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>清华大学本硕，加拿大麦吉尔大学MCGILL 博士</span>
          </div>
          <div className="flex opacity-70">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>加拿大普惠公司等8年项目研发和管理经验</span>
          </div>
          <div className=" opacity-70 flex">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>参与多项机器人与高端制造的跨国研发项目</span>
          </div>
          <div className=" opacity-70 flex">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>加拿大“工业研发基金奖”获得者</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/wzy.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30">王志勇</span>
              <span>副总经理 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>原上海发那科机电有限公司华东区大客户经理</span>
          </div>
          <div className="opacity-70 flex ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>10年机器人控制应用经验</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/st.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30">宋韬</span>
              <span>副总经理 / 博士</span>
            </div>
          </div>
          <div className="flex opacity-70 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>加拿大瑞尔森大学访问学者</span>
          </div>
          <div className="opacity-70 flex ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>10年以上机器人设计经验</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/mzf.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30">明志发</span>
              <span>副总经理 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>原上海微电子设备有限公司</span>
          </div>
          <div className="opacity-70 flex ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>6年控制系统软件开发经验</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/zq.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30">张倩</span>
              <span>市场总监 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>原中国医药教育协会医装委 办公室副主任</span>
          </div>
          <div className="opacity-70 flex ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>5年医疗行业从业经验</span>
          </div>
        </div>

        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/zdd.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30">赵冬冬</span>
              <span>品质部部长 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>原上海微电子设备有限公司</span>
          </div>
          <div className="opacity-70 flex ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>6年控制系统软件开发经验</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/lqb.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30">荚启波</span>
              <span>生产部部长 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>上海大学专业技术人员</span>
          </div>
          <div className="opacity-70 flex ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>5年从事于机械设计与生产</span>
          </div>
        </div>
      </div>
      <div className={`${s.expert} d-center`}>
        <img
          src="/assets/2560/company/left.svg"
          className={`${s.left_arrow} relative`}
        ></img>
        <div className={`${s.expert_img_wrap}`}>
          {/* <img
            src="/assets/2560/company/gs.png"
            className={`${s.expert_img} relative`}
          ></img> */}
        </div>
        <div className={`${s.expert_img_wrap} mx-5`}></div>
        <div className={`${s.expert_img_wrap}`}></div>
        <img
          src="/assets/2560/company/right.svg"
          className={`${s.right_arrow} relative`}
        ></img>
      </div>
    </div>
  );
}
