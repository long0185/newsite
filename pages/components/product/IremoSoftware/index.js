import React, { useState } from "react";
import styles from "./index.module.css";
import s from './index.module.css'

let list = [
  {
    img_src: '/assets/2560/product/iremo/game-mirror.png',
    id: 1,
    text: '酷跑猫'
  },
  {
    img_src: '/assets/2560/product/iremo/game-ball.png',
    id: 2,
    text: '酷跑猫'
  },
  {
    img_src: '/assets/2560/product/iremo/game-write.png',
    id: 3,
    text: '酷跑猫'
  },
  {
    img_src: '/assets/2560/product/iremo/game-mirror.png',
    id: 4,
    text: '酷跑猫'
  },
  {
    img_src: '/assets/2560/product/iremo/game-ball.png',
    id: 5,
    text: '酷跑猫'
  },
  {
    img_src: '/assets/2560/product/iremo/game-write.png',
    id: 6,
    text: '酷跑猫'
  },
]

import Banner from "../../Banner";
import { motion } from "framer-motion";
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
    <div
      id="software"
      className="product-software w-100 d-flex justify-content-center flex-column"
    >
      <Banner
        img={"/assets/newtitle/iremo/title_3.png"}
        desc={
          <>
            <span>
              界面：15.6寸触摸屏，界面简单、易懂主题以绿色为主，带给人温情和清爽的春天的感觉；
            </span>
            <span>
              操控简易，可通过自定义参数调整辅助力的等级，进行竖直面、水平面、倾斜面以及三维空间的康复训练,满足不同患者不同阶段的康复训练需求。
            </span>
          </>
        }
      />
      <div className={`w-100 text-center mb_43`}>
        <span className={`${styles.subtitle}`}>平面康复训练游戏</span>
      </div>
      <div className="iremo-software-content w-100 flex items-center justify-center relative">
        <div className="flex-1 flex items-center justify-center z-10 bg-$gray border h_415 opacity-50 left-0 ">
          <img
            src="/assets/2560/home/left-arrow.svg"
            className={`${s.icon} cursor-pointer`}
            onClick={() => handleClick("left")}
          />
        </div>
        <div className={`${s.wrap}`}>
          <motion.div
            className={`flex w-200 justify-between`}
            animate={{
              translateX: `${-num * 16.667 + "%"}`,
              transition: {
                duration: 2,
              },
            }}
          >
            {list.map(item =>
               <div key={item.id} className=" flex-1 h-100 h_415 relative">
              <img className="w-100 h-100 img-fluid absolute z-10"
                src={item.img_src} alt="" />
              <div className="w-100 h-100 opacity-01 flex justify-center items-end absolute z-20  hover:opacity-60 text-transparent hover:text-white cursor-pointer">
                <span className=" top-8 bg-black  text-center py-3 w-100">{item.text}</span>
              </div>
            </div>)}


          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-center z-10 bg-$gray border h_415 opacity-50 right-0">
          <img
            src="/assets/2560/home/right-arrow.svg"
            className={`${s.icon} cursor-pointer`}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
      {/* <div className="software-content w-100 d-center">
        <div className="col-1"></div>
        <img
          src="/assets/2560/product/iremo/game-mirror.png"
          className="col-3 position-relative w_726 h_413"
        ></img>
        <img
          src="/assets/2560/product/iremo/game-ball.png"
          className="col-3 w_726 h_413 relative"
        ></img>
        <img
          src="/assets/2560/product/iremo/game-write.png"
          className="col-3 w_726 h_413 relative"
        ></img>
        <div className="col-1"></div>
      </div> */}
      <div className={`col-12 text-center ${styles.subtitle_wrap}`}>
        <span className={`${styles.subtitle}`}>空间康复训练游戏</span>
      </div>
      <div className="col-12 d-center">
        <div className={`${styles.game} d-center relative`}>
          <img
            src="/assets/2560/product/iremo/game_1.png"
            className={`${styles.game_img} relative`}
          ></img>
          <div className={`${styles.sm_img_wrap} absolute d-flex`}>
            <img
              src="/assets/2560/product/iremo/sm_img_2.png"
              className={`${styles.sm_img_1} relative`}
            ></img>
            <img
              src="/assets/2560/product/iremo/sm_img_1.png"
              className={`${styles.sm_img_2} relative`}
            ></img>
          </div>
          <img
            src="/assets/2560/product/iremo/s_bottom_img_1.png"
            className={`${styles.game_img} relative`}
          ></img>
          <div className="absolute bottom-5 flex justify-around w-100 ">
            <span className=" pl-8 font_21">
              水果采摘（肩肘关机活动度训练）
            </span>
            <span className="pr-8 font_21">喝水ADL（日常生活能力训练）</span>
          </div>
        </div>
      </div>
    </div>
  );
}
