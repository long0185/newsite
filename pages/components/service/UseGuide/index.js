import Image from "next/image";
import React from "react";
import s from "./index.module.css";
import title_img from "assets/2560/service/maintain/title.png";
import Irego from "../Irego";
export default function index() {
  return (
    <div
      className={`${s.wrap} col-12 p-0 d-flex flex-column align-items-center`}
    >
      <ul
        className="product-subnav nav w-100 nav-pills d-flex justify-content-center align-items-center"
        id="pills-use-tab"
        role="tablist"
      >
        <li className={`${s.nav_item} d-center`} role="presentation">
          <a
            className={`${s.link} active`}
            id="use-irego-tab"
            data-toggle="pill"
            href="#use-irego"
            role="tab"
            aria-controls="use-irego"
            aria-selected="true"
          >
            iReGo下肢机器人
          </a>
        </li>
        <li className={`${s.nav_item} d-center`} role="presentation">
          <a
            className={`${s.link} `}
            id="use-iremo-tab"
            data-toggle="pill"
            href="#use-iremo"
            role="tab"
            aria-controls="use-iremo"
            aria-selected="false"
          >
            iReMo上肢机器人
          </a>
        </li>
      </ul>
      <div className="tab-content " id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="use-irego"
          role="tabpanel"
          aria-labelledby="use-irego-tab"
        >
          <Irego />
        </div>
        <div
          className="tab-pane fade"
          id="use-iremo"
          role="tabpanel"
          aria-labelledby="use-iremo-tab"
        >
          fdaf
        </div>
      </div>
    </div>
  );
}
