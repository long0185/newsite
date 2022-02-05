import React, { useState } from "react";
import s from "./index.module.css";
export default function index() {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${s.wrap} col-12 p-0 d-flex flex-column align-items-center`}
    >
      <img src='/assets/2560/service/maintain/title.png' className={`${s.img} position-relative`}>
      </img>
      <div className={`${s.content} flex  pt-3 pl-5  `}>
        <div>
          <div className={`${s.info_1} flex flex-col`}>
            <span className={`${s.label} font-extrabold`}>联系人信息</span>
            <span className={`${s.line}`}></span>
            <div
              className={`input-group input-group-lg d-flex  align-items-end ${s.input_1}`}
            >
              <span className={`${s._label} text-$68  w-25`} id="inputGroup-sizing-lg">
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
              <span className={`${s._label} text-$68 w-25`} id="inputGroup-sizing-lg">
                联系地址
              </span>
              <input
                type="text"
                className={`${s.input_item} form-control border-none border-bottom`}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
          <div className={`${s.info_2} flex flex-col`}>
            <span className={`${s.label} font-extrabold`}>预约详情</span>
            <span className={`${s.line}`}></span>
            <div
              className={`input-group input-group-lg d-flex  align-items-end ${s.input_1}`}
            >
              <span className={`${s._label} text-$68 w-25`} id="inputGroup-sizing-lg">
                选择产品
              </span>
              <select
                className={`${s.input_item} flex-1 border-none border-bottom`}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              >
                <option value='irego'></option>
                <option value='irego'>irego</option>
                <option value='irego'>iremo</option>
                <option value='irego'>ircog</option>
              </select>
            </div>
            <div
              className={`input-group input-group-lg d-flex  align-items-end ${s.input_1}`}
            >
              <span className={`${s._label} w-25 text-$68`} id="inputGroup-sizing-lg">
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
        <div className={`${s.right} relative `}>
          <textarea 
          onFocus={()=>setShow(true)}
          onBlur={()=>setShow(false)}
          placeholder="请输入备注:"
           rows={10} className={`${s.textarea} absolute top-0 bottom-0 right-0 left-0 focus:border placeholder:text-$68 placeholder:font_30 ml-2  mt-10 w-100 outline-none`} />
          <span className={`${s.tips} ${show?'block':'hidden'} text-$68 absolute z-20`}>最多不超过200字</span>
        </div>
      </div>
      <div className={`col-12 text-center`}>
        <button className={`${s.btn} hover:bg-yellow-400 `}>提交</button>
      </div>
    </div>
  );
}
