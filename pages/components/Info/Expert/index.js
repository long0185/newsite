import { useRouter } from "next/router";
import React, { useState } from "react";
import Detail from "../Detail";
import s from "./index.module.css";
const expert_list = [
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date:'2021年7月23日',
    view:231
  },
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date:'2021年7月23日',
    view:231
  },
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date:'2021年7月23日',
    view:231
  },
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date:'2021年7月23日',
    view:231
  },
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date:'2021年7月23日',
    view:231
  },
];
export const MExpercard = ({key=null,img_src = "",
name = "",
sub_title = "",
title = "",
desc = "",
date = "",
view =0,})=>{
  return (
    <div key={key} className={`${s.m_item} flex items-center mb_43`}>
    <img src={img_src} className={`${s.m_img}`} alt="" />
    <div className="flex-1 flex flex-col px-4">
      <div className={`flex items-center`}>
        <span className="font_36 text-$37">{name}</span>
        <span className="font_size_24 bg-$primary px-2 py-1 ml-5 text-white">{title}</span>
      </div>
      <span className="font_24">{sub_title}</span>
      <span className="font_24">{desc}</span>
      <div className="flex items-center font_16 text-$86 w-100 justify-between">
        <span>{date}</span>
        <span>浏览：{view}</span>
      </div>
      <div className={`${s.m_line} w-100`}></div>
      <div className="flex items-center font_16 text-$86 w-100 justify-between">
        <span>view more</span>
        <img src="" alt="" />
      </div>
    </div>
  </div>
  )
}
const ExpertCard = ({
  img_src = "",
  name = "",
  badge = "",
  title = "",
  desc = "",
  date = "",
  view = "",
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/application-detail")}
      className={`${s.item_2} flex justify-between items-center  mx-3`}
    >
      <img
        src={img_src}
        className={`${s.sm_img} relative bg-gray-400 border-2`}
      ></img>
      <div
        className={`flex-1  flex items-start flex-col justify-between h-100 `}
      >
        <div className="flex items-center">
          <span className="font_30 text-$37 font-extrabold">{name}</span>
          <span className={`${s.badge} ml-2 px-3 py-2`}>{badge}</span>
        </div>
        <div className="flex w-100 flex-1 flex-col items-start justify-between">
          <span className="font_16">{title}</span>
          <span className="font_24">{desc}</span>
          <div className="w-100 c_sub_title flex justify-between items-center">
            <div className="flex justify-between items-center">
              <img
                src="/assets/2560/service/useguide/calendar.svg"
                className={`${s.svg} relative mr-2`}
              ></img>
              <span className="text-$86 font_14">{date}</span>
            </div>
            <span className="text-$86 font_14">浏览：{view}</span>
          </div>
          <div className={s.line}></div>
          <div className="w-100 flex items-center justify-between c_sub_title">
            <span className="text-$86 font_14">View more</span>
            <img
              src="/assets/2560/example/right_arrow.svg"
              className={`${s.arrow} relative`}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
let _list = [
  {
    id: 1,
    element: (
      <div className="w-100 h-100 flex flex-col pt-5">
        <div className="w-100 flex flex-col items-center justify-center">
          <span className="font_24 font-black">
            标题标题标题标题标题标题标题
          </span>
          <div className="flex justify-center items-center">
            <img
              src="/assets/2560/service/useguide/calendar.svg"
              className={`${s.icon} img-fluid mr-1`}
            ></img>
            <span>2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center px-5">
          <span>
            缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容
          </span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96"></div>
        </div>
        <div className="flex items-center px-5 mt-3">
          <span>
            缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容
          </span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-60"></div>
        </div>
        <div></div>
      </div>
    ),
  },
  {
    id: 2,
    element: (
      <div className="w-100 h-100 flex flex-col pt-5">
        <div className="w-100 flex flex-col items-center justify-center">
          <span className="font_24 font-black">
            标题标题标题标题标题标题标题
          </span>
          <div className="flex justify-center items-center">
            <img
              src="/assets/2560/service/useguide/calendar.svg"
              className={`${s.icon} img-fluid mr-1`}
            ></img>
            <span>2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center px-5">
          <span>
            缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容
          </span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96"></div>
        </div>
        <div className="flex items-center px-5 mt-3">
          <span>
            缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容
          </span>
        </div>
        <div className="flex justify-center mt-3 mb-10">
          <div className="w-50 bg-gray-600 h-60"></div>
        </div>
        <div></div>
      </div>
    ),
  },
  {
    id: 3,
    element: (
      <div className="w-100 h-100 flex flex-col pt-5">
        <div className="w-100 flex flex-col items-center justify-center">
          <span className="font_24 font-black">
            标题标题标题标题标题标题标题
          </span>
          <div className="flex justify-center items-center">
            <img
              src="/assets/2560/service/useguide/calendar.svg"
              className={`${s.icon} img-fluid mr-1`}
            ></img>
            <span>2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center px-5">
          <span>
            缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容
          </span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96"></div>
        </div>
        <div className="flex items-center px-5 mt-3">
          <span>
            缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容
          </span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-60"></div>
        </div>
        <div></div>
      </div>
    ),
  },
];

export default function index() {
  const [list, setList] = useState([1]);

  return (
    <>
      <div className="mobile:hidden w-100 flex flex-col mt_43 items-center">
        {expert_list.map((item, index) => (
          <MExpercard key={index} name={item.name} img_src={item.img_src} title={item.title} sub_title={item.sub_title} desc={item.desc} date={item.date} view={item.view} />
        ))}
        <div className="w-100 flex items-center justify-center mb_100 mt_63">
          <div className="flex">
            <button
              onClick={() => setList([...list, 1])}
              className="m_bottom_btn hover:bg-yellow-300"
            >
              Show more
            </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile:block mt_63">
        {list.map((item, index) => (
          <div key={index}>
            <div className="w-100 d-center">
              <div className={`${s.content_2} flex  justify-between`}>
                <ExpertCard
                  img_src="/assets/2560/info/expert/p_1.png"
                  name="陈武雄"
                  badge="医学专家"
                  desc="访谈标题访谈标题访谈标题访谈标题访谈标题"
                  date="2021年7月23日"
                  view="231"
                />
                <ExpertCard
                  img_src="/assets/2560/info/expert/p_1.png"
                  name="陈武雄"
                  badge="医学专家"
                  desc="访谈标题访谈标题访谈标题访谈标题访谈标题"
                  date="2021年7月23日"
                  view="231"
                />
              </div>
            </div>
            <div className="w-100 d-center">
              <div className={`${s.content_2} flex  justify-between`}>
                <ExpertCard
                  img_src="/assets/2560/info/expert/p_1.png"
                  name="陈武雄"
                  badge="医学专家"
                  desc="访谈标题访谈标题访谈标题访谈标题访谈标题"
                  date="2021年7月23日"
                  view="231"
                />
                <ExpertCard
                  img_src="/assets/2560/info/expert/p_1.png"
                  name="陈武雄"
                  badge="医学专家"
                  desc="访谈标题访谈标题访谈标题访谈标题访谈标题"
                  date="2021年7月23日"
                  view="231"
                />
              </div>
            </div>
            <div className="w-100 d-center">
              <div className={`${s.content_2} flex justify-between`}>
                <ExpertCard
                  img_src="/assets/2560/info/expert/p_1.png"
                  name="陈武雄"
                  badge="医学专家"
                  desc="访谈标题访谈标题访谈标题访谈标题访谈标题"
                  date="2021年7月23日"
                  view="231"
                />
                <ExpertCard
                  img_src="/assets/2560/info/expert/p_1.png"
                  name="陈武雄"
                  badge="医学专家"
                  desc="访谈标题访谈标题访谈标题访谈标题访谈标题"
                  date="2021年7月23日"
                  view="231"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center mb_100 mt_100">
          <button
            onClick={() => setList([...list, 1])}
            className="l_btn text-white bg-$primary hover:bg-yellow-300"
          >
            Show more
          </button>
        </div>
      </div>
    </>
  );
}
