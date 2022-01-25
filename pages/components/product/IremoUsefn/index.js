import React from "react";
import Banner from "../../Banner";

export default function index() {
  return (
    <div
      id="usefn"
      className="fun-detail col-lg-12 d-flex flex-column align-items-center justify-content-center"
    >
      <Banner img={"/assets/newtitle/iremo/title_2.png"} />
      <div className="content d-center w-100 mb_100">
        <div className="d-center flex-column pt-5 bg-white use-fun-item align-item-center">
          <div className=" d-flex flex-column practise align-items-center">
            <span className="text-3xl font-black ">关节训练</span>
            <img
              src="/assets/2560/product/iremo/line-img_1.png"
              className="w_567 h_454 mt-24"
            />
            <div className="py-3 d-flex justify-content-around w-100">
              <div className="flex items-center">
                <span className="text-gray-500">
                  利用先进的关节治疗方法，结合多元化认知场景，
                  迅速提升用户运动功能及认知能力
                </span>
              </div>
            </div>
            <div className="practise-small-img d-flex jusify-centent-center">
              <img
                className="position-relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_1.png"
              ></img>
              <img
                className="position-relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_2.png"
              ></img>
            </div>
            <div className="mt-3 bg-gray-200 px-2 text-gray-500">
              多种平面康复游戏
            </div>
          </div>
        </div>
        <div className="d-center flex-column pt-5 bg-white use-fun-item align-item-center">
          <div className=" d-flex flex-column practise align-items-center">
            <span className="text-3xl font-black">轨迹训练</span>
            <img
              src="/assets/2560/product/iremo/line-img_2.png"
              className="w_567 h_454 mt-24"
            />
            <div className="py-3 d-flex justify-content-around w-100">
              <div className="flex items-center">
                <span className="text-gray-500">
                  预设多种训练轨迹，融合空间轨迹自由录制，
                  为用户上肢康复训练提供无限可能
                </span>
              </div>
            </div>
            <div className="practise-small-img d-flex jusify-centent-center">
              <img
                className="position-relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_3.png"
              ></img>
              <img
                className="position-relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/sm_img_4.png"
              ></img>
            </div>
            <div className="mt-3 bg-gray-200 px-2 text-gray-500">
              镜像轨迹游戏
            </div>
          </div>
        </div>
        <div className="d-center flex-column pt-5 bg-white use-fun-item align-item-center">
          <div className=" d-flex flex-column practise align-items-center">
            <span className="text-3xl font-black ">ADL训练</span>
            <img
              src="/assets/2560/product/iremo/line-img_3.png"
              className="w_567 h_454 mt-24"
            />
            <div className="py-3 d-flex justify-content-around w-100">
              <div className="flex items-center">
                <span className="text-gray-500">
                  将三维空间运功与日常生活能力（ADL）训练场景有机融合，
                  助力用户上肢运动与日常生活能力协同进步。
                </span>
              </div>
            </div>
            <div className="practise-small-img d-flex jusify-centent-center">
              <img
                className="position-relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_5.png"
              ></img>
              <img
                className="position-relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_6.png"
              ></img>
            </div>
            <div className="mt-3 bg-gray-200 px-2 text-gray-500">喝水游戏</div>
          </div>
        </div>
      </div>
    </div>
  );
}
