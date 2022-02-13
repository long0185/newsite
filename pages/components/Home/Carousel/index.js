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
  React.useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setNum((num) => (num + 1) % 2);
    }, 5000);
    return () => clearTimeout(ref.current);
  }, [num]);
  const handleClick = (direction) => {
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setNum(newNum % 2);
    }
    if (direction == "right") {
      const newNum = (num + 1) % 2;
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
      <motion.div
        className={`${s.img_wrap} flex relative`}
        animate={{ marginLeft: `${-100 * num}vw` }}
        transition={{ duration: 2 }}
      >
        <div className={`${s.img} relative`}>
          <img
            className={`${s.img} absolute`}
            src={"/assets/2560/home/banner_01.png"}
          />
          <motion.div
            className={` w-2 h-2 absolute ${s.title_wrap} flex flex-col`}
            variants={variants}
            animate={`${num == 0 ? "toTop" : "reset"}`}
          >
            <img
              className={`${s.title_text} img-fluid absolute`}
              src="/assets/2560/home/banner_1_text.png"
            />
            <img
              className={`${s.title_btn} absolute bottom-0 img-fluid`}
              src="/assets/2560/home/banner_1_btn.png"
            />
          </motion.div>
        </div>
        <div className={`${s.img} relative`}>
          <img
            className={`${s.img} absolute`}
            src={"/assets/2560/home/banner_02.png"}
          />
          <motion.div
            className={`w-2 h-2 absolute ${s.title_wrap_1}`}
            variants={variants}
            animate={`${num == 1 ? "toTop" : "reset"}`}
          >
            <div className={`${s.title_text} relative`}>
              <img
                className={s.title_text}
                src="/assets/2560/home/banner_2_text.png"
              />
            </div>
            <div className={`${s.title_btn} relative mt-5`}>
              <img
                className={s.title_btn}
                src="/assets/2560/home/banner_2_btn.png"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div
        className={`absolute w-screen ${s.icon_wrap} flex justify-between px-5`}
      >
        <div className={`${s.icon} relative cursor-pointer `}>
          {num == 1 ? (
            <img
              className={s.icon}
              // src="/assets/2560/home/left-arrow.svg"
              src="/assets/left-active.svg"
              onClick={() => handleClick("left")}
            />
          ) : (
            <img
              className={s.icon}
              src="/assets/left-active.svg"
              onClick={() => handleClick("left")}
            />
          )}
        </div>
        <div className={`${s.icon} relative cursor-pointer`}>
          {num == 2 ? (
            <img
              className={s.icon}
              // src="/assets/2560/home/right-arrow.svg"
              src="/assets/right-active.svg"
              onClick={() => handleClick("right")}
            />
          ) : (
            <img
              className={s.icon}
              src="/assets/right-active.svg"
              onClick={() => handleClick("right")}
            />
          )}
        </div>
      </div>
      <div className={`absolute w-100  ${s.bar_wrap} flex justify-center`}>
        <span className={`${s.bar}`}>
          <motion.div
            className="h-100 w-0 bg-$primary"
            animate={{ width: `${num == 1 ? "100%" : 0}` }}
            transition={{ duration: 3 }}
          ></motion.div>
        </span>
        <span className={`${s.bar}`}>
          <motion.div
            className="h-100 w-0 bg-$primary"
            animate={{ width: `${num == 2 ? "100%" : 0}` }}
            transition={{ duration: 3 }}
          ></motion.div>
        </span>
      </div>
    </div>
  );
};

export default Example;
