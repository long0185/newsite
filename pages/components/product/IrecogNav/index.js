import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function IregoNav() {
  const router = useRouter();
  const [href, setHref] = useState("#usefn");
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
      href: "#usefn",
      name: "使用功能",
    },
    {
      href: "#feature",
      name: "产品特点",
    },
    {
      href: "/service-guide",
      name: "使用指南",
    },
  ];
  return (
    <ul
      className="irego-nav nav w-100  nav-pills  d-flex justify-content-center bg-white"
      id="pills-tab"
      role="tablist"
    >
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
