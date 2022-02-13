import React from "react";
import s from "./index.module.css";
export default function index() {
  return (
    <>
    <div className={`${s.m_wrap} w-100 mobile:hidden flex items-center justify-center`}>
      <div className={`${s.m_content} flex flex-col items-center justify-center bg-$ec`}>
          <div className={`${s.m_header} mb_43 flex justify-between items-center w_894`}><span className="font_36 text-$37">培训申请：</span><span className="font_30 text-$86">我们将第一时间与您取得联系</span></div>
          <div className='flex justify-between w_894 mb_30'>
            <input placeholder="姓名" className={`${s.m_sm_input} pl-5 font_30`} type="text" />
            <input placeholder="电话" className={`${s.m_sm_input} pl-5 font_30`} type="text" />
          </div>
          <div className='flex justify-between w_894 mb_30'>
            <input placeholder="邮箱" className={`${s.m_lg_input} pl-5 font_30 `} type="text" />
          </div>
          <div className='flex justify-between w_894 mb_30'>
            <div className={`${s.m_textarea} bg-white`} >
                <textarea placeholder="备注"  className={`${s.m_textarea_item} w-100 h-100 pl-6 pt-6 rounded-3xl" name="" id=""`} ></textarea>
              </div>
              {/* <textarea className={`${s.m_textarea}`} name="" id="" cols="30" rows="10"></textarea> */}
          </div>
      </div>
    </div>
    <div className={`${s.wrap} hidden mobile:flex w-100 p-0 items-center justify-center`}>
      <div className={`${s.content} flex flex-col items-start`}>
        <div className={`${s.title} mb-1`}>
          <span className="c_title font-black">培训申请：</span>
          <span className="c_sub_title  text-$68">我们将第一时间与您取得联系</span>
        </div>
        <div className={`${s.form} mt-1`}>
          <div className={`flex items-center `}>
            <input
              type="text"
              className="sm_input mr-3 pl-3 rounded"
              placeholder="姓名："
            />
            <input
              type="text"
              className="sm_input mr-3 pl-3 rounded"
              placeholder="电话："
            />
            <input
              type="text"
              className="sm_input pl-3 mr-3 rounded"
              placeholder="邮箱："
            />
            <input
              type="text"
              className="md_input pl-3 mr-3 rounded"
              placeholder="备注："
            />
            <button className="hover:bg-yellow-400 rounded sm_input bg-$primary flex items-center justify-center  text-white">
              立即提交
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
