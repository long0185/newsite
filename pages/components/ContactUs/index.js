import React, { useState } from "react";

export default function index() {
  const [Name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Comment, setComment] = useState("");
  const [area, setArea] = useState("");
  const [company, setCompany] = useState("");
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = async () => {
    if (!Name.trim() || !Phone.trim() || !mail.trim() || !Comment.trim() || !area.trim() || !company.trim()) {
      alert("请输入完整信息");
      return;
    }
    if (Comment.trim().length > 100) {
      alert("输入过长");
      return;
    }
    fetch("/web/insertGen/message", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        mail,
        Phone,
        Comment,
        area,
        company,
        Time: Date.now().toString(),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 200) {
          alert("提交成功,我们稍后会与联系");
          setmail("");
          setName("");
          setPhone("");
          setComment("");
          setArea("");
          setCompany("");
        }
      });
  };
  return (
    <>
      <div className="block mobile:hidden">
        <div style={{ left: "50%", transform: "translateX(-50%)", bottom: 10 }} onClick={() => setShowForm(true)} className={`fixed z-10 h_89 w_972  text-white font_size_14 flex items-center justify-center`}>
          <button style={{ left: 0 }} className="w_353 absolute font_size_30 bg-$primary h_89">
            联系我们>>
          </button>
        </div>
        <div style={{ left: "50%", transform: "translateX(-50%)" }} className={`fixed w_972 bottom-36 z-20 bg-$primary contact-box ${showForm ? "block" : "hidden"}`}>
          <div onClick={() => setShowForm(false)} className="absolute bg-white p-2" style={{ width: 30, borderRadius: "50%", right: -10, top: -10 }}>
            <img className="w-100 h-100" src="/assets/svg/close.svg" />
          </div>
          <div className="flex">
            <h3 className=" text-white font_size_30">请填写你的需求</h3>
            <span className="font_size_20 ml-2 mt-3" style={{ color: "rgba(255,255,255,.6)" }}>
              我们将在两个工作日内回复
            </span>
          </div>
          <div className="w-100 flex mt-3 font_size_28">
            <input className="h_84 w_177 rounded pl-2 font_size_28" type="text" name="Name" value={Name} placeholder="* 姓名" onChange={(e) => setName(e.target.value)} />
            <input className="h_84 flex-1 ml-5 rounded pl-2" type="text" name="Phone" value={Phone} placeholder="* 手机号" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mt-5 w-100 font_size_28">
            <input className="h_84 pl-2 w-100 rounded" name="company" value={company} placeholder="* 单位名称" onChange={(e) => setCompany(e.target.value)} placeholder="* 单位名称" type="text" />
          </div>
          <div className="mt-5 w-100 font_size_28">
            <input className="h_84 w-100 pl-2 rounded" name="area" value={area} placeholder="* 所在地区" onChange={(e) => setArea(e.target.value)} placeholder="* 所在地区" type="text" />
          </div>
          <div className="mt-5 w-100 font_size_28">
            <input className="h_84 pl-2 w-100 rounded" name="mail" value={mail} placeholder="* 邮箱地址" onChange={(e) => setmail(e.target.value)} type="text" />
          </div>
          <div className="mt-5 w-100  font_size_28">
            <textarea className="w-100 pl-2 h-82  rounded outline-none" name="Comment" value={Comment} placeholder="* 内容（字数在一百字以内)" onChange={(e) => setComment(e.target.value)} />
          </div>
          <div className="mt-5 flex justify-between">
            <span className="text-white font_size_24">*为必填项</span>
            <button className="w_235 h_70 font_size_28 rounded border text-white" onClick={() => handleSubmit()}>
              发送>>
            </button>
          </div>
          <div className="border-top mt-4"></div>
          <div className="mt-3 flex justify-between">
            <div className="flex items-center">
              <div className="w_45">
                <img className="w-100 h-100" src="/assets/svg/phone_2.svg" alt="" />
              </div>
              <div className="flex flex-col text-white">
                <span className="font_size_25">15151818417</span>
                <span className="font_size_25">（张女士）</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w_45">
                <img className="w-100 h-100" src="/assets/svg/phone_2.svg" alt="" />
              </div>
              <div className="flex flex-col text-white">
                <span className="font_size_25">18516562434</span>
                <span className="font_size_25">（李先生）</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w_45">
                <img className="w-100 h-100" src="/assets/svg/phone.svg" alt="" />
              </div>
              <div className="flex flex-col text-white flex-nowrap">
                <span className="font_size_25">021-31076003</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden mobile:block contact-shadow">
        <div onClick={() => setShowForm(true)} className={`fixed z-10 bottom-20 right-64 h_45 w_179 bg-$primary text-white font_size_14 flex items-center justify-center`}>
          联系我们>>
        </div>
        <div className={`fixed  bottom-20 right-64 z-20 bg-$primary contact-box ${showForm ? "block" : "hidden"}`}>
          <div onClick={() => setShowForm(false)} className="absolute bg-white p-2" style={{ width: 30, borderRadius: "50%", right: -10, top: -10 }}>
            <img className="w-100 h-100" src="/assets/svg/close.svg" />
          </div>
          <div className="flex">
            <h3 className=" text-white font_size_20">请填写你的需求</h3>
            <span className="font_size_16 ml-2 mt-1" style={{ color: "rgba(255,255,255,.6)" }}>
              我们将在两个工作日内回复
            </span>
          </div>
          <div className="w-100 flex mt-3">
            <input className="h_47 w_177 rounded pl-2" type="text" name="Name" value={Name} placeholder="* 姓名" onChange={(e) => setName(e.target.value)} />
            <input className="h_47 flex-1 ml-5 rounded pl-2" type="text" name="Phone" value={Phone} placeholder="* 手机号" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mt-3 w-100">
            <input className="h_47 pl-2 w-100 rounded" name="company" value={company} placeholder="* 单位名称" onChange={(e) => setCompany(e.target.value)} placeholder="* 单位名称" type="text" />
          </div>
          <div className="mt-3 w-100">
            <input className="h_47 w-100 pl-2 rounded" name="area" value={area} placeholder="* 所在地区" onChange={(e) => setArea(e.target.value)} placeholder="* 所在地区" type="text" />
          </div>
          <div className="mt-3 w-100">
            <input className="h_47 pl-2 w-100 rounded" name="mail" value={mail} placeholder="* 邮箱地址" onChange={(e) => setmail(e.target.value)} type="text" />
          </div>
          <div className="mt-3 w-100 ">
            <textarea className="w-100 pl-2 h-82  rounded outline-none" name="Comment" value={Comment} placeholder="* 内容（字数在一百字以内)" onChange={(e) => setComment(e.target.value)} />
          </div>
          <div className="mt-3 flex justify-between">
            <span className="text-white font_size_14">*为必填项</span>
            <button className="w_132 h_39 rounded border text-white" onClick={() => handleSubmit()}>
              发送>>
            </button>
          </div>
          <div className="border-top mt-4"></div>
          <div className="mt-3 flex justify-between">
            <div className="flex items-center">
              <div className="w_38 h_62">
                <img className="w-100 h-100" src="/assets/svg/phone_2.svg" alt="" />
              </div>
              <div className="flex flex-col text-white ">
                <span className="font_size_16">15151818417</span>
                <span className="font_size_14">（张女士）</span>
              </div>
            </div>
            <div className="flex items-center mx_40">
              <div className="w_38 h_62">
                <img className="w-100 h-100" src="/assets/svg/phone_2.svg" alt="" />
              </div>
              <div className="flex flex-col text-white">
                <span className="font_size_16">18516562434</span>
                <span className="font_size_14">（李先生）</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w_38 h_62">
                <img className="w-100 h-100" src="/assets/svg/phone.svg" alt="" />
              </div>
              <div className="flex flex-col text-white flex-nowrap">
                <span className="font_size_16">021-31076003</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
