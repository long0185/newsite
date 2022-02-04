import { motion } from 'framer-motion';
import React, { useState } from 'react';
import s from './index.module.css'


const variants = {
	left: {
		translateX: -220,
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
		translateX: 220,
		scale: .8,
		background:'#e9e9e9',
		zIndex:10
	}
}

export default function index({ handleShow, showList=[],number=1 }) {
	const [list, setList] = useState([showList[showList.length-1],...showList,showList[0]]);
	const [num, setNum] = useState(number);
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

	return <div className={`${s.middle} bg-gray-300 opacity-90 pt_104 pb_200 z-10 w-screen flex items-center justify-center`}>
		<ul className={`${s.ul} h-100 w-50`}>
			<div className={`absolute top-50 w-100 z-20 h-20`} >
				<img onClick={() => handleClick('left')} className={`${s.left_icon} cursor-pointer h-100 absolute`} src='/assets/left-active.svg'  ></img>
				<img onClick={() => handleClick('right')} className={`${s.right_icon} cursor-pointer  h-100 absolute`} src='/assets/right-active.svg'  ></img>
			</div>
			<div className={`${s.back}  absolute w-100 flex justify-center items-center`}>
				<button onClick={()=>handleShow(false) } className='text-$color px-5 py-1 bg-white border-1 border-$primary'>返回列表</button></div>

			{
				Array.isArray(list) && list.length>0 && list.map((item,index) => 
				<motion.li key={index} className={`${s.li}`} 
				style={{zIndex:`${item?.id==1?'100':'10'}`}} 
				variants={variants} animate={index<num?'left':index>num?'right':'mid'} >{item?.element}
				</motion.li>)
			}
		</ul>
	</div>
}


