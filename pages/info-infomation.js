/** @format */

import React from "react";
import Banner from "./components/Info/Banner_info";
import Infomation from "./components/Info/Infomation";
import NavBar from "./components/Navbar";
export default function info() {
  return (
    <>
      <NavBar />
      <div className='mt_104 min_height'>
        <Banner />
        <Infomation />
      </div>
    </>
  );
}
