import React, { useState } from "react";
import s from "./index.module.css";
import GuideItem from '../GuideItem'
export default function index() {
  const [list, setList] = useState([1]);
  return (
    <div className={`w-100 d-center flex-column mt_63`}>
      {list.map((item,index)=><div key={index} className={`w-screen mb_118 flex overflow-hidden`}>
        <div
        className={` flex justify-center`}>
          <GuideItem title={`iReGo操作指南  康复计划制定${index+1}`} />
        </div>
      </div>)}
      <div className="flex">
        <button onClick={()=>setList([...list,1])} className="bg-$primary text-white px-5 py-2 rounded-lg">Show more</button>
      </div>
    </div>
  );
}
