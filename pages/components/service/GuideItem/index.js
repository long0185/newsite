import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "./index.module.css";
const list = [{
  img_src: '/assets/2560/service/useguide/irego.png',
  video_src: '/assets/2560/service/useguide/play.png'
}, {
  img_src: '/assets/2560/service/useguide/irego.png',
  video_src: '/assets/2560/service/useguide/play.png'
}, {
  img_src: '/assets/2560/service/useguide/irego.png',
  video_src: '/assets/2560/service/useguide/play.png'
}]
export default function index({title,img_src='',handleShow}) {
  const router = useRouter()
  
  return (
    <div  className='flex flex-col items-center' style={{width:'100vw'}} >
      <div className={`flex`}>
        {list.map(item => (<div onClick={()=>router.push('guidedetail')} className={`${s.img_wrap}`}>
          <div className={`${s.img} relative`}>
            <img
              className="w-100 h-100"
              src={img_src}
            />
            <div className={`absolute ${s.sm_img_wrap}`}>
              <div className={`${s.sm_img} relative`}>
                <img
                  src={item.video_src}
                />
              </div>
            </div>
          </div>
          <div className={`${s.title} border`}>
            <div className={s.big_title}>{title}</div>
            <div className={`${s.sm_title} flex items-center`}>
              <div className={`${s.calendar} relative`}>
                <img
                  src={"/assets/2560/service/useguide/calendar.svg"}
                />
              </div>
              <span className={s.date}>2020年7月23日</span>
            </div>
          </div>
        </div>))}
      </div>
      <div className={`flex mt_118`}>
        {list.map(item => (<div onClick={()=>router.push('guidedetail')} className={`${s.img_wrap}`}>
          <div className={`${s.img} relative`}>
            <img
            className="img-fluid w-100 h-100"
              src={img_src}
            />
            <div className={`absolute ${s.sm_img_wrap}`}>
              <div className={`${s.sm_img} relative`}>
                <img
                  src={item.video_src}
                />
              </div>
            </div>
          </div>
          <div className={`${s.title} border`}>
            <div className={s.big_title}>{title}</div>
            <div className={`${s.sm_title} flex items-center`}>
              <div className={`${s.calendar} relative`}>
                <img
                  src={"/assets/2560/service/useguide/calendar.svg"}
                />
              </div>
              <span className={s.date}>2020年7月23日</span>
            </div>
          </div>
        </div>))}

      </div>
    </div>


  );
}
