import React, { useState } from "react";
import s from "./index.module.css";

import Banner from "../../../components/Banner";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export const renderType = (type) => {
  switch (type) {
    case 0:
      return "工学专家";
      break;
    case 1:
      return "医学专家";
      break;
    case 2:
      return "设计学专家";
      break;
  }
};
const TeamCard = ({ item }) => {
  return (
    <div className={`${s.expert_img_wrap} flex items-center  `}>
      <img src={item.Imageurl} className={`${s.expert_img}`} />
      <div className="flex flex-col ml-3 self-start">
        <div className="flex items-center">
          <span className="font_30 font-black text-black">{item.Name}</span>
          <span className="ml-3 px-3 py-1 bg-$primary text-white">{renderType(item.Type)}</span>
        </div>
        <span className="font_18 text-$37 text-left">{item.Title}</span>
        {item.Content.split("\n").map((ele, index) => (
          <div key={index} className="flex  text-$86">
            <span className="span-point relative font_16 text-$86 pl-4 my-1">{ele}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const MangerCard = ({ img_src = "", name = "", title = "", desc = "" }) => {
  return (
    <>
      <div className={`${s.m_teamer} mobile:hidden pt-7 flex flex-col items-center mb_43 mx-3`}>
        <img src={img_src} className={`${s.m_img} relative`}></img>
        <div className="flex flex-col items-start w_400 pt-3 flex-1 ">
          <span className="font_36 font-black">{name}</span>
          <span className="font_size_30 text-$37">{title}</span>
          {desc.split("\n").map((item, index) => (
            <span key={index} className="m-span-point relative font_size_24 text-$86 pl-4 my-1">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={`${s.teamer} hidden mobile:flex flex-row justify-around pl-4 items-center mb_43 mx-3`}>
        <img src={img_src} className={`${s.img} relative`}></img>
        <div className="flex flex-col items-start pt-6 w_400 px-3 py-3 h-100 ">
          <span className="font_30 font-black">{name}</span>
          <span className="font_size_20 text-$37">{title}</span>
          {desc.split("\n").map((item, index) => (
            <span key={index} className="span-point relative font_16 text-$86 pl-4 my-1">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default function index() {
  const [num, setnum] = useState(0);
  const [list, setList] = useState([]);
  const [ExpertList, setExpertList] = useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/company")
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
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/expert")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            val = val.sort((a, b) => a.OrderNu - b.OrderNu);
            setExpertList(val);
          }
        });
    }
    getList();
  }, []);
  const handClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < -1 ? -1 : num - 1;

      setnum(newNum);
    }
    if (direction == "right") {
      const newNum = num + 1 > 0 ? 0 : num + 1;

      setnum(newNum);
    }
  };
  return (
    <div id="team" className="d-center flex-col">
      <Banner
        img={"/assets/2560/company/title_team.png"}
        desc={
          <>
            <span>公司组织结构完整，下设：技术部、生产部、营销部、品质部、设计部、财务部、行政部七大部门，研发团队：博士5人，硕士6人，本科19人。</span>
            <span>核心研发成员6人，研发团队：博士5人，硕士19人，本科15人。 研发团队核心人员具有参与美国、德国相关的康复机器人研发经验，掌握核心关键技术。</span>
          </>
        }
      />

      <div className={`${s.wrap} flex-wrap w-screen flex items-center justify-center mt-5`}>
        {list.map((item, index) => (
          <MangerCard key={item.id} img_src={item.Imageurl} name={item.Name} title={item.Title} desc={item.Content} />
        ))}
      </div>
      <div className="font_36 flex items-center">专家团队</div>
      <div className={`${s.expert} hidden w-screen mobile:flex items-center justify-center`}>
        <div className="flex-1 pl-28 flex justify-center">
          <img onClick={() => handClick("left")} src="/assets/2560/company/left.svg" className={`${s.left_arrow} relative cursor-pointer`}></img>
        </div>
        <div className="w_2100 flex overflow-hidden">
          <motion.div
            animate={{
              translateX: `${num * 50}%`,
            }}
            transition={{
              duration: 2,
            }}
            className="w-200 flex justify-around py-5"
          >
            <div className="flex flex-column mobile:flex-row w_2100  justify-between px-4">
              {ExpertList.map((item) => (
                <TeamCard item={item} />
              ))}
            </div>
            <div className="flex w_2100 justify-between px-4">
              {ExpertList.map((item) => (
                <TeamCard item={item} />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex-1 flex pr-28 justify-center">
          <img onClick={() => handClick("right")} src="/assets/2560/company/right.svg" className={`${s.left_arrow} relative cursor-pointer`}></img>
        </div>
      </div>
      <div className={`${s.m_expert} mobile:hidden flex items-center justify-center`}>
        <div className="w-100 mt-5 flex overflow-hidden">
          <Carousel className="mt-5" showStatus={false} swipeable={true} emulateTouch showArrows={false}>
            <div className="flex flex-col pb-5 items-center">
              {ExpertList.map((item) => (
                <TeamCard item={item} />
              ))}
            </div>
            <div className="flex flex-col pb-5 items-center">
              {ExpertList.map((item) => (
                <TeamCard item={item} />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-100 justify-center hidden   mobile:flex mb_100">
        <div onClick={() => setnum(-1)} className={`${s.slide} ${num == -1 ? "bg-$primary" : "bg-$gray"}  cursor-pointer`}></div>
        <div onClick={() => setnum(0)} className={`${s.slide} ${num == 0 ? "bg-$primary" : "bg-$gray"}  mx-5 cursor-pointer`}></div>
      </div>
    </div>
  );
}
