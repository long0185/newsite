import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
      href: "#qualitya",
      name: "投放效果",
    },
    {
      href: "#qualityb",
      name: "使用指南",
    },
  ];
  return (
    <ul className="irego-nav nav w-100  nav-pills  d-flex justify-content-center bg-white">
      {list.map((item) => (
        <li key={item.href} className="nav-item" role="presentation">
          <a
            onMouseEnter={() => enter(item.href)}
            className={`nav-link p-0 ${href == item.href ? "active" : ""}`}
            href={item.href}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
