import React, { useRef, useState } from "react";
import s from "./index.module.css";

import Banner from "../../../components/Banner";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
import { l_variants, r_variants } from "../../product/IregoAppearance";
export default function index() {
  const [Name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Comment, setComment] = useState("");
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  const handleSubmit = async () => {
    if (!Name.trim() || !Phone.trim() || !mail.trim() || !Comment.trim()) {
      alert("请输入完整信息");
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
    <div ref={myRef} className={`w-100 p-0 ${s.wrap} flex items-center justify-center flex-col`} id="contact">
      <Banner img={"/assets/2560/company/title_contact.png"} />
      <div className={`flex flex-col mobile:flex-row mb_118`}>
        <motion.div variants={l_variants} animate={`${inViewport ? "enter" : "leave"}`} className={`${s.item} hidden mobile:flex flex-col mr-3`}>
          <img src="/assets/2560/company/location.svg" className={`${s.location} relative`}></img>
          <img src="/assets/2560/company/name.svg" className={`${s.img} relative mt-2`}></img>
          <div className={`flex flex-col ${s.address}`}>
            <span>技术服务热线：（021）31076003</span>
            <span>研发中心：上海市宝山区环上大科技园 1号基地21号楼7层</span>
            <span>生产中心：中国（上海）自由贸易试验区临港新片区新杨公路1566号12号楼301室</span>
            <span>公司网址：www.ga-robot.com</span>
          </div>
        </motion.div>
        <div className={`${s.m_item}  mobile:hidden flex-col mr-3 mb_43`}>
          <img src="/assets/2560/company/location.svg" className={`${s.m_location} relative`}></img>
          <img src="/assets/2560/company/name.svg" className={`${s.m_img} relative mt-2`}></img>
          <div className={`flex flex-col ${s.address}`}>
            <span className="font_24">技术服务热线：（021）31076003</span>
            <span className="font_24">研发中心：上海市宝山区环上大科技园 1号基地21号楼7层</span>
            <span className="font_24">生产中心：中国（上海）自由贸易试验区临港新片区新杨公路1566号12号楼301室</span>
            <span className="font_24">公司网址：www.ga-robot.com</span>
          </div>
        </div>
        <div className={`${s.m_content} flex mobile:hidden flex-col items-center justify-center bg-$ec`}>
          <div className={`${s.m_header} mb_43 flex justify-between items-center w_894`}>
            <span className="font_36 text-$37">咨询请留下您的信息</span>
            <span className="font_30 text-$86">我们将第一时间与您取得联系</span>
          </div>
          <div className="flex justify-between w_894 mb_30">
            <input placeholder="姓名" name="Name" value={Name} onChange={(e) => setName(e.target.value)} className={`${s.m_sm_input} pl-5 font_30`} type="text" />
            <input placeholder="电话" name="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} className={`${s.m_sm_input} pl-5 font_30`} type="text" />
          </div>
          <div className="flex justify-between w_894 mb_30">
            <input placeholder="邮箱" name="mail" value={mail} onChange={(e) => setmail(e.target.value)} className={`${s.m_lg_input} pl-5 font_30 `} type="text" />
          </div>
          <div className="flex justify-between w_894 mb_30">
            <div className={`${s.m_textarea} bg-white`}>
              <textarea placeholder="备注" name="Comment" value={Comment} onChange={(e) => setComment(e.target.value)} className={`${s.m_textarea_item} w-100 h-100 pl-6 pt-6 rounded-3xl" name="" id=""`}></textarea>
            </div>
            {/* <textarea className={`${s.m_textarea}`} name="" id="" cols="30" rows="10"></textarea> */}
          </div>
        </div>
        <div className={`w-100 mobile:hidden flex text-center justify-center`}>
          <button onClick={handleSubmit} className={`m-sub-btn bg-$primary hover:bg-yellow-400 `}>
            提交
          </button>
        </div>
        <motion.div variants={r_variants} animate={`${inViewport ? "enter" : "leave"}`} className={`${s.item} hidden mobile:flex flex-col mr-3 justify-center`}>
          <div>
            <span className="c_title font_24 font-black">咨询请留下您的信息</span>
            <span className="font_14 text-$86 ml-2">我们将第一时间与您取得联系</span>
          </div>
          <div className="mt-5">
            <input type="text" name="Name" value={Name} onChange={(e) => setName(e.target.value)} className="sm_input mr-3 pl-2" placeholder="姓名：" />
            <input type="text" name="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} className="sm_input mr-3 pl-2" placeholder="电话：" />
            <input type="text" name="mail" value={mail} onChange={(e) => setmail(e.target.value)} className="sm_input pl-2" placeholder="邮箱：" />
          </div>
          <div className="mt-3">
            <input type="text" name="Comment" value={Comment} onChange={(e) => setComment(e.target.value)} className="full_input pl-2" placeholder="备注：" />
          </div>
          <div className="mt-3 w-100 hidden   mobile:flex items-center justify-center ">
            <button onClick={handleSubmit} className={`${s.btn} flex items-center justify-center mr-5 hover:bg-yellow-300 rounded bg-$primary text-white`}>
              立即提交
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
