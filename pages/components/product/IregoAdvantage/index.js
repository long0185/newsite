import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Banner from "../../Banner";
import { motion } from "framer-motion";
import { useInViewport } from "react-in-viewport";
import { up_variants } from "../IregoUsefn";
const list = [
  "/assets/2560/product/irego/advantage_1.png",
  "/assets/2560/product/irego/product_2.png",
  "/assets/2560/product/irego/product_3.png",
  "/assets/2560/product/irego/product_4.png",
];
export default function index() {  const dom = useRef();
  const myRef = useRef();
  const {
    inViewport,
  } = useInViewport(
    myRef
  );
  return (
    <div
      id="advantage"
      ref={myRef}
      className={`${styles.wrap} w-100 flex flex-col items-center`}
    >
      <Banner
        img={"/assets/newtitle/irego/title_5.png"}
        desc={
          <>
            <span>严格把控零配件环节，采用与世界一流品牌相同的供应链。公司在生产中推行精益求精，</span>
            <span>
              有效保证了产品的稳定性和可靠性。
            </span>
          </>
        }
      />
      <motion.div variants={up_variants} animate={`${inViewport?'enter':'leave'}`} className={`w-100 flex flex-wrap items-center justify-center  ${styles.content}`}>
        {list.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.content_item} relative`}
          >
            <img
              className={`${styles.content_item} z-10`}
              src={item}
            />
            <div
              className={`w-100 h-100 ${styles.modal} flex flex-col items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute cursor-pointer z-30`}
            >
              <span className={`${styles.desc_text_1} `}>
                骨盆四连杆装置通过简易的弹簧设计，
              </span>
              <span className={`${styles.desc_text_2}`}>
                有效地实现骨盆横摆的自由度，
              </span>
              <span className={`${styles.desc_text_3}`}>
                可根据不同程度的患者情况自由调节横
              </span>
              <span className={`${styles.desc_text_4}`}>摆的位移量</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
