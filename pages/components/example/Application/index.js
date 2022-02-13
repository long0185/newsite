import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "./index.module.css";

const MApplicationCard_2 = ({ title = "", date = "", view = "" }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/application-detail")}
      className={`${s.m_item_2} flex items-center  justify-between`}
    >
      <div className={`${s.m_sm_img} relative bg-gray-400 border-2`}></div>
      <div className={`flex-1 flex flex-col items-start justify-between pl-4 h-100`}>
        <span className="font_size_24 text-$37 info-infomation">{title}</span>
        <div className="w-100 flex-1 justify-between flex flex-col pt-3">
          <div className="c_sub_title w-100 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/assets/2560/service/useguide/calendar.svg"
                className={`${s.svg} mr-2 relative`}
              ></img>
              <span className="font_14 text-$68">{date}</span>
            </div>
            <span className="font_14 text-$68">浏览：{view}</span>
          </div>
          <div className={`${s.line}`}></div>
          <div className=" flex w-100 items-center justify-between c_sub_title">
            <span className="font_14 text-$68">View more</span>
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

const ApplicationCard_2 = ({ title = "", date = "", view = "" }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/application-detail")}
      className={`${s.item_2} flex items-start  justify-between`}
    >
      <div className={`${s.sm_img} relative bg-gray-400 border-2`}></div>
      <div className={`flex-1 flex flex-col items-start justify-between h-100`}>
        <span className="font_size_24 text-$37 info-infomation">{title}</span>
        <div className="w-100 flex-1 justify-between flex flex-col pt-3">
          <div className="c_sub_title w-100 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/assets/2560/service/useguide/calendar.svg"
                className={`${s.svg} mr-2 relative`}
              ></img>
              <span className="font_14 text-$68">{date}</span>
            </div>
            <span className="font_14 text-$68">浏览：{view}</span>
          </div>
          <div className={`${s.line}`}></div>
          <div className=" flex w-100 items-center justify-between c_sub_title">
            <span className="font_14 text-$68">View more</span>
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

export const MApplicationCard = ({ title = "", date = "", view = "" }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/application-detail")}
      className={`${s.m_item_1} flex flex-col mb_43 `}
    >
      <div className={`${s.m_img} relative bg-info`}></div>
      <div
        className={`p-3 flex-1 border flex flex-col justify-between items-start`}
      >
        <div className="font_size_24 text-$37">{title}</div>
        <div className="font_14 text-$68 w-100 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/assets/2560/service/useguide/calendar.svg"
              className={`${s.svg} relative mr-2`}
            ></img>
            <span>{date}</span>
          </div>
          <span className="font_14 text-$68">浏览：{view}</span>
        </div>
        <div className={s.line}></div>
        <div className=" flex w-100 items-center justify-between c_sub_title">
          <span className="font_14 text-$68">View more</span>
          <img
            src="/assets/2560/example/right_arrow.svg"
            className={`${s.arrow} relative`}
          ></img>
        </div>
      </div>
    </div>
  );
};

const ApplicationCard = ({ title = "", date = "", view = "" }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/application-detail")}
      className={`${s.item} flex flex-col `}
    >
      <div className={`${s.img} relative bg-info`}></div>
      <div
        className={`p-3 flex-1 border flex flex-col justify-between items-start`}
      >
        <div className="font_size_24 text-$37">{title}</div>
        <div className="font_14 text-$68 w-100 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/assets/2560/service/useguide/calendar.svg"
              className={`${s.svg} relative mr-2`}
            ></img>
            <span>{date}</span>
          </div>
          <span className="font_14 text-$68">浏览：{view}</span>
        </div>
        <div className={s.line}></div>
        <div className=" flex w-100 items-center justify-between c_sub_title">
          <span className="font_14 text-$68">View more</span>
          <img
            src="/assets/2560/example/right_arrow.svg"
            className={`${s.arrow} relative`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default function index() {
  const [list, setList] = useState([1]);

  return (
    <>
      <div className="w-100 mt_90 mobile:hidden flex flex-col items-center justify-center">
        <div className={`${s.m_wrap} mb_43 flex justify-between`}>
        <MApplicationCard
          title="华山医院临床应用"
          date="2020年7月24日"
          view="231"
        />
        <MApplicationCard
          title="华山医院临床应用"
          date="2020年7月24日"
          view="231"
        />
        </div>
        <div className={`${s.box} w-100 flex-col items-center justify-center`}>
          {list.map((item,index)=>
               <div key={index} className="flex flex-col items-center justify-center">
                 <MApplicationCard_2
                  title="岳阳医院患者效果标题标题标题题标题标题标 标题标题"
                  date="2020年7月25日"
                  view="231"
                />
               </div>
          )}
        </div>
        <div className="w-100 flex items-center justify-center mb_100 mt_100">
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
      <div className=" mt_118 mb_118 hidden mobile:block">
        <div className={`${s.wrap}`}>
          <div className={`${s.content} w-100 d-center`}>
            <ApplicationCard
              title="华山医院临床应用"
              date="2020年7月24日"
              view="231"
            />
            <ApplicationCard
              title="华山医院临床应用"
              date="2020年7月24日"
              view="231"
            />
            <ApplicationCard
              title="华山医院临床应用"
              date="2020年7月24日"
              view="231"
            />
          </div>
        </div>
        {list.map((item, index) => (
          <>
            <div key={index} className="w-100 p-0 d-center">
              <div className={`${s.content_2} flex justify-between`}>
                <ApplicationCard_2
                  title="岳阳医院患者效果标题标题标题题标题标题标 标题标题"
                  date="2020年7月25日"
                  view="231"
                />
                <ApplicationCard_2
                  title="岳阳医院患者效果标题标题标题题标题标题标 标题标题"
                  date="2020年7月25日"
                  view="231"
                />
              </div>
            </div>
            <div className="w-100 p-0 d-center">
              <div className={`${s.content_2} flex justify-between`}>
                <ApplicationCard_2
                  title="岳阳医院患者效果标题标题标题题标题标题标 标题标题"
                  date="2020年7月25日"
                  view="231"
                />
                <ApplicationCard_2
                  title="岳阳医院患者效果标题标题标题题标题标题标 标题标题"
                  date="2020年7月25日"
                  view="231"
                />
              </div>
            </div>
          </>
        ))}
        <div className="w-100 flex items-center justify-center mt_100">
          <div className="flex">
            <button
              onClick={() => setList([...list, 1])}
              className="l_btn hover:bg-yellow-300"
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

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
              className={`${s.icon} calendar-icon img-fluid mr-1`}
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
              className={`${s.icon} calendar-icon img-fluid mr-1`}
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
          <span className="font_24 font-black">
            标题标题标题标题标题标题标题
          </span>
          <div className="flex justify-center items-center">
            <img
              src="/assets/2560/service/useguide/calendar.svg"
              className={`${s.icon} calendar-icon img-fluid mr-1`}
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
