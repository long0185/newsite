import React from "react";
import { getImgUrl } from "../../company/HonorSubnav";
import s from "./index.module.css";
export default function index() {
  return (
    <div className={`relative`}>
      <img className="h_786 hidden mobile:block img-fluid w-100" src={getImgUrl("service_use")} />
      <img className="h_1236  mobile:hidden img-fluid w-100" src={getImgUrl("m_service_use")} />
    </div>
  );
}
