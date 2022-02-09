import React from "react";
import Banner from "../../Banner";

export default function index() {
  return (
    <div id="apperance">
      <Banner img={"/assets/newtitle/iremo/title_1.png"} />
      <div className={`mobile:hidden flex items-center flex-col mb_100`}>
        <div className="relative w_864 h_366">
          <img src={"/assets/2560/product/iremo/detail_1.png"} />
          <div className="absolute appearance-text_1 flex flex-col">
            <span className="font_48 text-white">末端装置</span>
            <span className="font_size_24 text-white">双智能摇杆，满足不同患侧需求，减轻高难度运动风险</span>
          </div>
        </div>
        <div className="relative w_864 h_366 mt_40">
          <img src={"/assets/2560/product/iremo/detail_3.png"} />
          <div className="absolute appearance-text_3 flex flex-col">
            <span className="font_48 text-white">急停按钮</span>
            <span className="font_size_24 text-white">手动急停按钮，让患者更放心</span>
          </div>
        </div>
        <div className="relative w_864 h_366 mt_40">
          <img src={"/assets/mobile/product/iremo/detail_3.png"} />
          <div className="absolute appearance-text_1 flex flex-col">
            <span className="font_48 text-white">六自由度机械臂</span>
            <span className="font_size_24 text-white">精心设计的安全护具，穿戴方便，固定快速</span>
          </div>
        </div>
        <div className="relative w_864 h_366 mt_40">
          <img src={"/assets/mobile/product/iremo/detail_4.png"} />
          <div className="absolute appearance-text_3 flex flex-col">
            <span className="font_48 text-white">四轮固定</span>
            <span className="font_size_24 text-white">四脚轮设置，推动方便，固定稳定且便捷</span>
          </div>
        </div>

      </div>
      <div className="hidden appearance-detail w-100 mobile:flex items-center justify-center">
        <div className="position-relative img-wrap">
          <img src={"/assets/2560/product/iremo/detail_1.png"} />
          <div className="position-absolute appearance-text_1 flex flex-col">
            <span>末端装置</span>
            <span>末端驱动式训练，穿戴方便快捷</span>
          </div>
        </div>
        <div className="position-relative img-wrap">
          <img src={"/assets/2560/product/iremo/detail_2.png"} />
          <div className="position-absolute appearance-text_3 flex flex-col">
            <span>六自由度机械臂</span>
            <span>能够完成平面、竖直面、倾斜面以及三维空间内的康复训练</span>
          </div>
        </div>
      </div>

      <div className="appearance-detail hidden mobile:flex items-center justify-center">
        <div className="position-relative img-wrap">
          <img src={"/assets/2560/product/iremo/detail_3.png"} />
          <div className="position-absolute appearance-text_3 flex flex-col">
            <span>急停按钮</span>
            <span>手动急停按钮，让患者更放心</span>
          </div>
        </div>
        <div className="position-relative img-wrap">
          <img src={"/assets/2560/product/iremo/detail_4.png"} />
          <div className="position-absolute appearance-text_4 flex flex-col">
            <span>便携腰带</span>
            <span>精心设计的安全护具，穿戴方便，固定快速</span>
          </div>
        </div>
      </div>
    </div>
  );
}
