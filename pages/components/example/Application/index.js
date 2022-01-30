import React, { useState } from "react";
import Detail from "../../Info/Detail";
import s from "./index.module.css";
let _list=[
	{
		id:1,
    element:<div className="w-100 h-100 flex flex-col pt-5">
    <div className="w-100 flex flex-col items-center justify-center">
      <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
      <div className="flex justify-center items-center">
        <img src="/assets/2560/service/useguide/calendar.svg" 
        className={`${s.icon} calendar-icon img-fluid mr-1`} ></img>
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
          className={`${s.icon} calendar-icon img-fluid mr-1`} ></img>
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
	},
	{
		id:3,
    element:<div className="w-100 h-100 flex flex-col pt-5">
    <div className="w-100 flex flex-col items-center justify-center">
      <span className="font_24 font-black">标题标题标题标题标题标题标题</span>
      <div className="flex justify-center items-center">
        <img src="/assets/2560/service/useguide/calendar.svg" 
        className={`${s.icon} calendar-icon img-fluid mr-1`} ></img>
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
    <div className=" borde-2 mt_118 mb_118">
      {isShow && <Detail handleShow={handleShow} showList={_list} />}
      <div className={`${s.wrap}`}>
        <div className={`${s.content}  col-12 d-center`}>
          <div className={`${s.item} `}>
            <div className={`${s.img}  relative bg-info`}>
            </div>
            <div className={`${s.desc}`}>
              <div className="c_title">华山医院临床应用</div>
              <div className="c_sub_title d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                <img src='/assets/2560/service/useguide/calendar.svg' className={`${s.svg} relative mr-2`}>
                  </img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className=" flex items-center justify-between c_sub_title">
                <span onClick={()=>handleShow(true)}>View more</span>
                <img src='/assets/2560/example/right_arrow.svg' className={`${s.arrow} relative`}>
                </img>
              </div>
            </div>
          </div>
          <div className={`${s.item} `}>
            <div className={`${s.img}  relative bg-info`}>
              {/* <Image src={} layout='fill' /> */}
            </div>
            <div className={`${s.desc}`}>
              <div className="c_title">华山医院临床应用</div>
              <div className="c_sub_title d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img src='/assets/2560/service/useguide/calendar.svg' className={`${s.svg} relative mr-2`}>
                  </img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className=" flex items-center justify-between c_sub_title">
                <span onClick={()=>handleShow(true)}>View more</span>
                <img src='/assets/2560/example/right_arrow.svg' className={`${s.arrow} relative`}>
                </img>
              </div>
            </div>
          </div>
          <div className={`${s.item} `}>
            <div className={`${s.img}  relative bg-info`}>
              {/* <Image src={} layout='fill' /> */}
            </div>
            <div className={`${s.desc}`}>
              <div className="c_title">华山医院临床应用</div>
              <div className="c_sub_title d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                <img src='/assets/2560/service/useguide/calendar.svg' className={`${s.svg} relative mr-2`}>
                  </img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className=" flex items-center justify-between c_sub_title">
                <span onClick={()=>handleShow(true)}>View more</span>
                <img src='/assets/2560/example/right_arrow.svg' className={`${s.arrow} relative`}>
                </img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 p-0 d-center">
        <div className={`${s.content_2} d-flex justify-between`}>
          <div className={`${s.item_2} flex items-start  justify-between`}>
            <div className={`${s.sm_img} relative bg-gray-400 border-2`}>
              {/* <Image src={} layout="fill"/> */}
            </div>
            <div className={``}>
              <span className="c_title">
                岳阳医院患者效果标题标题标题题标题标题标 标题标题
              </span>
              <div className="c_sub_title d-flex align-items-center justify-content-between mt-5">
                <div className="d-flex align-items-center">
                <img src='/assets/2560/service/useguide/calendar.svg' className={`${s.svg} relative mr-2`}>
                  </img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span onClick={()=>handleShow(true)}>View more</span>
                <img src='/assets/2560/example/right_arrow.svg' className={`${s.arrow} relative`}>
                </img>
              </div>
            </div>
          </div>
          <div className={`${s.item_2} flex items-start  justify-between`}>
            <div className={`${s.sm_img} relative bg-gray-400 border-2`}>
              {/* <Image src={} layout="fill"/> */}
            </div>
            <div className={``}>
              <span className="c_title">
                岳阳医院患者效果标题标题标题题标题标题标 标题标题
              </span>
              <div className="c_sub_title d-flex align-items-center justify-content-between mt-5">
                <div className="d-flex align-items-center">
                <img src='/assets/2560/service/useguide/calendar.svg' className={`${s.svg} relative mr-2`}>
                  </img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span>View more</span>
                <img src='/assets/2560/example/right_arrow.svg' className={`${s.arrow} relative`}>
                </img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 p-0 d-center">
        <div className={`${s.content_2} d-flex justify-between`}>
          <div className={`${s.item_2} flex items-start  justify-between`}>
            <div className={`${s.sm_img} relative bg-gray-400 border-2`}>
              {/* <Image src={} layout="fill"/> */}
            </div>
            <div className={``}>
              <span className="c_title">
                岳阳医院患者效果标题标题标题题标题标题标 标题标题
              </span>
              <div className="c_sub_title d-flex align-items-center justify-content-between mt-5">
                <div className="d-flex align-items-center">
                <img src='/assets/2560/service/useguide/calendar.svg' className={`${s.svg} relative mr-2`}>
                  </img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span>View more</span>
                <img src='/assets/2560/example/right_arrow.svg' className={`${s.arrow} relative`}>
                </img>
              </div>
            </div>
          </div>
          <div className={`${s.item_2} flex items-start  justify-between`}>
            <div className={`${s.sm_img} relative bg-gray-400 border-2`}>
              {/* <Image src={} layout="fill"/> */}
            </div>
            <div className={``}>
              <span className="c_title">
                岳阳医院患者效果标题标题标题题标题标题标 标题标题
              </span>
              <div className="c_sub_title d-flex align-items-center justify-content-between mt-5">
                <div className="d-flex align-items-center">
                <img src='/assets/2560/service/useguide/calendar.svg' className={`${s.svg} relative mr-2`}>
                  </img>
                  <span>2020年7月23日</span>
                </div>
                <span>浏览：231</span>
              </div>
              <div className={s.line}></div>
              <div className="mt-3 flex items-center justify-between c_sub_title">
                <span>View more</span>
                <img src='/assets/2560/example/right_arrow.svg' className={`${s.arrow} relative`}>
                </img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
