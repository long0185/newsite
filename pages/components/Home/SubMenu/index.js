import React, { useState } from "react";
import left_img from "assets/2560/home/logo.svg";
import right_img from "assets/2560/home/nav.svg";
import s from "./index.module.css";
import Image from "next/image";
export default function index() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {};

  return (
    <div className={`${s.menu} flex items-center justify-between absolute`}>
      <div className={`${s.left_img} relative`}>
        <Image layout="fill" src={left_img} />
      </div>
      <div className={`${s.right_img} relative`}>
        <Image layout="fill" src={right_img} onClick={handleClick} />
      </div>
    </div>
  );
}
