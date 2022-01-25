import React from "react";
import s from "./index.module.css";

export default function index({ children, classes = "" }) {
  return (
    <div className={`${s.desc} w-100 flex items-center justify-center`}>
      <div className={`w-980 block text-center d-flex flex-col ${classes}`}>
        {children}
      </div>
    </div>
  );
}
