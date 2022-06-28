import React, { useState } from "react";
import s from "./index.module.css";
export default function index() {
  const [Name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Comment, setComment] = useState("");
  const handleSubmit = async () => {
    if (!Name.trim() || !Phone.trim() || !mail.trim() || !Comment.trim()) {
      alert("请输入完整信息");
      return;
    }
    fetch("/web/insertGen/study", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        mail,
        Phone,
        Comment,
        Time: Date.now().toString(),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 200) {
          alert("提交成功");
          setmail("");
          setName("");
          setPhone("");
          setComment("");
        }
      });
  };
  return (
    <>
      <div className={`${s.m_wrap} w-100 mobile:hidden flex items-center justify-center`}>
        <div className={`${s.m_content} flex flex-col items-center justify-center bg-$ec`}>
          <div className={`${s.m_header} mb_43 flex justify-between items-center w_894`}>
            <span className="font_36 text-$37">服务申请：</span>
            <span className="font_30 text-$86">我们将第一时间与您取得联系</span>
          </div>
          <div className="flex justify-between w_894 mb_30">
            <input placeholder="姓名" value={Name} name="Name" onChange={(e) => setName(e.target.value)} className={`${s.m_sm_input} pl-5 font_30`} type="text" />
            <input placeholder="电话" name="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} className={`${s.m_sm_input} pl-5 font_30`} type="text" />
          </div>
          <div className="flex justify-between w_894 mb_30">
            <input placeholder="邮箱" value={mail} name="mail" onChange={(e) => setmail(e.target.value)} className={`${s.m_lg_input} pl-5 font_30 `} type="text" />
          </div>
          <div className="flex justify-between w_894 mb_30">
            <div className={`${s.m_textarea} bg-white`}>
              <textarea value={Comment} placeholder="备注" name="Comment" onChange={(e) => setComment(e.target.value)} className={`${s.m_textarea_item} w-100 h-100 pl-6 pt-6 rounded-3xl" name="" id=""`}></textarea>
            </div>
            {/* <textarea className={`${s.m_textarea}`} name="" id="" cols="30" rows="10"></textarea> */}
          </div>
          <div className="mt-5 flex justify-center w_894 mb_30">
            <button onClick={handleSubmit} className="m_l_btn font_size_30 bg-$primary text-white hover:bg-yellow-300">
              立即提交
            </button>
          </div>
        </div>
      </div>
      <div className={`${s.wrap} hidden mobile:flex w-100 p-0 items-center justify-center`}>
        <div className={`${s.content} flex flex-col items-start`}>
          <div className={`${s.title} mb-1`}>
            <span className="c_title font_size_24 font-black">服务申请：</span>
            <span className="c_sub_title  text-$68 font_size_14">我们将第一时间与您取得联系</span>
          </div>
          <div className={`${s.form} mt-1`}>
            <div className={`flex items-center `}>
              <input type="text" value={Name} name="Name" onChange={(e) => setName(e.target.value)} className=" sm_input mr-3 pl-3 rounded" placeholder="姓名：" />
              <input type="text" name="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} className=" sm_input mr-3 pl-3 rounded" placeholder="电话：" />
              <input type="text" name="mail" value={mail} onChange={(e) => setmail(e.target.value)} className=" sm_input pl-3 mr-3 rounded" placeholder="邮箱：" />
              <input type="text" name="Comment" value={Comment} onChange={(e) => setComment(e.target.value)} className="  md_input pl-3 mr-3 rounded" placeholder="备注：" />
              <button onSubmit={handleSubmit} className="  hover:bg-yellow-400 rounded sm_input bg-$primary flex items-center justify-center  text-white">
                立即提交
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
