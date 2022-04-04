import React, { useState } from "react";
import s from "./index.module.css";
import Banner from "../../../components/Banner";

export default function index() {
  const [years, setYears] = useState([
    { id: 2016, value: "2016", active: false },
    { id: 2017, value: "2017", active: false },
    { id: 2018, value: "2018", active: false },
    { id: 2019, value: "2019", active: false },
    { id: 2020, value: "2020", active: false },
    { id: 2021, value: "2021", active: true },
    { id: 2022, value: "2022", active: false },
  ]);
  const [list, setList] = useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/list")
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
  const handleClick = (id) => {
    const newYears = years.map((item) => {
      if (id == item.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setYears(newYears);
  };
  return (
    <div id="ibmcom-home" className={`w-100 p-0 ${s.wrap} indexNews flex justify-center items-center flex-col relative`}>
      <div id="particles-js" className="absolute top-0 bottom-0 left-0 right-0 z-10"></div>
      <div className={`${s.m_left} mobile:hidden top-0 bottom-0 absolute`}>
        <div className={`${s.m_line_wrap} absolute`}>
          {years.map((item, index) => (
            <div onClick={() => handleClick(item.id)} key={item.id} style={{ top: `${80 * index}px` }} className={`${s.m_line_item} w-100 flex absolute items-center justify-between`}>
              <span className={`${s.point}`}></span>
              <span className={`font_size_30 ${item.active ? "text-$primary" : "text-white"}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <Banner img={"/assets/2560/company/title_history.png"} />
      <div className={`w-100 ${s.item_wrap} flex mobile:flex-col`}>
        <div className={`hidden mobile:flex ${s.item} items-center justify-center relative`}>
          <div className={`${s.line} absolute`}></div>
          {years.map((item) => (
            <div onClick={() => handleClick(item.id)} key={item.id} className="flex flex-col items-center relative mx-5 cursor-pointer">
              <span className={`${s.year} ${item.active ? "text-$primary" : ""} mb-2`}>{item.value}</span>
              <span className={`${s.point} ${item.active ? s.active : ""}`}></span>
            </div>
          ))}
        </div>
        <div className={`${s.history_wrap} w-100 flex flex-col mobile:flex-row items-end pr-20 mobile:pr-0 justify-center`}>
          {list
            .filter((item) => item.Year == "2021")
            .map((ele) => (
              <div key={ele.id} className={`${s.history_item} flex flex-col mr-5`}>
                <div className={`${s.img} relative bg-$gray`}>
                  <img src={ele.Imageurl} alt="" />
                </div>
                <div className={`${s.img_title} flex-1 flex flex-col bg-$white`}>
                  <span className={s.sub_title}>{ele.Title}</span>
                  <div className={`flex items-center`}>
                    <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} relative  mr-2`}></img>
                    <span className="c_sub_title text-$86 mt-1">{ele.Time}</span>
                  </div>
                </div>
              </div>
            ))}
          {/* <div className={`${s.history_item} flex flex-col`}>
            <div className={`${s.img} relative bg-$gray`}></div>
            <div className={`${s.img_title} flex-1 flex flex-col bg-$white`}>
              <span className={s.sub_title}>在上海中医药大学附属岳阳中西医结合医院进行临床测试</span>
              <div className={`flex items-center`}>
                <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} relative  mr-2`}></img>
                <span className="c_sub_title text-$86 mt-1">{years.find((item) => item.active == true).id}年7月23日</span>
              </div>
            </div>
          </div>
          <div className={`${s.history_item} mobile:mx-5 flex flex-col`}>
            <div className={`${s.img} relative bg-$gray`}></div>
            <div className={`${s.img_title} flex-1 flex flex-col bg-$white`}>
              <span className={s.sub_title}>首届全球康复与辅助技术高等论坛做iReGo+外骨骼/跑步机的展示与发布</span>
              <div className={`flex items-center`}>
                <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} relative  mr-2`}></img>
                <span className="c_sub_title text-$86 mt-1">{years.find((item) => item.active == true).id}年7月23日</span>
              </div>
            </div>
          </div>
          <div className={`${s.history_item} flex flex-col `}>
            <div className={`${s.img} relative bg-$gray`}></div>
            <div className={`${s.img_title} flex-1 flex flex-col bg-$white`}>
              <span className={s.sub_title}>获上海市第二类医疗器械优先审批</span>
              <div className={`flex items-center`}>
                <img src="/assets/2560/service/useguide/calendar.svg" className={`${s.icon} relative  mr-2`}></img>
                <span className="c_sub_title text-$86 mt-1">{years.find((item) => item.active == true).id}年7月23日</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
