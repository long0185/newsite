import React, { useState } from "react";
import s from "./index.module.css";

import Banner from "../../../components/Banner";
import { motion } from "framer-motion";

const TeamCard = ({ img_src = '', name = '', badge = '', title = '', desc = [] }) => {
  return (
    <div className={`${s.expert_img_wrap} flex items-center `}>
      <img src={img_src}
        className={`${s.expert_img} img-fluid`} />
      <div className="flex flex-col ml-3 self-start">
        <div className="flex items-center"> <span className="font_30 font-black text-black">
          {name}
        </span>
          <span className="ml-3 px-3 py-1 bg-$primary text-white">
            {badge}
          </span>
        </div>
        <span className="font_18 text-$37">{title}</span>
        {desc.length > 0 && desc.map((item, index) => (
          <div key={index} className="flex opacity-70 text-$86">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>{item}</span>
          </div>))}
      </div>
    </div>
  )
}

export default function index() {
  const [num, setnum] = useState(0);
  const handClick = (direction) => {
    if (direction == 'left') {
      const newNum = num - 1 < -1 ? -1 : num - 1;
      console.log('newNum', newNum);
      setnum(newNum)
    }
    if (direction == 'right') {
      const newNum = num + 1 > 0 ? 0 : num + 1;
      console.log('newNum', newNum);
      setnum(newNum)
    }
  }
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
              研发团队核心人员具有参与美国、德国相关的康复机器人研发经验，掌握核心关键技术。
            </span>
          </>
        }
      />

      <div
        className={`${s.wrap} w-screen flex items-center justify-center mt-5`}
      >
        <div className={`${s.ceo} mr-4 flex flex-col justify-around pl-4`}>
          <div className="flex mt-2">
            <img
              src="/assets/2560/company/lyw.png"
              className={`${s.img} relative`}
            ></img>
            <div className="flex flex-col ml-3">
              <span className="font_30 font-black">李育文</span>
              <span>CEO / 博士</span>
              <span>东方学者</span>
            </div>
          </div>
          <div className="flex opacity-70 text-$86">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>清华大学本硕，加拿大麦吉尔大学MCGILL 博士</span>
          </div>
          <div className="flex opacity-70 text-$86">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>加拿大普惠公司等8年项目研发和管理经验</span>
          </div>
          <div className=" opacity-70 flex text-$86">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>参与多项机器人与高端制造的跨国研发项目</span>
          </div>
          <div className=" opacity-70 flex text-$86">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>加拿大“工业研发基金奖”获得者</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-2 p-4`}>
          <img
            src="/assets/2560/company/wzy.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30 font-black text-black">王志勇</span>
              <span className="text-black">副总经理 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span className="font_size_18 text-$86" >原上海发那科机电有限公司华东区大客户经理</span>
          </div>
          <div className="opacity-70 flex text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>10年机器人控制应用经验</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-2 p-4`}>
          <img
            src="/assets/2560/company/st.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30 font-black text-black">宋韬</span>
              <span>副总经理 / 博士</span>
            </div>
          </div>
          <div className="flex opacity-70 text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>加拿大瑞尔森大学访问学者</span>
          </div>
          <div className="opacity-70 flex text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>10年以上机器人设计经验</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-2 p-4`}>
          <img
            src="/assets/2560/company/mzf.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30 font-black text-black">明志发</span>
              <span>副总经理 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>原上海微电子设备有限公司</span>
          </div>
          <div className="opacity-70 flex text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>6年控制系统软件开发经验</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/zq.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30 font-black text-black">张倩</span>
              <span>市场总监 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>原中国医药教育协会医装委 办公室副主任</span>
          </div>
          <div className="opacity-70 flex text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>5年医疗行业从业经验</span>
          </div>
        </div>

        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/zdd.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30 font-black text-black">赵冬冬</span>
              <span>品质部部长 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>原上海微电子设备有限公司</span>
          </div>
          <div className="opacity-70 flex text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>6年控制系统软件开发经验</span>
          </div>
        </div>
        <div className={`${s.manager} flex flex-col justify-around mx-4 p-4`}>
          <img
            src="/assets/2560/company/lqb.png"
            className={`${s.img} relative self-center`}
          ></img>
          <div className="flex opacity-70">
            <div className="flex flex-col ">
              <span className="font_30 font-black text-black">荚启波</span>
              <span>生产部部长 / 硕士</span>
            </div>
          </div>
          <div className="flex opacity-70 text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>上海大学专业技术人员</span>
          </div>
          <div className="opacity-70 flex text-$86 ">
            <span className="text_circle bg-gray-600 mt-2 mr-2"></span>
            <span>5年从事于机械设计与生产</span>
          </div>
        </div>
      </div>
      <div className={`${s.expert} w-screen flex items-center justify-center`}>
        <div className="flex-1 pl-28 flex justify-center">
          <img
            onClick={() => handClick('left')}
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
              duration: 2
            }}
            className="w-200 flex justify-around py-5">
            <div className="flex w_2100  justify-between px-4">
              <TeamCard img_src="/assets/2560/company/gs.png" name="郭帅" badge="工学专家" title="专家顾问 / 教授、博导" desc={['上海大学机电工程与自动化学院PI', '上海机器人研究所副所长', '中国康复技术转化与产业促进专业委员会常委']} />
              <TeamCard img_src="/assets/2560/company/qianlaoshi.png" name="钱楷" badge="设计学专家" title="专家顾问 / 设计总监、文化学者、艺术家" desc={['韩国文化部高级访问学者', '韩国卡露文化高级艺术顾问', '人工智能应用场景设计与人机交互（UI/UX）设计专家', '李克强总理及多国政要世博会安保证章设计者']} />
              <TeamCard img_src="/assets/2560/company/gs.png" name="华续赟" badge="医学专家" title="专家顾问 / 教授、华山医院主任" desc={['现任中国医药教育协会康复装备发展促进中心主任委员', '中华医学会物理医学与康复学分会委员', '中国康复医学会脑血管病康复、疼痛康复、创伤康复专业委员会常委']} />
            </div>
            <div className="flex w_2100 justify-between px-4">
              <TeamCard img_src="/assets/2560/company/gs.png" name="郭帅" badge="工学专家" title="专家顾问 / 教授、博导" desc={['上海大学机电工程与自动化学院PI', '上海机器人研究所副所长', '中国康复技术转化与产业促进专业委员会常委']} />
              <TeamCard img_src="/assets/2560/company/qianlaoshi.png" name="钱楷" badge="设计学专家" title="专家顾问 / 设计总监、文化学者、艺术家" desc={['韩国文化部高级访问学者', '韩国卡露文化高级艺术顾问', '人工智能应用场景设计与人机交互（UI/UX）设计专家', '李克强总理及多国政要世博会安保证章设计者']} />
              <TeamCard img_src="/assets/2560/company/gs.png" name="华续赟" badge="医学专家" title="专家顾问 / 教授、华山医院主任" desc={['现任中国医药教育协会康复装备发展促进中心主任委员', '中华医学会物理医学与康复学分会委员', '中国康复医学会脑血管病康复、疼痛康复、创伤康复专业委员会常委']} />
            </div>
          </motion.div>

        </div>

        <div className="flex-1 flex pr-28 justify-center">
          <img
            onClick={() => handClick('right')}
            src="/assets/2560/company/right.svg"
            className={`${s.left_arrow} relative cursor-pointer`}
          ></img>
        </div>
      </div>
      <div className="w-100 justify-center flex mb_100">
        <div onClick={() => setnum(-1)} className={`${s.slide} ${num == -1 ? 'bg-$primary' : 'bg-$gray'}  cursor-pointer`}></div>
        <div onClick={() => setnum(0)} className={`${s.slide} ${num == 0 ? 'bg-$primary' : 'bg-$gray'}  mx-5 cursor-pointer`}></div>
      </div>
    </div>
  );
}
