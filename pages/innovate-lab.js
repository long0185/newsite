import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import LabProject from "./components/Innovate/labProject";
import { getImgUrl } from "./components/company/HonorSubnav";

export default function innovatelab() {
  return (
    <div>
      <Navbar />
      <div className="w-100 pt_104 ">
        <img src={getImgUrl("innovate_ire")} className="hidden mobile:block img-fluid h_786 w-100"></img>
        <img src={getImgUrl("m_innovate_ire")} className="mobile:hidden img-fluid h_1236 w-100"></img>
        <div className="hidden w-100  lab_bg mobile:flex flex-col items-center">
          <div className="bg-white w_1633">
            <Banner img="/assets/2560/Innovate/title-lab.png" />
          </div>
          <div className="h_333 w_1633 flex justify-center   ">
            <div className="bg-white opacity-80 flex-1 flex flex-col items-center justify-center">
              <div className=" leading-10 font_16 px-12 color-$color">金矢机器人目前已于上海大学、上海中医药大学联合， 组建联合实验室，进行智能康复机器人的创新研究与开发， 目前已经完成下肢康复机器人iReGo、上肢康复机器人iReMo、 认知康复机器人iReCog等“爱睿家iRe+”系列产品。</div>
            </div>
            <div className="flex-1 bg-$primary opacity-80 flex items-center justify-center ">
              <img src="/assets/2560/Innovate/tubiao2.svg  " alt="" className={`wh_200 img-fluid `} />
            </div>
            <div className="bg-white opacity-80 flex-1 flex flex-col items-center justify-center">
              <div className=" leading-10 font_16 px-12 color-$color">上海中医药大学、岳阳中西医结合医院、上海徐汇中心医院、 上海金矢机器人科技有限公司已达成项目合作， 打造国际国内一流智能机器人康复中心， 成为运动医学和康复服务的卓越领导者， 为区域内患者提供专业的康复医疗服务，造福患者， 从而推动中国康复技术临床研究进入一个新的高度。</div>
            </div>
          </div>
          <div className="h_333 w_1633 flex justify-center   ">
            <div className="flex-1 bg-$primary opacity-80 flex items-center justify-center">
              <img src="/assets/2560/Innovate/tubiao1.svg  " alt="" className="wh_200 img-fluid" />
            </div>
            <div className="bg-white opacity-80 flex-1 flex flex-col items-center justify-center">
              <div className=" leading-10 font_16 px-12 color-$color">金矢机器人参与获批了2018年国家科技部重点研发计划，在领域内形成了一定影响力。</div>
            </div>
            <div className="flex-1 bg-$primary opacity-80 flex justify-center items-center">
              <img src="/assets/2560/Innovate/tubiao3.svg  " alt="" className="wh_200 img-fluid" />
            </div>
          </div>
        </div>
        <div className="mobile:hidden lab_bg flex flex-col items-center pb_104">
          <div className="lab-title-wrap bg-white flex items-center justify-center">
            <img className="img-fluid lab-title-img " src="/assets/2560/Innovate/title-lab.png"></img>
          </div>
          <div className="flex flex-wrap w_971">
            <div className="m_lab-box flex items-center justify-center bg-white">
              <span className="w_372 text-center font_30 text-$37">金矢机器人目前已于上海大学、上海中医药大学联合， 组建联合实验室，进行智能康复机器人的创新研究与开发，目前已经完成下肢康复机器人iReGo、上肢康复机器人iReMo、认知康复机器人iReCog等“爱睿家iRE+”系列产品。</span>
            </div>
            <div className="m_lab-box flex items-center justify-center bg-$primary">
              <img className="m-lab-img img-fluid" src="/assets/2560/Innovate/tubiao1.svg" />
            </div>
            <div className="m_lab-box flex items-center justify-center bg-$primary">
              <img className="m-lab-img img-fluid" src="/assets/2560/Innovate/tubiao2.svg" />
            </div>
            <div className="m_lab-box flex items-center justify-center bg-white">
              <span className="w_372 text-center font_30 text-$37">金矢机器人参与获批了2018年国家科技部重点研发计划，在领域内形成了一定影响力。</span>
            </div>
            <div className="m_lab-box flex items-center justify-center bg-white">
              <span className="w_372 text-center font_30 text-$37">上海中医药大学、岳阳中西医结合医院、上海徐汇中心医院、上海金矢机器人科技有限公司已达成项目合作，打造国际国内一流智能机器人康复中心，成为运动医学和康复服务的卓越领导者， 为区域内患者提供专业的康复医疗服务，造福患者，从而推动中国康复技术临床研究进入一个新的高度。</span>
            </div>
            <div className="m_lab-box flex items-center justify-center bg-$primary">
              <img className="m-lab-img img-fluid" src="/assets/2560/Innovate/tubiao3.svg" />
            </div>
          </div>
        </div>
      </div>
      <LabProject />
    </div>
  );
}
