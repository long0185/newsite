import React, { useState } from "react";
import s from "./index.module.css";
import MGuideItem from '../MGuideItem'
import { motion } from "framer-motion";
import VideoModal from '../../videoModal'
export default function index() {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([1]);
  const [show, setShow] = useState(false);
  const handleShow = (bool) => {
    if(bool){
      document.body.style.overflowY='hidden'
    }else{
      document.body.style.overflowY='auto'
    }
    setShow(bool)
  };
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
    <>
      {show && <VideoModal list={[]} handleShow={handleShow}/>}
    <div className={`w-100 d-center flex-col mt_63`}>
      <div className={`${s.warp} w-screen flex overflow-hidden relative`}> 
        <motion.div
          animate={{
            translateX: `${-num * 33.333 + "%"}`,
          }}
          transition={{
            duration: 2
          }}
          className={`${s.item_wrap} flex justify-center `}>
          <MGuideItem handleShow={handleShow} img_src="/assets/2560/example/iremo.png" title={'iReMo操作指南 康复计划制定1'} />
          <MGuideItem handleShow={handleShow} img_src="/assets/2560/example/iremo.png" title={'iReMo操作指南 康复计划制定2'} />
          <MGuideItem handleShow={handleShow} img_src="/assets/2560/example/iremo.png" title={'iReMo操作指南 康复计划制定3'} />
        </motion.div>
      </div>

      <div className="flex mt_118">
        <div onClick={() => setNum(0)} className={`${s.slide} ${num == 0 ? 'bg-$primary' : 'bg-$gray'}  cursor-pointer`}></div>
        <div onClick={() => setNum(1)} className={`${s.slide} ${num == 1 ? 'bg-$primary' : 'bg-$gray'}  mx-5 cursor-pointer`}></div>
        <div onClick={() => setNum(2)} className={`${s.slide} ${num == 2 ? 'bg-$primary' : 'bg-$gray'}  cursor-pointer`}></div>
      </div>
    </div>
    </>
  );
}
