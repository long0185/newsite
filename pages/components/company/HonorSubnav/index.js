import Image from "next/image";
// import honor_1 from "/assets/2560/company/honor/p_1.png";
// import honor_2 from "/assets/2560/company/honor/p_2.png";
// import honor_3 from "/assets/2560/company/honor/p_3.png";
import knowledge_2 from "assets/2560/company/knowledge/p_2.png";
import knowledge_3 from "assets/2560/company/knowledge/p_3.png";
import knowledge_4 from "assets/2560/company/knowledge/p_4.png";
import knowledge_5 from "assets/2560/company/knowledge/p_5.png";
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
      "/assets/2560/company/honor/p_1.png",
      "/assets/2560/company/honor/p_2.png",
      "/assets/2560/company/honor/p_3.png",
    ],
  },
  {
    id: 4,
    name: "软著证书",
    children: [
      "/assets/2560/company/honor/p_1.png",
      "/assets/2560/company/honor/p_2.png",
      "/assets/2560/company/honor/p_3.png",
    ],
  },
];

export default function index() {
  const [index, setIndex] = useState(1);
  return (
    <div className={`${s.wrap} flex w-50 justify-center flex-col  mb_100`}>
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
      <div className={`${s.wrap}`} id="tablist">
        <div
          className="tab-pane fade show active flex "
          id="honor"
          role="tabpanel"
          aria-labelledby="honor-tab"
        >
          {list
            .find((item) => item.id == index)
            .children.map((item) => (
              <img className={`${s.img} img-fluid`} src={item}></img>
            ))}
        </div>
      </div>
    </div>
  );
}
