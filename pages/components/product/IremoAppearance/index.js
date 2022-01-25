import React from "react";
import Banner from "../../Banner";

export default function index() {
  return (
    <div id="apperance">
      <Banner img={"/assets/newtitle/iremo/title_1.png"} />
      <div className="appearance-detail col-lg-12 d-flex align-items-center justify-content-center">
        <div className="position-relative img-wrap">
          <img src={"/assets/2560/product/iremo/detail_1.png"} />
          <div className="position-absolute appearance-text_1 d-flex flex-column">
            <span>末端装置</span>
            <span>末端驱动式训练，穿戴方便快捷</span>
          </div>
        </div>
        <div className="position-relative img-wrap">
          <img src={"/assets/2560/product/iremo/detail_2.png"} />
          <div className="position-absolute appearance-text_3 d-flex flex-column">
            <span>六自由度机械臂</span>
            <span>能够完成平面、竖直面、倾斜面以及三维空间内的康复训练</span>
          </div>
        </div>
      </div>

      <div className="appearance-detail col-lg-12 d-flex align-items-center justify-content-center">
        <div className="position-relative img-wrap">
          <img src={"/assets/2560/product/iremo/detail_3.png"} />
          <div className="position-absolute appearance-text_3 d-flex flex-column">
            <span>急停按钮</span>
            <span>手动急停按钮，让患者更放心</span>
          </div>
        </div>
        <div className="position-relative img-wrap">
          <img src={"/assets/2560/product/iremo/detail_4.png"} />
          <div className="position-absolute appearance-text_4 d-flex flex-column">
            <span>便携腰带</span>
            <span>精心设计的安全护具，穿戴方便，固定快速</span>
          </div>
        </div>
      </div>
    </div>
  );
}
