import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import Banner from "../../Banner";

export const up_variants = {
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
      delay: 0.3,
      duration: 1,
    },
  },
  enter_3: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
  enter_4: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 1,
    },
  },
  enter_5: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
  enter_6: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
  leave: {
    translateY: 200,
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

export default function index() {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  return (
    <div id="usefn" className="fun-detail flex flex-col justify-center  ">
      <Banner img={"/assets/newtitle/irego/title_2.png"} />
      <div ref={myRef} className="hidden mobile:flex content items-center justify-center w-100 mb_100">
        <motion.div variants={up_variants} animate={`${inViewport ? "enter_1" : "leave"}`} className="d-center flex-col pt-5 bg-white use-fun-item ">
          <div className="flex flex-col practise items-center ">
            <span className="text-3xl font-black mt-2">行走训练</span>
            <img className="practise-img" src="/assets/2560/product/irego/line-img_1.png" />
            <div className="py-3 flex justify-around w-100">
              <div className="flex items-center">
                <span className="bg-gray-200 font_size_24 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">1</span>
                <span className="text-gray-500">自然步态</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_size_24 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">2</span>
                <span className="text-gray-500">避障训练</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_size_24 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">3</span>
                <span className="text-gray-500">平地跑台</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_size_24 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">4</span>
                <span className="text-gray-500">步态分析</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative smimg-wrap">
                <img className="smimg-wrap" src="/assets/2560/product/irego/use_1.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图1</div>
              </div>
              <div className="relative smimg-wrap">
                <img className="smimg-wrap" src="/assets/2560/product/irego/sm-img_1.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图2</div>
              </div>
              <div className="relative smimg-wrap">
                <img className="smimg-wrap" src="/assets/2560/product/irego/sm-img_3.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图3</div>
              </div>
              <div className="relative smimg-wrap">
                <img className="smimg-wrap" src="/assets/2560/product/irego/sm-img_4.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图4</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={up_variants} animate={`${inViewport ? "enter_2" : "leave"}`} className="d-center flex-col pt-5 bg-white use-fun-item">
          <div className=" flex flex-col practise items-center">
            <span className="text-3xl font-black mt-2">坐站训练</span>
            <img className="practise-img" src="/assets/2560/product/irego/line-img_2.png" />
            <div className="py-3 flex justify-around w-100">
              <div className="flex items-center">
                <span className="bg-gray-200 font_size_24 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">1</span>
                <span className="text-gray-500">精准助力 有效减轻膝关节负重</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_size_24 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">2</span>
                <span className="text-gray-500">迭代学习 矫正坐站轨迹</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative smimg-wrap">
                <img className="smimg-wrap" src="/assets/2560/product/irego/use_5.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图1</div>
              </div>
              <div className="relative smimg-wrap">
                <img className="smimg-wrap" src="/assets/2560/product/irego/sm-img_6.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图2</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={up_variants} animate={`${inViewport ? "enter_3" : "leave"}`} className="d-center flex-col pt-5 bg-white use-fun-item ">
          <div className=" flex flex-col practise items-center">
            <span className="text-3xl font-black mt-2">平衡训练</span>
            <img className="practise-img" src="/assets/2560/product/irego/line-img_3.png" />
            <div className="py-3 flex justify-around w-100">
              <div className="flex items-center">
                <span className="bg-gray-200 font_size_24 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">1</span>
                <span className="text-gray-500">实时监测骨盆形心</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_size_24 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">2</span>
                <span className="text-gray-500">测评一体打通康复训练闭环</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative smimg-wrap">
                <img className="smimg-wrap" src="/assets/2560/product/irego/use_7.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图1</div>
              </div>
              <div className="relative smimg-wrap">
                <img className="smimg-wrap" src="/assets/2560/product/irego/sm-img_8.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图2</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mobile:hidden content d-center flex-col  w-100 mb_100">
        <div className="flex flex-col bg-white m_use-fun-item_1 items-center justify-start">
          <div className="flex flex-col practise items-center justify-start ">
            <span className="font_43 font-black mt_43">行走训练</span>
            <img className="m-practise-img" src="/assets/2560/product/irego/line-img_1.png" />
            <div className="mt_63 mb_43  flex justify-around w_582">
              <div className="flex items-center">
                <span className="bg-gray-200 font_36 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">1</span>
                <span className="text-$37 font_30">自然步态</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_36 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">2</span>
                <span className="text-$37 font_30">避障训练</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_36 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">3</span>
                <span className="text-$37 font_30">平地跑台</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_36 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">4</span>
                <span className="text-$37 font_30">步态分析</span>
              </div>
            </div>
            <div className="flex jusify-center">
              <div className="relative m-smimg-wrap mr-1">
                <img className="m-smimg-wrap " src="/assets/2560/product/irego/use_1.png" />
                <div className="m-sm_img_desc font_18 absolute bg-gray-300 text-gray-500">图1</div>
              </div>
              <div className="relative m-smimg-wrap mr-1">
                <img className="m-smimg-wrap " src="/assets/2560/product/irego/sm-img_1.png" />
                <div className="m-sm_img_desc font_18 absolute bg-gray-300 text-gray-500">图2</div>
              </div>
              <div className="relative m-smimg-wrap mr-1">
                <img className="m-smimg-wrap " src="/assets/2560/product/irego/sm-img_3.png" />
                <div className="m-sm_img_desc font_18 absolute bg-gray-300 text-gray-500">图3</div>
              </div>
              <div className="relative m-smimg-wrap mr-1">
                <img className="m-smimg-wrap " src="/assets/2560/product/irego/sm-img_4.png" />
                <div className="m-sm_img_desc font_18 absolute bg-gray-300 text-gray-500">图4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt_40 flex flex-col bg-white m_use-fun-item_1 items-center justify-start pt_43">
          <div className=" flex flex-col practise items-center justify-start">
            <span className="font_43 font-black">坐站训练</span>
            <img className=" m-practise-img" src="/assets/2560/product/irego/line-img_2.png" />
            <div className="mt_63 mb_43 flex justify-around w_582">
              <div className="flex items-center">
                <span className="bg-gray-200 font_36 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">1</span>
                <span className="text-$37 font_30">精准助力 有效减轻膝关节负重</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_36 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">2</span>
                <span className="text-$37 font_30">迭代学习 矫正坐站轨迹</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative w_425 h_265 mr-1">
                <img className="w_425 h_265 " src="/assets/2560/product/irego/use_5.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图1</div>
              </div>
              <div className="relative w_425 h_265">
                <img className="w_425 h_265 " src="/assets/2560/product/irego/sm-img_6.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt_40 flex flex-col bg-white m_use-fun-item_1 items-center justify-start pt_43">
          <div className=" flex flex-col practise items-center justify-start">
            <span className="font_43 font-black">平衡训练</span>
            <img className=" m-practise-img" src="/assets/2560/product/irego/line-img_3.png" />
            <div className="mt_63 mb_43 flex justify-around w_582">
              <div className="flex items-center">
                <span className="bg-gray-200 font_36  text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">1</span>
                <span className="text-$37 font_30">实时监测骨盆形心</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 font_36 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">2</span>
                <span className="text-$37 font_30">测评一体打通康复训练闭环</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative w_425 h_265 mr-1">
                <img className="w_425 h_265 " src="/assets/2560/product/irego/use_7.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图1</div>
              </div>
              <div className="relative w_425 h_265">
                <img className="w_425 h_265 " src="/assets/2560/product/irego/sm-img_8.png" />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">图2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
