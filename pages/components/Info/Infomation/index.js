import React, { useState } from "react";
import s from "./index.module.css";
import Detail from "../Detail";
import { useRouter } from "next/router";
import { MApplicationCard } from "../../example/Application";
import dayjs from "dayjs";

let _list = [
  {
    id: 1,
    element: (
      <div className="w-100 h-100 flex flex-col pt-5">
        <div className="w-100 flex flex-col items-center justify-center">
          <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
          <div className="flex justify-center items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
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
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
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
        <div className="flex justify-center mt-3 mb-5">
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
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
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

const ApplicationCard = ({ item, page }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/application-detail?page=${page}&id=${item.id}`)} className={`${s.item} flex flex-col `}>
      <img src={item.Imageurl} className={`${s.img} relative bg-info`}></img>
      <div className={`${s.desc} p-3 px-7 flex-1 border flex flex-col justify-between items-start`}>
        <div className="font_size_24 text-$37">{item.Title}</div>
        <div className="font_14 w-100 text-$68 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.svg} relative mr-2`}></img>
            <span>{dayjs(item.Time).format("YYYY-MM-DD")}</span>
          </div>
          <span className="font_14 text-$68">浏览：{item.views}</span>
        </div>
        <div className={s.line}></div>
        <div className=" flex w-100 items-center justify-between c_sub_title">
          <span className="font_14 text-$68">View more</span>
          <img src="/assets/2560/example/right_arrow.svg" className={`${s.arrow} relative`}></img>
        </div>
      </div>
    </div>
  );
};

export default function index() {
  const [isShow, setIsShow] = useState(false);
  const [list, setList] = useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/News")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            val = val.sort((a, b) => a.OrderNu - b.OrderNu);
            setList(val);
            // setList([...val, ...val, ...val, ...val, ...val]);
          }
        });
    }
    getList();
  }, []);
  const handleShow = (bool) => {
    setIsShow(bool);
  };
  return (
    <>
      <div className={` mobile:hidden w-100`}>
        <div className={`${s.m_wrap} mt_63 mb_43 flex flex-wrap justify-center`}>
          {list.map((item) => (
            <MApplicationCard page="News" item={item} />
          ))}
          {/* <div className="w-100 flex items-center justify-center mb_100 mt_63">
            <div className="flex">
              <button onClick={() => setList([...list, 1])} className="m_bottom_btn hover:bg-yellow-300">
                Show more
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className={`${s.content} mt_43  hidden mobile:flex flex-wrap justify-center pb_86 `}>
        {list.map((item, index) => (
          <div className="flex d-center mt_43">
            <ApplicationCard page="News" item={item} />
          </div>
        ))}
        {/* <div className="flex justify-center items-center mb_100 mt_100">
          <button onClick={() => setList([...list, 1])} className="l_btn bg-$primary text-white hover:bg-yellow-300">
            Show more
          </button>
        </div> */}
      </div>
    </>
  );
}
