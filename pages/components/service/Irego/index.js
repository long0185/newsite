import React, { useState } from "react";
import s from "./index.module.css";
import GuideItem from "../GuideItem";
import { motion } from "framer-motion";
import VideoModal from "../../videoModal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import router from "next/router";
export default function index() {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  const [list, setList] = React.useState([]);
  const [list_1, setList_1] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/guide")
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
  const handleShow = (bool) => {
    if (bool) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setShow(bool);
  };
  const handleClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setNum(newNum);
    }
    if (direction == "right") {
      const newNum = num + 1 > 2 ? 2 : num + 1;
      setNum(newNum);
    }
  };
  return (
    <>
      <div className={`w-100 d-center flex-col `}>
        <div className={`${s.warp} w-screen flex justify-center overflow-hidden relative flex-wrap px-0 mobile:px-10`}>
          {list.map((item) => (
            <div key={item.id} className="flex mt_63 ">
              <div onClick={() => router.push(`guidedetail?page=guide&id=${item.id}`)} className={`${s.img_wrap}`}>
                <div className={`${s.img} relative`}>
                  <img className=" w-100 h-100" src={item.Imageurl} />
                  <div className={`absolute ${s.sm_img_wrap}`}>
                    <div className={`${s.sm_img} relative`}>
                      <img src="/assets/2560/service/useguide/play.png" />
                    </div>
                  </div>
                </div>
                <div className={`${s.title} border`}>
                  <div className={`${s.big_title} text-left`}>{item.Title}</div>
                  <div className={`${s.sm_title} flex items-center`}>
                    <div className={`${s.calendar} relative`}>
                      <img src={"/assets/2560/service/useguide/calendar.svg"} />
                    </div>
                    <span className={s.date}>{item.Time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className={`absolute top_45 pt-3 px-20 flex justify-around w-100 z-20 h-20`}>
            <img onClick={() => handleClick("left")} className={`cursor-pointer left-32 h-100 absolute`} src="/assets/2560/home/left-arrow.svg"></img>
            <img onClick={() => handleClick("right")} className={`cursor-pointer right-32 h-100 absolute`} src="/assets/2560/home/right-arrow.svg"></img>
          </div>
          <motion.div
            animate={{
              translateX: `${-num * 33.333 + "%"}`,
            }}
            transition={{
              duration: 2,
            }}
            className={`${s.item_wrap} flex justify-center `}
          >
            <GuideItem handleShow={handleShow} img_src="/assets/2560/service/useguide/irego.png" title={"iReGo操作指南 康复计划制定1"} />
            <GuideItem handleShow={handleShow} img_src="/assets/2560/service/useguide/irego.png" title={"iReGo操作指南 康复计划制定2"} />
            <GuideItem handleShow={handleShow} img_src="/assets/2560/service/useguide/irego.png" title={"iReGo操作指南 康复计划制定3"} />
          </motion.div>
        </div>

        <div className="flex mt_118">
          <div onClick={() => setNum(0)} className={`${s.slide} ${num == 0 ? "bg-$primary" : "bg-$gray"}  cursor-pointer`}></div>
          <div onClick={() => setNum(1)} className={`${s.slide} ${num == 1 ? "bg-$primary" : "bg-$gray"}  mx-5 cursor-pointer`}></div>
          <div onClick={() => setNum(2)} className={`${s.slide} ${num == 2 ? "bg-$primary" : "bg-$gray"}  cursor-pointer`}></div>
        </div> */}
        </div>
      </div>
    </>
  );
}
