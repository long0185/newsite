import React from "react";
import Banner from "../../Banner";
const list = [
  {
    id: 1,
    title: '关节训练',
    img_src: '/assets/2560/product/iremo/line-img_1.png',
    desc: '利用先进的关节治疗方法，结合多元化认知场景迅速提升用户运动功能及认知能力',
    sm_imgs: ['/assets/2560/product/iremo/use_1.png', '/assets/2560/product/iremo/use_1.png'],
    img_desc: '多种平面康复游戏'
  },
  {
    id: 2,
    title: '轨迹训练',
    img_src: '/assets/2560/product/iremo/line-img_2.png',
    desc: '预设多种训练轨迹，融合空间轨迹自由录制，为用户上肢康复训练提供无限可能',
    sm_imgs: ['/assets/2560/product/iremo/use_3.png', '/assets/2560/product/iremo/sm_img_4.png'],
    img_desc: '镜像轨迹游戏'
  },
  {
    id: 3,
    title: 'ADL训练',
    img_src: '/assets/2560/product/iremo/line-img_3.png',
    desc: '将三维空间运功与日常生活能力（ADL）训练场景有机融合，助力用户上肢运动与日常生活能力协同进步。',
    sm_imgs: ['/assets/2560/product/iremo/use_5.png', '/assets/2560/product/iremo/use_6.png'],
    img_desc: '喝水游戏'
  },

]
export default function index() {
  return (
    <div
      id="usefn"
      className="fun-detail col-lg-12 flex flex-col items-center justify-center"
    >
      <Banner img={"/assets/newtitle/iremo/title_2.png"} desc="上肢康复运动训练器是一款智能康复机器人。其通过多种训练模式与运动模式，帮助因大脑神经、脊柱、肌肉及骨骼疾病而导致的上肢运动功能障碍的患者，提高上肢关节活动度、增强上肢肌力、帮助患肢失去的功能实现恢复。" />
      <div className="content hidden mobile:flex items-center justify-center w-100 mb_100">
        <div className="d-center flex-col pt-5 bg-white use-fun-item align-item-center">
          <div className=" flex flex-col practise items-center">
            <span className="text-3xl font-black ">关节训练</span>
            <img
              src="/assets/2560/product/iremo/line-img_1.png"
              className="w_567 h_454 mt-24"
            />
            <div className="py-3 flex justify-content-around w-100">
              <div className="flex items-center">
                <span className="text-gray-500">
                  利用先进的关节治疗方法，结合多元化认知场景，
                  迅速提升用户运动功能及认知能力
                </span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <img
                className="relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_1.png"
              ></img>
              <img
                className="relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_1.png"
              ></img>
            </div>
            <div className="mt-3 bg-gray-200 px-2 text-gray-500">
              多种平面康复游戏
            </div>
          </div>
        </div>
        <div className="d-center flex-col pt-5 bg-white use-fun-item align-item-center">
          <div className=" flex flex-col practise items-center">
            <span className="text-3xl font-black">轨迹训练</span>
            <img
              src="/assets/2560/product/iremo/line-img_2.png"
              className="w_567 h_454 mt-24"
            />
            <div className="py-3 flex justify-content-around w-100">
              <div className="flex items-center">
                <span className="text-gray-500">
                  预设多种训练轨迹，融合空间轨迹自由录制，
                  为用户上肢康复训练提供无限可能
                </span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <img
                className="relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_3.png"
              ></img>
              <img
                className="relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/sm_img_4.png"
              ></img>
            </div>
            <div className="mt-3 bg-gray-200 px-2 text-gray-500">
              镜像轨迹游戏
            </div>
          </div>
        </div>
        <div className="d-center flex-col pt-5 bg-white use-fun-item align-item-center">
          <div className=" flex flex-col practise items-center">
            <span className="text-3xl font-black ">ADL训练</span>
            <img
              src="/assets/2560/product/iremo/line-img_3.png"
              className="w_567 h_454 mt-24"
            />
            <div className="py-3 flex justify-content-around w-100">
              <div className="flex items-center">
                <span className="text-gray-500">
                  将三维空间运功与日常生活能力（ADL）训练场景有机融合，
                  助力用户上肢运动与日常生活能力协同进步。
                </span>
              </div>
            </div>
            <div className="practise-small-img flex jusify-centent-center">
              <img
                className="relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_5.png"
              ></img>
              <img
                className="relative smimg-wrap img-fluid"
                src="/assets/2560/product/iremo/use_6.png"
              ></img>
            </div>
            <div className="mt-3 bg-gray-200 px-2 text-gray-500">喝水游戏</div>
          </div>
        </div>
      </div>
      <div className="mobile:hidden content d-center flex-col  w-100 mb_100">
        {list.map((item, index) => (
          <div className="d-center mb_43 flex-col bg-white m_use-fun-item items-center">
            <div className="flex flex-col practise items-center ">
              <span className="font_43 font-black mb-5">{item.title}</span>
              <img
                className="img-fluid w_676 h_592"
                src={item.img_src}
              />
              <div className="mt_63 mb_43  flex justify-around w_582 px-5 ">
                <span className="text-$37 font_30 text-center">{item.desc}</span>
              </div>
              <div className="practise-small-img flex jusify-centent-center">
                {item.sm_imgs.map((ele, i) =>
                  <div className="relative w_425 h_265">
                    <img
                      className="w_425 h_265 img-fluid"
                      src={ele}
                    />
                  </div>
                )}
              </div>
              <div className="w_582 text-center mt-5">
                <span className="text-center bg-gray-300 text-gray-500">
                  {item.img_desc}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
