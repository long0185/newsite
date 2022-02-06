import React from 'react';
import s from './index.module.css'
export default function index({ list = [], handleShow }) {
	return <div
		className={`${s.modal} fixed top-0 bottom-0 left-0 right-0`}>
		
		<div className="absolute z-60  left-0 right-0 bottom-0 top-0 bg-$color opacity-70"></div>
		<div className={`${s.container} flex flex-col pb_100 absolute   opacity-100 bg-white `}>
		<div onClick={()=>handleShow(false)} className={`${s.close} cursor-pointer absolute`}>
			<img src='/assets/2560/service/useguide/close.png' className='img-fluid w-100 h-100' />
		</div>
			<div className={`${s.wrap} w-100 border-bottom flex-1 items-center flex flex-col mb_100 overflow-auto`}>
				<span className="font_36 mt_100">
					iReGo操作指南 康复计划制定
				</span>
				<div className={`${s.video} bg-gray-400 mt_100`}>

				</div>
				<span className='text-$37 font_24 mt-10'>
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
				</span>
				<div className='mt-10'>
					<div className={`${s.img} bg-gray-500`}></div>
				</div>
				<span className='text-$37 font_24 mt-10 mb-10'>
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
				</span>
			</div>
			<div className='flex justify-center items-center  left-0 z-80 right-0 bottom-30' >
				<button className='w_194 h_48 mr-2 border border-$primary' >上一篇</button>
				<button className='w_194 h_48 ml-2 bg-$primary text-white'>下一篇</button>
			</div>
		</div>
		
	</div>;
}