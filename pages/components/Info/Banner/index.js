/** @format */

import React from "react";
import { getImgUrl } from "../../company/HonorSubnav";
import s from "./index.module.css";
export default function index() {
  return (
    <>
      <img src={getImgUrl("info_tip")} className={`${s.wrap} hidden mobile:block w-100 p-0 relative`}></img>
      <img src={getImgUrl("m_info_tip")} className={`h_1236 w-100 p-0 relative mobile:hidden`}></img>
    </>
  );
}
