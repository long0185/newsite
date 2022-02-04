import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import s from "./index.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const variants = {
  open: { translateY: "6.3rem", transition: { duration: 0.5 } },
  closed: { translateY: 0, transition: { duration: 0.5 } },
};
const mobileVariants = {
  open: { translateX: 0, transition: { duration: 0.5 } },
  closed: { translateY: '-100%', transition: { duration: 0.5 } },
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
  const enter = (domain = "") => {
    const _domain = domain.replace("/", "");
    console.log("_domain", domain);
    setNavkey(_domain);
    console.log("navkey", navkey);
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
      chilren: subnav.company,
    },
    {
      name: "资讯",
      domain: "/info",
      path: "/info-expert",
      children: subnav.info,
    },
  ];

  let { pathname } = useRouter();
  console.log("pathname", pathname);
  const [state, setState] = React.useState({ scrollTop: 0 });

  return (
    <div
      className="  navbar fixed top-0 z-50 w-100 p-0 flex flex-col nav-wrap"
      onMouseLeave={leave}
    >
      <nav
        className={`navbar flex z-20 w-100 p-0 ${isOpen ? "border-bottom" : ""
          } `}
      >
        <div className="block mobile:hidden relative ml-5 w-20 h-20">
          <img className="w-100 h-100 img-fluid" src="/assets/2560/menu.svg" />
        </div>
        <img
          src="/assets/2560/home/logo.svg"
          className="navbar-brand position-relative img-fluid"
        ></img>
        <ul
          className={`hidden navbar-nav mobile:flex flex-row justify-center pl-5`}
        >
          {navBar.map((item) => (
            <li
              key={item.path}
              className={`relative  h-100 navbar_li ${pathname.split("-")[0] == item.domain ? "active" : ""
                } `}
            >
              <Link href={item.path}>
                <span
                  onMouseEnter={() => {
                    if (item.path != "/") {
                      enter(item.domain);
                    }
                  }}
                  className={`nav-link cursor-pointer nav_link font_24  ${pathname.split("-")[0] == item.domain ? "active" : ""
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='mobile:hidden z-10 fixed top-0 bottom-0 left-0 right-0 bg-black opacity-80'>
          <motion.ul
            variants={mobileVariants}
            animate='open'
            className="fixed opacity-100 top-0 left-0 overflow-y-auto bg-white z-20 navbar-nav border pt_110 pl_110 pb_110 pr_110 mobile_navbar mobile:hidden flex flex-col  w-9/12 justify-center">
            {navBar.map((item) => (
              <li key={item.path} className={`relative mt_110 `}>
                {item.path == "/" ? (
                  <Link href={item.path}>
                    <span className="font_36">{item.name}</span>
                  </Link>
                ) : (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full rounded-lg focus-visible:ring focus-visible:ring-opacity-75">
                          <span className="font_36">{item.name}</span>
                          <ChevronUpIcon
                            className={`${open ? 'transform rotate-180' : 'rotate-90'
                              } h-20`}
                          />
                        </Disclosure.Button>
                        {Array.isArray(item.children) && item.children.map((ele, i) =>
                          <Disclosure.Panel key={i} className={`${i == 0 ? 'border-top' : i == item.children.length - 1 ? 'border-bottom pb-10' : ''} pt-10 text-$37 pl-10`}>
                            <Link href={ele.path}>
                              <span className="pl-10">{ele.name}</span>
                            </Link>
                          </Disclosure.Panel>
                        )}
                      </>
                    )}
                  </Disclosure>
                )}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="navbar-right d-flex justify-content-around">
          <div className="position-relative">
            <img
              src="/assets/2560/home/cart.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="position-relative cart ml-5">
            <img
              src="/assets/2560/home/share.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </nav>
      <motion.nav
        className="hidden sub-navbar w-screen md:flex items-center absolute bg-white  justify-center z-10 border"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        {navkey &&
          subnav[navkey].map((item, index) => {
            return (
              <Link href={item.path} key={item.path + item.index}>
                <div className="">
                  <span
                    className={`nav-link cursor-pointer hover:bg-$primary hover:text-white ${item.path == pathname ? "main_bg" : ""
                      } `}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
      </motion.nav>
    </div>
  );
};
export default ResponsiveAppBar;
