import React, { useState } from "react";
import s from "./index.module.css";
import Menu from "../../Menu";
import Footer from "../../Footer";
import { motion } from "framer-motion";

export default function index() {
  const [modal, setModal] = useState("");
  return (
    <div
      className={`${s.wrap} flex relative flex-col justify-between items-center bg-white `}
    >
      <Menu />
      <div className={`${s.innovate} flex flex-col mobile:flex-row justify-center px-1`}>
        <div className={`${s.innovate_1} flex-1 bg-gray-400 mr-2 relative hover:bg-$primary`}>
          {/* <img layout="fill" src={innovate_1} /> */}
          <div className={`${s.innovate_btn} absolute bottom-2 left-2 `}>合作案例 · 实施中</div>
        </div>
        <div className={`${s.innovate_1} flex-1 bg-gray-400 ml-2 relative hover:bg-$primary`}>
          {/* <img layout="fill" src={innovate_1} /> */}
          <div className={`${s.innovate_btn} absolute bottom-2 left-2`}>合作案例 · 实施中</div>
        </div>
      </div>
      <div className={`${s.news} flex justify-center`}>
        <div className={`${s.news_1} relative cursor-pointer`}>
          <img
            className={`${s.news_1} img-fluid absolute `}
            src="/assets/2560/home/example-area.png"
          />
          <motion.div
            className={`${s.modal} absolute z-100 z-50 clear-both bg-$primary `}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 0 }}
          >
            <img
              src="/assets/2560/modal-his.svg"
              className="modal_svg img-fluid top-32 absolute"
              alt=""
            />
            <span className="modal_text text-6xl text-white top-40 clear-both absolute">
              医院
            </span>
            <img
              src="/assets/2560/modal-enter.svg"
              alt=""
              className="modal_icon img-fluid clear-both absolute"
            />
          </motion.div>
          <div className={`${s.innovate_btn} absolute  z-10`}>
            成功案例 · 医院
          </div>
        </div>
        <div className={`${s.news_1} ${s.news_mx} relative `}>
          <img
            className={`${s.news_1} img-fluid absolute z-10`}
            src="/assets/2560/home/example-personal.png"
          />
          <motion.div
            className={`${s.modal} absolute z-100 z-50 clear-both bg-$primary `}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 0 }}
          >
            <img
              src="/assets/2560/modal-com.svg"
              className="modal_svg img-fluid top-32 absolute"
              alt=""
            />
            <span className="modal_text text-6xl text-white top-40 clear-both absolute">
              社区
            </span>
            <img
              src="/assets/2560/modal-enter.svg"
              alt=""
              className="modal_icon img-fluid clear-both absolute"
            />
          </motion.div>
          <div className={`${s.innovate_btn} absolute z-20 `}>
            成功案例 · 社区
          </div>
        </div>
        <div className={`${s.news_1} relative`}>
          <img
            className={`${s.news_1} img-fluid absolute`}
            src="/assets/2560/home/example-his.png"
          />
          <motion.div
            className={`${s.modal} absolute z-100 z-50 clear-both bg-$primary `}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 0 }}
          >
            <img
              src="/assets/2560/modal-personal.svg"
              className="modal_svg img-fluid top-32 absolute"
              alt=""
            />
            <span className="modal_text text-6xl text-white top-40 clear-both absolute">
              个人
            </span>
            <img
              src="/assets/2560/modal-enter.svg"
              alt=""
              className="modal_icon img-fluid clear-both absolute"
            />
          </motion.div>
          <div className={`${s.innovate_btn} absolute`}>成功案例 · 个人</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
