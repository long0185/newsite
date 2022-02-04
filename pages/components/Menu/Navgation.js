import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import s from "./index.module.css";
const variants = {
  open: {
    height: "100%",
    paddingTop: "14%",
    opacity: 1,
    transition: { duration: 1 },
  },
  closed: {
    height: "1%",
    paddingTop: 0,
    transitionStart: { opacity: 0 },
    transition: { duration: 1 },
  },
};

const Navigation = ({ isOpen }) => (
  <motion.div
    className={`${s.ul} bg-white 
    flex items-start justify-center`}
    variants={variants}
  >
    <div className="menu-line  h-25 self-start mt-5 mr-5 bg-gray-200 "></div>
    <div className="mx-5">
      {products.map((i, index) => (
        <MenuItem i={i.name} key={index} path={i.link} isTitle={index == 0} />
      ))}
    </div>
    <div className="menu-line  h-25 self-start mt-5 mr-5 bg-gray-200 "></div>
    <div className="mx-5">
      {innovate.map((i, index) => (
        <MenuItem i={i.name} key={index} path={i.link} isTitle={index == 0} />
      ))}
    </div>
    <div className="menu-line  h-25 self-start mt-5 bg-gray-200 mr-15 "></div>
    <div className="mx-5">
      {service.map((i, index) => (
        <MenuItem i={i.name} key={index} path={i.link} isTitle={index == 0} />
      ))}
    </div>
    <div className="menu-line  h-25 self-start mt-5 bg-gray-200 mr-15 "></div>
    <div className="mx-5">
      {example.map((i, index) => (
        <MenuItem i={i.name} key={index} path={i.link} isTitle={index == 0} />
      ))}
    </div>
    <div className="menu-line  h-25 self-start mt-5 bg-gray-200 mr-15"></div>
    <div className="mx-5">
      {company.map((i, index) => (
        <MenuItem i={i.name} key={index} path={i.link} isTitle={index == 0} />
      ))}
    </div>
    <div className="menu-line  h-25 self-start mt-5 bg-gray-200 mr-15 "></div>
    <div className="mx-5">
      {info.map((i, index) => (
        <MenuItem i={i.name} key={index} path={i.link} isTitle={index == 0} />
      ))}
    </div>
    <div className="menu-line  h-25 self-start mt-5 bg-gray-200 "></div>
  </motion.div>
);
const products = [
  { name: "产品", link: "/" },
  { name: "iReGo下肢康复机器人", link: "irego-legs" },
  { name: "iReGo上肢康复机器人", link: "irego-hands" },
  { name: "iReCog认知机器人", link: "irego-cognition" },
];
const innovate = [
  { name: "创新", link: "/" },
  { name: "iRe+爱睿家", link: "innovate-ire" },
  { name: "联合实验室", link: "innovate-experiment" },
];
const service = [
  { name: "服务", link: "/" },
  { name: "维修服务", link: "serveice-maintain" },
  { name: "使用指南", link: "service-guide" },
  { name: "培训服务", link: "service-train" },
];
const example = [
  { name: "案例", link: "/" },
  { name: "iReGo临床应用", link: "example -irego" },
  { name: "iReMo临床应", link: "example-iremo" },
];

const company = [
  { name: "公司", link: "/" },
  { name: "关于金矢", link: "company-about" },
  { name: "招贤纳士", link: "company-join" },
];
const info = [
  { name: "资讯", link: "/" },
  { name: "专家访谈", link: "info-talk" },
  { name: "金矢快讯", link: "info-infomation" },
  { name: "康复小贴士", link: "info-tip" },
];

export default Navigation;
