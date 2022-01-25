import React from "react";
import styles from "./index.module.css";

import Banner from "../../Banner";
export default function index() {
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

      <div className="software-content w-100 d-center">
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
      </div>
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
