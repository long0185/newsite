import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "./index.module.css";
import dayjs from "dayjs";
import { ApplicationCard_2 } from "../Application";

const MApplicationCard_2 = ({ title = "", date = "", view = "" }) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/application-detail")} className={`${s.m_item_2} flex items-center mb_43 justify-between`}>
      <div className={`${s.m_sm_img} relative bg-gray-400 border-2`}></div>
      <div className={`flex-1 flex flex-col items-start justify-between pl-4 h-100`}>
        <span className="font_size_24 text-$37 info-infomation">{title}</span>
        <div className="w-100 flex-1 justify-between flex flex-col pt-3">
          <div className="c_sub_title w-100 flex items-center justify-between">
            <div className="flex items-center">
              <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.svg} mr-2 relative`}></img>
              <span className="font_20 text-$68">{date}</span>
            </div>
            <span className="font_20 text-$68">浏览：{view}</span>
          </div>
          <div className={`${s.line}`}></div>
          <div className=" flex w-100 items-center justify-between c_sub_title">
            <span className="font_20 text-$68">View more</span>
            <img src="/assets/2560/example/right_arrow.svg" className={`${s.arrow} relative`}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MApplicationCard = ({ item, page }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/application-detail?page=${page || "app"}&id=${item.id}`)} className={`${s.m_item_1} flex flex-col mb_43 `}>
      <img className={`${s.m_img} relative `} src={item.Imageurl}></img>
      <div className={`py-3 px-5 flex-1 border flex flex-col justify-between items-start`}>
        <div className="font_size_24 text-$37 w-100 text-ellipsis overflow-hidden whitespace-nowrap">{item.Title}</div>
        <div className="font_20 text-$68 w-100 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.svg} relative mr-2`}></img>
            <span>{dayjs(item.Time).format("YYYY-MM-DD")}</span>
          </div>
          <span className="font_20 text-$68">浏览：{item.views}</span>
        </div>
        <div className={s.line}></div>
        <div className=" flex w-100 items-center justify-between c_sub_title">
          <span className="font_20 text-$68">View more</span>
          <img src="/assets/2560/example/right_arrow.svg" className={`${s.arrow} relative`}></img>
        </div>
      </div>
    </div>
  );
};

const ApplicationCard = ({ item }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/application-detail?page=health&id=${item.id}`)} className={`${s.item} mt_43 flex flex-col `}>
      <img className={`${s.img} relative `} src={item.Imageurl} />
      <div className={`p-3 px-7 flex-1  flex flex-col justify-between items-start`}>
        <div className="font_size_24 text-$37">{item.Title}</div>
        <div className="font_14 text-$68 w-100 flex items-center justify-between">
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
  const [list, setList] = React.useState([]);
  const [list_2, setlist_2] = useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/health")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            val = val.sort((a, b) => a.OrderNu - b.OrderNu) || [];
            const _list = val.splice(0, 3);
            setlist_2(_list);
            setList(val);
          }
        });
    }
    getList();
  }, []);
  return (
    <>
      <div className="w-100 mt_90 mobile:hidden flex flex-col items-center justify-center">
        <div className={`${s.m_wrap} mt_63 mb_43 flex flex-wrap justify-around `}>
          {[...list_2, ...list].map((item) => (
            <MApplicationCard page="health" key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className=" mt_43 pb_86 hidden mobile:block">
        <div className={`${s.wrap} flex justify-center `}>
          <div className={`${s.content} w-100 d-center flex-wrap mw_2100`}>
            {list_2.map((item) => (
              <ApplicationCard key={item.id} item={item} />
            ))}
            {list.map((item) => (
              <ApplicationCard_2 key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* <div className="w-100 p-0 d-center">
          <div className={`${s.content_2} flex justify-center flex-wrap `}>
            {list.map((item, index) => (
              <ApplicationCard_2 title="岳阳医院患者效果标题标题标题题标题标题标 标题标题" date="2020年7月25日" view="231" />
            ))}
          </div>
        </div>
        <div className="w-100 flex items-center justify-center mt_100">
          <div className="flex">
            <button onClick={() => setList([...list, 1, 2])} className="l_btn bg-$primary text-white hover:bg-yellow-300">
              Show more
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}
