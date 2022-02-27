import React, { useRef } from "react";
import styles from "./index.module.css";
import Banner from "../../Banner";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
import { up_variants } from "../IregoUsefn";
export default function index() {
  const myRef = useRef();
  const {
    inViewport,
  } = useInViewport(
    myRef
  );
  return (
    <div
      id="advantage"
      className={`${styles.wrap} w-100 flex flex-col items-center`}
    >
      <Banner
        img={"/assets/newtitle/iremo/title_5.png"}
        desc={
          <>
            <span>严格把控零配件环节，采用与世界一流品牌相同的供应链。</span>
            <span>
              公司在生产中推行精益求精，有效保证了产品的稳定性和可靠性。
            </span>
          </>
        }
      />
      <motion.div ref={myRef} variants={up_variants} animate={`${inViewport?'enter':'leave'}`} className={`w-100 d-center flex-wrap  ${styles.content}`}>
        <div className={`${styles.content_item} relative`}>
          <img
            className={`${styles.content_item} absolute z-10`}
            src="/assets/2560/product/iremo/product_1.png"
          />
          <div
            className={`flex flex-col items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute cursor-pointer z-30 ${styles.modal}`}
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
        </div>
        <div className={`${styles.content_item} relative`}>
          <img
            className={`${styles.content_item}`}
            src={`/assets/2560/product/iremo/product_2.png`}
          />
          <div
            className={`flex flex-col items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute cursor-pointer z-30 ${styles.modal}`}
          >
            <span className={`${styles.desc_text_1}`}>
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
        </div>
        <div className={`${styles.content_item} relative`}>
          <img
            className={`${styles.content_item}`}
            src="/assets/2560/product/iremo/product_3.png"
          />
          <div
            className={`flex flex-col items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute cursor-pointer z-30 ${styles.modal}`}
          >
            <span className={`${styles.desc_text_1}`}>
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
        </div>
        <div className={`${styles.content_item} relative`}>
          <img
            className={`${styles.content_item}`}
            src={`/assets/2560/product/iremo/product_4.png`}
          />
          <div
            className={`flex flex-col items-center justify-center bg-$primary opacity-10 text-transparent hover:text-white hover:bg-$primary hover:opacity-90 absolute cursor-pointer z-30 ${styles.modal}`}
          >
            <span className={`${styles.desc_text_1}`}>
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
        </div>
      </motion.div>
    </div>
  );
}
