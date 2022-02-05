import React from "react";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`${s.wrap} col-12 p-0 d-center`}>
      <div className={`${s.content} d-flex flex-column align-items-start`}>
        <div className={`${s.title}`}>
          <span className="c_title font-black">培训申请：</span>
          <span className="c_sub_title  text-$68">我们将第一时间与您取得联系</span>
        </div>
        <div className={`${s.form}`}>
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
  );
}
