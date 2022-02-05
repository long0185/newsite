import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import s from './index.module.css'

const variants = {
	left: {
		translateX: -440,
		scale: .8,
		background:'#e9e9e9',
		zIndex:10
	},
	mid: {
		translateX: 0,
		scale: 1,
		background:'#fff',
		zIndex:1000
	},
	right: {
		translateX: 425,
		scale: .8,
		background:'#e9e9e9',
		zIndex:10
	}
}

let _list = [
	{
	  id: 1,
	  element: <div className="w-100 h-100 flex flex-col pt-5">
		<div className="w-100 flex flex-col items-center justify-center">
		  <span className="font_36 font-black">标题标题标题标题标题标题标题</span>
		  <div className="flex justify-center items-center">
			<img src="/assets/2560/service/useguide/calendar.svg"
			  className={`${s.icon} calendar-icon img-fluid mr-1`} ></img>
			<span className='text-$86'>2021年7月23日</span>
		  </div>
		</div>
		<div className="flex items-center px-5 text-$86">
		  <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
		</div>
		<div className="flex justify-center mt-3">
		  <div className="w-50 bg-gray-600 h-96"></div>
		</div>
		<div className="flex items-center px-5 mt-3 text-$86">
		  <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
		</div>
		<div className="flex justify-center mt-3">
		  <div className="w-50 bg-gray-600 h-60"></div>
		</div>
		<div></div>
	  </div>
	},
	{
	  id: 2,
	  element: <div className="w-100 h-100 flex flex-col pt-5">
		<div className="w-100 flex flex-col items-center justify-center">
		  <span className="font_36 font-black">标题标题标题标题标题标题标题</span>
		  <div className="flex justify-center items-center">
			<img src="/assets/2560/service/useguide/calendar.svg"
			  className={`${s.icon} calendar-icon img-fluid mr-1`} ></img>
			<span className='text-$86'>2021年7月23日</span>
		  </div>
		</div>
		<div className="flex items-center px-5 text-$86">
		  <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
		</div>
		<div className="flex justify-center mt-3">
		  <div className="w-50 bg-gray-600 h-96"></div>
		</div>
		<div className="flex items-center px-5 mt-3 text-$86">
		  <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
		</div>
		<div className="flex justify-center mt-3 mb-5">
		  <div className="w-50 bg-gray-600 h-60"></div>
		</div>
		<div></div>
	  </div>
	},
	{
	  id: 3,
	  element: <div className="w-100 h-100 flex flex-col pt-5">
		<div className="w-100 flex flex-col items-center justify-center">
		  <span className="font_36 font-black">标题标题标题标题标题标题标题</span>
		  <div className="flex justify-center items-center">
			<img src="/assets/2560/service/useguide/calendar.svg"
			  className={`${s.icon} calendar-icon img-fluid mr-1`} ></img>
			<span className='text-$86'>2021年7月23日</span>
		  </div>
		</div>
		<div className="flex items-center px-5 text-$68">
		  <span>缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
		</div>
		<div className="flex justify-center mt-3">
		  <div className="w-50 bg-gray-600 h-96"></div>
		</div>
		<div className="flex items-center px-5 mt-3 text-$68">
		  <span >缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容</span>
		</div>
		<div className="flex justify-center mt-3">
		  <div className="w-50 bg-gray-600 h-60"></div>
		</div>
		<div></div>
	  </div>
	}
  ]


export default function applicationdetail() {
	const router = useRouter()
	const [list, setList] = useState([_list[_list.length-1],..._list,_list[0]]);
	const [num, setNum] = useState(1);
	const handleClick = (direction) => {
		if (direction == 'left') {
			const newNum = num-1<=0?0:num-1;
			setNum(newNum)
		}
		if (direction == 'right') {
			const newNum = num+1>=list.length-1?list.length-1:num+1;
			setNum(newNum)
		}
	}
	return <div>
		<Navbar />
		<div className="mt_104">
		<div className={`${s.middle} bg-gray-300 opacity-100 pt_104 pb_200 z-10 w-screen flex items-center justify-center`}>
		<ul className={`${s.ul} h-100`}>
			<div className={`absolute top_45 w-100 z-20 h-20`} >
				<img onClick={() => handleClick('left')} className={`${s.left_icon} cursor-pointer h-100 absolute`} src='/assets/left-active.svg'  ></img>
				<img onClick={() => handleClick('right')} className={`${s.right_icon} cursor-pointer  h-100 absolute`} src='/assets/right-active.svg'  ></img>
			</div>
			<div className={`${s.back}  absolute w-100 flex justify-center items-center`}>
				<button onClick={()=>router.back() } className='rounded text-$color px-5 py-1 bg-white border-1 border-$primary'>返回列表</button></div>

			{
				Array.isArray(list) && list.length>0 && list.map((item,index) => 
				<motion.li key={index} className={`${s.li} rounded-xl shadow-2xl`} 
				style={{zIndex:`${item?.id==1?'100':'10'}`}} 
				variants={variants} animate={index<num?'left':index>num?'right':'mid'} >{item?.element}
				</motion.li>)
			}
		</ul>
	</div>	
		</div>
	</div>
}
