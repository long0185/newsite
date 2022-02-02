import React from "react";
import s from "./index.module.css";


export default function index() {
  return (
    <div
      className={`${s.wrap} col-12 p-0 d-flex flex-column align-items-center`}
    >
      <img src='/assets/2560/service/train/title.png' className={`${s.img} position-relative`}>
      </img>
      <div className={`${s.content} d-flex flex-column align-items-center `}>
        <div className="d-flex">
          <div className={`${s.item} d-flex align-items-center`}>
            <img src='/assets/2560/service/train/zj_train.svg' className={`${s.svg_img} position-relative `}>
            </img>
            <div className={`${s.txt} d-flex  flex-column`}>
              <div className={`${s.title} font-extrabold`}>装机培训:</div>
              <div className={`${s.line}`}></div>
              <span className={`${s.desc}`}>
                售后工程师在设备安装完成后，进行设备使用培训，帮助用户独立完成临床使用，充分发挥设备性能。
              </span>
            </div>
          </div>
          <div className={`${s.item} d-flex align-items-center`}>
            <img src='/assets/2560/service/train/jz_train.svg' className={`${s.svg_img} position-relative `}>
            </img>
            <div className={`${s.txt} d-flex  flex-column`}>
              <div className={`${s.title} font-extrabold`}>公司集中培训:</div>
              <div className={`${s.line}`}></div>
              <span className={`${s.desc}`}>
                由研发人员、产品经理、临床治疗师组成讲师团队，定期举办培训班，为用户讲解原理，临床应用及新技术进展，系统化提高专业技术水平。
              </span>
            </div>
          </div>
        </div>
        <div className={`d-flex ${s.item_2}`}>
          <div className={`${s.item} d-flex align-items-center`}>
            <img src='/assets/2560/service/train/lc_train.svg' className={`${s.svg_img} position-relative `}>
            </img>
            <div className={`${s.txt} d-flex  flex-column`}>
              <div className={`${s.title} font-extrabold`}>联合临床培训:</div>
              <div className={`${s.line}`}></div>
              <span className={`${s.desc}`}>
                与全国各治疗领域领衔专家，联合开展系列培训课程，针对临床应用，深度讲解，深入临床一线实践，提高临床操作水准。
              </span>
            </div>
          </div>
          <div className={`${s.item} d-flex align-items-center`}>
            <img src='/assets/2560/service/train/learn_train.svg' className={`${s.svg_img} position-relative `}>
            </img>
            <div className={`${s.txt} d-flex  flex-column`}>
              <div className={`${s.title} font-extrabold`}>装机培训:</div>
              <div className={`${s.line}`}></div>
              <span className={`${s.desc}`}>
                与用户单位共同开办学术沙龙，邀请专家、资深临床治疗师，协助用户单位成为地区标杆，扩展影响力。
              </span>
            </div>
          </div>
        </div>
        <div className={`${s.train_wrap} flex items-center justify-center`}>
        <div
          className={`${s.item_3} d-flex  flex-column align-items-start justify-center`}
        >
          <div className={s.train_title}>
            培训标题：标培训培训培训题标题标题培训培训标题标题标题标题标题
          </div>
          <div
            className={`${s.sub_title} d-flex align-items-center justify-content-between c_sub_title`}
          >
            <div className="d-flex align-items-center justify-content-between c_sub_title">
              <img src='/assets/2560/service/useguide/calendar.svg' className="calendar position-relative">
              </img>
              <span className="ml-1">培训时间：</span>
              <span>2021年7月23日 </span>
              <span className="ml-3">17:30分</span>
            </div>
            <div>
              <span>培训方式：线上直播（抖音账号：3455123）</span>
            </div>
            <div>
              <span>培训讲师：高金美</span>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
