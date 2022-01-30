import React, { useState } from "react";
import s from "./index.module.css";
import GuideItem from '../GuideItem'
import { motion } from "framer-motion";
export default function index() {
  const [num, setNum] = useState(0);
  return (
    <div className={`w-100 d-center flex-column mt_63`}>
      <div className={`${s.warp} w-screen flex overflow-hidden`}>
        <motion.div
        animate={{
          translateX:`${-num * 33.333 + "%"}`,
        }}
        transition={{
          duration:2
        }}
        className={`${s.item_wrap} flex justify-center `}>
          <GuideItem title='iReMo操作指南 康复计划制定' />
          <GuideItem title='iReMo操作指南 康复计划制定' />
          <GuideItem title='iReMo操作指南 康复计划制定' />
        </motion.div>
      </div>

      <div className="flex mt_118">
        <div onClick={()=>setNum(0)} className={`${s.slide} ${num==0?'bg-$primary':'bg-$gray'}  cursor-pointer`}></div>
        <div onClick={()=>setNum(1)} className={`${s.slide} ${num==1?'bg-$primary':'bg-$gray'}  mx-5 cursor-pointer`}></div>
        <div onClick={()=>setNum(2)} className={`${s.slide} ${num==2?'bg-$primary':'bg-$gray'}  cursor-pointer`}></div>
      </div>
    </div>
  );
}