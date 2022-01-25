import React from "react";
import s from "./index.module.css";

const list = [
  {
    name: "关于金矢",
    href: "#about",
  },
  {
    name: "公司团队",
    href: "#team",
  },
  {
    name: "发展历程",
    href: "#history",
  },
  {
    name: "资质荣誉",
    href: "#honor",
  },
  {
    name: "合作单位",
    href: "#unit",
  },
  {
    name: "联系方式",
    href: "#contact",
  },
];
export default function index() {
  return (
    <>
      <div
        className={`${s.banner} flex flex-col items-center justify-center relative`}
      >
        <img
          src="/assets/2560/company/sec.png"
          className={`${s.banner_img} relative`}
        ></img>
        <div className={`${s.banner_text} mt-5`}>
          <span className={`${s.title} px-2 py-1 ml-2`}>公司简介</span>
          <span className={s.desc}>
            上海金矢机器人科技有限公司是专业从事肢体康复机器人研发、生产、销售为一体的高科技公司。基于大数据、云计算、5G通讯技术，已完成下肢、上肢、认知等多款智能康复机器人研发，形成了软硬件结合的整套肢体康复解决方案。
          </span>
        </div>
        <div className={`${s.banner_text} m-3`}>
          <span className={`${s.title} py-1 px-2 ml-2`}>公司背景</span>
          <span className={s.desc}>
            上海金矢机器人坐落于中国(上海)自由贸易试验区临港新片区，是专业从事智能康复机器人研发、生产、销售的高新技术企业。公司研发实力雄厚，拥有由高校教授、千人学者、海归博士等组成的专业研发团队。参与科技部重点研发计划、国家自科基金、省部级机器人课题多项，拥有多项发明专利和计算机软件著作权，核心技术处于国际领先水平。金矢机器人未来目标是成为中国康复装备行业的领军企业。
          </span>
        </div>
        <div className="fixed bsolute top-52 left-80 flex flex-col">
          {list.map((item, index) => (
            <a
              className="my-2 nav-link flex items-center text-$primary  hover:bg-$primary hover:text-$white "
              href={item.href}
              key={index}
            >
              <span className={``}>●</span>
              <span className="px-2 py-1  ">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className={`w-100 d-flex`}>
        <img
          src="/assets/2560/company/grey_bg.png"
          className={`${s.left_img} relative`}
        ></img>
        <div className="flex flex-col">
          <div className={`${s.center_top} bg-gray-400 relative`}></div>
          <div className={`${s.center_bottom} bg-gray-400 relative`}>
            <span className={s.big_title}></span>
          </div>
        </div>
        <div className={`flex flex-col`}>
          <img
            src="/assets/2560/company/p_4.png"
            className={`${s.right_top_img} relative`}
          ></img>
          <img
            src="/assets/2560/company/p_5.png"
            className={`${s.right_top_img} relative`}
          ></img>
        </div>
      </div>
    </>
  );
}
