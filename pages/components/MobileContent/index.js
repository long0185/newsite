import { motion } from 'framer-motion';
import React from 'react';
import s from './index.module.css'

export default function index() {
	return <>
	<div className={`${s.wrap} bg-gray-100 w-100 flex flex-col items-center`} >
		<div className={`${s.innovate_2} relative`}>
			<img
				className={`${s.img_1} img-fluid`}
				src="/assets/2560/home/new_2.png"
			// whileHover={{ scale: 1.01, transition: { duration: 0.5 } }}
			// whileTap={{ scale: 1, transition: { duration: 0.5 } }}
			/>
			<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>创新产品</div>
		</div>
		<div className="flex w_972 h_968 mt-3 justify-between">
			<div className="flex flex-col w_622">
				<div className={`relative mb-3`}>
					<img
						className={`w-100 h-100 img-fluid`}
						src="/assets/2560/home/new_1.png"
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>创新技术</div>
				</div>
				<div className={`relative`}>
					<img
						className="img-fluid"
						src="/assets/2560/home/new_3.png"
					// whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
					// whileTap={{ scale: 1, transition: { duration: 0.5 } }}
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>市场活动</div>
				</div>
			</div>
			<div className="flex flex-col flex-1 pl-3 justify-between">
				<div className={`relative`}>
					<motion.img
						className="img-fluid"
						src="/assets/2560/home/new_4.png"
						whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
						whileTap={{ scale: 1, transition: { duration: 0.5 } }}
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>培训通知</div>
				</div>
				<div className={`relative my-3`}>
					<motion.img
						className="img-fluid"
						src="/assets/2560/home/new_5.png"
						whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
						whileTap={{ scale: 1, transition: { duration: 0.5 } }}
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>项目合作</div>
				</div>
				<div className={`relative`}>
					<motion.img
						className="img-fluid"
						src="/assets/2560/home/innovate.png"
						whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
						whileTap={{ scale: 1, transition: { duration: 0.5 } }}
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>金矢快讯</div>
				</div>
			</div>
		</div>

	</div>
	<div className={`${s.wrap} bg-white w-100 flex flex-col items-center`} >
		<div className={`${s.innovate_2} relative`}>
			<img
				className={`${s.img_1} img-fluid`}
				src="/assets/2560/home/new_2.png"
			// whileHover={{ scale: 1.01, transition: { duration: 0.5 } }}
			// whileTap={{ scale: 1, transition: { duration: 0.5 } }}
			/>
			<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>成功案例</div>
		</div>
		<div className="flex w_972 h_968 mt-3 justify-between">
			<div className="flex flex-col w_622">
				<div className={`relative mb-3`}>
					<img
						className={`w-100 h-100 img-fluid`}
						src="/assets/2560/home/new_1.png"
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>成功案例</div>
				</div>
				<div className={`relative`}>
					<img
						className="img-fluid"
						src="/assets/2560/home/new_3.png"
					// whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
					// whileTap={{ scale: 1, transition: { duration: 0.5 } }}
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>成功案例</div>
				</div>
			</div>
			<div className="flex flex-col flex-1 pl-3 justify-between">
				<div className={`relative flex-1 border`}>
					<motion.img
						className="img-fluid h-100 w-100"
						src="/assets/2560/home/example-area.png"
						whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
						whileTap={{ scale: 1, transition: { duration: 0.5 } }}
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>成功案例</div>
				</div>
				<div className={`relative my-3 flex-1`}>
					<motion.img
						className="img-fluid w-100 h-100"
						src="/assets/2560/home/example-personal.png"
						whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
						whileTap={{ scale: 1, transition: { duration: 0.5 } }}
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>成功案例</div>
				</div>
				<div className={`relative flex-1`}>
					<motion.img
						className="img-fluid w-100 h-100"
						src="/assets/2560/home/example-his.png"
						whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
						whileTap={{ scale: 1, transition: { duration: 0.5 } }}
					/>
					<div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>成功案例</div>
				</div>
			</div>
		</div>
	</div>
	</>
}
