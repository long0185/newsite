import React from "react";
import styles from "./index.module.css";
import Banner from "../../Banner";
export default function index() {
  return (
    <div
      id="quality"
      className={`${styles.wrap} w-100 flex flex-col items-center`}
    >
      <div className={`w-100 d-center flex-col ${styles.title}`}>
        <Banner
          img={"/assets/2560/product/irego/title-quality.png"}
          classes="text-white"
          desc={
            <>
              <span>
                公司有强大的科研实力，发明专利21项，实用新型专利18项，
              </span>
              <span>
                外观专利5项，软著7项，商标12项，以及Ⅱ类医疗器械注册证。
              </span>
            </>
          }
        />
      </div>
      <div className={`w-100 flex  mobile:hidden flex-col items-center justify-center ${styles.content}`}>
        <div className={`${styles.item_wrap_2} flex items-center justify-center flex-col text-center`}>
          <img
            className={`${styles.m_content_item_2} img-fluid`}
            src="/assets/2560/product/iremo/certificate_2.png"
          ></img>
          <span className={`${styles.desc}`}>医疗器械生产许可证</span>
        </div>
        <div className={`flex items-start justify-between mt-5 ${styles.m_content_item_2}`}>
          <div className={`text-center`}>
            <img
              className={`${styles.content_item_1} img-fluid`}
              src="/assets/2560/product/iremo/certificate_1.png"
            ></img>
            <span className={`${styles.desc}`}>医疗器械注册证</span>
          </div>
          <div className={` text-center`}>
            <img
              className={`${styles.content_item_3} img-fluid`}
              src="/assets/2560/product/iremo/certificate_3.png"
            ></img>
            <span className={`${styles.desc}`}>
            手指外骨骼康复机器人专利
            </span>
          </div>
        </div>
      </div>

      <div className={`w-100 hidden mobile:flex items-center justify-center  ${styles.content}`}>
        <div className={`${styles.item_wrap_1} text-center`}>
          <img
            src="/assets/2560/product/iremo/certificate_1.png"
            className={`${styles.content_item_1} relative`}
          ></img>
          <span className={`${styles.desc}`}>医疗器械注册证</span>
        </div>
        <div className={`${styles.item_wrap_2} text-center`}>
          <img
            src="/assets/2560/product/iremo/certificate_2.png"
            className={`${styles.content_item_2} relative`}
          ></img>
          <span className={`${styles.desc}`}>医疗器械生产许可证</span>
        </div>
        <div className={`${styles.item_wrap_3} text-center`}>
          <img
            src="/assets/2560/product/iremo/certificate_3.png"
            className={`${styles.content_item_3} relative`}
          ></img>
          <span className={`${styles.desc}`}>手指外骨骼康复机器人专利</span>
        </div>
      </div>
    </div>
  );
}
