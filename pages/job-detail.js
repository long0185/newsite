import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import s from './index.module.css'

const variants = {
	left: {
		translateX: -440,
		scale: .8,
		opacity:.7,
		background: '#e9e9e9',
		zIndex: 10
	},
	mid: {
		translateX: 0,
		scale: 1,
		opacity:1,
		background: '#fff',
		zIndex: 1000
	},
	right: {
		translateX: 425,
		opacity:.7,
		scale: .8,
		background: '#e9e9e9',
		zIndex: 10
	}
}
const _list = [
	{
		name: "Web前端开发工程师（Html5)",
		area: "上海临港新区",
		agree: "本科",
		rang: "1",
		num: "2",
		salary: "8-20",
	},
	{
		name: ".NET(C#/WPF)开发工程师",
		area: "上海临港新区",
		agree: "本科",
		rang: "2",
		num: "1",
		salary: "10-15",
	},
	{
		name: "Unity3D开发工程师（VR/MR)",
		area: "上海临港新区",
		agree: "本科",
		rang: "1",
		num: "1",
		salary: "10-15",
	},
	{
		name: "电气工程师",
		area: "上海临港新区",
		agree: "大专",
		rang: "1",
		num: "2",
		salary: "6-10",
	},
	{
		name: "销售助理",
		area: "上海临港新区",
		agree: "本科",
		rang: "1年",
		num: "1人",
		salary: "8-20",
	},
	{
		name: "市场助理",
		area: "上海临港新区",
		agree: "本科",
		rang: "1年",
		num: "1人",
		salary: "4.5-6",
	},
];
const showList = _list.map((item, index) => {
	return {
		id: index,
		element: <div className="w-100 h-100 flex flex-col pt-5">
			<div className="w-100 flex flex-col items-start justify-start p-5">
				<span className="font_36 font-black mb-10">{item.name}</span>
				<div className="flex justify-center items-center mt-3">
					<span className="font_24 font-black mr-5">职位薪资:</span>
					<span className="font_24 font-$color">{item.salary}k</span>
				</div>
				<div className="flex justify-center items-center mt-3">
					<span className="font_24 font-black mr-5">工作年限:</span>
					<span className="font_24 font-$color">{item.rang}年</span>
				</div>
				<div className="flex justify-center items-center mt-3">
					<span className="font_24 font-black mr-5">招聘人数:</span>
					<span className="font_24 font-$color">{item.num}</span>
				</div>
				<div className="flex justify-center items-center mt-3">
					<span className="font_24 font-black mr-5">工作地点</span>
					<span className="font_24 font-$color">{item.area}</span>
				</div>
				<div className="flex justify-center items-center mt-3">
					<span className="font_24 font-black">岗位职责:</span>
				</div>
				<div className="flex justify-center items-start flex-col mt-3">
					<p>1. 本科以上学历，具有2年以上相关工作经验，根据产品设计需求，实现、维护及优化WEB前端页面和业务功能</p>
					<p>2. 负责公司移动端，PC端产品研发，有实际移动平台web前端开发和HTML5实践工作经验</p>
					<p>3. 根据产品需求负责完成开发和调试工作，深入解析代码, 提升代码执行效率</p>
				</div>
				<div className="flex justify-center items-center mt-3">
					<span className="font_24 font-black">技能要求:</span>
				</div>
				<div className="flex justify-center items-start flex-col mt-3">
					<p>1.有扎实的javascript基础（作用域，继承，闭包，面向对象设计等）</p>
					<p>2.熟悉Vue、React等框架，具有Vue实际项目经验，（熟悉Echarts，element-ui等可视化组件者优先考虑）</p>
					<p>3.根据产品需求负责完成开发和调试工作，深入解析代码, 提升代码执行效率</p>
					<p>4.熟悉各主流浏览器和移动端的兼容性情况及调试方法</p>
					<p>5.有良好的团队合作能力，主动性强，执行能力强，具备良好的问题定位分析能力</p>
				</div>
			</div>
		</div>
	}
})



export default function applicationdetail() {
	const router = useRouter()
	const [list, setList] = useState(showList);
	const [num, setNum] = useState(1);
	const handleClick = (direction) => {
		if (direction == 'left') {
			const newNum = num - 1 <= 0 ? 0 : num - 1;
			setNum(newNum)
		}
		if (direction == 'right') {
			const newNum = num + 1 >= list.length - 1 ? list.length - 1 : num + 1;
			setNum(newNum)
		}
	}
	return <div>
		<Navbar />
		<div className="mt_104">
			<div className={`${s.middle} bg-gray-300 opacity-100 pt_104 pb_200 z-10 w-screen flex items-center justify-center`}>
				<ul className={`${s.ul} h-100`}>
					<div className={`absolute top_45 w-100 z-20 h-20`} >
						<img onClick={() => handleClick('left')} className={`${s.left_icon} cursor-pointer h-100 absolute`} src='/assets/2560/home/left-arrow.svg'  ></img>
						<img onClick={() => handleClick('right')} className={`${s.right_icon} cursor-pointer  h-100 absolute`} src='/assets/2560/home/right-arrow.svg'  ></img>
					</div>
					<div className={`${s.back}  absolute w-100 flex justify-center items-center`}>
						<button onClick={() => router.back()} className={`${s.back_btn} rounded text-$color px-5 py-1 bg-white border-1 border-$primary mr-2`}>返回列表</button>
						<button onClick={() => router.back()} className={`${s.back_btn} rounded text-white px-5 py-1 bg-$primary border-1 border-$primary ml-2`}>提交简历</button></div>

					{
						Array.isArray(list) && list.length > 0 && list.map((item, index) =>
							<motion.li key={index} className={`${s.li} rounded-xl shadow-2xl`}
								style={{ zIndex: `${item?.id == 1 ? '100' : '10'}` }}
								variants={variants} animate={index < num ? 'left' : index > num ? 'right' : 'mid'} >{item?.element}
							</motion.li>)
					}
				</ul>
			</div>
		</div>
	</div>
}
