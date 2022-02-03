import React, { useState } from "react";
import s from "./index.module.css";
import Banner from "../../../components/Banner";

export default function index() {
  const [years, setYears] = useState([
    { id: 2016, value: "2016",active:false },
    { id: 2017, value: "2017",active:false },
    { id: 2018, value: "2018",active:false },
    { id: 2019, value: "2019",active:false },
    { id: 2020, value: "2020",active:true },
    { id: 2021, value: "2021",active:false },
    { id: 2022, value: "2022",active:false },
  ]);
  const handleClick =(id)=>{
    const newYears = years.map(item=>{
      if(id==item.id){
        return{
          ...item,
          active:true
        }
      }else{
        return {
          ...item,
          active:false
        }
      }
    })
    setYears(newYears)
  }
  return (
    <div id="history" className={`w-100 p-0 ${s.wrap} flex justify-center items-center flex-col`}>
      <Banner img={"/assets/2560/company/title_history.png"} />
      <div className={`w-100 ${s.item_wrap}`}>
        <div className={`flex ${s.item} items-center justify-center relative`}>
          {years.map((item) => (
            <div
              onClick={()=>handleClick(item.id)}
              key={item.id}
              className="flex flex-col items-center relative mx-5"
            >
              <span className={`${s.year} ${item.active?'text-$primary':''} mb-2`}>{item.value}</span>
              <span
                className={`${s.point} ${item.active? s.active : ""}`}
              ></span>
            </div>
          ))}
          <div className={`${s.line} absolute`}></div>
        </div>
        <div className={`${s.history_wrap} w-100 flex justify-center`}>
          <div className={`${s.history_item} flex flex-col`}>
            <div className={`${s.img} relative bg-$gray`}></div>
            <div className={`${s.img_title} flex-1 flex flex-col bg-$white`}>
              <span className={s.sub_title}>
                在上海中医药大学附属岳阳中西医结合医院进行临床测试
              </span>
              <div className={`flex items-center`}>
                <img
                  src="/assets/2560/service/useguide/calendar.svg"
                  className={`${s.icon} relative  mr-2`}
                ></img>
                <span className="c_sub_title mt-1">{years.find(item=>item.active==true).id}年7月23日</span>
              </div>
            </div>
          </div>
          <div className={`${s.history_item} mx-5 flex flex-col`}>
            <div className={`${s.img} relative bg-$gray`}></div>
            <div className={`${s.img_title} flex-1 flex flex-col bg-$white`}>
              <span className={s.sub_title}>
                首届全球康复与辅助技术高等论坛做iReGo+外骨骼/跑步机的展示与发布
              </span>
              <div className={`flex items-center`}>
                <img
                  src="/assets/2560/service/useguide/calendar.svg"
                  className={`${s.icon} relative  mr-2`}
                ></img>
                <span className="c_sub_title mt-1">{years.find(item=>item.active==true).id}年7月23日</span>
              </div>
            </div>
          </div>
          <div className={`${s.history_item} flex flex-col `}>
            <div className={`${s.img} relative bg-$gray`}></div>
            <div className={`${s.img_title} flex-1 flex flex-col bg-$white`}>
              <span className={s.sub_title}>
                获上海市第二类医疗器械优先审批
              </span>
              <div className={`flex items-center`}>
                <img
                  src="/assets/2560/service/useguide/calendar.svg"
                  className={`${s.icon} relative  mr-2`}
                ></img>
                <span className="c_sub_title mt-1">{years.find(item=>item.active==true).id}年7月23日</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
