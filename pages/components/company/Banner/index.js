import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { u_variants } from "../../product/IregoAppearance";
import s from "./index.module.css";

let _list = [
  {
    name: "关于金矢",
    href: "#about",
    active: true,
  },
  {
    name: "公司团队",
    href: "#team",
    active: false,
  },
  {
    name: "发展历程",
    href: "#ibmcom-home",
    active: false,
  },
  {
    name: "资质荣誉",
    href: "#honor",
    active: false,
  },
  {
    name: "合作单位",
    href: "#unit",
    active: false,
  },
  {
    name: "联系方式",
    href: "#contact",
    active: false,
  },
];
export default function index() {
  const [list, setList] = useState(_list);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let scrollTop = document.documentElement.scrollTop;
      console.log("scrollTop", scrollTop);
      if (scrollTop < 600) {
        const newList = list.map((item) => {
          if (item.href == "#about") {
            return {
              ...item,
              active: true,
            };
          } else {
            return {
              ...item,
              active: false,
            };
          }
        });
        setList(newList);
      }
      if (scrollTop > 600 && scrollTop < 1200) {
        const newList = list.map((item) => {
          if (item.href == "#team") {
            return {
              ...item,
              active: true,
            };
          } else {
            return {
              ...item,
              active: false,
            };
          }
        });
        setList(newList);
      }
      if (scrollTop > 1200 && scrollTop < 1700) {
        const newList = list.map((item) => {
          if (item.href == "#history") {
            return {
              ...item,
              active: true,
            };
          } else {
            return {
              ...item,
              active: false,
            };
          }
        });
        setList(newList);
      }
      if (scrollTop > 1700 && scrollTop < 1850) {
        const newList = list.map((item) => {
          if (item.href == "#honor") {
            return {
              ...item,
              active: true,
            };
          } else {
            return {
              ...item,
              active: false,
            };
          }
        });
        setList(newList);
      }
      if (scrollTop > 1850 && scrollTop < 2014) {
        const newList = list.map((item) => {
          if (item.href == "#unit") {
            return {
              ...item,
              active: true,
            };
          } else {
            return {
              ...item,
              active: false,
            };
          }
        });
        setList(newList);
      }
      if (scrollTop > 2040) {
        const newList = list.map((item) => {
          if (item.href == "#contact") {
            return {
              ...item,
              active: true,
            };
          } else {
            return {
              ...item,
              active: false,
            };
          }
        });
        setList(newList);
      }
    });
    return window.removeEventListener("scroll", () => {});
  }, []);
  const hanleClick = (href) => {
    const newList = list.map((item) => {
      if (item.href == href) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setList(newList);
  };

  return (
    <>
      <div id="about" ref={myRef} className={`${s.banner} hidden mobile:flex flex-col items-center justify-center relative`}>
        <motion.img
          style={{
            translateY: 100,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          src="/assets/2560/company/sec.png"
          className={`${s.banner_img} relative`}
        ></motion.img>
        <motion.div
          style={{
            translateY: 100,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={`${s.banner_text} mt-5`}
        >
          <span className={`${s.title} px-2 py-1 ml-2`}>公司简介</span>
          <span className={`${s.desc} leading-10`}>上海金矢机器人科技有限公司是专业从事肢体康复机器人研发、生产、销售为一体的高科技公司。基于大数据、云计算、5G通讯技术，已完成下肢、上肢、认知等多款智能康复机器人研发，形成了软硬件结合的整套肢体康复解决方案。</span>
        </motion.div>
        <motion.div
          style={{
            translateY: 100,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={`${s.banner_text} m-3`}
        >
          <span className={`${s.title} py-1 px-2 ml-2`}>公司背景</span>
          <span className={`${s.desc} leading-10`}>上海金矢机器人坐落于中国(上海)自由贸易试验区临港新片区，是专业从事智能康复机器人研发、生产、销售的高新技术企业。公司研发实力雄厚，拥有由高校教授、千人学者、海归博士等组成的专业研发团队。参与科技部重点研发计划、国家自科基金、省部级机器人课题多项，拥有多项发明专利和计算机软件著作权，核心技术处于国际领先水平。金矢机器人未来目标是成为中国康复装备行业的领军企业。</span>
        </motion.div>
        <div className="fixed  top-52 z-10 left-10 flex flex-col">
          {list.map((item, index) => (
            <a onClick={() => hanleClick(item.href)} onMouseEnter={() => hanleClick(item.href)} className={`rounded ${item.active ? "bg-$primary text-white" : "text-$primary"} my-2 px-2 flex items-center text-$primary  hover:bg-$primary hover:text-white `} href={item.href} key={index}>
              <span className={``}>●</span>
              <span className={`${item.active ? "block" : "hidden"} px-2 py-1`}>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div id="about" ref={myRef} className={`${s.m_banner}  mobile:hidden flex flex-col items-center relative`}>
        <img src="/assets/2560/company/sec.png" className={`${s.banner_img} relative mt_118`}></img>
        <div className={`${s.m_banner_text} mt-16`}>
          <span className={`${s.title} px-2 py-1 ml-2 font_30`}>公司简介</span>
          <span className={`${s.desc} leading-loose font_30`}>上海金矢机器人科技有限公司是专业从事肢体康复机器人研发、生产、销售为一体的高科技公司。基于大数据、云计算、5G通讯技术，已完成下肢、上肢、认知等多款智能康复机器人研发，形成了软硬件结合的整套肢体康复解决方案。</span>
        </div>
        <div className={`${s.m_banner_text} mt-16`}>
          <span className={`${s.title} py-1 px-2 ml-2 font_30`}>公司背景</span>
          <span className={`${s.desc} leading-loose font_30`}>上海金矢机器人坐落于中国(上海)自由贸易试验区临港新片区，是专业从事智能康复机器人研发、生产、销售的高新技术企业。公司研发实力雄厚，拥有由高校教授、千人学者、海归博士等组成的专业研发团队。参与科技部重点研发计划、国家自科基金、省部级机器人课题多项，拥有多项发明专利和计算机软件著作权，核心技术处于国际领先水平。金矢机器人未来目标是成为中国康复装备行业的领军企业。</span>
        </div>
        <div className="hidden fixed  top-52 z-10 left-10 mobile:flex flex-col">
          {list.map((item, index) => (
            <a onClick={() => hanleClick(item.href)} onMouseEnter={() => hanleClick(item.href)} className={`rounded ${item.active ? "bg-$primary text-white" : "text-$primary"} my-2 px-2 flex items-center text-$primary  hover:bg-$primary hover:text-white `} href={item.href} key={index}>
              <span className={``}>●</span>
              <span className={`${item.active ? "block" : "hidden"} px-2 py-1`}>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className={`w-100 flex flex-col mobile:flex-row justify-between`}>
        <motion.img
          style={{
            translateX: -100,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          src="/assets/2560/company/p_1.png"
          className={`flex-1 hidden mobile:block relative h_729`}
        ></motion.img>
        <img src="/assets/2560/company/p_1.png" className={`${s.m_top_img} mobile:hidden relative`}></img>
        <div className={`${s.m_img_wrap} mobile:hidden flex overflow-hidden`}>
          <div className={`flex flex-col flex-1`}>
            <div className={`${s.m_center_top} relative w-100`}>
              <img className="w-100 h-100" src="/assets/2560/company/p_2.png" />
            </div>
            <div className={`${s.m_center_bottom} flex-1  bg-gray-400 relative`}>
              <img className="h-100 w-100" src="/assets/2560/company/p_3.png" />
              <div className={`${s.m_yellow} text-white flex flex-col absolute z-20 items-center justify-center`}>
                <span className={`${s.big_title} font_size_30 font-black text-white`}>愿景</span>
                <span className={`${s.big_title} font_size_24 text-white`}>科技重塑人生</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 h-100">
            <div className={`${s.m_right_top_img} flex-1 relative`}>
              <img src="/assets/mobile/company/desc/p2.png" className={`w-100 h-100`}></img>
              <div className={`${s.m_right_desc} absolute z-20 flex flex-col`}>
                <span className="font-black font_30">公司使命</span>
                <span className="font_24">金矢机器人致力于用先进的康复理念+智能化的</span>
                <span className="font_24">康复机器人产品助力用户回归家庭、回归社会。</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mobile:flex flex-col h_729">
          <img src="/assets/2560/company/p_2.png" className={`${s.center_top}`}></img>
          <div className={`${s.center_bottom} bg-gray-400 relative w-100`}>
            <img className="w-100 h-100" src="/assets/2560/company/p_3.png" />
            <div className={`${s.yellow} text-white flex flex-col absolute z-20 items-center justify-center`}>
              <span className={`${s.big_title} font_size_30 font-black text-white`}>愿景</span>
              <span className={`${s.big_title} font_size_24 text-white`}>科技重塑人生</span>
            </div>
          </div>
        </div>
        <motion.div
          style={{
            translateX: 100,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={`hidden mobile:flex flex-col flex-1 h_729`}
        >
          <div className={`${s.right_top_img} relative w-100`}>
            <img src="/assets/2560/company/p_4.png" className={`w-100 h-100 img-fluid`}></img>
            <div className={`${s.right_desc} absolute z-20 flex flex-col`}>
              <span className="font-black font_30">公司使命</span>
              <span className="font_24">金矢机器人致力于用先进的康复理念+智能化的</span>
              <span className="font_24">康复机器人产品助力用户回归家庭、回归社会。</span>
            </div>
          </div>

          <img src="/assets/2560/company/p_6.png" className={`${s.right_top_img} flex-1 relative w-100 h-100 img-fluid`}></img>
        </motion.div>
      </div>
    </>
  );
}
