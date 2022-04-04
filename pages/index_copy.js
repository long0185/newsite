import { motion } from "framer-motion";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import Home from "./components/Home";
import Carousel from "./components/Home/Carousel";
import SecondBanner from "./components/Home/SecondBanner";
import ThirdBanner from "./components/Home/ThirdBanner";
import s from "./index.module.css";

export default function index() {
  console.log("render");
  const [mtop, setMtop] = useState(0);
  const textRef = useRef(null);

  textRef.current = 0;
  const onWheel = useCallback(
    (event) => {
      console.log("current: ", textRef.current);
      const nowTimestamp = new Date().getTime();
      console.log("nowTimestamp: ", nowTimestamp);
      if (nowTimestamp - textRef.current > 1000) {
        console.log(`object`, nowTimestamp - textRef.current);
        textRef.current = nowTimestamp;
        changePage(event.deltaY);
      }
    },
    [mtop]
  );
  const changePage = (direction) => {
    console.log("change");
    if (direction > 0) {
      console.log(`mtop`, mtop);
      const newMtop = mtop - 1 < -2 ? -2 : mtop - 1;
      console.log(`newMtop`, newMtop);
      setMtop((top) => newMtop);
      console.log(`mtop`, mtop);
    } else {
      const newMtop = mtop + 1 > 0 ? 0 : mtop + 1;
      setMtop(newMtop);
      console.log("scroll up");
    }
  };

  return (
    <div className={s.wrap}>
      <motion.div className={`${s.content} flex-col flex`} onWheel={onWheel} animate={{ translateY: `${100 * mtop}vh` }} transition={{ duration: 1 }}>
        <motion.div>
          <Carousel />
        </motion.div>
        <motion.div>
          <SecondBanner />
        </motion.div>
        <motion.div>
          <ThirdBanner />
        </motion.div>
      </motion.div>
    </div>
  );
}
function setState(arg0) {
  throw new Error("Function not implemented.");
}
