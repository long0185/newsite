import { motion } from 'framer-motion';
import React, { useState } from 'react';
import s from './index.module.css'


const variants = {
	1: {
		translateX: -220,
		scale: .8,
		background:'#e9e9e9',
		zIndex:10
	},
	2: {
		translateX: 0,
		scale: 1,
		background:'#fff',
		zIndex:100
	},
	3: {
		translateX: 220,
		scale: .8,
		background:'#e9e9e9',
		zIndex:10
	}
}

export default function index({ handleShow, showList }) {
	const [list, setList] = useState([...showList]);
	const handleClick = (direction) => {
		if (direction == 'left') {
			const temp = list[0];
			const newList = list.slice(1, list.length)
			setList([...newList, temp])
		}
		if (direction == 'right') {
			const temp = list[list.length - 1]
			const newList = list.slice(0, list.length - 1)
			setList([temp, ...newList])
		}
	}

	return <div className={`${s.middle} bg-gray-300 pt_104 pb_200 z-50 w-screen flex items-center justify-center`}>
		<ul className={`${s.ul} h-100 w-50`}>
			<div className={`absolute top-50 w-100 z-20 h-20`} >
				<img onClick={() => handleClick('left')} className={`${s.left_icon} cursor-pointer h-100 absolute`} src='/assets/left-active.svg'  ></img>
				<img onClick={() => handleClick('right')} className={`${s.right_icon} cursor-pointer  h-100 absolute`} src='/assets/right-active.svg'  ></img>
			</div>
			<div className={`${s.back}  absolute w-100 flex justify-center items-center`}>
				<button onClick={()=>handleShow(false) } className='text-$color px-5 py-1 bg-white border-1 border-$primary'>返回列表</button></div>

			{
				list.map((item,index) => <motion.li className={`${s.li}`} style={{zIndex:`${item.id==1?'100':'10'}`}} variants={variants} animate={item.id.toString()}  >{item.element}</motion.li>)
			}
		</ul>
	</div>
}


