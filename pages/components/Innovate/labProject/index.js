import React from "react";
import Banner from "../../Banner";

export default function index() {
  return (
    <div className="w-100 flex flex-col items-center">
      <Banner img="/assets/2560/innovate/title-pro.png" />
      <div className="flex m-4">
        <div className="w_857 h_492 relative mr-2">
          <img
            src="/assets/2560/innovate/project-1.png"
            className="w-100 h-100 img-fluid"
          />
          <div className="h-10 bg-gray-800 opacity-60 text-white flex items-center justify-center font_18">
            上海中医药大学
          </div>
        </div>
        <div className="w_857 h_492 relative ml-2">
          <img
            src="/assets/2560/innovate/project-3.png"
            className="w-100 h-100 img-fluid"
          />
          <div className="h-10 bg-gray-800 opacity-60 text-white flex items-center justify-center font_18">
            上海中医药大学
          </div>
        </div>
      </div>
      <div className="flex my-4 mb_175">
        <div className="w_857 h_492 relative mr-2">
          <img
            src="/assets/2560/innovate/project-4.png"
            className="w-100 h-100 img-fluid"
          />
          <div className="h-10 bg-gray-800 opacity-60 text-white flex items-center justify-center font_18">
            上海中医药大学
          </div>
        </div>
        <div className="w_857 h_492 relative ml-2">
          <img
            src="/assets/2560/innovate/project-2.png"
            className="w-100 h-100 img-fluid"
          />
          <div className="h-10 bg-gray-800 opacity-60 text-white flex items-center justify-center font_18">
            上海中医药大学
          </div>
        </div>
      </div>
    </div>
  );
}
