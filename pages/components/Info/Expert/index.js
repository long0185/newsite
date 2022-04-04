import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { renderType } from "../../company/Team";
import Detail from "../Detail";
import s from "./index.module.css";
const expert_list = [
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date: "2021年7月23日",
    view: 231,
  },
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date: "2021年7月23日",
    view: 231,
  },
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date: "2021年7月23日",
    view: 231,
  },
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date: "2021年7月23日",
    view: 231,
  },
  {
    name: "陈武雄",
    title: "医学专家",
    sub_title: "专家顾问 / 康复医学主任",
    desc: "访谈标题访谈标题访谈标题访谈标题访谈标题",
    img_src: "/assets/2560/info/expert/p_1.png",
    date: "2021年7月23日",
    view: 231,
  },
];

export const MExpercard = ({ key = null, item }) => {
  const router = useRouter();
  return (
    <div key={key} className={`${s.m_item} flex items-center mb_43`} onClick={() => router.push(`/application-detail?page=expertak&id=${item.id}`)}>
      <img src={item.Imageurl} className={`${s.m_img}`} alt="" />
      <div className="flex-1 flex flex-col px-4">
        <div className={`flex items-center`}>
          <span className="font_36 text-$37">{item.Name}</span>
          <span className="font_size_24 bg-$primary px-2 py-1 ml-5 text-white">{item.Title}</span>
        </div>
        <span className="font_24">{renderType(item.Type)}</span>
        <span className="font_24">{item.Content}</span>
        <div className="flex items-center font_16 text-$86 w-100 justify-between">
          <span>{dayjs(item.Time).format("YYYY-MM-DD")}</span>
          {/* <span>浏览：{item.views}</span> */}
        </div>
        <div className={`${s.m_line} w-100`}></div>
        <div className="flex items-center font_16 text-$86 w-100 justify-between">
          <span>view more</span>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
const ExpertCard = ({ item }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/application-detail?page=expertak&id=${item.id}`)} className={`${s.item_2} flex justify-between items-center  mx-3`}>
      <img src={item.Imageurl} className={`${s.sm_img} relative bg-gray-400 border-2`}></img>
      <div className={`flex-1  flex items-start flex-col justify-between h-100 `}>
        <div className="flex items-center">
          <span className="font_30 text-$37 font-extrabold">{item.Name}</span>
          <span className={`${s.badge} ml-2 px-3 py-2`}>{renderType(item.Type)}</span>
        </div>
        <div className="flex w-100 flex-1 flex-col items-start justify-between">
          <span className="font_16">{item.Title}</span>
          <span className="font_24">{item.Content}</span>
          <div className="w-100 c_sub_title flex justify-between items-center">
            <div className="flex justify-between items-center">
              <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.svg} relative mr-2`}></img>
              <span className="text-$86 font_14">{dayjs(item.Time).format("YYYY-MM-DD")}</span>
            </div>
            <span className="text-$86 font_14">浏览：{item.views}</span>
          </div>
          <div className={s.line}></div>
          <div className="w-100 flex items-center justify-between c_sub_title">
            <span className="text-$86 font_14">View more</span>
            <img src="/assets/2560/example/right_arrow.svg" className={`${s.arrow} relative`}></img>
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
          <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
          <div className="flex justify-center items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} img-fluid mr-1`}></img>
            <span>2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center px-5">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96"></div>
        </div>
        <div className="flex items-center px-5 mt-3">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
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
          <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
          <div className="flex justify-center items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} img-fluid mr-1`}></img>
            <span>2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center px-5">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96"></div>
        </div>
        <div className="flex items-center px-5 mt-3">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
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
          <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
          <div className="flex justify-center items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} img-fluid mr-1`}></img>
            <span>2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center px-5">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96"></div>
        </div>
        <div className="flex items-center px-5 mt-3">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
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
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/expertak")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            val = val.sort((a, b) => a.OrderNu - b.OrderNu);
            setList(val);
          }
        });
    }
    getList();
  }, []);
  return (
    <>
      <div className="mobile:hidden w-100 flex flex-col mt_43 items-center">
        {list.map((item, index) => (
          <MExpercard key={index} item={item} />
        ))}
        {/* <div className="w-100 flex items-center justify-center mb_100 mt_63">
          <div className="flex">
            <button onClick={() => setList([...list, 1])} className="m_bottom_btn hover:bg-yellow-300">
              Show more
            </button>
          </div>
        </div> */}
      </div>
      <div className="hidden mobile:block mt_63 pb_43">
        {list.map((item, index) => (
          <div key={item.id}>
            <div className="w-100 d-center">
              <div className={`${s.content_2} flex  justify-between`}>
                <ExpertCard item={item} />
              </div>
            </div>
          </div>
        ))}
        {/* <div className="flex justify-center items-center mb_100 mt_100">
          <button onClick={() => setList([...list, 1])} className="l_btn text-white bg-$primary hover:bg-yellow-300">
            Show more
          </button>
        </div> */}
      </div>
    </>
  );
}
