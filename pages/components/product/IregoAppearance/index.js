import React from "react";
import Banner from "../../Banner";
import s from './index.module.css'
export default function index() {
  return (
    <div id="appearance">
      <Banner img={"/assets/newtitle/irego/title_1.png"} />
      <div className={`mobile:hidden flex items-center flex-col mb_100`}>
        <div className="relative w_910 h_375">
          <img src={"/assets/2560/product/irego/detail_1.png"} />
          <div className={`absolute flex flex-col ${s.text_1} h-100`}>
            <span className="font_48 text-white font-extrabold">操作面板</span>
            <span className="font_size_24 text-white">扁平式风格，简洁易懂</span>
          </div>
        </div>
        <div className="relative w_910 h_375 mt_40">
          <img src={"/assets/2560/product/irego/detail_3.png"} />
          <div className={`absolute flex flex-col ${s.text_2} h-100`}>
            <span className="font_48 text-white font-extrabold">智能摇杆</span>
            <span className="font_size_24 text-white">双智能摇杆，满足不同患侧需求，减轻高难度运动风险</span>
          </div>
        </div>
        <div className="relative w_910 h_375 mt_40">
          <img src={"/assets/2560/product/irego/detail_5.png"} />
          <div className={`absolute flex flex-col ${s.text_1} h-100`}>
            <span className="font_48 text-white font-extrabold">急停按钮</span>
            <span className="font_size_24 text-white">保证训练过程更加安全</span>
          </div>
        </div>
        <div className="relative w_910 h_375 mt_40">
          <img src={"/assets/2560/product/irego/detail_2.png"} />
          <div className={`absolute flex flex-col ${s.text_2} h-100`}>
            <span className="font_48 text-white font-extrabold">全自由度骨盆支撑机构</span>
            <span className="font_size_24 text-white">提供所需减重力的同时，满足骨盆运动的需求</span>
          </div>
        </div>
        <div className="relative w_910 h_375 mt_40">
          <img src={"/assets/2560/product/irego/detail_4.png"} />
          <div className={`absolute flex flex-col ${s.text_1} h-100`}>
            <span className="font_48 text-white font-extrabold">便携腰带</span>
            <span className="font_size_24 text-white">精心设计的安全护具，穿戴方便，固定快速</span>
          </div>
        </div>
        
        
      </div>
      <div className="appearance-detail w-100 hidden mobile:flex items-center justify-center">
        <div className="relative img-wrap">
          <img src={"/assets/2560/product/irego/detail_1.png"} />
          <div className="absolute appearance-text_1 flex flex-col">
            <span>操作面板</span>
            <span>扁平式风格，简洁易懂</span>
          </div>
        </div>
        <div className="relative img-wrap">
          <img src={"/assets/2560/product/irego/detail_2.png"} />
          <div className="absolute appearance-text_3 flex flex-col">
            <span>全自由度骨盆支撑机构</span>
            <span>提供所需减重力的同时，满足骨盆运动的需求</span>
          </div>
        </div>
      </div>

      <div className="appearance-detail w-100 hidden mobile:flex items-center justify-center">
        <div className="relative img-wrap">
          <img src={"/assets/2560/product/irego/detail_3.png"} />
          <div className="absolute appearance-text_3 flex flex-col">
            <span>智能摇杆</span>
            <span>双智能摇杆，满足不同患侧需求，减轻高难度运动风险</span>
          </div>
        </div>
        <div className="relative img-wrap">
          <img src={"/assets/2560/product/irego/detail_4.png"} />
          <div className="absolute appearance-text_4 flex flex-col">
            <span>便携腰带</span>
            <span>精心设计的安全护具，穿戴方便，固定快速</span>
          </div>
        </div>
      </div>
      <div className="appearance-detail appearance-detail-last w-100 hidden mobile:flex items-center justify-center">
        <div className="relative img-wrap">
          <img src={"/assets/2560/product/irego/detail_5.png"} />
          <div className="absolute appearance-text_5 flex flex-col">
            <span>急停按钮</span>
            <span>保证训练过程更加安全</span>
          </div>
        </div>
        <div className="relative img-wrap"></div>
      </div>
    </div>
  );
}
