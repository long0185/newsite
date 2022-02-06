import Image from "next/image";
import React, { useState } from "react";
import s from "./index.module.css";
import Detail from "../Detail";
import { list } from "postcss";
import { useRouter } from "next/router";

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

const ApplicationCard = ({ title = '', date = '', view = '' }) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/application-detail')} className={`${s.item} flex flex-col `}>
      <div className={`${s.img} relative bg-info`}>
      </div>
      <div className={`${s.desc} p-3 flex-1 border flex flex-col justify-between items-start`}>
        <div className="font_size_24 text-$37">{title}</div>
        <div className="font_14 w-100 text-$68 flex items-center justify-between">
          <div className="d-flex align-items-center">
            <img src='/assets/2560/service/useguide/calendar.svg' className={`${s.svg} relative mr-2`}>
            </img>
            <span>{date}</span>
          </div>
          <span className="font_14 text-$68">浏览：{view}</span>
        </div>
        <div className={s.line}></div>
        <div className=" flex w-100 items-center justify-between c_sub_title">
          <span className="font_14 text-$68" >View more</span>
          <img src='/assets/2560/example/right_arrow.svg' className={`${s.arrow} relative`}>
          </img>
        </div>
      </div>
    </div>
  )
};

export default function index() {
  const [isShow, setIsShow] = useState(false);
  const [list, setList] = useState([1]);
  const handleShow = (bool)=>{
    setIsShow(bool)
  }
  return (
    <div className={`${s.content} `}>
      {isShow && <Detail handleShow={handleShow} showList={_list} />}
      {list.map((item,index)=><div key={index}>
      <div className="flex d-center mt-14">
      <ApplicationCard title="金矢机器人王志勇总经理携iReGo亮相创赢未来栏"
        date="2020年7月24日"
        view="231"
      />
      <ApplicationCard title="金矢机器人王志勇总经理携iReGo亮相创赢未来栏"
        date="2020年7月24日"
        view="231"
      />
      <ApplicationCard title="金矢机器人王志勇总经理携iReGo亮相创赢未来栏"
        date="2020年7月24日"
        view="231"
      />  

      </div>
      <div className="flex d-center mt-14">
      <ApplicationCard title="金矢机器人王志勇总经理携iReGo亮相创赢未来栏目"
        date="2020年7月24日"
        view="231"
      />
      <ApplicationCard title="金矢机器人王志勇总经理携iReGo亮相创赢未来栏目"
        date="2020年7月24日"
        view="231"
      />
      <ApplicationCard title="金矢机器人王志勇总经理携iReGo亮相创赢未来栏目"
        date="2020年7月24日"
        view="231"
      />
      </div>
      </div> )}
      <div className="flex justify-center items-center mb_100 mt_100">
        <button onClick={()=>setList([...list,1])} className="l_btn hover:bg-yellow-300">Show more</button>
      </div>
    </div>
  );
}
