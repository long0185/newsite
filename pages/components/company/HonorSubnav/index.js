/** @format */

import React, { useState } from "react";
import s from "./index.module.css";

export const baseUrl = "https://www.irego.cn";
export const getImgUrl = (name) => baseUrl + "/web/picgure/" + name + ".jpeg";

const list = [
  {
    id: 1,
    name: "荣誉证书",
    children: [getImgUrl("honor_1"), getImgUrl("honor_2"), getImgUrl("honor_3")],
  },
  {
    id: 2,
    name: "期刊论文",
    children: [getImgUrl("knowledge_1"), getImgUrl("knowledge_2"), getImgUrl("knowledge_3"), getImgUrl("knowledge_4")],
  },
  {
    name: "专利证书",
    id: 3,
    children: [getImgUrl("patent_1"), getImgUrl("patent_2"), getImgUrl("patent_3"), getImgUrl("patent_4")],
  },
  {
    id: 4,
    name: "软著证书",
    children: [getImgUrl("soft_1"), getImgUrl("soft_2"), getImgUrl("soft_3"), getImgUrl("soft_4")],
  },
];

export default function index() {
  const [index, setIndex] = useState(1);
  return (
    <div className={`flex w-100 justify-center flex-col  mb_100`}>
      <ul className='product-subnav nav w-100 nav-pills flex justify-center items-center'>
        {list.map((item) => (
          <li key={item.id} className={`${s.nav_item} d-center mx-3`} onClick={() => setIndex(item.id)}>
            <span className={`${s.link} ${item.id == index ? s.active : ""} flex items-center justify-center`}>{item.name}</span>
          </li>
        ))}
      </ul>
      <div className={`${s.wrap} hidden  mobile:flex justify-center`}>
        {list
          .find((item) => item.id == index)
          .children.map((item, idx) => (
            <div key={idx} className={`${item.includes("honor") ? s.m_img : s._m_img}`}>
              <img key={idx} className={`img-fluid `} src={item}></img>
            </div>
          ))}
      </div>
      <div className={`w-100 mobile:hidden flex justify-center flex-wrap items-center`}>
        {list
          .find((item) => item.id == index)
          .children.map((item, idx) => (
            <div key={idx} className={`${item.includes("honor") ? s.m_img : s._m_img}`}>
              <img className={` img-fluid mb-2 mx-2 `} src={item}></img>
            </div>
          ))}
      </div>
    </div>
  );
}
