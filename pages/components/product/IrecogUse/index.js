import s from "./index.module.css";
import React from "react";
import Banner from "../../Banner";
export default function index() {
  return (
    <div id="usefn" className={`${s.wrap}`}>
      <div className="product-title irego-title col-12 d-flex align-items-center justify-content-center">
        <div className="position-relative ">
          <img src="/assets/2560/product/irecog/irecog.svg" />
        </div>
      </div>
      <div className="col-12 w-100 d-flex align-items-center justify-content-center ">
        <div className="irego-video position-relative ">
          <video controls>
            <source src="/assets/iremo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="col-12 w-100 d-flex align-items-center justify-content-center ">
        <div className={`${s.content} d-flex flex-column align-items-center`}>
          <Banner
            img={"/assets/newtitle/irecog/title_1.png"}
            desc={
              <>
                <span>
                  iReCog是认知康复训练机器人。采用了世界领先的虚拟现实的技术，通过对成人日常行为的解析，
                </span>
                <span>
                  制成的多元化、高拟真度的认知康复训练系统，可以让患者身临其境感受到日常生活的认知训练。
                </span>
              </>
            }
          />

          <div className="col-12 p-0 d-flex align-items-center justify-content-between ">
            <div className={`position-relative text-center ${s.svg}`}>
              <img
                className={s.svg}
                src="/assets/2560/product/irecog/use_svg_1.svg"
              />
              <div className={`${s.desc} position-absolute`}>注意力训练</div>
            </div>
            <div className={`position-relative text-center ${s.svg}`}>
              <img
                className={`${s.svg}`}
                src="/assets/2560/product/irecog/use_svg_2.svg"
              />
              <div className={`${s.desc} position-absolute`}>记忆力训练</div>
            </div>
            <div className={`position-relative ${s.svg} text-center`}>
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_3.svg`}
              />
              <div className={`${s.desc} position-absolute`}>执行功能训练</div>
            </div>
            <div className={`position-relative ${s.svg} text-center`}>
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_4.svg`}
              />
              <div className={`${s.desc} position-absolute`}>感知能力训练</div>
            </div>
            <div className={`position-relative ${s.svg} text-center`}>
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_5.svg`}
              />
              <div className={`${s.desc} position-absolute`}>
                任务组织能力训练
              </div>
            </div>
            <div className={`position-relative ${s.svg} text-center`}>
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_6.svg`}
              />
              <div className={`${s.desc} position-absolute`}>
                语言及交流能力训练
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
