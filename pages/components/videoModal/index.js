import React from 'react';
import s from './index.module.css'
export default function index({ list = [], handleShow }) {
	return <div
		className={`${s.modal} fixed top-0 bottom-0 left-0 right-0 overflow-hidden`}>
		<div className="absolute z-60  left-0 right-0 bottom-0 top-0 bg-$color opacity-70"></div>
		<div className={`${s.container} flex flex-col pb_100 absolute   opacity-100 bg-white `}>
			<div onClick={() => handleShow(false)} className={`${s.close} cursor-pointer absolute`}>
				<img src='/assets/2560/service/useguide/close.png' className='img-fluid w-100 h-100' />
			</div>
			<div className={`${s.wrap} w-100 flex-1 items-center flex flex-col mb_43 overflow-auto`}>
				<span className="font_36 mb_43 font-extrabold mb_43">
					iReGo操作指南 康复计划制定
				</span>
				<div className={`${s.video} mb_43 border flex items-center justify-center`}>
						<video className="w-100 h-100" controls>
							<source src="/assets/iremo.mp4" type="video/mp4" />
						</video>
				</div>
				<span className='text-$37 font_size_18 mb_43'>
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
				</span>
				<div className='mb_43'>
					<div className={`${s.img} bg-gray-500`}></div>
				</div>
				<span className='text-$37 font_size_18'>
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
					文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代文字暂代
				</span>
			</div>
			<div className={`${s.btns} flex justify-center border-top pt-16 pb-16 items-center  left-0 z-80 right-0 bottom-30`} >
				<button className={`${s.btn} rounded w_194 h_48 mr-2 border border-$primary`} >上一篇</button>
				<button className={`${s.btn} rounded text-white w_194 h_48 mr-2 border bg-$primary`}>下一篇</button>
			</div>
		</div>

	</div>;
}