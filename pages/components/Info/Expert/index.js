import React, { useState } from "react";
import Detail from "../Detail";
import s from "./index.module.css";
// const list= [{
//   name:'陈武雄',
//   title:'医学专家',
//   sub_title:'专家顾问 / 康复医学主任',
//   desc:'访谈标题访谈标题访谈标题访谈标题访谈标题',
//   img_src:'/assets/2560/info/expert/p_1.png'
// },{
//   name:'陈武雄',
//   title:'医学专家',
//   sub_title:'专家顾问 / 康复医学主任',
//   desc:'访谈标题访谈标题访谈标题访谈标题访谈标题',
//   img_src:'/assets/2560/info/expert/p_1.png'
// }]
let _list=[
	{
		id:1,
    element:<div className="w-100 h-100 flex flex-col pt-5">
    <div className="w-100 flex flex-col items-center justify-center">
      <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
      <div className="flex justify-center items-center">
        <img src="/assets/2560/service/useguide/calendar.svg" 
        className={`${s.icon} img-fluid mr-1`} ></img>
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
	},
	{
		id:2,
		element:<div className="w-100 h-100 flex flex-col pt-5">
      <div className="w-100 flex flex-col items-center justify-center">
        <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
        <div className="flex justify-center items-center">
          <img src="/assets/2560/service/useguide/calendar.svg" 
          className={`${s.icon} img-fluid mr-1`} ></img>
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
      <div>

      </div>
    </div>
	},
	{
		id:3,
    element:<div className="w-100 h-100 flex flex-col pt-5">
    <div className="w-100 flex flex-col items-center justify-center">
      <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
      <div className="flex justify-center items-center">
        <img src="/assets/2560/service/useguide/calendar.svg" 
        className={`${s.icon} img-fluid mr-1`} ></img>
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
	}
]

export default function index() {
  const [isShow, setIsShow] = useState(false);
  const handleShow = (bool)=>{
    setIsShow(bool)
  }
  return (
    <>
    {isShow && <Detail handleShow={handleShow} showList={_list} />}
      <div className="col-12 p-0 d-center">
        <div className={`${s.content_2} d-flex justify-between`}>
          <div className={`${s.item_2} flex items-start mx-3`}>
            <img
              src="/assets/2560/info/expert/p_1.png"
              className={`${s.sm_img} relative bg-gray-400 border-2`}
            ></img>
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
                  <img
                    src="/assets/2560/service/useguide/calendar.svg"
                    className={`${s.svg} relative mr-2`}
                  ></img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span onClick={()=>handleShow(true)} >View more</span>
                <img
                  src="/assets/2560/example/right_arrow.svg"
                  className={`${s.arrow} relative`}
                ></img>
              </div>
            </div>
          </div>
          <div className={`${s.item_2} flex items-start mx-3`}>
            <img
              src="/assets/2560/info/expert/p_1.png"
              className={`${s.sm_img} relative bg-gray-400 border-2`}
            ></img>
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
                  <img
                    src="/assets/2560/service/useguide/calendar.svg"
                    className={`${s.svg} relative mr-2`}
                  ></img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span onClick={()=>handleShow(true)}>View more</span>
                <img
                  src="/assets/2560/example/right_arrow.svg"
                  className={`${s.arrow} relative`}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 p-0 d-center mb-20">
        <div className={`${s.content_2} d-flex justify-between`}>
          <div className={`${s.item_2} flex items-start mx-3`}>
            <img
              src="/assets/2560/info/expert/p_1.png"
              className={`${s.sm_img} relative bg-gray-400 border-2`}
            ></img>
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
                  <img
                    src="/assets/2560/service/useguide/calendar.svg"
                    className={`${s.svg} relative mr-2`}
                  ></img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span onClick={()=>handleShow(true)} >View more</span>
                <img
                  src="/assets/2560/example/right_arrow.svg"
                  className={`${s.arrow} relative`}
                ></img>
              </div>
            </div>
          </div>
          <div className={`${s.item_2} flex items-start mx-3`}>
            <img
              src="/assets/2560/info/expert/p_1.png"
              className={`${s.sm_img} relative bg-gray-400 border-2`}
            ></img>
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
                  <img
                    src="/assets/2560/service/useguide/calendar.svg"
                    className={`${s.svg} relative mr-2`}
                  ></img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span onClick={()=>handleShow(true)}>View more</span>
                <img
                  src="/assets/2560/example/right_arrow.svg"
                  className={`${s.arrow} relative`}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
