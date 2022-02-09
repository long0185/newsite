import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import s from "./index.module.css";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Example = ({ banners = [], imgs = [] }) => {
  const [num, setNum] = useState(1);
  console.log("num", num);
  const ref = React.useRef(null);
  React.useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setNum((num) => (num + 1) % banners.length);
    }, 5000);
    return () => clearTimeout(ref.current);
  }, [num]);
  const handleClick = (direction) => {
    clearTimeout(ref.current);
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setNum(newNum % banners.length);
    }
    if (direction == "right") {
      const newNum = (num + 1) % banners.length;
      setNum(newNum);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className={`${s.img_wrap} flex relative`}
        style={{ width: `${banners.length}*100%` }}
        animate={{ marginLeft: `${-100 * num}vw` }}
        transition={{ duration: 2 }}
      >
        {banners.map((item, index) => (
          <div key={index} className={`w-screen h_1687 h_786 overflow-hidden relative bg-info`}>
            <img className={`hidden mobile:block w-screen h_786 img-fluid`} src={item} />
            <img className={`block mobile:hidden object-coverd`} src={item} />
          </div>
        ))}
      </motion.div>
      <div
        className={`absolute hidden mobile:block ${s.icon_wrap} flex flex-col justify-between px-5`}
      >
        {imgs.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                s.icon
              } relative cursor-pointer my-1 overflow-hidden ${
                num == index ? " border-$primary border-2" : ""
              } `}
            >
              <img
                className={s.icon}
                src={item}
                onClick={() => setNum((num) => (index) % 2)}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`absolute mobile:hidden ${s.m_icon_wrap} flex flex-col justify-between px-5`}
      >
        {imgs.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                s.icon
              } relative cursor-pointer my-1 overflow-hidden ${
                num == index ? " border-$primary border-2" : ""
              } `}
            >
              <img
                className={s.icon}
                src={item}
                onClick={() => setNum((num) => (index) % 2)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Example;
