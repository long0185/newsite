/** @format */

import React, { useState } from "react";
import Banner from "../../Banner";
import Carousel from "../../../components/Carousel";
import s from "./index.module.css";
import { motion } from "framer-motion";

let list = [
  {
    img_src: "/assets/2560/product/irego/dog.png",
    id: 1,
    text: "汪汪天使",
  },
  {
    img_src: "/assets/2560/product/irego/forest.png",
    id: 2,
    text: "梦幻森林",
  },
  {
    img_src: "/assets/2560/product/irego/run-cat.png",
    id: 3,
    text: "酷跑猫",
  },
  {
    img_src: "/assets/2560/product/irego/hit-mouse.png",
    id: 4,
    text: "打地鼠",
  },
  {
    img_src: "/assets/2560/product/irego/fly-sky.png",
    id: 5,
    text: "太空飞行",
  },
  {
    img_src: "/assets/2560/product/irego/puzzle.png",
    id: 6,
    text: "宇宙拼图",
  },
];

export default function index() {
  const [num, setnum] = useState(2);
  const handleClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setnum(newNum);
    }
    if (direction == "right") {
      const newNum = num + 1 > 3 ? 3 : num + 1;
      setnum(newNum);
    }
  };
  return (
    <div id='software' className='product-software w-100 flex justify-center items-center flex-col'>
      <Banner img={"/assets/newtitle/irego/title_3.png"} desc='通过游戏进行训练，增加趣味性。结合VR实现虚拟现实场景，增加训练的本体感和灵活度' />
      <div className='mobile:hidden flex justify-between flex-wrap w_1000 h_1063'>
        {list.map((item, index) => (
          <div className={`${s.m_game_img} relative`} key={index}>
            <img src={item.img_src} className={`w-100 h-100 absolute`}></img>
            <div className='w-100 h-100 opacity-01 flex justify-center items-end absolute z-20  hover:opacity-60 text-transparent hover:text-white cursor-pointer'>
              <span className=' top-8 bg-black  text-center py-3 w-100'>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='hidden software-content w-100 mobile:flex items-center justify-center relative'>
        <div className='flex-1 flex items-center justify-center z-10 bg-$gray border h_505 opacity-90 left-0 '>
          <img src='/assets/2560/home/left-arrow.svg' className={`${s.icon} cursor-pointer`} onClick={() => handleClick("left")} />
        </div>
        <div className={`${s.wrap}`}>
          <motion.div
            className={`flex w-200 justify-between`}
            animate={{
              translateX: `${-num * 16.667 + "%"}`,
              transition: {
                duration: 2,
              },
            }}>
            {list.map((item) => (
              <div key={item.id} className=' flex-1 h-100 h_505 relative'>
                <img className='w-100 h-100 img-fluid absolute z-10' src={item.img_src} alt='' />
                <div className='w-100 h-100 opacity-01 flex justify-center items-end absolute z-20  hover:opacity-60 text-transparent hover:text-white cursor-pointer'>
                  <span className=' top-8 bg-black  text-center py-3 w-100'>{item.text}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className='flex-1 flex items-center justify-center z-10 bg-$gray border h_505 opacity-90 right-0'>
          <img src='/assets/2560/home/right-arrow.svg' className={`${s.icon} cursor-pointer`} onClick={() => handleClick("right")} />
        </div>
      </div>
    </div>
  );
}
