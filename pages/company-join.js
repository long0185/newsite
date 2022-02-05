import React, { useState } from "react";
import SubNav from "./components/company/Subnav";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import s from './index.module.css'
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const list = [
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
const showList = list.map((item, index) => {
  return {
    id: index,
    element: <div className="w-100 h-100 flex flex-col pt-5">
      <div className="w-100 flex flex-col items-start justify-start p-5">
        <span className="font_24 font-black mb-10">{item.name}</span>
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
export default function company() {
  const [num, setNum] = useState(0);
  const router = useRouter()
  const handleClick = (direction) => {
    if(direction=='left'){
      const newNum = num-1<0?0:num-1;
      setNum(newNum)
    }
    if(direction=='right'){
      const newNum = num+1>2?2:num+1;
      setNum(newNum)
    }
  };

  return (
    <div className="">
      <Navbar />
      <SubNav />
      <div className="w-100 h_865 relative">
        <img className="w-100 h-100" src="/assets/2560/company/zp.png"></img>
      </div>
      <div className="w-100">
        <Banner img={'/assets/2560/company/title_zp.png'} />
      </div>
      <div className="w-100 flex justify-center relative">
        <div className="w_1567 flex mb_100 overflow-hidden">
          <motion.div
            animate={{
              translateX: `${33.33 * -num}%`
            }}
            transition={{
              duration: 2
            }}
            className="w-300 flex">
            <table className="w_1567">
              <thead className="h_77 my-2 py-2 bg-gray-200 text-$color border">
                <tr className="h_77 my-2 py-2 text-center z-10 border-1 border-$primary" style={{ borderLeft: 0, borderRight: 0 }}>
                  <th className="c_title my-2">序号</th>
                  <th className="c_title">职位名称</th>
                  <th className="c_title">工作地点</th>
                  <th className="c_title">最低学历</th>
                  <th className="c_title">年限</th>
                  <th className="c_title">招聘人数</th>
                  <th className="c_title">职位薪资</th>
                  <th className="c_title">详细信息</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={index} className="text-center h_90 border-bottom hover:bg-white">
                    <td className="font_18 ">{index + 1}</td>
                    <td className="font_18 border-x">{item.name}</td>
                    <td className="font_18">{item.area}</td>
                    <td className="font_18 border-x">{item.agree}</td>
                    <td className="font_18">{item.rang}年</td>
                    <td className="font_18 border-x">{item.num}人</td>
                    <td className="font_18">{item.salary}K</td>
                    <td style={{ borderRight: 0 }} className="font_18 border-x">
                      <button onClick={() => router.push('/job-detail')} className="btn_44 bg-gray-300 text-white hover:bg-$primary">
                        查看详情
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="w_1567">
              <thead className="h_77 bg-gray-200 text-$color border">
                <tr className="h_77 text-center z-10 border-1 border-$primary" style={{ borderLeft: 0, borderRight: 0 }}>
                  <th className="c_title">序号</th>
                  <th className="c_title">职位名称</th>
                  <th className="c_title">工作地点</th>
                  <th className="c_title">最低学历</th>
                  <th className="c_title">年限</th>
                  <th className="c_title">招聘人数</th>
                  <th className="c_title">职位薪资</th>
                  <th className="c_title">详细信息</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={index} className="text-center h_90 border-bottom hover:bg-white">
                    <td className="font_18 ">{index + 1}</td>
                    <td className="font_18 border-x">{item.name}</td>
                    <td className="font_18">{item.area}</td>
                    <td className="font_18 border-x">{item.agree}</td>
                    <td className="font_18">{item.rang}年</td>
                    <td className="font_18 border-x">{item.num}人</td>
                    <td className="font_18">{item.salary}K</td>
                    <td style={{ borderRight: 0 }} className="font_18 border-x">
                      <button onClick={() => router.push('/job-detail')} className="btn_44 bg-gray-300 text-white hover:bg-$primary">
                        查看详情
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="w_1567">
              <thead className="h_77 bg-gray-200 text-$color border">
                <tr className="h_77 text-center z-10 border-1 border-$primary" style={{ borderLeft: 0, borderRight: 0 }}>
                  <th className="c_title">序号</th>
                  <th className="c_title">职位名称</th>
                  <th className="c_title">工作地点</th>
                  <th className="c_title">最低学历</th>
                  <th className="c_title">年限</th>
                  <th className="c_title">招聘人数</th>
                  <th className="c_title">职位薪资</th>
                  <th className="c_title">详细信息</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={index} className="text-center h_90 border-bottom hover:bg-white">
                    <td className="font_18 ">{index + 1}</td>
                    <td className="font_18 border-x">{item.name}</td>
                    <td className="font_18">{item.area}</td>
                    <td className="font_18 border-x">{item.agree}</td>
                    <td className="font_18">{item.rang}年</td>
                    <td className="font_18 border-x">{item.num}人</td>
                    <td className="font_18">{item.salary}K</td>
                    <td style={{ borderRight: 0 }} className="font_18 border-x">
                      <button onClick={() => router.push('/job-detail')} className="btn_44 bg-gray-300 text-white hover:bg-$primary">
                        查看详情
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
        <div className={`absolute top-40 px-20 flex justify-around w-100 z-20 h-20`} >
          <img onClick={() => handleClick('left')} className={`cursor-pointer left-32 h-100 absolute`} src='/assets/2560/home/left-arrow.svg'  ></img>
          <img onClick={() => handleClick('right')} className={`cursor-pointer right-32 h-100 absolute`} src='/assets/2560/home/right-arrow.svg'  ></img>
        </div>
      </div>
      <div className="flex mb_100 justify-center w-100 mt_118">
        <div onClick={() => setNum(0)} className={`${s.slide} ${num == 0 ? 'bg-$primary' : 'bg-$gray'}  cursor-pointer`}></div>
        <div onClick={() => setNum(1)} className={`${s.slide} ${num == 1 ? 'bg-$primary' : 'bg-$gray'}  mx-5 cursor-pointer`}></div>
        <div onClick={() => setNum(2)} className={`${s.slide} ${num == 2 ? 'bg-$primary' : 'bg-$gray'}  cursor-pointer`}></div>
      </div>
    </div>
  );
}
