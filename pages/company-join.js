import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import s from "./index.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { getImgUrl } from "./components/company/HonorSubnav";

export default function company() {
  const [num, setNum] = useState(0);
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/workname")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            val = val.sort((a, b) => a.OrderNu - b.OrderNu);
            setList(val);
          }
        });
    }
    getList();
  }, []);
  const router = useRouter();
  const handleClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setNum(newNum);
    }
    if (direction == "right") {
      const newNum = num + 1 > 2 ? 2 : num + 1;
      setNum(newNum);
    }
  };

  return (
    <div className="">
      <Navbar />
      {/* <SubNav /> */}
      <div className="w-100 hidden mobile:block h_865 relative">
        <img className="w-100 h-100" src={getImgUrl("company_job")}></img>
      </div>
      <div className="w-100  mobile:hidden h_1236 relative">
        <img className="w-100 h-100" src={getImgUrl("m_company_job")}></img>
      </div>
      <div className="w-100">
        <Banner img={"/assets/2560/company/title_zp.png"} />
      </div>
      <div className="w-100 mobile:hidden flex flex-col items-center">
        {list.map((item, index) => (
          <div onClick={() => router.push(`/job-detail?page=workname&id=${item.id}`)} key={index} className={`${s.m_job_item} flex flex-col justify-around mb_43`}>
            <div className="flex justify-between">
              <span className="font_30 text-$37">{item.Name}</span>
              <span className="font_size_30 text-$primary">{item.Money}</span>
            </div>
            <div className="font_size_24 text-$86 w_425 flex items-center justify-between">
              <span>{item.Place}</span>
              <span>{item.Study}</span>
              <span>{item.Time}年</span>
              <span>{item.Number}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-100 hidden  mobile:flex justify-center relative">
        <div className="w_1567 flex mb_100 overflow-hidden">
          <motion.div
            animate={{
              translateX: `${33.33 * -num}%`,
            }}
            transition={{
              duration: 2,
            }}
            className="w-300 flex"
          >
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
                    <td className="font_18 border-x">{item.Name}</td>
                    <td className="font_18">{item.Place}</td>
                    <td className="font_18 border-x">{item.Study}</td>
                    <td className="font_18">{item.Time}年</td>
                    <td className="font_18 border-x">{item.Number}人</td>
                    <td className="font_18">{item.Money}</td>
                    <td style={{ borderRight: 0 }} className="font_18 border-x">
                      <button onClick={() => router.push(`/job-detail?page=workname&id=${item.id}`)} className="btn_44 bg-gray-300 text-white hover:bg-$primary">
                        查看详情
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
      <div className="w-100 flex flex-col items-center justify-center mb_43">
        <div className="mobile:hidden mb_43">
          {/* <button onClick={() => {}} className="m_l_btn font_size_30  text-$37 border-1 border border-$primary hover:bg-yellow-300 mr-3 ">
            表单下载
          </button> */}
          <button onClick={() => {}} className="m_l_btn font_size_30 bg-$primary text-white hover:bg-yellow-300 ml-3">
            投递简历
          </button>
        </div>
        <div className="mobile:flex mb_43 hidden">
          {/* <button onClick={() => {}} className="l_btn  text-$37 border border-$primary  bg-white hover:bg-yellow-300 mr-3 nav-link">
            表单下载
          </button> */}
          <button onClick={() => {}} className="l_btn  bg-$primary text-white hover:bg-yellow-300 ml-3 nav-link">
            投递简历
          </button>
        </div>
        <span className="font_size_24">简历投递邮箱：zhaopin@ga-robot.com</span>
      </div>
    </div>
  );
}
