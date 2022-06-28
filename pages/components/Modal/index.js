import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import s from "./index.module.css";
const svg_1 = "/assets/2560/home/animate_1.svg";
const svg_5 = "/assets/2560/home/animate_5.svg";
const svg_2 = "/assets/2560/home/animate_2.svg";
const svg_3 = "/assets/2560/home/animate_3.svg";
const svg_4 = "/assets/2560/home/animate_4.svg";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <motion.div
        className={`${s.container} bg-gray-200 border-2`}
        style={{ display: "flex" }}
        animate={{
          translateX: -200,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <div className={`${s.content}`}>
          <motion.div
            className={`${s.wrap}`}
            animate={{
              translateX: 230,
              translateY: 235,
            }}
            transition={{
              duration: 1,
              times: 0.5,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <img src={svg_1} />
          </motion.div>
        </div>
        <div className={`${s.content}`} style={{ justifyContent: "flex-end" }}>
          <motion.div
            className={`${s.wrap}`}
            animate={{
              translateX: -230,
              translateY: 235,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <img src={svg_2} />
          </motion.div>
        </div>
        <div className={`${s.content}`}>
          <motion.div
            className={`${s.wrap}`}
            style={{ alignSelf: "flex-end" }}
            animate={{ translateX: 230, translateY: -230 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <img src={svg_3} />
          </motion.div>
        </div>
        <div className={`${s.content}`} style={{ justifyContent: "flex-end" }}>
          <motion.div
            className={`${s.wrap}`}
            style={{ alignSelf: "flex-end" }}
            animate={{ translateX: -230, translateY: -230 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <img src={svg_4} />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className={`${s.text} absolute`}
        style={{
          translateY: 300,
          opacity: 0,
        }}
        animate={{
          translateY: 4,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        <img src={svg_5} />
      </motion.div>
    </>
  );
};

export default App;
