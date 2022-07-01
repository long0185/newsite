import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import s from "./index.module.css";
import draftToHtml from "draftjs-to-html";
import dayjs from "dayjs";
export default function index() {
  const router = useRouter();
  const [list, setList] = React.useState([]);
  const [item, setItem] = React.useState(null);
  const ref = useRef();
  const [html, setHtml] = useState("");
  const { query } = router;
  const { page, id } = query;
  React.useEffect(() => {
    async function getList() {
      fetch(`/web/tableInfo/${page}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value || [];
            val = val.sort((a, b) => a.OrderNu - b.OrderNu);
            const _item = val.find((item) => item.id == id);

            setItem(_item);
            setList(val);
          }
        });
    }
    getList();
  }, [page]);
  React.useEffect(() => {
    async function getList() {
      fetch(`/web/SingleInfo/${page}?id=${id}`);
    }
    getList();
  }, [id]);
  const handleClick = (direction) => {
    const index = list.findIndex((item) => item.id == id);
    if (direction == "prev") {
      let newIndex = index - 1;
      const newItem = list[newIndex];
      if (newItem) {
        setItem(newItem);
        const html = draftToHtml(JSON.parse(newItem.Detail));
        ref.current.innerHTML = html;
      } else {
        alert("没有上一个了");
      }
    }
    if (direction == "next") {
      let newIndex = index + 1;
      const newItem = list[newIndex];
      if (newItem) {
        setItem(newItem);
        const html = draftToHtml(JSON.parse(newItem.Detail));
        ref.current.innerHTML = html;
      } else {
        alert("没有下一个了");
      }
    }
  };
  return (
    <div>
      <Navbar />
      <div className="mt_104">
        <div className={`${s.m_modal} bg-$gray mobile:hidden flex flex-col items-center`}>
          <div className={`${s.m_content} mt_63 bg-white flex flex-col items-center text-$37`}>
            <span className="font_36 mt-10 font-extrabold text-$37">{item?.Title}</span>
            <div className="flex justify-between items-center mt-6 text-$37">
              <div className="flex items-center mr-8">
                <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} calendar-icon img-fluid mr-1`}></img>
                <span>{dayjs(item?.Time).format("YYYY-MM-DD")}</span>
              </div>
              {/* <div className="flex items-center ml-8">
                <span>浏览:{item?.Views}</span>
              </div> */}
            </div>
            <div className={`${s.m_vieo_wrap} mt-6`}>
              <video className="w-100 h-100" controls>
                {item?.Videourl && <source src={item?.Videourl} type="video/mp4" />}
              </video>
            </div>
            {item?.Detail && <div className="mt-5 text-$68" dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(item?.Detail)) }}></div>}
          </div>
          <div className={`${s.m_btn_wrap} mt_100 flex justify-between mb_100 `}>
            <button onClick={() => router.back()} className={`${s.m_btn_1} text-white font_size_30  bg-$primary`}>
              返回列表
            </button>
            <button onClick={() => handleClick("prev")} className={`${s.m_btn_2} font_size_30 bg-white border-$primary`}>
              上一篇
            </button>
            <button onClick={() => handleClick("next")} className={`${s.m_btn_2} font_size_30 bg-white border-$primary`}>
              下一篇
            </button>
          </div>
        </div>
        <div className={`${s.modal} border hidden mobile:flex  flex-col items-center`}>
          <div className="z-60  bg-$color opacity-70"></div>
          <div className={`${s.container}  flex flex-col justify-between   opacity-100 bg-white `}>
            <div onClick={() => router.back()} className={`${s.close} cursor-pointer absolute`}>
              <img src="/assets/2560/service/useguide/close.png" className="img-fluid w-100 h-100" />
            </div>
            <div className={`${s.wrap} w-100 flex-1 items-center flex flex-col mb_43 overflow-auto`}>
              <span className="font_36 mb_43 font-extrabold mb_43 text-$37">{item?.Title}</span>
              <div className={`${s.video} mb_43 border flex items-center justify-center`}>
                <video className="w-100 h-100" controls>
                  {item?.Videourl && <source src={item?.Videourl} type="video/mp4" />}
                </video>
              </div>
              {item?.Detail && <div className="mt-5 text-$68" dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(item?.Detail)) }}></div>}
            </div>
            <div className={`${s.btns} flex justify-center  border-top items-center  left-0 z-80 right-0 bottom-30`}>
              <button onClick={() => router.back()} className={`${s.btn} text-white h_48 w_194 mr-2  bg-$primary`}>
                返回列表
              </button>
              <button onClick={() => handleClick("prev")} className={`${s.btn} rounded w_194 h_48 mr-2 border border-$primary`}>
                上一篇
              </button>
              <button onClick={() => handleClick("next")} className={`${s.btn} rounded text-white w_194 h_48 mr-2 border bg-$primary`}>
                下一篇
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
