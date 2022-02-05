
import React, { useState } from "react";
import s from "./index.module.css";

const list = [
  {
    id: 1,
    name: "荣誉证书",
    children: [
      "/assets/2560/company/honor/p_1.png",
      "/assets/2560/company/honor/p_2.png",
      "/assets/2560/company/honor/p_3.png",
    ],
  },
  {
    id: 2,
    name: "知识产权",
    children: [
      "/assets/2560/company/knowledge/p_2.png",
      "/assets/2560/company/knowledge/p_3.png",
      "/assets/2560/company/knowledge/p_4.png",
      "/assets/2560/company/knowledge/p_5.png",
    ],
  },
  {
    id: 3,
    name: "专利证书",
    children: [
      "/assets/2560/company/soft/2.png",
      "/assets/2560/company/soft/3.png",
      "/assets/2560/company/soft/4.png",
      "/assets/2560/company/soft/5.png",
    ],
  },
  {
    id: 4,
    name: "软著证书",
    children: [
      "/assets/2560/company/zhuanli/2.png",
      "/assets/2560/company/zhuanli/3.png",
      "/assets/2560/company/zhuanli/4.png",
      "/assets/2560/company/zhuanli/5.png",
    ],
  },
];

export default function index() {
  const [index, setIndex] = useState(1);
  return (
    <div className={`${s.wrap} flex w-100 justify-center flex-col  mb_100`}>
      <ul className="product-subnav nav w-100 nav-pills align-items-center flex justify-center items-center">
        {list.map((item) => (
          <li
            key={item.id}
            className={`${s.nav_item} d-center mx-3`}
            onClick={() => setIndex(item.id)}
          >
            <span
              className={`${s.link} ${
                item.id == index ? s.active : ""
              } flex items-center justify-center`}
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
      <div className={`${s.wrap} flex justify-center`} >
          {list
            .find((item) => item.id == index)
            .children.map((item) => (
              <img className={`${item.includes('honor')?s.img:s._img} img-fluid mx-3`} src={item}></img>
            ))}
      </div>
    </div>
  );
}
