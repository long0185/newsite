import React from "react";
import Application from "./components/example/Application";
import NavBar from "./components/Navbar";
const ExpampleIrego = () => {
  return (
    <div>
      <NavBar />
      <div className="w-screen mt_104">
        <div className="h_147 w-100 mobile:hidden flex justify-center items-center">
          <a
            className="font_36 text-$37 h_91 w_375 bg-white border-1 border-$primary flex items-center justify-center mr-4 rounded-lg"
            href=""
          >
            iReGo临床应用
          </a>
          <a
            className="font_36 text-white h_91 w_375 bg-$primary   flex items-center justify-center ml-4 rounded-lg"
            href=""
          >
            iReMo临床应用
          </a>
        </div>
        <img
          className=" hidden mobile:block h_786 w-100 img-fluid"
          src="/assets/2560/example/banner.png"
          alt=""
        />
        <img
          className=" mobile:hidden h_1236 w-100 img-fluid"
          src="/assets/mobile/example/banner.png"
          alt=""
        />
      </div>
      <Application />
    </div>
  );
};

export default ExpampleIrego;
