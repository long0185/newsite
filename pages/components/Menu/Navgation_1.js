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
  { name: "产品", link: "https://irego.cn/out/product-irego.html" },
  { name: "iReGo下肢康复机器人", link: "https://irego.cn/out/product-irego.html" },
  { name: "iReGo上肢康复机器人", link: "https://irego.cn/out/product-irego.html" },
  { name: "iReCog认知机器人", link: "https://irego.cn/out/product-irego.html" },
];
const innovate = [
  { name: "创新", link: "https://irego.cn/out/innovate-ire.html" },
  { name: "iRe+爱睿家", link: "https://irego.cn/out/innovate-ire.html" },
  { name: "联合实验室", link: "https://irego.cn/out/innovate-lab.html" },
];
const service = [
  { name: "服务", link: "https://irego.cn/out/serveice-maintain.html" },
  { name: "维修服务", link: "https://irego.cn/out/serveice-maintain.html" },
  { name: "使用指南", link: "https://irego.cn/out/service-guide.html" },
  { name: "培训服务", link: "https://irego.cn/out/service-train.html" },
];
const example = [
  { name: "案例", link: "https://irego.cn/out/example-irego.html" },
  { name: "iReGo临床应用", link: "https://irego.cn/out/example-irego.html" },
  { name: "iReMo临床应", link: "https://irego.cn/out/example-iremo.html" },
];

const company = [
  { name: "公司", link: "https://irego.cn/out/company.html" },
  { name: "关于金矢", link: "https://irego.cn/out/company.html" },
  { name: "招贤纳士", link: "https://irego.cn/out/company-join.html" },
];
const info = [
  { name: "资讯", link: "https://irego.cn/out/info-expert.html" },
  { name: "专家访谈", link: "https://irego.cn/out/info-expert.html" },
  { name: "金矢快讯", link: "https://irego.cn/out/info-infomation.html" },
  { name: "康复小贴士", link: "https://irego.cn/out/info-tip.html" },
];

export default Navigation;
