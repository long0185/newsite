import React from "react";
import styles from "./index.module.css";
import Banner from "../../Banner";
import { motion } from "framer-motion";
export default function index() {
  return (
    <div
      id="advantage"
      className={`${styles.wrap} col-12 d-flex flex-column align-items-center`}
    >
      <Banner
        img={"/assets/newtitle/irego/title_5.png"}
        desc={
          <>
            <span>严格把控零配件环节，采用与世界一流品牌相同的供应链。</span>
            <span>
              公司在生产中推行精益求精，有效保证了产品的稳定性和可靠性。
            </span>
          </>
        }
      />
      <div className={`col-12 d-center  ${styles.content}`}>
        <div className={`${styles.content_item} cursor-pointer relative  `}>
          <img
            className={`${styles.content_item} img-fluid absolute`}
            src="/assets/2560/product/irego/advantage_1.png"
          />
          <motion.div
            className={`${styles.modal} absolute z-100  clear-both bg-$primary flex flex-col justify-center items-center `}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 1 }}
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
          </motion.div>
        </div>
        <div className={`${styles.content_item} position-relative`}>
          <img
            className={`${styles.content_item} img-fluid `}
            src="/assets/2560/product/irego/product_2.png"
          />
          <motion.div
            className={`${styles.modal} absolute z-100  clear-both bg-$primary flex flex-col justify-center items-center `}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 1 }}
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
          </motion.div>
        </div>
        <div className={`${styles.content_item} relative`}>
          <img
            className={styles.conntent_item}
            src={"/assets/2560/product/irego/product_3.png"}
          />
          <motion.div
            className={`${styles.modal} absolute z-100  clear-both bg-$primary flex flex-col justify-center items-center `}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 1 }}
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
          </motion.div>
        </div>
        <div className={`${styles.content_item} position-relative`}>
          <img
            className={styles.conntent_item}
            src={"/assets/2560/product/irego/product_4.png"}
          />
          <motion.div
            className={`${styles.modal} absolute z-100  clear-both bg-$primary flex flex-col justify-center items-center `}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 1 }}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
