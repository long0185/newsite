import React from "react";
import s from "./index.module.css";
import calendar from "assets/2560/service/useguide/calendar.svg";
import arrow_right from "assets/2560/example/right_arrow.svg";
import p_1 from "assets/2560/info/expert/p_1.png";
import Image from "next/image";
export default function index() {
  return (
    <>
      <div className="col-12 p-0 d-center">
        <div className={`${s.content_2} d-flex justify-between`}>
          <div className={`${s.item_2} flex items-start mx-3`}>
            <div className={`${s.sm_img} relative bg-gray-400 border-2`}>
              <Image src={p_1} layout="fill" />
            </div>
            <div className={`flex items-star flex-col `}>
              <div className="flex items-center">
                <span className="c_title">陈武雄</span>
                <span className={`${s.badge} ml-2 px-3 py-2`}>医学专家</span>
              </div>
              <span className="c_sub_title my-2">专家顾问 / 康复医学主任</span>
              <span className="c_title">
                访谈标题访谈标题访谈标题访谈标题访谈标题
              </span>

              <div className="c_sub_title d-flex align-items-center justify-content-between mt-5">
                <div className="d-flex align-items-center">
                  <div className={`${s.svg} relative mr-2`}>
                    <Image src={calendar} layout="fill" />
                  </div>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span>View more</span>
                <span className={`${s.arrow} relative`}>
                  <Image layout="fill" src={arrow_right} />
                </span>
              </div>
            </div>
          </div>
          <div className={`${s.item_2} flex items-start mx-3`}>
            <div className={`${s.sm_img} relative bg-gray-400 border-2`}>
              <Image src={p_1} layout="fill" />
            </div>
            <div className={`flex items-star flex-col `}>
              <div className="flex items-center">
                <span className="c_title">陈武雄</span>
                <span className={`${s.badge} ml-2 px-3 py-2`}>医学专家</span>
              </div>
              <span className="c_sub_title my-2">专家顾问 / 康复医学主任</span>
              <span className="c_title">
                访谈标题访谈标题访谈标题访谈标题访谈标题
              </span>

              <div className="c_sub_title d-flex align-items-center justify-content-between mt-5 ">
                <div className="d-flex align-items-center">
                  <div className={`${s.svg} relative mr-2`}>
                    <Image src={calendar} layout="fill" />
                  </div>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span>View more</span>
                <span className={`${s.arrow} relative`}>
                  <Image layout="fill" src={arrow_right} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 p-0 d-center mb-20">
        <div className={`${s.content_2} d-flex justify-between`}>
          <div className={`${s.item_2} flex items-start mx-3`}>
            <div className={`${s.sm_img} relative bg-gray-400 border-2`}>
              <Image src={p_1} layout="fill" />
            </div>
            <div className={`flex items-star flex-col `}>
              <div className="flex items-center">
                <span className="c_title">陈武雄</span>
                <span className={`${s.badge} ml-2 px-3 py-2`}>医学专家</span>
              </div>
              <span className="c_sub_title my-2">专家顾问 / 康复医学主任</span>
              <span className="c_title">
                访谈标题访谈标题访谈标题访谈标题访谈标题
              </span>

              <div className="c_sub_title d-flex align-items-center justify-content-between mt-5">
                <div className="d-flex align-items-center">
                  <div className={`${s.svg} relative mr-2`}>
                    <Image src={calendar} layout="fill" />
                  </div>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span>View more</span>
                <span className={`${s.arrow} relative`}>
                  <Image layout="fill" src={arrow_right} />
                </span>
              </div>
            </div>
          </div>
          <div className={`${s.item_2} flex items-start mx-3`}>
            <div className={`${s.sm_img} relative bg-gray-400 border-2`}>
              <Image src={p_1} layout="fill" />
            </div>
            <div className={`flex items-star flex-col `}>
              <div className="flex items-center">
                <span className="c_title">陈武雄</span>
                <span className={`${s.badge} ml-2 px-3 py-2`}>医学专家</span>
              </div>
              <span className="c_sub_title my-2">专家顾问 / 康复医学主任</span>
              <span className="c_title">
                访谈标题访谈标题访谈标题访谈标题访谈标题
              </span>

              <div className="c_sub_title d-flex align-items-center justify-content-between mt-5 ">
                <div className="d-flex align-items-center">
                  <div className={`${s.svg} relative mr-2`}>
                    <Image src={calendar} layout="fill" />
                  </div>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span>View more</span>
                <span className={`${s.arrow} relative`}>
                  <Image layout="fill" src={arrow_right} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
