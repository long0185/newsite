import React from "react";
import { getImgUrl } from "./components/company/HonorSubnav";
import Application from "./components/example/Application";
import NavBar from "./components/Navbar";
const ExpampleIrego = () => {
  return (
    <div className="min_height">
      <NavBar />
      <div className="w-screen mt_104">
        <div className="h_147 w-100 mobile:hidden flex justify-center items-center">
          <a className="font_36 text-white h_91 w_375 bg-$primary  flex items-center justify-center mr-4 rounded-lg" href="">
            iReGo临床应用
          </a>
          <a className="font_36 text-$37 h_91 w_375 bg-white border-1 border-$primary   flex items-center justify-center ml-4 rounded-lg" href="/example-iremo">
            iReMo临床应用
          </a>
        </div>
        <img className=" hidden mobile:block h_786 w-100 img-fluid" src={getImgUrl("example_irego")} alt="" />
        <img className=" mobile:hidden h_1236 w-100 img-fluid" src={getImgUrl("m_example_irego")} alt="" />
      </div>
      <Application />
    </div>
  );
};

export default ExpampleIrego;
