import Image from "next/image";
import React from "react";
import s from "./index.module.css";
import title_img from "assets/2560/service/maintain/title.png";
export default function index() {
  return (
    <div
      className={`${s.wrap} col-12 p-0 d-flex flex-column align-items-center`}
    >
      <div className={`${s.img} position-relative`}>
        <Image layout="fill" src={title_img} />
      </div>
      <div className={`${s.content} d-flex  `}>
        <div>
          <div className={`${s.info_1} d-flex flex-column`}>
            <span className={`${s.label}`}>联系人信息</span>
            <span className={`${s.line}`}></span>
            <div
              className={`input-group input-group-lg d-flex  align-items-end ${s.input_1}`}
            >
              <span className={`${s._label}  w-25`} id="inputGroup-sizing-lg">
                联系人
              </span>
              <input
                type="text"
                className={`${s.input_item} form-control border-none border-bottom`}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
            <div
              className={`input-group input-group-lg d-flex  align-items-end ${s.input_1}`}
            >
              <span className={`${s._label} w-25`} id="inputGroup-sizing-lg">
                联系地址:
              </span>
              <input
                type="text"
                className={`${s.input_item} form-control border-none border-bottom`}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
          <div className={`${s.info_2} d-flex flex-column`}>
            <span className={`${s.label}`}>预约详情：</span>
            <span className={`${s.line}`}></span>
            <div
              className={`input-group input-group-lg d-flex  align-items-end ${s.input_1}`}
            >
              <span className={`${s._label}  w-25`} id="inputGroup-sizing-lg">
                选择产品
              </span>
              <input
                type="text"
                className={`${s.input_item} form-control border-none border-bottom`}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
            <div
              className={`input-group input-group-lg d-flex  align-items-end ${s.input_1}`}
            >
              <span className={`${s._label} w-25`} id="inputGroup-sizing-lg">
                意向上门时间
              </span>
              <input
                type="text"
                className={`${s.input_item} form-control border-none border-bottom`}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
        </div>
        <div className={`${s.right} d-flex flex-column`}>
          <span className={s.desc}>请输入备注：</span>
          <textarea className={`${s.textarea} mt-2 w-100 outline-none`} />
        </div>
      </div>
      <div className={`col-12 text-center`}>
        <button className={s.btn}>提交</button>
      </div>
    </div>
  );
}
