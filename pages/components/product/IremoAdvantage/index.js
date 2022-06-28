import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Banner from "../../Banner";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
import { up_variants } from "../IregoUsefn";
export default function index() {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  const [isPc, setisPc] = useState(false);
  useEffect(() => {
    let width = document.documentElement.clientWidth;
    let bool = width <= 1080 ? false : true;
    setisPc(bool);
    window.addEventListener("resize", () => {
      width = document.documentElement.clientWidth;
      bool = width <= 1080 ? false : true;
      setisPc(bool);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
  return (
    <div id="advantage" className={`${styles.wrap} w-100 flex flex-col items-center`}>
      <Banner
        img={"/assets/newtitle/iremo/title_5.png"}
        desc={
          <>
            <span>严格把控零配件环节，采用与世界一流品牌相同的供应链。</span>
            <span>公司在生产中推行精益求精，有效保证了产品的稳定性和可靠性。</span>
          </>
        }
      />
      <motion.div ref={myRef} variants={isPc ? up_variants : {}} animate={`${inViewport ? "enter" : "leave"}`} className={`w-100 d-center flex-wrap  ${styles.content}`}>
        <div className={`${styles.content_item} relative`}>
          <img className={`${styles.content_item} absolute z-10`} src="/assets/2560/product/iremo/product_1.png" />
          <div className={`flex flex-col px-6 items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute z-30 ${styles.modal}`}>
            <span className={`${styles.desc_text_1} font_size_24 `}>工作人员专心致志的焊接每一个线束，保证产品的质量</span>
          </div>
        </div>
        <div className={`${styles.content_item} relative`}>
          <img className={`${styles.content_item}`} src={`/assets/2560/product/iremo/product_2.png`} />
          <div className={`flex px-6 flex-col items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute z-30 ${styles.modal}`}>
            <span className={`${styles.desc_text_1} font_size_24`}>小批量的末端生产，保证产品生产的互换性</span>
          </div>
        </div>
        <div className={`${styles.content_item} relative`}>
          <img className={`${styles.content_item}`} src="/assets/2560/product/iremo/product_3.png" />
          <div className={`flex flex-col px-6 items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute z-30 ${styles.modal}`}>
            <span className={`${styles.desc_text_1} font_size_24`}>合理规划的模块化生产，有助于产品的后期维护</span>
          </div>
        </div>
        <div className={`${styles.content_item} relative`}>
          <img className={`${styles.content_item}`} src={`/assets/2560/product/iremo/product_4.png`} />
          <div className={`flex px-6 flex-col items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute z-30 ${styles.modal}`}>
            <span className={`${styles.desc_text_1} font_size_24`}>整齐的电气装置既便于后期的维修，也有利整体的美观</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
