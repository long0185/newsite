import React from "react";
import s from "./index.module.css";
// import left_img from "/assets/2560/home/logo.svg";
// import right_img from "/assets/2560/home/nav.svg";
// import innovate_1 from "/assets/2560/home/innovate_1.jpeg";
// import innovate_2 from "/assets/2560/home/innovate_2.jpeg";
// import market_png from "/assets/2560/home/market.png";
// import news_png from "/assets/2560/home/news.png";
// import innovate from "/assets/2560/home/innovate.png";
// import qianyue from "/assets/2560/home/qianyue.png";
import Submenu from "../SubMenu";
import Menu from "../../Menu";
import { motion } from "framer-motion";

export default function index() {
  return (
    <div className={`${s.wrap} d-center relative flex-col border bg-white`}>
      <Menu />
      <div className={`flex justify-center `}>
        <div className={`${s.innovate_1} relative cursor-pointer`}>
          <motion.img
            className="img-fluid"
            src="/assets/2560/home/new_1.png"
            whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1, transition: { duration: 0.5 } }}
          />
          <div className={`${s.innovate_btn} absolute`}>创新技术</div>
        </div>
        <div className={`${s.innovate_2} relative`}>
          <motion.img
            className="img-fluid"
            src="/assets/2560/home/new_2.png"
            whileHover={{ scale: 1.01, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1, transition: { duration: 0.5 } }}
          />
          <div className={`${s.innovate_btn} absolute`}>创新产品</div>
        </div>
      </div>
      <div className={`${s.news} flex justify-between `}>
        <div className={`${s.market} relative`}>
          <motion.img
            className="img-fluid"
            src="/assets/2560/home/new_3.png"
            whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1, transition: { duration: 0.5 } }}
          />
          <div className={`${s.innovate_btn} absolute`}>市场活动</div>
        </div>
        <div className={`${s.news_1} relative`}>
          <motion.img
            className="img-fluid"
            src="/assets/2560/home/new_4.png"
            whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1, transition: { duration: 0.5 } }}
          />
          <div className={`${s.innovate_btn} absolute`}>培训通知</div>
        </div>
        <div
          className={`${s.news_1} relative hover:bg-gray-600 cursor-pointer`}
        >
          <motion.img
            className="img-fluid"
            src="/assets/2560/home/new_5.png"
            whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1, transition: { duration: 0.5 } }}
          />
          <div className={`${s.innovate_btn} absolute`}>项目合作</div>
        </div>
        <div className={`${s.news_1} relative`}>
          <motion.img
            className="img-fluid"
            src="/assets/2560/home/innovate.png"
            whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1, transition: { duration: 0.5 } }}
          />
          <div className={`${s.innovate_btn} absolute`}>金矢快讯</div>
        </div>
      </div>
    </div>
  );
}
