import React from "react";
import s from "./index.module.css";

export default function index({ children, classes = "" }) {
  return (
    <div className={`${s.desc} w-100 flex items-center justify-center`}>
      <div className={`hidden mobile:flex w-980 text-center  flex-col ${classes}`}>
        {children}
      </div>
      <div className={` mobile:hidden flex w_740 text-center font_size_24 flex-col ${classes}`}>
        {children}
      </div>
    </div>
  );
}
