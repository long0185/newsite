import React, { useState } from "react";
import s from "./index.module.css";
import VideoModal from "../../videoModal";
import { useRouter } from "next/router";
import dayjs from "dayjs";
const list = [
  {
    img_src: "/assets/2560/service/useguide/irego.png",
    video_src: "/assets/2560/service/useguide/play.png",
  },
  {
    img_src: "/assets/2560/service/useguide/irego.png",
    video_src: "/assets/2560/service/useguide/play.png",
  },
  {
    img_src: "/assets/2560/service/useguide/irego.png",
    video_src: "/assets/2560/service/useguide/play.png",
  },
  {
    img_src: "/assets/2560/service/useguide/irego.png",
    video_src: "/assets/2560/service/useguide/play.png",
  },
  {
    img_src: "/assets/2560/service/useguide/irego.png",
    video_src: "/assets/2560/service/useguide/play.png",
  },
  {
    img_src: "/assets/2560/service/useguide/irego.png",
    video_src: "/assets/2560/service/useguide/play.png",
  },
];
export default function index({ list = [], page }) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center" style={{ width: "100vw" }}>
      <div className={`flex flex-wrap w_1100 items-center justify-center pb_43`}>
        {list.map((item, index) => (
          <div key={item.id} onClick={() => router.push(`guidedetail?page=${page}&id=${item.id}`)} className={`${s.img_wrap} mt_63 mx-3`}>
            <div className={`${s.img} relative`}>
              <img className=" w-100 h-100" src={item.Imageurl} />
              <div className={`absolute ${s.sm_img_wrap}`}>
                <div className={`${s.sm_img} relative`}>
                  <img src={item.video_src} />
                </div>
              </div>
            </div>
            <div className={`${s.title}`}>
              <div className={s.big_title}>{item.Title}</div>
              <div className={`${s.sm_title} flex items-center`}>
                <div className={`${s.calendar} relative`}>
                  <img src={"/assets/2560/service/useguide/calendar.svg"} />
                </div>
                <span className={s.date}>{dayjs(item.Time).format("YYYY-MM-DD")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
