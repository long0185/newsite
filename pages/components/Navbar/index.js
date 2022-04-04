import * as React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import s from "./index.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const variants = {
  open: { translateY: "6.3rem", transition: { duration: 0.5 } },
  closed: { translateY: 0, transition: { duration: 0.5 } },
};
const mobileVariants = {
  open: { translateX: "100%", transition: { duration: 0.5 } },
  close: { translateX: "0", transition: { duration: 0.5 } },
};
const subnav = {
  product: [
    {
      path: "/product-irego",
      domain: "product",
      name: "iReGo下肢康复机器人",
    },
    {
      path: "/product-iremo",
      domain: "product",
      name: "iReMo上肢康复机器人",
    },
    {
      path: "/product-irecog",
      domain: "product",
      name: "iReCog认知机器人",
    },
  ],
  innovate: [
    {
      path: "/innovate-ire",
      domain: "innovate",
      name: "iRe+爱睿家",
    },
    {
      path: "/innovate-lab",
      domain: "innovate",
      name: "联合实验室",
    },
  ],
  service: [
    {
      path: "/service-maintain",
      domain: "service",
      name: "维修服务",
    },
    {
      path: "/service-guide",
      domain: "service",
      name: "使用指南 ",
    },
    {
      path: "/service-train",
      domain: "service",
      name: "培训服务 ",
    },
  ],
  example: [
    {
      path: "/example-irego",
      domain: "expample",
      name: "iReGo临床应用",
    },
    {
      path: "/example-iremo",
      domain: "expample",
      name: "iReMo临床应用 ",
    },
  ],
  company: [
    {
      path: "/company",
      domain: "company",
      name: "关于金矢",
    },
    {
      path: "/company-join",
      domain: "company",
      name: "招贤纳士",
    },
  ],
  info: [
    {
      path: "/info-expert",
      domain: "info",
      name: "专家访谈",
    },
    {
      path: "/info-infomation",
      domain: "info",
      name: "金矢快讯",
    },
    {
      path: "/info-tip",
      domain: "info",
      name: "康复小贴士 ",
    },
  ],
};
const ResponsiveAppBar = () => {
  const [navkey, setNavkey] = React.useState("");
  const [isOpen, setisOpen] = React.useState(false);
  const [m_open, setM_open] = React.useState(false);
  const enter = (domain = "") => {
    const _domain = domain.replace("/", "");
    setNavkey(_domain);
    setisOpen(true);
  };
  const leave = (id) => {
    setisOpen(false);
  };

  const navBar = [
    {
      name: "首页",
      domain: "/",
      path: "/",
    },
    {
      name: "产品",
      domain: "/product",
      path: "/product-irego",
      children: subnav.product,
    },
    {
      name: "创新",
      domain: "/innovate",
      path: "/innovate-ire",
      children: subnav.innovate,
    },
    {
      name: "服务",
      domain: "/service",
      path: "/service-maintain",
      children: subnav.service,
    },
    {
      name: "案例",
      domain: "/example",
      path: "/example-irego",
      children: subnav.example,
    },
    {
      name: "公司",
      domain: "/company",
      path: "/company",
      children: subnav.company,
    },
    {
      name: "资讯",
      domain: "/info",
      path: "/info-expert",
      children: subnav.info,
    },
  ];

  let { pathname, push } = useRouter();
  console.log("pathname", pathname);
  const [state, setState] = React.useState({ scrollTop: 0 });

  return (
    <div className="fixed top-0 z-50 w-100 p-0 flex flex-col nav-wrap" onMouseLeave={leave}>
      <nav className={`flex navbar z-20 w-100 py-1 relative items-center justify-between ${isOpen ? "border-bottom" : ""} `}>
        <div className="block mobile:hidden relative ml-16 h-14 w-14">
          <img onClick={() => setM_open(!m_open)} className="w-100 h-100 img-fluid" src="/assets/2560/menu.svg" />
        </div>
        <img onClick={() => push("/")} src="/assets/2560/home/logo.svg" className="hidden mobile:block navbar-brand relative img-fluid cursor-pointer"></img>
        <img onClick={() => push("/")} src="/assets/2560/home/logo.svg" className="mobile:hidden m_logo ml-20 relative cursor-pointer"></img>
        <ul className={`hidden  mobile:flex flex-row justify-center pl-5`}>
          {navBar.map((item) => (
            <li key={item.path} className={`relative  h-100 navbar_li ${pathname.split("-")[0] == item.domain ? "active" : ""} `}>
              <Link href={item.path}>
                <span
                  onMouseEnter={() => {
                    if (item.path != "/") {
                      enter(item.domain);
                    }
                  }}
                  className={`nav-link cursor-pointer nav_link font_24 ${pathname.split("-")[0] == item.domain ? "active" : ""}`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <motion.div variants={mobileVariants} animate={`${m_open ? "open" : "close"}`} className={`${s.m_div} overflow-y-auto mobile:hidden z-10 fixed top-0 bottom-0`} style={{ backgroundColor: "rgba(0,0,0,.8)" }}>
          <motion.ul className={`${s.m_ul} absolute opacity-100 top-0 left-0 overflow-y-auto bg-white z-20 border pt_110 mobile_navbar mobile:hidden flex flex-col  justify-center`}>
            <li
              onClick={() => {
                console.log("close");
                setM_open(!m_open);
              }}
              className={`${s.close_icon} absolute z-20 top-0 z-100 right-0 `}
            >
              <img onClick={() => console.log("close")} src="/assets/2560/home/close.svg" className="h-20 w-20 img-fluid p-4 ml-5"></img>
            </li>
            <li className={`${s.m_top} justify-center items-center z-10 absolute border-bottom top-0 flex w-100`}>
              <img onClick={() => push("/")} src="/assets/2560/home/logo.svg" className="m_logo relative img-fluid cursor-pointer mr-"></img>
            </li>
            {navBar.map((item) => (
              <li key={item.path} className={`relative mt_110 ml_110 pr_110 `}>
                {item.path == "/" ? (
                  <Link href={item.path}>
                    <span className="font_36 text-$37">{item.name}</span>
                  </Link>
                ) : (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full rounded-lg focus-visible:ring focus-visible:ring-opacity-75 bottom">
                          <span className="font_36 text-$37">{item.name}</span>
                          <ChevronUpIcon className={`${open ? "transform rotate-180" : "rotate-90"} h-20 opacity-50`} />
                        </Disclosure.Button>
                        {Array.isArray(item.children) &&
                          item.children.map((ele, i) => (
                            <Disclosure.Panel key={i} className={`${i == 0 ? "border-top" : i == item.children.length - 1 ? "border-bottom pb-16" : ""} pt-16 text-$37 pl-10`}>
                              <Link href={ele.path}>
                                <span className="pl-10 font_size_30 text-$68">{ele.name}</span>
                              </Link>
                            </Disclosure.Panel>
                          ))}
                      </>
                    )}
                  </Disclosure>
                )}
              </li>
            ))}
            <li className="ml-110 pl_110 pr_110 h_517 mt_110 bg-gray-100 w-100 flex flex-col items-center">
              <div className={`${s.m_bottom} mt-20 flex items-center justify-center`}>
                <img className={`${s.m_phone}`} src="/assets/2560/home/phone.svg" />
                <span className={`${s.m_num} font_30 text-$86`}>咨询热线：400-120-8888</span>
              </div>
              <div className={`${s.m_bottom} mt-10 flex items-center justify-center`}>
                <img className={`${s.m_phone} mr-2`} src="/assets/2560/home/cart.svg" />
                <span className={`${s.m_num} font_30 text-$86 ml-2 `}>金矢天猫商城</span>
              </div>
            </li>
          </motion.ul>
        </motion.div>

        <div className=" mobile:hidden flex pr-16 justify-around items-center">
          <img src="/assets/2560/home/share.svg" className="w_53 h_53 mr-16" alt="" />
          <img src="/assets/2560/home/cart.svg" alt="" className="w_65" />
        </div>
        <div className="navbar-right hidden mobile:flex justify-around">
          <div className="relative">
            <img src="/assets/2560/home/share.svg" className="img-fluid" alt="" />
          </div>
          <div className="relative cart ml-5">
            <img src="/assets/2560/home/cart.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </nav>
      <motion.nav className="hidden sub-navbar w-screen mobile:flex items-center absolute bg-white  justify-center z-10 border" animate={isOpen ? "open" : "closed"} variants={variants}>
        {navkey &&
          subnav[navkey].map((item, index) => {
            return (
              <Link href={item.path} key={item.path + item.index}>
                <div className="">
                  <span className={`nav-link cursor-pointer hover:bg-$primary hover:text-white mx-5 ${item.path == pathname ? "main_bg" : ""} `}>{item.name}</span>
                </div>
              </Link>
            );
          })}
      </motion.nav>
    </div>
  );
};
export default ResponsiveAppBar;
