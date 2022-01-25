import React from "react";
import SubNav from "./components/company/Subnav";
import Navbar from "./components/Navbar";
import banner_zp from "assets/2560/company/zp.png";
import title_zp from "assets/2560/company/title_zp.png";
import Image from "next/image";
import Banner from "./components/Banner";
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
export default function company() {
  return (
    <div className="">
      <Navbar />
      <SubNav />
      <div className="w-100 h_865 relative">
        <Image layout="fill" src={banner_zp} />
      </div>
      <div className="w-100">
        <Banner img={title_zp} />
      </div>
      <div className="w-100 flex justify-center">
        <table className="table table-hover w_1567">
          <thead className=" bg-gray-400 ">
            <tr className=" text-center">
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
              <tr key={index} className="text-center">
                <td className="font_18">{index + 1}</td>
                <td className="font_18">{item.name}</td>
                <td className="font_18">{item.area}</td>
                <td className="font_18">{item.agree}</td>
                <td className="font_18">{item.rang}年</td>
                <td className="font_18">{item.num}人</td>
                <td className="font_18">{item.salary}K</td>
                <td className="font_18">
                  <button className="btn_44 hover:bg-yellow-500">
                    查看详情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
