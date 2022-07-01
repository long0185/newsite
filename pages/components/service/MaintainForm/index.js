import React, { useState } from "react";
import Banner from "../../Banner";
import s from "./index.module.css";
export default function index() {
  const [show, setShow] = useState(false);
  const [Name, setName] = useState("");
  const [Place, setPlace] = useState("");
  const [Phone, setPhone] = useState("");
  const [Product, setProduct] = useState("irego");
  const [Time, setTime] = useState("");
  const [Comment, setComment] = useState("");
  const handleSubmit = async () => {
    if (!Name || !Place || !Phone || !Product || !Time || !Comment) {
      alert("请输入完整信息");
      return;
    }
    fetch("/web/insertGen/repair", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Place,
        Phone,
        Product,
        Time,
        Comment,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ((res.code = 200)) {
          alert("提交成功");
        }
      });
  };
  return (
    <div className={`${s.wrap} w-100 p-0 flex flex-col items-center`}>
      {/* <img src='/assets/2560/service/maintain/title.png' className={`${s.img} relative`}>
      </img> */}
      <Banner img={"/assets/value_add.png"} />
      <div className="mobile:hidden border w-100 flex flex-col items-center justify-center ">
        <div className={`${s.m_content} flex flex-col items-center justify-between`}>
          <div className={`${s.m_info_1} justify-around flex flex-col`}>
            <span className={`${s.label} text-$37 font_36`}>联系人信息</span>
            <span className={`${s.m_line} mt-2`}></span>
            <div className={`  flex items-center  ${s.input_1} border-bottom`}>
              <span className={`${s._label} text-$68 w-30 font_30`} id="inputGroup-sizing-lg">
                联系人
              </span>
              <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className={`${s.input_item} form-control border-none border-bottom`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className={` flex  items-center border-bottom ${s.input_1}`}>
              <span className={`${s._label} text-$68 w-30`} id="inputGroup-sizing-lg">
                联系地址
              </span>
              <input type="text" value={Place} onChange={(e) => setPlace(e.target.value)} className={`${s.input_item} form-control border-none border-bottom`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className={`input-group input-group-lg flex  items-center border-bottom ${s.input_1}`}>
              <span className={`${s._label} text-$68 w-30`} id="inputGroup-sizing-lg">
                联系电话
              </span>
              <input type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} className={`${s.input_item} form-control border-none border-bottom`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
          </div>
          <div className={`${s.m_info_2} flex flex-col`}>
            <span className={`${s.label} font_36 text-$37`}>预约详情</span>
            <span className={`${s.m_line} mt-2`}></span>
            <div className={`input-group input-group-lg flex items-center border-bottom ${s.input_1}`}>
              <span className={`${s._label} text-$68 w-30`} id="inputGroup-sizing-lg">
                选择产品
              </span>
              <select value={Product} onChange={(e) => setProduct(e.target.value)} id="m-select" className={`${s.input_item}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                <option value="irego">irego</option>
                <option value="irego">iremo</option>
                <option value="irego">irecog</option>
              </select>
            </div>
            <div className={`input-group input-group-lg flex items-center border-bottom ${s.input_1}`}>
              <span className={`${s._label} w-30 text-$68`} id="inputGroup-sizing-lg">
                意向上门时间
              </span>
              <input type="text" value={Time} onChange={(e) => setTime(e.target.value)} className={`${s.input_item} form-control border-none border-bottom`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
          </div>
          <div className={`${s.m_right} relative `}>
            <textarea value={Comment} onChange={(e) => setComment(e.target.value)} onFocus={() => setShow(true)} onBlur={() => setShow(false)} placeholder="请输入备注：" rows={10} className={`${s.m_textarea} font_30 absolute focus:border placeholder:text-$68 placeholder:font_30 outline-none`} />
            <span className={`${s.m_tips} ${show ? "block" : "hidden"} text-$68 absolute z-20 font_size_24`}>最多不超过200字</span>
          </div>
        </div>
        <div className={`text-center w-100`}>
          <button className={`${s.m_btn} bg-$primary hover:bg-yellow-400 `}>提交</button>
        </div>
      </div>
      <div className={`${s.content} hidden justify-between  mobile:flex`}>
        <div className={`${s.left} flex flex-col`}>
          <div className={`${s.info_1} flex flex-col mb_43 items-start w-100`}>
            <span className={`${s.label} font-extrabold`}>联系人信息</span>
            <span className={`${s.line} mt-2`}></span>
            <div className={` border-bottom w-100 flex items-center justify-between ${s.input_1}`}>
              <span className={`${s._label} text-$68  w-25`} id="inputGroup-sizing-lg">
                联系人
              </span>
              <input value={Name} onChange={(e) => setName(e.target.value)} type="text" className={`${s.input_item} form-control border-none `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className={`items-center flex justify-between w-100 ${s.input_1} border-bottom`}>
              <span className={`${s._label} text-$68 w-25`} id="inputGroup-sizing-lg">
                联系地址
              </span>
              <input type="text" value={Place} onChange={(e) => setPlace(e.target.value)} className={`${s.input_item} form-control border-none `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className={`items-center flex justify-between w-100 ${s.input_1} border-bottom`}>
              <span className={`${s._label} text-$68 w-25`} id="inputGroup-sizing-lg">
                联系电话
              </span>
              <input value={Phone} onChange={(e) => setPhone(e.target.value)} type="text" className={`${s.input_item} form-control border-none `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
          </div>
          <div className={`${s.info_2} flex flex-col justify-center items-start`}>
            <span className={`${s.label} font-extrabold`}>预约详情</span>
            <span className={`${s.line}`}></span>
            <div className={`items-center flex w-100 jusity-between ${s.input_1} border-bottom`}>
              <span className={`${s._label} text-$68 w-25`} id="inputGroup-sizing-lg">
                选择产品
              </span>
              <select id="select" value={Product} onChange={(e) => setProduct(e.target.value)} className={`${s.input_item}`} aria-label="Sizing example input text-center" aria-describedby="inputGroup-sizing-lg">
                <option value="irego">irego</option>
                <option value="iremo">iremo</option>
                <option value="irecog">irecog</option>
              </select>
            </div>
            <div className={`items-center w-100 flex  justify-between ${s.input_1} border-bottom`}>
              <span className={`${s._label} w-25 text-$68`} id="inputGroup-sizing-lg">
                意向上门时间
              </span>
              <input type="text" value={Time} onChange={(e) => setTime(e.target.value)} className={`${s.input_item} form-control border-none`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
          </div>
        </div>
        <div className={`${s.right} relative border `}>
          <textarea value={Comment} onChange={(e) => setComment(e.target.value)} onFocus={() => setShow(true)} onBlur={() => setShow(false)} placeholder="请输入备注：" rows={10} className={`${s.textarea} w-100 h-100 font_30  focus:border placeholder:text-$68 placeholder:font_24 outline-none`} />
          <span className={`${s.tips} ${show ? "block" : "hidden"} text-$68 absolute z-20`}>最多不超过200字</span>
        </div>
      </div>
      <div className={`w-100 hidden  mobile:flex text-center justify-center`}>
        <button onClick={handleSubmit} className={`${s.btn} hover:bg-yellow-400 `}>
          立即提交
        </button>
      </div>
    </div>
  );
}
