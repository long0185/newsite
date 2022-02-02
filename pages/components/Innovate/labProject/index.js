import React from "react";
import s from './index.module.css'
import Banner from "../../Banner";
const list = [
  {
    id: 1,
    img_src: '/assets/2560/Innovate/project-1.png',
    desc: '上海中医药大学'
  },
  {
    id: 2,
    img_src: '/assets/2560/Innovate/project-1.png',
    desc: '上海中医药大学'
  },
  {
    id: 3,
    img_src: '/assets/2560/Innovate/project-1.png',
    desc: '上海中医药大学'
  },
  {
    id: 4,
    img_src: '/assets/2560/Innovate/project-1.png',
    desc: '上海中医药大学'
  },
]
export default function index() {
  return (
    <div className="w-100 flex flex-col items-center">
      <Banner img="/assets/2560/Innovate/title-pro.png" />
      <div className="flex m-4 h_567">
        <div className={`w_857 h_567 relative mr-3 border ${s.img_wrap}` }>
          <img
            src="/assets/2560/Innovate/project-1.png"
            className="w-100 h-100 img-fluid absolute z-10"
          />
          <div className="w-100 h-100 opacity-01 flex justify-center items-end absolute z-20  hover:opacity-60 text-transparent hover:text-white cursor-pointer">
            <span className=" top-8 bg-black  text-center py-3 w-100">上海中医药大学</span>
          </div>
        </div>
        <div className="w_857 relative ml-3 h_567">
          <img
            src="/assets/2560/Innovate/project-3.png"
            className="w-100 h-100 img-fluid absolute z-10"
          />
           <div className="w-100 h-100 opacity-01 flex justify-center items-end absolute z-20  hover:opacity-60 text-transparent hover:text-white cursor-pointer">
            <span className=" top-8 bg-black  text-center py-3 w-100">上海中医药大学</span>
          </div>
        </div>
      </div>
      <div className="flex my-2 mb_175">
      <div className={`w_857 h_567 relative mr-3  ${s.img_wrap}` }>
          <img
            src="/assets/2560/Innovate/project-4.png"
            className="w-100 h-100 img-fluid absolute z-10"
          />
          <div className="w-100 h-100 opacity-01 flex justify-center items-end absolute z-20  hover:opacity-60 text-transparent hover:text-white cursor-pointer">
            <span className=" top-8 bg-black  text-center py-3 w-100">上海中医药大学</span>
          </div>
        </div>
        <div className={`w_857 h_567 relative ml-3  ${s.img_wrap}` }>
          <img
            src="/assets/2560/Innovate/project-2.png"
            className="w-100 h-100 img-fluid absolute z-10"
          />
          <div className="w-100 h-100 opacity-01 flex justify-center items-end absolute z-20  hover:opacity-60 text-transparent hover:text-white cursor-pointer">
            <span className=" top-8 bg-black  text-center py-3 w-100">上海中医药大学</span>
          </div>
        </div>
      </div>
    </div>
  );
}
