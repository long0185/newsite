import * as React from "react";
import Navbar from "../../Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import s from "./index.module.css";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Example = () => {
  const [num, setNum] = useState(0);
  const ref = React.useRef(null);
  const [list, setList] = useState([]);
  React.useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setNum((num) => (num + 1) % list.length);
    }, 5000);
    return () => clearTimeout(ref.current);
  }, [num]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/homeone")
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
  const handleClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setNum(newNum % list.length);
    }
    if (direction == "right") {
      const newNum = (num + 1) % list.length;
      setNum(newNum);
    }
  };
  const variants = {
    toTop: (i) => ({
      marginTop: `450px`,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    }),
    reset: {
      marginTop: `600px`,
      opacity: 0.5,
      transition: {
        duration: 1,
        delay: 1.5,
      },
    },
  };

  return (
    <div className="relative overflow-hidden w-100 h-100">
      <Navbar />
      <motion.div style={{ height: "100%", width: `${100 * list.length}%` }} className={` flex relative`} animate={{ marginLeft: `${-100 * num}vw` }} transition={{ duration: 2 }}>
        {list.map((item, index) => (
          <div key={item.id} className={`${s.img} relative`}>
            <img className={`${s.img} absolute`} src={item.ImageUrl} />
            <motion.div className={`w-2 h-2 absolute ${index % 2 == 1 ? s.title_wrap_1 : s.title_wrap}`} variants={variants} animate={`${num == index ? "toTop" : "reset"}`}>
              <div className={`${s.title_text} relative`}>
                <img className={s.title_text} src={item.textImageUrl} />
              </div>
              <div className={`${s.title_btn} relative mt-5`}>
                <a href={item.link} target="_blank">
                  <img className={s.title_btn} src={item.btnImageUrl} />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <div className={`absolute w-screen ${s.icon_wrap} flex justify-between px-5`}>
        <div className={`${s.icon} relative cursor-pointer `}>
          <img className={s.icon} src="/assets/left-active.svg" onClick={() => handleClick("left")} />
        </div>
        <div className={`${s.icon} relative cursor-pointer`}>
          <img className={s.icon} src="/assets/right-active.svg" onClick={() => handleClick("right")} />
        </div>
      </div>
      <div className={`absolute w-100  ${s.bar_wrap} flex justify-center`}>
        {list.map((item, index) => (
          <span key={item.id} className={`${s.bar}`}>
            <motion.div className="h-100 w-0 bg-$primary" animate={{ width: `${num == index ? "100%" : 0}` }} transition={{ duration: 3 }}></motion.div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Example;
