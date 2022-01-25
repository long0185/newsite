import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import s from "./index.module.css";
import svg_1 from "assets/2560/home/animate_1.svg";
import svg_5 from "assets/2560/home/animate_5.svg";
import svg_2 from "assets/2560/home/animate_2.svg";
import svg_3 from "assets/2560/home/animate_3.svg";
import svg_4 from "assets/2560/home/animate_4.svg";
import Image from "next/image";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <motion.div
        className={`${s.container} bg-white`}
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
              translateX: 250,
              translateY: 250,
            }}
            transition={{
              duration: 1,
              times: 0.5,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <Image src={svg_1} layout="fill" />
          </motion.div>
        </div>
        <div className={`${s.content}`} style={{ justifyContent: "flex-end" }}>
          <motion.div
            className={`${s.wrap}`}
            animate={{
              translateX: -250,
              translateY: 250,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <Image src={svg_2} layout="fill" />
          </motion.div>
        </div>
        <div className={`${s.content}`}>
          <motion.div
            className={`${s.wrap}`}
            style={{ alignSelf: "flex-end" }}
            animate={{ translateX: 250, translateY: -250 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <Image src={svg_3} layout="fill" />
          </motion.div>
        </div>
        <div className={`${s.content}`} style={{ justifyContent: "flex-end" }}>
          <motion.div
            className={`${s.wrap}`}
            style={{ alignSelf: "flex-end" }}
            animate={{ translateX: -250, translateY: -250 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <Image src={svg_4} layout="fill" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className={`${s.text} relative mr-24`}
        animate={{
          translateY: -325,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        <Image layout="fill" src={svg_5} />
      </motion.div>
    </>
  );
};

export default App;
