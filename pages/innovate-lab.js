import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import LabProject from "./components/Innovate/labProject";

export default function innovatelab() {
  return (
    <div>
      <Navbar />
      <div className="w-100 pt_104">
        <img src="/assets/2560/innovate/banner.png" className="img-fluid h_786 w-100"></img>
        <div className="w-100  lab_bg flex flex-col items-center">
          <div className="bg-white w_1633">
            <Banner img="/assets/2560/innovate/title-lab.png" />
          </div>
          <div className="h_333 w_1633 flex justify-center   ">
            <div className="bg-gray-300 opacity-60 flex-1 flex flex-col items-center justify-center">
              <span className="font_16 mb-2 color-$color">
                金矢机器人目前已于上海大学、上海中医药大学联合，
              </span>
              <span className="font_16 mb-2 color-$color">
                组建联合实验室，进行智能康复机器人的创新研究与开发，
              </span>
              <span className="font_16 mb-2 color-$color">
                目前已经完成下肢康复机器人iReGo、上肢康复机器人iReMo、
              </span>
              <span className="font_16 mb-2 color-$color">
                认知康复机器人iReCog等“爱睿家iRE+”系列产品。
              </span>
            </div>
            <div className="flex-1 bg-$primary opacity-70">
              <img
                src="/assets/2560/innovate/tubiao2.svg  "
                alt=""
                className="w-100 h-100 img-fluid"
              />
            </div>
            <div className="bg-gray-300 opacity-60 flex-1 flex flex-col items-center justify-center">
              <span className="font_16 mb-2 color-$color">
                上海中医药大学、岳阳中西医结合医院、上海徐汇中心医院、
              </span>
              <span className="font_16 mb-2 color-$color">
                上海金矢机器人科技有限公司已达成项目合作，
              </span>
              <span className="font_16 mb-2 color-$color">
                打造国际国内一流智能机器人康复中心，
              </span>
              <span className="font_16 mb-2 color-$color">
                成为运动医学和康复服务的卓越领导者，
              </span>
              <span className="font_16 mb-2 color-$color">
                为区域内患者提供专业的康复医疗服务，造福患者，
              </span>
              <span className="font_16 mb-2 color-$color">
                从而推动中国康复技术临床研究进入一个新的高度。
              </span>
            </div>
          </div>
          <div className="h_333 w_1633 flex justify-center   ">
            <div className="flex-1 bg-$primary opacity-70">
              <img
                src="/assets/2560/innovate/tubiao1.svg  "
                alt=""
                className="w-100 h-100 img-fluid"
              />
            </div>
            <div className="bg-gray-300 opacity-60 flex-1 flex flex-col items-center justify-center">
              <span className="font_16 mb-2 color-$color">
                上海中医药大学、岳阳中西医结合医院、上海徐汇中心医院、
              </span>
              <span className="font_16 mb-2 color-$color">
                上海金矢机器人科技有限公司已达成项目合作，
              </span>
              <span className="font_16 mb-2 color-$color">
                打造国际国内一流智能机器人康复中心，
              </span>
              <span className="font_16 mb-2 color-$color">
                成为运动医学和康复服务的卓越领导者，
              </span>
              <span className="font_16 mb-2 color-$color">
                为区域内患者提供专业的康复医疗服务，造福患者，
              </span>
              <span className="font_16 mb-2 color-$color">
                从而推动中国康复技术临床研究进入一个新的高度。
              </span>
            </div>
            <div className="flex-1 bg-$primary opacity-70">
              <img
                src="/assets/2560/innovate/tubiao3.svg  "
                alt=""
                className="w-100 h-100 img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <LabProject />
    </div>
  );
}
