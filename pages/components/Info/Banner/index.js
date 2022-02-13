import React from "react";
import s from "./index.module.css";
export default function index() {
  return (
    <>
    <img
      src="/assets/2560/info/banner.png"
      className={`${s.wrap} hidden mobile:block w-100 p-0 relative`}
    ></img>
    <img
      src="/assets/mobile/info/banner.png"
      className={`h_1236 w-100 p-0 relative mobile:hidden`}
    ></img>
    </>
  );
}
