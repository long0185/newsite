import s from "./index.module.css";
import React, { useEffect, useRef, useState } from "react";
import Banner from "../../Banner";
import { motion } from "framer-motion";
import { useInViewport } from "react-in-viewport";
const up_variants = {
  enter: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  enter_1: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  enter_2: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
  enter_3: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
  enter_4: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
  enter_5: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
  enter_6: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  leave: {
    translateY: 100,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  leave_1: {
    translateY: 200,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  leave_2: {
    translateY: 200,
    opacity: 0,
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
  leave_3: {
    translateY: 200,
    opacity: 0,
    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
};
const list = [
  {
    img_src: "/assets/2560/product/irecog/use_svg_1.svg",
    desc: "注意力训练",
  },
  {
    img_src: "/assets/2560/product/irecog/use_svg_2.svg",
    desc: "记忆力训练",
  },
  {
    img_src: "/assets/2560/product/irecog/use_svg_3.svg",
    desc: "执行功能训练",
  },
  {
    img_src: "/assets/2560/product/irecog/use_svg_4.svg",
    desc: "感知能力训练",
  },

  {
    img_src: "/assets/2560/product/irecog/use_svg_5.svg",
    desc: "任务组织能力训练",
  },
  {
    img_src: "/assets/2560/product/irecog/use_svg_6.svg",
    desc: "语言及交流能力训练",
  },
];
export default function index() {
  const myRef = useRef();
  const [inViewport, setInViewport] = useState(false);
  let Viewport = useInViewport(myRef);
  useEffect(() => {
    setTimeout(() => {
      setInViewport(Viewport.inViewport);
    }, 500);
  }, [Viewport]);

  return (
    <div id="usefn" className={`${s.wrap} mb_114`}>
      <div className="product-title irego-title w-100 flex items-center justify-center">
        <div className="relative ">
          <img
            className="img-fluid"
            src="/assets/2560/product/irecog/irecog.svg"
          />
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
          <div
            ref={myRef}
            className="w-100 p-0 hidden mobile:flex items-center justify-between "
          >
            <motion.div
              variants={up_variants}
              animate={`${inViewport ? "enter_1" : "leave"}`}
              className={`relative text-center ${s.svg}`}
            >
              <img
                className={s.svg}
                src="/assets/2560/product/irecog/use_svg_1.svg"
              />
              <div className={`${s.desc} absolute`}>注意力训练</div>
            </motion.div>
            <motion.div
              variants={up_variants}
              animate={`${inViewport ? "enter_2" : "leave"}`}
              className={`relative text-center ${s.svg}`}
            >
              <img
                className={`${s.svg}`}
                src="/assets/2560/product/irecog/use_svg_2.svg"
              />
              <div className={`${s.desc} absolute`}>记忆力训练</div>
            </motion.div>
            <motion.div
              variants={up_variants}
              animate={`${inViewport ? "enter_3" : "leave"}`}
              className={`relative ${s.svg} text-center`}
            >
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_3.svg`}
              />
              <div className={`${s.desc} absolute`}>执行功能训练</div>
            </motion.div>
            <motion.div
              variants={up_variants}
              animate={`${inViewport ? "enter_4" : "leave"}`}
              className={`relative ${s.svg} text-center`}
            >
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_4.svg`}
              />
              <div className={`${s.desc} absolute`}>感知能力训练</div>
            </motion.div>
            <motion.div
              variants={up_variants}
              animate={`${inViewport ? "enter_5" : "leave"}`}
              className={`relative ${s.svg} text-center`}
            >
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_5.svg`}
              />
              <div className={`${s.desc} absolute`}>任务组织能力训练</div>
            </motion.div>
            <motion.div
              variants={up_variants}
              animate={`${inViewport ? "enter_6" : "leave"}`}
              className={`relative ${s.svg} text-center`}
            >
              <img
                className={s.svg}
                src={`/assets/2560/product/irecog/use_svg_6.svg`}
              />
              <div className={`${s.desc} absolute`}>语言及交流能力训练</div>
            </motion.div>
          </div>
          <div className="flex mobile:hidden w-100 items-center justify-center">
            <div className="flex items-center justify-between w_826 flex-wrap">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="flex mb_43 items-start justify-center flex-col"
                >
                  <img className={`${s.m_svg} img-fluid`} src={item.img_src} />
                  <span className="font_24 w_231 text-center mt-3">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
