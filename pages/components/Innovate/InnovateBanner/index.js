import React from "react";
import { getImgUrl } from "../../company/HonorSubnav";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`bg-info relative`}>
      <img src={getImgUrl("innovate_ire")} className={`${s.ire_banner} hidden mobile:block relative`} />
      <img src={getImgUrl("m_innovate_ire")} className={`${s.m_ire_banner}  mobile:hidden relative`} />
    </div>
  );
}
