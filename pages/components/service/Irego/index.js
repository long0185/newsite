import React, { useState } from "react";
import s from "./index.module.css";
import GuideItem from '../GuideItem'
import { motion } from "framer-motion";
export default function index() {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([1]);
  const handleClick = (direction) => {
    if(direction=='left'){
      const newNum = num-1<0?0:num-1;
      setNum(newNum)
    }
    if(direction=='right'){
      const newNum = num+1>2?2:num+1;
      setNum(newNum)
    }
  };
  return (
    <div className={`w-100 d-center flex-column mt_63`}>
      <div className={`${s.warp} w-screen flex overflow-hidden border relative`}>
        <div className={`absolute top_45 pt-3 px-20 flex justify-around w-100 z-20 h-20`} >
          <img onClick={() => handleClick('left')} className={`cursor-pointer left-32 h-100 absolute`} src='/assets/2560/home/left-arrow.svg'  ></img>
          <img onClick={() => handleClick('right')} className={`cursor-pointer right-32 h-100 absolute`} src='/assets/2560/home/right-arrow.svg'  ></img>
        </div>
        <motion.div
          animate={{
            translateX: `${-num * 33.333 + "%"}`,
          }}
          transition={{
            duration: 2
          }}
          className={`${s.item_wrap} flex justify-center `}>
          <GuideItem img_src="/assets/2560/service/useguide/irego.png" title={'iReGo操作指南 康复计划制定1'} />
          <GuideItem img_src="/assets/2560/service/useguide/irego.png" title={'iReGo操作指南 康复计划制定2'} />
          <GuideItem img_src="/assets/2560/service/useguide/irego.png" title={'iReGo操作指南 康复计划制定3'} />
        </motion.div>
      </div>

      <div className="flex mt_118">
        <div onClick={() => setNum(0)} className={`${s.slide} ${num == 0 ? 'bg-$primary' : 'bg-$gray'}  cursor-pointer`}></div>
        <div onClick={() => setNum(1)} className={`${s.slide} ${num == 1 ? 'bg-$primary' : 'bg-$gray'}  mx-5 cursor-pointer`}></div>
        <div onClick={() => setNum(2)} className={`${s.slide} ${num == 2 ? 'bg-$primary' : 'bg-$gray'}  cursor-pointer`}></div>
      </div>
    </div>
  );
}
