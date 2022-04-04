import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import s from "./index.module.css";
import draftToHtml from "draftjs-to-html";
import dayjs from "dayjs";

const variants = {
  left: {
    translateX: "-85%",
    scale: 0.8,
    background: "#e9e9e9",
    zIndex: 10,
  },
  mid: {
    translateX: 0,
    scale: 1,
    background: "#fff",
    zIndex: 1000,
  },
  right: {
    translateX: "85%",
    scale: 0.8,
    background: "#e9e9e9",
    zIndex: 10,
  },
};
const m_variants = {
  left: {
    translateX: "-85%",
    scale: 0.8,
    opacity: 0,
    background: "#e9e9e9",
    zIndex: 10,
  },
  mid: {
    translateX: 0,
    scale: 1,
    opacity: 1,
    background: "#fff",
    zIndex: 1000,
  },
  right: {
    translateX: "85%",
    opacity: 0,
    scale: 0.8,
    background: "#e9e9e9",
    zIndex: 10,
  },
};

let _list = [
  {
    id: 1,
    element: (
      <div className="w-100 h-100 flex flex-col pt-10 px-16">
        <div className="w-100 flex flex-col items-center justify-center">
          <span className="font_36 font-black">标题标题标题标题标题标题标题</span>
          <div className="flex justify-center items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
            <span className="text-$86 my-3">2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center text-$86 detail_desc">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96 border w-9/12"></div>
        </div>
        <div className="flex items-center mt-3 text-$86 detail_desc">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96 w-9/12"></div>
        </div>
        <div></div>
      </div>
    ),
  },
  {
    id: 2,
    element: (
      <div className="w-100 h-100 flex flex-col pt-5 px-16">
        <div className="w-100 flex flex-col items-center justify-center">
          <span className="font_36 font-black">标题标题标题标题标题标题标题</span>
          <div className="flex justify-center items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
            <span className="text-$86 my-3">2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center  text-$86">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96 w-9/12"></div>
        </div>
        <div className="flex items-center mt-3 text-$86">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3 mb-5">
          <div className="w-50 bg-gray-600 h-96 w-9/12"></div>
        </div>
        <div></div>
      </div>
    ),
  },
  {
    id: 3,
    element: (
      <div className="w-100 h-100 flex flex-col pt-5 px-16">
        <div className="w-100 flex flex-col items-center justify-center">
          <span className="font_36 font-black">标题标题标题标题标题标题标题</span>
          <div className="flex justify-center items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
            <span className="text-$86 my-3">2021年7月23日</span>
          </div>
        </div>
        <div className="flex items-center text-$68">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96 w-9/12"></div>
        </div>
        <div className="flex items-center mt-3 text-$68">
          <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
        </div>
        <div className="flex justify-center mt-3">
          <div className="w-50 bg-gray-600 h-96 w-9/12"></div>
        </div>
        <div></div>
      </div>
    ),
  },
];

export default function applicationdetail() {
  const ref = useRef();
  const router = useRouter();
  const [list, setList] = useState([]);
  const [num, setNum] = useState(1);
  const [html, setHtml] = useState("");
  const [item, setItem] = useState(null);
  const [index, setIndex] = useState(0);
  const { query } = router;
  const { page, id } = query;
  useEffect(() => {
    fetch(`/web/tableInfo/${page}`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
          let val = res.value || [];
          val = val.sort((a, b) => a.OrderNu - b.OrderNu);
          const _item = val.find((item) => item.id == id);
          const index = val.findIndex((item) => item.id == id);
          setIndex(index);
          setItem(_item);
          setList(val);
        }
      });
  }, [page]);
  React.useEffect(() => {
    async function getList() {
      fetch(`/web/SingleInfo/${page}?id=${id}`);
    }
    getList();
  }, [id]);
  const handleClick = (direction) => {
    if (direction == "left") {
      const newNum = index - 1 <= 0 ? 0 : index - 1;
      setIndex(newNum);
      const newItem = list[newNum];
    }
    if (direction == "right") {
      const newNum = index + 1 >= list.length - 1 ? list.length - 1 : index + 1;
      setIndex(newNum);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="mt_104">
        <div className={`${s.middle} bg-gray-300 opacity-100 pt_100 pb_100 z-10 w-screen hidden mobile:flex items-center justify-center`}>
          <ul className={`${s.ul} h-100`}>
            <div className={`absolute top_45 w-100 z-20 h-20`}>
              <img onClick={() => handleClick("left")} className={`${s.left_icon} cursor-pointer h-100 absolute`} src="/assets/left-active.svg"></img>
              <img onClick={() => handleClick("right")} className={`${s.right_icon} cursor-pointer  h-100 absolute`} src="/assets/right-active.svg"></img>
            </div>
            <div className={`${s.back}  absolute w-100 flex justify-center items-center`}>
              <button onClick={() => router.back()} className={`${s.back_btn} mb_100 rounded  bg-$white text-$37 border border-$primary`}>
                返回列表
              </button>
            </div>

            {Array.isArray(list) &&
              list.length > 0 &&
              list.map((item, idx) => (
                <motion.li key={item.id} className={`${s.li} rounded-xl shadow-2xl`} style={{ zIndex: `${item?.id == id ? "100" : "10"}` }} variants={variants} animate={idx < index ? "left" : idx > index ? "right" : "mid"}>
                  <div className="w-100 h-100 flex flex-col pt-5 px-16">
                    <div className="w-100 flex flex-col items-center justify-center">
                      <span className="font_36 font-black">{item.Title}</span>
                      <div className="flex justify-center items-center">
                        <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
                        <span className="text-$86 my-3">{dayjs(item.Time).format("YYYY-DD-MM")}</span>
                        <span className="text-$86 my-3 ml-5">浏览:{item.views}</span>
                      </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(item.Detail)) }}></div>
                  </div>
                </motion.li>
              ))}
          </ul>
        </div>
        <div className={`${s.m_middle} bg-gray-300 opacity-100 pt_100 pb_200 z-10 w-screen flex  mobile:hidden items-center justify-center`}>
          <ul className={`${s.m_ul}  h-100`}>
            <div className={`${s.back}  absolute w-100 flex justify-center items-center`}>
              <button onClick={() => router.back()} className={`${s.back_btn} rounded  bg-$white text-$37 border border-$primary`}>
                返回列表
              </button>
            </div>

            {Array.isArray(list) &&
              list.length > 0 &&
              list.map((item, idx) => (
                <motion.li key={index} className={`${s.li} rounded-xl shadow-2xl`} style={{ zIndex: `${item?.id == 1 ? "100" : "10"}` }} variants={m_variants} animate={idx < index ? "left" : idx > index ? "right" : "mid"}>
                  <div className="w-100 h-100 flex flex-col pt-5 px-16">
                    <div className="w-100 flex flex-col items-center justify-center">
                      <span className="font_36 font-black">{item.Title}</span>
                      <div className="flex justify-center items-center">
                        <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
                        <span className="text-$86 my-3">{item.Time}</span>
                      </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(item.Detail)) }}></div>
                  </div>
                </motion.li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
