import React from "react";
import styles from "./index.module.css";
import Banner from "../../Banner";
const list = [
  "/assets/2560/product/irego/advantage_1.png",
  "/assets/2560/product/irego/product_2.png",
  "/assets/2560/product/irego/product_3.png",
  "/assets/2560/product/irego/product_4.png",
];
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
        {list.map((item, index) => (
          <div
            key={index}
            className={`${styles.content_item} position-relative`}
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
          </div>
        ))}
      </div>
    </div>
  );
}
