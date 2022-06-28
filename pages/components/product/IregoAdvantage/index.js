import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Banner from "../../Banner";
import { motion } from "framer-motion";
import { useInViewport } from "react-in-viewport";
import { up_variants } from "../IregoUsefn";
const list = [
  { png: "/assets/2560/product/irego/advantage_1.png", desc: "悬挂底盘可适应地面不平的场景运动，可搭建不同的机构是实现不同的功能" },
  { png: "/assets/2560/product/irego/product_2.png", desc: "骨盆四连杆装置通过简易的弹簧连杆装置设计，有效地实现骨盆横摆的自由度" },
  { png: "/assets/2560/product/irego/product_3.png", desc: "意图识别装置加载了灵敏的传感器，将患者作用在机器上的力信号变成控制信号" },
  { png: "/assets/2560/product/irego/product_4.png", desc: "仓库货架有序排列，合理的仓库管理，保证货源质量和数量，从而保证生产需求" },
];
export default function index() {
  const dom = useRef();
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
    <div id="advantage" ref={myRef} className={`${styles.wrap} w-100 flex flex-col items-center`}>
      <Banner
        img={"/assets/newtitle/irego/title_5.png"}
        desc={
          <>
            <span>严格把控零配件环节，采用与世界一流品牌相同的供应链。公司在生产中推行精益求精，</span>
            <span>有效保证了产品的稳定性和可靠性。</span>
          </>
        }
      />
      <motion.div variants={isPc ? up_variants : {}} animate={`${inViewport ? "enter" : "leave"}`} className={`w-100 flex flex-wrap items-center justify-center  ${styles.content}`}>
        {list.map((item, index) => (
          <motion.div key={index} className={`${styles.content_item} relative`}>
            <img className={`${styles.content_item} z-10`} src={item.png} />
            <div className={`w-100 h-100 ${styles.modal} px-6 font_size_24 flex flex-col items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute  z-30`}>
              <span className={`${styles.desc_text_1} `}>{item.desc}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
