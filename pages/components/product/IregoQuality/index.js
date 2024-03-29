/** @format */

import React from "react";
import styles from "./index.module.css";
import Banner from "../../Banner";
export default function index() {
  return (
    <div id='quality' className={`${styles.wrap} w-100 flex flex-col items-center`}>
      <Banner
        img={`/assets/newtitle/irego/title_6.png`}
        classes='text-white'
        desc={
          <>
            <span>创新是金矢血液的基因，金矢始终把研发当作企业发展的推手，坚持走技术创新、产品创造之路。</span>
            <span>采用先进的SAP管理系统，在财务、采购、销售、生产、计划以及质量管理、售后服务等环节中形成一条科学完整的管理体系。</span>
          </>
        }
      />
      <div className={`w-100 flex  mobile:hidden flex-col items-center justify-center ${styles.content}`}>
        {/* <div className={`${styles.item_wrap_2} flex items-center mb-12 justify-center flex-col text-center`}>
          <img className={`${styles.m_content_item_2}`} src="/assets/2560/product/irego/certificate_2.png"></img>
          <span className={`${styles.desc}`}>医疗器械生产许可证</span>
        </div> */}
        <div className={`flex items-center justify-center mt-10  ${styles.m_content_item_2}`}>
          <div className={`text-center`}>
            <img className={`${styles.m_content_item_2}`} src='/assets/2560/product/irego/guarantee-card.jpeg'></img>
            <span className={`${styles.desc}`}>质保一年，终身售后服务</span>
          </div>
        </div>
      </div>

      <div className={`w-100 hidden mobile:flex items-center justify-center ${styles.content}`}>
        {/* <div className={`${styles.item_wrap_2} text-center`}>
          <img className={`${styles.content_item_2} relative`} src="/assets/2560/product/irego/certificate_2.png"></img>
          <span className={`${styles.desc} text-center w-100`}>医疗器械生产许可证</span>
        </div> */}
        <div className={`${styles.item_wrap_3} text-center`}>
          <img className={`${styles.content_item_3} relative`} src='/assets/2560/product/irego/guarantee-card.jpeg'></img>
          <span className={`${styles.desc}`}>质保一年，终身售后服务</span>
        </div>
      </div>
    </div>
  );
}
