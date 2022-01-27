import React, { useState } from "react";
import s from "./index.module.css";
import Irego from "../Irego";
import Iremo from "../Iremo";
export default function index() {
  const [index, setIndex] = useState(1);
  return (
    <div className={`${s.wrap} flex mt_118 justify-center flex-col  mb_118`}>
      <ul className="product-subnav nav w-100 nav-pills align-items-center flex justify-center items-center">
          <li
            className={`${s.nav_item} d-center mx-3`}
            onClick={() => setIndex(1)}
          >
            <span
              className={`${s.link} ${
                index==1 ? s.active : ""
              } flex items-center justify-center`}
            >
              iReGo下肢机器人
            </span>
          </li>
          <li
            className={`${s.nav_item} d-center mx-3`}
            onClick={() => setIndex(2)}
          >
            <span
              className={`${s.link} ${
                index==2 ? s.active : ""
              } flex items-center justify-center`}
            >iReMo上肢机器人
            </span>
          </li>

      </ul>
      <div className={`${s.wrap}`} id="tablist">
        <div
          className="tab-pane fade show active flex "
          id="honor"
          role="tabpanel"
          aria-labelledby="honor-tab"
        >
         {index==1?<Irego/>:<Iremo/>}
        </div>
      </div>
    </div>
  );
}
