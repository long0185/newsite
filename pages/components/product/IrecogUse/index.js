import s from "./index.module.css";
import React from "react";
import Banner from "../../Banner";
const list = [
  {
    img_src: '/assets/2560/product/irecog/use_svg_1.svg',
    desc: '注意力训练'
  },
  {
    img_src: '/assets/2560/product/irecog/use_svg_2.svg',
    desc: '记忆力训练'
  },
  {
    img_src: '/assets/2560/product/irecog/use_svg_3.svg',
    desc: '执行功能训练'
  },
  {
    img_src: '/assets/2560/product/irecog/use_svg_4.svg',
    desc: '感知能力训练'
  },

  {
    img_src: '/assets/2560/product/irecog/use_svg_5.svg',
    desc: '任务组织能力训练'
  },
  {
    img_src: '/assets/2560/product/irecog/use_svg_6.svg',
    desc: '语言及交流能力训练'
  },
]
export default function index() {
  return (
    <div id="usefn" className={`${s.wrap} mb_114`}>
      <div className="product-title irego-title w-100 flex items-center justify-center">
        <div className="relative ">
          <img className="img-fluid" src="/assets/2560/product/irecog/irecog.svg" />
        </div>
      </div>
      <div className="w-100 w-100 flex items-center justify-center ">
        <div className={`${s.content} flex flex-col items-center`}>
          <Banner
            img={"/assets/newtitle/irecog/title_1.png"}
            styles={{ marginTop: 0 }}
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
          <div className="w-100 p-0 hidden mobile:flex items-center justify-between ">
            <div className={`relative text-center ${s.svg}`}>
              <img
                className={s.svg}
                src="/assets/2560/product/irecog/use_svg_1.svg"
              />
              <div className={`${s.desc} absolute`}>注意力训练</div>
            </div>
            <div className={`relative text-center ${s.svg}`}>
              <img
                className={`${s.svg}`}
                src="/assets/2560/product/irecog/use_svg_2.svg"
              />
              <div className={`${s.desc} absolute`}>记忆力训练</div>
            </div>
            <div className={`relative ${s.svg} text-center`}>
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_3.svg`}
              />
              <div className={`${s.desc} absolute`}>执行功能训练</div>
            </div>
            <div className={`relative ${s.svg} text-center`}>
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_4.svg`}
              />
              <div className={`${s.desc} absolute`}>感知能力训练</div>
            </div>
            <div className={`relative ${s.svg} text-center`}>
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_5.svg`}
              />
              <div className={`${s.desc} absolute`}>
                任务组织能力训练
              </div>
            </div>
            <div className={`relative ${s.svg} text-center`}>
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_6.svg`}
              />
              <div className={`${s.desc} absolute`}>
                语言及交流能力训练
              </div>
            </div>
          </div>
          <div className="flex mobile:hidden w-100 items-center justify-center">
            <div className="flex items-center justify-between w_826 flex-wrap">
              {list.map((item, index) => <div key={index} className="flex mb_43 items-start justify-center flex-col">
                <img
                  className={`${s.m_svg} img-fluid`}
                  src={item.img_src}
                />
                <span className="font_24 w_231 text-center mt-3">{item.desc}</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
