import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import s from "./index.module.css";
export default function IregoNav() {
  const router = useRouter();
  const [href, setHref] = useState("#appearance");
  useEffect(() => {
    window.addEventListener("hashchange", handhash);
    return () => window.removeEventListener("hashchange", handhash);
  }, []);
  const handhash = () => {};
  const enter = (name) => {
    setHref(name);
  };

  const list = [
    {
      href: "#appearance",
      name: "产品外观",
    },
    {
      href: "#usefn",
      name: "功能详情",
    },
    {
      href: "#software",
      name: "产品软件",
    },
    {
      href: "#interact",
      name: "交互特色",
    },
    {
      href: "#advantage",
      name: "生产优势",
    },
    {
      href: "#quality",
      name: "品质保障",
    },
    {
      href: "/out/example-iremo",
      name: "应用案例",
    },
    {
      href: "/out/service-guide",
      name: "使用指南",
    },
  ];
  return (
    <>
      <ul className="irego-nav   w-100  nav-pills hidden  mobile:flex justify-center bg-white">
        {list.map((item) => (
          <li key={item.href} className="nav-item " role="presentation">
            <a onMouseEnter={() => enter(item.href)} className={`nav-link p-0 ${href == item.href ? "active" : ""}`} style={{ paddingTop: 0, paddingBottom: 0 }} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className={`${s.m_wrap} mobile:hidden flex items-center justify-center`}>
        <div className="flex mt_54 items-center w_894 flex-wrap">
          {list.map((item) => (
            <div key={item.href} className={`nav-item ${s.nav_item} mx-2 mb-4 flex items-center justify-center ${href == item.href ? "bg-$primary text-white" : "text-$37 border-$af bg-$fa"}`} role="presentation">
              <a onMouseEnter={() => enter(item.href)} className={`${href == item.href ? "text-white" : ""}  p-0 font_size_30`} href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
