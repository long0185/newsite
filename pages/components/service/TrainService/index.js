import React from "react";
import Banner from "../../Banner";
import s from "./index.module.css";

const list = [
  { 
    id:1,
    img_src:'/assets/2560/service/train/zj_train.svg',
    title:'装机培训:',
    desc:'售后工程师在设备安装完成后，进行设备使用培训，帮助用户独立完成临床使用，充分发挥设备性能。'
  },
  {
    id:2,
    img_src:'/assets/2560/service/train/zj_train.svg',
    title:'公司集中培训:',
    desc:'由研发人员、产品经理、临床治疗师组成讲师团队，定期举办培训班，为用户讲解原理，临床应用及新技术进展，系统化提高专业技术水平。'
  },
  {
    id:3,
    img_src:'/assets/2560/service/train/zj_train.svg',
    title:'联合临床培训:',
    desc:'与全国各治疗领域领衔专家，联合开展系列培训课程，针对临床应用，深度讲解，深入临床一线实践，提高临床操作水准。'
  },
  {
    id:4,
    img_src:'/assets/2560/service/train/zj_train.svg',
    title:'学术沙龙:',
    desc:'与用户单位共同开办学术沙龙，邀请专家、资深临床治疗师，协助用户单位成为地区标杆，扩展影响力。'
  },
]

export default function index() {
  return (
    <div className={`${s.wrap} w-100 p-0 flex flex-col items-center`}>
      {/* <img src='/assets/2560/service/train/title.png' className={`${s.img} relative`}>
      </img> */}
      <Banner img={"/assets/2560/service/train/title.png"} />
      <div className={`${s.content} hidden  mobile:flex flex-col items-center `}>
        <div className="flex ">
          <div className={`${s.item} flex items-start`}>
            <img
              src="/assets/2560/service/train/zj_train.svg"
              className={`${s.svg_img} img-fluid self-center `}
            ></img>
            <div className={`${s.txt} flex  flex-col pt-3`}>
              <div className={`${s.title} font-extrabold`}>装机培训:</div>
              <div className={`${s.line}`}></div>
              <span className={`${s.desc}`}>
                售后工程师在设备安装完成后，进行设备使用培训，帮助用户独立完成临床使用，充分发挥设备性能。
              </span>
            </div>
          </div>
          <div className={`${s.item} flex items-start`}>
            <img
              src="/assets/2560/service/train/jz_train.svg"
              className={`${s.svg_img} relative self-center `}
            ></img>
            <div className={`${s.txt} flex  flex-col pt-3`}>
              <div className={`${s.title} font-extrabold`}>公司集中培训:</div>
              <div className={`${s.line}`}></div>
              <span className={`${s.desc}`}>
                由研发人员、产品经理、临床治疗师组成讲师团队，定期举办培训班，为用户讲解原理，临床应用及新技术进展，系统化提高专业技术水平。
              </span>
            </div>
          </div>
        </div>
        <div className={`flex ${s.item_2}`}>
          <div className={`${s.item} flex items-start`}>
            <img
              src="/assets/2560/service/train/lc_train.svg"
              className={`${s.svg_img} relative self-center `}
            ></img>
            <div className={`${s.txt} flex  flex-col pt-3`}>
              <div className={`${s.title} font-extrabold`}>联合临床培训:</div>
              <div className={`${s.line}`}></div>
              <span className={`${s.desc} self-start`}>
                与全国各治疗领域领衔专家，联合开展系列培训课程，针对临床应用，深度讲解，深入临床一线实践，提高临床操作水准。
              </span>
            </div>
          </div>
          <div className={`${s.item} flex items-start`}>
            <img
              src="/assets/2560/service/train/learn_train.svg"
              className={`${s.svg_img} relative self-center `}
            ></img>
            <div className={`${s.txt} flex  flex-col pt-3`}>
              <div className={`${s.title} font-extrabold`}>学术沙龙:</div>
              <div className={`${s.line}`}></div>
              <span className={`${s.desc}`}>
                与用户单位共同开办学术沙龙，邀请专家、资深临床治疗师，协助用户单位成为地区标杆，扩展影响力。
              </span>
            </div>
          </div>
        </div>
        <div className={`${s.train_wrap} flex items-center justify-center`}>
          <div className={`${s.item_3} flex  flex-col items-start`}>
            <div className={`${s.train_title} mb-1 `}>
              培训标题：标培训培训培训题标题标题培训培训标题标题标题标题标题
            </div>
            <div
              className={`${s.sub_title} mt-1 flex items-center justify-between c_sub_title`}
            >
              <div className="text-$86 flex items-center justify-between c_sub_title">
                <img
                  src="/assets/2560/service/useguide/calendar.svg"
                  className="calendar relative"
                ></img>
                <span className="ml-1 text-$86">培训时间：</span>
                <span>2021年7月23日 </span>
                <span className="ml-3">17:30分</span>
              </div>
              <div>
                <span className="text-$86">
                  培训方式：线上直播（抖音账号：3455123）
                </span>
              </div>
              <div>
                <span className="text-$86">培训讲师：高金美</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile:hidden flex flex-col items-center justify-center w-100`}>
        {list.map((item,index)=><div key={item.id} className={`${s.m_item} mb_43 flex items-center justify-between`}>
        <img className={`${s.m_svg_img}`} src={item.img_src} />
        <div className="flex flex-col items-start w_616">
          <span className="font_36 font-extrabold">{item.title}</span>
          <span className="w-100 bg-$ec h-2 my-2"></span>
          <span className="font_size_24 text-$68">{item.desc}</span>
        </div>
        </div>)}
        <div className={`${s.m_train} flex flex-col`}>
          <span className="font_30 text-$37 mb_43 w_600">培训标题：标培训培训培训题标题标题培训培训标题标题标题标题标题</span>
          <div className="font_size_24 text-$86  flex items-center">
            {/* <img src="/assets/2560/service/train/lc_train.svg"  /> */}
            <span>培训时间：</span>
            <span>2021年7月23日</span>
            <span className="ml-3">17:30分</span>
          </div>
          <div className="font_size_24 text-$86  flex items-center">
            {/* <img src="/assets/2560/service/train/lc_train.svg"  /> */}
            <span>培培训方式：</span>
            <span>线上直播</span>
            <span className="ml-3">(抖音账号：3455123</span>
          </div>
          <div className="font_size_24 text-$86  flex items-center">
            {/* <img src="/assets/2560/service/train/lc_train.svg"  /> */}
            <span>培训讲师：</span>
            <span>高金美</span>
          </div>
        </div>
      </div>
    </div>
  );
}
