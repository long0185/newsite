import React, { useState } from "react";
import s from "./index.module.css";

import Banner from "../../../components/Banner";
import { motion } from "framer-motion";

const TeamCard = ({
  img_src = "",
  name = "",
  badge = "",
  title = "",
  desc = [],
}) => {
  return (
    <div className={`${s.expert_img_wrap} flex items-center `}>
      <img src={img_src} className={`${s.expert_img}`} />
      <div className="flex flex-col ml-3 self-start">
        <div className="flex items-center">
          {" "}
          <span className="font_30 font-black text-black">{name}</span>
          <span className="ml-3 px-3 py-1 bg-$primary text-white">{badge}</span>
        </div>
        <span className="font_18 text-$37">{title}</span>
        {desc.length > 0 &&
          desc.map((item, index) => (
            <div key={index} className="flex  text-$86">
              <span className="span-point relative font_16 text-$86 pl-4 my-1">
                {item}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};
const managerList = [
  {
    id: 0,
    img_src: "/assets/2560/company/lyw.png",
    name: "李育文",
    title: "CEO / 博士、东方学者",
    desc: [
      "加拿大麦吉尔大学MCGILL 博士",
      "加拿大普惠公司等8年项目研发和管理经验",
    ],
  },
  {
    id: 1,
    img_src: "/assets/2560/company/wzy.png",
    name: "王志勇",
    title: "副总经理 / 硕士",
    desc: [
      "原上海发那科机电有限公司华东区大客户经理",
      "10年机器人控制应用经验",
    ],
  },
  {
    id: 2,
    img_src: "/assets/2560/company/st.png",
    name: "宋韬",
    title: "副总经理 / 博士",
    desc: ["加拿大瑞尔森大学访问学者", "10年以上机器人设计经验"],
  },
  {
    id: 3,
    img_src: "/assets/2560/company/mzf.png",
    name: "明志发",
    title: "副总经理 / 硕士",
    desc: ["原上海微电子设备有限公司", "6年控制系统软件开发经验"],
  },
  {
    id: 4,
    img_src: "/assets/2560/company/zq.png",
    name: "张倩",
    title: "市场总监 / 硕士",
    desc: ["原中国医药教育协会医装委办公室副主任", "5年医疗行业从业经验"],
  },
  {
    id: 5,
    img_src: "/assets/2560/company/lds.png",
    name: "李德胜",
    title: "销售总监/硕士",
    desc: ["原500强外企大客户经理", "多年机器人研发以及大客户管理经验"],
  },
  {
    id: 6,
    img_src: "/assets/2560/company/lqb.png",
    name: "荚启波",
    title: "生产部部长 / 硕士",
    desc: ["原500强外企大客户经理", "多年机器人研发以及大客户管理经验"],
  },
  {
    id: 7,
    img_src: "/assets/2560/company/zdd.png",
    name: "赵冬冬",
    title: "品质部部长 / 硕士",
    desc: ["原上海微电子设备有限公司", "6年控制系统软件开发经验"],
  },
];
const MMangerCard = ({ img_src = "", name = "", title = "", desc = [] }) => {
  return (
    <div
      className={`${s.m_teamer} flex flex-col justify-around items-center mb_43 mx-3`}
    >
      <img src={img_src} className={`${s.m_img} relative`}></img>
      <div className="flex flex-col items-start pt-6 w_400 px-3 py-3 h-100 ">
        <span className="font_30 font-black">{name}</span>
        <span className="font_size_20 text-$37">{title}</span>
        {desc.map((item, index) => (
          <span
            key={index}
            className="span-point relative font_16 text-$86 pl-4 my-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
const MangerCard = ({ img_src = "", name = "", title = "", desc = [] }) => {
  return (
    <>
      <div
        className={`${s.m_teamer} mobile:hidden pt-7 flex flex-col items-center mb_43 mx-3`}
      >
        <img src={img_src} className={`${s.m_img} relative`}></img>
        <div className="flex flex-col items-start w_400 pt-3 flex-1 ">
          <span className="font_36 font-black">{name}</span>
          <span className="font_size_30 text-$37">{title}</span>
          {desc.map((item, index) => (
            <span
              key={index}
              className="m-span-point relative font_size_24 text-$86 pl-4 my-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`${s.teamer} hidden mobile:flex flex-row justify-around pl-4 items-center mb_43 mx-3`}
      >
        <img src={img_src} className={`${s.img} relative`}></img>
        <div className="flex flex-col items-start pt-6 w_400 px-3 py-3 h-100 ">
          <span className="font_30 font-black">{name}</span>
          <span className="font_size_20 text-$37">{title}</span>
          {desc.map((item, index) => (
            <span
              key={index}
              className="span-point relative font_16 text-$86 pl-4 my-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default function index() {
  const [num, setnum] = useState(0);
  const handClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < -1 ? -1 : num - 1;
      console.log("newNum", newNum);
      setnum(newNum);
    }
    if (direction == "right") {
      const newNum = num + 1 > 0 ? 0 : num + 1;
      console.log("newNum", newNum);
      setnum(newNum);
    }
  };
  return (
    <div id="team" className="d-center flex-col">
      <Banner
        img={"/assets/2560/company/title_team.png"}
        desc={
          <>
            <span>
              公司组织结构完整，下设：技术部、生产部、营销部、品质部、设计部、财务部、行政部七大部门，研发团队：博士5人，硕士6人，本科19人。
            </span>
            <span>
              核心研发成员6人，研发团队：博士5人，硕士19人，本科15人。
              研发团队核心人员具有参与美国、德国相关的康复机器人研发经验，掌握核心关键技术。
            </span>
          </>
        }
      />

      <div
        className={`${s.wrap} flex-wrap w-screen flex items-center justify-center mt-5`}
      >
        {managerList.map((item, index) => (
          <MangerCard
            img_src={item.img_src}
            name={item.name}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <div className="font_36 flex items-center">专家团队</div>
      <div
        className={`${s.expert} hidden w-screen mobile:flex items-center justify-center`}
      >
        <div className="flex-1 pl-28 flex justify-center">
          <img
            onClick={() => handClick("left")}
            src="/assets/2560/company/left.svg"
            className={`${s.left_arrow} relative cursor-pointer`}
          ></img>
        </div>
        <div className="w_2100 flex overflow-hidden">
          <motion.div
            animate={{
              translateX: `${num * 50}%`,
            }}
            transition={{
              duration: 2,
            }}
            className="w-200 flex justify-around py-5"
          >
            <div className="flex flex-column mobile:flex-row w_2100  justify-between px-4">
              <TeamCard
                img_src="/assets/2560/company/gs.png"
                name="郭帅"
                badge="工学专家"
                title="专家顾问 / 教授、博导"
                desc={[
                  "上海大学机电工程与自动化学院PI",
                  "上海机器人研究所副所长",
                  "中国康复技术转化与产业促进专业委员会常委",
                ]}
              />
              <TeamCard
                img_src="/assets/2560/company/qianlaoshi.png"
                name="钱楷"
                badge="设计学专家"
                title="专家顾问 / 设计总监、文化学者、艺术家"
                desc={[
                  "韩国文化部高级访问学者",
                  "韩国卡露文化高级艺术顾问",
                  "人工智能应用场景设计与人机交互（UI/UX）设计专家",
                  "李克强总理及多国政要世博会安保证章设计者",
                ]}
              />
              <TeamCard
                img_src="/assets/2560/company/hxy.png"
                name="华续赟"
                badge="医学专家"
                title="副教授 / 副主任医师、硕导"
                desc={[
                  "上海中医药大学附属岳阳医院骨伤研究所PI",
                  "中医智能康复教育部工程研究中心青年PI",
                  "中国康复医学会脑功能检测与调控专委会全国委员&青年工作组副组长",
                ]}
              />
            </div>
            <div className="flex w_2100 justify-between px-4">
              <TeamCard
                img_src="/assets/2560/company/gs.png"
                name="郭帅"
                badge="工学专家"
                title="专家顾问 / 教授、博导"
                desc={[
                  "上海大学机电工程与自动化学院PI",
                  "上海机器人研究所副所长",
                  "中国康复技术转化与产业促进专业委员会常委",
                ]}
              />
              <TeamCard
                img_src="/assets/2560/company/qianlaoshi.png"
                name="钱楷"
                badge="设计学专家"
                title="专家顾问 / 设计总监、文化学者、艺术家"
                desc={[
                  "韩国文化部高级访问学者",
                  "韩国卡露文化高级艺术顾问",
                  "人工智能应用场景设计与人机交互（UI/UX）设计专家",
                  "李克强总理及多国政要世博会安保证章设计者",
                ]}
              />
              <TeamCard
                img_src="/assets/2560/company/hxy.png"
                name="华续赟"
                badge="医学专家"
                title="副教授 / 副主任医师、硕导"
                desc={[
                  "上海中医药大学附属岳阳医院骨伤研究所PI",
                  "中医智能康复教育部工程研究中心青年PI",
                  "中国康复医学会脑功能检测与调控专委会全国委员&青年工作组副组长",
                ]}
              />
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex pr-28 justify-center">
          <img
            onClick={() => handClick("right")}
            src="/assets/2560/company/right.svg"
            className={`${s.left_arrow} relative cursor-pointer`}
          ></img>
        </div>
      </div>
      <div
        className={`${s.m_expert} mobile:hidden flex items-center justify-center`}
      >
        <div className="w-100 flex overflow-hidden">
          <motion.div
            animate={{
              translateX: `${num * 50}%`,
            }}
            transition={{
              duration: 2,
            }}
            className="w-200 flex flex-col justify-around py-5"
          >
            <div>
              <div
              className={`mobile:hidden ${s.m_ceo} flex items-center justify-around mb_43`}
            >
              <img
                src="/assets/2560/company/gs.png"
                className={`${s.expert_m_img} relative`}
              ></img>
              <div className="flex flex-col items-start self-start flex-1 ml-3 px-3 h-100 ">
                <div className="flex items-center">
                <span className="font_30 font-black mb-1">郭帅</span>
                <span className="ml-3 font_size_30 px-3 py-1 bg-$primary text-white">工学专家</span>
                </div>
                <span className="font_30 text-$37 mb-1">
                专家顾问 / 教授、博导
                </span>
                <span className="m-span-point relative font_size_24 text-$86 pl-3">
                上海大学机电工程与自动化学院PI
                </span>
                <span className="m-span-point relative font_size_24 text-$86 pl-3">
                上海机器人研究所副所长
                </span>
                <span className="m-span-point relative font_size_24 text-$86 pl-3">
                中国康复技术转化与产业促进专业委员会
                </span>
              </div>
            </div>
            <div
              className={`mobile:hidden ${s.m_ceo} flex items-center justify-around mb_43`}
            >
              <img
                src="/assets/2560/company/qianlaoshi.png"
                className={`${s.expert_m_img} relative`}
              ></img>
              <div className="flex flex-col flex-1 items-start px-3 ml-3 h-100 ">
                <div className="flex items-center">
                <span className="font_30 font-black mb-1">钱楷</span>
                <span className="ml-3 px-3 py-1 bg-$primary text-white">设计学专家</span>
                </div>
                <span className="font_size_30 text-$37 mb-1">
                专家顾问 / 设计总监、文化学者、艺术家
                </span>
                <span className="m-span-point relative font_size_24 text-$86 pl-3">
                韩国文化部高级访问学者
                </span>
                <span className="m-span-point relative font_size_24 text-$86 pl-3">
                韩国卡露文化高级艺术顾问
                </span>
                <span className="m-span-point relative break-words font_size_24 text-$86 pl-3">人工智能应用场景设计与人机交互（UI/UX）设计专家</span>
                {/* <span className="m-span-point relative font_size_24 text-$86 pl-3">
                李克强总理及多国政要世博会安保证章设计者
                </span> */}
              </div>
            </div>
            <div
              className={`mobile:hidden ${s.m_ceo} flex items-center justify-around mb_43`}
            >
              <img
                src="/assets/2560/company/hxy.png"
                className={`${s.expert_m_img} relative`}
              ></img>
              <div className="flex flex-col flex-1 items-start px-3 ml-3 h-100 ">
                <div className="flex items-center">
                <span className="font_30 font-black mb-1">华续赟</span>
                <span className="ml-3 px-3 py-1 bg-$primary text-white">医学专家</span>
                </div>
                <span className="font_size_30 text-$37 mb-1">
                副教授 / 副主任医师、硕导
                </span>
                <span className="m-span-point relative font_size_24 text-$86 pl-3">
                上海中医药大学附属岳阳医院骨伤研究所PI
                </span>
                <span className="m-span-point relative font_size_24 text-$86 pl-3">
                中医智能康复教育部工程研究中心青年PI
                </span>
                <span className="m-span-point relative font_size_24 text-$86 pl-3">
                中国康复医学会脑功能检测与调控专委会全国委员
                </span> 
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-100 justify-center mt-10 mobile:m-0 flex mb_100">
        <div
          onClick={() => setnum(-1)}
          className={`${s.slide} ${
            num == -1 ? "bg-$primary" : "bg-$gray"
          }  cursor-pointer`}
        ></div>
        <div
          onClick={() => setnum(0)}
          className={`${s.slide} ${
            num == 0 ? "bg-$primary" : "bg-$gray"
          }  mx-5 cursor-pointer`}
        ></div>
      </div>
    </div>
  );
}
