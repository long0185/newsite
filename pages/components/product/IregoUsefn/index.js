import React from "react";
import Banner from "../../Banner";

export default function index() {
  return (
    <div id="usefn" className="fun-detail flex flex-col justify-center  ">
      <Banner img={"/assets/newtitle/irego/title_2.png"} />
      <div className="hidden mobile:flex content items-center justify-center w-100 mb_100">
        <div className="d-center flex-col pt-5 bg-white use-fun-item ">
          <div className="flex flex-col practise items-center ">
            <span className="text-3xl font-black mt-2">行走训练</span>
            <img
              className="practise-img"
              src="/assets/2560/product/irego/line-img_1.png"
            />
            <div className="py-3 flex justify-around w-100">
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">
                  1
                </span>
                <span className="text-gray-500">自然步态</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">
                  2
                </span>
                <span className="text-gray-500">避障训练</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">
                  3
                </span>
                <span className="text-gray-500">平地跑台</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">
                  4
                </span>
                <span className="text-gray-500">步态分析</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative smimg-wrap">
                <img
                  className="smimg-wrap"
                  src="/assets/2560/product/irego/use_1.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图1
                </div>
              </div>
              <div className="relative smimg-wrap">
                <img
                  className="smimg-wrap"
                  src="/assets/2560/product/irego/sm-img_1.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图2
                </div>
              </div>
              <div className="relative smimg-wrap">
                <img
                  className="smimg-wrap"
                  src="/assets/2560/product/irego/sm-img_3.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图3
                </div>
              </div>
              <div className="relative smimg-wrap">
                <img
                  className="smimg-wrap"
                  src="/assets/2560/product/irego/sm-img_4.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-center flex-col pt-5 bg-white use-fun-item">
          <div className=" flex flex-col practise items-center">
            <span className="text-3xl font-black mt-2">坐站训练</span>
            <img
              className="practise-img"
              src="/assets/2560/product/irego/line-img_2.png"
            />
            <div className="py-3 flex justify-around w-100">
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">
                  1
                </span>
                <span className="text-gray-500">
                  精准助力 有效减轻膝关节负重
                </span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">
                  2
                </span>
                <span className="text-gray-500">迭代学习 矫正坐站轨迹</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative smimg-wrap">
                <img
                  className="smimg-wrap"
                  src="/assets/2560/product/irego/use_5.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图1
                </div>
              </div>
              <div className="relative smimg-wrap">
                <img
                  className="smimg-wrap"
                  src="/assets/2560/product/irego/sm-img_6.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-center flex-col pt-5 bg-white use-fun-item ">
          <div className=" flex flex-col practise items-center">
            <span className="text-3xl font-black mt-2">平衡训练</span>
            <img
              className="practise-img"
              src="/assets/2560/product/irego/line-img_3.png"
            />
            <div className="py-3 flex justify-around w-100">
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">
                  1
                </span>
                <span className="text-gray-500">实时监测骨盆形心</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full w-8 h-8 flex items-center justify-center mr-1">
                  2
                </span>
                <span className="text-gray-500">测评一体打通康复训练闭环</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative smimg-wrap">
                <img
                  className="smimg-wrap"
                  src="/assets/2560/product/irego/use_7.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图1
                </div>
              </div>
              <div className="relative smimg-wrap">
                <img
                  className="smimg-wrap"
                  src="/assets/2560/product/irego/sm-img_8.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile:hidden content d-center flex-col  w-100 mb_100">
        <div className="d-center flex-col bg-white m_use-fun-item items-center">
          <div className="flex flex-col practise items-center ">
            <span className="font_43 font-black">行走训练</span>
            <img
              className=" m-practise-img"
              src="/assets/2560/product/irego/line-img_1.png"
            />
            <div className="mt_63 mb_43  flex justify-around w_582">
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">
                  1
                </span>
                <span className="text-$37 font_30">自然步态</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">
                  2
                </span>
                <span className="text-$37 font_30">避障训练</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">
                  3
                </span>
                <span className="text-$37 font_30">平地跑台</span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">
                  4
                </span>
                <span className="text-$37 font_30">步态分析</span>
              </div>
            </div>
            <div className="flex jusify-center">
              <div className="relative m-smimg-wrap">
                <img
                  className="m-smimg-wrap "
                  src="/assets/2560/product/irego/use_1.png"
                />
                <div className="m-sm_img_desc font_18 absolute bg-gray-300 text-gray-500">
                  图1
                </div>
              </div>
              <div className="relative m-smimg-wrap">
                <img
                  className="m-smimg-wrap "
                  src="/assets/2560/product/irego/sm-img_1.png"
                />
                <div className="m-sm_img_desc font_18 absolute bg-gray-300 text-gray-500">
                  图2
                </div>
              </div>
              <div className="relative m-smimg-wrap">
                <img
                  className="m-smimg-wrap "
                  src="/assets/2560/product/irego/sm-img_3.png"
                />
                <div className="m-sm_img_desc font_18 absolute bg-gray-300 text-gray-500">
                  图3
                </div>
              </div>
              <div className="relative m-smimg-wrap">
                <img
                  className="m-smimg-wrap "
                  src="/assets/2560/product/irego/sm-img_4.png"
                />
                <div className="m-sm_img_desc font_18 absolute bg-gray-300 text-gray-500">
                  图4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt_40 d-center flex-col bg-white m_use-fun-item items-center">
          <div className=" flex flex-col practise items-center">
            <span className="font_43 font-black">坐站训练</span>
            <img
              className=" m-practise-img"
              src="/assets/2560/product/irego/line-img_2.png"
            />
            <div className="mt_63 mb_43 flex justify-around w_582">
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">
                  1
                </span>
                <span className="text-$37 font_30">
                  精准助力 有效减轻膝关节负重
                </span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">
                  2
                </span>
                <span className="text-$37 font_30">迭代学习 矫正坐站轨迹</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative w_425 h_265">
                <img
                  className="w_425 h_265 "
                  src="/assets/2560/product/irego/use_5.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图1
                </div>
              </div>
              <div className="relative w_425 h_265">
                <img
                  className="w_425 h_265 "
                  src="/assets/2560/product/irego/sm-img_6.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt_40 d-center flex-col bg-white m_use-fun-item items-center">
          <div className=" flex flex-col practise items-center">
            <span className="font_43 font-black">平衡训练</span>
            <img
              className=" m-practise-img"
              src="/assets/2560/product/irego/line-img_3.png"
            />
            <div className="mt_63 mb_43 flex justify-around w_582">
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">
                  1
                </span>
                <span className="text-$37 font_30">
                实时监测骨盆形心
                </span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-500 border-gray-500 border-2 rounded-full size_52 flex items-center justify-center mr-1">
                  2
                </span>
                <span className="text-$37 font_30">测评一体打通康复训练闭环</span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <div className="relative w_425 h_265">
                <img
                  className="w_425 h_265 "
                  src="/assets/2560/product/irego/use_7.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图1
                </div>
              </div>
              <div className="relative w_425 h_265">
                <img
                  className="w_425 h_265 "
                  src="/assets/2560/product/irego/sm-img_8.png"
                />
                <div className="m-sm_img_desc absolute bg-gray-300 text-gray-500">
                  图2
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
